import mongoose from 'mongoose'
const socioSchema = new mongoose.Schema({
    nroorden:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    nombre:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email:{
        type: String,
        required:true
    },
},{
    timestamps:true
})
export default mongoose.model('Socio', socioSchema)