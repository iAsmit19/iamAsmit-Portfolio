/*
    The Castle's Towers
*/

let cursor = document.querySelector("#crsr");
let headerNavElements = document.querySelectorAll(".nv-els");

function theCursor() {
  document.addEventListener("mousemove", (event) => {
    gsap.to(cursor, {
      display: "block",
    });
    gsap.to(cursor, {
      top: event.pageY + "px",
      left: event.pageX + "px",
    });
  });
  headerNavElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      gsap.to(cursor, {
        scale: 0.5,
      });
      gsap.to(headerAnim, {
        filter: "blur(50px)",
      });
    });
    element.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 1,
      });
      gsap.to(headerAnim, {
        filter: "blur(30px)",
      });
    });
  });
}

let body = document.querySelector("body");
let loader = document.querySelector("#ldr");
let loaderMainText1 = document.querySelector("#ldr-mn-1");
let loaderMainText2 = document.querySelector("#ldr-mn-2");
let loaderMainText3 = document.querySelector("#ldr-mn-3");
let loaderSubText = document.querySelector("#ldr-sb-txt p");
let rootContainer = document.querySelector("#rt");

function loaderAnimation() {
  let mainText1 = "Design";
  let mainText1Split = mainText1.split("");

  mainText1Split.forEach((element) => {
    let spanElement = document.createElement("span");
    spanElement.textContent = element;
    spanElement.classList.add("mn-txt-1");
    spanElement.style.opacity = 0;
    loaderMainText1.append(spanElement);
  });

  let loaderMainText1Spans = document.querySelectorAll(".mn-txt-1");

  let mainText2 = "User Interface";
  let mainText2Split = mainText2.split("");

  mainText2Split.forEach((element) => {
    let spanElement = document.createElement("span");
    spanElement.textContent = element;
    spanElement.classList.add("mn-txt-2");
    spanElement.style.opacity = 0;
    loaderMainText2.append(spanElement);
  });

  let loaderMainText2Spans = document.querySelectorAll(".mn-txt-2");

  let mainText3 = "User Experience";
  let mainText3Split = mainText3.split("");

  mainText3Split.forEach((element) => {
    let spanElement = document.createElement("span");
    spanElement.textContent = element;
    spanElement.classList.add("mn-txt-3");
    loaderMainText3.append(spanElement);
  });

  let loaderMainText3Spans = document.querySelectorAll(".mn-txt-3");

  let mainTextTimeline = gsap.timeline({
    ease: "power1.inOut",
  });
  mainTextTimeline.to(loader, {
    opacity: 1,
    duration: 2,
  });
  loaderMainText1Spans.forEach((element, index) => {
    mainTextTimeline.to(
      element,
      {
        opacity: 1,
      },
      index * 0.2
    );
  });
  loaderMainText1Spans.forEach((element, index) => {
    mainTextTimeline.to(
      element,
      {
        opacity: 0,
        delay: 1.4,
      },
      index * 0.2
    );
  });
  loaderMainText2Spans.forEach((element, index) => {
    mainTextTimeline.to(
      element,
      {
        opacity: 1,
        delay: 3,
      },
      index * 0.1
    );
  });
  loaderMainText2Spans.forEach((element, index) => {
    mainTextTimeline.to(
      element,
      {
        opacity: 0,
        delay: 6,
      },
      index * 0.2
    );
  });
  loaderMainText3Spans.forEach((element, index) => {
    mainTextTimeline.to(
      element,
      {
        opacity: 1,
        delay: 8,
      },
      index * 0.1
    );
  });
  loaderMainText3Spans.forEach((element, index) => {
    mainTextTimeline.to(
      element,
      {
        opacity: 0,
        delay: 10,
      },
      index * 0.2
    );
  });
  mainTextTimeline.to(loader, {
    opacity: 0,
    duration: 2,
  });
  mainTextTimeline.to(loader, {
    display: "none",
  });
  mainTextTimeline.to(rootContainer, {
    opacity: 1,
  });
  mainTextTimeline.to(body, {
    height: "auto",
    overflow: "auto",
  });
  headerNavElements.forEach((element) => {
    
  });

  let subText = "loading your experience...";
  let subTextArr = subText.split("");
  subTextArr.forEach((element) => {
    let spanElement = document.createElement("span");
    spanElement.textContent = element;
    spanElement.classList.add("sb-txt");
    loaderSubText.append(spanElement);
  });

  let subTimeline = gsap.timeline({
    repeat: -1,
    ease: "power2.inOut",
  });

  let subSpans = document.querySelectorAll(".sb-txt");
  subSpans.forEach((element, index) => {
    subTimeline.to(
      element,
      {
        color: "var(--ft-c)",
        ease: "power2.inOut",
        textShadow: "0px 0px 1px var(--act)",
        opacity: 0.5,
      },
      index * 0.2
    );
  });
  subSpans.forEach((element, index) => {
    subTimeline.to(
      element,
      {
        color: "var(--ft-c)",
        ease: "power2.inOut",
        opacity: 1,
        textShadow: "none",
        delay: 2,
      },
      index * 0.2
    );
  });
}

