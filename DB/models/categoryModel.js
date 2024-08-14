import mongoose from "mongoose";
import subcategoryModel from "./subcategoryModel.js";

const categorySchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
  },
  image: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  description: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  taxApplicable: {
    type: Boolean,
    required: true,
  },
  tax: {
    type: Number,
    required: true,
  },
  taxType: {
    type: String,
    required: true,
  },
  subcategories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subcategory",
    },
  ],
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "item",
    },
  ],
});

categorySchema.post("save", async function (cat) {
  try {
    await subcategoryModel.updateMany({
      taxApplicable: cat.taxApplicable,
      tax: cat.tax,
    });
  } catch (error) {
    console.error("Error updating subcategories after category update:", error);
  }
});

export default mongoose.model.category ||
  mongoose.model("category", categorySchema);
