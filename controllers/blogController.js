import blogModel from "../models/blogModel.js";
import slugify from "slugify";
import fs from "fs";

// Add Blog
// export const createBlogController = async (req, res) => {
//   try {
//     const { name, blog, slug, url } = req.fields;
//     const { image } = req.files;
//     // validation
//     switch (true) {
//       case !name:
//         return res.status(401).send({ error: "Name is required" });
//       case !blog:
//         return res.status(401).send({ error: "Blog is required" });
//       case !url:
//         return res.status(401).send({ error: "url is required" });
//       case !image && image.size > 1000000:
//         return res
//           .status(401)
//           .send({ error: "image is required and should be less then 1 mb" });
//     }
//     // generating copy of blog
//     const blogs = new blogModel({ ...req.fields, slug: slugify(name) });
//     // storing img
//     if (image) {
//       blogs.image.data = fs.readFileSync(image.path);
//       const base64Image = Buffer.from(blogs.image.data).toString("base64");
//       // console.log("base64Image", base64Image);
//       blogs.image.contentType = image.type;
//     }
//     await blogs.save();
//     res.status(200).send({
//       success: true,
//       message: "Blog Added Sucessfully",
//       // blogs: {
//       //   name,
//       //   slug,
//       //   blog,
//       //   url,
//       //   image,
//       // },
//       blogs,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       error,
//       message: "Error while creating blog",
//     });
//   }
// };
export const createBlogController = async (req, res) => {
  // console.log(req.file);
  try {
    const { name, blog, slug, url } = req.body;
    const image = req.file.path;
    // validation
    switch (true) {
      case !name:
        return res.status(401).send({ error: "Name is required" });
      case !blog:
        return res.status(401).send({ error: "Blog is required" });
      case !url:
        return res.status(401).send({ error: "url is required" });
      case !image && image.size > 1000000:
        return res
          .status(401)
          .send({ error: "image is required and should be less then 1 mb" });
    }
    // generating copy of blog
    const blogs = new blogModel({
      name,
      blog,
      slug: slugify(name),
      url,
      // name: req.file.originalname,
      // image: {
      //   data: req.file.buffer,
      //   contentType: req.file.mimetype,
      // },
      image,
    });
    await blogs.save();
    res.status(200).send({
      success: true,
      message: "Blog Added Sucessfully",
      blogs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while creating blog",
    });
  }
};

// update
// export const updateBlogController = async (req, res) => {
//   try {
//     const { name, blog, url } = req.fields;
//     const { image } = req.files;
//     switch (true) {
//       case !name:
//         return res.status(401).send({ error: "Name is required" });
//       case !blog:
//         return res.status(401).send({ error: "Blog is required" });
//       case !image && image.size > 1000000:
//         return res
//           .status(401)
//           .send({ error: "image is required and should be less then 1 mb" });
//     }
//     const blogs = await blogModel.findByIdAndUpdate(
//       req.params.bid,
//       { ...req.fields, slug: slugify(name) },
//       { new: true }
//     );
//     if (image) {
//       blogs.image.data = fs.readFileSync(image.path);
//       blogs.image.contentType = image.type;
//     }
//     await blogs.save();
//     res.status(200).send({
//       success: true,
//       message: "blog updated successfully",
//       blogs,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       error,
//       message: "error while updating blog",
//     });
//   }
// };
export const updateBlogController = async (req, res) => {
  try {
    const { name, blog, url, slug } = req.body;
    const image = req.file.path;
    switch (true) {
      case !name:
        return res.status(401).send({ error: "Name is required" });
      case !blog:
        return res.status(401).send({ error: "Blog is required" });
      case !image && image.size > 1000000:
        return res
          .status(401)
          .send({ error: "image is required and should be less then 1 mb" });
    }
    const blogs = await blogModel.findByIdAndUpdate(
      req.params.bid,
      { name, blog, url, slug: slugify(name), image },
      { new: true }
    );
    await blogs.save();
    res.status(200).send({
      success: true,
      message: "blog updated successfully",
      blogs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error while updating blog",
    });
  }
};

// fetch
// export const fetchBlogsController = async (req, res) => {
//   try {
//     const blogs = await blogModel
//       .find({})
//       .select("-image")
//       .sort({ createdAt: -1 });
//     res.status(200).send({
//       success: true,
//       totalBlogs: blogs.length,
//       message: "All blogs",
//       blogs,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status.send({
//       success: false,
//       error,
//       message: "error while fetching blogs",
//     });
//   }
// };

// fetch with image
export const fetchBlogsController = async (req, res) => {
  try {
    const blogs = await blogModel.find({}).sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      totalBlogs: blogs.length,
      message: "All blogs",
      blogs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error while fetching blogs",
    });
  }
};

// fetch single
export const fetchSingleBlogController = async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.bid);
    res.status(200).send({
      success: true,
      blog,
      message: "Single Blog Displayed",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error while displaying single blog",
    });
  }
};

// fetch image
// export const fetchBlogImageController = async (req, res) => {
//   try {
//     const blogImage = await blogModel.findById(req.params.bid).select("image");
//     const base64Image = Buffer.from(blogImage.image.data).toString("base64");
//     // console.log("base64Image =========>", base64Image);
//     if (blogImage.image.data) {
//       res.set("contentType", blogImage.image.contentType);
//       res.status(200).send(blogImage.image.data, {
//         success: true,
//         message: "Blog Image",
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       error,
//       message: "error while fetching blogs image",
//     });
//   }
// };

// delete blog
export const deleteBlogController = async (req, res) => {
  try {
    const blogs = await blogModel.findByIdAndDelete(req.params.bid);
    // .select("-image");
    res.status(200).send({
      success: true,
      message: "blog deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error while deleting blog",
    });
  }
};
