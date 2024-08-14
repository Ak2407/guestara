import mongoose from "mongoose";
import categoryModel from "./categoryModel.js";

const subcategorySchema = new mongoose.Schema({
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
  },
  tax: {
    type: Number,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "item",
    },
  ],
});

subcategorySchema.pre("save", async function (next) {
  if (this.isNew) {
    try {
      if (!this.taxApplicable || !this.tax) {
        const category = await categoryModel.findById(this.category).exec();
        if (category) {
          // Set default tax details
          if (!this.taxApplicable) {
            this.taxApplicable = category.taxApplicable;
          }
          if (!this.tax) {
            this.tax = category.tax;
          }
        }
      }
    } catch (error) {
      return next(error);
    }
  }
  next();
});

export default mongoose.model.subcategory ||
  mongoose.model("subcategory", subcategorySchema);
