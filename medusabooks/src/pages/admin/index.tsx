import React, { FormEvent, useState, useEffect } from 'react';
import { Header } from '../../components/Header/index';
import { Input } from '../../components/Input';
import { FiTrash } from 'react-icons/fi';
import { db } from '../../services/firebaseConnection';
import Medusa from "../../../public/iconMedusa.png"
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc,
  getDocs,
} from 'firebase/firestore';

interface FrasesLivrosProps {
  id: string;
  frase: string;
  autor: string;
  created: Date;
}

export function CadastroFrasesLivros() {
  const [fraseInput, setFraseInput] = useState('');
  const [autorInput, setAutorInput] = useState('');
  const [frasesLivros, setFrasesLivros] = useState<FrasesLivrosProps[]>([]);

  useEffect(() => {
    async function fetchFrasesLivros() {
      const frasesLivrosRef = collection(db, 'frasesLivros');
      const queryRef = query(frasesLivrosRef, orderBy('created', 'asc'));

      const unsub = onSnapshot(queryRef, (snapshot) => {
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

      return () => {
        unsub();
      };
    }

    fetchFrasesLivros();
  }, []);

  async function createCollectionIfNotExists() {
    const collections = await getDocs(db);
    const collectionNames = collections.docs.map((doc) => doc.id);

    if (!collectionNames.includes('frasesLivros')) {
      await addDoc(collection(db, 'frasesLivros', 'init'), {
        created: new Date(),
      });
    }
  }

  useEffect(() => {
    createCollectionIfNotExists();
  }, []);

  function cadastrarFraseLivro(e: FormEvent) {
    e.preventDefault();

    if (fraseInput === '' || autorInput === '') {
      alert('Preencha todos os campos');
      return;
    }

    addDoc(collection(db, 'frasesLivros'), {
      frase: fraseInput,
      autor: autorInput,
      created: new Date(),
    })
      .then(() => {
        setFraseInput('');
        setAutorInput('');
        console.log('CADASTRADO COM SUCESSO');
      })
      .catch((error) => {
        console.log('ERRO AO CADASTRAR NO BANCO' + error);
      });
  }

  async function excluirFraseLivro(id: string) {
    const docRef = doc(db, 'frasesLivros', id);
    await deleteDoc(docRef);
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2 bg-purple-500">
      <Header />
      <img
        src={Medusa}
        alt="Imagem"
        style={{ width: '10%', height: 'auto', position: 'fixed', bottom: 0, right: 0 }}
      />

      <form
        className="flex flex-col mt-8 mb-3 w-full max-w-xl"
        onSubmit={cadastrarFraseLivro}
      >
        <label className="text-white font-medium mt-2 mb-2">Frase do Livro</label>
        <Input
          placeholder="Digite a frase do livro..."
          value={fraseInput}
          onChange={(e) => setFraseInput(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2">Autor(a) da Frase</label>
        <Input
          placeholder="Digite o autor da frase..."
          value={autorInput}
          onChange={(e) => setAutorInput(e.target.value)}
        />

        <button
          type="submit"
          className="mb-7 bg-purple-700 h-9 rounded-md text-white font-medium gap-4 flex justify-center items-center"
        >
          Cadastrar
        </button>
      </form>

      <h2 className="font-bold text-white mb-4 text-2xl">Frases de Livros</h2>

      {frasesLivros.map((fraseLivro) => (
        <article
          key={fraseLivro.id}
          className="flex items-center justify-between w-11/12 max-w-xl rounded py-3 px-2 mb-2 select-none"
          style={{ backgroundColor: '#341c4e', color: '#f1f1f1' }}
        >
          <div>
            <p>{fraseLivro.frase}</p>
            <p className="text-sm italic">{fraseLivro.autor}</p>
          </div>
          <div>
            <button
              className="border border-dashed p-1 rounded bg-purple-800"
              onClick={() => excluirFraseLivro(fraseLivro.id)}
            >
              <FiTrash size={18} color="#FFF" />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
