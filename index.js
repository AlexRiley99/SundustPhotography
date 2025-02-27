document.addEventListener('DOMContentLoaded', function () {
    // Array of image URLs to cycle through
    const images = [
        "Images/Personal/IMG_7936.jpg",
        "Images/Personal/IMG_0501.jpg",
        "Images/Personal/IMG_0079.jpg",
        "Images/MellowGlow/Mellowgllowph-38.jpg",
        "Images/Personal/IMG_8327.jpg"
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

            setTimeout(() => {
                imgElement.classList.remove("fade");
            }, 2000); // 2 seconds to allow for fade-in to complete
        }, 2000); // 2 seconds to allow for fade-out to complete
    }

    // Change image every 3 seconds
    setInterval(changeImage, 3000);

    // Add click event listener to the container
    img_div.addEventListener('click', function () {
        // Redirect the user to the gallery page when the container is clicked
        window.location.href = 'gallery';
    });
});
