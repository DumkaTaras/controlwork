window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});
const headrBgr = document.getElementById('header-bgr-btn')
const headerSun_moon = document.getElementById('sun-moon')
const headertemImg = headerSun_moon.querySelector('img')
const body = document.querySelector('body')
const headerLogotyp = document.querySelector(".header_Logotyp")
const menu_arrowDown = document.querySelector('.arrowDown')
const a = document.querySelectorAll('a')
const div = document.querySelectorAll('div')
const header = document.querySelector('header')
const p = document.querySelector('p')
const heager_nav = document.querySelector('.header-nav')
const container = document.querySelector('.container')
const footer = document.querySelector('.footer_wrap')
const foot_logo = document.querySelector('.logo-section')
// const container_child = container.Child
headerMoon = () => {
  headrBgr.addEventListener("click", () => {
    headrBgr.style.justifyContent = 'end'
    body.style.backgroundColor = '#312e2e'
    headertemImg.src = './images/Ellipse 7.svg'
    headerSun_moon.style.backgroundColor = '#000000'
    body.style.color = "#D9D9D9";
    headerLogotyp.style.filter = "brightness(0) invert(1)"
    menu_arrowDown.style.filter = "brightness(0) invert(1)"
    burgerMenu.style.filter = "brightness(0) invert(1)"
    foot_logo.style.filter = "brightness(0) invert(1)"
    menu.style.borderColor = 'white'
    a.forEach(element => {
      element.style.filter = "brightness(0) invert(1)"
    });
    headerSun_moon.style.borderColor = 'white'
    line.forEach(element => {
      element.style.borderColor = 'white'
    });
    p.style.color = 'white'
    visitAlert_text.style.color = 'black';
    p_enterName.style.color = 'black'
    container.style.backgroundColor = '#312e2e'
    sec_Fottball.style.backgroundColor = '#312e2e'
    scientist_p.forEach(element => {
      element.style.color = 'black'
    });
    dino.style.filter = "brightness(0) invert(1)"
    cactus.style.filter = "brightness(0) invert(2)"
    footer.style.filter = "brightness(0) invert(1)"
    footer.style.backgroundColor = "#312e2e"
  })
}

headerMoon()

headerSun = () => {
  headrBgr.addEventListener("dblclick", () => {
    headrBgr.style.justifyContent = 'start'
    body.style.backgroundColor = 'white'
    headertemImg.src = './images/Ellipse 8.svg'
    headerSun_moon.style.backgroundColor = '#FFFFFF'
    document.body.style.color = "black";
    menu.style.borderColor = 'black'
    headerLogotyp.style.filter = 'brightness(0)';
    menu_arrowDown.style.filter = "brightness(0)"
     burgerMenu.style.filter = "brightness(0)"
    foot_logo.style.filter = "brightness(0)"
    headerSun_moon.style.borderColor = 'black'
    a.forEach(element => {
      element.style.filter = "brightness(0)"
    });
    line.forEach(element => {
      element.style.borderColor = 'black'
    });
    p.style.color = 'black'
    container.style.backgroundColor = 'white'
    sec_Fottball.style.backgroundColor = 'white'
    scientist_p.forEach(element => {
      element.style.color = 'black'
    });
    dino.style.filter = "brightness(1)"
    cactus.style.filter = "brightness(1)"
    game.style.filter = "brightness(1)"
    footer.style.backgroundColor = 'white'
  })
}
headerSun()
// ///////////
const visitAlert = document.querySelector('.visit-Alert')
const visitAlert_text = document.getElementById('visit-Alert_text')
const close_visitAlert = document.querySelector('.close-visit-Alert')
const visitAlert_elements = document.querySelector('.alert-elements')
const inp_userName = document.getElementById('ueserName')
const seve_userName = document.querySelector('.seve-userName')
const user = document.getElementById('User')
const p_enterName = document.querySelector('.enter-name')
const link_visitMenu = document.getElementById('link_visitMenu')
// bodyOpacity = () =>{

