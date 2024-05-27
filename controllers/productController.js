import productModel from "../models/productModel.js";
import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";
import fs from "fs";

// create product
// export const createProductController = async (req, res) => {
//   try {
//     const {
//       name,
//       category,
//       price,
//       quantity,
//       short_desc,
//       desc,
//       shipping,
//       slug,
//     } = req.fields;
//     const { image } = req.files;

//     // validation
//     switch (true) {
//       case !name:
//         return res.status(401).send({ error: "Name is required" });
//       case !category:
//         return res.status(401).send({ error: "category is required" });
//       case !price:
//         return res.status(401).send({ error: "price is required" });
//       case !quantity:
//         return res.status(401).send({ error: "quantity is required" });
//       case !short_desc:
//         return res.status(401).send({ error: "short_desc is required" });
//       case !desc:
//         return res.status(401).send({ error: "desc is required" });
//       case !image && image.size > 1000000:
//         return res
//           .status(401)
//           .send({ error: "image is required and should be less then 1 mb" });
//     }
//     // generating copy of product
//     const product = new productModel({
//       ...req.fields,
//       slug: slugify(name),
//     });
//     // storing img
//     if (image) {
//       product.image.data = fs.readFileSync(image.path);
//       product.image.contentType = image.type;
//     }
//     await product.save();
//     res.status(200).send({
//       success: true,
//       message: "Product Created Successfully",
//       // product: {
//       //   name,
//       //   slug,
//       //   category,
//       //   price,
//       //   quantity,
//       //   short_desc,
//       //   desc,
//       //   image,
//       // },
//       product,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       error,
//       message: "error while creating product",
//     });
//   }
// };
export const createProductController = async (req, res) => {
  try {
    const {
      name,
      category,
      price,
      quantity,
      short_desc,
      desc,
      shipping,
      slug,
    } = req.body;
    const image = req.file.path;

    // validation
    switch (true) {
      case !name:
        return res.status(401).send({ error: "Name is required" });
      case !category:
        return res.status(401).send({ error: "category is required" });
      case !price:
        return res.status(401).send({ error: "price is required" });
      case !quantity:
        return res.status(401).send({ error: "quantity is required" });
      case !short_desc:
        return res.status(401).send({ error: "short_desc is required" });
      case !desc:
        return res.status(401).send({ error: "desc is required" });
      case !image && image.size > 1000000:
        return res
          .status(401)
          .send({ error: "image is required and should be less then 1 mb" });
    }
    // generating copy of product
    const product = new productModel({
      name,
      category,
      price,
      quantity,
      short_desc,
      desc,
      slug: slugify(name),
      image,
    });
    await product.save();
    res.status(200).send({
      success: true,
      message: "Product Created Successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error while creating product",
    });
  }
};

// update
// export const updateProductController = async (req, res) => {
//   try {
//     const {
//       name,
//       category,
//       price,
//       quantity,
//       short_desc,
//       desc,
//       shipping,
//       slug,
//     } = req.fields;
//     const { image } = req.files;

