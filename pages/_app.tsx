import 'focus-visible'
import React from 'react'
import '@yaireo/tagify/dist/tagify.css'
import '../styles/tailwind.css'

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from '@clerk/nextjs'
import Index from './index'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import SignInPage from './sign-in'

const publicPages: Array<string> = [
  '/',
  '/legal/privacy',
  '/pricing',
  '/contact-us',
  '/resources',
  '/careers',
  '/product',
  '/book-demo'
]

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const { pathname } = useRouter()

  const isPublicPage = publicPages.includes(pathname)

  return (
    <ClerkProvider {...pageProps}>
      {isPublicPage ? (
        <Component {...pageProps} />
      ) : (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            <Component {...pageProps} />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  )
}
