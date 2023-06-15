const insertBook = document.querySelector('.btn-add')
const modal = document.querySelector('.modal')
const insertClose= document.querySelector('.insert-close')

function showInsertBox() {
    modal.classList.add('active')
}

function hideInsertBox() {
    modal.classList.remove('active')
}

insertBook.addEventListener('click', showInsertBox)
insertClose.addEventListener('click', hideInsertBox)