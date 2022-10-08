// Execute code when DOM is loaded
window.onload = async function() {

    const frontImageDiv = await waitForElm(".inset-video-item-play-action-container");
    const frontImage = await waitForElm(".inset-video-item-image");

    // frontImageDiv.addEventListener("click", async function() {
    //     await tmButtonStuff();
    // });

    frontImage.addEventListener("click", async function() {
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
    tmButton.addEventListener("click", async function () {

        console.log("clicked");

        let tempTMButton = await waitForElm("#tmButton")
        // console.log("temptmbutton: " + tempTMButton)

        let player = await waitForElm(".inset-video-item-image-container")
        // console.log("player: " + player)

        let header = await waitForElm(".header")
        // console.log("header: " + header)

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
            playButton.classList.add("tmhidden");

        } else if (tempTMButton.classList.contains("bmpui-on")) {
            // TM OFF
            tempTMButton.classList.remove("bmpui-on");
            tempTMButton.classList.add("bmpui-off");

            player.classList.remove("tmlargeplayer");
            header.classList.remove("tmhidden");
            playButton.classList.remove("tmhidden");

        }
    })

    controlbarDiv.appendChild(tmButton)
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