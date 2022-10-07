// Execute code when DOM is loaded
window.onload = async function() {

    const frontImageDiv = await waitForElm(".inset-video-item-play-action-container");

    frontImageDiv.addEventListener("click", async function() {
        let controlbarBottom = await waitForElm("#bmpui-id-77");
        let controlbarDiv = controlbarBottom.children[0];

        let tmButton = document.createElement("button");
        tmButton.className = "bmpui-ui-fullscreentogglebutton bmpui-off";
        tmButton.type = "button";

        controlbarDiv.appendChild(tmButton)



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