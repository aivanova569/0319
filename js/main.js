// Adds reviews to the end of the section "reviews container"
$(document).ready(function () {
	$(document).on('click', '#add_comment', function () {
		let form = $('div[class="user-info"]');
		form.css('display', 'block');
	});

	$(document).on('click', 'input[name="send"]', function () {
		addComment();
	});

	// Sends a comment via hotkeys
	$(document).keydown(function(e) {
	 	e = e || window.event;
        if (e.ctrlKey && e.keyCode === 13) {
            addComment();
        }
          return true;
    });

	// Adds reviews
    function addComment() {
    	let 
			userName = $('textarea[name="userName"]').val (),
			comment = $('textarea[name="comment"]').val ();

			if (!userName) {
				alert('Unable to submit empty form.');
				return;
			}

		$('<div class="write-info">' + 
			'<div class="user-name">' + userName + '</div>'
			+ '<span class="reviews__date">' + getFormattedDate() + '</span>'
			+ '</div><div class="reviews__text">' 
			+ comment + '</div>').appendTo('#comments');

    }

	//  Determines the current date
    function getFormattedDate() {
    	let options = { day: 'numeric', month: 'long', year: 'numeric' };
    	let currentDate = new Date();
    	return currentDate.toLocaleDateString("ru-RU", options);
    }

});
