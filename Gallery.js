document.addEventListener('DOMContentLoaded', function () {
    // Get the container where the images are displayed and the expanded image container
    const imgContainer = document.querySelector('.imgContainer');
    const expandedImageContainer = document.getElementById('expandedImageContainer');
    const expandedImage = document.getElementById('expandedImage');
    const closeBtn = document.getElementById('closeBtn');

    // Event listener for clicking on images in the container
    imgContainer.addEventListener('click', function (e) {
        if (e.target.tagName.toLowerCase() === 'img') {
            // Set the source of the expanded image to the clicked image's source
            expandedImage.src = e.target.src;
            // Show the expanded image container
            expandedImageContainer.style.display = 'flex';
        }
    });

    // Event listener for clicking the close (X) button
    closeBtn.addEventListener('click', function () {
        // Hide the expanded image container
        expandedImageContainer.style.display = 'none';
    });
});