// }
function addUsername() {
  inp_userName.addEventListener('input', () => {
    body.scrollTop = 0;
    seve_userName.addEventListener('click', () => {
      let name = inp_userName.value
      visitAlert.style.display = 'none'
      user.textContent = `Вітаємо, ${name}!`
      body.style.overflow = 'auto'
    })
  })

}
addUsername()
function menu_visitAlert(fromLink){
  if(fromLink){
  link_visitMenu.addEventListener('click', ()=>{
    visitAlert.style.display = 'block'
  })
}
}
menu_visitAlert(addUsername)
// ///////////

const links_menu = document.getElementById('links')
const burgerMenu = document.getElementById('adaptiv_menu')
let burger = document.getElementById('burger')

burgerMenu.addEventListener('click', () => {
  if(links_menu.style.display === 'none'){
    links_menu.style.display = 'block';
  }
  else{
    links_menu.style.display = 'none';
  }
  });


const menu = document.querySelector('.menu')
const openMenu = document.getElementById('open_Menu')
displayMenu = () => {
  openMenu.addEventListener('click', () => {
    if (menu.style.display === 'none' || menu_arrowDown.style.transform === ``) {
      menu.style.display = 'block';
      menu_arrowDown.style.transform = `rotate(180deg)`
      main.style.opacity = '15%'
    }
    else {
      menu.style.display = 'none';
      menu_arrowDown.style.transform = `rotate(360deg)`
      main.style.opacity = '100%'
    }
  });
}
displayMenu()
// ////////////////////main//////
const main = document.querySelector('main')
const line = document.querySelectorAll('.line')

const inputYear_sec1 = document.getElementById('inp_firstSection')
const enterMiror = document.querySelector('.mirror')
const year_information = document.querySelector('.year_information')
let year
yourBirthday_year = () => {
  inputYear_sec1.addEventListener('input', () => {
    year = parseFloat(inputYear_sec1.value)
    enterMiror.addEventListener('click', () => {

      if (year % 4 === 0) {
        year_information.textContent = 'Ви народилися у високосний рік!'
        year_information.style.color = '#039900'
      }
      else if(isNaN(year)){
        year_information.textContent = 'Будь ласка, введіть число!'
        year_information.style.color = '#990000'
      }
      else {
        year_information.textContent = 'Ви народилися не у високосний рік!'
        year_information.style.color = '#990000'
      }
      inputYear_sec1.value = ''
    })
    console.log(inputYear_sec1.value)
  })
}
yourBirthday_year()
// //////////////////////////

let currentOperation = null;

function setOperation(op) {
    currentOperation = op;
}

function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultField = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2) || !currentOperation) {
        resultField.value = "Помилка";
        return;
    }

    let result;
    switch (currentOperation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : "На 0 не можна";
            break;
    }

    resultField.value = result;
}
// ////////////////////////////////////
// -----------------------------------------------------------------sec5-------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  const inputField = document.querySelector('.btn1-sec5 input');
  const resultField = document.querySelector('.inp-sec5');
  const searchIcon = document.querySelector('.btn1-sec5 img');

  searchIcon.addEventListener('click', function () {
      const seconds = parseInt(inputField.value.trim());

      if (isNaN(seconds)) {
          resultField.value = "Невірне число";
          return;
      }

      const days = Math.floor(seconds / (24 * 60 * 60));
      const minutes = Math.floor((seconds % (60 * 60)) / 60);
      const remainingSeconds = seconds % 60;

      resultField.value = `${days} дн, ${minutes} хв, ${remainingSeconds} сек`;
  });
});
// ////////////////////////////
let max = 10;
let min = 1;

function Random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const ButtonNum = document.querySelector('.search');
const InputNum = document.querySelector('.guess');
const GuessAns = document.getElementById('guess_answear');

function startNewGame() {
  return Random(min, max);
}

let randomNumber = startNewGame();

