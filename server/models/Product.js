const mongoose = require("mongoose");

// _id: 1,
//         Name: "SILDENAFIL CITRATE",
//         des: "Kamagra Oral Jelly 100mg",
//         ImageSrc: "https://kam4uk.com/wp-content/uploads/2024/02/KAM4UK-Kamagra-Oral-Jelly.jpg",
//         riview: "6",
//         cutprice: 14.00,
//         Price: 100.00,
//         discount: "60%"

const productSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true,
    },
    des: {
        type: String,
        required: true,
        trim: true,
    },
    ImageSrc: {
        type: String,
        required: true,
    },
    riview: {
        type: String,
        required: true,
        trim: true,
    },
    discount: {
        type: String,
        required: true,
    },
    Price: {
        type: Number,
        required: true,
    },
    cutprice: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        // required: true,
    },
    User: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
});

module.exports = mongoose.model("Product", productSchema);