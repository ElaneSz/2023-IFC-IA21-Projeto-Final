import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from '../../components/Input'
import Medusa from "../../../public/iconMedusa.png"

import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (email === '' || password === '') {
      alert("Preencha todos os campos!")
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("LOGADO COM SUCESSO")
        navigate("/admin", { replace: true })
      })
      .catch((error) => {
        console.log("ERRO AO FAZER O LOGIN:")
        console.log(error);
      })
  }

  return (
    <div className="flex w-full h-screen items-center justify-center flex-col bg-purple-500">
      <img src={Medusa} alt="Imagem" style={{ width: '10%', height: 'auto' }} />
      <Link to="/">
        <h1 className="mt-11 text-white mb-7 font-bold text-5xl">Medusa
          <span className="bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent">Books</span>
        </h1>
      </Link>

      <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col px-2">
        <Input
          placeholder="Digite o seu email..."
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="*********"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="h-9 bg-purple-800 rounded border-0 text-lg font-medium text-white mt-4"
        >
          Acessar
        </button>
        <p className="mt-4 text-gray-100">
          Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>.
        </p>
      </form>
    </div>
  )
}
