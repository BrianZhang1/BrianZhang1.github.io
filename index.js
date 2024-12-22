document.addEventListener("DOMContentLoaded", () => {
    let data = [
        {
            id: 8,
            title: "Portfolio Site",
            description: "Django, AWS, Postgres, Docker",
            long_description:
                "Django, Nginx, PostgreSQL, and a REST API. Containerized services coordinated by Docker Compose. Build and deployment to AWS EC2 automated through GitHub Actions. Live production monitoring with Prometheus and Grafana.",
            demo_url: "https://www.youtube.com/embed/9JZKcrxfVYI?autoplay=1",
            repo_url: "https://github.com/BrianZhang1/Personal-Site",
            order: 0,
            image: "portfolio-preview.png",
        },
        {
            id: 10,
            title: "Card Classifier",
            description: "Fine-tuned ML",
            long_description:
                "Classifies cards from three different games. Uses a fine-tuned machine learning model (resnet34). Developed with fastai and Jupyter Notebooks. User interface built with Gradio and deployed to HuggingFace Spaces.",
            demo_url: "https://www.youtube.com/embed/bH0vtZ5cI40?autoplay=1",
            repo_url: "https://github.com/BrianZhang1/Card-Classifier",
            order: 1,
            image: "card-classifier-preview.png",
        },
        {
            id: 9,
            title: "Repl.it Migrator",
            description: "Selenium Web Scraper",
            long_description:
                "A Python, Selenium web scraping tool for Repl.it with a variety of supplementary features including report generation, a ChatGPT-based chatbot, and a user management system integrated into a database server.",
            demo_url: "https://www.youtube.com/embed/aG4aOqUAZrQ?autoplay=1",
            repo_url: "https://github.com/BrianZhang1/Replit-Migrator",
            order: 2,
            image: "replit-migrator-preview.png",
        },
        {
            id: 1,
            title: "Swing Paint",
            description: "Java Swing GUI",
            long_description:
                "A desktop GUI written in Java designed to simplify the creation of Swing graphics in a drag-and-drop user interface. Built with Maven, alongside a simple test suite.",
            demo_url: "https://www.youtube.com/embed/HUjDok2mIwg?autoplay=1",
            repo_url: "https://github.com/BrianZhang1/Swing-Paint",
            order: 3,
            image: "swing-paint-preview.png",
        },
        {
            id: 2,
            title: "Dweller",
            description: "Pygame Platformer",
            long_description:
                "A fully-animated, combat-based platformer built with Pygame, a Python library. Battle through hordes of enemies as a lumberjack! Custom map creation included.",
            demo_url: "https://www.youtube.com/embed/5HtUaDxKyE0?autoplay=1",
            repo_url: "https://github.com/BrianZhang1/Dweller",
            order: 4,
            image: "dweller-preview.png",
        },
        {
            id: 11,
            title: "Book Inventory",
            description: "MERN w/ Tailwind and Vite",
            long_description:
                "A simple CRUD app using the MERN stack with Tailwind and Vite. Stores data on books.",
            demo_url: "https://www.youtube.com/embed/L9rLzt8PEJA?autoplay=1",
            repo_url: "https://github.com/BrianZhang1/Book-Store",
            order: 5,
            image: "Screenshot_2024-04-01_at_4.51.16PM.png",
        },
        {
            id: 4,
            title: "Snakefest",
            description: "Tkinter Snake",
            long_description:
                "A snake-like game built with Tkinter, the classic Python GUI library. Enjoy some good-ol' snake extended by various special tiles and custom map creation!",
            demo_url: "https://www.youtube.com/embed/qjfS4Siiew4?autoplay=1",
            repo_url: "https://github.com/BrianZhang1/Snakefest",
            order: 6,
            image: "snakefest-preview.png",
        },
        {
            id: 3,
            title: "Reaction Timer",
            description: "Simple Flask Website",
            long_description:
                "A minimal website powered by a Flask back-end and an SQL database. Make an account, test your reaction time, and upload it to the leaderboards!",
            demo_url: "https://www.youtube.com/embed/hHKntZSt8Ec?autoplay=1",
            repo_url: "https://github.com/BrianZhang1/Reaction-Timer",
            order: 7,
            image: "reaction-timer-preview.png",
        },
        {
            id: 5,
            title: "YouTube UI",
            description: "Copy of Youtube's Front-end",
            long_description:
                "My first structured front-end project. A simple replication of Youtube's user interface, constructed from observation.",
            demo_url: "https://www.youtube.com/embed/3eNVsCeutcU?autoplay=1",
            repo_url: "https://github.com/BrianZhang1/Youtube",
            order: 8,
            image: "youtube-clone-preview.png",
        },
    ];

    window.scrollTo({ top: 0, behavior: "smooth" });

    const dismissOrientationPopup = document.querySelector("#landscape-popup");
    const dismissOrientationPopupButton = document.querySelector(
        "#landscape-popup-button"
    );
    dismissOrientationPopupButton.onclick = () => {
        dismissOrientationPopup.remove();
    };

    const nameHeader = document.querySelector("#name-display");
    const text = "brian_zhang";

    const socialMediaWrapper = document.querySelector("#initial-display > div");
    const portfolioAreaWrapper = document.querySelector(
        "#portfolio-area-wrapper"
    );
    const skipAnimationButton = document.querySelector(
        "#skip-animation-button"
    );
    skipAnimationButton.onclick = () => {
        charCount = text.length - 1;
        type();
    };
    setTimeout(() => {
        portfolioAreaWrapper.classList.add("opacity-transition-slow");
        skipAnimationButton.classList.add("opacity-transition-fast");
    }, 50);

    // add projects to portfolio area

    // {% for p in projects %}
    //     <button id="{{ p.title }}-portfolio-item-id">
    //         <h3>{{ p.title }}</h3>
    //         <p>{{ p.description }}</p>
    //         <!-- TODO -->
    //         <img src="{% get_media_prefix %}{{ p.image }}">
    //     </button>
    // {% endfor %}
    const portfolioItems = [];
    const portfolioArea = document.querySelector("#portfolio-area");
    data.forEach((project) => {
        const portfolioItem = document.createElement("button");
        portfolioItem.id = project.title + "-portfolio-item-id";
        const portfolioItemHeader = document.createElement("h3");
        const portfolioItemParagraph = document.createElement("p");
        const portfolioItemImage = document.createElement("img");
        portfolioItemHeader.textContent = project.title;
        portfolioItemParagraph.textContent = project.description;
        portfolioItemImage.src = "media/" + project.image;
        portfolioItem.appendChild(portfolioItemHeader);
        portfolioItem.appendChild(portfolioItemParagraph);
        portfolioItem.appendChild(portfolioItemImage);
        portfolioArea.appendChild(portfolioItem);
        portfolioItems.push(portfolioItem);
    });

    let charCount = 0;

    function type() {
        ++charCount;

        if (charCount <= text.length) {
            nameHeader.textContent = text.substring(0, charCount);
            setTimeout(type, 200);
        } else {
            skipAnimationButton.style.opacity = 0;
            setTimeout(skipAnimationButton.remove, 500);
            socialMediaWrapper.classList.remove("display-none");
            setTimeout(() => {
                socialMediaWrapper.classList.remove("opacity-0");
                portfolioAreaWrapper.classList.remove("opacity-0");
                Array.from(portfolioItems).forEach((item) => {
                    item.onclick = (event) => handlePortfolioClick(event, data);
                });
            }, 1000);
        }
    }

    if (charCount === 0) {
        setTimeout(type, 1500);
    }
});

