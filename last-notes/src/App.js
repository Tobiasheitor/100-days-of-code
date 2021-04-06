import Actions from "./components/Actions";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Notes from "./components/Notes";
import NotesArea from "./components/NotesArea";
import HightLightProvider from "./context/HightLightContext";
import NoteFormProvider from "./context/NoteFormContext";
import NoteListProvider from "./context/NoteListContext";

function App() {
  return (
    <NoteFormProvider>
      <NoteListProvider>
        <HightLightProvider>
          <Header>
            <Logo />
            <Actions />
          </Header>
          <NotesArea>
            <Notes/>
          </NotesArea>
        </HightLightProvider>
      </NoteListProvider>
    </NoteFormProvider>
  );
}

export default App;
