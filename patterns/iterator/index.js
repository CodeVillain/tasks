function addMemeToDOM(meme) {
  const img = document.createElement('img');
  img.setAttribute('src', `/images/${meme.name}`);

  document.getElementById('app').appendChild(img);
}

class XKCDMeme {
  constructor() {

  }

  next(callback) {

  }
}

const xkcdMeme = new XKCDMeme();

xkcdMeme
  .next(addMemeToDOM)
  .next(addMemeToDOM);