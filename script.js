document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productTag = document.getElementById('productTag').value;

    const productList = document.getElementById('productsList');
    const productDiv = document.createElement('div');
    productDiv.innerHTML = `
        <h3>Ürün Adı:${productName}</h3>
        <h3>Ürün Açıklaması:${productDescription}</h3>
        <h3><strong>Etiket:</strong> ${productTag}</h3>
        <hr>
    `;

    productList.appendChild(productDiv);

    // Formu temizle
    document.getElementById('productForm').reset();
});