const express = require('express')
const app = express()
const hbs = require('hbs');

/**En package.json se agregó un comando llamado start que ejecutará heroku */

/**Este es un middleware
 * Esta línea sirve para que la dirección que se ingrese en la url la busque en la tarjeta public
 * Ej. localhost:8080/home.html
 * __dirname: es una variable global que contiene el url del navegador
 */
app.use(express.static(__dirname + '/public'));

/**process es un objeto global, pero en este momento no existe la variable PORT
 * pero esa variable si existirá en heroku, por eso se agrega
 */
const port = process.env.PORT || 8080


//Express HBS engine (Para hacer las páginas dinámicas con hbs)
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        name: 'Manuel Rodríguez',
        year: new Date().getFullYear()
    })
})

app.listen(port, () => console.log(`listening on port ${port}`))