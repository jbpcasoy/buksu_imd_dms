import moment from "moment";
import Link from "next/link";

export default function VersionItem({ date, fileId, iMId, fileName }) {
  return (
    <li className='mb-10 ml-6'>
      <span className='absolute flex items-center justify-center w-6 h-6 bg-CITLOrange rounded-full -left-3 ring-8 ring-CITLGray-light '>
        <svg
          aria-hidden='true'
          className='w-2 h-3 text-CITLWhite'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='m14 7v-6.54a6.977 6.977 0 0 1 2.465 1.59l3.484 3.486a6.954 6.954 0 0 1 1.591 2.464h-6.54a1 1 0 0 1 -1-1zm8 3.485v8.515a5.006 5.006 0 0 1 -5 5h-10a5.006 5.006 0 0 1 -5-5v-14a5.006 5.006 0 0 1 5-5h4.515c.163 0 .324.013.485.024v6.976a3 3 0 0 0 3 3h6.976c.011.161.024.322.024.485zm-8 8.515a1 1 0 0 0 -1-1h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1zm3-4a1 1 0 0 0 -1-1h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1z' />
        </svg>
      </span>

      <h3 className='flex items-center mb-1 text-md font-semibold text-gray-900 dark:text-white'>
        {fileId}
      </h3>
      <time className='block text-xs font-normal leading-none text-gray-400 dark:text-gray-500'>
        {moment(date).format("MMMM D, YYYY | h:mm A")}
      </time>
      <p className='mb-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
        {fileName}
      </p>
      <Link
        href={`/im/${iMId}/versions/${fileId}`}
        className='inline-flex items-center px-4 py-2 text-sm font-medium text-CITLDarkBlue bg-CITLOrange border  rounded-md  hover:text-CITLDarkBlue hover:border-CITLOrange focus:outline-none '
      >
        View{" "}
        <svg
          className='w-3 h-3 ml-2'
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
      </Link>
    </li>
  );
}
