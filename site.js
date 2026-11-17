/* ============================================================
   PENGATURAN BERSAMA MULINTRIP
   Ubah di sini sekali, semua halaman ikut berubah.
   Kosongkan ("") yang belum ada, tombolnya otomatis tidak tampil.
   ============================================================ */
const SITE = {
  name: "Mulintrip",
  tagline: "Enjoy Your Trip",
  waNumber: "",            // format 62..., tanpa + atau 0 di depan. Contoh: "628123456789"
  waDisplay: "",           // contoh: "0812-3456-789"
  email: "",               // contoh: "info@mulintrip.com"
  instagram: "",           // tanpa @
  threads: "",             // tanpa @
  facebook: "",            // boleh link lengkap
  tiktok: "",              // tanpa @
  hours: "Senin sampai Sabtu, 09.00 sampai 17.00",
  offices: [
    // { name:"Head Office", address:"Isi alamat kantor di sini", phone:"" }
  ]
};

/* ============================================================
   DATA PAKET (CONTOH, ganti dengan paket Mulintrip yang asli)
   price : angka rupiah tanpa titik, atau null untuk "Hubungi kami"
   slug  : nama unik untuk alamat detail (huruf kecil, pakai strip)
   type  : dipakai untuk filter ("Internasional" atau "Domestik")
   itinerary: [judul hari, isi, hotel]
   ============================================================ */
const PACKAGES = [
  { slug:"malaysia-singapore-4d3n", name:"Tour Malaysia Singapore 4D3N", dest:"Malaysia Singapore", type:"Internasional", days:4, nights:3, emoji:"🇲🇾🇸🇬", color:"#073b6e,#1b7fd0", price:null, tag:"Contoh",
    image:"",
    items:["Kuala Lumpur, Genting, Melaka, Singapore","Cocok untuk liburan singkat","Pemandu wisata berpengalaman"],
    schedule:["Jadwal keberangkatan menyesuaikan, tanyakan lewat WhatsApp","Bisa berangkat dari berbagai kota di Indonesia"],
    itinerary:[
      ["DAY 1 : KUALA LUMPUR","Tiba di Kuala Lumpur, penjemputan, check in hotel, acara bebas.","Hotel bintang 3 setaraf"],
      ["DAY 2 : KUALA LUMPUR - GENTING - JOHOR BAHRU","Genting Highland, Batu Caves, Petronas Twin Towers, Putrajaya, lanjut ke Johor Bahru.","Hotel bintang 3 setaraf"],
      ["DAY 3 : SINGAPORE - MELAKA","City tour Singapore (Merlion Park, Gardens By The Bay), lanjut ke Melaka.","Hotel bintang 3 setaraf"],
      ["DAY 4 : MELAKA - TRANSFER OUT","Tour Melaka, kembali ke Kuala Lumpur, diantar ke bandara.",""]
    ],
    included:["Tiket pesawat pulang pergi","Hotel sesuai program","Bus pariwisata AC","Makan sesuai program","Tiket masuk wisata yang tercantum","Pemandu wisata"],
    excluded:["Bagasi pesawat","Optional tour","Tipping guide dan driver","Pengeluaran pribadi"],
    costs:["Harga, uang muka, dan pelunasan: tanyakan lewat WhatsApp"],
    terms:["Nama peserta sesuai paspor, paspor berlaku minimal 6 bulan.","Itinerary dapat berubah mengikuti kondisi lapangan.","Harga dapat berubah sebelum ada transaksi.","Syarat pembayaran dan pembatalan dikonfirmasi saat pemesanan."] },

  { slug:"bangkok-pattaya-4d3n", name:"Tour Bangkok Pattaya 4D3N", dest:"Thailand", type:"Internasional", days:4, nights:3, emoji:"🇹🇭", color:"#0b64b0,#f0a82b", price:null, tag:"Contoh",
    image:"",
    items:["Bangkok dan Pattaya","Wisata, belanja, dan kuliner","Pemandu berbahasa Indonesia"],
    schedule:["Jadwal keberangkatan menyesuaikan, tanyakan lewat WhatsApp"],
    itinerary:[
      ["DAY 1 : BANGKOK","Penjemputan bandara, check in hotel di Bangkok.",""],
      ["DAY 2 : BANGKOK - PATTAYA","Dinosaur Park, Nongnooch Village, Pattaya Beach.",""],
      ["DAY 3 : PATTAYA - BANGKOK","Gems Gallery, Wat Arun, Chaophraya River, Icon Siam.",""],
      ["DAY 4 : DEPARTURES","Acara bebas, diantar ke bandara.",""]
    ],
    included:["Hotel sesuai program","Transportasi","Pemandu wisata","Makan sesuai program","Tiket masuk objek wisata"],
    excluded:["Tiket pesawat (jika tidak termasuk)","Tipping guide dan driver","Optional tour","Pengeluaran pribadi"],
    costs:["Harga, uang muka, dan pelunasan: tanyakan lewat WhatsApp"],
    terms:["Nama peserta sesuai paspor.","Itinerary dapat berubah mengikuti kondisi lapangan.","Syarat pembayaran dan pembatalan dikonfirmasi saat pemesanan."] },

  { slug:"bali-4d3n", name:"Paket Wisata Bali 4D3N", dest:"Bali", type:"Domestik", days:4, nights:3, emoji:"🏝️", color:"#073b6e,#1faacd", price:null, tag:"Contoh",
    image:"",
    items:["Pantai, pura, dan budaya Bali","Hotel dan transport termasuk","Bisa disesuaikan (private tour)"],
    schedule:["Berangkat sesuai kesepakatan, tanyakan lewat WhatsApp"],
    itinerary:[
      ["DAY 1 : TIBA DI BALI","Penjemputan bandara, check in hotel, acara bebas.",""],
      ["DAY 2 : BALI UTARA","Kintamani, Tegallalang, Tirta Empul.",""],
      ["DAY 3 : BALI SELATAN","Uluwatu, Pantai Pandawa, Jimbaran.",""],
      ["DAY 4 : TRANSFER OUT","Belanja oleh-oleh, diantar ke bandara.",""]
    ],
    included:["Hotel","Transportasi","Driver/guide","Tiket masuk objek wisata"],
    excluded:["Tiket pesawat","Makan di luar program","Pengeluaran pribadi"],
    costs:["Harga bergantung jumlah peserta dan musim, tanyakan lewat WhatsApp"],
    terms:["Itinerary dapat disesuaikan.","Syarat pembayaran dan pembatalan dikonfirmasi saat pemesanan."] }
];

