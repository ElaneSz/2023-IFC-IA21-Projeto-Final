import React, { useEffect, useState } from 'react';
import { db } from '../../services/firebaseConnection';
import { Header } from '../../components/Header';
import Medusa from '../../../public/iconMedusa.png';
import { Link } from 'react-router-dom';
import {
  getDocs,
  collection,
  orderBy,
  query,
} from 'firebase/firestore';

interface FrasesLivrosProps {
  id: string;
  frase: string;
  autor: string;
  created: Date;
}

export function MinhasFrases() {
  const [frasesLivros, setFrasesLivros] = useState<FrasesLivrosProps[]>([]);

  useEffect(() => {
    function carregarFrasesLivros() {
      const frasesLivrosRef = collection(db, 'frasesLivros');
      const queryRef = query(frasesLivrosRef, orderBy('created', 'asc'));

      getDocs(queryRef).then((snapshot) => {
        let lista = [] as FrasesLivrosProps[];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            frase: doc.data().frase,
            autor: doc.data().autor,
            created: doc.data().created.toDate(),
          });
        });

        setFrasesLivros(lista);
      });
    }
    carregarFrasesLivros();
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      <Header />
      <Link to="/">
        <h1 className="mt-11 text-white mb-7 font-bold text-5xl">
          Medusa
          <span className="bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent">
            Books
          </span>
        </h1>
      </Link>
      <span className="text-white mb-5 mt-3">Veja algumas frases ♡</span>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl">
        {frasesLivros.map((fraseLivro) => (
          <section
            key={fraseLivro.id}
            className="w-full bg-white p-4 rounded-lg shadow-md relative"
          >
            <div>
              <p className="text-base md:text-lg text-purple-500">"{fraseLivro.frase}"</p>
              <p className="text-sm italic text-gray-500">{fraseLivro.autor}</p>
              <p className="text-sm text-gray-500">
                Criado em: {fraseLivro.created.toLocaleDateString()}
              </p>
            </div>
            <button
              className="absolute bottom-2 right-2 bg-purple-500 text-white p-2 rounded m-1"
              onClick={() => copyToClipboard(`"${fraseLivro.frase}" - ${fraseLivro.autor}`)}
            >
              Copiar
            </button>
          </section>
        ))}
      </main>
      <img
        src={Medusa}
        alt="Imagem"
        style={{ width: '10%', height: 'auto', position: 'fixed', bottom: 0, right: 0 }}
      />
    </div>
  );
}