function theLoader() {
  loaderAnimation();
}

let headerNavBarCont = document.querySelector("#hdr-nv-cnt");
let smallHeaderMenu = document.querySelector("#s-hdr-menu");
let smallHeaderMenuClose = document.querySelector("#hdr-svg-close-cnt");
let smallHeaderMenuToggle = false;
let smallHeaderNavbar = document.querySelector("#s-hdr-s-nvb");
let smallHeaderElements = document.querySelectorAll(".s-nv-els");

function smallHeader() {
  smallHeaderMenu.addEventListener("click", () => {
    gsap.to(smallHeaderNavbar, {
      display: "flex",
    });
    smallHeaderNavbar.style.width = "100%";
    gsap.to(smallHeaderNavbar, {
      opacity: 1,
    });
    headerNavBarCont.style["-webkit-backdrop-filter"] = "none";
    headerNavBarCont.style["backdrop-filter"] = "none";
    gsap.to(body, {
      height: "100vh",
      overflowX: "hidden",
    });
    smallHeaderElements.forEach((element, index) => {
      gsap.to(
        element,
        {
          opacity: 1,
          // duration: 0.5
        },
        index * 1.5
      );
    });
  });

  smallHeaderMenuClose.addEventListener("click", () => {
    let timeline = gsap.timeline();
    timeline.to(smallHeaderNavbar, {
      opacity: 0,
      onComplete: () => {
        smallHeaderNavbar.style.width = "0%";
      },
    });
    headerNavBarCont.style["-webkit-backdrop-filter"] = "blur(60px)";
    headerNavBarCont.style["backdrop-filter"] = "blur(60px)";
    timeline.to(smallHeaderNavbar, {
      display: "none",
    });
    timeline.to(body, {
      height: "auto",
      width: "auto",
      overflowX: "auto",
    });
    smallHeaderElements.forEach((element, index) => {
      gsap.to(
        element,
        {
          opacity: 0,
        },
        index * 1.5
      );
    });
  });
}

function headerDecodeTextEffect() {
  var text = document.getElementsByClassName("hdr-dcd-tx")[0];
  // debug with
  // console.log(text, text.children.length);

  // assign the placeholder array its places
  var state = [];
  for (var i = 0, j = text.children.length; i < j; i++) {
    text.children[i].classList.remove("state-1", "state-2", "state-3");
    state[i] = i;
  }

  // shuffle the array to get new sequences each time
  var shuffled = shuffle(state);

  for (var i = 0, j = shuffled.length; i < j; i++) {
    var child = text.children[shuffled[i]];
    classes = child.classList;

    // fire the first one at random times
    var state1Time = Math.round(Math.random() * (2000 - 300)) + 50;
    if (classes.contains("hdr-text-animation")) {
      setTimeout(firstStages.bind(null, child), state1Time);
    }
  }
}

