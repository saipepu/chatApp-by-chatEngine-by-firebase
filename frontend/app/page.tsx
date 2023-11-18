'use client'
import Image from 'next/image'
import AuthPage from './AuthPage'
import { useState } from 'react';
import { User } from 'firebase/auth';
import { auth } from '@/firebase';
import ChatPage from './ChatPage'
import Loading from './Loading'

export default function Home() {
  const [user, setUser] = useState<User | null>();
  auth.onAuthStateChanged((user) => setUser(user));
  
  return (
    <main>
      {user === undefined ?
      <Loading /> : user === null ? <AuthPage /> : <ChatPage user={user} />}
    </main>
  )
}
