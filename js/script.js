document.addEventListener('DOMContentLoaded', () => {
    // Language Data
    const translations = {
        'en': {
            'nav-home': 'Home',
            'nav-about': 'About',
            'nav-skills': 'Skills',
            'nav-tools': 'Tools',
            'nav-portfolio': 'Portfolio',
            'nav-education': 'Education',
            'nav-contact': 'Contact Me',
            'hero-h1': 'Hi, I am a <span>Fullstack Developer</span>',
            'hero-p': 'Building Robust & Solutive Web Ecosystems as an Experienced Freelancer.',
            'hero-stats': '<span>50+</span> Projects Completed | <span>100+</span> Users Helped',
            'hero-btn-work': 'See My Work',
            'hero-btn-contact': 'Contact Me',
            'about-title': 'About Me',
            'about-h3': 'Hello! I am a Freelancer & Developer',
            'about-p1': 'Welcome to my central data station. I am a Fullstack Developer with <strong>2-3 years of experience</strong> in designing and developing scalable web applications.',
            'about-p2': 'As a freelancer, I am accustomed to working independently or in a team to deliver functional digital solutions. I also have active communication skills in <strong>Indonesian</strong> and <strong>English</strong>.',
            'skills-title': 'Core Strengths (Skills)',
            'tools-title': 'Weaponry & Tools',
            'portfolio-title': 'Projects Done (Portfolio)',
            'education-title': 'Learning Path (Education)',
            'contact-title': 'Contact Me',
            'contact-msg': 'Ready to discuss your next big digital project? Let\'s connect!',
            'footer-rights': '© 2026 SpaceCoder Portfolio. All rights reserved.',
            'edu-1-h3': 'Bachelor of Informatics Engineering',
            'edu-1-p1': 'Bright Galaxy University (2018 - 2022)',
            'edu-1-p2': 'Focused on web application development and distributed systems.',
            'edu-2-h3': 'Fullstack Developer Certification',
            'edu-2-p1': 'Coding Bootcamp Space Academy (2022)',
            'edu-2-p2': '6-month intensive training in modern stack (MERN).',
            'portfolio-item-1-p': 'Web-based student assessment system...',
            'portfolio-item-2-p': 'Digital invitation & attendance system...',
            'portfolio-item-3-p': 'Point of Sales & Inventory management...',
            'portfolio-item-4-p': 'School healthcare management system...',
            'portfolio-item-5-p': 'Real-time IoT sensor monitoring dashboard...',
            'portfolio-item-6-p': 'Climate program information system...',
            'portfolio-item-7-p': 'Village digital hub & MSME platform...',
            'portfolio-item-8-p': 'Islamic education management system...',
            'modal-tech-stack': 'Tech Stack'
        },
        'id': {
            'nav-home': 'Beranda',
            'nav-about': 'Tentang',
            'nav-skills': 'Keahlian',
            'nav-tools': 'Tools',
            'nav-portfolio': 'Portofolio',
            'nav-education': 'Pendidikan',
            'nav-contact': 'Kontak Saya',
            'hero-h1': 'Halo, Saya <span>Fullstack Developer</span>',
            'hero-p': 'Membangun Ekosistem Web yang Tangguh & Solutif sebagai Freelancer Berpengalaman.',
            'hero-stats': '<span>50+</span> Proyek Selesai | <span>100+</span> Pengguna Terbantu',
            'hero-btn-work': 'Lihat Karya',
            'hero-btn-contact': 'Hubungi Saya',
            'about-title': 'Tentang Saya',
            'about-h3': 'Halo! Saya seorang Freelancer & Developer',
            'about-p1': 'Selamat datang di stasiun pusat data saya. Saya adalah seorang Fullstack Developer dengan <strong>pengalaman 2-3 tahun</strong> dalam merancang dan mengembangkan aplikasi web yang skalabel.',
            'about-p2': 'Sebagai seorang freelancer, saya terbiasa bekerja secara mandiri maupun tim untuk menghadirkan solusi digital yang fungsional. Saya juga memiliki kemampuan komunikasi yang baik dalam <strong>Bahasa Indonesia</strong> maupun <strong>Bahasa Inggris (English)</strong> secara aktif.',
            'skills-title': 'Kekuatan Inti (Skills)',
            'tools-title': 'Peralatan & Tools',
            'portfolio-title': 'Proyek Yang Dikerjakan (Portofolio)',
            'education-title': 'Riwayat Belajar (Pendidikan)',
            'contact-title': 'Hubungi Saya',
            'contact-msg': 'Siap untuk mendiskusikan proyek digital besar Anda berikutnya? Mari terhubung!',
            'footer-rights': '© 2026 SpaceCoder Portfolio. Hak cipta dilindungi.',
            'edu-1-h3': 'Sarjana Teknik Informatika',
            'edu-1-p1': 'Universitas Galaksi Terang (2018 - 2022)',
            'edu-1-p2': 'Fokus pada pengembangan aplikasi web dan sistem terdistribusi.',
            'edu-2-h3': 'Sertifikasi Fullstack Developer',
            'edu-2-p1': 'Coding Bootcamp Space Academy (2022)',
            'edu-2-p2': 'Pelatihan intensif selama 6 bulan dalam stack modern (MERN).',
            'portfolio-item-1-p': 'Sistem penilaian siswa berbasis web...',
            'portfolio-item-2-p': 'Sistem undangan & kehadiran digital...',
            'portfolio-item-3-p': 'Manajemen Point of Sales & Inventaris...',
            'portfolio-item-4-p': 'Sistem manajemen kesehatan sekolah...',
            'portfolio-item-5-p': 'Dashboard monitoring sensor IoT real-time...',
            'portfolio-item-6-p': 'Sistem informasi program iklim...',
            'portfolio-item-7-p': 'Hub digital desa & platform UMKM...',
            'portfolio-item-8-p': 'Sistem manajemen pendidikan Islam...',
            'modal-tech-stack': 'Teknologi'
        }
    };

    // Language Switching Logic
    const langSwitch = document.getElementById('langSwitch');
    
    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        localStorage.setItem('preferred-lang', lang);
        langSwitch.value = lang;
        document.documentElement.lang = lang;
    }

    langSwitch.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

    // Auto-detect browser language or use saved preference
    const savedLang = localStorage.getItem('preferred-lang');
    const browserLang = navigator.language.startsWith('id') ? 'id' : 'en';
    const defaultLang = savedLang || browserLang;
    setLanguage(defaultLang);

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Generate stars
    const starsContainer = document.querySelector('.stars-container');
    const starCount = 150;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 3;
        
        // Random duration
        const duration = 2 + Math.random() * 3;

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty('--duration', `${duration}s`);

        starsContainer.appendChild(star);
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (nav.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
            document.body.style.overflow = 'hidden';
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
            document.body.style.overflow = 'auto';
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                nav.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.replace('fa-times', 'fa-bars');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Scroll reveal animation (simple version)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Portfolio Data
    const portfolioData = {
        'en': {
            'e-rapot': {
                title: 'E-Rapot',
                image: 'images/Gambar-Dashboard-E-Rapot.png',
                description: 'E-Raport is a web-based information system designed to manage, process, and present student assessment data digitally in a structured and efficient manner. This system aims to streamline the evaluation process within schools, making it faster, more accurate, transparent, and well-organized. Teachers can input and manage student grades based on various assessment categories such as knowledge, skills, and attitudes. The system supports flexible assessment configurations in accordance with the applicable curriculum. All data entered is automatically processed to generate comprehensive student learning reports in the form of digital report cards. It features real-time data processing, centralized storage, and easy access for authorized users.',
                tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap']
            },
            'qr-code': {
                title: 'QR-Code Wedding',
                image: 'images/Gambar-QR-Code.png',
                description: 'QR Code Wedding Website is a web-based application designed for weddings, engagements, and special occasions. It simplifies event management by providing a modern, paperless invitation and attendance tracking solution. Features an intuitive dashboard to manage guest lists and send digital invitations via WhatsApp. Each guest receives a unique QR code entry pass. During the event, QR codes are scanned in real-time for instant check-in and automatic attendance recording, ensuring accurate tracking and reducing manual errors.',
                tech: ['JavaScript', 'Laravel', 'HTML5 Qr-Code', 'WhatsApp API', 'Micsrofost Excel']
            },
            'pos-janari': {
                title: 'POS-Janari Sport',
                image: 'images/Gambar-POS-Janari.png',
                description: 'JANARI SPORT POS Website is developed for Janari Sport partners to streamline product management and sales operations. Designed for efficient inventory control and order processing, especially pre-order (indent) concepts. Facilitates offline-based ordering workflows, allowing transactions to be recorded directly during in-store interactions. Integrates product data, stock management, and order tracking into a single dashboard for real-time inventory monitoring.',
                tech: ['Web-App', 'POS System', 'Inventory Control']
            },
            'web-uks': {
                title: 'Web-UKS (School Health)',
                image: 'images/Gambar-Web-UKS.png',
                description: 'School Health Unit (UKS) Information System is a web-based application for digital healthcare management in schools. Records student visits, medical history, treatments, and medication inventory. Features an interactive dashboard for staff to monitor student health conditions in real-time. Offers fast data searching, automated report generation, and centralized storage to improve the quality of healthcare services.',
                tech: ['PHP', 'Medical System', 'Management']
            },
            'pwa-iot': {
                title: 'PWA-IOT Monitoring',
                image: 'images/Gambar-PWA-IOT.png',
                description: 'Mini PC-based IoT Monitoring System monitors devices and data in real-time through an interactive dashboard. Collects data from various IoT sensors like temperature and humidity. Integrated with MQTT protocol for efficient, lightweight, and reliable communication. Features live data display without page refresh, dynamic graphical visualizations, abnormal condition alerts, and historical data tracking.',
                tech: ['IoT', 'MQTT', 'PWA', 'Real-time']
            },
            'proklim': {
                title: 'Proklim Cirebon',
                image: 'images/Gambar-Web-Proklim.png',
                description: 'Cirebon City Climate Program (ProKlim) Website is developed for climate-related information dissemination. Built to support the dissemination of climate-related information to the public in a structured way. Provides comprehensive climate data in Cirebon City, including daily, monthly, and yearly reports on indicators like temperature and rainfall.',
                tech: ['Web', 'Environmental Data', 'Public Info']
            },
            'desa-merdeka': {
                title: 'Desa Merdeka',
                image: 'images/Gambar-Desa-Merdeka.png',
                description: 'Desa Merdeka Website supports digital presence and management of the village. Provides access to information about village development potential, resources, and MSMEs. Users can explore local products and economic opportunities. Serves as a digital hub connecting the village with a wider audience, enhancing transparency and accessibility.',
                tech: ['Web', 'Community', 'MSME Hub']
            },
            'web-rtq': {
                title: 'Web-RTQ Ulil Albab',
                image: 'images/Gambar-Web-RTQ.png',
                description: 'RTQ Ulil Albab Indramayu Website is designed to manage administrative and operational activities efficiently. Manages student records, teacher data, and guardian information. Includes attendance monitoring and financial management features like cash (KAS) tracking. Transitions the institution from manual processes to a modern, technology-driven solution.',
                tech: ['Management', 'Education', 'Finance', 'PHP', 'Postman', 'Trello', 'Flutter', 'Laravel']
            }
        },
        'id': {
            'e-rapot': {
                title: 'E-Rapot',
                image: 'images/Gambar-Dashboard-E-Rapot.png',
                description: 'E-Rapot adalah sistem informasi berbasis web yang dirancang untuk mengelola, memproses, dan menyajikan data penilaian siswa secara digital dengan cara yang terstruktur dan efisien. Sistem ini bertujuan untuk merampingkan proses evaluasi di sekolah, menjadikannya lebih cepat, akurat, transparan, dan terorganisir. Guru dapat menginput dan mengelola nilai siswa berdasarkan berbagai kategori penilaian. Sistem mendukung konfigurasi penilaian fleksibel sesuai kurikulum. Semua data diproses otomatis untuk menghasilkan laporan belajar siswa dalam bentuk rapor digital. Fitur utama meliputi pemrosesan real-time, penyimpanan terpusat, dan kemudahan akses.',
                tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap']
            },
            'qr-code': {
                title: 'QR-Code Wedding',
                image: 'images/Gambar-QR-Code.png',
                description: 'Website Undangan Pernikahan QR Code adalah aplikasi berbasis web untuk manajemen acara seperti pernikahan dan pertunangan. Menyediakan solusi undangan digital dan pelacakan kehadiran tanpa kertas yang modern. Dilengkapi dashboard intuitif untuk mengelola daftar tamu dan mengirim undangan via WhatsApp. Setiap tamu menerima kode QR unik sebagai pass masuk digital yang dapat dipindai secara real-time untuk check-in instan dan pencatatan kehadiran otomatis.',
                tech: ['JavaScript', 'Node.js', 'Express', 'WhatsApp API']
            },
            'pos-janari': {
                title: 'POS-Janari Sport',
                image: 'images/Gambar-POS-Janari.png',
                description: 'Website POS JANARI SPORT dikembangkan untuk mitra Janari Sport guna menyederhanakan manajemen produk dan operasional penjualan. Fokus pada pengendalian inventaris dan pemrosesan pesanan pre-order (indent). Memfasilitasi alur kerja pemesanan offline yang terintegrasi ke sistem secara real-time. Membantu mitra memantau stok dan pesanan pelanggan melalui satu dashboard terpadu.',
                tech: ['Web-App', 'POS System', 'Inventory Control']
            },
            'web-uks': {
                title: 'Web-UKS (Kesehatan Sekolah)',
                image: 'images/Gambar-Web-UKS.png',
                description: 'Sistem Informasi UKS adalah aplikasi berbasis web untuk manajemen layanan kesehatan sekolah secara digital. Mencatat kunjungan siswa, riwayat medis, perawatan, dan stok obat. Dashboard interaktif memungkinkan staf memantau kondisi kesehatan siswa secara real-time. Dilengkapi fitur pencarian cepat dan pembuatan laporan otomatis untuk meningkatkan kualitas layanan kesehatan sekolah.',
                tech: ['PHP', 'Medical System', 'Management']
            },
            'pwa-iot': {
                title: 'PWA-IOT Monitoring',
                image: 'images/Gambar-PWA-IOT.png',
                description: 'Sistem Pemantauan IoT berbasis Mini PC untuk memantau perangkat dan data secara real-time. Menggunakan protokol MQTT untuk komunikasi yang ringan dan andal. Menampilkan data sensor seperti suhu dan kelembapan secara live tanpa refresh halaman. Dilengkapi visualisasi grafis dinamis, peringatan anomali, dan pelacakan data historis untuk analisis mendalam.',
                tech: ['IoT', 'MQTT', 'PWA', 'Real-time']
            },
            'proklim': {
                title: 'Proklim Cirebon',
                image: 'images/Gambar-Web-Proklim.png',
                description: 'Website ProKlim Kota Cirebon digunakan untuk penyebaran informasi terkait perubahan iklim kepada masyarakat. Menyediakan data iklim komprehensif termasuk laporan harian, bulanan, dan tahunan mengenai suhu, curah hujan, dan indikator lingkungan lainnya melalui antarmuka yang ramah pengguna.',
                tech: ['Web', 'Environmental Data', 'Public Info']
            },
            'desa-merdeka': {
                title: 'Desa Merdeka',
                image: 'images/Gambar-Desa-Merdeka.png',
                description: 'Website Desa Merdeka mendukung kehadiran digital dan manajemen potensi desa. Memberikan akses informasi mengenai UMKM lokal, sumber daya desa, dan peluang ekonomi. Berfungsi sebagai hub digital untuk meningkatkan transparansi dan kolaborasi antara masyarakat desa dengan pihak luar.',
                tech: ['Web', 'Community', 'MSME Hub']
            },
            'web-rtq': {
                title: 'Web-RTQ Ulil Albab',
                image: 'images/Gambar-Web-RTQ.png',
                description: 'Website RTQ Ulil Albab Indramayu dirancang untuk mengelola administrasi dan operasional lembaga secara efisien. Mengelola data santri, pengajar, dan wali murid. Dilengkapi fitur absensi real-time dan manajemen keuangan (KAS) yang transparan untuk meningkatkan kualitas layanan pendidikan.',
                tech: ['Management', 'Education', 'Finance']
            }
        }
    };

    // Modal Logic
    const modal = document.getElementById('portfolioModal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close-modal');

    window.openModal = (id) => {
        const currentLang = localStorage.getItem('preferred-lang') || 'en';
        const data = portfolioData[currentLang][id];
        const techStackTitle = translations[currentLang]['modal-tech-stack'];
        
        if (data) {
            modalBody.innerHTML = `
                <div class="modal-body-content">
                    <img src="${data.image}" alt="${data.title}">
                    <h2>${data.title}</h2>
                    <p>${data.description}</p>
                    <h4 style="margin-top: 1rem; color: var(--secondary-color)">${techStackTitle}:</h4>
                    <div class="tech-stack">
                        ${data.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                    </div>
                </div>
            `;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scroll
        }
    };

    closeBtn.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
});
