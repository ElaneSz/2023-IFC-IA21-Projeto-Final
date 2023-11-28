import { Link } from 'react-router-dom';
import { useState, FormEvent, useEffect, Children } from 'react';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { db } from '../../services/firebaseConnection';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import Medusa from "../../../public/iconMedusa.png";
import { child } from 'firebase/database';

interface UserData {
  nome: string;
  idade: number;
  curso: string;
  email: string;
  instituicao: string;
}
console.log(localStorage)

export function UserProfile() {
  const [userData, setUserData] = useState<UserData>({
    nome: '',
    idade: 0,
    curso: '',
    email: '',
    instituicao: '',
  });

  useEffect(() => {
    function loadUserData() {
      // 'ID_DO_USUARIO' do usuário logado
      const userId = 'PLSlFmp1Aln8G3Ndq0Cb';
      const userDocRef = doc(db, 'usuarios', userId);
      getDoc(userDocRef).then((snapshot) => {
        if (snapshot.exists()) {
          setUserData(snapshot.data() as UserData);
        }
      });
    }
    loadUserData();
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // 'ID_DO_USUARIO' do usuário logado
    const userId = 'PLSlFmp1Aln8G3Ndq0Cb';
    const userDocRef = doc(db, 'usuarios', userId);

    updateDoc(userDocRef, {
      nome: userData.nome,
      idade: userData.idade,
      curso: userData.curso,
      email: userData.email,
      instituicao: userData.instituicao,
    })
      .then(() => {
        console.log('Informações atualizadas com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao atualizar as informações:', error);
      });
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2 bg-purple-500">
      <Header />

      <img
        src={Medusa}
        alt="Imagem"
        style={{ width: '10%', height: 'auto', position: 'fixed', bottom: 0, right: 0 }}
      />

      <h1 className="mt-11 text-white mb-7 font-bold text-5xl">
        Medusa
        <span className="bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent">
          Books
        </span>
      </h1>

      <form className="flex flex-col max-w-xl w-full" onSubmit={handleSubmit}>
        <label className="text-white font-medium mt-2 mb-2">Nome</label>
        <Input
          type="text"
          placeholder="Digite o seu nome..."
          value={userData.nome}
          onChange={(e) => setUserData((prev) => ({ ...prev, nome: e.target.value }))}
        />

        <label className="text-white font-medium mt-2 mb-2">Idade</label>
        <Input
          type="number"
          placeholder="Digite a sua idade..."
          value={userData.idade.toString()}
          onChange={(e) => setUserData((prev) => ({ ...prev, idade: parseInt(e.target.value, 10) }))}
        />

        <label className="text-white font-medium mt-2 mb-2">Curso</label>
        <Input
          type="text"
          placeholder="Digite o seu curso..."
          value={userData.curso}
          onChange={(e) => setUserData((prev) => ({ ...prev, curso: e.target.value }))}
        />

        <label className="text-white font-medium mt-2 mb-2">Email</label>
        <Input
          type="email"
          placeholder="Digite o seu email..."
          value={userData.email}
          onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
        />

        <label className="text-white font-medium mt-2 mb-2">Instituição</label>
        <Input
          type="text"
          placeholder="Digite a sua instituição..."
          value={userData.instituicao}
          onChange={(e) => setUserData((prev) => ({ ...prev, instituicao: e.target.value }))}
        />

        <button
          type="submit"
          className="text-white bg-purple-800 h-9 rounded-md items-center justify-center flex mb-7 font-medium"
        >
          Salvar informações
        </button>
      </form>
    </div>
  );
}