document.getElementById('christmasBox').addEventListener('click', function() {
    var box = this;
    box.style.animation = 'none'; // Stop shaking
	
	document.getElementById('promptText').style.display = 'none';

    // Make the box a bit smaller, more slowly
    box.style.transition = 'transform 0.5s';
    box.style.transform = 'scale(0.9)';

    setTimeout(function() {
        // Then, make it pop back bigger
        box.style.transform = 'scale(1.1)';
        setTimeout(function() {
            // Change the class to show the opened box
            box.classList.remove('box-closed');
            box.classList.add('box-opened');

            // Remove the transform style to avoid affecting the opened box
            box.style.transition = '';
            box.style.transform = '';

            // Display the photos
            var gallery = document.querySelector('.gallery');
            gallery.style.display = 'block';

            // Start automatic scrolling
            setTimeout(startAutoScroll, 500);
        }, 500); // Delay for the enlargement and opening
    }, 500); // Delay for the shrinking
});

function startAutoScroll() {
    var scrollInterval = setInterval(function() {
        window.scrollBy(0, 1);

 
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            clearInterval(scrollInterval);
        }
    }, 10);
}

