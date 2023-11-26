import React from "react";
import { Link } from "react-router-dom";
import { CadastroForm } from "../../components/Cadastro/CadastroForm";
import Medusa from "../../../public/iconMedusa.png"

export function Cadastro() {
  return (
    <div className="flex w-full h-screen items-center justify-center flex-col bg-purple-500">
      <img src={Medusa} alt="Imagem" style={{ width: '10%', height: 'auto' }} />
      <Link to="/">
        <h1 className="mt-11 text-white mb-7 font-bold text-5xl">
          Medusa
          <span className="bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent">
            Books
          </span>
        </h1>
      </Link>
      <CadastroForm />
    </div>
  );
}
