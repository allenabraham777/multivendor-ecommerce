import Cart from "../models/cart.js";

const updateProductInCart = async (condition, data) => {
  try {
    return await Cart.findOneAndUpdate(condition, data, {
      upsert: true,
      new: true,
    }).exec();
  } catch (error) {
    throw error;
  }
};

export { updateProductInCart };
