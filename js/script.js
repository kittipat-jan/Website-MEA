// Slideshow / Carousel
// Fullscreen Slideshow Script
let fullSlideIndex = 1;
showFullSlides(fullSlideIndex);

function plusFullSlides(n) {
    showFullSlides(fullSlideIndex += n);
}

function currentFullSlide(n) {
    showFullSlides(fullSlideIndex = n);
}

function showFullSlides(n) {
    let i;
    let slides = document.getElementsByClassName("fullscreen-slide");
    let dots = document.getElementsByClassName("slide-dot");

    if (n > slides.length) { fullSlideIndex = 1 }
    if (n < 1) { fullSlideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[fullSlideIndex - 1].classList.add("active");
    dots[fullSlideIndex - 1].classList.add("active");
}

// สคริปต์สไลด์รูปภาพกิจกรรม
let activitySlideIndex = 1;
showActivitySlides(activitySlideIndex);

function plusActivitySlides(n) {
    showActivitySlides(activitySlideIndex += n);
}

function currentActivitySlide(n) {
    showActivitySlides(activitySlideIndex = n);
}

function showActivitySlides(n) {
    let i;
    let slides = document.getElementsByClassName("activity-slide");
    let dots = document.getElementsByClassName("dot1");

    if (n > slides.length) { activitySlideIndex = 1 }
    if (n < 1) { activitySlideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[activitySlideIndex - 1].classList.add("active");
    dots[activitySlideIndex - 1].classList.add("active");
}