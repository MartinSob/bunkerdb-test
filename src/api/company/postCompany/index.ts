import { Request, Response } from "express";
import { Company } from "../../../models";

export async function postCompany(req: Request, res: Response) {
    const company: Company = await Company.create({ ...req.body });
    return res.status(200).json(company);
}