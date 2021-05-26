import axios from "axios";
import React from "react";

export default function Home() {
  const [dados, setDados] = React.useState(null);
  const [input, setInput] = React.useState("");

  async function puxarDados(user) {
    const response = await axios.get(
      `http://api.github.com/users/${user}/starred`
    );
    setDados(response.data);
  }

  function updateValue(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <label>Digite o usuário do Github</label>
      <input type="text" name="user" onChange={(e) => updateValue(e)} />
      <button onClick={() => puxarDados(input)}>Buscar stars</button>

      {dados &&
        dados.map((item) => (
          <div key={item.id}>
            <p>Id: {item.id}</p>
            <p>Nome: {item.name}</p>
            <p>Descrição: {item.description}</p>
            <p>URL: {item.html_url}</p>
          </div>
        ))}
    </div>
  );
}
