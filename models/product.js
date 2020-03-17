const mongoose = require('mongoose');
const { ObjectId} = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        description: {
            type: String,
            required: true,
            maxlangth: 300
        },
        price: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 6
        },
        category: {
            type: ObjectId,
            ref: 'Category',
            required: true
        },
        quantity: {
            type: Number
        },
        sold: {
            type: Number,
            default: 0
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        file: { //Add audio files here
            required: false
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Product', productSchema);