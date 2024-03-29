import EndorsedIM from "@/components/admin/dashboard/EndorsedIM";
import Layout from "@/components/layout/Layout";
import UserContext from "@/contexts/UserContext";
import { useContext } from "react";

export default function Home() {
  const { user, userLoading, userError } = useContext(UserContext);
  return (
    <>
      <Layout>
        <div className='  p-4'>
          <div className='mt-12 lg:mt-20'>
            {(user?.ActiveFaculty?.ActiveCoordinator ||
              user?.ActiveFaculty?.ActiveDean ||
              user?.ActiveFaculty?.ActiveChairperson ||
              user?.IMDCoordinator?.ActiveIMDCoordinator ||
              user?.CITLDirector?.ActiveCITLDirector) && (
              <div className='mb-4'>
                <EndorsedIM />
              </div>
            )}

            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12'>
                <a
                  href='#'
                  className='bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2'
                >
                  <svg
                    fill='none'
                    stroke='currentColor'
                    className='w-3 h-3 mr-1'
                    strokeWidth='1.5'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
                    ></path>
                  </svg>
                  Tutorial
                </a>
                <h2 className='text-gray-900 dark:text-white text-3xl font-extrabold mb-2'>
                  Did you know how to upload your IMs?
                </h2>
                <p className='text-lg font-normal text-gray-500 dark:text-gray-400 mb-4'>
                  Static websites are now used to bootstrap lots of websites and
                  are becoming the basis for a variety of tools that even
                  influence both web designers and developers.
                </p>
                <a
                  href='#'
                  className='text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center'
                >
                  Read more
                  <svg
                    aria-hidden='true'
                    className='w-4 h-4 ml-2'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    ></path>
                  </svg>
                </a>
              </div>
              <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12'>
                <a
                  href='#'
                  className='bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2'
                >
                  <svg
                    fill='none'
                    stroke='currentColor'
                    className='w-3 h-3 mr-1'
                    strokeWidth='1.5'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
                    ></path>
                  </svg>
                  Tutorial
                </a>
                <h2 className='text-gray-900 dark:text-white text-3xl font-extrabold mb-2'>
                  Don&apos;t know how to track your IMs?
                </h2>
                <p className='text-lg font-normal text-gray-500 dark:text-gray-400 mb-4'>
                  Static websites are now used to bootstrap lots of websites and
                  are becoming the basis for a variety of tools that even
                  influence both web designers and developers.
                </p>
                <a
                  href='#'
                  className='text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center'
                >
                  Read more
                  <svg
                    aria-hidden='true'
                    className='w-4 h-4 ml-2'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
