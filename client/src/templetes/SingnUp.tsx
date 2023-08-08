import { Link } from "react-router-dom"
import { styled } from "styled-components"

const Container = styled.div` // Componente precisa iniciar com letra maiuscula | Componente de estilo
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    display: flex;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    
    > * {
        flex-grow: 1
    }

    .image {
        background-color:  #9788c4;
        border-radius: 0 30px 30px 0;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;

        .medusa {
            height: 300px;
            width: 300px;
        }
    }

    .container-login-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        form {
            font-size: 1rem;
            padding: 2rem;
            box-shadow: 0 0 7em rgb(113, 60, 156);
            border-radius: 30px 0;

            div {
                margin-bottom: 1rem;

                label {
                    display: block;
                    color: #5b5b5b;
                }

                input {
                    font-size: 1.5rem;
                    padding: .5rem;
                    border: 0 none;
                    border-bottom: 1px solid black;
                    outline: none; // Tira a borda quando selecionado
                }
            }
        }
    }
`

const AccentButton = styled.button`
    font-size: 1em;
    background: #59429d;
    border: 0;
    border-radius: 5px;
    margin-bottom: .3rem;
    color: #ffffff;
    padding: 0.2em 0.6em;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
    text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
    transform: translate(-3%, -3%);
    cursor: pointer;
    margin-right: 10px;

    &:hover {
        background: #afa1db;
        box-shadow: inset 2px 2px 2px rgba(0,0,0,0.2);
        text-shadow: none;
    }

` 

export default () => <>
    <Container> 
        <div className="image">
            <img className="medusa" src="src/components/medusa.png" alt="Medusa" />
        </div>
        <div className="container-login-form">
            <form>
                <div>
                    <label>Nome</label>
                    <input name="nome" />
                </div>
                <div>
                    <label>Idade</label>
                    <input name="idade" />
                </div>
                <div>
                    <label>Data de Nascimento</label>
                    <input type="date" name="dtaNasc" />
                </div>
                <div>
                    <label>E-Mail</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>Login</label>
                    <input name="login" />
                </div>
                <div>
                    <label>Senha</label>
                    <input type="password" name="password" />
                </div>
                <Link to="/"><AccentButton>Enviar</AccentButton></Link>
                <AccentButton>Recuperar Senha</AccentButton>
            </form>
        </div>
    </Container>
</>