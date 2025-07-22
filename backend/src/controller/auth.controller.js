import { User } from "../models/user.model.js";

export const authCallback = async (req, res) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;

    const user = await User.findOne({ clerkId: id }); // Find user by clerkId
    if (!user) {
      // Create a new user if not found
      await User.create({
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error in /callback:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
