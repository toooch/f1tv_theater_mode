// Execute code when DOM is loaded
window.onload = async function() {

    // Get video image
    const frontImageDiv = await waitForElm(".inset-video-item-play-action-container");

    // Wait for click on image to init video buttons
    frontImageDiv.addEventListener("click", async function() {

        // Get video control bar
        let controlbarBottom = await waitForElm("#bmpui-id-77");
        let controlbarDiv = controlbarBottom.children[0];

        // Make our own button
        let tmButton = document.createElement("button"); // bmpui-ui-fullscreentogglebutton
        tmButton.className = "bmpui-ui-fullscreentogglebutton tmbutton bmpui-off";
        tmButton.id = "tmButton"
        tmButton.type = "button";
        tmButton.addEventListener("click", async function() {

            let tempTMButton = await waitForElm("#tmButton");
            let player = await waitForElm(".inset-video-item-image-container");
            let header = await waitForElm(".header");
            let playButton = await waitForElm(".inset-video-item-play-button-container");

            // Toggle functionality
            if(tempTMButton.classList.contains("bmpui-off")){
                // TM ON
                tempTMButton.classList.remove("bmpui-off");
                tempTMButton.classList.add("bmpui-on");

                player.classList.add("tmlargeplayer");
                header.classList.add("tmhidden");
                playButton.classList.add("tmhidden");

            } else if(tempTMButton.classList.contains("bmpui-on")){
                // TM OFF
                tempTMButton.classList.remove("bmpui-on");
                tempTMButton.classList.add("bmpui-off");

                player.classList.remove("tmlargeplayer");
                header.classList.remove("tmhidden");
                playButton.classList.remove("tmhidden");

            }
        })

        // Add our button to the control bar
        controlbarDiv.appendChild(tmButton);



        // Make new style for large player with class TMLargePlayer
        let customStyle = document.createElement("style");
        customStyle.innerHTML = `
            .tmbutton {
            }
        
            .tmlargeplayer {
                position: fixed;
                top: 0;
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

    })

};




async function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
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