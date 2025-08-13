'use client';

import { useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '../../../lib/auth';

export default function AuthSuccess() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();

  const handleLogin = useCallback(async (userParam: string) => {
    try {
      const user = JSON.parse(userParam);
      login(user);
      
      // Redirect to home page after successful login
      setTimeout(() => {
        router.push('/');
      }, 1000);
    } catch (error) {
      console.error('Error parsing user data:', error);
      router.push('/login?error=invalid_user_data');
    }
  }, [login, router]);

  useEffect(() => {
    const userParam = searchParams.get('user');
    
    if (userParam) {
      handleLogin(userParam);
    } else {
      router.push('/login?error=no_user_data');
    }
  }, [searchParams, handleLogin, router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Authentication Successful!</h1>
          <p className="text-gray-600">You have been successfully logged in.</p>
        </div>
        
        <div className="animate-pulse">
          <p className="text-sm text-gray-500">Redirecting you to the home page...</p>
        </div>
      </div>
    </div>
  );
} 