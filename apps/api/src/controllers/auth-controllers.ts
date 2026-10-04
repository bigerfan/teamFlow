import { NextFunction, Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { AppError, BadRequestError, toAppError } from "../lib/error";

export const signupController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // validate email and username

    res.status(200).json({ success: true });
  } catch (error) {
    throw toAppError(error);
  }
};
