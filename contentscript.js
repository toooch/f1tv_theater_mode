// Execute code when DOM is loaded
window.onload = async function() {

    // const frontImageDiv = await waitForElm(".inset-video-item-play-action-container");
    const frontImage = await waitForElm(".inset-video-item-image");

    // frontImageDiv.addEventListener("click", async function() {
    //     await tmButtonStuff();
    // });

    frontImage.addEventListener("click", async function() {
        await customStyleStuff();
        await tmButtonStuff();
    })

};


async function tmButtonStuff() {
    let controlbarBottom = await waitForElm(".bmpui-controlbar-bottom");
    let controlbarDiv = controlbarBottom.children[0];

    let tmButton = document.createElement("button");
    tmButton.className = "bmpui-ui-fullscreentogglebutton bmpui-off";
    tmButton.type = "button";
    tmButton.id = "tmButton";
    tmButton.title = "TheaterMode";
    tmButton.addEventListener("click", async function () {

        console.log("clicked");

        let tempTMButton = await waitForElm("#tmButton")
        // console.log("temptmbutton: " + tempTMButton)

        let player = await waitForElm(".inset-video-item-image-container")
        // console.log("player: " + player)

        let header = await waitForElm(".header")
        // console.log("header: " + header)

        let globalHeader = await waitForElm(".global-header");
        // console.log("global header: " + globalHeader

        let playButton = await waitForElm(".inset-video-item-play-button-container")
        // console.log("play button: " + playButton)

        // console.log("components gathered, toggle should start now")
        // Toggle functionality
        if (tempTMButton.classList.contains("bmpui-off")) {
            // TM ON
            tempTMButton.classList.remove("bmpui-off");
            tempTMButton.classList.add("bmpui-on");

            player.classList.add("tmlargeplayer");
            header.classList.add("tmhidden");
            globalHeader.classList.add("tmhidden");
            playButton.classList.add("tmhidden");

        } else if (tempTMButton.classList.contains("bmpui-on")) {
            // TM OFF
            tempTMButton.classList.remove("bmpui-on");
            tempTMButton.classList.add("bmpui-off");

            player.classList.remove("tmlargeplayer");
            header.classList.remove("tmhidden");
            globalHeader.classList.remove("tmhidden");
            playButton.classList.remove("tmhidden");

        }
    })

    await controlbarDiv.appendChild(tmButton)
}

async function customStyleStuff() {
    // Make new style for large player with class TMLargePlayer
    let customStyle = document.createElement("style");
    customStyle.innerHTML = `
            .tmbutton {
            }
        
            .tmlargeplayer {
                position: fixed;
                margin-top: -10%;
                left: 50%;
                width: 150%;
                aspect-ratio: 16/9;
                max-width: 98vw;
                transform: translateX(-50%);
            }
            
            .tmhidden {
                display: none;
            }
        `;

    // Add our style to the page
    document.head.appendChild(customStyle);
}


async function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(() => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}