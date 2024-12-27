"use client"

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';

const SocialSignIn = () => {
    const router = useRouter();
    const { data: session, status } = useSession();

    console.log( status, session);


    const handleSocialLogin = async (provider) => {
        console.log('called');
        const resp = await signIn(provider, { redirect: false });
    };

    useEffect(() => {
        if (status === 'authenticated') {
            router.push('/');
        }
    }, [status, router]); 

    return (
        <div>
            <div className="mt-4">
                <p className="text-center text-sm text-gray-600">Or sign in with</p>
                <div className="flex justify-center space-x-4 mt-3">
                    <button 
                        onClick={() => handleSocialLogin('google')}
                        className="btn btn-circle btn-warning"
                    >
                       <FaGoogle className="text-xl" />
                    </button>

                
                </div>
            </div>
        </div>
    );
};

export default SocialSignIn;
