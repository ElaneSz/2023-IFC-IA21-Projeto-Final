import { styled } from "styled-components"

const Container = styled.div`
    display: flex;
    height: 100vh;
    

    > * {
        flex-grow: 1
    }

    .image {
        background-color:  #9788c4;
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
            font-size: 1.5rem;
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
                    outline: none;
                }
            }

            button {
                font-size: .8em;
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
            }

            button:hover {
                background: #afa1db;
                box-shadow: inset 2px 2px 2px rgba(0,0,0,0.2);
                text-shadow: none;
            }
        }
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
                    <label>Login</label>
                    <input name="login" />
                </div>
                <div>
                    <label>Senha</label>
                    <input type="password" name="password" />
                </div>
                <button>Entrar</button>
                <button>Recuperar Senha</button>
            </form>
        </div>
    </Container>
</>