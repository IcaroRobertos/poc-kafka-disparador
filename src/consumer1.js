const {consumer1} = require("./kafka")

async function initBatch(){
  await consumer1.connect()

  await consumer1.subscribe({ topic: 'poc-kafka-batch', fromBeginning: true })

  await consumer1.run({
    eachBatch: ({batch}) => {
      console.log(`Batch consume = ${batch.messages.length}`)
    }
  })
}


initBatch()
