import repo from "../DB/repo/categoryRepo.js";

const categoryCtrl = {
  getAllCategories: async (res) => {
    try {
      const categories = await repo.getAllCategories();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ message: "Error in getting all categories" });
    }
  },
  getCategoryByName: async (req, res) => {
    try {
      const obj = req.params;
      const { name } = obj;
      const category = await repo.getCategoryByName(name);
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ message: "Error in getting category by name" });
    }
  },
  getCategoryById: async (req, res) => {
    try {
      const obj = req.params;
      const { id } = obj;
      const category = await repo.getCategoryById(id);
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ message: "Error in getting category by id" });
    }
  },
  createCategory: async (req, res) => {
    try {
      const category = await repo.createCategory(req.body);
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ message: "Error in creating category" });
    }
  },
  updateCategory: async (req, res) => {
    try {
      const category = await repo.updateCategory(req.body);
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ message: "Error in updating category" });
    }
  },
};

export default categoryCtrl;
