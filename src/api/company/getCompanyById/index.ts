import { Request, Response } from "express";
import { Company, Employee } from "../../../models";

export async function getCompanyById(req: Request, res: Response) {
    const { companyId } = req.params;
    const company: Company | null = await Company.findByPk(companyId, {
        include: Employee
    });
    return res.status(200).json(company);
}