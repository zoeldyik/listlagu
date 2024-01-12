import Link from "next/link";
import { MdMusicNote } from "react-icons/md";
import { cookies } from "next/headers";
import LogoutBtn from "./LogoutBtn";
import AddListNavbarBtn from "./AddListNavbarBtn";
import LoginNavbarBtn from "./LoginNavbarBtn";

export default function Navbar() {
  const cookieStore = cookies();
  const isAdmin = cookieStore.get("admin") || false;

  return (
    <div className="navbar mb-8 px-4 md:px-6">
      <div className="flex-1">
        <Link
          href="/"
          className="btn btn-link text-neutral no-underline focus:no-underline hover:no-underline font-semibold text-xl gap-0 px-0"
        >
          <MdMusicNote className="text-slate-700" />
          <span className="text-slate-700">LIST</span>
          <span className="text-accent">LAGU</span>
        </Link>
      </div>
      <div className="flex-none">
        {isAdmin && <AddListNavbarBtn />}
        {!isAdmin && <LoginNavbarBtn />}
        {isAdmin && <LogoutBtn />}
      </div>
    </div>
  );
}
