const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('.navbar'); // Replace 'navbar' with the ID of your navbar element
  if (window.scrollY > 0) {
    navbar.style.display = 'none';
  } else {
    navbar.style.display = 'block';
  }
});

