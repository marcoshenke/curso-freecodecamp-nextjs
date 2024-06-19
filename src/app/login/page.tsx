"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { axios } from "axios";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Faça o Login</h1>
      <hr />
      <label htmlFor="email">E-mail</label>
      <input
        className="p-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password">Senha</label>
      <input
        className="p-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="password"
        type="text"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
        onClick={onLogin}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Registrar
      </button>
      <Link href="/signup">Visite a página de cadastro</Link>
    </div>
  );
}
