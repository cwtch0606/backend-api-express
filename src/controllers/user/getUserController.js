import { getUser } from "../../models/userModels.js";

export async function getUserController(req, res) {

    const result = await getUser()

    res.json({
        message: "Users retrieved successfully",
        user: result
    });
}