/*
    The Castle's Towers
*/

let cursor = document.querySelector("#crsr");
let headerNavElements = document.querySelectorAll(".nv-els");

function theCursor() {
  document.addEventListener("mousemove", (event) => {
    gsap.to(cursor, {
      display: "block"
    });
    gsap.to(cursor, {
      top: event.pageY + "px",
      left: event.pageX + "px"
    });
  });
  headerNavElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      gsap.to(cursor, {
        scale: 0.5
      });
    });
    element.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 1
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
      index * 0.3
    );
  });
  loaderMainText1Spans.forEach((element, index) => {
    mainTextTimeline.to(
      element,
      {
        opacity: 0,
        delay: 1.5,
      },
      index * 0.3
    );
  });
  loaderMainText2Spans.forEach((element, index) => {
    mainTextTimeline.to(
      element,
      {
        opacity: 1,
        delay: 4,
      },
      index * 0.2
    );
  });
  loaderMainText2Spans.forEach((element, index) => {
    mainTextTimeline.to(
      element,
      {
        opacity: 0,
        delay: 6.5,
      },
      index * 0.2
    );
  });
  loaderMainText3Spans.forEach((element, index) => {
    mainTextTimeline.to(
      element,
      {
        opacity: 1,
        delay: 10,
      },
      index * 0.2
    );
  });
  loaderMainText3Spans.forEach((element, index) => {
    mainTextTimeline.to(
      element,
      {
        opacity: 0,
        delay: 13,
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
  mainTextTimeline.to(body, {
    height: "auto",
    overflow: "auto",
  });
  mainTextTimeline.to(rootContainer, {
    opacity: 1,
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
        color: "var(--ft-c-hv)",
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

let smallHeaderMenu = document.querySelector("#s-hdr-menu");
let smallHeaderMenuClose = document.querySelector("#hdr-svg-close-cnt");
let smallHeaderMenuToggle = false;
let smallHeaderNavbar = document.querySelector("#s-hdr-s-nvb");
let smallHeaderElements = document.querySelectorAll(".s-nv-els");

function smallHeader() {
  smallHeaderMenu.addEventListener("click", () => {
    let timeline = gsap.timeline();
    gsap.to(smallHeaderNavbar, {
      display: "flex",
    });
    gsap.to(smallHeaderNavbar, {
      opacity: 1,
      width: "100%",
      duration: 0.1,
    });
    gsap.to(body, {
      height: "100vh",
      overflowX: "hidden",
    });
    smallHeaderElements.forEach((element, index) => {
      gsap.to(element, {
        opacity: 1
        // duration: 0.5
      }, index * 1.5);
    });
  });

  smallHeaderMenuClose.addEventListener("click", () => {
    let timeline = gsap.timeline();
    timeline.to(smallHeaderNavbar, {
      opacity: 0,
      width: "0%",
      duration: 0.1,
    });
    timeline.to(smallHeaderNavbar, {
      display: "none",
    });
    timeline.to(body, {
      height: "auto",
      overflowX: "auto",
    });
    smallHeaderElements.forEach((element, index) => {
      gsap.to(element, {
        opacity: 0
      }, index * 1.5);
    });
  });
}

function theHeader() {
  smallHeader();
}

function theHeroSection() {
}

function theExecutioner() {
  theCursor();
  theHeader();
  // COMMENT TO STOP THE :::LOADER:::
  // theLoader();
  theHeroSection();
}

theExecutioner();
