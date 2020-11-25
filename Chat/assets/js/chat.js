function textEnter() {
  var txtmsg = document.getElementById("text").value;
  alert(txtmsg);
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

    document.getElementById("nombre").innerHTML = msg[0];
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
        text.innerHTML = msg[i].substr(22);
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
        } else {
          text.style.backgroundColor = "rgb(1, 103, 81)";
          text.style.color = "white";
          t.style.left = "10px";
        }

        t.appendChild(text);
        d.appendChild(date);
        time.appendChild(t);
        time.appendChild(d);
      }
    }
}
