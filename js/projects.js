const slidesData = [
    {
        image: "images/projects/cevr.png",
        description: "I created the website for China Electric Vehicle Rwanda is an environment-first company that provides electric vehicles to the Rwandan market.",
        link: "https://www.cevr.rw/"
    },
    {
        image: "images/projects/maspeqa.png",
        description: "Maspeqa, a company I'm proud to be a part of, is among the leading tech startups in Rwanda, specializing in software development and IT solutions.",
        link: "https://www.maspeqa.com/"
    },
    {
        image: "images/projects/soulhostels.png",
        description: "Soul Hostels, whose website I designed and developed with a classmate, is one of the best comfortable hostels in Rwanda, located just near Africa Leadership University.",
        link: "https://www.soulhostels.rw/"
    },
];

let currentSlide = 0;
let progress = 0;
let intervalId;

const slidesWrapper = document.getElementById('slidesWrapper');
const dotsContainer = document.getElementById('dotsContainer');

function initializeSlideshow() {
    slidesData.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('slide');

        const img = document.createElement('img');
        img.src = slide.image;
        img.alt = `Car Image ${index + 1}`;
        slideDiv.appendChild(img);

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('slide-content');

        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = slide.description;
        descriptionParagraph.style.color = "rgb(200, 200, 200)";
        contentDiv.appendChild(descriptionParagraph);

        const linkAnchor = document.createElement('a');
        linkAnchor.href = slide.link;
        linkAnchor.textContent = "Learn More";
        linkAnchor.target = "_blank";
        contentDiv.appendChild(linkAnchor);

        slideDiv.appendChild(contentDiv);
        slidesWrapper.appendChild(slideDiv);
    });

    slidesData.forEach((_, index) => {
        const dotDiv = document.createElement('div');
        dotDiv.classList.add('dot');
        dotDiv.dataset.index = index;
        dotDiv.addEventListener('click', () => {
            goToSlide(index);
            resetProgress();
        });
        dotsContainer.appendChild(dotDiv);
    });

    updateSlideshow();
    startProgressInterval();
}

function updateSlideshow() {
    slidesWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
}

function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.remove('active');
        dot.style.background = 'lightgray';
        dot.style.setProperty('--progress-width', '0%');

        if (index === currentSlide) {
            dot.classList.add('active');
            dot.style.setProperty('--progress-width', `${progress}%`);
        }
    });
}

function goToNextSlide() {
    currentSlide = (currentSlide + 1) % slidesData.length;
    updateSlideshow();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlideshow();
}

function resetProgress() {
    progress = 0;
}

function startProgressInterval() {
    clearInterval(intervalId);

    intervalId = setInterval(() => {
        progress += 1;
        if (progress > 100) {
            progress = 0;
            goToNextSlide();
        }
        updateDots();
    }, 50);
}

document.addEventListener('DOMContentLoaded', initializeSlideshow);