"use client";
import { MdOutlineSearch } from "react-icons/md";
import { useFormStatus } from "react-dom";

function SearchButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className={`btn btn-sm ${pending ? "btn-neutral" : "btn-outline"}`}
    >
      {!pending && (
        <>
          <MdOutlineSearch />
          Cari
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
