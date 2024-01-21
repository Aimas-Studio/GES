images = ['assets/Header1.jpg', 'assets/Header2.jpg', 'assets/Header3.jpg'];
var slides = document.querySelectorAll('#slider .slide-image');
var dots = document.querySelectorAll('#dots');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);

for (var i = 0; i < dots.length; i++) {
    for (var j = 0; j < images.length; j++) {
        var dot = document.createElement('div');
        dot.classList.add('dot');
        dots[i].appendChild(dot);
    }
}
var dotElements = document.querySelectorAll('#dots .dot');
for (var i = 0; i < slides.length; i++) {
    slides[i].style.backgroundImage = `url(${images[currentSlide]})`;
}
for (var i = 0; i < dots.length; i++) {
    dotElements[dots.length*i].className = 'dot active';
}

function nextSlide() {
    currentSlide = (currentSlide+1)%images.length;
    for (var j = 0; j < dots.length; j++) {
        dotElements[currentSlide*j].className = 'dot';
        slides[j].style.backgroundImage = `url(${images[currentSlide]})`;
        dotElements[currentSlide+dots.length*j].className = 'dot active';
        for (var i = 0; i < images.length; i++) {
            if (currentSlide == 0 && i != 0)
            {
                dotElements[i+dots.length*j].className = 'dot';
            }
            if (i < currentSlide)
            {
                dotElements[i+dots.length*j].className = 'dot dot-visited';
            }
            else {
                dotElements[i+dots.length*j].classList.remove('dot-visited');
            }
        }
    }

}

// Obtén todos los enlaces y secciones
const links = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('.section');
// Función para verificar qué sección está en la vista
function checkSectionInView() {
    let i = 3;
    while (--i && window.scrollY + 500 < sections[i].offsetTop) {}
    links.forEach((link) => link.classList.remove('link-active'));
    links[i].classList.add('link-active');
    // links[i+3].classList.add('link-active');
}

// Escucha el evento de desplazamiento y llama a la función checkSectionInView
window.addEventListener('scroll', checkSectionInView);


// Obtén la imagen
setTimeout(()=>{
    var image = document.querySelectorAll('.image-container');
    
    // Define la animación
    if (window.innerWidth > 1366)
    {
        AnimaPC(image)
    }
    else
    {
        AnimaTablet(image)
    }
}, 200)


