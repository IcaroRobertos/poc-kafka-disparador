const {Kafka} = require("kafkajs")

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
})


const admin = kafka.admin()
const producer = kafka.producer()
const consumer1 = kafka.consumer({groupId: "poc-kafka-1"})
const consumer2 = kafka.consumer({groupId: "poc-kafka-2"})

module.exports = {
  admin,
  producer,
  consumer1,
  consumer2
}