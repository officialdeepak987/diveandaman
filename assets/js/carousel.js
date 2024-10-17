// Home 1 

$(document).ready(function () {
    var owl = $('.service-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
})

$(document).ready(function () {
    var owl = $('.activity-con .owl-carousel');
    owl.owlCarousel({
        center: true,
        margin: 30,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
})

// Home 2 

$(document).ready(function () {
    var owl = $('.kayaking_banner-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 8000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            }
        }
    })
})

$(document).ready(function () {
    var owl = $('.service2-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
})

$(document).ready(function () {
    var owl = $('.testimonial2-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    })
})

// Home 3

$(document).ready(function () {
    var owl = $('.scuba_banner-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 8000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            }
        }
    })
})

$(document).ready(function () {
    var owl = $('.testimonial3-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
})




// 


let currentIndex = 0;
const images = document.querySelectorAll(".carousel-image");
const dots = document.querySelectorAll(".dot");

function showImage(index) {
  currentIndex = index;
  updateCarousel();
}

function updateCarousel() {
  // Move the images container to show the selected image
  const offset = currentIndex * -100;
  document.querySelector(".carousel").style.transform = `translateX(${offset}%)`;

  // Update active dot
  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === currentIndex);
  });
}

// Initialize the carousel with the first image and dot active
updateCarousel();


///////////////




let currentSlideIndex = [0, 0]; // Keep track of the current slide for both carousels
const carousels = [
  document.querySelectorAll("#carousel1 .carousel-img"),
  document.querySelectorAll("#carousel2 .carousel-img")
];

function showSlide(carouselIndex, slideIndex) {
  if (slideIndex >= carousels[carouselIndex].length) {
    currentSlideIndex[carouselIndex] = 0;
  } else if (slideIndex < 0) {
    currentSlideIndex[carouselIndex] = carousels[carouselIndex].length - 1;
  } else {
    currentSlideIndex[carouselIndex] = slideIndex;
  }

  const carousel = document.getElementById(`carousel${carouselIndex + 1}`);
  const width = carousel.clientWidth;
  carousel.style.transform = `translateX(-${currentSlideIndex[carouselIndex] * width}px)`;
}

function prevSlide(carouselIndex) {
  showSlide(carouselIndex - 1, currentSlideIndex[carouselIndex - 1] - 1);
}

function nextSlide(carouselIndex) {
  showSlide(carouselIndex - 1, currentSlideIndex[carouselIndex - 1] + 1);
}

// Initialize the first slide for both carousels
showSlide(0, 0);
showSlide(1, 0);




// acivement


// Function to animate counters
function animateCounter(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));

    let timer = setInterval(function () {
        current += increment;
        obj.innerHTML = current + (id === "count1" ? "%" : "+");
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Start counting when the page loads
window.onload = function () {
    animateCounter("count1", 0, 100, 2000);  // Happy Clients
    animateCounter("count2", 0, 50, 2000);   // Expert Instructors
    animateCounter("count3", 0, 1278, 2000); // Positive Reviews
    animateCounter("count4", 0, 40, 2000);   // Awards Win
}
