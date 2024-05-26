const User = require("../models/UserData");
const Product = require("../models/Product");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
const { json } = require("express");

// _id: 1,
//         Name: "SILDENAFIL CITRATE",
//         des: "Kamagra Oral Jelly 100mg",
//         ImageSrc: "https://kam4uk.com/wp-content/uploads/2024/02/KAM4UK-Kamagra-Oral-Jelly.jpg",
//         riview: "6",
//         cutprice: 14.00,
//         Price: 100.00,
//         discount: "60%"

exports.createProduct = async (req, res) => {
    try {
        const { Name,
            Price,
            des,
            riview,
            cutprice,
            discount,
        } = req.body

        const Image = req.files.productImage

        // console.log("req.body in Product ", req.body);
        const id = req.user.id;

        const user = User.findById(id, {
            AccountType:"Admin"
        });

        // console.log("User : ", user);

        if (!user) {
            return res.status(400).send({
                success: false,
                message: "You Can not Create Product",
            })
        }

        if (!Name || !Image || !Price || !des || !riview || !cutprice || !discount ) {
            return res.status(403).send({
                success: false,
                message: "All Fields are Required",
            });
        }

        // Upload the Thumbnail to Cloudinary
        const ProductImage = await uploadImageToCloudinary(
            Image,
            process.env.FOLDER_NAME
        )

        // console.log("ProductImage", ProductImage);

        //Create a new Product with given data
        const newProduct = await Product.create({
            Name,
            ImageSrc: ProductImage.secure_url,
            Price,
            des,
            riview,
            cutprice,
            discount
        })

        res.status(200).json({
            success: true,
            data: newProduct,
            message: "Course Created Successfully",
        })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Failed to create course",
            error: error.message,
        })
    }
}

exports.editProduct = async (req, res) => {
    try {
        const { ProductId } = req.body
        const updates = req.body
        const product = await Product.findById(ProductId)

        const id = req.user.id;
        
        if (!product) {
            return res.status(404).json({ error: "Product not found" })
        }
        
        const user = User.findById(id, {
            AccountType:"Admin"
        });

        // console.log("User : ", user);

        if (!user) {
            return res.status(400).send({
                success: false,
                message: "You Can not Update Product",
            })
        }

        // If ProductImage Image is found, update it
        if (req.files) {
            // console.log("Product update")
            const Image = req.files.thumbnailImage
            const ProductImage = await uploadImageToCloudinary(
                Image,
                process.env.FOLDER_NAME
            )
            product.ImageSrc = ProductImage.secure_url
        }

        // update only the fields that are present in the request body
        for (const key in updates) {
            if (updates.hasOwnProperty(key)) {
                product[key] = updates[key];
            }
        }

        await product.save()

        const updatedProduct = await Product.findOne({
            _id: ProductId,
        })

        res.json({
            success: true,
            message: "Product updated successfully",
            data: updatedProduct,
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        })
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find()
            .populate("User")
            .exec()

        return res.status(200).json({
            success: true,
            data: allProducts,
        })
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            success: false,
            message: `Can't Fetch Product Data`,
            error: error.message,
        })
    }
}

exports.getProductDetails = async (req, res) => {
    try {
      const { ProductId } = req.body
      const _id = ProductId.productId;
      console.log("product id in backend ", _id)
      const ProductDetails = await Product.findOne({
        _id: _id,
      })
    //   .populate("User")
    //     .exec()
  
      if (!ProductDetails) {
        return res.status(400).json({
          success: false,
          message: `Could not find Product with id: ${ProductId}`,
        })
      }
  
      return res.status(200).json({
        success: true,
        data: ProductDetails
      })
    } catch (error) {
        console.log(error.message);
      return res.status(500).json({
        success: false,
        message: "Could not Fetch Product Details",
      })
    }
}

// Delete the Course
exports.deleteProduct = async (req, res) => {
    try {
      const { ProductId } = req.body
        
    //   console.log("ProductId", ProductId);
      // Find the course
      const product = await Product.findById(ProductId)
      if (!product) {
        return res.status(404).json({ 
            status: false,
            message: "Product not found" })
      }
  
      // Delete the course
      await Product.findByIdAndDelete(ProductId)
  
      return res.status(200).json({
        success: true,
        message: "Product deleted successfully",
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: "Server error. Product can not be delated, plase try agin....",
        error: error.message,
      })
    }
}
  