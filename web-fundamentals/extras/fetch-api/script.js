const jokeParagraph = document.querySelector('#joke');
const refreshButton = document.querySelector('#refresh-button');
const spinner = document.querySelector('#spinner');
spinner.style.display = 'none';

async function getData() {
  spinner.style.display = 'block';
  const url = 'https://icanhazdadjoke.com/';
  const headers = new Headers();
  headers.append('Accept', 'application/json');

  try {
    const response = await fetch(url, {
      headers,
    });

    if (response.ok === false) {
      throw new Error(`Error status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    jokeParagraph.textContent = data.joke;
  } catch (error) {
    // error block
    console.error(error.message);
  } finally {
    spinner.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => getData(), 2000);
refreshButton.addEventListener('click', () => getData(), 2000);
