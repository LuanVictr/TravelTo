import React, { useState } from "react"
import Context from "./Context";

function Provider ({children}) {
  
  const [test, setTest] = useState([]);

  const value = {
    test, 
    setTest,
  }

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

export default Provider;