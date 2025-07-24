'use client';
import { Button } from '@/components/ui/button';
import { useDescope, useSession, useUser } from '@descope/nextjs-sdk/client';
import Image from 'next/image';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import GetStartedButton from './GetStartedButton';

function Header() {


  return (
    <div className='p-5 shadow-sm flex justify-between'>
      <div className='flex items-center gap-8'>
        <Image src='/logo.svg' alt='logo' width={180} height={100} />
        <div className='md:flex items-center gap-6 hidden'>
          <Link href='/' className='hover:scale-105 hover:text-primary cursor-pointer'>Home</Link>
          <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Services</h2>
          <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>About Us</h2>
        </div>
      </div>

      {/* <div>
        {isAuthenticated ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image
                src={user?.picture ?? '/default-user.png'}
                alt='user'
                width={40}
                height={40}
                className='rounded-full'
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href='/mybooking'>My Booking</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => logout()}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <GetStartedButton />
        )}
      </div> */}
    </div>
  );
}

export default Header;
