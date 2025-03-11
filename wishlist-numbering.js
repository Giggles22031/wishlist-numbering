(function() {
    function addNumbersToWishlist() {
        const wishlistItems = document.querySelectorAll('.Panel');

        wishlistItems.forEach(item => {
            const index = item.getAttribute('data-index');

            if (index && !item.querySelector('.wishlist-number-box')) {
                const adjustedIndex = parseInt(index) + 1;

                // Make a number box with the item position
                const numberBox = document.createElement('div');
                numberBox.textContent = `#${adjustedIndex}`;
                numberBox.classList.add('wishlist-number-box');

                // Style the number box so it stands out
                Object.assign(numberBox.style, {
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    zIndex: '10'
                });

                // Attach it to the wishlist item
                item.style.position = 'relative'; // Make sure it can hold absolutely positioned elements
                item.appendChild(numberBox);
            }
        });
    }

    function continuouslyCheckForNewItems() {
        setInterval(() => {
            addNumbersToWishlist();
        }, 500); // Keep checking for new items every half a second
    }

    function observeWishlistChanges() {
        const wishlistContainer = document.querySelector('.your-wishlist-container-selector'); // Update this selector as needed
        if (!wishlistContainer) return;

        const observer = new MutationObserver(() => {
            addNumbersToWishlist();
        });

        // Watch for changes in the wishlist container
        observer.observe(wishlistContainer, { childList: true, subtree: true });
    }

    setTimeout(() => {
        addNumbersToWishlist(); // Run once at the start
        continuouslyCheckForNewItems(); // Keep scanning every 500ms
        observeWishlistChanges(); // Watch for new items being added
    }, 500);
})();
