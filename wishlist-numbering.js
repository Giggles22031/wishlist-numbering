(function() {
    // Adds numbers to wishlist items for easy tracking
    function addNumbersToWishlist() {
        // Grab all wishlist items by their 'Panel' class
        const wishlistItems = document.querySelectorAll('.Panel');

        // Loop through each item and add a number next to its name
        wishlistItems.forEach(item => {
            // Get the 'data-index' attribute to identify the item
            const index = item.getAttribute('data-index');
                
            // Only add a number if the index exists and there's no number already added
            if (index && !item.querySelector('.wishlist-number')) {
                // Start the number from 1 instead of 0 by adding 1 to the index
                const adjustedIndex = parseInt(index) + 1;

                // Create a span to hold the number
                const numberSpan = document.createElement('span');
                numberSpan.textContent = `#${adjustedIndex}`; // Display the adjusted number
                numberSpan.classList.add('wishlist-number'); // Add a class to style it
                numberSpan.style.fontWeight = 'bold';
                numberSpan.style.color = 'white';
                numberSpan.style.marginLeft = '10px';

                // Find the title element inside the 'Fuz2JeT4RfI-' class
                const title = item.querySelector('.Fuz2JeT4RfI-');
                if (title) {
                    title.appendChild(numberSpan); // Add the number next to the title
                }
            }
        });
    }

    // Set up a MutationObserver to keep track of any DOM changes
    const observer = new MutationObserver((mutationsList, observer) => {
        mutationsList.forEach(mutation => {
            if (mutation.type === 'childList' || mutation.type === 'subtree') {
                addNumbersToWishlist(); // Add numbers to new items as they appear
            }
        });
    });

    // Start observing changes in the body of the page
    observer.observe(document.body, { childList: true, subtree: true });

    // Call the function initially to handle items already on the page
    addNumbersToWishlist();
})();
