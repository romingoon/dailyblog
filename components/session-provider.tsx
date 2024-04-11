'use client';
import React, { use, useEffect } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { useUser } from '@/lib/store/user';

export default function Sessionprovider() {
  const setUser = useUser((state) => state.setUser);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const readUserSession = async () => {
    const { data } = await supabase.auth.getSession();
    setUser(data.session?.user);
  };

  useEffect(() => {
    readUserSession();
    //eslint-disable-next-line
  }, []);

  return <></>;
}
