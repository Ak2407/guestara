import repo from "../DB/repo/subCategoryRepo.js";
import categoryRepo from "../DB/repo/categoryRepo.js";

const subCategoryCtrl = {
  getAllSubCategories: async (req, res) => {
    try {
      const subCategories = await repo.getAllSubCategories();
      res.status(200).json(subCategories);
    } catch (error) {
      res.status(500).json({ message: "Error in getting all sub categories" });
    }
  },
  getSubCategoryByName: async (req, res) => {
    try {
      const obj = req.params;
      const { name } = obj;
      const subCategory = await repo.getSubCategoryByName(name);
      res.status(200).json(subCategory);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error in getting sub category by name" });
    }
  },
  getSubCategoryById: async (req, res) => {
    try {
      const obj = req.params;
      const { id } = obj;
      const subCategory = await repo.getSubCategoryById(id);
      res.status(200).json(subCategory);
    } catch (error) {
      res.status(500).json({ message: "Error in getting sub category by id" });
    }
  },
  createSubCategory: async (req, res) => {
    try {
      const subCategory = await repo.createSubCategory(req.body);
      // Add sub category to category
      await categoryRepo.addSubCategory(subCategory);
      res.status(201).json(subCategory);
    } catch (error) {
      res.status(500).json({ message: "Error in creating sub category" });
    }
  },
  updateSubCategory: async (req, res) => {
    try {
      const subCategory = await repo.updateSubCategory(req.body);
      res.status(200).json(subCategory);
    } catch (error) {
      res.status(500).json({ message: "Error in updating sub category" });
    }
  },
};

export default subCategoryCtrl;
