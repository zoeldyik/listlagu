"use client";

import Link from "next/link";
import { MdLibraryAdd } from "react-icons/md";
import { usePathname } from "next/navigation";

function AddListNavbarBtn() {
  const path = usePathname();

  if (path === "/add-list") return null;

  return (
    <Link href="/add-list" className="mr-3 btn btn-sm">
      <MdLibraryAdd />
      add list
    </Link>
  );
}

export default AddListNavbarBtn;