/* ============================================================
   Bagian di bawah ini tidak perlu diubah
   ============================================================ */
const wa = msg => SITE.waNumber ? `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(msg)}` : `https://wa.me/?text=${encodeURIComponent(msg)}`;
const rupiah = n => "Rp " + n.toLocaleString("id-ID");
const findPackage = slug => PACKAGES.find(p => p.slug === slug);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c]));

const NAV = [
  ["home","index.html","Beranda"],
  ["paket","paket.html","Paket Wisata"],
  ["layanan","layanan.html","Layanan"],
  ["dokumentasi","dokumentasi.html","Dokumentasi"],
  ["kontak","kontak.html","Kontak"]
];

function packageCard(p){
  const msg = `Halo Mulintrip, saya tertarik paket ${p.name} (${p.days} hari ${p.nights} malam). Boleh minta jadwal dan harga terbaru?`;
  const detail = `detail.html?p=${p.slug}`;
  const price = p.price
    ? `<small>Mulai dari</small><strong>${rupiah(p.price)}</strong>/orang`
    : `<small>Harga</small><strong>Hubungi kami</strong>`;
  const bg = p.image
    ? `linear-gradient(180deg,rgba(0,0,0,0) 45%,rgba(0,0,0,.45)),url('${p.image}') center/cover no-repeat`
    : `linear-gradient(135deg,${p.color})`;
  return `
    <article class="card">
      <a href="${detail}" aria-label="Lihat detail ${esc(p.name)}" style="display:block">
        <div class="card-top" style="background:${bg}">
          <span class="emoji" aria-hidden="true">${p.emoji || ""}</span>
          ${p.tag ? `<span class="tag">${esc(p.tag)}</span>` : ""}
        </div>
      </a>
      <div class="card-body">
        <h3><a href="${detail}">${esc(p.name)}</a></h3>
        <div class="meta"><span>${p.days} hari ${p.nights} malam</span><span>${esc(p.type)}</span></div>
        <ul>${p.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul>
        <div class="price">${price}</div>
        <a class="btn btn-outline" href="${detail}">Lihat detail paket</a>
        <a class="btn btn-wa" href="${wa(msg)}" target="_blank" rel="noopener">Pesan lewat WhatsApp</a>
      </div>
    </article>`;
}

function renderHeader(active){
  const links = NAV.map(([k,href,label]) =>
    `<li><a href="${href}"${k===active ? ' class="active" aria-current="page"' : ""}>${label}</a></li>`).join("");
  return `
  <header>
    <div class="wrap nav">
      <a href="index.html" class="brand" aria-label="${SITE.name}">
        <img src="logo.png" alt="Logo Mulintrip" width="50" height="50" onerror="this.style.display='none'">
        <div>MULINTRIP<small>${SITE.tagline.toUpperCase()}</small></div>
      </a>
      <nav id="menu" aria-label="Menu utama"><ul>${links}</ul></nav>
      <a class="btn btn-wa nav-cta" data-wa="Halo Mulintrip, saya ingin konsultasi paket wisata." href="#">Chat WhatsApp</a>
      <button class="menu-toggle" id="menuToggle" aria-label="Buka menu" aria-expanded="false" aria-controls="menu">☰</button>
    </div>
  </header>`;
}

