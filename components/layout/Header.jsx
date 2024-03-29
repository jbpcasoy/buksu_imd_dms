import LoginButton from "@/views/LoginButton";
import { initDropdowns } from "flowbite";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";
import Notifications from "../notification/Notifications";

export default function Header() {
  const { data: session } = useSession();
  useEffect(() => {
    initDropdowns();
  });

  return (
    <nav className='fixed top-0 z-70 w-full bg-CITLDarkBlue border-b border-CITLGray-main'>
      <div className='px-2 py-3 lg:px-5 lg:pl-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start'>
            <button
              data-drawer-target='logo-sidebar'
              data-drawer-toggle='logo-sidebar'
              data-drawer-backdrop='false'
              aria-controls='logo-sidebar'
              type='button'
              className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            >
              <span className='sr-only'>Open sidebar</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
                ></path>
              </svg>
            </button>
            <Link href='/' className='flex ml-1 md:mr-24'>
              <img
                src='/IMAGES/Logo.png'
                className='h-8 sm:h-10'
                alt='BukSUIMD Logo'
              />
            </Link>
          </div>

          <div className='flex items-center'>
            <div className='flex items-center ml-1  gap-3'>
              <Notifications />

              <div>
                <button
                  type='button'
                  className='flex text-sm text-CITLWhite '
                  aria-expanded='false'
                  data-dropdown-toggle='dropdown-user'
                >
                  <span className='sr-only'>Open user menu</span>
                  <img
                    className='w-8 h-8 rounded-full object-center object-cover'
                    src={session?.user?.image}
                    alt='user photo'
                  />
                </button>
              </div>
              <div
                className={` z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100  shadow dark:bg-gray-700 dark:divide-gray-600 rounded-lg ${
                  !session ? "w-48" : ""
                }`}
                id='dropdown-user'
              >
                {session && (
                  <div className='px-4 py-3 ' role='none'>
                    <p
                      className='text-sm text-gray-900 dark:text-white'
                      role='none'
                    >
                      {session?.user?.name}
                    </p>
                    <p
                      className='text-sm font-medium text-gray-900 truncate dark:text-gray-300'
                      role='none'
                    >
                      {session?.user?.email}
                    </p>
                  </div>
                )}
                <ul className='py-1' role='none'>
                  <li>
                    <Link
                      href='/me'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                      role='menuitem'
                    >
                      Profile
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                      role='menuitem'
                    >
                      Settings
                    </Link>
                  </li> */}

                  <li>
                    <LoginButton onSignIn={signIn} onSignOut={signOut} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
