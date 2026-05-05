'use client'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const MyProfile = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    const router = useRouter();

    useEffect(() => {
        if(!isPending && !user){
            router.replace("/login");
        }
    }, [user, isPending, router]);

    if(isPending){
        return <p className='text-center mt-10'>Loading...</p>;
    }

    if(!user) return null;

  return (
    <div>
       My profile
    </div>
  )
}

export default MyProfile
