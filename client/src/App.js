import Container from "./components/container";
import { VoteProvider } from "./components/contexts/vote-context";

function App() {
  return (
    <div className="App">
      <VoteProvider>
        <Container />
      </VoteProvider>
    </div>
  );
}

export default App;
