import {prisma} from '../helpers/dbConnection.js';

// const user = {
//     name: "Kelly Silva Dantas Barboza",
//     email:"kellysdb25@example.com",
//     pass: "securepassword",
//     role: "user"
//     avatar: "https://example.com/avatar.jpg"
// }

export const createUser = async (user) => {
    return await prisma.user.create({
        data: user
    })
}

export const getUser = async () => {
    return await prisma.user.findMany()
}