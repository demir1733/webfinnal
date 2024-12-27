document.addEventListener('DOMContentLoaded', () => {
    const categories = [
        {
            name: 'Araçlar  ',
            subcategories: ['Otomobil', 'Motorsiklet', 'Bisiklet ','Ticari Araçlar'  ]
        },
        {
            name: 'Elektronik',
            subcategories: ['Telefon ', 'Bilgisayar', 'Tablet', 'Televizyon', 'Oyun Konsolları']
        },
        {
            name: 'Ev ve Yaşam',
            subcategories: ['Mobilya ', 'Beyaz Eşya', 'Dekorasyon ', 'Ev Tekstili']
        },
        {
            name: 'Hobi ve Spor',
            subcategories: ['Kitaplar', 'Müzik Aletleri', 'Spor Ekipmanları', 'Kamp Malzemeleri']
        },
        {
            name: 'Giyim ve Aksesuarlar ',
            subcategories: ['Kolye ', 'Küpe ', 'Bileklik','Yüzük']
        }
        
       
    ];

    const categoryList = document.getElementById('category-list');

    categories.forEach(category => {
        const listItem = document.createElement('li');
        listItem.textContent = category.name;

        if (category.subcategories) {
            const subList = document.createElement('ul');
            category.subcategories.forEach(subcategory => {
                const subListItem = document.createElement('li');
                subListItem.textContent = subcategory;
                subList.appendChild(subListItem);
            });
            listItem.appendChild(subList);
        }

        categoryList.appendChild(listItem);
    });

    const homeButton = document.getElementById('home-button');
    homeButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Ana sayfa dosya adı ile değiştir
    });
});
