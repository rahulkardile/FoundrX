import { auth } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import AuthButtons from './AuthButtins' // Move signIn/signOut to a client component
import React from 'react'

const Navbar = async () => {
  const session = await auth(); // Runs on the server

  return (
    <header className='px-5 py-3 bg-white shadow-sm font-medium '>
      <nav className='flex justify-between items-center'>
        <Link href="/">
          <Image src="/logo.png" alt='logo' width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create"><span>Create</span></Link>

              {/* Use a separate client component for sign-out */}
              <AuthButtons isLoggedIn={true} />

              <Link href={`/user/${session.user.id}`}>
                {session.user.image && (
                  <Image src={session.user.image} alt="User" width={30} height={30} className="rounded-full" />
                )}
              </Link>
            </>
          ) : (
            <AuthButtons isLoggedIn={false} />
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
