import { TaskDataTypes } from "../TaskCard";
import { Container } from "./styles";

type ModalTaskDetailsTypes = {
  toggleModal?: () => void;
  task: TaskDataTypes;
};

export function ModalTaskDetails({ toggleModal, task }: ModalTaskDetailsTypes) {
  return (
    <Container onClick={toggleModal}>
     <div className="handleTaskContainer" onClick={toggleModal}>
      <div className="formContainer">
        <div className="headerForm">
          <h2>Detalhes da Tarefa</h2>
          <i className="material-icons closeIcon" onClick={toggleModal}>close</i>
        </div>
        {task.title}
        {/* <form ></form> */}
      </div>
     </div>
    </Container>
  );
}