function AnimaTablet(image){
    const imageWidth = image[6].clientWidth;
    const imageHeight = image[6].clientHeight;
    const keyframes = [[
        { transform: `translate(0, 0)`, offset: 0 },
        { transform: `translate(0, ${imageHeight}px)`, offset: 0.083 },
        { transform: `translate(0, ${imageHeight}px)`, offset: 0.166 },
        { transform: `translate(0, ${imageHeight*2}px)`, offset: 0.249 },
        { transform: `translate(0, ${imageHeight*2}px)`, offset: 0.332 },
        { transform: `translate(${imageWidth}px, ${imageHeight*2}px)`, offset: 0.415 },
        { transform: `translate(${imageWidth}px, ${imageHeight*2}px)`, offset: 0.498 },
        { transform: `translate(${imageWidth}px, ${imageHeight}px)`, offset: 0.581 },
        { transform: `translate(${imageWidth}px, ${imageHeight}px)`, offset: 0.664 },
        { transform: `translate(${imageWidth}px, 0)`, offset: 0.747 },
        { transform: `translate(${imageWidth}px, 0)`, offset: 0.830 },
        { transform: `translate(0, 0)`, offset: 0.913 },
    ],
    [
        { transform: `translate(0, 0)`, offset: 0 },
        { transform: `translate(-${imageWidth}px, 0)`, offset: 0.083 },
        { transform: `translate(-${imageWidth}px, 0)`, offset: 0.166 },
        { transform: `translate(-${imageWidth}px, ${imageHeight}px)`, offset: 0.249  },
        { transform: `translate(-${imageWidth}px, ${imageHeight}px)`, offset: 0.332  },
        { transform: `translate(-${imageWidth}px, ${imageHeight*2}px)`, offset:  0.415   },
        { transform: `translate(-${imageWidth}px, ${imageHeight*2}px)`, offset: 0.498   },
        { transform: `translate(0, ${imageHeight*2}px)`, offset: 0.581  },
        { transform: `translate(0, ${imageHeight*2}px)`, offset: 0.664 },
        { transform: `translate(0, ${imageHeight}px)`, offset: 0.747},
        { transform: `translate(0, ${imageHeight}px)`, offset: 0.830 },
        { transform: `translate(0px, 0px)`, offset: 0.913 },
    ],
    [
        { transform: `translate(0, 0)`, offset: 0 },
        { transform: `translate(0, ${imageHeight}px)`, offset: 0.083 },
        { transform: `translate(0, ${imageHeight}px)`, offset: 0.166 },
        { transform: `translate(${imageWidth}px, ${imageHeight}px)`, offset: 0.249  },
        { transform: `translate(${imageWidth}px, ${imageHeight}px)`, offset: 0.332  },
        { transform: `translate(${imageWidth}px, 0)`, offset:  0.415   },
        { transform: `translate(${imageWidth}px, 0)`, offset: 0.498   },
        { transform: `translate(${imageWidth}px, -${imageHeight}px)`, offset: 0.581  },
        { transform: `translate(${imageWidth}px, -${imageHeight}px)`, offset: 0.664 },
        { transform: `translate(0, -${imageHeight}px)`, offset: 0.747},
        { transform: `translate(0, -${imageHeight}px)`, offset: 0.830 },
        { transform: `translate(0px, 0px)`, offset: 0.913 },
    ],
    [
        { transform: `translate(0, 0)`, offset: 0 },
        { transform: `translate(0, -${imageHeight}px)`, offset: 0.083 },
        { transform: `translate(0, -${imageHeight}px)`, offset: 0.166 },
        { transform: `translate(-${imageWidth}px, -${imageHeight}px)`, offset: 0.249  },
        { transform: `translate(-${imageWidth}px, -${imageHeight}px)`, offset: 0.332  },
        { transform: `translate(-${imageWidth}px, 0`, offset:  0.415   },
        { transform: `translate(-${imageWidth}px, 0)`, offset: 0.498   },
        { transform: `translate(-${imageWidth}px, ${imageHeight}px)`, offset: 0.581  },
        { transform: `translate(-${imageWidth}px, ${imageHeight}px)`, offset: 0.664 },
        { transform: `translate(0, ${imageHeight}px)`, offset: 0.747},
        { transform: `translate(0, ${imageHeight}px)`, offset: 0.830 },
        { transform: `translate(0px, 0px)`, offset: 0.913 },
    ],
    [
        { transform: `translate(0, 0)`, offset: 0  },
        { transform: `translate(${imageWidth}px, 0)`, offset: 0.083 },
        { transform: `translate(${imageWidth}px, 0)`, offset: 0.166 },
        { transform: `translate(${imageWidth}px, -${imageHeight}px)`, offset: 0.249 },
        { transform: `translate(${imageWidth}px, -${imageHeight}px)`, offset: 0.332 },
        { transform: `translate(${imageWidth}px, -${imageHeight*2}px)`, offset: 0.415 },
        { transform: `translate(${imageWidth}px, -${imageHeight*2}px)`, offset: 0.498 },
        { transform: `translate(0, -${imageHeight*2}px)`, offset: 0.581 },
        { transform: `translate(0, -${imageHeight*2}px)`, offset: 0.664 },
        { transform: `translate(0, -${imageHeight}px)`, offset: 0.747 },
        { transform: `translate(0, -${imageHeight}px)`, offset: 0.830 },
        { transform: `translate(0, 0)`, offset: 0.913 },
    ],
    [
        { transform: `translate(0, 0)`, offset: 0  },
        { transform: `translate(0, -${imageHeight}px)`, offset: 0.083 },
        { transform: `translate(0, -${imageHeight}px)`, offset: 0.166 },
        { transform: `translate(0, -${imageHeight*2}px)`, offset: 0.249 },
        { transform: `translate(0, -${imageHeight*2}px)`, offset: 0.332 },
        { transform: `translate(-${imageWidth}px, -${imageHeight*2}px)`, offset: 0.415 },
        { transform: `translate(-${imageWidth}px, -${imageHeight*2}px)`, offset: 0.498 },
        { transform: `translate(-${imageWidth}px, -${imageHeight}px)`, offset: 0.581 },
        { transform: `translate(-${imageWidth}px, -${imageHeight}px)`, offset: 0.664 },
        { transform: `translate(-${imageWidth}px, 0)`, offset: 0.747 },
        { transform: `translate(-${imageWidth}px, 0)`, offset: 0.830 },
        { transform: `translate(0, 0)`, offset: 0.913 },
    ]
];
    
    for (let i = 6; i < 12; i++) {
        console.log(image[i])
        image[i].animate(keyframes[i-6], {
            duration: 10000, // Duración de la animación en milisegundos
            iterations: Infinity, // Número de veces que se repetirá la animación
        });
    }
}

