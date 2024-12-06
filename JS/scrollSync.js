const lowerContainer = document.querySelector('.section2-container-lower');
const lowestContainer = document.querySelector('.section2-container-lowest');

// Sihronizacija
function syncScroll(source, target) 
{
  target.scrollLeft = source.scrollLeft;
}

// Add event listeners
lowerContainer.addEventListener('scroll', () => syncScroll(lowerContainer, lowestContainer));
lowestContainer.addEventListener('scroll', () => syncScroll(lowestContainer, lowerContainer));
