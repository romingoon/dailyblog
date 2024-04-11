import React from 'react';
import { useUser } from '@/lib/store/user';
import Image from 'next/image';

export default function Profile() {
  const user = useUser((state) => state.user);

  return (
    <Image
      src={user?.user_metadata.avatar_url}
      alt={user?.user_metadata.user_name}
      className="rounded-full w-10 h-10 ring-2 ring-orange-500"
      width={50}
      height={50}
    />
  );
}