ButtonNum.addEventListener('click', () => {
  let userGuess = parseInt(InputNum.value, 10);
  if (isNaN(userGuess)) {
    GuessAns.textContent = 'Будь ласка, введіть число!';
    GuessAns.style.color = "red"
    return;
  }

  if (userGuess === randomNumber) {
    GuessAns.textContent = `Вітаю, ви вгадали число! ${randomNumber}`;
    GuessAns.style.color = "green"
    randomNumber = startNewGame();
  } else {
    GuessAns.textContent = 'Спробуйте ще раз!';
    GuessAns.style.color = "red"
  }
  InputNum.value = ''
});
// ////////////////////////////
const BtnPRS = document.querySelector('.ButtonPRS')
const RockBtn = document.getElementById('rck');
const ScissorsBtn = document.getElementById('scr');
const PaperBtn = document.getElementById('ppr');
const PRSresult = document.getElementById('PRSgm');
const WinPCresult = document.getElementById('PCWIN');
const WinYouresult = document.getElementById('YOUWIN');

let gameAns = 0;

let winstats = 0;
let losestats = 0;

let PCmax = 3;
let PCmin = 1;

function PRSrandom(PCmin, PCmax) {
  return Math.floor(Math.random() * (PCmax - PCmin + 1)) + PCmin;
}

function startNewPRS() {
  return PRSrandom(PCmin, PCmax);
}

let randomPick = startNewPRS();


RockBtn.addEventListener('click', () => {
  gameAns = 1;
});

ScissorsBtn.addEventListener('click', () => {
  gameAns = 2;
});

PaperBtn.addEventListener('click', () => {
  gameAns = 3;
});

BtnPRS.addEventListener('click', () => {
  if (gameAns === randomPick) {
    PRSresult.textContent = 'Ви виграли раунд!';
    PRSresult.style.color = "green";
    winstats++;
    WinYouresult.textContent = `Ви - ${winstats}`;
  } else {
    PRSresult.textContent = 'Комп’ютер виграв раунд!';
    PRSresult.style.color = "red";
    losestats++;
    WinPCresult.textContent = `Комп’ютер - ${losestats}`;
  }
  randomPick = startNewPRS();
});
// ///////////dino/////////////
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const game = document.getElementById("game");
const gameOver = document.querySelector(".game_over");
const gameOver_Btn = document.querySelector(".game_over_Btn");
const dinoPoints = document.getElementById("dino_points");

let points = 0;
let scoreInterval;
let collisionCheck;

function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");
    setTimeout(() => {
      dino.classList.remove("jump");
    }, 500);
  }
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    jump();
  }
});

game.addEventListener("click", function () {
  cactus.classList.add("cactus");
  startGame();
});

function startGame() {
  points = 0;
  dinoPoints.textContent = "Очки: 0";

  scoreInterval = setInterval(() => {
    points++;
    dinoPoints.textContent = `Очки: ${points}`;
  }, 500);

  collisionCheck = setInterval(() => {
    const dinoBottom = parseFloat(
      window.getComputedStyle(dino).getPropertyValue("bottom")
    );
    const cactusRight = parseFloat(
      window.getComputedStyle(cactus).getPropertyValue("right")
    );

    const gameWidth = game.offsetWidth;
    const gameHeight = game.offsetHeight;
    const cactusFromLeft = gameWidth - cactusRight;

    let x_dino = window.matchMedia("(max-width: 600px)")

    let dinoLeftThreshold = gameWidth * 0.07; // позиція динозавра
    let dinoRightThreshold = gameWidth * 0.14; // правий край динозавра
    const collisionHeight = gameHeight * 0.1; // динамічний поріг зіткнення


    if (x_dino.matches) {
      dinoLeftThreshold = gameWidth * 0.13
      dinoRightThreshold = gameWidth * 0.23
    }
    if (
      cactusFromLeft > dinoLeftThreshold &&
      cactusFromLeft < dinoRightThreshold &&
      dinoBottom < collisionHeight
    ) {
      cactus.classList.remove("cactus");
      gameOver.style.display = "block";
      clearInterval(scoreInterval);
      clearInterval(collisionCheck);
    }
  }, 10);
}

