import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function TeacherUserEvaluation() {
  return (
    <Layout>
      <div className='sm:pt-12'>
        <div className='flex items-center border border-CITLGray-lighter bg-CITLGray-light m-2 p-3 relative rounded-lg shadow-lg overflow-hidden'>
          <div className='w-full '>
            <div className='p-4 '>
              <div className='flex mt-10'>
                <div className='w-full border-t-4 transition duration-500 ease-in-out border-CITLOrange'>
                  <div className=' top-0 mt-2 text-xs font-medium uppercase text-CITLOrange'>
                    step 5 of 5
                  </div>
                </div>
              </div>
            </div>

            <div className='px-2 pt-10'>
              <h2 className='text-CITLDarkBlue font-bold text-2xl mb-8 '>
                D. Appropriateness
              </h2>

              <div className='py-5'>
                <div className='border border-CITLGray-main rounded-lg px-3 py-5'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    18. Contains materials appropriate to the course.
                  </h3>

                  <div className='flex rounded-xl space-x-1 pt-2' x-data='app'>
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='1'
                        className='peer hidden border'
                      />
                      <label
                        htmlFor='1'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        1
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='2'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='2'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        2
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='3'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='3'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        3
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='4'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='4'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        4
                      </label>
                    </div>
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='5'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='5'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        5
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='py-5'>
                <div className='border border-CITLGray-main rounded-lg px-3 py-5'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    19. Allows the students to perform tasks independently .
                  </h3>

                  <div className='flex rounded-xl space-x-1 pt-2' x-data='app'>
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='1'
                        className='peer hidden border'
                      />
                      <label
                        htmlFor='1'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        1
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='2'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='2'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        2
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='3'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='3'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        3
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='4'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='4'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        4
                      </label>
                    </div>
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='5'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='5'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        5
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='py-5'>
                <div className='border border-CITLGray-main rounded-lg px-3 py-5'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    20. Caters to varied levels of the students&apos; mental
                    ability.
                  </h3>

                  <div className='flex rounded-xl space-x-1 pt-2' x-data='app'>
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='1'
                        className='peer hidden border'
                      />
                      <label
                        htmlFor='1'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        1
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='2'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='2'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        2
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='3'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='3'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        3
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='4'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='4'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        4
                      </label>
                    </div>
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='5'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='5'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        5
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='py-5'>
                <div className='border border-CITLGray-main rounded-lg px-3 py-5'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    B. Directions:
                  </h3>
                  <p className='text-sm font-normal text-CITLGray-main'>
                    Please provide comments and suggestions for each area below:
                  </p>
                  <label
                    htmlFor='message'
                    className='block mb-2 mt-3 text-sm font-medium text-CITLGray-main'
                  >
                    1. Strengths:
                  </label>
                  <div className='lg:indent-0 md:indent-0  w-full p-2 ml-2 '>
                    <div className='lg:indent-5 md:indent-0 inline-flex items-center w-full'>
                      <label className=' text-CITLGray-main'>a. </label>
                      <input
                        type='text'
                        placeholder='-'
                        className='w-full text-sm border-0 border-b-2 bg-CITLGray-light  outline-none opacity-50 focus:ring-0'
                      />
                    </div>
                    <div className='lg:indent-5 md:indent-0 inline-flex items-center w-full'>
                      <label className=' text-CITLGray-main'>b. </label>
                      <input
                        type='text'
                        placeholder='-'
                        className='w-full  text-sm border-0 border-b-2 bg-CITLGray-light  outline-none opacity-50 focus:ring-0'
                      />
                    </div>
                    <div className='lg:indent-5 md:indent-0 inline-flex items-center w-full'>
                      <label className=' text-CITLGray-main'>c. </label>
                      <input
                        type='text'
                        placeholder='-'
                        className='w-full text-sm border-0 border-b-2 bg-CITLGray-light  outline-none opacity-50 focus:ring-0'
                      />
                    </div>
                  </div>
                  <label
                    htmlFor='message'
                    className='block mb-2 mt-3 text-sm font-medium text-CITLGray-main'
                  >
                    <label
                      htmlFor='message'
                      className=' mb-2 mt-3 text-sm font-medium text-CITLGray-main'
                    >
                      2. Weaknesses:
                    </label>
                    <div className='lg:indent-0 md:indent-0  w-full p-2 ml-2 '>
                      <div className='lg:indent-5 md:indent-0 inline-flex items-center w-full'>
                        <label className=' text-CITLGray-main '>a. </label>
                        <input
                          type='text'
                          placeholder='-'
                          className='w-full text-sm border-0 border-b-2 bg-CITLGray-light  outline-none opacity-50 focus:ring-0'
                        />
                      </div>
                      <div className='lg:indent-5 md:indent-0 inline-flex items-center w-full'>
                        <label className=' text-CITLGray-main'>b. </label>
                        <input
                          type='text'
                          placeholder='-'
                          className='w-full  text-sm border-0 border-b-2 bg-CITLGray-light  outline-none opacity-50 focus:ring-0'
                        />
                      </div>
                      <div className='lg:indent-5 md:indent-0 inline-flex items-center w-full'>
                        <label className=' text-CITLGray-main'>c. </label>
                        <input
                          type='text'
                          placeholder='-'
                          className='w-full text-sm border-0 border-b-2 bg-CITLGray-light  outline-none opacity-50 focus:ring-0'
                        />
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className=' lg:grid-cols-2 gap-6  md:grid-rows-2 mb-3'>
                <div className='mb-3'>
                  <label
                    className='block mb-1 text-sm font-semibold text-CITLDarkBlue '
                    htmlfor='title'
                  >
                    Name of Evaluator
                  </label>
                  <input
                    className='border  border-gray-400 bg-CITLGray-light focus:ring-CITLOrange focus:border-CITLOrange p-2 w-full rounded-md'
                    type='text'
                    id='title'
                    placeholder='John Doe'
                  />
                </div>
                {/* IMPLEMENT Date Picker here */}
                <div>
                  <label
                    className='block mb-1 text-sm font-semibold text-CITLDarkBlue '
                    htmlfor='title'
                  >
                    Date
                  </label>
                  <input
                    className='border  border-gray-400 bg-CITLGray-light focus:ring-CITLOrange focus:border-CITLOrange p-2 w-full rounded-md'
                    type='text'
                    id='title'
                  />
                </div>

                {/* ADD Evaluators Signature here. Already installed the signature pad. */}
              </div>
              <div className='flex mt-4'>
                <Link
                  href='/test/teacher-user-evaluation/index4'
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
                    href='/test/teacher-user-evaluation/index5'
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
