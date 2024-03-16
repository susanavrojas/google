import "./home.css";

function Home() {
   return (
      <header className="header">
         <nav>
            <div className="App">
               <ul>
                  <a href="#" className="etiqueta-uno">
                     Gmail
                  </a>
               </ul>
               <ul>
                  <a href="#" className="etiqueta-dos">
                     Imágenes
                  </a>
               </ul>
               <div className="apps">
                  <ul style={{ marginTop: "5px" }}>
                     <a href="#" className="etiqueta-tres">
                        Iniciar Sesión
                     </a>
                  </ul>
               </div>
            </div>
         </nav>
         <div className="logo">
            <img src="src\assets\google.png" alt="Google" />
         </div>
      </header>
   );
}

export default Home;
