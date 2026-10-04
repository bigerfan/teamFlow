// apps/api/src/lib/AppError.ts
export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;
  public readonly details?: unknown;

  constructor(message: string, statusCode = 500, details?: unknown) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // marks this as an expected, handled error
    this.details = details;

    Object.setPrototypeOf(this, AppError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}

export const NotFoundError = (resource = "Resource") =>
  new AppError(`${resource} not found`, 404);

export const BadRequestError = (message = "Bad request", details?: unknown) =>
  new AppError(message, 400, details);

export const UnauthorizedError = (message = "Unauthorized") =>
  new AppError(message, 401);

export const ConflictError = (message = "Conflict") =>
  new AppError(message, 409);

export function toAppError(
  error: unknown,
  fallbackMessage = "Something went wrong",
): AppError {
  if (error instanceof AppError) return error; // already one, don't wrap twice
  const message = error instanceof Error ? error.message : fallbackMessage;
  return new AppError(message, 500, error);
}
