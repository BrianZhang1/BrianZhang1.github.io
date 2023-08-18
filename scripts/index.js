
document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo({top: 0, behavior: "smooth"});
    const nameHeader = document.querySelector("#name-display");
    const text = "brian_zhang";

    const socialMediaWrapper = document.querySelector("#initial-display > div");
    const portfolioAreaWrapper = document.querySelector("#portfolio-area-wrapper");
    const skipAnimationButton = document.querySelector("#skip-animation-button");
    const portfolioItems = document.querySelectorAll("#portfolio-area > button");
    skipAnimationButton.onclick = () => {
        charCount = text.length-1;
        type();
    };
    setTimeout(() => {
        portfolioAreaWrapper.classList.add("opacity-transition-slow");
        skipAnimationButton.classList.add("opacity-transition-fast");
    }, 50);

    let charCount = 0;

    function type() {
        ++charCount;
        
        if(charCount <= text.length) {
            nameHeader.textContent = text.substring(0, charCount);
            setTimeout(type, 200);
        }
        else {
            skipAnimationButton.style.opacity = 0;
            setTimeout(skipAnimationButton.remove, 500);
            socialMediaWrapper.classList.remove("display-none");
            setTimeout(() => {
                socialMediaWrapper.classList.remove("opacity-0");
                portfolioAreaWrapper.classList.remove("opacity-0");
                Array.from(portfolioItems).forEach((item) => {
                    item.onclick = handlePortfolioClick;
                });
            }, 1000);
        }
    }

    if(charCount === 0) {
        setTimeout(type, 1500);
    }
});


function handlePortfolioClick(event) {
    const projectId = event.currentTarget.id;
    window.scrollTo({top: 0, behavior: "smooth"});
    document.querySelector("#cursor").classList.add("remove-animation");

    const seeMoreDetailsText = document.querySelector("#see-more-details-text");
    if(!seeMoreDetailsText.style.height !== 0) {
        seeMoreDetailsText.style.height = 0;
        seeMoreDetailsText.style.marginTop = 0;
    }

    const displayArea = document.querySelector("#display-area");
    const initialDisplay = document.querySelector("#initial-display");
    const itemDisplay = document.querySelector("#item-display");
    const backButton = document.querySelector("#item-display > button");

    if(initialDisplay.classList.contains("display-none")) {
        itemDisplay.classList.remove("opacity-transition-medium");
        itemDisplay.classList.add("opacity-transition-fast", "opacity-0");
        setTimeout(() => {
            updateDisplayInformation(projectId);
            itemDisplay.classList.remove("opacity-0");
        }, 750);
    }
    else {
        // initial display area fade left animation
        displayArea.classList.add("darken");
        initialDisplay.classList.add("fade-left");
        initialDisplay.classList.add("opacity-0");

        setTimeout(() => {
            initialDisplay.classList.add("display-none");
            itemDisplay.classList.remove("display-none");
            setTimeout(() => {
                itemDisplay.classList.remove("opacity-0");
                backButton.onclick = () => {
                    document.querySelector("#item-display > iframe").src = ""; // stop video if it's playing
                    displayArea.classList.remove("darken");
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

                updateDisplayInformation(projectId);
            }, 50)

        }, 1000);
    }
}


// update display information depending on project selected
function updateDisplayInformation(projectId) {
    let headerText, paragraphText, githubLink, videoLink;
    switch(projectId) {
        case "swing-paint": {
            headerText = "Swing Paint";
            paragraphText = "A desktop GUI written in Java designed to simplify the creation of Swing graphics in a drag-and-drop user interface. Built with Maven, alongside a simple test suite.";
            githubLink = "https://github.com/BrianZhang1/Swing-Paint";
            videoLink = "https://www.youtube.com/embed/HUjDok2mIwg?autoplay=1";
            break;
        }
        case "dweller": {
            headerText = "Dweller";
            paragraphText = "A fully-animated, combat-based platformer built with Pygame, a set of Python modules. Battle through hordes of enemies as a lumberjack! Custom map creation included.";
            githubLink = "https://github.com/BrianZhang1/Dweller";
            videoLink = "https://www.youtube.com/embed/5HtUaDxKyE0?autoplay=1";
            break;
        }
        case "reaction-timer": {
            headerText = "Reaction Timer";
            paragraphText = "A minimal website powered by a Flask back-end and an SQL database. Make an account, test your reaction time, and upload it to the leaderboards!";
            githubLink = "https://github.com/BrianZhang1/Reaction-Timer";
            videoLink = "https://www.youtube.com/embed/hHKntZSt8Ec?autoplay=1";
            break;
        }
        case "snakefest": {
            headerText = "Snakefest";
            paragraphText = "A snake-like game built with Tkinter, the classic Python GUI library. Enjoy some good-ol' snake extended by various special tiles and custom map creation!";
            githubLink = "https://github.com/BrianZhang1/Snakefest";
            videoLink = "https://www.youtube.com/embed/qjfS4Siiew4?autoplay=1";
            break;
        }
        case "youtube-clone": {
            headerText = "Youtube Clone";
            paragraphText = "My first structured front-end project. A simple replication of Youtube's user interface, constructed from observation.";
            githubLink = "https://github.com/BrianZhang1/Youtube";
            videoLink = "https://www.youtube.com/embed/3eNVsCeutcU?autoplay=1";
            break;
        }
        case "tournament-timer": {
            headerText = "Tournament Timer";
            paragraphText = "My first front-end project. A timer UI with a format and control panel specialized to a proposal-presentation competition.";
            githubLink = "https://github.com/BrianZhang1/Tournament-Timer";
            videoLink = "https://www.youtube.com/embed/Vw1l-G-0kvU?autoplay=1";
            break;
        }
    }

    const itemDisplayHeader = document.querySelector("#item-display  h2");
    const itemDisplayParagraph = document.querySelector("#item-display  p");
    const itemDisplayLink = document.querySelector("#item-display a");
    const videoPlayer = document.querySelector("#item-display > iframe");
    itemDisplayHeader.textContent = headerText;
    itemDisplayParagraph.textContent = paragraphText;
    itemDisplayLink.href = githubLink;
    videoPlayer.src = videoLink;
}