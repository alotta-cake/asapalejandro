import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  
  if (!code) {
    return NextResponse.redirect(new URL('/login?error=no_code', request.url));
  }

  try {
    // In a real implementation, you would:
    // 1. Exchange the code for tokens with Google
    // 2. Get user info from Google
    // 3. Create or update user in your database
    // 4. Set session/JWT tokens
    
    // For now, we'll simulate a successful login
    const user = {
      id: 'google_' + Date.now(),
      email: 'user@example.com',
      name: 'Google User',
      provider: 'google' as const
    };

    // Redirect to success page with user data
    const redirectUrl = new URL('/auth/success', request.url);
    redirectUrl.searchParams.set('user', JSON.stringify(user));
    
    return NextResponse.redirect(redirectUrl);
  } catch (error) {
    console.error('Google OAuth error:', error);
    return NextResponse.redirect(new URL('/login?error=oauth_failed', request.url));
  }
} 