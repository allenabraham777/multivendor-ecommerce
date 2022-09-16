import Cart from "../models/cart.js";
import { updateProductInCart } from "../utils/cart.js";

const addToCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const { cartItems } = req.body;

    const existingCart = await Cart.findOne({ user: userId }).exec();
    let cart;
    if (!existingCart) {
      const newCart = new Cart({
        user: userId,
        cartItems,
      });
      cart = await newCart.save();
      if (!cart) throw new Error("Items not added to cart");
    } else {
      const promiseArray = [];
      cartItems.forEach((cartItem) => {
        const product = cartItem.product;
        const item = existingCart.cartItems.find(
          (item) => item.product == product
        );
        let condition, data;
        if (item) {
          condition = { user: req.user._id, "cartItems.product": product };
          data = {
            $set: {
              "cartItems.$": cartItem,
            },
          };
        } else {
          condition = { user: req.user._id };
          data = {
            $push: {
              cartItems: cartItem,
            },
          };
        }
        promiseArray.push(updateProductInCart(condition, data));
      });
      cart = await Promise.all(promiseArray);
      cart = cart[cart.length - 1];
    }

    return res.status(201).json({ cart: cart.cartItems });
  } catch (error) {
    console.error("addToCart: ", error);
    return res.status(500).json({ message: "Error adding items to cart" });
  }
};

export { addToCart };
