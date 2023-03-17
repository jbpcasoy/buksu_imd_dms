export default function test({ suggestionItemId, onAgree }) {
  return (
    <div>
      {/* <!-- Modal toggle --> */}
      <button
        data-modal-target={`delete-suggestion-modal-${suggestionItemId}`}
        data-modal-toggle={`delete-suggestion-modal-${suggestionItemId}`}
        className='block text-sm font-medium text-center px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 rounded-lg'
        // className='block text-sm font-medium text-center px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100'
        type='button'
      >
        Delete
      </button>

      {/* <!-- Main modal --> */}
      <div
        id={`delete-suggestion-modal-${suggestionItemId}`}
        tabindex='-1'
        aria-hidden='true'
        className='fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full'
      >
        <div className='relative w-full h-full max-w-2xl md:h-auto'>
          {/* <!-- Modal content --> */}
          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            {/* <!-- Modal header --> */}
            <div className='flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Delete Suggestion
              </h3>
              <button
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                data-modal-hide={`delete-suggestion-modal-${suggestionItemId}`}
              >
                <svg
                  aria-hidden='true'
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className='p-6 space-y-6'>
              <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                This action cannot be reverted, are you sure?
              </p>
            </div>
            {/* <!-- Modal footer --> */}
            <div className='flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600'>
              <button
                onClick={onAgree}
                data-modal-hide={`delete-suggestion-modal-${suggestionItemId}`}
                type='button'
                className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
              >
                Yes
              </button>
              <button
                data-modal-hide={`delete-suggestion-modal-${suggestionItemId}`}
                type='button'
                className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
