// src/List.jsx
export function List({ animals }) {
  if (!animals) {
    return <div>Loading...</div>; // se la lista non esiste
  }

  if (animals.length === 0) {
    return <div>There are no animals in the list!</div>; // se è vuota
  }

  return (
    <ul>
      {animals.map((animal) =>
        // Condizione: mostra solo animali che iniziano con "L"
        animal.startsWith("L") ? <li key={animal}>{animal}</li> : null
      )}
    </ul>
  );
}
