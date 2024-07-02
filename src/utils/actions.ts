'use server'

import { createClient } from "./supabase/server"
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


export const authWithGoogle = async () => {
  const supabase = createClient()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:3000/auth/callback',
    },
  })
  
  if (data.url) {
    redirect(data.url) // use the redirect API for your server framework
  }
  
  
}

export const authWithGithub = async () => {
  const supabase = createClient()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'http://example.com/auth/callback',
    },
  })
  
  if (data.url) {
    redirect(data.url) // use the redirect API for your server framework
  }

}

export const signInwithCredentials = async (formData: FormData) => {
  const supabase = createClient()
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/home', 'page')
  redirect('/home')

}

export const handleSignUp = async (formData: FormData) => {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/home', 'page')
  redirect('/home')
};


export const handleSignOut = async () => {
  const supabase = createClient()

  // Check if a user's logged in
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    await supabase.auth.signOut()
  }

  revalidatePath('/account', 'page')
  redirect('/account')
}