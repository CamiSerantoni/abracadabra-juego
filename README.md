## Desafío - Abracadabra

En este desafío validaremos nuestros conocimientos de Node y Express, además de creación
de rutas, Objetos Request y Response, Middlewares y Devolución de sitios web estáticos. Para
lograrlo, necesitarás de apoyo el archivo Apoyo Desafío - Abracadabra.
Lee todo el documento antes de comenzar el desarrollo individual, para asegurarte de tener
el máximo de puntaje y enfocar bien los esfuerzos.
Descripción
Los sitios web en la actualidad son la cara visible de las empresas en el mundo digital, por
ello, requieren disponer de un espacio de fácil navegación e interesante para los usuarios.
En este contexto, el instituto recreativo más conocido de la ciudad, contrató recientemente
una asesoría de marketing para aumentar el tráfico en su sitio web. La consultora, en base al
análisis realizado a la empresa contratante, les propone aumentar la interacción con los
usuarios que visitan su sitio web, a través de la creación de juegos de azar con temáticas
relacionadas a los diferentes shows que ofrece el instituto. Además, propone que estos
juegos solo puedan realizarlos usuarios registrados, con el fin de generar más fidelidad con
su público.
En este desafío, deberás desarrollar un servidor con Express que sirva un sitio web estático
con temática de magia, donde se presenten 4 sombreros y al hacer click en uno de estos
encontrar el conejo oculto.
El servidor deberá disponibilizar las siguientes rutas:
1. /abracadabra/usuarios: Se debe devolver un JSON con un arreglo de nombres alojado
en el servidor.
2. /abracadabra/juego/:usuario: A través de un middleware, verificar que el usuario
escrito como parámetro existe en el arreglo alojado en el servidor.
3. /abracadabra/conejo/:n: Basado en un número aleatorio del 1 al 4, devolver la foto del
conejo en caso de coincidir con el número recibido como parámetro ó devolver la foto
de Voldemort en caso de no coincidir.
Las siguientes imágenes representan las interacciones que debe tener el sitio web una vez
terminado el desafío.

