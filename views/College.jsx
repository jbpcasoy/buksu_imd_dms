export default function College({ name, onView, bottomBorder = true }) {
  return (
    <tr
      className={` bg-white ${
        bottomBorder ? "border-b dark:border-CITLGray-light" : ""
      } text-sm text-CITLGray-main text-left p-4 `}
    >
      <td className="px-6 py-4 ">{name}</td>

      <td className="bg-white  font-medium text-slate-400  items-center justify-center py-4 flex ">
        <button
          onClick={onView}
          className="px-5 py-2.5 text-sm font-medium text-center text-white bg-CITLDarkBlue rounded-lg  hover:bg-transparent hover:border-CITLDarkBlue border hover:text-CITLDarkBlue"
        >
          View
        </button>
      </td>
    </tr>
  );
}