// send the node for later .state changes
function firstStages(child) {
  if (child.classList.contains("state-2")) {
    child.classList.add("state-3");
  } else if (child.classList.contains("state-1")) {
    child.classList.add("state-2");
  } else if (!child.classList.contains("state-1")) {
    child.classList.add("state-1");
    setTimeout(secondStages.bind(null, child), 100);
  }
}
function secondStages(child) {
  if (child.classList.contains("state-1")) {
    child.classList.add("state-2");
    setTimeout(thirdStages.bind(null, child), 100);
  } else if (!child.classList.contains("state-1")) {
    child.classList.add("state-1");
  }
}
function thirdStages(child) {
  if (child.classList.contains("state-2")) {
    child.classList.add("state-3");
  }
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function smallHeaderDecodeTextEffect() {
  var text = document.getElementsByClassName("s-hdr-dcd-tx")[0];
  // debug with
  // console.log(text, text.children.length);

  // assign the placeholder array its places
  var state = [];
  for (var i = 0, j = text.children.length; i < j; i++) {
    text.children[i].classList.remove("state-1", "state-2", "state-3");
    state[i] = i;
  }

  // shuffle the array to get new sequences each time
  var shuffled = shuffle(state);

  for (var i = 0, j = shuffled.length; i < j; i++) {
    var child = text.children[shuffled[i]];
    classes = child.classList;

    // fire the first one at random times
    var state1Time = Math.round(Math.random() * (2000 - 300)) + 50;
    if (classes.contains("s-hdr-text-animation")) {
      setTimeout(firstStages.bind(null, child), state1Time);
    }
  }
}

// send the node for later .state changes
function firstStages(child) {
  if (child.classList.contains("state-2")) {
    child.classList.add("state-3");
  } else if (child.classList.contains("state-1")) {
    child.classList.add("state-2");
  } else if (!child.classList.contains("state-1")) {
    child.classList.add("state-1");
    setTimeout(secondStages.bind(null, child), 100);
  }
}
function secondStages(child) {
  if (child.classList.contains("state-1")) {
    child.classList.add("state-2");
    setTimeout(thirdStages.bind(null, child), 100);
  } else if (!child.classList.contains("state-1")) {
    child.classList.add("state-1");
  }
}
function thirdStages(child) {
  if (child.classList.contains("state-2")) {
    child.classList.add("state-3");
  }
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

let headerAnim = document.querySelector("#hdr-anm");

function headerAnimation() {
  headerNavBarCont.addEventListener("mouseover", () => {
    gsap.to(headerAnim, {
      opacity: 1,
    });
  });
  headerNavBarCont.addEventListener("mouseleave", () => {
    gsap.to(headerAnim, {
      opacity: 0,
    });
  });
  headerNavBarCont.addEventListener("mousemove", (event) => {
    gsap.to(headerAnim, {
      top: event.pageY,
      left: event.pageX,
    });
  });
}

let pillNavbar = document.querySelector("#pill-hdr");
let pillNavbarCont = document.querySelector("#pill-hdr-cnt");
let scrollThresh = 100;

function pillNavbarLogic() {
  let scrollPosition =
    window.scrollY || document.documentElement.scrollTop < 100;
  if (scrollPosition > scrollThresh) {
    gsap.to(pillNavbar, {
      display: "flex"
    });
    gsap.to(pillNavbarCont, {
      display: "flex",
      duration: 0.1,
    });
    gsap.to(pillNavbarCont, {
      opacity: 1,
      duration: 0.2,
    });
  } else if (scrollPosition < scrollThresh) {
    gsap.to(pillNavbar, {
      display: "none"
    });
    gsap.to(pillNavbarCont, {
      display: "none",
      duration: 0.1,
    });
    gsap.to(pillNavbarCont, {
      opacity: 0,
      duration: 0.2,
    });
  }
}

function pillNavbarExecutioner() {
  document.addEventListener("scroll", function () {
    pillNavbarLogic();
  });
}

function theHeader() {
  smallHeader();
  headerDecodeTextEffect();
  setInterval(function () {
    headerDecodeTextEffect();
  }, 10000);
  smallHeaderDecodeTextEffect();
  setInterval(function () {
    smallHeaderDecodeTextEffect();
  }, 10000);
  headerAnimation();
  pillNavbarExecutioner();
}

function decodeTextEffect() {
  var text = document.getElementsByClassName("dcd-tx")[0];
  // debug with
  // console.log(text, text.children.length);

  // assign the placeholder array its places
  var state = [];
  for (var i = 0, j = text.children.length; i < j; i++) {
    text.children[i].classList.remove("state-1", "state-2", "state-3");
    state[i] = i;
  }

  // shuffle the array to get new sequences each time
  var shuffled = shuffle(state);

  for (var i = 0, j = shuffled.length; i < j; i++) {
    var child = text.children[shuffled[i]];
    classes = child.classList;

    // fire the first one at random times
    var state1Time = Math.round(Math.random() * (2000 - 300)) + 50;
    if (classes.contains("text-animation")) {
      setTimeout(firstStages.bind(null, child), state1Time);
    }
  }
}

// send the node for later .state changes
function firstStages(child) {
  if (child.classList.contains("state-2")) {
    child.classList.add("state-3");
  } else if (child.classList.contains("state-1")) {
    child.classList.add("state-2");
  } else if (!child.classList.contains("state-1")) {
    child.classList.add("state-1");
    setTimeout(secondStages.bind(null, child), 100);
  }
}
function secondStages(child) {
  if (child.classList.contains("state-1")) {
    child.classList.add("state-2");
    setTimeout(thirdStages.bind(null, child), 100);
  } else if (!child.classList.contains("state-1")) {
    child.classList.add("state-1");
  }
}
function thirdStages(child) {
  if (child.classList.contains("state-2")) {
    child.classList.add("state-3");
  }
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function theHeroSection() {
  // decodeTextEffect();
  decodeTextEffect();
  setInterval(function () {
    decodeTextEffect();
  }, 10000);
}

function theExecutioner() {
  theCursor();
  theHeader();
  // COMMENT TO STOP THE :::LOADER:::
  theLoader();
  theHeroSection();
}

theExecutioner();
