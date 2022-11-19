export const ImageLayoutSettingPane = () => {
  return (
    <div className="flex rounded-lg border-gray-300 border-2">
      <div className="h-12 p-[17px] flex items-center">
        <svg
          className="h-6 w-6 text-gray-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round">
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <rect x="4" y="4" width="6" height="6" rx="1" />{" "}
          <rect x="14" y="4" width="6" height="6" rx="1" />{" "}
          <rect x="4" y="14" width="6" height="6" rx="1" />{" "}
          <rect x="14" y="14" width="6" height="6" rx="1" />
        </svg>
      </div>
      <div className="h-12 p-[17px] flex items-center border-x-2 border-gray-300 ">
        <svg
          className="h-6 w-6 text-gray-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round">
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <rect x="4" y="4" width="6" height="6" rx="1" />{" "}
          <rect x="14" y="4" width="6" height="6" rx="1" />{" "}
          <rect x="4" y="14" width="6" height="6" rx="1" />{" "}
          <rect x="14" y="14" width="6" height="6" rx="1" />
        </svg>
      </div>
      <div className="h-12 p-[17px] flex items-center">
        <svg
          className="h-6 w-6 text-gray-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round">
          {" "}
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />{" "}
          <line x1="3" y1="9" x2="21" y2="9" />{" "}
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      </div>
    </div>
  );
};
