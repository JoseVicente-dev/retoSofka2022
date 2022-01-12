
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache} from "@apollo/client";
import Ingreso from './paginas/Ingreso';


const client = new ApolloClient({
  uri: 'https://concursobackend.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Ingreso/>}/>

          
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
