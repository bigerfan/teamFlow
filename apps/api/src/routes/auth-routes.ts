import { Request, Response, Router } from "express";
import { validate } from "../middleware/validate";
import { userSignupSchema, Routes } from "@teamFlow/shared";
import { signupController } from "../controllers/auth-controllers";

const router = Router();

router.post(Routes.auth.signup, validate(userSignupSchema), signupController);
router.get(Routes.auth.signup, (req: Request, res: Response) => {
  res.status(200).json({ heifjsa: "vmdksa" });
});

export default router;
