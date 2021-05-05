let form = document.getElementById('meme-generator');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('You just submitted the form!');

    const urlInput = document.querySelector('.url');
    console.log(urlInput.value);

    const topText = document.querySelector('.top-text');
    console.log(topText.value);

    const btmText = document.querySelector('.bottom-text');
    console.log(btmText.value);

    const newDiv = document.createElement('div');
    newDiv.classList.add('new');
    // newDiv.style.position = 'relative';
    document.querySelector('#container').appendChild(newDiv);
    
    const image = document.createElement('img');
    image.src = urlInput.value;
    image.classList.add('img');
    document.querySelector('.new').appendChild(image);

    const topDiv = document.createElement('div');
    topDiv.innerText = topText.value;
    // topDiv.style.position = 'absolute', 'top'; 
    topDiv.classList.add('top');
    document.querySelector('.new').appendChild(topDiv);

    const btmDiv = document.createElement('div');
   btmDiv.innerText = btmText.value;
    // btmDiv.style.position = 'absolute', 'bottom';
    btmDiv.classList.add('btm');
    document.querySelector('.new').appendChild(btmDiv);

    

    const deleteMeme = document.querySelector('img');
    deleteMeme.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            event.target.parentElement.remove(); 
        }

    })
    
    form.reset(); 
});
