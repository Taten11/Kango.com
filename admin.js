document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Basic authentication check
    const password = prompt('Enter admin password:');
    if (password !== 'taten143') {
        alert('Incorrect password.');
        return;
    }

    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const images = document.getElementById('images').files;

    if (images.length === 0) {
        alert('Please select at least one image.');
        return;
    }

    // Create a product object
    const product = {
        name: name,
        price: price,
        description: description,
        images: Array.from(images).map(file => URL.createObjectURL(file))
    };

    console.log('Product added:', product);
    alert('Product added successfully.');

    // Reset the form
    document.getElementById('product-form').reset();
});
