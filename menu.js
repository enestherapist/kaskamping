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
  data.categories.forEach(cat => {
    const catDiv = document.createElement('div');
    catDiv.className = 'category';
    const title = document.createElement('h2');
    title.textContent = cat[lang];
    catDiv.appendChild(title);
    cat.items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `
        <h3><span>${item[lang].name}</span><span>${item[lang].price}</span></h3>
        <p>${item[lang].desc}</p>`;
      catDiv.appendChild(div);
    });
    container.appendChild(catDiv);
  });
}
renderMenu();
