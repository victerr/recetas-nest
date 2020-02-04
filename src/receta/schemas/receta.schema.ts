import * as mongoose from 'mongoose';

export const RecetaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        trim: true,
        required: true,
        minlength: 5
    },
    comensales: {
        type: Number,
        required: true,
        min: 1
    },
    preparacion: {
        type: Number,
        required: true,
        min: 1
    },
    coccion: {
        type: Number,
        required: true,
        min: 0
    },
    descripcion: {
        type: String,
        trim: true,
        required: true
    },
    imagen: {
        type: String,
        required: false
    },
    elementos: [{
        ingrediente: {
            type: String,
            required: true,
            min: 3
        },
        cantidad: {
            type: Number,
            min: 1,
            required: true
        },
        unidad: {
            type: String,
            required: true,
            minlength: 5
        }
    }]
});