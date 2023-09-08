import { redirect } from 'next/navigation'
import { initialProfile, db } from '@/lib'

export default async function SetupPage() {
  const profile = await initialProfile()

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  })

  if (server != null) {
    return redirect(`/servers/${server.id}`)
  }

  return (
    <div>Create a Server</div>
  )
}
