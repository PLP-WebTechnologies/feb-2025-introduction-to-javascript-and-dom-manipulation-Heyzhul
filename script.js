// Change text content dynamically
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('greeting').textContent = 'Hello, JavaScript!';
  });
  
  // Modify CSS styles via JavaScript
  document.getElementById('changeStyleBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = '#f0f8ff';  // Light blue background
    document.getElementById('greeting').style.color = '#ff6347'; // Tomato color
    document.getElementById('greeting').style.fontFamily = 'Arial, sans-serif';
    document.getElementById('greeting').style.fontSize = '2rem';
  });
  
  // Add a new element when the button is clicked
  document.getElementById('addElementBtn').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a newly added paragraph!';
    document.querySelector('main').appendChild(newElement);
  });
  