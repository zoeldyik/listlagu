import LoginFormButton from "@/components/LoginFormButton";
import { loginAction } from "../../action/userAction";

function page({ searchParams }) {
  return (
    <div className="__h_rest flex justify-center items-center">
      <div className="card w-96">
        <div className="card-body">
          <h3 className="card-title mb-3 text-accent">LOGIN</h3>

          {searchParams.error && (
            <p className="w-full px-4 py-2 rounded-md bg-warning">
              username / password salah
            </p>
          )}

          <form action={loginAction}>
            <input
              name="username"
              type="text"
              placeholder="username"
              className="input input-accent input-md w-full max-w-xs mb-2"
            />
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-accent input-md w-full max-w-xs mb-2"
            />
            <LoginFormButton />
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
