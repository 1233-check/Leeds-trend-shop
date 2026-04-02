/* ============================================
   Leeds Trend Shop — localStorage Cart Engine
   ============================================ */

const Cart = {
  STORAGE_KEY: 'lts_cart',

  getItems() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
    } catch { return []; }
  },

  save(items) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
    this.updateUI();
    this.dispatchEvent();
  },

  addItem(productId, size = 'M', qty = 1) {
    const items = this.getItems();
    const existing = items.find(i => i.id === productId && i.size === size);
    if (existing) {
      existing.qty += qty;
    } else {
      items.push({ id: productId, size, qty });
    }
    this.save(items);
    this.showNotification('Added to cart');
  },

  removeItem(productId, size) {
    let items = this.getItems();
    items = items.filter(i => !(i.id === productId && i.size === size));
    this.save(items);
  },

  updateQty(productId, size, qty) {
    const items = this.getItems();
    const item = items.find(i => i.id === productId && i.size === size);
    if (item) {
      item.qty = Math.max(0, qty);
      if (item.qty === 0) {
        this.removeItem(productId, size);
        return;
      }
    }
    this.save(items);
  },

  clear() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.updateUI();
    this.dispatchEvent();
  },

  getCount() {
    return this.getItems().reduce((sum, i) => sum + i.qty, 0);
  },

  getTotal() {
    const items = this.getItems();
    return items.reduce((sum, item) => {
      const product = PRODUCTS.find(p => p.id === item.id);
      return sum + (product ? product.price * item.qty : 0);
    }, 0);
  },

  getCartProducts() {
    const items = this.getItems();
    return items.map(item => {
      const product = PRODUCTS.find(p => p.id === item.id);
      if (!product) return null;
      return { ...product, selectedSize: item.size, qty: item.qty };
    }).filter(Boolean);
  },

  updateUI() {
    const badges = document.querySelectorAll('[data-cart-count]');
    const count = this.getCount();
    badges.forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? 'flex' : 'none';
    });

    const totals = document.querySelectorAll('[data-cart-total]');
    totals.forEach(t => t.textContent = `£${this.getTotal().toFixed(2)}`);
  },

  dispatchEvent() {
    window.dispatchEvent(new CustomEvent('cart:updated'));
  },

  showNotification(msg) {
    let el = document.getElementById('cart-notification');
    if (!el) {
      el = document.createElement('div');
      el.id = 'cart-notification';
      el.style.cssText = `
        position:fixed;bottom:2rem;right:2rem;
        background:#c8a44e;color:#0a0a0a;
        padding:1rem 2rem;border-radius:0.5rem;
        font-family:'Inter',sans-serif;font-size:0.875rem;font-weight:600;
        z-index:10000;opacity:0;transform:translateY(1rem);
        transition:all 0.4s cubic-bezier(0.16,1,0.3,1);
        pointer-events:none;
      `;
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(1rem)';
    }, 2000);
  },

  /* ---- Cart Drawer ---- */
  openDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (!drawer) return;
    this.renderDrawer();
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  closeDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (!drawer) return;
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  },

  renderDrawer() {
    const container = document.getElementById('cart-drawer-items');
    if (!container) return;
    const cartProducts = this.getCartProducts();

    if (cartProducts.length === 0) {
      container.innerHTML = `
        <div style="text-align:center;padding:4rem 2rem;color:#888;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" style="margin:0 auto 1rem;">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          <p style="font-family:'Outfit',sans-serif;font-size:1.125rem;font-weight:600;">Your bag is empty</p>
          <p style="font-size:0.8rem;margin-top:0.5rem;">Add items to start shopping</p>
        </div>`;
      return;
    }

    container.innerHTML = cartProducts.map(p => `
      <div class="cart-drawer-item" data-id="${p.id}" data-size="${p.selectedSize}">
        <img src="${p.image}" alt="${p.title}" class="cart-drawer-img">
        <div class="cart-drawer-info">
          <h4>${p.title}</h4>
          <p class="cart-drawer-meta">Size: ${p.selectedSize}</p>
          <p class="cart-drawer-price">£${p.price.toFixed(2)}</p>
          <div class="cart-drawer-qty">
            <button onclick="Cart.updateQty('${p.id}','${p.selectedSize}',${p.qty - 1});Cart.renderDrawer()">−</button>
            <span>${p.qty}</span>
            <button onclick="Cart.updateQty('${p.id}','${p.selectedSize}',${p.qty + 1});Cart.renderDrawer()">+</button>
          </div>
        </div>
        <button class="cart-drawer-remove" onclick="Cart.removeItem('${p.id}','${p.selectedSize}');Cart.renderDrawer()">×</button>
      </div>
    `).join('');

    const totalEl = document.getElementById('cart-drawer-total');
    if (totalEl) totalEl.textContent = `£${this.getTotal().toFixed(2)}`;
  }
};

document.addEventListener('DOMContentLoaded', () => Cart.updateUI());
