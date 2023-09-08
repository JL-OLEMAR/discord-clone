/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { currentUser, redirectToSignIn } from '@clerk/nextjs'
import { db } from './db'

export const initialProfile = async () => {
  const user = await currentUser()
  if (user == null) return redirectToSignIn()

  const profile = await db.profile.findUnique({
    where: { userId: user.id }
  })

  // Create new profile if no exist
  profile ?? await db.profile.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress
    }
  })

  return profile
}
