/**
 * Exhaustive solution for production.
 */
function incrementLikes() {
  // select the span that holds the count
  const likeSpan = document.querySelector('#like-count');
  console.log(likeSpan);
  // get the content of the span
  const likeCount = likeSpan.textContent;
  console.log(typeof likeCount);
  // check if it's a number
  // if it is a number, increment it
  // if not, try changing it to a number
  let numberizedCount = Number(likeCount);
  if (Number.isNaN(numberizedCount)) {
    console.log('Not a number');
    console.log(`not a number ${typeof numberizedCount}`);
    alert('‼️ Cannot increment!');
  } else {
    console.log('Is a number');
    console.log(`is a number ${typeof numberizedCount}`);
    numberizedCount++;
    likeSpan.textContent = numberizedCount;
  }
  // if successful, increment it
  // show the new number on the page
  // if we're unsuccessful, alert the user
}

/**
 * Fine, but inflexible due to hardcoded id.
 */
function incrementLikes2() {
  const likeSpan = document.querySelector('#like-count');
  likeSpan.textContent++;
}

/**
 * Recommended approach. Stays versatile and lean.
 * @param {string} id
 */
function incrementLikes3(id) {
  const likeSpan = document.querySelector(id);
  likeSpan.textContent++;
}

/**
 * Not recommended in production. Just a silly
 * JavaScript thing.
 * @param {string} id
 */
function incrementLikes4(id) {
  console.log(id);
  id.textContent++;
}
