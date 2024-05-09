const previewImageContainer = document.querySelector("#previewContainer");
const previewImage = document.querySelector("#previewImage");
const showPreviewButtons = document.querySelectorAll(".previewBtn");

function showPreview() {
  previewImageContainer.classList.add("active");
}
function hidePreview() {
  previewImageContainer.classList.remove("active");
}

previewImageContainer.addEventListener("click", hidePreview);

showPreviewButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    previewImage.src = btn.dataset.src;
    previewImageContainer.classList.add("active");
  });
});
