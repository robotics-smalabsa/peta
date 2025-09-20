document.addEventListener("DOMContentLoaded", () => {
  const navbarHTML = `
  <nav class="w-full shadow-md bg-white dark:bg-gray-800 fixed top-0 left-0 z-50">
    <div class="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
      <div class="flex items-center space-x-4">
        <div class="relative">
            <button id="dropdown-toggle" class="p-2 rounded-md bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 5h14a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 5h8a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 5h14a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2z" clip-rule="evenodd"></path>
              </svg>
            </button>
            <div id="dropdown-menu" class="absolute left-0 mt-2 w-24 bg-white dark:bg-gray-700 rounded-md shadow-lg hidden transition-all duration-300 p-2">
            <div class="relative group">
              <a href="https://robotics-smalabsa.github.io/peta/tab/tab1.html" class="flex items-center justify-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md">
                <img class="w-12 h-12"src="https://robotics-smalabsa.github.io/peta/assets/picture/tab/tab1.png">
              </a>
              <div class="absolute left-full top-1/2 -translate-y-1/2 ml-2 
                          hidden group-hover:block transform scale-95 opacity-0 
                          group-hover:scale-100 group-hover:opacity-100 
                          transition-all duration-300 z-50">
              
                <div class="absolute top-1/2 -left-2 -translate-y-1/2 w-0 h-0 
                            border-t-8 border-b-8 border-r-8 
                            border-t-transparent border-b-transparent 
                            border-r-white dark:border-r-gray-800"></div>
                
                <div class="w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg 
                            hover:shadow-2xl transition-shadow duration-300 
                            p-3 border border-gray-200 dark:border-gray-700">
                  <h4 class="text-sm font-semibold" data-i18n-key="bukuTitle"></h4>
                  <p class="text-xs text-gray-500 dark:text-gray-400" data-i18n-key="bukuDesc">
                  </p>
                </div>
              </div>
            </div>                                                  

            <div class="relative group">
              <a href="https://robotics-smalabsa.github.io/peta/tab/tab2.html" class="flex items-center justify-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md">
                <img class="w-12 h-12"src="https://robotics-smalabsa.github.io/peta/assets/picture/tab/tab2.png">
              </a>
              <div class="absolute left-full top-1/2 -translate-y-1/2 ml-2 
                          hidden group-hover:block transform scale-95 opacity-0 
                          group-hover:scale-100 group-hover:opacity-100 
                          transition-all duration-300 z-50">
                <div class="absolute top-1/2 -left-2 -translate-y-1/2 w-0 h-0 
                            border-t-8 border-b-8 border-r-8 
                            border-t-transparent border-b-transparent 
                            border-r-white dark:border-r-gray-800"></div>
                <div class="w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg 
                            hover:shadow-2xl transition-shadow duration-300 
                            p-3 border border-gray-200 dark:border-gray-700">
                  <h4 class="text-sm font-semibold" data-i18n-key="lampuTitle1"></h4>
                  <p class="text-xs text-gray-500 dark:text-gray-400" data-i18n-key="lampuDesc1">
                  </p>
                </div>
              </div>
            </div>
          
            <div class="relative group">
              <a href="https://robotics-smalabsa.github.io/peta/tab/tab3.html" class="flex items-center justify-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md">
                <img class="w-12 h-12"src="https://robotics-smalabsa.github.io/peta/assets/picture/tab/tab3.png">
              </a>
              <div class="absolute left-full top-1/2 -translate-y-1/2 ml-2 
                          hidden group-hover:block transform scale-95 opacity-0 
                          group-hover:scale-100 group-hover:opacity-100 
                          transition-all duration-300 z-50">
                <div class="absolute top-1/2 -left-2 -translate-y-1/2 w-0 h-0 
                            border-t-8 border-b-8 border-r-8 
                            border-t-transparent border-b-transparent 
                            border-r-white dark:border-r-gray-800"></div>
                <div class="w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg 
                            hover:shadow-2xl transition-shadow duration-300 
                            p-3 border border-gray-200 dark:border-gray-700">
                  <h4 class="text-sm font-semibold" data-i18n-key="lampuTitle2"></h4>
                  <p class="text-xs text-gray-500 dark:text-gray-400" data-i18n-key="lampuDesc2">
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center space-x-8">
          <div class="text-2xl font-bold" data-i18n-key="brand"></div>
          <div class="flex items-center space-x-4">
            <!-- Indonesia -->
            <button id="idBtn" class="flex items-center space-x-1 hover:opacity-80 transition">
              <span class="hidden sm:inline text-sm">ID</span>
              <img src="https://flagcdn.com/w20/id.webp" alt="ID" class="w-6 aspect-[1/1] rounded-full object-cover flex-shrink-0">
            </button>

            <button id="engBtn" class="flex items-center space-x-1 hover:opacity-80 transition">
              <span class="hidden sm:inline text-sm">ENG</span>
              <img src="https://flagcdn.com/w20/gb.webp" alt="ENG" class="w-6 aspect-[1/1] rounded-full object-cover flex-shrink-0">
            </button>
          </div>
        </div>

       <!-- Search Bar -->
       <div class="absolute hidden sm:block left-1/2 transform -translate-x-1/2 z-[1000] w-11/12 sm:w-96">
          <div class="relative">
            <span class="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
              🔍
            </span>
            <input 
              id="search-input-desktop"
              type="text" 
              placeholder="Search City..."
              class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 
                    border border-transparent text-gray-900 dark:text-gray-100 
                    placeholder-gray-500 dark:placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                    shadow-sm transition"
            />
          </div>

          <div id="search-results-desktop" 
              class="absolute mt-2 w-full bg-white dark:bg-gray-900 
                      border border-gray-200 dark:border-gray-700 
                      rounded-xl shadow-xl hidden max-h-64 overflow-y-auto">
          </div>
        </div>

        <div class="sm:hidden">
          <button type="button" id="open-search" aria-label="Search" 
                  class="flex items-center justify-center w-10 h-10 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-full shadow-lg z-[1100]">
            <svg viewBox="0 0 16 16" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>

        <div id="search-modal" class="fixed inset-0 hidden z-[2000]">
          <div class="flex items-start justify-center mt-24">
            <div class="w-11/12 max-w-lg bg-white dark:bg-gray-900 rounded-xl shadow-xl">

              <div class="flex items-center border-b border-gray-200 dark:border-gray-700 px-4">
                <span class="text-gray-400 mr-3">
                  🔍
                </span>
                <input 
                  id="search-input-modal"
                  type="text" 
                  placeholder="Search City..."
                  class="flex-1 py-3 bg-transparent focus:outline-none text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                >
                <button id="close-search" class="ml-2 text-sm text-blue-500">Batal</button>
              </div>

              <div id="search-results-modal" 
                  class="absolute mt-2 w-1/2 text-center bg-white dark:bg-gray-900 
                          border border-gray-200 dark:border-gray-700 
                          rounded-xl shadow-xl hidden max-h-64 overflow-y-auto">
              </div>

            </div>
          </div>
        </div>
        
      </div>

      <div class="flex items-center space-x-4">
        <ul class="hidden md:flex space-x-6 relative">

          <li class="group relative">
            <a href="https://robotics-smalabsa.github.io/peta/peta.html" class="nav-link active" data-i18n-key="map"></a>
            <div class="absolute top-full left-1/2 -translate-x-1/2 mt-3 hidden group-hover:block transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
              <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 
                          border-l-8 border-r-8 border-b-8 
                          border-l-transparent border-r-transparent 
                          border-b-white dark:border-b-gray-800">
              </div>
              <div class="w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-3 border border-gray-200 dark:border-gray-700 transition-shadow duration-300 hover:shadow-2xl">
                <img class="rounded-lg mb-2" alt="" src="https://robotics-smalabsa.github.io/peta/assets/picture/navbar/peta.webp" loading="lazy">
                <h4 class="text-sm font-semibold" data-i18n-key="mapTitle"></h4>
                <p class="text-xs text-gray-500 dark:text-gray-400" data-i18n-key="mapDesc"></p>
                <a href="https://robotics-smalabsa.github.io/peta/peta.html" class="mt-2 inline-flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                  Find out more
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 16 16">
                    <path d="M6 3L11 8L6 13"></path>
                  </svg>
                </a>
              </div>
            </div>
          </li>

          <li class="group relative">
            <a href="https://robotics-smalabsa.github.io/peta/index.html" class="nav-link" data-i18n-key="home"></a>
            <div class="absolute top-full left-1/2 -translate-x-1/2 mt-3 hidden group-hover:block transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
              <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 
                          border-l-8 border-r-8 border-b-8 
                          border-l-transparent border-r-transparent 
                          border-b-white dark:border-b-gray-800">
              </div>
              <div class="w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-3 border border-gray-200 dark:border-gray-700 transition-shadow duration-300 hover:shadow-2xl">
                <img class="rounded-lg mb-2" alt="" src="https://robotics-smalabsa.github.io/peta/assets/picture/navbar/home.webp" loading="lazy">
                <h4 class="text-sm font-semibold" data-i18n-key="homeTitle"></h4>
                <p class="text-xs text-gray-500 dark:text-gray-400" data-i18n-key="homeDesc"></p>
                <a href="https://robotics-smalabsa.github.io/peta/index.html" class="mt-2 inline-flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                  Learn more
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 16 16">
                    <path d="M6 3L11 8L6 13"></path>
                  </svg>
                </a>
              </div>
            </div>
          </li>

          <li class="group relative">
            <a href="https://robotics-smalabsa.github.io/peta/about.html" class="nav-link" data-i18n-key="about"></a>
            <div class="absolute top-full left-1/2 -translate-x-1/2 mt-3 hidden group-hover:block transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
              <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 
                          border-l-8 border-r-8 border-b-8 
                          border-l-transparent border-r-transparent 
                          border-b-white dark:border-b-gray-800">
              </div>
              <div class="w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-3 border border-gray-200 dark:border-gray-700 transition-shadow duration-300 hover:shadow-2xl">
                <img class="rounded-lg mb-2" alt="" src="https://robotics-smalabsa.github.io/peta/assets/picture/navbar/about.webp" loading="lazy">
                <h4 class="text-sm font-semibold" data-i18n-key="aboutTitle"></h4>
                <p class="text-xs text-gray-500 dark:text-gray-400" data-i18n-key="aboutDesc">.</p>
                <a href="https://robotics-smalabsa.github.io/peta/about.html" class="mt-2 inline-flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                  Learn more
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 16 16">
                    <path d="M6 3L11 8L6 13"></path>
                  </svg>
                </a>
              </div>
            </div>
          </li>
        </ul>

        <span class="hidden md:block text-gray-400">|</span>
        <!-- Button -->
        <button id="theme-toggle" 
          class="p-2 rounded-md shadow-lg 
                bg-gray-200 dark:bg-gray-700 
                sm:static sm:ml-2 
                fixed bottom-4 right-4 sm:bottom-auto sm:right-auto
                sm:translate-x-0 sm:translate-y-0">
          🌙
        </button>
        <button id="menu-toggle" class="md:hidden p-2 rounded-md bg-gray-200 dark:bg-gray-700">☰</button>
      </div>
    </div>

    <div id="mobile-menu" class="md:hidden hidden px-4 pb-4 space-y-2 bg-white dark:bg-gray-800">
      <a href="https://robotics-smalabsa.github.io/peta/peta.html" class="block nav-link active" data-i18n-key="map"></a>
      <a href="https://robotics-smalabsa.github.io/peta/index.html" class="block nav-link" data-i18n-key="home"></a>
      <a href="https://robotics-smalabsa.github.io/peta/about.html" class="block nav-link" data-i18n-key="about"></a>
    </div>
  </nav>
  `;
    document.getElementById("navbar").innerHTML = navbarHTML;

    // Hubungkan tombol bahasa setelah navbar dimasukkan
    if (typeof changeLanguage === "function") {
    document.getElementById("idBtn").addEventListener("click", () => changeLanguage("id"));
    document.getElementById("engBtn").addEventListener("click", () => changeLanguage("eng"));

    // Default bahasa
    changeLanguage("eng");
    } else {
        console.warn("changeLanguage() belum ada, cek urutan load script.");
    }
  
    const dropdownToggle = document.getElementById("dropdown-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");
    
    let isOpen = false;
    dropdownToggle.addEventListener("click", (e) => {
        e.stopPropagation(); 
        isOpen = !isOpen;

        if (isOpen) {
        dropdownMenu.classList.remove("hidden");
        dropdownToggle.innerHTML = `▼`;
        } else {
        dropdownMenu.classList.add("hidden");
        dropdownToggle.innerHTML = `
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3 5h14a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 5h8a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 5h14a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2z" clip-rule="evenodd"></path>
            </svg>
        `;
        }
    });
    dropdownMenu.addEventListener("click", (e) => e.stopPropagation());
    document.addEventListener("click", (e) => {
        if (isOpen && !dropdownMenu.contains(e.target) && !dropdownToggle.contains(e.target)) {
        dropdownMenu.classList.add("hidden");
        dropdownToggle.innerHTML = `
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3 5h14a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 5h8a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 5h14a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2z" clip-rule="evenodd"></path>
            </svg>
        `;
        isOpen = false;
        }
    });

    // ---------------- HP ----------------
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    let mobileOpen = false;

    menuToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle("hidden");
        mobileOpen = !mobileOpen;
    });
    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        mobileOpen = false;
        });
    });
    document.addEventListener("click", (e) => {
        if (mobileOpen && !mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        mobileMenu.classList.add("hidden");
        mobileOpen = false;
        }
    });

    // ---------------- Dark mode ----------------
    const themeToggle = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;
    themeToggle.addEventListener("click", () => {
        if (htmlElement.classList.contains("dark")) {
        htmlElement.classList.remove("dark");
        themeToggle.textContent = "☀️";
        } else {
        htmlElement.classList.add("dark");
        themeToggle.textContent = "🌙";
        }
    });

    
  // --- LOGIKA BARU UNTUK LIVE SEARCH DENGAN DAFTAR HASIL ---
   const searchInputDesktop = document.getElementById('search-input-desktop'); // ID baru untuk desktop
  const searchInputModal = document.getElementById('search-input-modal');   // ID baru untuk modal
  const searchResultsDesktop = document.getElementById('search-results-desktop'); // ID baru untuk desktop
  const searchResultsModal = document.getElementById('search-results-modal'); // ID untuk modal

  // Fungsi untuk menampilkan hasil pencarian
  function updateSearchResults(event) {
    const query = event.target.value.toLowerCase().trim();
    
    // Kosongkan hasil sebelumnya di kedua tempat
    searchResultsDesktop.innerHTML = '';
    searchResultsModal.innerHTML = '';

    if (query.length < 2) {
      searchResultsDesktop.style.display = 'none';
      searchResultsModal.style.display = 'none';
      return;
    }

    const results = kotaData.filter(kota => kota.name.toLowerCase().includes(query)).slice(0, 5);

    if (results.length > 0) {
      searchResultsDesktop.style.display = 'block';
      searchResultsModal.style.display = 'block';

      results.forEach(kota => {
        // Buat item hasil yang sama untuk desktop dan modal
        const resultItemDesktop = document.createElement('div');
        resultItemDesktop.className = 'p-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer';
        resultItemDesktop.textContent = kota.name;
        
        const resultItemModal = resultItemDesktop.cloneNode(true); // Kloning untuk modal

        // Tambahkan event listener untuk desktop
        resultItemDesktop.addEventListener('click', function() {
          const latlng = [kota.lat, kota.lng];
          map.setView(latlng, 11);
          L.popup().setLatLng(latlng).setContent(`<b>${kota.name}</b>`).openOn(map);
          searchInputDesktop.value = kota.name;
          searchResultsDesktop.style.display = 'none';
        });

        // Tambahkan event listener untuk modal
        resultItemModal.addEventListener('click', function() {
          const latlng = [kota.lat, kota.lng];
          map.setView(latlng, 11);
          L.popup().setLatLng(latlng).setContent(`<b>${kota.name}</b>`).openOn(map);
          searchInputModal.value = kota.name;
          searchResultsModal.style.display = 'none';
          document.getElementById("search-modal").classList.add("hidden"); // Tutup modal setelah dipilih
        });
        
        searchResultsDesktop.appendChild(resultItemDesktop);
        searchResultsModal.appendChild(resultItemModal);
      });
    } else {
      searchResultsDesktop.style.display = 'none';
      searchResultsModal.style.display = 'none';
    }
  }

  // Tambahkan event listener ke kedua input pencarian
  searchInputDesktop.addEventListener('keyup', updateSearchResults);
  searchInputModal.addEventListener('keyup', updateSearchResults);
  
  // Sembunyikan daftar hasil jika pengguna mengklik di luar area pencarian
  document.addEventListener('click', function(event) {
      if (!searchInputDesktop.contains(event.target) && !searchInputModal.contains(event.target)) {
          searchResultsDesktop.style.display = 'none';
          searchResultsModal.style.display = 'none';
      }
  });

  const openBtn = document.getElementById("open-search");
  const closeBtn = document.getElementById("close-search");
  const modal = document.getElementById("search-modal");

  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    searchInputModal.focus(); // Fokuskan input di modal saat dibuka
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Tutup modal dengan klik luar
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

});