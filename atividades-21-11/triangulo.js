function triangulo() {
    let LadoA = document.getElementById("A").value;
    let LadoB = document.getElementById("B").value;
    let LadoC = document.getElementById("C").value;
    if (LadoA == LadoC && LadoC == LadoB) {
      document.getElementById("result").innerHTML = "Equilatero";
    } else if (
      (LadoA == LadoB) ^
      (LadoB == LadoC) ^
      (LadoA == LadoC)
    ) {
      document.getElementById("result").innerHTML = "Isosceles";
    } else {
      document.getElementById("result").innerHTML = "Escaleno";
    }
  }
  
  function media() {
    let Nota1 = parseFloat(document.getElementById("N1").value);
    let Nota2 = parseFloat(document.getElementById("N2").value);
    let Nota3 = parseFloat(document.getElementById("N3").value);
    let media = (Nota1 + Nota2 + Nota3) / 3;
    console.log(Nota1 + ", " + Nota2 + ", " + Nota3 + ", " + media);
    if (media > 7) {
      document.getElementById("media").innerHTML = "Aprovado com média: " + media;
    } else {
      document.getElementById("media").innerHTML =
        "Reprovado com média: " + media;
    }
  }
  
  function mes() {
    let mes = parseInt(document.getElementById("Mes").value);
    switch (mes) {
      case 1:
        document.getElementById("resultadomes").innerHTML = "Janeiro";
        break;
      case 2:
        document.getElementById("resultadomes").innerHTML = "Fevereiro";
        break;
      case 3:
        document.getElementById("resultadomes").innerHTML = "Março";
        break;
      case 4:
        document.getElementById("resultadomes").innerHTML = "Abril";
        break;
      case 5:
        document.getElementById("resultadomes").innerHTML = "Maio";
        break;
      case 6:
        document.getElementById("resultadomes").innerHTML = "Junho";
        break;
      case 7:
        document.getElementById("resultadomes").innerHTML = "Julho";
        break;
      case 8:
        document.getElementById("resultadomes").innerHTML = "Agosto";
        break;
      case 9:
        document.getElementById("resultadomes").innerHTML = "Setembro";
        break;
      case 10:
        document.getElementById("resultadomes").innerHTML = "Outubro";
        break;
      case 11:
        document.getElementById("resultadomes").innerHTML = "Novembro";
        break;
      case 12:
        document.getElementById("resultadomes").innerHTML = "Dezembro";
        break;
      default:
        document.getElementById("resultadomes").innerHTML = "Mês invalido";
        break;
    }
  }
  function grande() {
      document.getElementById("jotaro").style.width = "500px"
      document.getElementById("jotaro").style.height   = "500px"
  }
  function medio() {
      document.getElementById("jotaro").style.width = "300px"
      document.getElementById("jotaro").style.height   = "300px"
  }
  function pequeno() {
      document.getElementById("jotaro").style.width = "100px"
      document.getElementById("jotaro").style.height   = "100px"
  }
  
  
  