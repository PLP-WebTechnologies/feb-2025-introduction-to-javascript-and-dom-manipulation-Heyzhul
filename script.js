// Change text content dynamically
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('text').textContent = "The text has been changed!";
});

// Modify CSS styles
document.getElementById('changeStyleBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = "lightblue";  // Change background color
});

// Add or remove an element when a button is clicked
document.getElementById('addElementBtn').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = "A new element has been added!";
    document.getElementById('elementsContainer').appendChild(newElement);
});

document.getElementById('removeElementBtn').addEventListener('click', function() {
    const container = document.getElementById('elementsContainer');
    if (container.lastChild) {
        container.removeChild(container.lastChild); // Remove the last element
    }
});
