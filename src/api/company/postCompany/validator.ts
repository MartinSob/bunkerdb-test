import { NextFunction, Request, Response } from "express";
import { companyValidator } from "../../../validators/companyValidator";

export const postCompanyValidator = (req: Request, res: Response, next: NextFunction) => {
    const { error } = companyValidator.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next()
}