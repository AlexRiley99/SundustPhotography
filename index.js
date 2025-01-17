document.addEventListener('DOMContentLoaded', function () {
    // Array of image URLs to cycle through
    const images = [
        "Images/CameraWithNotebook.jpg",
        "Images/Bagheera.jpeg",
        "Images/Grass.jpg",
        "Images/MistyRoad.jpeg",
        "Images/Bridge.jpg"
    ];

    let currentIndex = 0; // Start at the first image
    const imgElement = document.getElementById("homePageImg");

    // Function to change the image and apply fade effects
    function changeImage() {
        // Step 1: Start fade-out
        imgElement.classList.add("fade-out");

        // Step 2: Wait for fade-out to complete before changing the image (2 seconds)
        setTimeout(() => {
            // Step 3: Change image source
            currentIndex = (currentIndex + 1) % images.length; // Loop through images
            imgElement.src = images[currentIndex]; // Update the image source

            // Step 4: After the image source is updated, trigger fade-in
            imgElement.classList.remove("fade-out"); // Remove fade-out class
            imgElement.classList.add("fade"); // Add fade-in class for smooth transition

            // Optional: Remove the fade class after 2 seconds to reset the state
            setTimeout(() => {
                imgElement.classList.remove("fade");
            }, 2000); // 2 seconds to allow for fade-in to complete
        }, 2000); // 2 seconds to allow for fade-out to complete
    }

    // Change image every 5 seconds
    setInterval(changeImage, 3000);

    // Add click event listener to the container
    imgContainer.addEventListener('click', function () {
        // Redirect the user to the gallery page when the container is clicked
        window.location.href = 'gallery.html';
    });
});
