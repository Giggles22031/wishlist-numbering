(function() {
    // Function to add numbers to wishlist items
    function addNumbersToWishlist() {
        // Get all wishlist items
        const wishlistItems = document.querySelectorAll('.Panel');
        
        wishlistItems.forEach(item => {
            // Get the 'data-index' attribute from each item
            const index = item.getAttribute('data-index');
                
            // Only add a number if it's not already there
            if (index && !item.querySelector('.wishlist-number')) {
                // Add 1 to the index to start from 1 instead of 0
                const adjustedIndex = parseInt(index) + 1;
                
                // Create a span to show the number
                const numberSpan = document.createElement('span');
                numberSpan.textContent = `#${adjustedIndex}`;
                numberSpan.classList.add('wishlist-number');
                numberSpan.style.fontWeight = 'bold';
                numberSpan.style.color = 'white';
                numberSpan.style.marginLeft = '10px';

                // Find the title of the item and append the number to it
                const title = item.querySelector('.Fuz2JeT4RfI-');
                if (title) {
                    title.appendChild(numberSpan);
                }
            }
        });
    }

    // Preload the first 100 wishlist items
    function preloadFirst100() {
        let intervalCount = 0;
        const interval = setInterval(() => {
            addNumbersToWishlist(); // Add numbers to the wishlist items
            
            const wishlistItems = document.querySelectorAll('.Panel');
            // Stop once we've got at least 100 items
            if (wishlistItems.length >= 100) {
                clearInterval(interval);
            }
            intervalCount++;
            // Stop after 10 intervals to avoid looping endlessly
            if (intervalCount > 10) {
                clearInterval(interval);
            }
        }, 500); // Check every 500ms
    }

    // Start the preload process after a short delay
    setTimeout(() => {
        preloadFirst100();
    }, 500); // Wait a little before starting the preload

    // Use MutationObserver to track when new items are added dynamically
    const observer = new MutationObserver(() => {
        addNumbersToWishlist(); // Add numbers to any new items
    });

    // Observe the wishlist container for changes (like when new items are added)
    const wishlistContainer = document.querySelector('.your-wishlist-container-selector'); // Replace with actual selector
    if (wishlistContainer) {
        observer.observe(wishlistContainer, {
            childList: true, // Look for new child elements being added
            subtree: true // Watch for changes in any nested elements
        });
    }

})();
