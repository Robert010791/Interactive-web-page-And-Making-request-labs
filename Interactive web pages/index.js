console.log('hello world!!!');

const message = document.querySelector('#message');

function addMovie(e) {
  e.preventDefault();
  const inputField = document.querySelector('input');
  const addBtn = document.querySelector('button');
  const movie = document.createElement('li');
  const movieTitle = document.createElement('span');
  movieTitle.textContent = inputField.value;
  movie.appendChild(movieTitle);
  message.textContent = 'Movie added';
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  movie.appendChild(deleteBtn);
  deleteBtn.addEventListener('click', deleteMovie);
  movieTitle.addEventListener('click', crossOffMovie);
  document.querySelector('ul').appendChild(movie);
  inputField.value = '';
}

const movieForm = document.querySelector('form');
movieForm.addEventListener('submit', addMovie);

function deleteMovie(event) {
  event.target.parentNode.remove();
  message.textContent = 'Movie deleted';
}

function crossOffMovie(event) {
  event.target.classList.toggle('checked');
  if (event.target.classList.contains('checked')) {
    message.textContent = 'Movie watched!';
  } else {
    message.textContent = 'Movie added back';
  }
}
