


const images = document.querySelectorAll(".slider .slider-line img");
const sliderLine = document.querySelector(".slider-line");
let count = 0;
let width;

function init() {
  console.log("resize");
  width = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = width * images.length + "px";
  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  console.log(width);
  rollSlider();
}
window.addEventListener("resize", init);
init();
document.querySelector(".slider-prev").addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
});
document.querySelector(".slider-next").addEventListener("click", function () {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
});
function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}

// openPopUp();
// function openPopUp() {
//   let btn = document.querySelector('.main-button.btn-care');
//   let popUpBody = document.querySelector('.popup-main');
//   btn.addEventListener('click', function () {
//     popUpBody.classList.toggle('show');
//   })

// }

// window.addEventListener("DOMContentLoaded", function() {
//     [].forEach.call( document.querySelectorAll('.tel'), function(input) {
//     var keyCode;
//     function mask(event) {
//         event.keyCode && (keyCode = event.keyCode);
//         var pos = this.selectionStart;
//         if (pos < 3) event.preventDefault();
//         var matrix = "+7 (___) ___ __-__",
//             i = 0,
//             def = matrix.replace(/\D/g, ""),
//             val = this.value.replace(/\D/g, ""),
//             new_value = matrix.replace(/[_\d]/g, function(a) {
//                 return i < val.length ? val.charAt(i++) || def.charAt(i) : a
//             });
//         i = new_value.indexOf("_");
//         if (i != -1) {
//             i < 5 && (i = 3);
//             new_value = new_value.slice(0, i)
//         }
//         var reg = matrix.substr(0, this.value.length).replace(/_+/g,
//             function(a) {
//                 return "\\d{1," + a.length + "}"
//             }).replace(/[+()]/g, "\\$&");
//         reg = new RegExp("^" + reg + "$");
//         if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
//         if (event.type == "blur" && this.value.length < 5)  this.value = ""
//     }

//     input.addEventListener("input", mask, false);
//     input.addEventListener("focus", mask, false);
//     input.addEventListener("blur", mask, false);
//     input.addEventListener("keydown", mask, false)

//   });

// });

  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide('.splide', {
      perPage: 2,
      gap: 20,
      pagination: false
    } );
    splide.mount();
  } );