function showLinks() { 
    shareButton.parentElement.className ='publication-info-hide';
    shareButton.parentElement.parentElement.nextElementSibling.className = 'pop-up-shown';
}

var shareButton = document.querySelector('button.share-show');

shareButton.addEventListener('click', showLinks, false);

console.log(shareButton);