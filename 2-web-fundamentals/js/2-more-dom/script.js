const aside = document.querySelector('aside');
const bannerHulkImage = document.querySelector('#banner-hulk-image');

/**
 *
 * @param {HTMLDivElement} mainElem
 */
function mainBgColorChange(mainElem) {
  mainElem.style.backgroundColor = 'darkgrey';
}

/**
 *
 * @param {HTMLDivElement} mainElem
 */
function mainBgColorRevert(mainElem) {
  mainElem.style.backgroundColor = '#252525';
}

function changeJoke() {
  const jokeParagraph = document.querySelector('#joke-content');
  jokeParagraph.textContent = 'Archaeology really is a career in ruins.';
}

aside.addEventListener('click', changeJoke);

/**
 *
 * @param {HTMLImageElement} image
 */
function hulkOut(image) {
  image.src = './images/hulk.webp';
  image.alt = 'Smart Hulk';
}

/**
 *
 * @param {HTMLImageElement} image
 */
function swapHulkBanner(image) {
  if (image.src.endsWith('bruce-banner.webp')) {
    image.src = './images/hulk.webp';
    image.alt = 'Smart Hulk';
  } else {
    image.src = './images/bruce-banner.webp';
    image.alt = 'Bruce Banner';
  }
}

/**
 *
 * @param {HTMLParagraphElement} textElem
 */
function underlineToggle(textElem) {
  textElem.classList.toggle('underline');
}

function eventListenerSwapHulkBanner() {
  if (bannerHulkImage.src.endsWith('bruce-banner.webp')) {
    bannerHulkImage.src = './images/hulk.webp';
    bannerHulkImage.alt = 'Smart Hulk';
  } else {
    bannerHulkImage.src = './images/bruce-banner.webp';
    bannerHulkImage.alt = 'Bruce Banner';
  }
}

bannerHulkImage.addEventListener('click', eventListenerSwapHulkBanner);
