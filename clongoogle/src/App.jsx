import Pagina from "./components/pagina/Paginas";
import Buscadores from "./components/bucadores/Buscadores";
import Home from "./components/home/Home";
import Navegador from "./components/navegador/Navegador";


function App() {
   return (
      <div>
         {<Home />}
         {<Buscadores />}
         {<Navegador />}
         {<Pagina />}
      </div>
   );
}

export default App;
