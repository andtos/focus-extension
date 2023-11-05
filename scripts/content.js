function timeOut(){
    const customLoaderHtml = `
    <iframe id="custom-loader-extension">
    hello
    </iframe>`;

    const loaderContainer = document.createElement("div");
    loaderContainer.innerHTML = customLoaderHtml;
    document.documentElement.appendChild(loaderContainer);

    const div = loaderContainer.querySelector("iframe");
    div.style.position = "fixed";
    div.style.top = "0";
    div.style.left = "0";
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.border = "none";
    div.style.backgroundColor = "black";
    div.style.zIndex = 1000;

    setTimeout(() => {
    loaderContainer.style.display = "none";
    }, 5000);
}

timeOut();