import { getPublication } from "../../models/publicationModels.js";

export async function getPubliController(req, res) {

    const result = await getPublication()

    res.json({
        message: "Publications retrieved successfully",
        publication: result
    });
}