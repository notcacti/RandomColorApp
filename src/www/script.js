const colorElement = document.getElementById("color");

colorElement.addEventListener("click", async e => {
    e.preventDefault();

    await navigator.clipboard.writeText(colorElement.innerText);

    const icon = document.getElementById("icon");
    icon.className = 'fa-solid fa-check';

    await new Promise(r => setTimeout(r, 1000));

    icon.className = 'fa-regular fa-clone'
});