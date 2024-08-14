import express from "express";

const router = express.Router();

import categoryCtrl from "../controllers/categoryCtrl.js";
import subCategoryCtrl from "../controllers/subCategoryCtrl.js";
import itemCtrl from "../controllers/itemCtrl.js";

// Routes For Category
router.get("/category", categoryCtrl.getAllCategories);
router.get("/category/name/:name", categoryCtrl.getCategoryByName);
router.get("/category/id/:id", categoryCtrl.getCategoryById);
router.post("/category/create", categoryCtrl.createCategory);
router.put("/category/update", categoryCtrl.updateCategory);

// Routes For SubCategory
router.get("/subcategory", subCategoryCtrl.getAllSubCategories);
router.get("/subcategory/name/:name", subCategoryCtrl.getSubCategoryByName);
router.get("/subcategory/id/:id", subCategoryCtrl.getSubCategoryById);
router.post("/subcategory/create", subCategoryCtrl.createSubCategory);
router.put("/subcategory/update", subCategoryCtrl.updateSubCategory);

// Routes For Item
router.get("/item", itemCtrl.getAllItems);
router.get("/item/name/:name", itemCtrl.getItemByName);
router.get("/item/id/:id", itemCtrl.getItemById);
router.get("/item/category/:category", itemCtrl.getItemByCategory);
router.get("/item/subcategory/:subcategory", itemCtrl.getItemBySubCategory);
router.post("/item/create", itemCtrl.createItem);
router.put("/item/update", itemCtrl.updateItem);
router.get("/item/search/:query", itemCtrl.searchItem);

export default router;
