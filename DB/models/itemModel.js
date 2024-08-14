import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
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
    default: 0,
  },
  baseAmount: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subcategory",
  },
});

itemSchema.pre("save", async function (next) {
  if (
    this.isNew ||
    this.isModified("baseAmount") ||
    this.isModified("discount")
  ) {
    try {
      // Calculate totalAmount
      this.totalAmount = this.baseAmount - this.discount;

      // Fetch category and set tax details
      if (!this.taxApplicable) {
        this.tax = 0;
      }
    } catch (error) {
      return next(error);
    }
  }
  next();
});

export default mongoose.model("items", itemSchema);
