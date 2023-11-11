function timeOut(){
    const screenBlocker = `
    <iframe id="content">
    </iframe>`;

    const screenBlockerContainer = document.createElement("body");
    screenBlockerContainer.innerHTML = screenBlocker;
    document.documentElement.appendChild(screenBlockerContainer);

    const element = screenBlockerContainer.querySelector("iframe");
    element.style.position = "absolute";
    element.style.top = "0";
    element.style.left = "0";
    element.style.width = "1000%";
    element.style.height = "1000%";
    element.style.backgroundColor = "black";
    element.style.zIndex = 1000;

    setTimeout(() => {
    document.documentElement.removeChild(screenBlockerContainer)
    }, 10000);
}

timeOut();