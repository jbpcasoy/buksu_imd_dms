import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function StudentOpinionnaire() {
  return (
    <Layout>
      <div className='sm:pt-12'>
        <div className='flex items-center border border-CITLGray-lighter bg-CITLGray-light m-2 p-3 relative rounded-lg shadow-lg overflow-hidden'>
          <div className='w-full '>
            <div className='p-4 '>
              <div className='flex mt-10'>
                <div className='w-9/12 border-t-4 transition duration-500 ease-in-out border-CITLOrange'>
                  <div className=' top-0 mt-2 text-xs font-medium uppercase text-CITLOrange'>
                    step 2 of 4
                  </div>
                </div>
                <div className='w-3/12 border-t-4 ml-2 transition duration-500 ease-in-out border-CITLGray-lighter'></div>
              </div>
            </div>

            <div className='px-2 pt-10'>
              <h2 className='text-CITLDarkBlue font-bold text-2xl '>
                Student Opinionnaire
              </h2>
              <p className='mb-8 text-sm'>Evaluation of a Module</p>

              <div className='py-5'>
                <div className='border border-CITLGray-main rounded-lg px-3 py-5'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    6. The module’s images, figures, graphics, audios, or videos
                    (as may be applicable) are clear.
                  </h3>

                  <ul className='items-center w-full text-sm font-medium   rounded-lg sm:flex  dark:text-CITLDarkBlue mt-2'>
                    <li className='w-full  border-gray-200 sm:border-b-0  dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-license'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                        />
                        <label
                          htmlFor='horizontal-list-radio-license'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main '
                        >
                          Yes{" "}
                        </label>
                      </div>
                    </li>
                    <li className='w-full  border-gray-200 sm:border-b-0  dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-id'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                        />
                        <label
                          htmlFor='horizontal-list-radio-id'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          Somewhat
                        </label>
                      </div>
                    </li>
                    <li className='w-full  border-gray-200 sm:border-b-0 dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-millitary'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                        />
                        <label
                          htmlFor='horizontal-list-radio-millitary'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          No
                        </label>
                      </div>
                    </li>
                    <li className='w-full sm:border-b-0 dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-passport'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue '
                        />
                        <label
                          htmlFor='horizontal-list-radio-passport'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          Not Applicable
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='py-5'>
                <div className='border border-CITLGray-main rounded-lg px-3 py-5'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    7. The module’s hyperlinks (as may be applicable) are
                    functional.
                  </h3>

                  <ul className='items-center w-full text-sm font-medium   rounded-lg sm:flex  dark:text-CITLDarkBlue mt-2'>
                    <li className='w-full  border-gray-200 sm:border-b-0  dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-license'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                        />
                        <label
                          htmlFor='horizontal-list-radio-license'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main '
                        >
                          Yes{" "}
                        </label>
                      </div>
                    </li>
                    <li className='w-full  border-gray-200 sm:border-b-0  dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-id'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                        />
                        <label
                          htmlFor='horizontal-list-radio-id'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          Somewhat
                        </label>
                      </div>
                    </li>
                    <li className='w-full  border-gray-200 sm:border-b-0 dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-millitary'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                        />
                        <label
                          htmlFor='horizontal-list-radio-millitary'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          No
                        </label>
                      </div>
                    </li>
                    <li className='w-full sm:border-b-0 dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-passport'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue '
                        />
                        <label
                          htmlFor='horizontal-list-radio-passport'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          Not Applicable
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='py-5'>
                <div className='border border-CITLGray-main rounded-lg px-3 py-5'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    8. The ideas are presented using a language that is easy to
                    understand.
                  </h3>

                  <ul className='items-center w-full text-sm font-medium   rounded-lg sm:flex  dark:text-CITLDarkBlue mt-2'>
                    <li className='w-full  border-gray-200 sm:border-b-0  dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-license'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                        />
                        <label
                          htmlFor='horizontal-list-radio-license'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main '
                        >
                          Yes{" "}
                        </label>
                      </div>
                    </li>
                    <li className='w-full  border-gray-200 sm:border-b-0  dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-id'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                        />
                        <label
                          htmlFor='horizontal-list-radio-id'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          Somewhat
                        </label>
                      </div>
                    </li>
                    <li className='w-full  border-gray-200 sm:border-b-0 dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-millitary'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                        />
                        <label
                          htmlFor='horizontal-list-radio-millitary'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          No
                        </label>
                      </div>
                    </li>
                    <li className='w-full sm:border-b-0 dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-passport'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue '
                        />
                        <label
                          htmlFor='horizontal-list-radio-passport'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          Not Applicable
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='py-5'>
                <div className='border border-CITLGray-main rounded-lg px-3 py-5'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    9. The instructions are clear.
                  </h3>

                  <ul className='items-center w-full text-sm font-medium   rounded-lg sm:flex  dark:text-CITLDarkBlue mt-2'>
                    <li className='w-full  border-gray-200 sm:border-b-0  dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-license'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                        />
                        <label
                          htmlFor='horizontal-list-radio-license'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main '
                        >
                          Yes{" "}
                        </label>
                      </div>
                    </li>
                    <li className='w-full  border-gray-200 sm:border-b-0  dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-id'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                        />
                        <label
                          htmlFor='horizontal-list-radio-id'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          Somewhat
                        </label>
                      </div>
                    </li>
                    <li className='w-full  border-gray-200 sm:border-b-0 dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-millitary'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                        />
                        <label
                          htmlFor='horizontal-list-radio-millitary'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          No
                        </label>
                      </div>
                    </li>
                    <li className='w-full sm:border-b-0 dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-passport'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue '
                        />
                        <label
                          htmlFor='horizontal-list-radio-passport'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          Not Applicable
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='py-5'>
                <div className='border border-CITLGray-main rounded-lg px-3 py-5'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    10. The module’s contents are relevant to the course.
                  </h3>

                  <ul className='items-center w-full text-sm font-medium   rounded-lg sm:flex  dark:text-CITLDarkBlue mt-2'>
                    <li className='w-full  border-gray-200 sm:border-b-0  dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-license'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                        />
                        <label
                          htmlFor='horizontal-list-radio-license'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main '
                        >
                          Yes{" "}
                        </label>
                      </div>
                    </li>
                    <li className='w-full  border-gray-200 sm:border-b-0  dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-id'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                        />
                        <label
                          htmlFor='horizontal-list-radio-id'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          Somewhat
                        </label>
                      </div>
                    </li>
                    <li className='w-full  border-gray-200 sm:border-b-0 dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-millitary'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                        />
                        <label
                          htmlFor='horizontal-list-radio-millitary'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          No
                        </label>
                      </div>
                    </li>
                    <li className='w-full sm:border-b-0 dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-passport'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue '
                        />
                        <label
                          htmlFor='horizontal-list-radio-passport'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          Not Applicable
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='flex mt-4'>
                <Link
                  href='/test/student-opinionnaire'
                  className='group relative inline-flex items-center overflow-hidden rounded-md border border-current px-8 py-3 text-CITLGray-main focus:outline-none focus:ring active:text-CITLGray-main'
                >
                  <span className='absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4'>
                    <svg
                      className='h-5 w-5 rotate-180'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </span>

                  <span className='text-sm font-medium transition-all group-hover:ml-4'>
                    Previous
                  </span>
                </Link>
                <div className='flex-auto flex flex-row-reverse'>
                  <Link
                    href='/test/student-opinionnaire/index3'
                    className='group relative inline-flex items-center overflow-hidden rounded-md bg-CITLDarkBlue px-8 py-3 text-white focus:outline-none focus:ring active:bg-CITLDarkBlue'
                  >
                    <span className='absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4'>
                      <svg
                        className='h-5 w-5'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M17 8l4 4m0 0l-4 4m4-4H3'
                        />
                      </svg>
                    </span>

                    <span className='text-sm font-medium transition-all group-hover:mr-4'>
                      Next
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
