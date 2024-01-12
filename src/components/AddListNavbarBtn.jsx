import Link from "next/link";
import { MdLibraryAdd } from "react-icons/md";
import { cookies } from "next/headers";

function AddListNavbarBtn() {
  const cookieStore = cookies();
  const isAdmin = cookieStore.get("admin") || false;

  if (!isAdmin) return null;

  return (
    <Link href="/add-list" className="mr-3 btn btn-sm">
      <MdLibraryAdd />
      add list
    </Link>
  );
}

export default AddListNavbarBtn;
