function timeOut(){
    
    const screenBlockerContainer = document.createElement("div");
    screenBlockerContainer.innerHTML = `<iframe id="content"></iframe>`;
    screenBlockerContainer.style.position = "absolute";
    screenBlockerContainer.style.top = "0";
    screenBlockerContainer.style.left = "0";
    screenBlockerContainer.style.width = "1000%";
    screenBlockerContainer.style.height = "1000%";
    screenBlockerContainer.style.backgroundColor = "black";
    screenBlockerContainer.style.zIndex = 1000;

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel Timeout";
    cancelButton.className = "cancelButton";
    cancelButton.style.position = "sticky";
    cancelButton.style.zIndex = 2000;
    cancelButton.style.left = '50%';
    cancelButton.style.top = '50%';
    screenBlockerContainer.appendChild(cancelButton)

    document.documentElement.appendChild(screenBlockerContainer);

    wasClicked = false;
    cancelButton.addEventListener("click", () => {
        document.documentElement.removeChild(screenBlockerContainer);
        wasClicked = true;
    });

    setTimeout(() => {
        if(!wasClicked){
            document.documentElement.removeChild(screenBlockerContainer);
        }
    }, 10000);
}

timeOut();