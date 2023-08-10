import { Router } from "express";
import LoginController from "../controller/login.controller";
import LoginService from "../service/login.service";

const router = Router();
const loginController = new LoginController();

router.post('/login', loginController.login);
router.get('/health', loginController.health);
router.post('/signin', loginController.signIn);

export default router;