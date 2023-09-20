'use client'

import Image from 'next/image'
import { X } from 'lucide-react'

import { UploadDropzone } from '@/lib'
import '@uploadthing/react/styles.css'

interface FileUploadProps {
  onChange: (url?: string) => void
  value: string
  endpoint: 'messageFile' | 'serverImage'
}

export function FileUpload({ endpoint, value, onChange }: FileUploadProps) {
  // Get the file extension
  const fileType = value?.split('.').pop()

  if (value && fileType !== 'pdf') {
    return (
      <div className='relative h-20 w-20'>
        <Image
          src={value}
          alt='Upload image'
          className='rounded-full'
          width={80}
          height={80}
        />

        {/* Button cancel */}
        <button
          onClick={() => onChange('')}
          className='absolute top-0 right-0 rounded-full p-1 bg-rose-500 text-white shadow-sm'
          type='button'
        >
          <X className='h-4 w-4' />
        </button>
      </div>
    )
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url)
      }}
      onUploadError={(error: Error) => {
        console.log(error)
      }}
    />
  )
}
