(function() {
    // Function to add numbers to wishlist items
    function addNumbersToWishlist() {
        // Select all wishlist items (Panel class)
        const wishlistItems = document.querySelectorAll('.Panel');

        // Loop through each wishlist item and add a number next to its name
        wishlistItems.forEach(item => {
            // Get the data-index attribute of each item directly
            const index = item.getAttribute('data-index');
                
            // Ensure that the data-index exists and we don't add a number if it's already there
            if (index && !item.querySelector('.wishlist-number')) {
                // Add 1 to the index to start from 1 instead of 0
                const adjustedIndex = parseInt(index) + 1;

                // Create a span element for the number
                const numberSpan = document.createElement('span');
                numberSpan.textContent = `#${adjustedIndex}`; // Use the adjusted index
                numberSpan.classList.add('wishlist-number'); // Add a class to identify it
                numberSpan.style.fontWeight = 'bold';
                numberSpan.style.color = 'white';
                numberSpan.style.marginLeft = '10px';

                // Find the title element, which is inside the anchor tag in the class 'Fuz2JeT4RfI-'
                const title = item.querySelector('.Fuz2JeT4RfI-');
                if (title) {
                    title.appendChild(numberSpan); // Append the number to the title
                }
            }
        });
    }

    // Create a MutationObserver to watch for changes in the DOM
    const observer = new MutationObserver((mutationsList, observer) => {
        mutationsList.forEach(mutation => {
            if (mutation.type === 'childList' || mutation.type === 'subtree') {
                addNumbersToWishlist(); // Add numbers when new elements are added
            }
        });
    });

    // Start observing changes in the DOM body
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial call to handle already loaded items
    addNumbersToWishlist();
})();
