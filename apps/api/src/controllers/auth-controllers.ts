import { NextFunction, Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const signupController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // validate email and username
    const isExist = await prisma.user.findFirst({
      where: {
        OR: [{ username: req.body.username }, { gmail: req.body.gmail }],
      },
    });
    if (isExist)
      // create user
      console.log(req.body);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};
