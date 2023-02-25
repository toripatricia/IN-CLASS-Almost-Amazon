import { showBooks } from '../pages/books';
import { getBooks, booksOnSale } from '../api/bookData';
import {
  getAuthors, favoriteAuthors
} from '../api/authorData';
import { showAuthors } from '../pages/authors';
import { signOut } from '../utils/auth';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // TODO: BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    booksOnSale().then(showBooks);
    console.warn('CLICKED SALE BOOKS');
  });

  // TODO: ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks().then(showBooks);
    console.warn('CLICKED ALL BOOKS');
  });

  // ALL AUTHORS
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors().then(showAuthors);
    console.warn('CLICKED AUTHORS');
  });

  // FAVORITE AUTHORS
  document.querySelector('#favorite-authors').addEventListener('click', () => {
    favoriteAuthors().then(showAuthors);
    console.warn('CLICKED AUTHORS');
  });

  // // show author info button (AKA GET SINGLE AUTHOR)
  // document.querySelector('#view-author-btn').addEventListener('click', () => {
  //   getSingleAuthor().then(authorInfoCard);
  // });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
