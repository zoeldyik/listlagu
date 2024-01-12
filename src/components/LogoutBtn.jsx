"use client";
import { logoutAction } from "../action/userAction";
import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";

export default async function LogoutBtn() {
  const router = useRouter();
  return (
    <button
      className="btn btn-neutral btn-sm"
      onClick={async () => {
        await logoutAction();
        router.refresh();
      }}
    >
      <MdLogout />
      logout
    </button>
  );
}
