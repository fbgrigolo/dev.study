import React from "react";

function App() {
    // function handleClick(event) {
    //   console.log(event)
    // }

    function handleScroll(event) {
      console.log(event)
    }

    window.addEventListener("scroll", handleScroll);

    return (
      <div style={{height: "200vh"}}>
        <button onClick={(event) => {console.log(event)}}>
          Clique
        </button>
      </div>
  );
}

export default App;
