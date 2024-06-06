import { NavLink, useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { MenuItem } from "../MenuItem";
import { useAuth } from "../../hooks/useAuth";

type SideBarTypes = {
  toogleSideBar?: () => void;
};

export function SideBar({ toogleSideBar }: SideBarTypes) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function logOutApp() {
    const resp = confirm("Deseja sair da aplicação?");

    if (resp) {
      signOut();
      navigate("/");
    }
  }

  return (
    <Container onClick={toogleSideBar}>
      <div className="asideMenu" onClick={toogleSideBar}>
        <i className="closeIcon material-icons" onClick={toogleSideBar}>
          close
        </i>

        <nav>
          <ul>
            <NavLink to={"/"} onClick={toogleSideBar}>
              <MenuItem title="Home" icon="home" />
            </NavLink>

            <NavLink to={"/tasks"} onClick={toogleSideBar}>
              <MenuItem title="Tarefa" icon="task" />
            </NavLink>

            <NavLink to={"/create-tasks"} onClick={toogleSideBar}>
              <MenuItem title="Adicionar" icon="add_circle" />
            </NavLink>

            <NavLink to={"/about"} onClick={toogleSideBar}>
              <MenuItem title="Sobre" icon="info" />
            </NavLink>

            <div onClick={logOutApp}>
              <MenuItem title="Sair" icon="exit_to_app" />
            </div>
          </ul>
        </nav>
      </div>
    </Container>
  );
}
