"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { axios } from "axios";

export default function SignupPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onSignUp = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Registre-se</h1>
      <hr />
      <label htmlFor="username">Nome do Usuário</label>
      <input
        className="p-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
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
        onClick={onSignUp}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Registrar
      </button>
      <Link href="/login">Visite a página de Login</Link>
    </div>
  );
}
