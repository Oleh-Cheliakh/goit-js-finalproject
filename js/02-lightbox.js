import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Select ul container of gallery
const galleryContainer = document.querySelector(".gallery");

//Create layout with preview images
const galeryItemLayout = galleryItems
	.map((item) => {
		return `<li class="gallery__item">
      <a
        class="gallery__link"
        href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
        />
      </a>
    </li>
`;
	})
	.join("");

// Insert preview images to DOM
galleryContainer.insertAdjacentHTML("afterbegin", galeryItemLayout);

var lightbox = new SimpleLightbox(".gallery a", {
	captions: true,
	captionSelector: "img",
	captionType: "attr",
	captionsData: "alt",
	captionDelay: 250,
});
