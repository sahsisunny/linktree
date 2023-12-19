import { MongoClient } from 'mongodb'

if (!process.env.MONGO_URL) {
   throw new Error('Invalid/Missing environment variable: "MONGO_URL"')
}

const uri = process.env.MONGO_URL
const options = {}

let client
let clientPromise

client = new MongoClient(uri, options)
clientPromise = client.connect()

const typedClientPromise: Promise<MongoClient> = clientPromise

export default typedClientPromise
