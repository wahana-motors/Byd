// ==============================
// DAFTAR MOTOR
// ==============================
const motors = [
      {
    name: "BYD Atto 1 (Dynamic)",
    price: "Rp199.000.000",
    img: "https://byd.arista-group.co.id/wp-content/uploads/2025/07/Atto-1-Apricity-White-.png",
    category: "matic",
    new: true,
    link: "#/"
  },
  {
    name: "BYD Atto 1 (Premium)",
    price: "Rp235.000.000",
    img: "#",
    category: "matic",
    new: true,
    link: "byd-atto-1premium/"
  },
  {
    name: "BYD Dolphin (Dynamic)",
    price: "Rp369.000.000",
    img: "#",
    category: "matic",
    new: true,
    link: "#/"
  },
  {
    name: "BYD Dolphin (Premium)",
    price: "Rp429.000.000",
    img: "#",
    category: "matic",
    new: true,
    link: "#/"
  },
  {
    name: "BYD M6 (Standard 7-Seater)",
    price: "Rp383.000.000",
    img: "#",
    category: "matic",
    new: true,
    link: "#/"
  },
  {
    name: "BYD M6 (Superior 7-Seater)",
    price: "Rp423.000.000",
    img: "#",
    category: "matic",
    new: true,
    link: "#/"
  },
  {
    name: "BYD M6 (Superior Captain 6-Seater)",
    price: "Rp433.000.000",
    img: "#",
    category: "matic",
    new: true,
    link: "#/"
  },
  {
    name: "BYD Atto 3 (Advanced)",
    price: "Rp390.000.000",
    img: "#",
    category: "matic",
    new: true,
    link: "#/"
  },
  {
    name: "BYD Atto 3 (Superior)",
    price: "Rp520.000.000",
    img: "#",
    category: "matic",
    new: true,
    link: "#/"
  },
  {
    name: "BYD Sealion 7 (Premium)",
    price: "Rp629.000.000",
    img: "#",
    category: "matic",
    new: true,
    link: "#/"
  },
  {
    name: "BYD Sealion 7 (Performance AWD)",
    price: "Rp719.000.000",
    img: "#",
    category: "matic",
    new: true,
    link: "#/"
  },
  {
    name: "BYD Seal (Premium)",
    price: "Rp639.000.000",
    img: "#",
    category: "matic",
    new: true,
    link: "#/"
  },
  {
    name: "BYD Seal (Performance AWD)",
    price: "Rp750.000.000",
    img: "#",
    category: "matic",
    new: true,
    link: "#/"
  },
  {
    name: "BYD Denza D9 (Electric)",
    price: "Rp950.000.000",
    img: "#",
    category: "matic",
    new: true,
    link: "#/"
  } 
];

function renderMotors(category) {
  const list = document.getElementById("motorList");
  if (!list) return; // biar gak error di halaman posting

  list.innerHTML = "";
  motors
    .filter(m => m.category === category)
    .forEach(motor => {
      const card = document.createElement("div");
      card.className = "motor-card";
      card.innerHTML = `
        ${motor.new ? '<div class="new-label">New!</div>' : ""}
        <img src="${motor.img}" alt="${motor.name}">
        <div class="info">
          <h3>${motor.name}</h3>
          <p>Harga mulai</p>
          <p class="price">${motor.price}</p>
          <a class="btn" href="${motor.link}">Selengkapnya →</a>
        </div>
      `;
      list.appendChild(card);
    });
}

renderMotors("matic");

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderMotors(tab.dataset.category);
  });
});

// ==========================
// Fungsi include header/footer
// ==========================
document.addEventListener("DOMContentLoaded", function () {
  const includes = document.querySelectorAll("[data-include]");
  includes.forEach(el => {
    const file = el.getAttribute("data-include");
    fetch(file)
      .then(res => {
        if (!res.ok) throw new Error(`Gagal memuat ${file}`);
        return res.text();
      })
      .then(data => {
        el.innerHTML = data;
      })
      .catch(err => console.error(err));
  });
});

// ==========================
// SLIDER MANUAL (tanpa otomatis)
// ==========================
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider-wrapper");
  const images = document.querySelectorAll(".slider-wrapper img");
  const dots = document.querySelectorAll(".slider-dots .dot");

  // Kalau gak ada slider di halaman, hentikan script
  if (!slider || images.length === 0) return;

  let index = 0;
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  }

  // Geser manual pakai sentuhan (mobile)
  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  slider.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", () => {
    if (!isDragging) return;
    const diff = startX - currentX;

    if (diff > 50 && index < images.length - 1) index++;
    else if (diff < -50 && index > 0) index--;

    updateSlider();
    isDragging = false;
  });

  // Geser manual pakai mouse (desktop)
  slider.addEventListener("mousedown", (e) => {
    startX = e.clientX;
    isDragging = true;
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    currentX = e.clientX;
  });

  slider.addEventListener("mouseup", () => {
    if (!isDragging) return;
    const diff = startX - currentX;

    if (diff > 50 && index < images.length - 1) index++;
    else if (diff < -50 && index > 0) index--;

    updateSlider();
    isDragging = false;
  });

  slider.addEventListener("mouseleave", () => {
    if (isDragging) {
      isDragging = false;
    }
  });

  // Inisialisasi tampilan awal
  updateSlider();
});



document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll(".spesifikasi-tab");
  const contents = document.querySelectorAll(".spesifikasi-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });
});
