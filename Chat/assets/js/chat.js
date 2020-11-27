var firstmsg = true;

function textEnter() {
  var chat = document.getElementById("chat");
  var txtmsg = document.getElementById("text").value;
  if(firstmsg) {
    firstmsg = false;

    var divider = document.createElement("P");
    divider.innerHTML = "hoy";
    chat.appendChild(divider);

    var today = document.createElement("DIV");
    today.style.display= "grid";
    today.id = "today";
    chat.appendChild(today);
    today = document.getElementById("today");
  }
  var today = document.getElementById("today");
  var t = document.createElement("DIV");
  t.style.position = "relative";

  var d = document.createElement("DIV");
  d.style.position = "relative";

  var text = document.createElement("P");
  text.style.display = "inline-block";
  text.style.maxWidth = "85%";
  text.style.padding = "10px";
  text.style.borderRadius = "15px";

  var da = new Date();
  var currentTime = "";
  if(da.getHours() < 10) {
    if(da.getMinutes() < 10) {
      var currentTime = "0" + da.getHours() + ":0" + da.getMinutes();
    }
  	var currentTime = "0" + da.getHours() + ":" + da.getMinutes();
  } else {
    var currentTime = da.getHours() + ":" + da.getMinutes();
  }

  var date = document.createElement("P");
  date.innerHTML = currentTime;
  date.style.position = "absolute";
  date.style.right = "10px";
  date.style.bottom = "8px";
  date.style.fontWeight= "bold";

  text.style.backgroundColor = "rgb(80,220,100)";
  text.style.cssFloat = "right";
  text.innerHTML = document.getElementById("text").value;

  t.appendChild(text);
  d.appendChild(date);
  today.appendChild(t);
  today.appendChild(d);
}


window.onload = function () {
  var url = document.location.href;
  var name = url.split('?')[1];
  document.getElementById("record").src = "assets/txt/" + name + ".txt";
}

function LoadFile() {
    var frame = document.getElementById("record");
    var chat = document.getElementById("chat");

    var rawtxt = frame.contentWindow.document.body.childNodes[0].innerHTML;
    frame.style.display= "none";

    while (rawtxt.indexOf("\r") >= 0) {
      rawtxt = rawtxt.replace("\r", "");
    }

    var msg = rawtxt.split("\n");

    if(msg[0].charAt(0) === "$") {
      document.getElementById("nombre").innerHTML = msg[0].substr(1,msg[0].length-2);
    } else if(msg[0].charAt(0) === "@") {
      document.getElementById("nombre").innerHTML = msg[0].substr(1,msg[0].length-2);
      var divider = document.createElement("P");
      divider.innerHTML = "Bienvenidos al curso de " + msg[0].substr(1,msg[0].length-2);
      divider.style.fontSize = "1.3em";
      chat.appendChild(divider);
    } else {
      document.getElementById("nombre").innerHTML = msg[0];
    }
    var day = "00", month = "00", year = "00";
    for (var i = 1; i < msg.length; i++) {
      if(msg[i].charAt(0) === "[") {
        if(msg[i].substr(7,4) > year || msg[i].substr(1,2) > month || msg[i].substr(4,2) > day) {
          year = msg[i].substr(7,4);
          month = msg[i].substr(1,2);
          day = msg[i].substr(4,2);

          var divider = document.createElement("P");
          divider.innerHTML = msg[i].substr(1,10);
          chat.appendChild(divider);

          var time = document.createElement("DIV");
          time.style.display= "grid";
          time.id = "block" + i + "dsbs";
          chat.appendChild(time);
          time = document.getElementById("block" + i + "dsbs");
        }

        var t = document.createElement("DIV");
        t.style.position = "relative";

        var d = document.createElement("DIV");
        d.style.position = "relative";

        var text = document.createElement("P");
        text.style.display = "inline-block";
        text.style.maxWidth = "85%";
        text.style.padding = "10px";
        text.style.borderRadius = "15px";

        var date = document.createElement("P");
        date.innerHTML = msg[i].substr(14,5);
        date.style.position = "absolute";
        date.style.right = "10px";
        date.style.bottom = "8px";
        date.style.fontWeight= "bold";

        if(msg[i].charAt(19) === "=") {
          text.style.backgroundColor = "rgb(80,220,100)";
          text.style.cssFloat = "right";
          text.innerHTML = msg[i].split("@$%&amp;")[1];
        } else if(msg[i].charAt(19) === "+") {
          text.style.backgroundColor = "rgb(1, 103, 81)";
          text.style.color = "white";
          t.style.left = "10px";
          text.innerHTML = msg[i].split("@$%&amp;")[1];
        } else {
          text.style.color = "black";
          t.style.left = "10px";
          var ttt = msg[i].split("@$%&amp;");
          var info = ttt[0].split("%");
          text.style.backgroundColor = info[2];
          text.innerHTML = info[1] + "<br>" + ttt[1];
        }

        t.appendChild(text);
        d.appendChild(date);
        time.appendChild(t);
        time.appendChild(d);
      }
    }
}
