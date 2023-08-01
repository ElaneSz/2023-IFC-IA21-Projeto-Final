import { styled } from "styled-components"

const Container = styled.div`
    display: flex;
    height: 100vh;

    > * {
        flex-grow: 1;
    }

    .image {
        background-color: black;
    }

    .container-login-form {
        display: flex;
        flex-direction: column;
        aling-itens: center;
    }

    form {
        border: 1px solid black;
        panding: 2rem;

        div {
            margin-botton: 1rem;

            label {
                display: block;
            }

            input {
                border: 0 none;
            }
        }
    }
`

export default () => <>
    <Container>
        <div className="image">
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