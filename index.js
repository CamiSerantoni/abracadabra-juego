import express from 'express'
import {fileURLToPath} from 'url';
import {dirname} from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
console.clear();


console.log('salida de__dirname', __dirname);
console.log('salida de__filename', __filename);

/* 2. Definir la carpeta “assets” como carpeta pública del servidor. (1 Punto) */
app.use(express.static('assets'))


app.get('/', (req, res) => {

    console.log(res);
    res.sendFile(__dirname + '/index.html')
})


/* 
3. Crear en el servidor un arreglo de nombres y devolverlo en formato JSON a través de la ruta /abracadabra/usuarios. (2 Puntos*/
const usuarios = ['Juan', 'Pedro', 'Pablo', 'Maria', 'Ana', 'Jose', 'Luis', 'Carlos', 'Rosa', 'Laura'];


app.get('/abracadabra/usuarios', (req, res) => {
    res.json(usuarios)
})




/*   4. Crear un middleware con la ruta /abracadabra/juego/:usuario para validar que el
usuario recibido como parámetro “usuario” existe en el arreglo de nombres creado en
el servidor.
En caso de ser exitoso, permitir el paso a la ruta GET correspondiente, de lo contrario
devolver la imagen “who.jpeg”. (2 Punto*/

app.use('/abracadabra/juego/:usuario', (req, res, next) => {
    const { usuario } = req.params;
    
    if (usuarios.map(u => u.trim().toLowerCase()).includes(usuario.trim().toLowerCase())) {
        // Si el usuario existe en el arreglo, pasamos al siguiente middleware
        next();
    } else {
        // Si el usuario no existe, enviamos un error 404
        res.sendFile(__dirname + '/assets/who.jpeg');
    }
});

// Ruta GET correspondiente
app.get('/abracadabra/juego/:usuario', (req, res) => {
    const { usuario } = req.params;
    // Aquí puedes agregar la lógica adicional que deseas ejecutar cuando el usuario es válido
    res.send(`Bienvenido, ${usuario}!`);
});




/* 5.   Crear una ruta /abracadabra/conejo/:n que valide si el parámetro “n” coincide con el
número generado de forma aleatoria.
En caso de ser exitoso, devolver la imagen del conejo, de lo contrario devolver la
imagen de Voldemort. (2 Puntos) */
app.get('/abracadabra/conejo/:n', (req, res) => {
    // Extract the 'n' parameter from the request URL
    const n = parseInt(req.params.n);
  
    // Generate a random number between 1 and 4
    const randomNumber = Math.floor(Math.random() * 4) + 1;
  
    // Check if the parameter 'n' matches the random number
    if (n === randomNumber) {
      // Send the "conejo.jpeg" image if the numbers match
      res.sendFile(__dirname + '/assets/conejito.jpg');
    } else {
      // Send the "voldemort.jpeg" image if the numbers don't match
      res.sendFile(__dirname + '/assets/voldemort.jpg');
    }
  })

  /* 6. Crear una ruta genérica que devuelva un mensaje diciendo “Esta página no existe...” al
consultar una ruta que no esté definida en el servidor. (1 Punto) */

app.get('*', (req, res) => {
    res.send('Esta página no existe...')
  })


app.listen(3000, () => console.log('Server running on port 3000'))