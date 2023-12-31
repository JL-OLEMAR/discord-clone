import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { esES } from '@clerk/localizations'

import { ModalProvider, ThemeProvider } from '@/components/providers'
import { cn } from '@/lib/utils'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Team Chat Application',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    // Clerk is used to authenticate users and manage sessions
    <ClerkProvider localization={esES}>
      <html lang='es' suppressHydrationWarning>
        <body className={cn(
          openSans.className,
          'bg-white dark:bg-[#313338]'
        )}
        >
          {/* ThemeProvider is used to set the theme  */}
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            storageKey='discord-theme'
          >
            {/* ModalProvider is used to open modals */}
            <ModalProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
