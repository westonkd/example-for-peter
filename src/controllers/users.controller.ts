import { Request, Response } from "express";
import User from "../models/users";
import { auth } from "express-openid-connect";
import logger from "../lib/logger";
import AuthenticationError from "../lib/AuthenticationError";

/* Note:
 * To simulate app sessions, copy the appSession cookie value and
 * and use it in Insomnia via the "manage cookies" menu
 */
const authRedirect = async (req: Request, res: Response) => {
  const authedUser = req.oidc?.user;

  if (!authedUser) throw new AuthenticationError("Failed to log in user");

  let user = await User.findOne({ email: authedUser?.email });

  if (!user) {
    user = await User.create({
      email: authedUser?.email,
      firstName: authedUser?.given_name,
      lastName: authedUser?.family_name,
      events: [],
    });

    logger().info(`Created new user with email ${user.email}`);
  }

  // TODO: Respond with a JWT that can be used as an access token
  // with the api
  res.json(JSON.stringify(user));
};

export { authRedirect };
