import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const createGalleryMarkup = (items) => {
    return items
    .map((item) => {
    const { preview, original, description } = item;
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
      </a>
    </li>`;
    })
    .join("");
};


const renderGallery = () => {
    galleryContainer.innerHTML = createGalleryMarkup(galleryItems);
};

renderGallery();

function onGallleryClick(event) {
    event.preventDefault();
    const isGalleryImg = event.target.classList.contains("gallery__image");

    if(!isGalleryImg) return;

    const imgSource = event.target.dataset.source;
    const instance = basicLightbox.create(`
        <img src="${imgSource}" width = 800 height = 800 />`);

        instance.show();

        // Închiderea imaginei de la tastatură

            document.onkeydown = function(evt) {
                let isEscape = false;
                if ( "key" in evt ) {
                    isEscape = ( evt.key === "Escape" || evt.key === "Esc" );
                } else {
                    isEscape = ( evt.keyCode === 27 );
                }
                if ( isEscape ) {
                    instance.close();
                }
            };


}


galleryContainer.addEventListener("click", onGallleryClick);