"use client";
import { useFormStatus } from "react-dom";

function LoginFormButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`btn  w-full mt-3 ${pending ? "btn-disabled" : "btn-accent"}`}
    >
      {pending ? "MOHON TUNGGU" : "LOGIN"}
    </button>
  );
}

export default LoginFormButton;
