import express from "express";
const router = express.Router();
import userController from "../controllers/userController.js";
import tokenController from "../controllers/tokenController.js";

// create user to database
router.post(
  "/signUp",
  userController.createUser,
  tokenController.issueToken,
  (_req, res) => res.status(200).json(res.locals.authenticatedUser)
);

// sent registration email
router.post(
  "/confirmRegistration",
  userController.confirmRegistration,
  (_req, res) => res.status(200).send("Email sent successfully")
);

// login or signup with email
router.post("/emailConfirm", userController.confirmEmail, (_req, res) =>
  res.status(200).json({ result: res.locals.emailResult })
);

// confirm token from registration email
router.post("/tokenConfirm", tokenController.confirmToken, (_req, res) =>
  res.status(200).json({
    result: res.locals.result,
    useremail: res.locals.useremail,
  })
);

// login with password
router.post(
  "/signIn",
  userController.verifyUser,
  tokenController.issueToken,
  (_req, res) => res.status(200).json(res.locals.authenticatedUser)
);

// check if user is logged in
router.post("/verifyLoggedIn", tokenController.verifyToken, (_req, res) =>
  res
    .status(200)
    .json({ result: true, userInformation: res.locals.userInformation })
);

// reset password
router.post(
  "/changePassword",
  tokenController.verifyToken,
  userController.verifyUser,
  userController.changePassword,
  tokenController.issueToken,
  (_req, res) => res.status(200).json(res.locals.authenticatedUser)
);

export default router;
