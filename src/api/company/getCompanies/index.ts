import { Request, Response } from "express";
import { Company, Employee } from "../../../models";

export async function getCompanies(req: Request, res: Response) {
    const allCompanies: Company[] = await Company.findAll({ include: Employee });
    return res.status(200).json(allCompanies);
}