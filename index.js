// tum hi ho

// let notes ="e ab bf fe dc df ee dd cd d c bgg aa eea bbf fe dc dfee cdd d c d dcbg gaa cd e c d  cd e c d bdc ba  b g a e cd cd e cd bb dc ba b g a";

//jodi tr dak sune keo
// var notes =
//   "bb b c cd d g fe dc de ed c  bb b c cd d g fe dc de ed c  fg gg fg ga# a#g fe de de ed c bb b c cd d g fe dc de ed c ff f ga a# g cc dg a a# agagf ga a# g ff fg g#a# a# g#gf fg aa# g ff fg g#a# a# g#gf fg aa# g ff fg aa# a# a a a#a# a aa# ag ga ag f";

//sare jaha se achha
// var notes ="g gf# ef# d# ee ed#c#b bc#e f#g# ag# ag#f#e g gf# ef# d# ee ed#c#b";

// sare ga ma pa
// var notes ="c d e f g a b s s b a g f e d c";

// sare ga ma pa sharp
// var notes ="c# d# e# f# g# a# b# s# s# b# a# g# f# e# d# c#";


const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
var notes;
var r = false;

$("#start").click(function () {
  var mybutton = $(this);
  mybutton.prop("disabled", true);

  setTimeout(function () {
    notes = inputBox.value;
    r = false;
    auto_Read_play(notes);
  }, 1000);
  setTimeout(function () {
    mybutton.prop("disabled", false);
  }, 4000);
});

inputBox.onclick = () => {
  r = true;
};

function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

function auto_Read_play(notes) {
  var copy_notes = "  ";
  for (let i = 0; i < notes.length; i++) {
    if (notes[i + 1] == "#") {
      var x = notes[i].toUpperCase();
      notes = setCharAt(notes, i, x);
      copy_notes = copy_notes + notes[i];
    } else if (notes[i] != "#") copy_notes = copy_notes + notes[i];
  }
  for (let i = 0; i < copy_notes.length; i++) {
    document.getElementById("stop").onclick = () => {
      window.location.reload();
    };
    task(i);
  }
  function task(i) {
    setTimeout(function () {
      var btnclick = document.getElementById(copy_notes[i]);
      btnclick.classList.add("active");
      setTimeout(function () {
        btnclick.classList.remove("active");
      }, 100);

      makeSound(copy_notes[i]);
    }, 320 * i);
  }
}

//black
var numberOfDrumButtons = document.querySelectorAll(".black").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".black")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}

//white
var numberOfDrumButtons = document.querySelectorAll(".white").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".white")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}

document.addEventListener("keydown", (e) => {
  if (r == false) {
    if (e.repeat) return;
    var btnclick = document.getElementById(e.key);
    btnclick.classList.add("active");
    makeSound(e.key);
    setTimeout(function () {
      btnclick.classList.remove("active");
    }, 100);
  }
});

function makeSound(key) {
  switch (key) {
    case "c":
      var piano1 = new Audio("Steinway_Grand/c3.mp3");
      piano1.play();
      break;

    case "d":
      var piano2 = new Audio("Steinway_Grand/d3.mp3");
      piano2.play();
      break;

    case "e":
      var piano3 = new Audio("Steinway_Grand/e3.mp3");
      piano3.play();
      break;

    case "f":
      var piano4 = new Audio("Steinway_Grand/f3.mp3");
      piano4.play();
      break;

    case "g":
      var piano5 = new Audio("Steinway_Grand/g3.mp3");
      piano5.play();
      break;

    case "a":
      var piano6 = new Audio("Steinway_Grand/a3.mp3");
      piano6.play();
      break;

    case "b":
      var piano7 = new Audio("Steinway_Grand/b3.mp3");
      piano7.play();
      break;

    case "s":
      var piano15 = new Audio("Steinway_Grand/c4.mp3");
      piano15.play();
      break;
    //Steinway_Grand
    case "C":
      var piano8 = new Audio("Steinway_Grand/cs3.mp3");
      piano8.play();
      break;

    case "D":
      var piano9 = new Audio("Steinway_Grand/ds3.mp3");
      piano9.play();
      break;

    case "E":
      var piano10 = new Audio("Steinway_Grand/f3.mp3");
      piano10.play();
      break;

    case "F":
      var piano11 = new Audio("Steinway_Grand/fs3.mp3");
      piano11.play();
      break;

    case "G":
      var piano12 = new Audio("Steinway_Grand/gs3.mp3");
      piano12.play();
      break;

    case "A":
      var piano13 = new Audio("Steinway_Grand/as3.mp3");
      piano13.play();
      break;

    case "B":
      var piano14 = new Audio("Steinway_Grand/c4.mp3");
      piano14.play();
      break;

    case "S":
      var piano15 = new Audio("Steinway_Grand/cs4.mp3");
      piano15.play();
      break;

    case ".":
      alert("This is just a dummy key");
      break;

    default:
      console.log(key);
  }
}

function preloaderFadeOutInit() {
  $(".loader").fadeOut("slow");
  $("body").attr("id", "");
}
// Window load function
jQuery(window).on("load", function () {
  (function ($) {
    preloaderFadeOutInit();
  })(jQuery);
});

// var notes ="g gf# ef# d# ee ed#c#b bc#e f#g# ag# ag#f#e g gf# ef# d# ee ed#c#b";
// var notes ="c# d# e# f# g# a# b# s# s# b# a# g# f# e# d# c#";
// var notes = "c#d# e# f# g# a# b# s# s# b# a# g# f# e# d# c#";
// alert(notes);
// var copy_notes = [];
// for (let i = 0; i < notes.length; i++) {
//   if (notes[i+1] == '#') {
//     var x = notes[i].toUpperCase();
//     notes = setCharAt(notes, i, x);
//     if(notes[i]=='c')
//     {
//       alert("space");
//       copy_notes=copy_notes+" a";
//     }
//     else
//     copy_notes=copy_notes+notes[i]+" ";
//   }
//   else if(notes[i]!='#')
//     copy_notes=copy_notes+notes[i];
// }
// // alert(copy_notes);
// function auto_Read_play() {
//   for (let i = 0; i < copy_notes.length; i++) {
//     task(i);
//   }
//   function task(i) {
//     setTimeout(function () {
//       var btnclick = document.getElementById(copy_notes[i]);
//       btnclick.classList.add("active");
//       setTimeout(function () {
//         btnclick.classList.remove("active");
//       }, 100);
//       makeSound(copy_notes[i]);
//     }, 450 * i);
//   }
// }

// auto_Read_play();
