// import components
import PriceRangeDropdown from "./PriceRangeDropdown";
import BedsDropDown from "./BedsDropDown";

// import icon
import { RiSearch2Line } from "react-icons/ri";
import LocalityDropdown from "./LocalityDropdown";

const Search = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className=" bg-gray-100">
      <div className=" ">
        <p className="py-7 text-xl font-bold text-gray-700">
          {" "}
          Filter houses to rent
        </p>
        <div className=" flex justify-center md:justify-start gap-5 items-center flex-wrap p-2">
          <div className="">
            <BedsDropDown />
          </div>
          <div className=" ">
            <PriceRangeDropdown />
          </div>
          <div className=" ">
            <LocalityDropdown />
          </div>
          <div className=" ">
            <button
              onClick={() => {
                handleClick();
              }}
              className="flex p-2 space-x-2 items-center justify-center rounded-lg bg-purple-700 text-lg text-white transition hover:bg-purple-800 "
            >
              <p className="">Search</p>
              <RiSearch2Line />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
