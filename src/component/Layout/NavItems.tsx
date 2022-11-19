export const NavItems = () => {
  const buJuNaClass =
    "flex items-center cursor-pointer h-18 justify-between font-semibold text-base w-[100%]";

  return (
    <ul className="flex w-[100%]">
      <div className="flex w-[100%]">
        <li className={buJuNaClass}>
          <div className="min-[600px]:px-4 w-[100%]">Explorer</div>
        </li>
        <li className={buJuNaClass}>
          <div className="min-[600px]:px-4 w-[100%]">Drops</div>
        </li>
        <li className={buJuNaClass}>
          <div className="min-[600px]:px-4 w-[100%]">Stats</div>
        </li>
        <li className={buJuNaClass}>
          <div className="min-[600px]:px-4 w-[100%]">Resources</div>
        </li>
      </div>
      <div className="flex w-[100%]">
        <li className={buJuNaClass}>
          <div className="min-[600px]:px-4 w-[100%]">
            <svg
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </li>
        <li className={buJuNaClass}>
          <div className="min-[600px]:px-4 w-[100%]">
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
              <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />{" "}
              <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
            </svg>
          </div>
        </li>
        <li className={buJuNaClass}>
          <div className="min-[600px]:px-4 w-[100%]">
            <svg
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </li>
      </div>
    </ul>
  );
};
