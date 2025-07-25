import {NextFunction, Request, Response} from "express";

const notFound = (req: Request, res: Response)=>{
    return res.status(404).json({
        status: 404,
        success: false,
        message: "API not Found!!",
        error: "Not Found"
    })
}

export default notFound;