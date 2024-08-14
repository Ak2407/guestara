import repo from "../DB/repo/itemRepo.js";
import categoryRepo from "../DB/repo/categoryRepo.js";
import subcategoryRepo from "../DB/repo/subCategoryRepo.js";

const itemCtrl = {
  getAllItems: async (res) => {
    try {
      const items = await repo.getAllItems();
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ message: "Error in getting all items" });
    }
  },
  getItemByName: async (req, res) => {
    try {
      const obj = req.params;
      const { name } = obj;
      const item = await repo.getItemByName(name);
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ message: "Error in getting item by name" });
    }
  },
  getItemById: async (req, res) => {
    try {
      const obj = req.params;
      const { id } = obj;
      const item = await repo.getItemById(id);
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ message: "Error in getting item by id" });
    }
  },
  getItemByCategory: async (req, res) => {
    try {
      const obj = req.params;
      console.log(req.params);
      const { category } = obj;
      const item = await repo.getItemByCategory(category);
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ message: "Error in getting item by category" });
    }
  },
  getItemBySubCategory: async (req, res) => {
    try {
      const obj = req.params;
      const { subcategory } = obj;
      const item = await repo.getItemBySubCategory(subcategory);
      res.status(200).json(item);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error in getting item by sub category" });
    }
  },
  createItem: async (req, res) => {
    try {
      const item = await repo.createItem(req.body);
      // Add item to category and subcategory
      await categoryRepo.addItem(item);
      if (item.subcategory) {
        await subcategoryRepo.addItem(item);
      }
      res.status(201).json(item);
    } catch (error) {
      res.status(500).json({ message: "Error in creating item" });
    }
  },
  updateItem: async (req, res) => {
    try {
      const item = await repo.updateItem(req.body);
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ message: "Error in updating item" });
    }
  },

  searchItem: async (req, res) => {
    try {
      const obj = req.params;
      const { query } = obj;
      const item = await repo.searchItem(query);
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ message: "Error in searching item" });
    }
  },
};

export default itemCtrl;
