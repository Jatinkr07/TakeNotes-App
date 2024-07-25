/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="flex items-center w-40 px-4 bg-gray-100 rounded-full sm:w-60 md:w-80">
      <input
        type="text"
        placeholder="Search Notes..."
        className="w-full text-xs bg-transparent py-[11px] outline-none"
        value={value}
        onChange={onChange}
      />

      {value && (
        <IoMdClose
          className="mr-3 text-xl cursor-pointer text-slate-500 hover:text-black"
          onClick={onClearSearch}
        />
      )}

      <FaMagnifyingGlass
        className="mr-3 text-xl cursor-pointer text-slate-500 hover:text-black"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
