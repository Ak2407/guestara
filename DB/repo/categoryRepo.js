import categoryModel from "../models/categoryModel.js";

const categoryRepo = {
  getAllCategories: async () => {
    return await categoryModel.find({});
  },
  getCategoryByName: async (name) => {
    return await categoryModel.findOne({ name });
  },
  getCategoryById: async (id) => {
    return await categoryModel.findById(id);
  },
  createCategory: async (category) => {
    return await categoryModel.create(category);
  },
  updateCategory: async (category) => {
    return await categoryModel.findOneAndUpdate(
      { _id: category.id },
      category.data,
      { new: true },
    );
  },
  addSubCategory: async (subCategory) => {
    return await categoryModel.findOneAndUpdate(
      { _id: subCategory.category },

      { $push: { subcategories: subCategory } },
      { new: true },
    );
  },
  addItem: async (item) => {
    return await categoryModel.findOneAndUpdate(
      { _id: item.category },
      { $push: { items: item } },
      { new: true },
    );
  },
};

export default categoryRepo;