function renderFooter(){
  const fb = SITE.facebook ? (/^https?:/.test(SITE.facebook) ? SITE.facebook : "https://facebook.com/" + SITE.facebook) : "";
  const offices = (SITE.offices || []).map(o => `<div class="office"><strong>${esc(o.name)}</strong><span>${esc(o.address)}</span>${o.phone ? `<a href="tel:${o.phone.replace(/[^\d+]/g,"")}">☎ ${esc(o.phone)}</a>` : ""}</div>`).join("");
  return `
  <footer>
    <div class="wrap">
      <div class="foot-grid">
        <div>
          <div class="foot-brand"><img src="logo.png" alt="" width="52" height="52" onerror="this.style.display='none'">${SITE.name}</div>
          <p>${SITE.tagline}. Paket wisata, tiket pesawat, dan perjalanan custom untuk liburan yang nyaman.</p>
        </div>
        <div>
          <h3>Menu</h3>
          <ul>${NAV.slice(1).map(([k,href,label]) => `<li><a href="${href}">${label}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h3>Kontak</h3>
          <ul>
            <li>WhatsApp: <a data-wa="Halo Mulintrip" href="#">${SITE.waDisplay || "Chat sekarang"}</a></li>
            ${SITE.email ? `<li>Email: <a href="mailto:${SITE.email}">${SITE.email}</a></li>` : ""}
            ${SITE.instagram ? `<li>Instagram: <a href="https://instagram.com/${SITE.instagram}" target="_blank" rel="noopener">@${SITE.instagram}</a></li>` : ""}
            ${SITE.threads ? `<li>Threads: <a href="https://www.threads.com/@${SITE.threads}" target="_blank" rel="noopener">@${SITE.threads}</a></li>` : ""}
            ${fb ? `<li>Facebook: <a href="${fb}" target="_blank" rel="noopener">Mulintrip</a></li>` : ""}
            <li>Jam layanan: ${SITE.hours}</li>
          </ul>
        </div>
      </div>
      ${offices ? `<div class="foot-offices"><h3>Kantor Kami</h3><div class="office-grid">${offices}</div></div>` : ""}
      <p class="copy">© ${new Date().getFullYear()} ${SITE.name}. Semua hak dilindungi.</p>
    </div>
  </footer>
  <a class="wa-float" data-wa="Halo Mulintrip, saya ingin bertanya tentang paket wisata." href="#" aria-label="Chat WhatsApp">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6A12 12 0 0 0 12 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5zM12 21.9c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.9 9.9 0 0 1 2.1 12C2.1 6.5 6.5 2.1 12 2.1S21.9 6.5 21.9 12 17.5 21.9 12 21.9zm5.4-7.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/></svg>
    <span>Chat WhatsApp</span>
  </a>`;
}

function renderSocial(){
  const at = s => s.replace(/^@/, "");
  const list = [
    SITE.instagram && { n:"Instagram", u:`https://instagram.com/${at(SITE.instagram)}`, h:`@${at(SITE.instagram)}` },
    SITE.tiktok && { n:"TikTok", u:`https://www.tiktok.com/@${at(SITE.tiktok)}`, h:`@${at(SITE.tiktok)}` },
    SITE.threads && { n:"Threads", u:`https://www.threads.com/@${at(SITE.threads)}`, h:`@${at(SITE.threads)}` },
    SITE.facebook && { n:"Facebook", u:/^https?:/.test(SITE.facebook) ? SITE.facebook : `https://facebook.com/${SITE.facebook}`, h:"Mulintrip" }
  ].filter(Boolean);
  if (!list.length) return "";
  const share = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 10.5l6.8-4M8.6 13.5l6.8 4"/></svg>';
  return `<div class="sc-float" id="scFloat">
    <div class="sc-menu">${list.map(x => `<a href="${x.u}" target="_blank" rel="noopener"><span>${x.n}<small>${x.h}</small></span></a>`).join("")}</div>
    <button type="button" class="sc-btn" id="scBtn" aria-expanded="false" aria-label="Sosial media ${SITE.name}">${share}<span>Sosial Media</span></button>
  </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const active = document.body.dataset.page;
  const h = document.getElementById("site-header");
  const f = document.getElementById("site-footer");
  if (h) h.outerHTML = renderHeader(active);
  if (f) f.outerHTML = renderFooter();
  document.body.insertAdjacentHTML("beforeend", renderSocial());

  const sc = document.getElementById("scFloat"), scBtn = document.getElementById("scBtn");
  if (sc && scBtn) {
    scBtn.addEventListener("click", e => { e.stopPropagation(); const o = sc.classList.toggle("open"); scBtn.setAttribute("aria-expanded", o); });
    document.addEventListener("click", e => { if (!sc.contains(e.target)) { sc.classList.remove("open"); scBtn.setAttribute("aria-expanded", "false"); } });
  }

  document.querySelectorAll("[data-wa]").forEach(a => { a.href = wa(a.dataset.wa); a.target = "_blank"; a.rel = "noopener"; });

  const toggle = document.getElementById("menuToggle"), menu = document.getElementById("menu");
  if (toggle && menu) toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open"); toggle.setAttribute("aria-expanded", open);
  });
});
