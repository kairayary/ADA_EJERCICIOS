/**Tenemos un array en una variable playlist con una lista de canciones de
un disco. Recorrer la lista con la función forEach y mostrar la posición y el
nombre de la canción utilizando un console.log() */

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

playlist.forEach((nombre, indice)=>{
    console.log(`La canción ${nombre} esta en la posición ${indice + 1} `)
})