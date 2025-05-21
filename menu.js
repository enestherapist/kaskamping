let lang = 'tr';

function setLang(l) {
  lang = l;
  renderMenu();
}

async function renderMenu() {
  const res = await fetch('menu.json');
  const data = await res.json();
  const container = document.getElementById('menu');
  container.innerHTML = '';

  data.categories.forEach(category => {
    const section = document.createElement('div');
    section.className = 'category';

    // ✅ Kategori başlığı doğru dile göre
    const title = document.createElement('h2');
    title.textContent = category[lang];
    section.appendChild(title);

    category.items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'item';

      div.innerHTML = `
        <h3><span>${item[lang].name}</span><span>${item[lang].price}</span></h3>
        <p>${item[lang].desc}</p>
      `;
      section.appendChild(div);
    });

    container.appendChild(section);
  });
}

renderMenu();
