const { MongoClient } = require('mongodb')

const connectDB = async() => {
    return await MongoClient.connect(process.env.MONGO_URI)
}

const handler = async(req, res) => {
    if (req.method === 'POST') {
        const { name, email, message } = req.body

        if (name && email && message) {
            const newMessage = {
                name,
                email,
                message
            }

            let client, db

            try {
                client = await connectDB()
                db = client.db('blog')
            } catch (error) {
                res.status(500).json({message: 'Could not conenct to db'})
                client.close()    
            }

            try {
                await db.collection('messages').insertOne(newMessage)                
            } catch (error) {
                res.status(500).json({message: 'Could not send message'})
                client.close() 
            }

            client.close()

            res.status(201).json({message: 'Message sent successfully'})

        } else {
            return res.status(422).json({message: 'Invalid Input'})
        }
    }
}

export default handler