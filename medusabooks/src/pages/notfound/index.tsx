import { Link } from 'react-router-dom';
import Medusa from "../../../public/iconMedusa.png"

export function NotFound() {
  return (
    <div className="flex w-full min-h-screen justify-center items-center flex-col text-white bg-purple-500">
      <h1 className="font-bold text-6xl mb-2">404</h1>
      <h1 className="font-bold text-4xl mb-4">Página não encontrada</h1>
      <p className="italic text-1xl mb-4">Você caiu em uma página que não existe!</p>
      <img
        src={Medusa}
        alt="Imagem"
        style={{ width: '10%', height: 'auto', position: 'absolute', bottom: 0, right: 0 }}
      />
      <Link className="bg-gray-50/20 py-1 px-4 rounded-md" to="/">
        Voltar para home
      </Link>
    </div>
  );
}
