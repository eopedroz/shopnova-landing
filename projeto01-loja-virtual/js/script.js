// =====================
// CARRINHO
// =====================
let cartItems = 0;

function addToCart(btn) {
  cartItems++;
  document.getElementById('cartCount').textContent = cartItems;

  // Animação no botão
  btn.classList.add('added');
  btn.innerHTML = '<i class="fas fa-check"></i>';

  setTimeout(() => {
    btn.classList.remove('added');
    btn.innerHTML = '<i class="fas fa-plus"></i>';
  }, 1200);

  showToast('Produto adicionado ao carrinho! 🛍️');
}

// =====================
// TOAST NOTIFICATION
// =====================
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// =====================
// FILTRO DE PRODUTOS
// =====================
function filterProducts(btn, category) {
  // Atualiza botão ativo
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Mostra/esconde cards
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    if (category === 'todos' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// =====================
// NAVBAR AO ROLAR
// =====================
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// =====================
// MENU MOBILE
// =====================
document.getElementById('hamburger').addEventListener('click', () => {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
});

// =====================
// NEWSLETTER
// =====================
function subscribeNewsletter() {
  const email = document.getElementById('emailInput').value;
  if (!email || !email.includes('@')) {
    showToast('Digite um e-mail válido! ✉️');
    return;
  }
  document.getElementById('emailInput').value = '';
  showToast('Inscrição realizada com sucesso! 🎉');
}

// =====================
// BOTÃO DO CARRINHO
// =====================
document.getElementById('cartBtn').addEventListener('click', () => {
  if (cartItems === 0) {
    showToast('Seu carrinho está vazio 🛒');
  } else {
    showToast(`Você tem ${cartItems} item(s) no carrinho 🛍️`);
  }
});
