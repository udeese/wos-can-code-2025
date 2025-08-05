function handlePoke() {
  pokeCount++;
  pokeSpan.innerText = pokeCount;
}

// get root
const root = document.getElementById('root');

// create card add add to root
const card = document.createElement('div');
card.classList.add('card');
root.appendChild(card);

// create card header and add to card
const cardHeader = document.createElement('div');
cardHeader.classList.add('card-header', 'flex');
card.appendChild(cardHeader);

// create avatar and add to card header
const avatarContainer = document.createElement('div');
avatarContainer.classList.add('avatar', 'flex', 'absolute');
cardHeader.appendChild(avatarContainer);
const avatar = document.createElement('img');
avatar.src = './person-circle.svg';
avatar.alt = 'person-circle';
avatarContainer.appendChild(avatar);

// create card body and add to card
const cardBody = document.createElement('div');
cardBody.classList.add('card-body');
card.appendChild(cardBody);

// create card title and add to card body
const cardTitle = document.createElement('h3');
cardTitle.classList.add('card-title');
cardTitle.innerText = 'Narciso Lobo';
cardBody.appendChild(cardTitle);

// create card text and add to card body
const cardText = document.createElement('p');
cardText.innerText =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, consequuntur beatae modi dicta eveniet.';
cardBody.appendChild(cardText);

// create card footer and add to card
const cardFooter = document.createElement('div');
cardFooter.classList.add('card-footer');
card.appendChild(cardFooter);

// create poke paragraph and add to footer
const pokeParagraph = document.createElement('p');
pokeParagraph.innerText = 'pokes: ';
cardFooter.appendChild(pokeParagraph);

// create poke span and add to paragraph
const pokeSpan = document.createElement('span');
let pokeCount = 0;
pokeSpan.innerText = pokeCount;
pokeParagraph.appendChild(pokeSpan);

// create poke button and add to footer
const pokeButton = document.createElement('button');
pokeButton.innerText = 'poke';
pokeButton.classList.add('btn');
pokeButton.addEventListener('click', handlePoke);
cardFooter.appendChild(pokeButton);
