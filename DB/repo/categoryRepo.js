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
    return await categoryModel.updateOne({ _id: category.id }, category.data);
  },
  addSubCategory: async (subCategory) => {
    return await categoryModel.updateOne(
      { _id: subCategory.category },
      { $push: { subcategories: subCategory } },
    );
  },
  addItem: async (item) => {
    return await categoryModel.updateOne(
      { _id: item.category },
      { $push: { items: item } },
    );
  },
};

export default categoryRepo;
