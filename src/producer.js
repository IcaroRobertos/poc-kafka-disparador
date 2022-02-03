const {producer} = require("./kafka")

function create1000(message){
  const arr = []

  for(let i = 0; i< 1000; i++){
    arr.push(message)
  }

  return arr
}

async function init(){
  await producer.connect()

  const message = { value: 'Hello KafkaJS user!' }

  setInterval(async () => {
    const promises = [producer.send({
      topic: "poc-kafka-batch",
      messages: create1000(message)
    })]
    
  
    for(let i = 0; i< 200; i++){
      promises.push(
        producer.send({
          topic: "poc-kafka-single",
          messages: [message]
        })
      )
    }

    await Promise.all(promises)

    console.log("produced 1000 single and batch")
  }, 1000)
}


init()