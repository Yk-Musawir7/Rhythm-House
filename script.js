function staticsearch() {
    var input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    var x = document.getElementsByClassName('searchitem');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "block";
        }
    }
}

function popup() {
    document.getElementById('pop-up').classList.add('visible');
    document.body.classList.add('overflow-h');
}
function cancel() {
    document.getElementById('pop-up').classList.remove('visible');
    document.body.classList.remove('overflow-h');
}

function openlink() {
    document.open(url('browse.html'))
}

function readmore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("readmore");
    var btnText = document.getElementById("readmorebtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
