function debounce(func, delay) {
  let timeoutId;

  return function(...args) {
    const context = this;

    // Clear the previous timeout if there was one
    clearTimeout(timeoutId);

    // Set a new timeout
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

// Example usage:
const handleResize = debounce(() => {
  console.log('Window resized');
}, 500);

// Attach the debounced function to the window resize event
window.addEventListener('resize', handleResize);
