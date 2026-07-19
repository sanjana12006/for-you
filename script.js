function startJourney() {

    const music = document.getElementById("bgMusic");

    music.play().then(() => {

        localStorage.setItem("musicStarted", "true");

        setTimeout(() => {
            localStorage.setItem("musicTime", music.currentTime);
            window.location.href = "page2.html";
        }, 1000);

    }).catch(err => {
        console.error(err);
    });

}