import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";

// create category
export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({
        message: "name is required",
      });
    }
    // existing category
    const existCategory = await categoryModel.findOne({ name });
    if (existCategory) {
      return res.status(200).send({
        success: true,
        message: "Category already exist",
      });
    }
    // new category
    const category = await new categoryModel({
      name,
      slug: slugify(name),
    }).save();
    res.status(201).send({
      success: true,
      message: "new category created",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in category",
    });
  }
};

// update category
export const updateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const updateCategory = await categoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      status: true,
      updateCategory,
      message: "Category Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in category update",
    });
  }
};

// fetch Categories
export const fetchCategoryController = async (req, res) => {
  try {
    const findCategory = await categoryModel.find({});
    res.status(200).send({
      success: true,
      totalCategories: findCategory.length,
      findCategory,
      message: "all Category list",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      error,
      message: "error while fetching all categories",
    });
  }
};

// fetch single category
export const fetchSingleCategoryController = async (req, res) => {
  try {
    // const singleCategory = await categoryModel.findOne({
    //   slug: req.params.slug,
    // });
    const singleCategory = await categoryModel.findById(req.params.id);
    res.status(200).send({
      success: true,
      message: "Single category",
      singleCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in fetching single categories",
    });
  }
};

// delete category
export const deleteCategoryController = async (req, res) => {
  try {
    const deleteCategory = await categoryModel.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      message: "category deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in deleting category",
    });
  }
};
