
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "zjesc obiad", done: false },
  { id: 2, content: "nauczy sie react-a", done: false },
  { id: 3, content: "nauczy sie pythona", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header 
        title="Lista zadań 2" 
      /> 
      <Section 
        title="Dodaj nowe zadanie" 
        body={<Form />} 
      />
      <Section 
        title="Lista zadań" 
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />} 
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />} 
      />
    </Container>
  );
}

export default App;
