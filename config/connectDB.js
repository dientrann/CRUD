const mongoose = require('mongoose')

async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/CRUD',{
            // useFindAndModify: false,
            useNewUrlParser: true,
            //useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log('Connect Success!')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connect};