import { ModelUsers } from "../model/modelUsers.js";
export const getUsersControllers = async (req, res) => {
  try {
    const getUsers2 = await ModelUsers.getUsers();
    if (!getUsers2.success && getUsers2.error) {
      res.status(500).json(getUsers2);
    } else {
      res.status(200).json(getUsers2);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};
