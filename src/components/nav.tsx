'use client';

// import { auth } from '@/lib/auth';
import LogoMdc from '../../public/next.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
// import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import Logout from './logout';

// type SessionUser = {
//   user?: {
//     name?: string;
//     image?: string;
//   };
// };

export default function Nav() {
  return (
    <nav className="max-w-[1200px] w-full mx-auto h-[80px] flex items-center justify-between p-5 border-b  border-gray-300">
      <div>
        <Link href="/">
          <Image
            width={30}
            height={30}
            src={LogoMdc}
            className=" w-12 h-12"
            alt="Logo La Minute De Code"
          />
        </Link>
      </div>
      {/* <Button variant={'outline'} size={'sm'}>
        <Avatar>
          <AvatarFallback>{session.user.name?.[0]} </AvatarFallback>
          {session.user.image ? (
            <AvatarImage
              src={session.user.image}
              alt={`${session.user.name ?? '-'}` + "'s profile picture"}
            />
          ) : null}
        </Avatar>
      </Button> */}
      <div className="flex items-center gap-4">
        {/* <span>{session?.user?.name ?? 'Invité'}</span>
        <Avatar>
          <AvatarFallback>
            {session?.user?.name?.[0]?.toUpperCase() ?? '?'}
          </AvatarFallback>
          <AvatarImage
            src={session?.user?.image ?? ''}
            alt={session?.user?.name ?? 'Avatar'}
          />
        </Avatar> */}
        <Logout />
      </div>
    </nav>
  );
}
