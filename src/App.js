// Importamos React y hooks de estado y efecto
import React, { useEffect, useState } from 'react';
// Importamos la función que obtiene los personajes desde la API externa
import { getCharacters } from './services/api';
// Importamos componentes de Material UI para maquetar y estilizar las tarjetas
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  CardActions,
  Button
} from '@mui/material';

// Componente principal de la aplicación
function App() {
  // Creamos estado local para almacenar la lista de personajes
  const [characters, setCharacters] = useState([]);

  // useEffect se ejecuta al montar el componente para obtener los datos
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacters(); // Llamamos al servicio
      setCharacters(data); // Guardamos los datos en el estado
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      {/* Título principal */}
      <Typography variant="h4" gutterBottom>
        Fichas técnicas - Personajes de Rick and Morty
      </Typography>
      {/* Subtítulo con una descripción */}
      <Typography variant="subtitle1" gutterBottom>
        Tarjetas de los primeros 20 personajes de la API de Rick and Morty en el formato del componente Card de MaterialUI
      </Typography>
      {/* Contenedor en forma de grilla para las tarjetas */}
      <Grid container spacing={4}>
        {characters.map((char) => (
          <Grid item xs={12} sm={6} md={4} key={char.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 2, p:1 }}>
              <CardMedia
                component="img"
                height="200"
                image={char.image}
                alt={char.name}
              />
              {/* Contenido textual de la tarjeta */}
              <CardContent>
                <Typography variant="h6">{char.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Species: {char.species}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Status: {char.status}
                </Typography>
              </CardContent>
              {/* Acciones como compartir personaje y ver más info del mismo */}           
              <CardActions sx={{ mt: 'auto' }}>
                {/* Botón Share: para compartir el personaje */}
                <Button
                  size="small"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: `Rick and Morty - ${char.name}`,
                        url: `https://rickandmorty.fandom.com/wiki/${char.name}`
                      }).catch(console.error);
                    } else {
                      // Fallback: Copiamos al portapapeles
                      navigator.clipboard.writeText(`https://rickandmorty.fandom.com/wiki/${char.name}`)
                        .then(() => alert('Link copied to clipboard!'));
                    }
                  }}
                >
                  Share
                </Button>

                {/* Botón Learn More: Información sobre un personaje en la wiki fandom de la serie */}
                <Button
                  size="small"
                  href={`https://rickandmorty.fandom.com/wiki/${char.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;