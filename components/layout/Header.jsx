import LoginButton from "@/views/LoginButton";
import { initDropdowns } from "flowbite";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

export default function Header() {
  const { data: session } = useSession();
  useEffect(() => {
    initDropdowns();
  });

  useEffect(() => {
    initDropdowns();
  });

  return (
    <nav className='fixed top-0 z-50 w-full bg-CITLDarkBlue border-b border-CITLGray-main'>
      <div className='px-0 py-3 lg:px-5 lg:pl-3'>
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
            <Link href='/' className='flex ml-2 md:mr-24'>
              <img
                src='/IMAGES/Logo.png'
                className='h-8 sm:h-10'
                alt='BukSUIMD Logo'
              />
            </Link>
          </div>

          <div className='flex items-center'>
            <div className='flex items-center mr-3 gap-3'>
              <div>
                <button
                  id='dropdownNotificationButton'
                  data-dropdown-toggle='dropdownNotification'
                  className='inline-flex items-center text-sm mt-2 font-medium text-center text-CITLWhite hover:text-CITLOrange focus:outline-none dark:hover:text-white dark:text-gray-400'
                  type='button'
                >
                  <svg
                    className='w-6 h-6'
                    aria-hidden='true'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z'></path>
                  </svg>
                  <div className='relative flex '>
                    <div className='absolute inline-flex items-center justify-center w-2 h-2 text-xs font- text-white bg-red-500 border-2 border-white rounded-full -top-3 right-1 dark:border-gray-900'></div>
                  </div>
                </button>

                <div
                  id='dropdownNotification'
                  className='z-20 hidden w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700'
                  aria-labelledby='dropdownNotificationButton'
                >
                  <div className='block px-4 py-2 font-medium text-left text-gray-700 rounded-t-lg bg-CITLGray-light dark:bg-gray-800 dark:text-white'>
                    Notifications
                  </div>
                  <div className='divide-y divide-gray-100 dark:divide-gray-700'>
                    <a
                      href='#'
                      className='flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700'
                    >
                      <div className='flex-shrink-0'>
                        <img
                          className='rounded-full w-11 h-11'
                          src='/IMAGES/2x2.png'
                          alt='Jese image'
                        />
                        <div className='absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800'>
                          <svg
                            className='w-3 h-3 text-white'
                            aria-hidden='true'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z'></path>
                            <path d='M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z'></path>
                          </svg>
                        </div>
                      </div>
                      <div className='w-full pl-3'>
                        <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
                          New message from{" "}
                          <span className='font-semibold text-gray-900 dark:text-white'>
                            Jese Leos
                          </span>
                          : {`"Hey, what's up? All set for the presentation?"`}
                        </div>
                        <div className='text-xs text-blue-600 dark:text-blue-500'>
                          a few moments ago
                        </div>
                      </div>
                    </a>
                    <a
                      href='#'
                      className='flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700'
                    >
                      <div className='flex-shrink-0'>
                        <img
                          className='rounded-full w-11 h-11'
                          src='/IMAGES/2x2.png'
                          alt='Joseph image'
                        />
                        <div className='absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-800'>
                          <svg
                            className='w-3 h-3 text-white'
                            aria-hidden='true'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z'></path>
                          </svg>
                        </div>
                      </div>
                      <div className='w-full pl-3'>
                        <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
                          <span className='font-semibold text-gray-900 dark:text-white'>
                            Joseph Mcfall
                          </span>{" "}
                          and{" "}
                          <span className='font-medium text-gray-900 dark:text-white'>
                            5 others
                          </span>{" "}
                          started following you.
                        </div>
                        <div className='text-xs text-blue-600 dark:text-blue-500'>
                          10 minutes ago
                        </div>
                      </div>
                    </a>
                    <a
                      href='#'
                      className='flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700'
                    >
                      <div className='flex-shrink-0'>
                        <img
                          className='rounded-full w-11 h-11'
                          src='/IMAGES/2x2.png'
                          alt='Bonnie image'
                        />
                        <div className='absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-800'>
                          <svg
                            className='w-3 h-3 text-white'
                            aria-hidden='true'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                              clip-rule='evenodd'
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className='w-full pl-3'>
                        <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
                          <span className='font-semibold text-gray-900 dark:text-white'>
                            Bonnie Green
                          </span>{" "}
                          and{" "}
                          <span className='font-medium text-gray-900 dark:text-white'>
                            141 others
                          </span>{" "}
                          love your story. See it and view more stories.
                        </div>
                        <div className='text-xs text-blue-600 dark:text-blue-500'>
                          44 minutes ago
                        </div>
                      </div>
                    </a>
                    <a
                      href='#'
                      className='flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700'
                    >
                      <div className='flex-shrink-0'>
                        <img
                          className='rounded-full w-11 h-11'
                          src='/IMAGES/2x2.png'
                          alt='Leslie image'
                        />
                        <div className='absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-green-400 border border-white rounded-full dark:border-gray-800'>
                          <svg
                            className='w-3 h-3 text-white'
                            aria-hidden='true'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z'
                              clip-rule='evenodd'
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className='w-full pl-3'>
                        <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
                          <span className='font-semibold text-gray-900 dark:text-white'>
                            Leslie Livingston
                          </span>{" "}
                          mentioned you in a comment:{" "}
                          <span className='font-medium text-blue-500' href='#'>
                            @bonnie.green
                          </span>{" "}
                          what do you say?
                        </div>
                        <div className='text-xs text-blue-600 dark:text-blue-500'>
                          1 hour ago
                        </div>
                      </div>
                    </a>
                    <a
                      href='#'
                      className='flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700'
                    >
                      <div className='flex-shrink-0'>
                        <img
                          className='rounded-full w-11 h-11'
                          src='/IMAGES/2x2.png'
                          alt='Robert image'
                        />
                        <div className='absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-purple-500 border border-white rounded-full dark:border-gray-800'>
                          <svg
                            className='w-3 h-3 text-white'
                            aria-hidden='true'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z'></path>
                          </svg>
                        </div>
                      </div>
                      <div className='w-full pl-3'>
                        <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
                          <span className='font-semibold text-gray-900 dark:text-white'>
                            Robert Brown
                          </span>{" "}
                          posted a new video: Glassmorphism - learn how to
                          implement the new design trend.
                        </div>
                        <div className='text-xs text-blue-600 dark:text-blue-500'>
                          3 hours ago
                        </div>
                      </div>
                    </a>
                  </div>
                  <a
                    href='#'
                    className='block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-CITLGray-light hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white'
                  >
                    <div className='inline-flex items-center '>
                      <svg
                        className='w-4 h-4 mr-2 text-gray-500 dark:text-gray-400'
                        aria-hidden='true'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10 12a2 2 0 100-4 2 2 0 000 4z'></path>
                        <path
                          fillRule='evenodd'
                          d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                      View all
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <button
                  type='button'
                  className='flex text-sm text-CITLWhite '
                  aria-expanded='false'
                  data-dropdown-toggle='dropdown-user'
                >
                  <span className='sr-only'>Open user menu</span>
                  <img
                    className='w-8 h-8 rounded-full'
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
                  <li>
                    <Link
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                      role='menuitem'
                    >
                      Settings
                    </Link>
                  </li>

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
