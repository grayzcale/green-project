import { useState } from "react";

const SearchBar = (props) => {
  const [searchData, setSearchData] = useState([]);
  const handleSearch = (e) => {
    if (!e.target.value) return;
    const subArr = props.info.filter((str) =>
      str.title.includes(e.target.value)
    );
    if (subArr.length > 0) setSearchData(subArr);
    else setSearchData([]);
  };

  return (
    <>
      <div>
        <div className="searchbar w-96 flex border rounded-xl">
          <div className="flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              className="searchbar h-full w-full outline-none text-sm text-gray-700 pr-2 focus:outline-none"
              name="search"
              onChange={handleSearch}
              placeholder="Search Posts"
            />
          </div>
        </div>
        {searchData.length !== 0 && (
          <div className="flex flex-col ">
            {searchData.map((posting, idx) => {
              return (
                <span
                  id={idx + posting.title}
                  key={idx + posting.title}
                  className="results  block bg-[#DFEBBD] border-b w-96 border-black p-2"
                >
                  {posting.title}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
export default SearchBar;
