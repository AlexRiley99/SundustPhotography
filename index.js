document.addEventListener("DOMContentLoaded", function () {
  // Array of image URLs to cycle through
  const images = [
    "Images/Personal/IMG_7940.jpg",
    "Images/Personal/IMG_0501.jpg",
    "Images/Personal/IMG_0079.jpg",
    "Images/Personal/IMG_8327.jpg",
    "Images/MellowGlow/Mellowgllowph-38.jpg",
  ];

  let currentIndex = 0; //Start at the first image
  const imgElement = document.getElementById("homePageImg");

  //Function to change the image and apply fade effects
  function changeImage() {
    imgElement.classList.add("fade-out");

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length; //Loop through images
      imgElement.src = images[currentIndex]; //Update the image source

      imgElement.classList.remove("fade-out"); //Remove fade-out class
      imgElement.classList.add("fade"); //Add fade-in class for smooth transition

      setTimeout(() => {
        imgElement.classList.remove("fade");
      }, 2000);
    }, 2000);
  }

  //Change image every 3 seconds
  setInterval(changeImage, 3000);

  img_div.addEventListener("click", function () {
    window.location.href = "gallery";
  });
});
