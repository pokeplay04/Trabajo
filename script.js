function mostrardatos(){
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
  
    var mensaje = "Nombre: " + nombre + "\nApellidos: " + apellidos + "\nCorreo: " + correo;
    if (document.getElementById("comentario").value != ""){
      var comentario = document.getElementById("comentario").value;
      mensaje += "\n--------------------------\nMensajes adicionales:\n" + comentario;
      }
  
    alert(mensaje);
}
  
function limpiar(){
    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("correo").value = "";
}