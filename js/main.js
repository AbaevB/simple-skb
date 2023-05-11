const btnSearch = document.querySelector('.header__btn_search');
const btnClose = document.querySelector('.search-form__close');
const searchForm = document.querySelector('.search-form');

btnSearch.addEventListener('click', () => {
  searchForm.classList.add('search-form_display');
  setTimeout(() => {
    searchForm.classList.add('search-form_visible');
  }, 300);
});

btnClose.addEventListener('click', () => {
  searchForm.classList.remove('search-form_visible');
  setTimeout(() => {
    searchForm.classList.remove('search-form_display');
    searchForm.reset();

  }, 300);
});
