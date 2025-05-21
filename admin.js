let password = "kas2025";
let menuData;

async function login() {
  const input = document.getElementById("password").value;
  if (input === password) {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("panel").classList.remove("hidden");
    const res = await fetch('menu.json');
    menuData = await res.json();
    const categorySelect = document.getElementById("category");
    menuData.categories.forEach(cat => {
      const opt = document.createElement("option");
      opt.value = cat.id;
      opt.textContent = cat.tr;
      categorySelect.appendChild(opt);
    });
  } else {
    alert("Şifre hatalı");
  }
}

function addItem() {
  const cat = document.getElementById("category").value;
  const name_tr = document.getElementById("name_tr").value;
  const desc_tr = document.getElementById("desc_tr").value;
  const name_en = document.getElementById("name_en").value;
  const desc_en = document.getElementById("desc_en").value;
  const price = document.getElementById("price").value;

  const newItem = {
    tr: { name: name_tr, desc: desc_tr, price: price },
    en: { name: name_en, desc: desc_en, price: price }
  };

  const category = menuData.categories.find(c => c.id === cat);
  if (category) {
    category.items.push(newItem);
    document.getElementById("jsonOutput").textContent = JSON.stringify(menuData, null, 2);
    alert("Ürün eklendi (JSON içinde). Gerçek kayıt için sunucu tarafı gerekir.");
  } else {
    alert("Kategori bulunamadı");
  }
}