gameOver_Btn.addEventListener("click", () => {
  gameOver.style.display = "none";
  cactus.classList.add("cactus");
  startGame();
});
// ////////////////////////////////
const Ball = document.getElementById('ballfollow');
const Stadion = document.getElementById('footballbase');
const sec_Fottball = document.querySelector('.container7')
Stadion.addEventListener('mousemove', (event) => {
  const border = Stadion.getBoundingClientRect();

  const Bwidth = Ball.offsetWidth;
  const Bheight = Ball.offsetHeight;

  let x = event.clientX - border.left;
  let y = event.clientY - border.top;


  x -= Bwidth * 1.8;
  y -= Bheight * 1.6;


  x -= 90;

  const maxX = border.width - Bwidth - 30;
  const maxY = border.height - Bheight;

let x_stadion = window.matchMedia("(max-width: 600px)")
    if (x_stadion.matches) {
       x = Math.max(-300, Math.min(x, maxX));
       Ball.style.right = `200px`
    }

  x = Math.max(-600, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  Ball.style.transform = `translate(${x}px, ${y}px)`;
});

Stadion.addEventListener('mouseout', () => {
  Ball.style.transform = 'translate(-50px, 0px)';
});

window.addEventListener('keydown', function (e) {
  if (e.code === 'Space') {
    const target = e.target;
    const isInput =
      target.tagName === 'INPUT' ||
      target.tagName === 'TEXTAREA' ||
      target.isContentEditable;

    if (!isInput) {
      e.preventDefault();
    }
  }
});
// ////////////////////////////////
function updateMaxValue() {
  const val1 = parseFloat(document.getElementById("input1").value);
  const val2 = parseFloat(document.getElementById("input2").value);
  const val3 = parseFloat(document.getElementById("input3").value);

  const resultEl = document.getElementById("max-result");

  const values = [val1, val2, val3];
  if (values.every(v => !isNaN(v))) {
    const maxVal = Math.max(...values);
    resultEl.textContent = `Найбільше число: ${maxVal}`;
  } else {
    resultEl.textContent = "Найбільше число, яке ви ввели";
  }
}

document.getElementById("input1").addEventListener("input", updateMaxValue);
document.getElementById("input2").addEventListener("input", updateMaxValue);
document.getElementById("input3").addEventListener("input", updateMaxValue);


// ////////////////////////////////////////////////////////////
const our_team = document.querySelector('.foto')
const swipeRight = document.querySelector('.right')
const swipepLeft = document.querySelector('.left')
const firstMember = document.getElementById('Taras')
const secondMember = document.getElementById('Potap')
const thirdMember = document.getElementById('Andriy')
const memeber_name = document.querySelector('.memeber_name')
const members = document.querySelector('.members')
const info_members = document.querySelector('.information')

swipeRight.addEventListener("click", () => {
  let left = document.getElementById('sp_left')
  let right = document.getElementById('sp_right')
  let img = document.getElementById('img_member')
  if (memeber_name.textContent === 'Taras' && memeber_name.textContent != 'Potap') {
    memeber_name.textContent = 'Potap'
    left.style.display = 'block'
    firstMember.style.backgroundColor = '#D9D9D9'
    secondMember.style.backgroundColor = '#5d5b5b'
    img.src = './images/Potap_foto_of_team.png'
    info_members.innerHTML = "Учасник команди, взяв на себе важчу частину проекту. Працював над виконанням: <b>загаданого числа комп'ютером</b>,<b>грою в камінь - ножиці - папір</b>,<b>футбол</b>,<b>вченими</b>"
  }
  else {
    memeber_name.textContent = 'Andriy'
    right.style.display = 'none'
    thirdMember.style.backgroundColor = '#5d5b5b'
    secondMember.style.backgroundColor = '#D9D9D9'
    img.src = './images/andriy.jpg'
    info_members.innerHTML = 'Учасник команди, взяв на себе значну частину проекту. Працював над виконанням: <b>числових завдань, калькуляторів, калькуляторів часу</b>, <b>footer</b>'
  }
})

swipepLeft.addEventListener("click", () => {
  let left = document.getElementById('sp_left')
  let right = document.getElementById('sp_right')
  let img = document.getElementById('img_member')
  if (memeber_name.textContent === 'Andriy' && memeber_name.textContent != 'Potap') {
    memeber_name.textContent = 'Potap'
    right.style.display = 'block'
    secondMember.style.backgroundColor = '#5d5b5b'
    thirdMember.style.backgroundColor = '#D9D9D9'
    img.src = './images/Potap_foto_of_team.png'
    info_members.innerHTML = "Учасник команди, взяв на себе важчу частину проекту. Працював над виконанням: <b>загаданого числа комп'ютером</b>,<b>грою в камінь - ножиці - папір</b>,<b>футбол</b>,<b>вченими</b>"
  }
  else {
    memeber_name.textContent = 'Taras'
    left.style.display = 'none'
    firstMember.style.backgroundColor = '#5d5b5b'
    secondMember.style.backgroundColor = '#D9D9D9'
    img.src = './images/My_foto_of_team.jpg'
    info_members.innerHTML = "Тім'лід команди, відповідає за виконання завдань. Працював над виконанням:<b>Меню</b>, <b>року народження</b>, <b>Google динозаврика</b>, <b>інформацією про нашу команду</b> та <b>адаптивами</b>"
  }
})
// /////////////////////////////
const Albert = document.getElementById('Albert');
const Galileo = document.getElementById('Galileo');
const Isaac = document.getElementById('Isaac');
const Thomas = document.getElementById('Thomas');
const Marie = document.getElementById('Marie');
const Nikola = document.getElementById('Nikola');
const Michael = document.getElementById('Michael');
const Louis = document.getElementById('Louis');
const Charles = document.getElementById('Charles');
const Niels = document.getElementById('Niels');
const Dmitri = document.getElementById('Dmitri');
const Ada = document.getElementById('Ada');

const S = document.getElementById('S');
const Aplhabet = document.getElementById('Aplhabet');
const Age = document.getElementById('Age');
const Youngest = document.getElementById('Youngest');
const GG = document.getElementById('GG');
const AlbertAge = document.getElementById('AlbertAge');
const Csurname = document.getElementById('Csurname');
const Aname = document.getElementById('Aname');
const YO = document.getElementById('YO');
const scientist_p = document.querySelectorAll('.scientist>p')
S.addEventListener('click', () => {

Albert.style.display = 'flex';
Ada.style.display = 'flex';

const elementsGrey = [Galileo,Isaac, Michael];

elementsGrey.forEach(el => {
    el.style.backgroundColor = '#D9D9D9';
});

const  elementsGreen= [Albert, Thomas, Nikola, Marie, Louis, Charles, Dmitri, Ada,Niels];

elementsGreen.forEach(el => {
    el.style.backgroundColor = 'green';
});
const elementPos = [Albert, Thomas, Nikola, Marie, Louis, Charles, Dmitri, Ada, Niels, Galileo, Isaac, Michael];

elementPos.forEach(el => {
    el.style.transform = 'none';
});
});

Aplhabet.addEventListener('click', () => {

    Albert.style.display = 'flex';
    Ada.style.display = 'flex';

    Ada.style.transform = `translate(-362px, -283px)`
    Charles.style.transform = `translate(362px, -283px)`
    Dmitri.style.transform = `translate(181px, -283px)`
    Galileo.style.transform = `translate(-180px, 142px)`
    Isaac.style.transform = `translate(-178px, 142px)`
    Louis.style.transform = `translate(-181px, 1px)`
    Marie.style.transform = `translate(543px, -2px)`
    Michael.style.transform = `translate(-360px, 141.5px)`
    Nikola.style.transform = `translate(184px, 142px)`
    Thomas.style.transform = `translate(1px, 282px)`
    Albert.style.transform = 'none';
    Niels.style.transform = 'none';

    const elementsGrey= [Albert, Thomas, Nikola, Marie, Louis, Charles, Dmitri, Ada,Niels,Galileo,Isaac, Michael];
    
    elementsGrey.forEach(el => {
        el.style.backgroundColor = '#D9D9D9';
    });
    });

    var x = window.matchMedia("(max-width: 1000px)")
    if (x.matches) {
        Ada.style.transform = `translate(-210px, -283px)`
        Charles.style.transform = `translate(210px, -283px)`
        Dmitri.style.transform = `translate(105px, -283px)`
        Galileo.style.transform =` translate(-105px, 142px)`
        Isaac.style.transform = `translate(-105px, 142px)`
        Louis.style.transform = `translate(-105px, 1px)`
        Marie.style.transform = `translate(315px, 0px)`
        Michael.style.transform = `translate(-210px, 141.5px)`
        Nikola.style.transform = `translate(105px, 142px)`
        Thomas.style.transform = `translate(1px, 284px)`
        Albert.style.transform = 'none';
        Niels.style.transform = 'none';
    } 


    Age.addEventListener('click', () => {

        Albert.style.display = 'flex';
        Ada.style.display = 'flex';

        const elementsGrey= [Albert, Thomas, Nikola, Marie, Louis, Charles, Dmitri, Ada,Niels,Galileo,Isaac, Michael];
        
        elementsGrey.forEach(el => {
            el.style.backgroundColor = '#D9D9D9';
        });
        Dmitri.style.transform = `translate(181px, -141px)`
        Niels.style.transform = `translate(-180px, -142px)`
        Louis.style.transform = `translate(-361px, 142px)`
        Marie.style.transform = `translate(363px, 142px)`
        Albert.style.transform = `translate(182px, 141.5px)`
        Nikola.style.transform = `translate(-181px, -141.5px)`
        Thomas.style.transform = `translate(-181px, 0px);`
        Galileo.style.transform = `translate(361px, 0px);`
        Isaac.style.transform = `translate(-181px, 0px);`
        Ada.style.transform = 'none';
        Michael.style.transform = 'none';
        Charles.style.transform = 'none';
        var x = window.matchMedia("(min-width: 1000px)")
        if (x.matches) {
            Dmitri.style.transform = `translate(105px, -141px)`
            Niels.style.transform = `translate(-105px, -142px)`
            Louis.style.transform = `translate(-210px, 142px)`
            Marie.style.transform = `translate(210px, 142px)`
            Albert.style.transform = `translate(105px, 141.5px)`
            Nikola.style.transform =` translate(-105px, -141.5px)`
            Thomas.style.transform = `translate(-105px, 0px);`
            Galileo.style.transform = `translate(210px, 0px);`
            Isaac.style.transform = `translate(-105px, 0px);`
            Ada.style.transform = 'none';
            Michael.style.transform = 'none';
            Charles.style.transform = 'none';
        } 
    });

    Age.addEventListener('click', () => {

        Albert.style.display = 'flex';
        Ada.style.display = 'flex';

        const elementsGrey= [Albert, Thomas, Nikola, Marie, Louis, Charles, Dmitri, Ada,Niels,Galileo,Isaac, Michael];
        
        elementsGrey.forEach(el => {
            el.style.backgroundColor = '#D9D9D9';
        });
        Dmitri.style.transform = `translate(181px, -141px)`
        Niels.style.transform = `translate(-180px, -142px)`
        Louis.style.transform = `translate(-361px, 142px)`
        Marie.style.transform = `translate(363px, 142px)`
        Albert.style.transform = `translate(182px, 141.5px)`
        Nikola.style.transform = `translate(-181px, -141.5px)`
        Thomas.style.transform = `translate(-181px, 0px)`;
        Galileo.style.transform = `translate(361px, 0px)`;
        Isaac.style.transform = `translate(-181px, 0px)`;
        Ada.style.transform = 'none';
        Michael.style.transform = 'none';
        Charles.style.transform = 'none';

        });

Youngest.addEventListener('click', () => {

    Albert.style.display = 'flex';
    Ada.style.display = 'flex';

    Niels.style.backgroundColor="green"

    const elementsGrey = [Albert,Galileo,Isaac, Thomas, Nikola, Marie, Michael, Louis, Charles, Dmitri, Ada];

    elementsGrey.forEach(el => {
        el.style.backgroundColor = '#D9D9D9';
    });
    const elementPos = [Albert, Thomas, Nikola, Marie, Louis, Charles, Dmitri, Ada, Niels, Galileo, Isaac, Michael];

elementPos.forEach(el => {
    el.style.transform = 'none';
});
});
GG.addEventListener('click', () => {

    Albert.style.display = 'flex';
    Ada.style.display = 'flex';

    Galileo.style.backgroundColor="green"
    const elementsGrey = [Albert,Isaac, Thomas, Nikola, Marie, Michael, Louis, Charles, Niels, Dmitri, Ada];

    elementsGrey.forEach(el => {
        el.style.backgroundColor = '#D9D9D9';
    });
    const elementPos = [Albert, Thomas, Nikola, Marie, Louis, Charles, Dmitri, Ada, Niels, Galileo, Isaac, Michael];

elementPos.forEach(el => {
    el.style.transform = 'none';
});
});
AlbertAge.addEventListener('click', () => {

    Albert.style.display = 'flex';
    Ada.style.display = 'flex';

    Albert.style.backgroundColor="green"

    const elementsGrey = [Galileo, Isaac, Thomas, Nikola, Marie, Michael, Louis, Charles, Niels, Dmitri, Ada];

    elementsGrey.forEach(el => {
        el.style.backgroundColor = '#D9D9D9';
    });
    const elementPos = [Albert, Thomas, Nikola, Marie, Louis, Charles, Dmitri, Ada, Niels, Galileo, Isaac, Michael];

elementPos.forEach(el => {
    el.style.transform = 'none';
});
});
Csurname.addEventListener('click', () => {
    Marie.style.backgroundColor="green"

    Albert.style.display = 'flex';
    Ada.style.display = 'flex';

    const elementsGrey = [Galileo, Isaac, Thomas, Albert, Nikola, Michael, Louis, Charles, Niels, Dmitri, Ada];

    elementsGrey.forEach(el => {
        el.style.backgroundColor = '#D9D9D9';
    });
    const elementPos = [Albert, Thomas, Nikola, Marie, Louis, Charles, Dmitri, Ada, Niels, Galileo, Isaac, Michael];

elementPos.forEach(el => {
    el.style.transform = 'none';
});
});
Aname.addEventListener('click', () => {

    Albert.style.display = 'none';
    Ada.style.display = 'none';

    const elementsGrey = [Galileo, Isaac, Thomas, Marie, Nikola, Michael, Louis, Charles, Niels, Dmitri];

    elementsGrey.forEach(el => {
        el.style.backgroundColor = '#D9D9D9';
    });
    const elementPos = [Albert, Thomas, Nikola, Marie, Louis, Charles, Dmitri, Ada, Niels, Galileo, Isaac, Michael];

elementPos.forEach(el => {
    el.style.transform = 'none';
});
});

YO.addEventListener('click', () => {

    Albert.style.display = 'flex';
    Ada.style.display = 'flex';
    
    const elementsGrey = [Galileo, Isaac, Thomas,  Marie, Michael, Louis, Charles, Niels, Dmitri,];
    
    elementsGrey.forEach(el => {
        el.style.backgroundColor = '#D9D9D9';
    });
    
    const  elementsGreen= [Nikola, Ada];
    
    elementsGreen.forEach(el => {
        el.style.backgroundColor = 'green';
    });
    const elementPos = [Albert, Thomas, Nikola, Marie, Louis, Charles, Dmitri, Ada, Niels, Galileo, Isaac, Michael];

elementPos.forEach(el => {
    el.style.transform = 'none';
});
    });
//   ----------------------------------------------------------------------futter-------------------------------------------------------------


function openOverlay() {
  document.getElementById('overlay').classList.add('active');
}

function closeOverlay() {
  document.getElementById('overlay').classList.remove('active');
}
