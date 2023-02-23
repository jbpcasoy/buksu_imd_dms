import moment from "moment/moment";

export default function IM({
  id,
  serialNumber,
  title,
  status,
  owner,
  originalFileName,
  fileName,
  createdAt,
  updatedAt,
  onView,
  bottomBorder = true,
}) {
  return (
    <tr
      className={` bg-white ${
        bottomBorder ? "border-b dark:border-CITLGray-light" : ""
      } text-sm text-CITLGray-main text-left p-4 `}
    >
      <td className="px-6 py-4 ">{serialNumber}</td>

      <td className="px-6 py-4 ">{title}</td>

      <td className="px-6 py-4 ">{status}</td>

      <td className="px-6 py-4 ">{owner.name}</td>

      <td className="px-6 py-4 ">
        {moment(createdAt).format("M/D/YYYY, h:mm A")}
      </td>

      <td className="px-6 py-4 ">{moment(updatedAt).format("LLL")}</td>

      <td className="bg-white  font-medium text-slate-400  items-center justify-center px-6 py-4 ">
        <button
          onClick={onView}
          className="transition ease-in-out delay-150 px-5 py-2.5 text-sm font-medium text-center text-white bg-CITLDarkBlue rounded-lg hover:-translate-y-1 hover:scale-110 hover:bg-CITLOrange duration-300 mr-3"
        >
          View
        </button>
      </td>
    </tr>
  );
}