function AnimaPC(image){
    const imageWidth = image[0].clientWidth;
    const imageHeight = image[0].clientHeight;
    const keyframes = [[
        { transform: `translate(0, 0)`, offset: 0 },
        { transform: `translate(0, ${imageHeight-18}px)`, offset: 0.083 },
        { transform: `translate(0, ${imageHeight-18}px)`, offset: 0.166 },
        { transform: `translate(${imageWidth-18}px, ${imageHeight-18}px)`, offset: 0.249 },
        { transform: `translate(${imageWidth-18}px, ${imageHeight-18}px)`, offset: 0.332 },
        { transform: `translate(${imageWidth*2-36}px, ${imageHeight-18}px)`, offset: 0.415 },
        { transform: `translate(${imageWidth*2-36}px, ${imageHeight-18}px)`, offset: 0.498 },
        { transform: `translate(${imageWidth*2-36}px, 0)`, offset: 0.581 },
        { transform: `translate(${imageWidth*2-36}px, 0)`, offset: 0.664 },
        { transform: `translate(${imageWidth-18}px, 0)`, offset: 0.747 },
        { transform: `translate(${imageWidth-18}px, 0)`, offset: 0.830 },
        { transform: `translate(0, 0)`, offset: 0.913 },
    ],
    [
        { transform: `translate(0, 0)`, offset: 0 },
        { transform: `translate(-${imageWidth-18}px, 0)`, offset: 0.083 },
        { transform: `translate(-${imageWidth-18}px, 0)`, offset: 0.166 },
        { transform: `translate(-${imageWidth-18}px, ${imageHeight-18}px)`, offset: 0.249  },
        { transform: `translate(-${imageWidth-18}px, ${imageHeight-18}px)`, offset: 0.332  },
        { transform: `translate(0px, ${imageHeight-18}px)`, offset:  0.415   },
        { transform: `translate(0px, ${imageHeight-18}px)`, offset: 0.498   },
        { transform: `translate(${imageWidth-18}px, ${imageHeight-18}px)`, offset: 0.581  },
        { transform: `translate(${imageWidth-18}px, ${imageHeight-18}px)`, offset: 0.664 },
        { transform: `translate(${imageWidth-18}px, 0)`, offset: 0.747},
        { transform: `translate(${imageWidth-18}px, 0)`, offset: 0.830 },
        { transform: `translate(0px, 0px)`, offset: 0.913 },
    ],
    [
        { transform: `translate(0, 0)`, offset: 0 },
        { transform: `translate(-${imageWidth-18}px, 0)`, offset: 0.083 },
        { transform: `translate(-${imageWidth-18}px, 0)`, offset: 0.166 },
        { transform: `translate(-${imageWidth*2-36}px, 0)`, offset: 0.249  },
        { transform: `translate(-${imageWidth*2-36}px, 0)`, offset: 0.332  },
        { transform: `translate(-${imageWidth*2-36}px, ${imageHeight-18}px)`, offset:  0.415   },
        { transform: `translate(-${imageWidth*2-36}px, ${imageHeight-18}px)`, offset: 0.498   },
        { transform: `translate(-${imageWidth-18}px, ${imageHeight-18}px)`, offset: 0.581  },
        { transform: `translate(-${imageWidth-18}px, ${imageHeight-18}px)`, offset: 0.664 },
        { transform: `translate(0, ${imageHeight-18}px)`, offset: 0.747},
        { transform: `translate(0, ${imageHeight-18}px)`, offset: 0.830 },
        { transform: `translate(0px, 0px)`, offset: 0.913 },
    ],
    [
        { transform: `translate(0, 0)`, offset: 0 },
        { transform: `translate(${imageWidth-18}px, 0)`, offset: 0.083 },
        { transform: `translate(${imageWidth-18}px, 0)`, offset: 0.166 },
        { transform: `translate(${imageWidth*2-36}px, 0)`, offset: 0.249  },
        { transform: `translate(${imageWidth*2-36}px, 0)`, offset: 0.332  },
        { transform: `translate(${imageWidth*2-36}px, -${imageHeight-18}px)`, offset:  0.415   },
        { transform: `translate(${imageWidth*2-36}px, -${imageHeight-18}px)`, offset: 0.498   },
        { transform: `translate(${imageWidth-18}px, -${imageHeight-18}px)`, offset: 0.581  },
        { transform: `translate(${imageWidth-18}px, -${imageHeight-18}px)`, offset: 0.664 },
        { transform: `translate(0, -${imageHeight-18}px)`, offset: 0.747},
        { transform: `translate(0, -${imageHeight-18}px)`, offset: 0.830 },
        { transform: `translate(0px, 0px)`, offset: 0.913 },
    ],
    [
        { transform: `translate(0, 0)`, offset: 0 },
        { transform: `translate(${imageWidth-18}px, 0)`, offset: 0.083 },
        { transform: `translate(${imageWidth-18}px, 0)`, offset: 0.166 },
        { transform: `translate(${imageWidth-18}px, -${imageHeight-18}px)`, offset: 0.249  },
        { transform: `translate(${imageWidth-18}px, -${imageHeight-18}px)`, offset: 0.332  },
        { transform: `translate(0px, -${imageHeight-18}px)`, offset:  0.415   },
        { transform: `translate(0px, -${imageHeight-18}px)`, offset: 0.498   },
        { transform: `translate(-${imageWidth-18}px, -${imageHeight-18}px)`, offset: 0.581  },
        { transform: `translate(-${imageWidth-18}px, -${imageHeight-18}px)`, offset: 0.664 },
        { transform: `translate(-${imageWidth-18}px, 0)`, offset: 0.747},
        { transform: `translate(-${imageWidth-18}px, 0)`, offset: 0.830 },
        { transform: `translate(0px, 0px)`, offset: 0.913 },
    ],
    [
        { transform: `translate(0, 0)`, offset: 0  },
        { transform: `translate(0, -${imageHeight-18}px)`, offset: 0.083 },
        { transform: `translate(0, -${imageHeight-18}px)`, offset: 0.166 },
        { transform: `translate(-${imageWidth-18}px, -${imageHeight-18}px)`, offset: 0.249 },
        { transform: `translate(-${imageWidth-18}px, -${imageHeight-18}px)`, offset: 0.332 },
        { transform: `translate(-${imageWidth*2-36}px, -${imageHeight-18}px)`, offset: 0.415 },
        { transform: `translate(-${imageWidth*2-36}px, -${imageHeight-18}px)`, offset: 0.498 },
        { transform: `translate(-${imageWidth*2-36}px, 0)`, offset: 0.581 },
        { transform: `translate(-${imageWidth*2-36}px, 0)`, offset: 0.664 },
        { transform: `translate(-${imageWidth-18}px, 0)`, offset: 0.747 },
        { transform: `translate(-${imageWidth-18}px, 0)`, offset: 0.830 },
        { transform: `translate(0, 0)`, offset: 0.913 },
    ]];
    
    for (let i = 0; i < 6; i++) {
        image[i].animate(keyframes[i], {
            duration: 10000, // Duración de la animación en milisegundos
            iterations: Infinity, // Número de veces que se repetirá la animación
        });
    }
}