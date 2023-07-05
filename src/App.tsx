import { Header } from "components/Header";
import { MainContainer } from "./styles";
import { AppContextProvider } from "context";

function App() {
  return (
    <AppContextProvider>
      <Header />
      <MainContainer></MainContainer>
    </AppContextProvider>
  );
}

export default App;
