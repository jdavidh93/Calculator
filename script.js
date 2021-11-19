//Campos de letras y numeros
const letters = document.getElementById("letters");
const numbers = document.getElementById("numbers");

//Botones
const a1 = document.getElementById("a1");
const b2 = document.getElementById("b2");
const c3 = document.getElementById("c3");
const d4 = document.getElementById("d4");
const e5 = document.getElementById("e5");
const f6 = document.getElementById("f6");
const g7 = document.getElementById("g7");
const h8 = document.getElementById("h8");
const i9 = document.getElementById("i9");
const j0 = document.getElementById("j0");
const cl = document.getElementById("cl");
const cn = document.getElementById("cn");

//Funciones

const fnA1 = () => {
  if (letters.innerHTML == "ABCDEFGHIJ") {
    numbers.innerHTML = "1";
  } else {
    letters.innerHTML = "A";
  }
};
const fnB2 = () => {
  if (letters.innerHTML == "ABCDEFGHIJ") {
    if (numbers.innerHTML == "1") {
      numbers.innerHTML += "2";
    } else {
      alert("Faltan numeros");
    }
  } else {
    if (letters.innerHTML == "A") {
      letters.innerHTML += "B";
    } else {
      alert("Faltan letras");
    }
  }
};
const fnC3 = () => {
  if (letters.innerHTML == "ABCDEFGHIJ") {
    if (numbers.innerHTML == "12") {
      numbers.innerHTML += "3";
    } else {
      alert("Faltan numeros");
    }
  } else {
    if (letters.innerHTML == "AB") {
      letters.innerHTML += "C";
    } else {
      alert("Faltan letras");
    }
  }
};
const fnD4 = () => {
  if (letters.innerHTML == "ABCDEFGHIJ") {
    if (numbers.innerHTML == "123") {
      numbers.innerHTML += "4";
    } else {
      alert("Faltan numeros");
    }
  } else {
    if (letters.innerHTML == "ABC") {
      letters.innerHTML += "D";
    } else {
      alert("Faltan letras");
    }
  }
};
const fnE5 = () => {
  if (letters.innerHTML == "ABCDEFGHIJ") {
    if (numbers.innerHTML == "1234") {
      numbers.innerHTML += "5";
    } else {
      alert("Faltan numeros");
    }
  } else {
    if (letters.innerHTML == "ABCD") {
      letters.innerHTML += "E";
    } else {
      alert("Faltan letras");
    }
  }
};
const fnF6 = () => {
  if (letters.innerHTML == "ABCDEFGHIJ") {
    if (numbers.innerHTML == "12345") {
      numbers.innerHTML += "6";
    } else {
      alert("Faltan numeros");
    }
  } else {
    if (letters.innerHTML == "ABCDE") {
      letters.innerHTML += "F";
    } else {
      alert("Faltan letras");
    }
  }
};
const fnG7 = () => {
  if (letters.innerHTML == "ABCDEFGHIJ") {
    if (numbers.innerHTML == "123456") {
      numbers.innerHTML += "7";
    } else {
      alert("Faltan numeros");
    }
  } else {
    if (letters.innerHTML == "ABCDEF") {
      letters.innerHTML += "G";
    } else {
      alert("Faltan letras");
    }
  }
};
const fnH8 = () => {
  if (letters.innerHTML == "ABCDEFGHIJ") {
    if (numbers.innerHTML == "1234567") {
      numbers.innerHTML += "8";
    } else {
      alert("Faltan numeros");
    }
  } else {
    if (letters.innerHTML == "ABCDEFG") {
      letters.innerHTML += "H";
    } else {
      alert("Faltan letras");
    }
  }
};
const fnI9 = () => {
  if (letters.innerHTML == "ABCDEFGHIJ") {
    if ((numbers.innerHTML = "12345678")) {
      numbers.innerHTML += "9";
    } else {
      alert("Faltan numeros");
    }
  } else {
    if (letters.innerHTML == "ABCDEFGH") {
      letters.innerHTML += "I";
    } else {
      alert("Faltan letras");
    }
  }
};
const fnJ0 = () => {
  if (letters.innerHTML == "ABCDEFGHIJ") {
    if ((numbers.innerHTML = "123456789")) {
      numbers.innerHTML += "0";
    } else {
      alert("Faltan numeros");
    }
  } else {
    if (letters.innerHTML == "ABCDEFGHI") {
      letters.innerHTML += "J";
    } else {
      alert("Faltan letras");
    }
  }
};

const fnCL = () => {
  if (letters.innerHTML == "ABCDEFGHIJ") {
    letters.innerHTML = " ";
  } else {
    alert("No letras para borrar");
  }
};
const fnCN = () => {
  if (numbers.innerHTML == "1234567890") {
    numbers.innerHTML = " ";
  } else {
    alert("No hay numeros para borrar");
  }
};

//Evento
a1.onclick = () => {
  fnA1();
};
b2.onclick = () => {
  fnB2();
};
c3.onclick = () => {
  fnC3();
};
d4.onclick = () => {
  fnD4();
};
e5.onclick = () => {
  fnE5();
};
f6.onclick = () => {
  fnF6();
};
g7.onclick = () => {
  fnG7();
};
h8.onclick = () => {
  fnH8();
};
i9.onclick = () => {
  fnI9();
};
j0.onclick = () => {
  fnJ0();
};
cl.onclick = () => {
  fnCL();
};
cn.onclick = () => {
  fnCN();
};
