// Función que hace una petición HTTP para obtener los personajes de la api solicitada
export const getCharacters = async () => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    return data.results.slice(0, 20); // Solo queremos los primeros 20 personajes
  } catch (error) {
    console.error("Error al obtener personajes:", error);
    return [];
  }
};