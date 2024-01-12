"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdLogin } from "react-icons/md";

function LoginNavbarBtn() {
  const path = usePathname();

  if (path === "/login") return null;

  return (
    <Link nk href="/login" className="btn btn-primary btn-sm">
      <MdLogin />
      login
    </Link>
  );
}

export default LoginNavbarBtn;
