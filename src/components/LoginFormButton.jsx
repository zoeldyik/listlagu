"use client";
import { useFormStatus } from "react-dom";

function LoginFormButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className={`btn btn-neutral w-full mt-3`}
    >
      {pending ? "MOHON TUNGGU" : "LOGIN"}
    </button>
  );
}

export default LoginFormButton;
