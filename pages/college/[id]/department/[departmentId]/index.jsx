import Layout from "@/components/layout/Layout";
import frontendReadActiveFaculty from "@/services/frontend/admin/active_faculty/frontendReadActiveFaculty";
import frontendReadDepartment from "@/services/frontend/department/frontendReadDepartment";
import Faculty from "@/views/Faculty";
import _ from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DepartmentPage() {
  const [department, setDepartment] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [activeFaculties, setActiveFaculties] = useState([]);
  const [state, setState] = useState({ limit: 5, page: 1, name: "" });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!router.query.departmentId) return;
    let subscribe = true;
    setLoading(true);

    frontendReadDepartment(router.query.departmentId).then((res) => {
      if (!subscribe) return;
      setDepartment(res);
      setLoading(false);
    });

    return () => {
      subscribe = false;
    };
  }, [router.query.departmentId]);

  useEffect(() => {
    if (!department) return;
    let subscribe = true;

    frontendReadActiveFaculty({
      limit: state.limit,
      page: state.page,
      departmentId: department.id,
      name: state.name,
    }).then((res) => {
      if (!subscribe) return;
      setActiveFaculties(res.data);
      setTotal(res.total);
    });

    return () => {
      subscribe = false;
    };
  }, [department, state]);

  useEffect(() => {
    console.log({ activeFaculties });
  }, [activeFaculties]);

  function handleNameChange(e) {
    setState((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  }
  const debouncedHandleNameChange = _.debounce(handleNameChange, 800);

  return (
    <Layout>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div>
          <div>
            <h1 className='text-xl'>{department?.name}</h1>
          </div>
          <div>
            <h2 className='text-lg'>Chairperson:</h2>
            <img
              src={
                department?.ActiveChairperson?.Chairperson?.Faculty?.user?.image
              }
            />
            <p>
              {department?.ActiveChairperson?.Chairperson?.Faculty?.user
                ?.name ?? "None"}
            </p>
          </div>
          <div>
            <h2 className='text-lg'>Coordinator:</h2>
            <img
              src={
                department?.ActiveCoordinator?.Coordinator?.Faculty?.user?.image
              }
            />
            <p>
              {department?.ActiveCoordinator?.Coordinator?.Faculty?.user
                ?.name ?? "None"}
            </p>
          </div>

          <div className='flex flex-wrap items-center border border-CITLGray-lighter bg-CITLWhite m-2 mt-5 relative rounded-lg shadow-lg overflow-hidden'>
            <div className='flex items-center bg-CITLGray-light justify-between py-3 px-3 w-full'>
              <div className='flex space-between'>
                <button
                  type='button'
                  className='inline-flex items-center px-2 py-2.5 text-sm font-medium text-center text-CITLDarkBlue border-b-2 border-CITLOrange rounded-none'
                >
                  <span className='inline-flex items-center justify-center w-4 h-4 mr-1 text-xs font-semibold text-CITLWhite bg-CITLOrange rounded-full '>
                    2
                  </span>
                  <span>Active Faculty</span>
                </button>
              </div>

              <p>{department?.name}</p>

              <div className='flex'>
                <input
                  className='w-72 py-2 pr-10 pl-4 bg-CITLGray-light border-CITLGray-lighter border text-CITLGray-main rounded-lg mr-5'
                  type='text'
                  placeholder='Name'
                  onChange={debouncedHandleNameChange}
                ></input>
              </div>
            </div>
            <table className='min-w-full divide-y divide-CITLGray-light'>
              <thead className='bg-CITLGray-light'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Image
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Name
                  </th>

                  <th
                    scope='col'
                    className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-gray-200 overflow-y-auto'>
                {activeFaculties.map((activeFaculty, index) => (
                  <Faculty
                    onView={() =>
                      router.push(`/faculty/${activeFaculty.Faculty.id}`)
                    }
                    image={activeFaculty.Faculty.user.image}
                    bottomBorder={true}
                    name={activeFaculty.Faculty.user.name}
                    id={index}
                    key={index}
                  />
                ))}
              </tbody>
            </table>
            <div className='flex flex-row items-center justify-end px-6 py-3 w-full'>
              {!loading && (
                <span className='text-sm text-gray-700 dark:text-gray-400 '>
                  Showing{" "}
                  <span className='font-semibold text-gray-900 dark:text-white'>
                    {state.limit * (state.page - 1) + 1 > total
                      ? 0
                      : state.limit * (state.page - 1) + 1}
                  </span>
                  {" - "}
                  <span className='font-semibold text-gray-900 dark:text-white'>
                    {state.limit * state.page > total
                      ? total
                      : state.limit * state.page}
                  </span>{" "}
                  of{" "}
                  <span className='font-semibold text-gray-900 dark:text-white'>
                    {total}
                  </span>{" "}
                  Entries
                </span>
              )}
              {loading && (
                <span className='text-sm text-gray-700 dark:text-gray-400 '>
                  Loading...
                </span>
              )}
              <div className='inline-flex xs:mt-0 ml-2 gap-x-1'>
                <button
                  className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:bg-CITLGray-main'
                  disabled={state.page <= 1 || loading}
                  onClick={() => {
                    setState((prev) => ({ ...prev, page: prev.page - 1 }));
                  }}
                >
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5 mr-2'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  Prev
                </button>
                <button
                  className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0  rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:bg-CITLGray-main'
                  disabled={!(state.page * state.limit < total) || loading}
                  onClick={() => {
                    setState((prev) => ({ ...prev, page: prev.page + 1 }));
                  }}
                >
                  Next
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5 ml-2'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
