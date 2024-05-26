const { instance } = require("../config/razorpay");
const Product = require("../models/Product");
const User = require("../models/UserData");
const crypto = require("crypto");
const mongoose = require("mongoose");

// Capture the payment and initiate the Razorpay order
exports.capturePayment = async (req, res) => {
  const { total_amount } = req.body;

  // console.log("total_amount : ", total_amount);
  if (!total_amount) {
    return res.status(400).json({
      success: false,
      message: "All Fields are Mandatory",
    });
  }

  // console.log("inside backend");
  const options = {
    amount: total_amount * 100,
    // currency: "USD",
    currency: "INR",
    receipt: Math.random(Date.now()).toString(),
  };

  try {
    // Initiate the payment using Razorpay
    const paymentResponse = await instance.orders.create(options);
    // console.log(paymentResponse);
    return res.json({
      success: true,
      data: paymentResponse,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Could not initiate order." });
  }
};

// verify the payment
exports.verifyPayment = async (req, res) => {
  console.log("verify call")
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, idsAndQuantity, userId } = req.body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !idsAndQuantity || !userId) {
    return res.status(400).json({ success: false, message: "Incomplete payment details" });
  }

  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET).update(body.toString()).digest("hex");

  console.log("inside payment Verify");
  console.log("inside payment Verify2 : ",idsAndQuantity);

  if (expectedSignature === razorpay_signature) {
    try {
      const data = await addProduct(idsAndQuantity, userId);
      console.log("Offter addProduct ");
      return res.status(200).json({ success: true, message: "Payment Verified", data});
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, error: "Error adding products" });
    }
  } else {
    return res.status(400).json({ success: false, message: "Invalid signature" });
  }
};

// Add product in user data
const addProduct = async (productsWithQuantities, userId) => {
  if (!productsWithQuantities || !userId) {
    throw new Error("Please provide product ID and user ID");
  }

  console.log("Product id and quantity : ", productsWithQuantities);
  console.log("User id : ", userId);
  
  try {
    const user = await User.findById(userId);
    console.log("befor adding product in User : ", user);

    if (!user) {
      throw new Error("User not found");
      console.log("User not found");
    }

    for (const { _id, quantity } of productsWithQuantities) {
      // const privProduct = Product.findById(_id);
      // if(privProduct){
      //   console.log("PrivProduct : ", privProduct);
      // }
      user.Products.push({ product: _id, quantity, purchesDate: Date.now() });
      await Product.findByIdAndUpdate(_id, { $push: { User: user._id } });
    }
    await user.save();
    const Updateduser = await User.findById(userId).populate('Products.product').exec();
    console.log("Offter adding Product User : ", Updateduser);

    return Updateduser; // Indicate success
  } catch (error) {
    console.log(error);
    throw new Error("Error adding products to user");
  }
};

exports.tempdata = (req, res) => {
  console.log("inside backend");
  const { name } = req.body;
  
  return res.status(200).json({ success: true, message: "Data received successfully", data: name });
};
