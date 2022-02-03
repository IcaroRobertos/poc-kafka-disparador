const {consumer2} = require("./kafka")

async function initSingle(){
  await consumer2.connect()

  await consumer2.subscribe({ topic: 'poc-kafka-single', fromBeginning: true })

  await consumer2.run({
    eachBatch: ({batch}) => {
      console.log(`Single consume = ${batch.messages.length}`)
    }
  })
}

initSingle()