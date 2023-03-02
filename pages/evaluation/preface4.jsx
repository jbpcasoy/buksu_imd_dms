import Layout from "@/components/layout/Layout";
import ImercQuestion from "@/views/forms/imerc/ImercQuestion";

export default function Title() {
  return (
    <Layout>
      <div className="pt-12">
        <div className="flex items-center border border-CITLGray-lighter  bg-CITLWhite m-2 p-3 relative rounded-lg shadow-lg overflow-hidden">
          <div className="p-5 w-full">
            <div className="mx-4 p-4">
              <div className="flex items-center">
                <div className="flex items-center text-CITLOrange relative">
                  <div className="rounded-full transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLOrange bg-CITLOrange text-left">
                    <div className="absolute top-0 mt-6 w-32 text-xs font-medium uppercase text-CITLOrange">
                      basic info
                    </div>
                  </div>
                </div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-CITLOrange"></div>
                <div className="flex items-center text-white relative">
                  <div className="rounded-full transition duration-500 ease-in-out h-4 w-4 border-2 bg-CITLOrange border-CITLOrange">
                    <div className="absolute top-0 text-left mt-6 w-32 text-xs font-medium uppercase text-CITLOrange">
                      instructions
                    </div>
                  </div>
                </div>

                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-CITLOrange"></div>
                <div className="flex items-center text-CITLOrange relative">
                  <div className="rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLOrange bg-CITLOrange">
                    <div className="absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLOrange">
                      The title
                    </div>
                  </div>
                </div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-CITLOrange"></div>
                <div className="flex items-center text-CITLGray-lighter relative">
                  <div className="rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 bg-CITLOrange border-CITLOrange">
                    <div className="absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLOrange">
                      The Preface
                    </div>
                  </div>
                </div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-CITLOrange"></div>
                <div className="flex items-center text-CITLGray-lighter relative">
                  <div className="rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2  border-CITLGray-lighter">
                    <div className="absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLGray-lighter">
                      The chapters
                    </div>
                  </div>
                </div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-bg-CITLOrange"></div>
                <div className="flex items-center text-CITLGray-lighter relative">
                  <div className="rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLGray-lighter">
                    <div className="absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLGray-lighter">
                      The learning outcomes
                    </div>
                  </div>
                </div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-bg-CITLOrange"></div>
                <div className="flex items-center text-CITLGray-lighter relative">
                  <div className="rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLGray-lighter">
                    <div className="absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLGray-lighter">
                      The Concepts
                    </div>
                  </div>
                </div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-bg-CITLOrange"></div>
                <div className="flex items-center text-CITLGray-lighter relative">
                  <div className="rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLGray-lighter">
                    <div className="absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLGray-lighter">
                      The Examples
                    </div>
                  </div>
                </div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-bg-CITLOrange"></div>
                <div className="flex items-center text-CITLGray-lighter relative">
                  <div className="rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLGray-lighter">
                    <div className="absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLGray-lighter">
                      The Activities
                    </div>
                  </div>
                </div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-bg-CITLOrange"></div>
                <div className="flex items-center text-CITLGray-lighter relative">
                  <div className="rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLGray-lighter">
                    <div className="absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLGray-lighter">
                      The Rubrics
                    </div>
                  </div>
                </div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-CITLGray-lighter"></div>
              </div>
            </div>

            <div className="px-6 pt-16 md:w-full ">
              <h2 className="text-CITLDarkBlue font-bold text-2xl ">
                Instructional Material Evaluation Form
              </h2>
              <p className="mb-8 text-sm">IMERC</p>

              <ImercQuestion
                title="The Preface"
                question="It introduces what the material is about."
              />

              <div className="flex p-2 mt-4">
                <a
                  href="/evaluation/preface3"
                  className="text-base  flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:border-CITLOrange hover:text-CITLOrange bg-gray-100 text-CITLGray-main border border-CITLGray-main"
                >
                  Previous
                </a>
                <div className="flex-auto flex flex-row-reverse">
                  <a
                    href="/evaluation/chapter_unit"
                    className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-CITLOrange   bg-CITLDarkBlue text-CITLWhite"
                  >
                    Next
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
