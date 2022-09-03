import { Request, Response } from "express";
import User from "../models/users";
import { auth } from "express-openid-connect";
import logger from "../lib/logger";

const authRedirect = async (req: Request, res: Response) => {
  // TODO: handle auth errors

  const authedUser = req.oidc?.user;

  let user = await User.findOne({ email: authedUser?.email });

  if (!user) {
    // TODO: error handling
    user = await User.create({
      email: authedUser?.email,
      firstName: authedUser?.given_name,
      lastName: authedUser?.family_name,
      events: [],
    });

    logger().info(`Created new user with email ${user.email}`);
  }

  res.json(JSON.stringify(user));
};

const show = (req: Request, res: Response) => {
  res.json({});
};

const index = (req: Request, res: Response) => {
  res.json([{}]);
};

const update = (req: Request, res: Response) => {
  res.json({});
};

const destroy = (req: Request, res: Response) => {
  res.json({});
};

export { authRedirect, show, index, update, destroy };
