const clickToStart = document.getElementById("clicktostart");
clickToStart.addEventListener("mousedown", startEmulator);

function startEmulator() {
    clickToStart.style.display = "none";

    const browser = new jsnes.Browser({
        container: document.getElementById("nes"),
        onError: function (e) {
            console.error(e);
        },
    });

    jsnes.Browser.loadROMFromURL("rom/play-it-by-trust.nes", function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        browser.loadROM(data);
    });
}