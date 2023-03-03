import Layout from "@/components/layout/Layout";

import Section from "@/views/forms/Section";
import Link from "next/link";

export default function Title() {
  return (
    <Layout>
      <div className='sm:pt-12'>
        <div className='flex items-center border border-CITLGray-lighter  bg-CITLGray-light m-2 p-3 relative rounded-lg shadow-lg overflow-hidden'>
          <div className='w-full'>
            <div className='p-4 '>
              <div className='flex mt-10'>
                <div className='w-full border-t-4 transition duration-500 ease-in-out border-CITLOrange'>
                  <div className=' top-0 mt-2 text-xs font-medium uppercase text-CITLOrange'>
                    step 10 of 10
                  </div>
                </div>
                {/* <div className='w-3/12 border-t-4 ml-2 transition duration-500 ease-in-out border-CITLGray-lighter'></div> */}
              </div>
            </div>

            <div className='px-2 pt-10 '>
              <h2 className='text-CITLDarkBlue font-bold text-2xl '>
                Instructional Material Review Form
              </h2>
              <p className='mb-8 text-sm'>Implementation Phase</p>

              <Section
                questions={[
                  "They are prepared within the capability of the students.",
                ]}
                title=' The Rubrics (if applicable)'
              />

              <div className='flex  mt-4'>
                <Link
                  href='/review/form/rubrics4'
                  className='text-base  flex justify-center px-4 py-2 rounded font-bold cursor-pointer shadow-xl hover:border-CITLOrange hover:text-CITLOrange bg-gray-100 text-CITLGray-main border border-CITLGray-main'
                >
                  Previous
                </Link>
                <div className='flex-auto flex flex-row-reverse'>
                  <Link
                    href='/review/form/'
                    className='text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer shadow-xl hover:bg-CITLOrange   bg-CITLDarkBlue text-CITLWhite'
                  >
                    Submit
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
