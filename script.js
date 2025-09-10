document.addEventListener('DOMContentLoaded', () => {

    // ========================
    // 1️⃣ Grid de produtos (produtos.html)
    // ========================
    const grid = document.getElementById('products-grid');
    if (grid) {
        const products = [
            { img: "garrafa500.jpeg", title: "Garrafa Térmica 500ml", minimum: "", whatsapp: "https://api.whatsapp.com/send/?phone=5511964408359&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0" },
            { img: "irrigador.png", title: "Irrigador Bucal", minimum: "", whatsapp: "https://api.whatsapp.com/send/?phone=5511964408359&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0" },
            { img: "umidifcador.png", title: "Umidificador de Ambientes", minimum: "", whatsapp: "https://api.whatsapp.com/send/?phone=5511964408359&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0" },
            { img: "babyliss.jpeg", title: "Babyliss 110v", minimum: "", whatsapp: "https://api.whatsapp.com/send/?phone=5511964408359&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0" },
            { img: "canetinha.jpeg", title: "Caneta Marcador Touch", minimum: "", whatsapp: "https://api.whatsapp.com/send/?phone=5511964408359&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0" },
            { img: "spray.jpeg", title: "Borrifador de Óleo", minimum: "", whatsapp: "https://api.whatsapp.com/send/?phone=5511964408359&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0" },
            { img: "lanterna.jpg", title: "Lanterna 4 Saídas", minimum: "", whatsapp: "https://api.whatsapp.com/send/?phone=5511964408359&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0" },
            { img: "pistolaprego.jpeg", title: "Pistola Automática de Pregos", minimum: "", whatsapp: "https://api.whatsapp.com/send/?phone=5511964408359&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0" },
            { img: "extensao.jpeg", title: "Filtro de Linha com USB", minimum: "", whatsapp: "https://api.whatsapp.com/send/?phone=5511964408359&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0" },
            { img: "ferramenta.jpeg", title: "Kit Ferramentas Celular", minimum: "", whatsapp: "https://api.whatsapp.com/send/?phone=5511964408359&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0" },
            { img: "caneta3d.png", title: "Caneta Modelagem 3D", minimum: "", whatsapp: "https://api.whatsapp.com/send/?phone=5511964408359&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0" },
            { img: "caixadesom.png", title: "Caixa de Som Bluetooth Peq.", minimum: "", whatsapp: "https://api.whatsapp.com/send/?phone=5511964408359&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0" },
        ];

        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.img}" alt="${product.title}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-minimum">${product.minimum}</p>
                    <a href="${product.whatsapp}" class="whatsapp-btn" target="_blank">
                        Comprar pelo WhatsApp
                    </a>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // ========================
    // 2️⃣ Carrossel de produtos (index.html)
    // ========================
    const track = document.getElementById('product-track');
    if (track) {
        const carouselProducts = [
            { img: "caneta3d.png", title: "Caneta Modelagem 3D", minimum: "", whatsapp: "https://api.whatsapp.com/send/?phone=5511964408359&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0" },
            { img: "canetinha.jpeg", title: "Caneta Marcador Touch", minimum: "", whatsapp: "https://api.whatsapp.com/send/?phone=5511964408359&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0" },
            { img: "umidifcador.png", title: "Umidificador de Ambientes", minimum: "", whatsapp: "https://api.whatsapp.com/send/?phone=5511964408359&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0" },
            { img: "garrafa500.jpeg", title: "Garrafa Térmica 500ml", minimum: "", whatsapp: "https://api.whatsapp.com/send/?phone=5511964408359&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0" },
            { img: "caixadesom.png", title: "Caixa de Som Bluetooth Peq.", minimum: "", whatsapp: "https://api.whatsapp.com/send/?phone=5511964408359&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0" },
        ];

        carouselProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.img}" alt="${product.title}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-minimum">${product.minimum}</p>
                    <a href="${product.whatsapp}" class="whatsapp-btn" target="_blank">
                        Comprar pelo WhatsApp
                    </a>
                </div>
            `;
            track.appendChild(card);
        });

        // Controle do carrossel
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        let currentPosition = 0;
        const productsVisible = 4; 
        const productWidth = 270;

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentPosition < 0) {
                    currentPosition += productWidth;
                    track.style.transform = `translateX(${currentPosition}px)`;
                }
            });

            nextBtn.addEventListener('click', () => {
                const maxPosition = -(productWidth * (carouselProducts.length - productsVisible));
                if (currentPosition > maxPosition) {
                    currentPosition -= productWidth;
                    track.style.transform = `translateX(${currentPosition}px)`;
                }
            });
        }
    }

});