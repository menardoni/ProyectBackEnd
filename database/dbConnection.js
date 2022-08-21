const mongoose =require ('mongoose')
require('dotenv').config()

const dbConnection = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_CNN ,{
            useNewUrlParser: true,
            useUnifiedTopology: true
            
            })
            console.log('Conexion exitosa a base de datos')

        
    } catch (error) {

        console.log(error)
        
    }
}

module.exports = {dbConnection}