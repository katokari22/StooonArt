var backgroundImageIndex = 0; // Current index of the background image

function toggleBackground() {
    console.log("Button clicked!");
    
    var container = document.querySelector('.container');
    console.log("Container:", container);

    backgroundImageIndex = (backgroundImageIndex + 1) % 2; // Toggle between 0 and 1

    // Change background image based on the index
    if (backgroundImageIndex === 0) {
        console.log("Setting background to background.jpg");
        container.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('Background.jpg')";
    } else {
        console.log("Setting background to background2.jpg");
        container.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('Background2.jpg')";
    }
}

