const mongoose=require('mongoose');
const USER = process.env.MONGO_USER || 'lauirpd';
const PASS = process.env.MONGO_PASSWORD || 'sj';
const HOST = process.env.MONGO_HOST || 'cluster0.gdmaz.mongodb.net';
const DATABASE = process.env.DATABASE || 'Mintic';
const URI = `mongodb+srv://${USER}:${PASS}@${HOST}/${DATABASE}`;
mongoose.connect(URI)
    .then(db=>console.log('base de datos conectada'))
    .catch(error=>console.log(error))

module.exports=mongoose