function handlePortfolioClick(event, data) {
    const projectId = event.currentTarget.id;
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.querySelector("#cursor").classList.add("remove-animation");

    const seeMoreDetailsText = document.querySelector("#see-more-details-text");
    if (!seeMoreDetailsText.style.height !== 0) {
        seeMoreDetailsText.style.height = 0;
        seeMoreDetailsText.style.marginTop = 0;
    }

    const displayArea = document.querySelector("#display-area");
    const initialDisplay = document.querySelector("#initial-display");
    const itemDisplay = document.querySelector("#item-display");
    const backButton = document.querySelector("#item-display > button");

    if (initialDisplay.classList.contains("display-none")) {
        itemDisplay.classList.remove("opacity-transition-medium");
        itemDisplay.classList.add("opacity-transition-fast", "opacity-0");
        setTimeout(() => {
            updateDisplayInformation(projectId, data);
            itemDisplay.classList.remove("opacity-0");
        }, 750);
    } else {
        // initial display area fade left animation
        initialDisplay.classList.add("fade-left");
        initialDisplay.classList.add("opacity-0");

        setTimeout(() => {
            initialDisplay.classList.add("display-none");
            itemDisplay.classList.remove("display-none");
            setTimeout(() => {
                itemDisplay.classList.remove("opacity-0");
                backButton.onclick = () => {
                    document.querySelector("#item-display > iframe").src = ""; // stop video if it's playing
                    itemDisplay.classList.add("opacity-0");
                    setTimeout(() => {
                        itemDisplay.classList.add("display-none");
                        initialDisplay.classList.remove("display-none");
                        setTimeout(() => {
                            initialDisplay.classList.remove("fade-left");
                            initialDisplay.classList.remove("opacity-0");
                        }, 50);
                    }, 500);
                };

                updateDisplayInformation(projectId, data);
            }, 50);
        }, 1000);
    }
}

// update display information depending on project selected
function updateDisplayInformation(projectId, data) {
    let targetProject = null;
    for (project of data) {
        if (projectId === project.title + "-portfolio-item-id") {
            targetProject = project;
        }
    }

    const itemDisplayHeader = document.querySelector("#item-display  h2");
    const itemDisplayParagraph = document.querySelector("#item-display  p");
    const itemDisplayLink = document.querySelector("#item-display a");
    const videoPlayer = document.querySelector("#item-display > iframe");
    itemDisplayHeader.textContent = targetProject.title;
    itemDisplayParagraph.textContent = targetProject.long_description;
    itemDisplayLink.href = targetProject.repo_url;
    videoPlayer.src = targetProject.demo_url;
}
