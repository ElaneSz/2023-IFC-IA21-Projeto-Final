import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../Input";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { db } from "../../services/firebaseConnection";
import {
    collection,
    addDoc,
    getFirestore,
} from "firebase/firestore";

export function CadastroForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [curso, setCurso] = useState("");
    const [instituicao, setInstituicao] = useState("")
    const navigate = useNavigate();

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (email === "" || password === "" || nome === "" || idade === "" || curso === "" || instituicao === "") {
            alert("Preencha todos os campos!");
            return;
        }

        try {
            // Criação do usuário no Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Adição de dados do usuário na coleção "usuarios" no Firebase Firestore
            const db = getFirestore();
            await addDoc(collection(db, "usuarios"), {
                uid: user.uid,
                nome,
                idade,
                curso,
                email,
                instituicao,
            });

            console.log("CADASTRADO COM SUCESSO");
            navigate("/login", { replace: true });
        } catch (error) {
            console.log("ERRO AO FAZER O CADASTRO:", error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col px-2">
            <Input
                placeholder="Digite o seu nome..."
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <Input
                placeholder="Digite a sua idade..."
                type="number"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
            />

            <Input
                placeholder="Digite a sua instituicao..."
                type="text"
                value={instituicao}
                onChange={(e) => setInstituicao(e.target.value)}
            />

            <Input
                placeholder="Digite o seu curso..."
                type="text"
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
            />

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
                className="h-9 bg-purple-800 rounded border-0 text-lg font-medium text-white"
            >
                Cadastrar
            </button>

            <p className="mt-4 text-gray-100">
                Já tem uma conta? <Link to="/login">Faça login</Link>.
            </p>
        </form>
    );
}
