import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Welcome() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Lior Chamla" },
      { id: 2, nom: "Magali Pernin" },
      { id: 3, nom: "Joseph Durand" }
    ]
  };

  render() {
    const title = "Liste de clients";
    console.log(this);
    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {this.state.clients.map((client) => (
            <li key={client.id.toString()}>
              {client.nom} <button>X</button>
            </li>
          ))}
        </ul>
        <form>
          <input type="text" placeholder="Ajouter un client" />
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
