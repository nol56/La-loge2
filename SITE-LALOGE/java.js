document.addEventListener('DOMContentLoaded', function() {

const backgroundImage = document.getElementById('backgroundImage');
const headerImage = document.getElementById('headerImage');
const menu = document.getElementById('menu');
const bouton = document.getElementById('bouton');



/* intro*/
function triggerActions() {
  backgroundImage.style.display = 'none';
  headerImage.style.display = 'block';
  menu.style.display = 'block';
  bouton.style.display = 'block';


}

document.addEventListener('click', triggerActions);

});
