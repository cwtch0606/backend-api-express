import { createUser } from "../../models/userModels.js";

export async function createUserController(req, res) {
   
    const user = req.body;
    const result = await createUser(user)

    res.json({
        message: "User created successfully",
        user: result
    })
}
