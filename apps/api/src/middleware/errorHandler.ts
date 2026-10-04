// apps/api/src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from "express";
import { AppError } from "../lib/error";
import { Prisma } from "../generated/prisma/client";

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  // Known, intentional errors
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: err.message,
      ...(err.details ? { details: err.details } : {}),
    });
  }

  // Prisma-specific errors
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      return res
        .status(409)
        .json({ error: "A record with this value already exists" });
    }
    if (err.code === "P2025") {
      return res.status(404).json({ error: "Record not found" });
    }
  }

  // Zod validation errors (if one slips through without using your validate middleware)
  if (err && typeof err === "object" && "issues" in err) {
    return res.status(400).json({ error: "Validation failed", details: err });
  }

  // Unknown/unexpected errors — log full detail, don't leak it to the client
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
}
