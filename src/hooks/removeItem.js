import axios from "axios";

export const removeItem = async (postId) => {
  try {
    // Check if the post with the given ID exists
    const existingPost = await axios.get(
      `http://localhost:3031/cart_list/${postId}`
    );

    if (existingPost.data) {
      // If the post exists
      const updatedQuantity = existingPost.data.quantity - 1;

      if (updatedQuantity > 0) {
        console.log(updatedQuantity);

        // If quantity is more than 2, update it
        const response = await axios.patch(
          `http://localhost:3031/cart_list/${postId}`,
          {
            ...existingPost.data,
            quantity: updatedQuantity,
            // You can include other properties to update here
          }
        );
        console.log("Post updated:", response.data);
      } else {
        // If quantity is 2 or less, delete the post
        const response = await axios.delete(
          `http://localhost:3031/cart_list/${postId}`
        );
        console.log("Post deleted:", response.data);
      }

      // Return true indicating the item was removed or updated
      return true;
    } else {
      // If the post doesn't exist, return false
      console.log("Post not found.");
      return false;
    }
  } catch (error) {
    console.error("Error modifying post:", error);
    // Return false in case of an error
    return false;
  }
};
