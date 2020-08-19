var feedback = document.querySelector('.feedback');
var btnSub = document.querySelector('.btn-sub');
var close = document.querySelector('.close');
var feedbackName = feedback.querySelector('#feedback-name');
var feedbackEmail = feedback.querySelector('#feedback-email');
var feedbackForm = feedback.querySelector('.feedback-form');
var overlay = document.querySelector('.overlay');
var isStorageSupport = true;
var storage = '';

try {
	storage = localStorage.getItem('feedbackName');
} catch(err) {
	isStorageSupport = false;
}

btnSub.addEventListener('click', function (evt) {
	evt.preventDefault();
	feedback.classList.add('feedback-show');
	overlay.classList.add('overlay-show');
	if (storage) {
		feedbackName.value = storage;
		feedbackEmail.focus();
	} else {
		feedbackName.focus();
	}
});

close.addEventListener('click', function (evt) {
	evt.preventDefault();
	feedback.classList.remove('feedback-show');
	feedback.classList.remove('feedback-error');
	overlay.classList.remove('overlay-show');
});

overlay.addEventListener('click', function (evt) {
	evt.preventDefault();
	feedback.classList.remove('feedback-show');
	feedback.classList.remove('feedback-error');
	overlay.classList.remove('overlay-show');
});
window.addEventListener('keydown', function (evt) {
 	if (evt.keyCode === 27) {
 		if (feedback.classList.contains('feedback-show')) {
			evt.preventDefault();
 			feedback.classList.remove('feedback-show');
			overlay.classList.remove('overlay-show');
 		}
 	}
 });
feedbackForm.addEventListener('submit', function(evt) {
	if ( !feedbackName.value || !feedbackEmail.value) {
		evt.preventDefault();
		feedback.classList.add('feedback-error');
	} else {
		if (isStorageSupport){
			localStorage.setItem('feedbackName', feedbackName.value);
		}
	}
});
