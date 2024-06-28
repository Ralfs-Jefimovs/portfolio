function secret() {
    var x = document.getElementById("frm1");
    var text = "esmīluCēsis";
    if (text == x.elements[0].value){
        document.location.href="secret.html";
    }
    else{
        alert("Nav pareizā parole!!!!!!!!!!!!!!!");
    }

  }