//     // validation
//     switch (true) {
//       case !name:
//         return res.status(401).send({ error: "Name is required" });
//       case !category:
//         return res.status(401).send({ error: "category is required" });
//       case !price:
//         return res.status(401).send({ error: "price is required" });
//       case !quantity:
//         return res.status(401).send({ error: "quantity is required" });
//       case !short_desc:
//         return res.status(401).send({ error: "short_desc is required" });
//       case !desc:
//         return res.status(401).send({ error: "desc is required" });
//       case !image && image.size > 1000000:
//         return res
//           .status(401)
//           .send({ error: "image is required and should be less then 1 mb" });
//     }
//     // generating copy of product
//     const product = await productModel.findByIdAndUpdate(
//       req.params.pid,
//       { ...req.fields, slug: slugify(name) },
//       { new: true }
//     );
//     // storing img
//     if (image) {
//       product.image.data = fs.readFileSync(image.path);
//       product.image.contentType = image.type;
//     }
//     await product.save();
//     res.status(200).send({
//       success: true,
//       message: "Product updated Sucessfully",
//       product,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       error,
//       message: "error while creating product",
//     });
//   }
// };
export const updateProductController = async (req, res) => {
  try {
    const {
      name,
      category,
      price,
      quantity,
      short_desc,
      desc,
      shipping,
      slug,
    } = req.body;
    const { image } = req.file.path;
    // validation
    switch (true) {
      case !name:
        return res.status(401).send({ error: "Name is required" });
      case !category:
        return res.status(401).send({ error: "category is required" });
      case !price:
        return res.status(401).send({ error: "price is required" });
      case !quantity:
        return res.status(401).send({ error: "quantity is required" });
      case !short_desc:
        return res.status(401).send({ error: "short_desc is required" });
      case !desc:
        return res.status(401).send({ error: "desc is required" });
      case !image && image.size > 1000000:
        return res
          .status(401)
          .send({ error: "image is required and should be less then 1 mb" });
    }
    // generating copy of product
    const product = await productModel.findByIdAndUpdate(
      req.params.pid,
      {
        name,
        category,
        price,
        quantity,
        short_desc,
        desc,
        slug: slugify(name).image,
      },
      { new: true }
    );
    await product.save();
    res.status(200).send({
      success: true,
      message: "Product updated Sucessfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error while creating product",
    });
  }
};

// fetch
// export const fetchProductController = async (req, res) => {
//   try {
//     const products = await productModel
//       .find({})
//       .select("-image")
//       .populate("category")
//       // .limit(12)
//       .sort({ createdAt: -1 });
//     res.status(200).send({
//       success: true,
//       totalProducts: products.length,
//       message: "All products",
//       products,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       error,
//       message: "error while fetching products",
//     });
//   }
// };
export const fetchProductController = async (req, res) => {
  try {
    const products = await productModel
      .find({})
      .populate("category")
      // .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      totalProducts: products.length,
      message: "All products",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error while fetching products",
    });
  }
};

// fetch single
// export const fetchSingleProductController = async (req, res) => {
//   try {
//     const product = await productModel
//       // .findOne({
//       //   slug: req.params.slug,
//       // })
//       .findById(req.params.pid)
//       .select("-image")
//       .populate("category");
//     console.log(product);
//     res.status(200).send({
//       success: true,
//       product,
//       message: "Single Product Displayed",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       error,
//       message: "error while diplaying single product",
//     });
//   }
// };
export const fetchSingleProductController = async (req, res) => {
  try {
    const product = await productModel
      .findById(req.params.pid)
      .populate("category")
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      message: "Single Product Displayed",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error while diplaying single product",
    });
  }
};

// delete
export const deleteProductController = async (req, res) => {
  try {
    const deleteProduct = await productModel.findByIdAndDelete(req.params.pid);
    // .select("-image");
    res.status(200).send({
      success: true,
      message: "product deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while deleting product",
      error,
    });
  }
};

// pagination
export const productListController = async (req, res) => {
  try {
    const perPage = 6;
    const page = req.params.page ? req.params.page : 1;
    const products = await productModel
      .find({})
      .select("-image")
      .skip((page - 1) * perPage)
      .limit(perpage)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while listing product",
      error,
    });
  }
};

// search
export const searchProductController = async (req, res) => {
  try {
    const { keyword } = req.params;
    const result = await productModel
      .find({
        $or: [
          { name: { $regex: keyword, $options: "i" } },
          { description: { $regex: keyword, $options: "i" } },
        ],
      })
      .select("-image");
    res.json(result);
    // res.status(200).send({
    //   success: true,
    //   result,
    // });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while searching product",
      error,
    });
  }
};

// fetch product using category
export const productCategoryController = async (req, res) => {
  try {
    // const category = await categoryModel.findOne({slug: req.params.slug});
    const category = await categoryModel.findById(req.params.id);
    const products = await productModel.find({ category }).populate("category");
    res.status(200).send({
      success: true,
      message: "Products using category",
      products,
    });
  } catch (error) {
    console.log(object);
    res.status(500).send({
      success: false,
      message: "error while fetching products using category",
      error,
    });
  }
};
