import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export function FormLogin() {
  const navigate = useNavigate();

  return (
    <Container>
      <h2>Faça seu login</h2>
      <form>
        <section>
          <label>
            Email:
            <input type="email" placeholder="exemplo@email.com" />
          </label>
        </section>

        <section>
          <label>
            Senha:
            <input type="password" placeholder="mínimo de 7 caracteres" />
          </label>
        </section>
      </form>

      <span className="messageChangePage">Não tem uma conta? </span>
      <button className="buttonChangePage" onClick={() => navigate("/signup")}>
        Resgistre-se
      </button>
    </Container>
  );
}
