const searchInput = document.querySelector('#search-input');
const voteInput = document.querySelector('#vote-input');
const cookie = document.querySelector('.cookie');

function signOut(button) {
  button.innerText = 'Sign Out';
}

function searchAlert() {
  const searchTerm = searchInput.value;
  alert(`Searching for ${searchTerm}...`);
}

function voteAlert() {
  const voteChoice = voteInput.value;
  alert(`You voted for ${voteChoice}!`);
}

function like(id) {
  const likeCountSpan = document.querySelector(id);
  likeCountSpan.innerText++;
}

function acceptCookie() {
  cookie.remove();
}
