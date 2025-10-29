/*NOTE: First we loop inside the thumbnail-link and 
get the img src and pass it down to the modal-img__wrapper and add a class to show the modal */
document.querySelectorAll(".thumbnail-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const galleryImgSrc = e.currentTarget.querySelector("img").src; // get the img src
    document.getElementById("modal-img__wrapper").src = galleryImgSrc; // pass the src img src to the modal
    document.getElementById("gallery-block-modal").classList.add("show"); // this will add show class to the modal
  });
});

/* NOTE: We targeted the modal close-modal-btn to remove the added show class */
document.getElementById("close-modal-btn").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("gallery-block-modal").classList.remove("show");
});

/*NOTE: Add and event key 'Escape' for remove the show class */
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    document.getElementById("gallery-block-modal").classList.remove("show");
  }
});
