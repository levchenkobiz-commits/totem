// The published site has no build sources; keep menu grouping readable here.
export function renderMenuSections(categories, formatPrice) {
  const find = id => categories.find(category => category.id === id);
  const beer = find('beer');
  const groups = [
    { id: 'hookah-drinks', title: 'Кальян и напитки', open: true, categories: [
      find('hookah'), find('lemonades'), find('tea'),
      { ...beer, title: 'Безалкогольное пиво', items: beer.items.filter(item => item[1].includes('безалкогольный')) },
    ] },
    { id: 'alcohol', title: 'Алкоголь', categories: [
      { ...beer, items: beer.items.filter(item => !item[1].includes('безалкогольный')) },
    ] },
    { id: 'kitchen', title: 'Кухня', categories: [find('food')] },
  ];
  return groups.map(group => `<details id="menu-${group.id}" ${group.open ? 'open' : ''}>
    <summary><span>${group.title}</span><span class="detail-plus" aria-hidden="true">+</span></summary>
    <div class="menu-items">${group.categories.filter(category => category.items.length).map(category => `<section class="menu-category" aria-label="${category.title}">
      ${group.categories.length > 1 || group.title !== category.title ? `<h3 class="menu-category-title">${category.title}</h3>` : ''}
      ${category.serving ? `<p class="serving">${category.serving}</p>` : ''}
      ${category.items.map(([title, note, price, secondPrice]) => `<div class="dish"><div><h4>${title}</h4>${note ? `<p>${note}</p>` : ''}</div><span>${formatPrice(price)}${secondPrice ? ' / ' + formatPrice(secondPrice) : ''}</span></div>`).join('')}
    </section>`).join('')}</div>
  </details>`).join('');
}

export function connectMenuBooks(container, scrollTrigger, reducedMotion) {
  container.querySelectorAll('[data-menu-target]').forEach(book => {
    book.addEventListener('click', event => {
      event.preventDefault();
      const target = document.getElementById(book.dataset.menuTarget);
      if (!target) return;
      document.querySelectorAll('#menu-list > details').forEach(menu => { menu.open = menu === target; });
      scrollTrigger.refresh();
      target.scrollIntoView({ block: 'start', behavior: reducedMotion ? 'auto' : 'smooth' });
    });
  });
}
