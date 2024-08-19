/**1) Tenemos un array en una variable playlist con una lista de canciones de
un disco. Recorrer la lista con la función forEach y mostrarlas una por una
utilizando console.log() */

const playlist =[
    'Concrete and Gold',
    'The Line',
    'Sunday Rain',
    'Happy Ever After(Zero Hour)',
    'Arrows',
    'Dirty Water',
    'La Dee Da',
    'The Sky Is a Naighborhood',
    'Make It Right',
    'Run',
    'T-Shirt'
]

playlist.forEach(function(canciones) {
    console.log(canciones);
})