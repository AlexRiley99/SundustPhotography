document.addEventListener('DOMContentLoaded', function () {// Array of image URLs to cycle through
const images = [
    "Images/CameraWithNotebook.jpg",
    "Images/Bagheera.jpeg",
    "Images/RainyRoad.jpeg",
    "Images/RainyCurb.jpeg"
];

let currentIndex = 0; // Start at the first image
const imgElement = document.getElementById("homePageImg");

function changeImage() {
    imgElement.classList.add("fade-out"); // Add fade-out effect

    // After the fade-out transition completes, change the image
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length; // Loop through images
        imgElement.src = images[currentIndex]; // Update the image source

        imgElement.classList.remove("fade-out"); // Remove the fade-out class to trigger fade-in
        imgElement.classList.add("fade"); // Add fade class for a smooth transition
    }, 1000); // Match this timeout to the CSS transition duration
}

// Change image every 5 seconds
setInterval(changeImage, 5000);
})