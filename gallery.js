document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const expandedImage = document.getElementById('expandedImage');
    const closeButton = document.getElementById('closeButton');
    const galleryImages = document.querySelectorAll('#imgContainer img'); //Select the entire gallery
    const image = document.querySelectorAll('img');

    //Function to expand an image
    function expandImage(imageSrc) {
        expandedImage.src = imageSrc;
        overlay.style.display = 'flex';
    }

    //Function to close the expanded image
    function closeImage() {
        overlay.style.display = 'none';
    }

    //Add click event to the close button
    closeButton.addEventListener('click', closeImage);

    //Add click event to the overlay to close the image
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closeImage();
        }
    });

    //Add click event to each gallery image
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            expandImage(image.src);
        });
    });

});