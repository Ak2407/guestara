import subcategoryModel from "../models/subcategoryModel.js";

const subcategoryRepo = {
  getAllSubCategories: async () => {
    return await subcategoryModel.find({});
  },
  getSubCategoryByCategoryId: async (categoryId) => {
    return await subcategoryModel.find({ "category._id": categoryId });
  },

  getSubCategoryByName: async (name) => {
    return await subcategoryModel.findOne({ name });
  },
  getSubCategoryById: async (id) => {
    return await subcategoryModel.findById(id);
  },
  createSubCategory: async (subcategory) => {
    console.log(subcategory);
    return await subcategoryModel.create(subcategory);
  },
  updateSubCategory: async (subcategory) => {
    return await subcategoryModel.updateOne(
      { _id: subcategory.id },
      subcategory.data,
    );
  },
  addItem: async (item) => {
    return await subcategoryModel.updateOne(
      { _id: item.subcategory },
      { $push: { items: item } },
    );
  },
};

export default subcategoryRepo;
