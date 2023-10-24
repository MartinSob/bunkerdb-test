import { Request, Response } from "express";
import { Company, Employee } from "../../../models";

export async function getCompanies(req: Request, res: Response) {
    const allComapnies: Company[] = await Company.findAll({ include: Employee });
    return res.status(200).json(allComapnies);
}