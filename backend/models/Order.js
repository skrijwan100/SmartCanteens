const mongoose = require('mongoose')
const { Schema } = mongoose;
const oder = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderfood: {
        type: String,
        require: true

    },
    quantity: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    orderDate: {
        type: Date, default: Date.now
    },
}, { timestamps: true })

module.exports = mongoose.model('Order', oder);