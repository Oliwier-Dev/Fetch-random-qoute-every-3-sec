const ui = {
    btn:        document.querySelector("#btn"),
    output:     document.querySelector("#output"),
    loadScreen: document.querySelector("#loadingScreenContainer")
};

let switchQoutes = null;
let qoutes = [];

ui.btn.addEventListener("click", fetchQoutes)

async function fetchQoutes() {
    if (qoutes.length === 0) {
        try {
            ui.loadScreen.style.display = "flex"
            const response = await fetch("./kb.JSON");
            if (!response.ok) {
                throw new Error("Didn't find JSON:", response.status)
            }
            qoutes = await response.json();
            ui.loadScreen.style.display = "none"
        } catch (error) {
            console.log("Fetch failed:", error)
            ui.output.textContent = "Error loading quotes";
        }
    }

    if (!switchQoutes) {
        ui.btn.textContent = "Stop"
        switchQoutes = setInterval(() => {
            const randomQoute = Math.floor(Math.random() * qoutes.length);
            ui.output.textContent = qoutes[randomQoute];
        }, 3000);
    } else {
        clearInterval(switchQoutes)
        ui.loadScreen.style.display = "none"
        ui.btn.textContent = "Start"
        switchQoutes = null;
    }
};