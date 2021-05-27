import axios from "axios";
import React from "react";

export default function Home() {
  const [dados, setDados] = React.useState(null);
  const [input, setInput] = React.useState("");
  const [tagMenu, setTagMenu] = React.useState(false);
  const [tagValue, setTagValue] = React.useState("");

  async function puxarDados(user) {
    const response = await axios.get(
      `http://api.github.com/users/${user}/starred`
    );
    setDados(response.data);
  }

  function updateValue(e) {
    setInput(e.target.value);
  }

  function toggleTagMenu() {
    setTagMenu(!tagMenu);
  }

  function handleTagValue(e) {
    setTagValue(e.target.value);
  }

  function updateTag(value) {
    console.log(value);
  }

  return (
    <div>
      <label>Digite o usuário do Github</label>
      <input type="text" name="user" onChange={(e) => updateValue(e)} />
      <button onClick={() => puxarDados(input)}>Buscar stars</button>

      {dados?.tag}
      {dados &&
        dados.map((item) => (
          <div key={item.id}>
            <p>Id: {item.id}</p>
            <p>Nome: {item.name}</p>
            <p>Descrição: {item.description}</p>
            <p>URL: {item.html_url}</p>
            <div>
              <button onClick={toggleTagMenu}>Criar Tag</button>
              <button>Editar Tag</button>
              <button>Excluir Tag</button>
              {tagMenu && (
                <div>
                  <label>Digite a tag:</label>
                  <input
                    type="text"
                    name="tag"
                    onChange={(e) => handleTagValue(e)}
                  />
                  <button onClick={() => updateTag(tagValue)}>Ok</button>
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
