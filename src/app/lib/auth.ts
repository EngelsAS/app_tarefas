import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export async function getAuthSession() {
  return await getServerSession(authOptions);
}
