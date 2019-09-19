// Change the font size of sample texts when #font-size select is changed.

function changeFontSize(event){
  let fontCards = document.querySelectorAll(".font-card-sample > p");
  for (let i=0; i < fontCards.length; i++) {
    fontCards[i].style.fontSize = `${event.target.value}px`;
  }
}

// Change the content of .font-card-sample > p when #custom-text is changed. If #custom-text is deleted, the set placeholder text will be re-inserted

function changeSampleText(event){
  let fontCards = document.querySelectorAll(".font-card-sample > p");

  if(event.target.value != ""){
    for (let i=0; i < fontCards.length; i++) {
      fontCards[i].innerText = `${event.target.value}`;
    }
  } else {
    for (let i=0; i < fontCards.length; i++) {
      fontCards[i].innerText = `Then came the night of the first falling star.`;
    }
  }
}

// Toggle dark and light mode

function changeColorMode(mode) {
  if(mode == "white"){
    document.documentElement.style.setProperty("--mode-color-background", "white");
    document.documentElement.style.setProperty("--mode-color-foreground", "black");
  } else {
    document.documentElement.style.setProperty("--mode-color-background", "black");
    document.documentElement.style.setProperty("--mode-color-foreground", "white");
  }
}

// When the header is less than 25% visible (going out of view) OR when header reaches 75% visibility (coming into view), display #to-top

let options = {
  root: null,
  rootMargin: "0px",
  threshold: [.75]
}

function showToTop(entry) {
  let div = document.querySelector("#to-top");
  console.log(entry[0].isIntersecting);
  entry[0].isIntersecting ? div.style.display = "none" : div.style.display = "block";
}

let observer = new IntersectionObserver(showToTop, options);
observer.observe(document.querySelector("header"));

// Use built in browser "smooth scrolling" when available opon clicking #to-top

function scrollToTop(){
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

// Toggle list and grid view and their corresponding icons

function toggleView(isReset){
  let fontCards = document.querySelectorAll(".font-card");
  for (let i = 0; i < fontCards.length; i++){
    if (fontCards[i].classList.contains("list") || isReset) {
      fontCards[i].classList.remove("list");
      document.querySelector("#grid-icon").classList.add("hide");
      document.querySelector("#list-icon").classList.remove("hide");
    } else {
      fontCards[i].classList.add("list");
      document.querySelector("#list-icon").classList.add("hide");
      document.querySelector("#grid-icon").classList.remove("hide");
    }
  }
}

// Reset the page upon clicking #main-nav-reset

function resetPage() {
  let textResetEvent = {
    target: {
      value: ""
    }
  }

  let sizeResetEvent = {
    target: {
      value: 32
    }
  }

  document.querySelector("#custom-text").value = "";
  changeSampleText(textResetEvent);
  document.querySelector("#selected-font-size").selected = true;
  changeFontSize(sizeResetEvent);
  changeColorMode("white");
  toggleView(true);
}