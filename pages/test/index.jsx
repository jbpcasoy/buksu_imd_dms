import Layout from "@/components/layout/Layout";
import { initCarousels } from "flowbite";
import { useEffect } from "react";

export default function Test() {
  useEffect(() => {
    initCarousels();
  });

  return (
    <Layout>
      <div
        id='indicators-carousel'
        className='relative w-full'
        data-carousel='static'
      >
        {/* <!-- Carousel wrapper --> */}
        <div
          className='flex flex-wrap  border border-slate-300 m-2 p-3 relative h-56 overflow-hidden rounded-lg '
          // style={{ backgroundImage: "url(/IMAGES/DSC_6510.jpg)" }}
        >
          {/* <!-- Item 1 --> */}
          <div
            className='hidden duration-700 ease-in-out bg-gradient-to-r from-CITLOrange'
            data-carousel-item='active'
          >
            <div className='px-8 py-4 overflow-hidden grid grid-flow-col-2 h-full'>
              <div className='md:grid md:grid-cols-3'>
                <div className='md:col-span-2'>
                  <div className=' grid text-left  mt-12'>
                    <div className=''>
                      <h3 className='text-2xl font-semibold'>Announcement</h3>
                      <p className=''>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <button className='border rounded-md py-1 px-2.5 mt-2'>
                        Read more
                      </button>
                    </div>
                    {/* <li>
                      <img
                        src='/IMAGES/DSC_6510.jpg'
                        className='flex w-64 rounded-lg m-2 object-cover relative'
                        alt='...'
                      />
                    </li> */}
                  </div>
                </div>
                <div
                  className='rounded-lg bg-cover bg-center hidden md:block'
                  style={{ backgroundImage: "url(/IMAGES/DSC_6510.jpg)" }}
                >
                  {/* <img
                    src='/IMAGES/DSC_6510.jpg'
                    className='flex w-full rounded-lg  '
                    alt='...'
                  /> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Item 2 --> */}
          <div
            className='hidden duration-700 ease-in-out bg-cover  bg-gradient-to-r from-CITLOrange bg-no-repeat'
            style={{ backgroundImage: "url('/IMAGES/DSC_6510.jpg')" }}
            data-carousel-item
          ></div>
          {/* <!-- Ite/m 3 --> */}
          <div
            className='hidden duration-700 ease-in-out bg-cover bg-gradient-to-r from-CITLOrange bg-no-repeat'
            style={{ backgroundImage: "url('/IMAGES/DSC_6474.jpg')" }}
            data-carousel-item
          ></div>
          {/* <!-- Item 4 --> */}
          <div
            className='hidden duration-700 ease-in-out bg-cover  bg-gradient-to-r from-CITLOrange bg-no-repeat'
            style={{ backgroundImage: "url('/IMAGES/DSC_6510.jpg')" }}
            data-carousel-item
          ></div>
          {/* <!-- Item 5 --> */}
          <div
            className='hidden duration-700 ease-in-out bg-cover bg-gradient-to-r from-CITLOrange bg-no-repeat'
            style={{ backgroundImage: "url('/IMAGES/DSC_6474.jpg')" }}
            data-carousel-item
          ></div>
        </div>
        {/* <!-- Slider indicators --> */}
        <div className='absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2'>
          <button
            type='button'
            className='w-3 h-3 rounded-full'
            aria-current='true'
            aria-label='Slide 1'
            data-carousel-slide-to='0'
          ></button>
          <button
            type='button'
            className='w-3 h-3 rounded-full'
            aria-current='false'
            aria-label='Slide 2'
            data-carousel-slide-to='1'
          ></button>
          <button
            type='button'
            className='w-3 h-3 rounded-full'
            aria-current='false'
            aria-label='Slide 3'
            data-carousel-slide-to='2'
          ></button>
          <button
            type='button'
            className='w-3 h-3 rounded-full'
            aria-current='false'
            aria-label='Slide 4'
            data-carousel-slide-to='3'
          ></button>
          <button
            type='button'
            className='w-3 h-3 rounded-full'
            aria-current='false'
            aria-label='Slide 5'
            data-carousel-slide-to='4'
          ></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type='button'
          className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          data-carousel-prev
        >
          <span className='inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15 19l-7-7 7-7'
              ></path>
            </svg>
            <span className='sr-only'>Previous</span>
          </span>
        </button>
        <button
          type='button'
          className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          data-carousel-next
        >
          <span className='inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 5l7 7-7 7'
              ></path>
            </svg>
            <span className='sr-only'>Next</span>
          </span>
        </button>
      </div>
    </Layout>
  );
}
