export const SortByInput = () => {
  return (
    <div className="w-60 ml-auto flex-shrink  mr-4">
      <div className="">
        <select className="h-14 w-[100%] border-2 rounded-lg  border-gray-300 ">
          <option>Recently listed</option>
          <option>Recently created</option>
          <option>Recently sold</option>
          <option>Recently received</option>
          <option>Ending soon</option>
          <option>Price low to high</option>
          <option>Price high to low</option>
          <option>Highest last sale</option>
          <option>Oldest</option>
        </select>
      </div>
    </div>
  );
};
