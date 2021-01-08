const mongoose = require('mongoose');
//MONGO_URI=mongodb+srv://jhonagapito:C0x3KQ8HcUGTkkGX@project-invoker.gguyd.mongodb.net/demoDb?retryWrites=true&w=majority
async function dbConnect() {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    console.log(`Mongo DB is now connected: ${connect.connection.host}`)
}

module.exports = dbConnect;
