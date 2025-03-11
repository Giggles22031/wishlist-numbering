(function() {
    // Function to add numbers to wishlist items
    function addNumbersToWishlist() {
        const wishlistItems = document.querySelectorAll('.Panel');
        
        wishlistItems.forEach(item => {
            const index = item.getAttribute('data-index');
                
            if (index && !item.querySelector('.wishlist-number')) {
                const adjustedIndex = parseInt(index) + 1;
                
                const numberSpan = document.createElement('span');
                numberSpan.textContent = `#${adjustedIndex}`;
                numberSpan.classList.add('wishlist-number');
                numberSpan.style.fontWeight = 'bold';
                numberSpan.style.color = 'white';
                numberSpan.style.marginLeft = '10px';

                const title = item.querySelector('.Fuz2JeT4RfI-');
                if (title) {
                    title.appendChild(numberSpan);
                }
            }
        });
    }

    // Preload the first 100 wishlist items immediately
    function preloadFirst100() {
        let intervalCount = 0;
        const interval = setInterval(() => {
            addNumbersToWishlist(); // Apply the numbers
            
            const wishlistItems = document.querySelectorAll('.Panel');
            if (wishlistItems.length >= 100) {
                clearInterval(interval); // Stop the interval once we reach 100 items
            }
            intervalCount++;
            if (intervalCount > 10) { // Avoid excessive looping
                clearInterval(interval);
            }
        }, 500); // Run every 500ms to check for items
    }

    // Run on initial page load to preload the first 100 items
    setTimeout(() => {
        preloadFirst100();
    }, 500); // Wait a little before starting

    // Use MutationObserver to detect when new items are added dynamically
    const observer = new MutationObserver(() => {
        addNumbersToWishlist(); // Update numbers as new items are added
    });

    // Observe the container of the wishlist for changes (e.g., when new panels are added)
    const wishlistContainer = document.querySelector('.your-wishlist-container-selector'); // Replace with actual container selector
    if (wishlistContainer) {
        observer.observe(wishlistContainer, {
            childList: true, // Listen for new child elements being added
            subtree: true // Also listen for changes within the child elements
        });
    }

})();
