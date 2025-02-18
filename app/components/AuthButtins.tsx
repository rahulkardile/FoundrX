"use client";

import { login, logout } from "@/app/actions/auth";

const AuthButtons = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return isLoggedIn ? (
    <form action={logout}>
      <button type="submit">Logout</button>
    </form>
  ) : (
    <form action={login}>
      <button type="submit">Login</button>
    </form>
  );
};

export default AuthButtons;
