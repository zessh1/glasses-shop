import axios from "axios";

export const addToCart = async (post) => {
  try {
    let existingPost = false;
    try {
      existingPost = await axios.get(
        `http://localhost:3031/cart_list/${post.id}`
      );
    } catch (error) {
      existingPost = false;
    }
    if (existingPost.data) {
      const response = await axios.patch(
        `http://localhost:3031/cart_list/${post.id}`,
        { ...existingPost.data, quantity: existingPost.data.quantity + 1 }
      );
    } else {
      console.log("bbb");
      const response = await axios.post("http://localhost:3031/cart_list", {
        ...post,
        quantity: 1,
      });
    }
  } catch (error) {
    console.error("Error adding or updating post:", error);
  }
};
