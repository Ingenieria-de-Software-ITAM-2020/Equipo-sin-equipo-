function log() {
  var name = document.getElementById('name').value;
  var pswd = document.getElementById('pswd').value;
  var msg = document.getElementById('msg');

  if(name) {
    if(pswd) {
      var url = 'https://ingenieria-de-software-itam-2020.github.io/Equipo-sin-equipo-/Chat/user.html?' + encodeURIComponent(name);
      document.location.href = url;
    } else msg.innerHTML = 'Introduzca su contraseña';
  }else msg.innerHTML = 'Introduzca su usuario';
}

window.onload = function () {
  var url = document.location.href;
  var name = url.split('?')[1];
  while(name.indexOf("%20") >= 0){
  	name = name.replace("%20", " ");
  }
  alert("Hola " + name + "!");
}
