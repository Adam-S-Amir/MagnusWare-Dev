const installUrl = "https://www.w3technic.com/chrome-extension/tetris-cubes-game/#welcome";
const uninstallUrl = "https://www.w3technic.com/chrome-extension/tetris-cubes-game/#uninstall";


class ExtBackground {

    initialize() {
        chrome.runtime.onInstalled.addListener(
            (details) => this.onInstalled(details));

        if (uninstallUrl) {
            chrome.runtime.setUninstallURL(uninstallUrl);
        }
    }



    onInstalled(details) {
        if (details.reason == "install") {
            chrome.tabs.create({
                url: `${installUrl}`,
            });
        }
    }
}



new ExtBackground().initialize();

//

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request.method)
    if (request.method == "runtimeID")
        sendResponse("ok");
});