"use client";
import { MdOutlineSearch } from "react-icons/md";
import { useFormStatus } from "react-dom";

function SearchButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`btn btn-sm ${pending ? "btn-disabled" : null}`}
    >
      {!pending && (
        <>
          <MdOutlineSearch />
          CARI
        </>
      )}
      {pending && (
        <>
          <span className="loading loading-spinner"></span>
          Mencari
        </>
      )}
    </button>
  );
}

export default SearchButton;
