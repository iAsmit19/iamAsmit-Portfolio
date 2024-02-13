/*
    The Castle's Towers
*/

// DECLARATION CENTER
let loader = document.querySelector("#ldr");
let loaderMainText1 = document.querySelector("#ldr-mn-1");
let loaderMainText2 = document.querySelector("#ldr-mn-2");
let loaderMainText3 = document.querySelector("#ldr-mn-3");
let loaderSubText = document.querySelector("#ldr-sb-txt p");
let rootContainer = document.querySelector("#rt");


// Operational Center
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
        // spanElement.style.opacity = 0;
        loaderMainText3.append(spanElement);
    });

    let loaderMainText3Spans = document.querySelectorAll(".mn-txt-3");

    let mainTextTimeline = gsap.timeline({
        ease: 'power1.inOut'
    });
    mainTextTimeline.to(loader, {
        opacity: 1,
        duration: 2
    });
    loaderMainText1Spans.forEach((element, index) => {
        mainTextTimeline.to(element, {
            opacity: 1
        }, index * 0.3);
    });
    loaderMainText1Spans.forEach((element, index) => {
        mainTextTimeline.to(element, {
            opacity: 0,
            delay: 2
        }, index * 0.6);
    });
    loaderMainText2Spans.forEach((element, index) => {
        mainTextTimeline.to(element, {
            opacity: 1,
            delay: 4
        }, index * 0.3);
    });
    loaderMainText2Spans.forEach((element, index) => {
        mainTextTimeline.to(element, {
            opacity: 0,
            delay: 8
        }, index * 0.3);
    });
    loaderMainText3Spans.forEach((element, index) => {
        mainTextTimeline.to(element, {
            opacity: 1,
            delay: 12
        }, index * 0.3);
    });
    loaderMainText3Spans.forEach((element, index) => {
        mainTextTimeline.to(element, {
            opacity: 0,
            delay: 16
        }, index * 0.3);
    });
    mainTextTimeline.to(loader, {
        opacity: 0,
        duration: 2
    });
    mainTextTimeline.to(loader, {
        display: "none"
    });
    mainTextTimeline.to(rootContainer, {
        display: "flex"
    });
    mainTextTimeline.to(rootContainer, {
        opacity: 1
    });



}

function theLoader() {
    loaderAnimation();
}

function theExecutioner() {
    theLoader();
}

theExecutioner();