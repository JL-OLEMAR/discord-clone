'use client'

import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'

import { cn } from '@/lib'
import { ActionTooltip } from './action-tooltip'

interface NavigationItemProps {
  id: string
  name: string
  imageUrl: string
}

export function NavigationItem({ id, name, imageUrl }: NavigationItemProps) {
  const params = useParams()
  const router = useRouter()

  const handleClick = () => {
    router.push(`/servers/${id}`)
  }

  return (
    <ActionTooltip
      side='right'
      align='center'
      label={name}
    >
      <button
        onClick={handleClick}
        className='group relative flex items-center'
        type='button'
      >
        <div className={cn(
          'absolute left-0 bg-primary rounded-r-full transition-all w-[4px]',
          params?.serverId !== id ? 'group-hover:h-[20px] h-[8px]' : 'h-[36px]'
        )}
        />

        <div
          className={cn(
            'relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden',
            params?.serverId === id && 'bg-primary/10 text-primary rounded-[16px]'
          )}
        >
          <Image
            src={imageUrl}
            alt={`${name} server channel icon`}
            width={48}
            height={48}
            priority={false}
            loading='lazy'
          />
        </div>
      </button>
    </ActionTooltip>
  )
}
