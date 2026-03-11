import { createUser } from "../../models/userModels.js";


export async function createUserController(req, res) {
   
    const user = {
        avatar: "https://github.com/kellysdb",
        name: "Kelly Silva",
        email: "kellysdb25@gmail.com",
        password: "12345678"

    }

    const result = await createUser(user)

    res.json({
        message: "User created successfully",
        user: result
    });
}