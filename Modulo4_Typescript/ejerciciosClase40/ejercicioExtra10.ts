// 1. Declara un enum llamado NivelesDeAcceso con los valores: Admin,
// Usuario, Invitado.
// 2. Crea una función que reciba un nivel de acceso y devuelva un mensaje
// indicando el tipo de permisos disponibles para ese nivel.
// 3. Usa el enum para llamar a la función con el nivel Usuario y muestra el
// resultado por consola.

enum NivelesDeAcceso{
    Admin,
    Usuario,
    Invitado
}

function obtenerPermiso(nivel:NivelesDeAcceso) {
    if (nivel== NivelesDeAcceso.Admin) {
        return "Permisos completos: puede leer, escribir y modificar.";  
    }else if(nivel == NivelesDeAcceso.Usuario) {
        return "Permisos limitados: puede leer y escribir.";
    } else if(nivel == NivelesDeAcceso.Invitado) {
        return "Permisos mínimos: solo puede leer.";
    }else{
        return "Nivel de acceso no reconocido.";
    }
};

 export let resultado = obtenerPermiso(NivelesDeAcceso.Usuario);
console.log(resultado);