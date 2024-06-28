'use server'

import { signIn,signOut } from "./auth"

export const authWithGoogle = async () => {
  await signIn("google")
}

export const authWithGithub = async () => {
  await signIn("github")
}
