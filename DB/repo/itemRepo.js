import itemModel from "../models/itemModel.js";

const itemRepo = {
  getAllItems: async () => {
    return await itemModel.find({});
  },
  getItemByName: async (name) => {
    return await itemModel.findOne({ name });
  },
  getItemById: async (id) => {
    return await itemModel.findById(id);
  },
  getItemByCategory: async (category) => {
    return await itemModel.find({ category });
  },
  getItemBySubCategory: async (subcategory) => {
    return await itemModel.find({ subcategory });
  },

  createItem: async (item) => {
    return await itemModel.create(item);
  },
  updateItem: async (item) => {
    return await itemModel.findByIdAndUpdate({ _id: item.id }, item.data, {
      new: true,
    });
  },
  searchItem: async (query) => {
    return await itemModel.find({
      name: { $regex: query, $options: "i" },
    });
  },
};

export default itemRepo;
