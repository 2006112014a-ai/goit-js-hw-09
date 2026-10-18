import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import '../css/styles.css';

const images = [
  {
    preview:
      'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=360&q=80',
    original:
      'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=max&w=1600&q=90',
    description: 'Sunrise over a green meadow',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=360&q=80',
    original:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=max&w=1600&q=90',
    description: 'Beautiful mountain lake',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=360&q=80',
    original:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=max&w=1600&q=90',
    description: 'Sunlight in a green forest',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=360&q=80',
    original:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=max&w=1600&q=90',
    description: 'Scenic landscape',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=360&q=80',
    original:
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=max&w=1600&q=90',
    description: 'Wild animals in nature',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=360&q=80',
    original:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=max&w=1600&q=90',
    description: 'Mountain peaks',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=360&q=80',
    original:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=max&w=1600&q=90',
    description: 'Lake surrounded by mountains',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=360&q=80',
    original:
      'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=max&w=1600&q=90',
    description: 'Waterfall in the forest',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=360&q=80',
    original:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=max&w=1600&q=90',
    description: 'Blue sea and sandy beach',
  },
];

const gallery = document.querySelector('.gallery');

const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
      <li class="gallery-item">
   <a class="gallery-link" href="${original}" title="${description}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
