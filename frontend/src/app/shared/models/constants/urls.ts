const BASE_URL = 'http://localhost:5000';

export const BOOKS_URL = BASE_URL + '/api/books';
export const BOOKS_ALL_CATEGORIES_URL = BOOKS_URL + '/categories';
export const BOOKS_BY_SEARCH_URL = BOOKS_URL + '/search/';
export const BOOKS_BY_CATEGORY_URL = BOOKS_URL + '/categories/';
export const BOOK_BY_ID_URL = BOOKS_URL + '/';
export const ADD_BOOK_URL = BOOKS_URL + '/add/';
export const SEARCH_BOOK_BY_TITLE_URL = BOOKS_URL + '/addAdvancedSearch/'
export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_UPDATE_URL = BASE_URL + '/api/users/update';