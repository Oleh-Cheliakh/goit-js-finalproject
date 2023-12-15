import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Select ul container of gallery
const galleryContainer = document.querySelector(".gallery");

//Create layout with preview images
const galeryItemLayout = galleryItems
	.map((item) => {
		return `<li class="gallery__item">
  <a class="gallery__link" href='${item.original}'>
    <img
      class="gallery__image"
      src='${item.preview}'
      data-source='${item.original}'
      alt='${item.description}'
    />
  </a>
</li>
`;
	})
	.join("");

// Insert preview images to DOM
galleryContainer.insertAdjacentHTML("afterbegin", galeryItemLayout);

//Variable contain modal image layout
let modalElement;

// Show modal on click
function handleGalleryClick(event) {
	// Prevent file download on click
	event.preventDefault();

	// Block events that wasn't triggered by images
	if (event.target.nodeName !== "IMG") {
		return;
	}

	// Create and show modal image
	modalElement = basicLightbox.create(
		`
    <img src="${event.target.dataset.source}" width="800" height="600">
  `,
	);

	modalElement.show();

	// Add listener only when modal is open
	if (basicLightbox.visible()) {
		//Provide opportunity to close modal on pressing Escape
		document.addEventListener("keydown", handleModalKeydown);
	}
}

//Add keyboard listener when modal is open
function handleModalKeydown(event) {
	if (event.code === "Escape") {
		modalElement.close();
		document.removeEventListener("keydown", handleModalKeydown);
	}
}

//Add click listener to gallery container
galleryContainer.addEventListener("click", (event) => {
	handleGalleryClick(event);
});
