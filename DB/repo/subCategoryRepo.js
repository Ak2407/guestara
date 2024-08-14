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
    return await subcategoryModel.create(subcategory);
  },
  updateSubCategory: async (subcategory) => {
    return await subcategoryModel.findOneAndUpdate(
      { _id: subcategory.id },
      subcategory.data,
      { new: true },
    );
  },
  addItem: async (item) => {
    return await subcategoryModel.findOneAndUpdate(
      { _id: item.subcategory },
      { $push: { items: item } },
      { new: true },
    );
  },
};

export default subcategoryRepo;
