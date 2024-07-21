import { useState } from "react";

import "./App.css";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <h1> Hello Worlds</h1>
         <div className="Apps">
            <div className="App">1</div>
            <div className="App">2</div>
            <div className="App">3</div>
            <div className="App">4</div>
            <div className="App">5</div>
            <div className="App">6</div>
         </div>
      </>
   );
}

export default App;
