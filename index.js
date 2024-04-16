import express from 'express'
import {fileURLToPath} from 'url';
import {dirname} from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
console.clear();

/* 2. Definir la carpeta “assets” como carpeta pública del servidor. (1 Punto) */
app.use(express.static('assets'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


/* 3. Crear en el servidor un arreglo de nombres y devolverlo en formato JSON a través de la ruta /abracadabra/usuarios. (2 Puntos*/
const usuarios = ['Juan', 'Pedro', 'Pablo', 'Maria', 'Ana', 'Jose', 'Luis', 'Carlos', 'Rosa', 'Laura'];

app.get('/abracadabra/usuarios', (req, res) => {
    res.json(usuarios)
})


/*   4. Crear un middleware con la ruta /abracadabra/juego/:usuario para validar que el
usuario recibido como parámetro “usuario” existe en el arreglo de nombres creado en
el servidor.
En caso de ser exitoso, permitir el paso a la ruta GET correspondiente, de lo contrario
devolver la imagen “who.jpeg”. (2 Punto) */

app.use('/abracadabra/juego/:usuario', (req, res, next) => {
    const { usuario } = req.params;
    
    if (usuarios.map(u => u.trim().toLowerCase()).includes(usuario.trim().toLowerCase())) {
        // Si el usuario existe en el arreglo, pasamos al siguiente middleware
        next();
    } else {
    //Si el usuario no existe, devolvemos la imagen "who.jpeg"
        res.sendFile(__dirname + '/assets/who.jpeg');
    }
});

// Ruta GET correspondiente
app.get('/abracadabra/juego/:usuario', (req, res) => {
    const { usuario } = req.params;
    // Enviamos un mensaje de bienvenida al usuario
    res.send(`Bienvenido/a al juego:, ${usuario}! 🎊`);
});


/* 5.   Crear una ruta /abracadabra/conejo/:n que valide si el parámetro “n” coincide con el
número generado de forma aleatoria.
En caso de ser exitoso, devolver la imagen del conejo, de lo contrario devolver la
imagen de Voldemort. (2 Puntos) */

app.get('/abracadabra/conejo/:n', (req, res) => {

    const n = parseInt(req.params.n);
  
    const randomNumber = Math.floor(Math.random() * 4) + 1;
  
    if (n === randomNumber) {
      // Agrega el path de la imagen de conejo
      res.sendFile(__dirname + '/assets/conejito.jpg');
    } else {
      // Agrega el path de la imagen de voldemort
      res.sendFile(__dirname + '/assets/voldemort.jpg');
    }
  })


  /* 6. Crear una ruta genérica que devuelva un mensaje diciendo “Esta página no existe...” al
consultar una ruta que no esté definida en el servidor. (1 Punto) */

//Ruta generica para cuando la ruta no existe
app.get('*', (req, res) => {
    res.send('Esta página no existe 😢')
  })

  // Inicia el servidor en el puerto 3000 y muestra un mensaje en la consola una vez que el servidor está en funcionamiento.
app.listen(3000, () => console.log('Servidor corriendo el el puerto 3000'))