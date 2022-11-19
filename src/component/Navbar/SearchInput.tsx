export const SearchInput = () => {
  return (
    <div className="h-[100%] w-[100%] flex items-center">
      <div className="min-[1024px]:mr-8 min-[600px]: mr-4 leading-[26px] p-2 h-12 w-[100%] border-[2px] rounded-md border-gray-300 max-[599px]:hidden ">
        <div className="cursor-text flex items-center font-[16px]">
          <svg
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            placeholder="Search items, collections, and accounts"
            className="outline-none border-none w-[100%] h-fit focus:border-none p-[2px] focus"
          />
        </div>
      </div>
    </div>
  );
};
