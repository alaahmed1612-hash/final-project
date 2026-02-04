// ===== Data =====
const projects = [
    {
        id: 1,
        title: "بناء منزل سكني من طابقين",
        category: "بناء",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
        description: "بناء منزل سكني حديث من طابقين في حي الرمال، يتضمن 4 غرف نوم، صالون، مطبخ، وحديقة خلفية",
        duration: "6 أشهر",
        area: "200 متر مربع",
        client: "عائلة الأحمد",
        features: ["هيكل خرساني مسلح", "عزل حراري ومائي", "واجهة حجرية", "نظام تصريف متطور"]
    },
    {
        id: 2,
        title: "تمديد كهرباء شقة كاملة",
        category: "كهرباء",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
        description: "تمديد كامل للكهرباء في شقة مساحتها 120م² مع تركيب لوحة كهرباء حديثة",
        duration: "أسبوعان",
        area: "120 متر مربع",
        client: "عائلة يوسف",
        features: ["40 نقطة كهرباء", "إضاءة LED موفرة", "لوحة كهرباء ذكية", "نظام حماية"]
    },
    {
        id: 3,
        title: "تركيب نظام سباكة متكامل",
        category: "سباكة",
        image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop",
        description: "تركيب نظام سباكة كامل لمنزل جديد يشمل المياه الساخنة والباردة والصرف الصحي",
        duration: "3 أسابيع",
        area: "150 متر مربع",
        client: "عائلة السعدي",
        features: ["أنابيب PPR ألمانية", "نظام تسخين مركزي", "فلاتر مياه", "ضمان 10 سنوات"]
    },
    {
        id: 4,
        title: "تصنيع وتركيب أبواب خشبية",
        category: "نجارة",
        image: "https://images.unsplash.com/photo-1519155031214-e8d583928bf2?w=800&h=600&fit=crop",
        description: "تصنيع وتركيب 8 أبواب داخلية من خشب الزان الفاخر",
        duration: "شهر واحد",
        area: "8 أبواب",
        client: "فيلا المهندس خالد",
        features: ["خشب زان طبيعي", "عازل للصوت", "تصميم عصري", "مقابض نحاسية"]
    },
    {
        id: 5,
        title: "دهان وتشطيب مبنى تجاري",
        category: "تشطيب",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop",
        description: "أعمال دهان وتشطيب كاملة لمبنى تجاري من 3 طوابق",
        duration: "شهر ونصف",
        area: "500 متر مربع",
        client: "شركة النور",
        features: ["دهانات مقاومة للرطوبة", "ألوان عصرية", "تشطيب سلس", "ضمان 5 سنوات"]
    },
    {
        id: 6,
        title: "بناء جدار استنادي",
        category: "بناء",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
        description: "بناء جدار استنادي بارتفاع 3 أمتار وطول 50 متر",
        duration: "شهران",
        area: "150 متر مربع",
        client: "بلدية غزة",
        features: ["خرسانة مسلحة", "نظام تصريف مياه", "مقاوم للعوامل الجوية", "عمر 50 سنة"]
    },
    {
        id: 7,
        title: "تجديد نظام الكهرباء",
        category: "كهرباء",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
        description: "تجديد كامل للنظام الكهربائي لمنزل قديم مع تركيب طاقة شمسية",
        duration: "3 أسابيع",
        area: "180 متر مربع",
        client: "عائلة النجار",
        features: ["استبدال الأسلاك", "لوحات حديثة", "طاقة شمسية 5KW", "توفير 60%"]
    },
    {
        id: 8,
        title: "تركيب سيراميك فاخر",
        category: "تشطيب",
        image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=600&fit=crop",
        description: "تركيب سيراميك إسباني فاخر في شقة بمساحة 140م²",
        duration: "3 أسابيع",
        area: "140 متر مربع",
        client: "عائلة الحاج محمود",
        features: ["سيراميك إسباني", "تصاميم حديثة", "مقاوم للخدش", "سهل التنظيف"]
    }
];

const artisans = [
    { id: 1, name: "محمد أبو خاطر", specialty: "بناء", experience: 15, rating: 4.9, image: "https://i.pravatar.cc/300?img=1" },
    { id: 2, name: "أحمد الشاعر", specialty: "كهرباء", experience: 12, rating: 4.8, image: "https://i.pravatar.cc/300?img=2" },
    { id: 3, name: "خالد السعدي", specialty: "سباكة", experience: 10, rating: 4.7, image: "https://i.pravatar.cc/300?img=3" },
    { id: 4, name: "يوسف النجار", specialty: "نجارة", experience: 18, rating: 5.0, image: "https://i.pravatar.cc/300?img=4" },
    { id: 5, name: "عمر الدهان", specialty: "تشطيب", experience: 14, rating: 4.9, image: "https://i.pravatar.cc/300?img=5" },
    { id: 6, name: "حسن البنّا", specialty: "بناء", experience: 20, rating: 4.8, image: "https://i.pravatar.cc/300?img=6" },
    { id: 7, name: "سامي الكهربائي", specialty: "كهرباء", experience: 8, rating: 4.6, image: "https://i.pravatar.cc/300?img=7" },
    { id: 8, name: "طارق الخزان", specialty: "سباكة", experience: 11, rating: 4.7, image: "https://i.pravatar.cc/300?img=8" },
    { id: 9, name: "رامي النجار", specialty: "نجارة", experience: 16, rating: 4.9, image: "https://i.pravatar.cc/300?img=9" },
    { id: 10, name: "وليد الفني", specialty: "تشطيب", experience: 9, rating: 4.5, image: "https://i.pravatar.cc/300?img=10" },
    { id: 11, name: "ماجد البنّاء", specialty: "بناء", experience: 13, rating: 4.8, image: "https://i.pravatar.cc/300?img=11" },
    { id: 12, name: "نبيل الضوء", specialty: "كهرباء", experience: 15, rating: 4.9, image: "https://i.pravatar.cc/300?img=12" },
    { id: 13, name: "فادي المياه", specialty: "سباكة", experience: 12, rating: 4.6, image: "https://i.pravatar.cc/300?img=13" },
    { id: 14, name: "إبراهيم الخشب", specialty: "نجارة", experience: 19, rating: 5.0, image: "https://i.pravatar.cc/300?img=14" },
    { id: 15, name: "جمال الألوان", specialty: "تشطيب", experience: 10, rating: 4.7, image: "https://i.pravatar.cc/300?img=15" },
    { id: 16, name: "صالح البناء", specialty: "بناء", experience: 17, rating: 4.9, image: "https://i.pravatar.cc/300?img=16" },
    { id: 17, name: "عادل الطاقة", specialty: "كهرباء", experience: 11, rating: 4.7, image: "https://i.pravatar.cc/300?img=17" },
    { id: 18, name: "منير الصرف", specialty: "سباكة", experience: 14, rating: 4.8, image: "https://i.pravatar.cc/300?img=18" },
    { id: 19, name: "عصام الأثاث", specialty: "نجارة", experience: 13, rating: 4.6, image: "https://i.pravatar.cc/300?img=19" },
    { id: 20, name: "نادر الديكور", specialty: "تشطيب", experience: 16, rating: 4.9, image: "https://i.pravatar.cc/300?img=20" },
    { id: 21, name: "زياد الأساس", specialty: "بناء", experience: 22, rating: 5.0, image: "https://i.pravatar.cc/300?img=21" },
    { id: 22, name: "هاني الإنارة", specialty: "كهرباء", experience: 9, rating: 4.5, image: "https://i.pravatar.cc/300?img=22" },
    { id: 23, name: "كريم الأنابيب", specialty: "سباكة", experience: 15, rating: 4.8, image: "https://i.pravatar.cc/300?img=23" },
    { id: 24, name: "باسل الأبواب", specialty: "نجارة", experience: 12, rating: 4.7, image: "https://i.pravatar.cc/300?img=24" },
    { id: 25, name: "علاء الجبس", specialty: "تشطيب", experience: 11, rating: 4.6, image: "https://i.pravatar.cc/300?img=25" },
    { id: 26, name: "مؤمن الجدران", specialty: "بناء", experience: 14, rating: 4.8, image: "https://i.pravatar.cc/300?img=26" },
    { id: 27, name: "شادي الكابلات", specialty: "كهرباء", experience: 13, rating: 4.9, image: "https://i.pravatar.cc/300?img=27" },
    { id: 28, name: "ياسر الحمامات", specialty: "سباكة", experience: 16, rating: 4.7, image: "https://i.pravatar.cc/300?img=28" },
    { id: 29, name: "عماد المطابخ", specialty: "نجارة", experience: 18, rating: 4.9, image: "https://i.pravatar.cc/300?img=29" },
    { id: 30, name: "أيمن البويات", specialty: "تشطيب", experience: 10, rating: 4.5, image: "https://i.pravatar.cc/300?img=30" }
];

const faqData = [
    {
        question: "كيف يمكنني طلب خدمة من الموقع؟",
        answer: "يمكنك طلب الخدمة بسهولة من خلال تعبئة نموذج التواصل في قسم 'تواصل معنا' مع تحديد نوع الخدمة المطلوبة، وسيتم التواصل معك خلال 24 ساعة."
    },
    {
        question: "ما هي التخصصات المتوفرة لديكم؟",
        answer: "نوفر 5 تخصصات رئيسية: البناء والتشييد، الأعمال الكهربائية، السباكة والصرف الصحي، النجارة والأثاث، والتشطيب والدهان."
    },
    {
        question: "هل تقدمون ضمان على الأعمال؟",
        answer: "نعم، نقدم ضماناً على جميع أعمالنا يتراوح بين 6 أشهر إلى 10 سنوات حسب نوع الخدمة."
    },
    {
        question: "كيف يتم تحديد تكلفة المشروع؟",
        answer: "بعد تلقي طلبك، يقوم فريقنا بزيارة ميدانية مجانية لتقييم المشروع وأخذ القياسات، ثم نقدم عرض سعر تفصيلي."
    },
    {
        question: "ما هي مدة إنجاز المشاريع؟",
        answer: "تختلف المدة حسب حجم ونوع المشروع. المشاريع الصغيرة تستغرق من يوم إلى أسبوع، والمتوسطة 2-3 أسابيع، والكبيرة 4-6 أشهر."
    },
    {
        question: "هل المواد من عندكم أم من العميل؟",
        answer: "نوفر خيارين: الأول أن نقوم بتوفير جميع المواد من مصادر موثوقة، والثاني أن يقوم العميل بتوفير المواد ونحن نقدم خدمة العمالة فقط."
    }
];

let currentPage = 1;
const itemsPerPage = 6;
let filteredArtisans = [...artisans];

// ===== Initialization =====
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initTheme();
    initScrollProgress();
    initBackToTop();
    initPortfolio();
    initArtisans();
    initFAQ();
    initContactForm();
});

// ===== Navigation =====
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        } else {
            navbar.style.boxShadow = '0 4px 8px rgba(0,0,0,0.12)';
        }
    });

    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = navbar.offsetHeight;
                window.scrollTo({
                    top: target.offsetTop - offset,
                    behavior: 'smooth'
                });
                navLinks.classList.remove('active');
            }
        });
    });
}

// ===== Theme Toggle =====
function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const saved = localStorage.getItem('theme') || 'light';
    
    html.setAttribute('data-theme', saved);
    toggle.querySelector('i').className = saved === 'light' ? 'fas fa-moon' : 'fas fa-sun';

    toggle.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const newTheme = current === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        toggle.querySelector('i').className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    });
}

// ===== Scroll Progress =====
function initScrollProgress() {
    const progress = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / height) * 100;
        progress.style.width = scrolled + '%';
    });
}

// ===== Back to Top =====
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== Portfolio =====
function initPortfolio() {
    displayProjects(projects);
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
            
            const grid = document.getElementById('portfolioGrid');
            grid.style.opacity = '0';
            setTimeout(() => {
                displayProjects(filtered);
                grid.style.opacity = '1';
            }, 300);
        });
    });
}

function displayProjects(list) {
    const grid = document.getElementById('portfolioGrid');
    grid.innerHTML = list.map(p => `
        <div class="portfolio-item" onclick="openModal(${p.id})">
            <img src="${p.image}" class="portfolio-image" alt="${p.title}">
            <div class="portfolio-overlay">
                <span class="portfolio-category">${p.category}</span>
                <h3 class="portfolio-title">${p.title}</h3>
            </div>
        </div>
    `).join('');
}

function openModal(id) {
    const project = projects.find(p => p.id === id);
    const modal = document.getElementById('projectModal');
    const body = document.getElementById('modalBody');
    
    body.innerHTML = `
        <img src="${project.image}" class="modal-image" alt="${project.title}">
        <h2>${project.title}</h2>
        <p style="color: var(--text-alt); margin: 1rem 0;">${project.description}</p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin: 1rem 0;">
            <span><i class="fas fa-tag"></i> ${project.category}</span>
            <span><i class="fas fa-clock"></i> ${project.duration}</span>
            <span><i class="fas fa-ruler"></i> ${project.area}</span>
            <span><i class="fas fa-user"></i> ${project.client}</span>
        </div>
        <h3>المميزات:</h3>
        <ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
            ${project.features.map(f => `<li><i class="fas fa-check" style="color: var(--accent);"></i> ${f}</li>`).join('')}
        </ul>
    `;
    
    modal.classList.add('active');
}

document.getElementById('modalClose').addEventListener('click', () => {
    document.getElementById('projectModal').classList.remove('active');
});

document.querySelector('.modal-overlay').addEventListener('click', () => {
    document.getElementById('projectModal').classList.remove('active');
});

// ===== Artisans =====
function initArtisans() {
    displayArtisans(1);
    
    document.getElementById('artisanSearch').addEventListener('input', function() {
        const term = this.value.toLowerCase();
        filteredArtisans = term ? artisans.filter(a => 
            a.name.toLowerCase().includes(term) || a.specialty.toLowerCase().includes(term)
        ) : [...artisans];
        displayArtisans(1);
    });
}

function displayArtisans(page) {
    currentPage = page;
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const list = filteredArtisans.slice(start, end);
    
    const grid = document.getElementById('artisansGrid');
    grid.style.opacity = '0';
    
    setTimeout(() => {
        grid.innerHTML = list.map(a => `
            <div class="artisan-card">
                <img src="${a.image}" class="artisan-image" alt="${a.name}">
                <div class="artisan-info">
                    <h3 class="artisan-name">${a.name}</h3>
                    <span class="artisan-specialty">${a.specialty}</span>
                    <div class="artisan-rating">
                        <div class="stars">${'★'.repeat(Math.floor(a.rating))}${'☆'.repeat(5 - Math.floor(a.rating))}</div>
                        <span class="rating-value">(${a.rating})</span>
                    </div>
                    <p class="artisan-experience">
                        <i class="fas fa-briefcase"></i> ${a.experience} سنوات خبرة
                    </p>
                </div>
            </div>
        `).join('');
        grid.style.opacity = '1';
        updatePagination();
    }, 300);
}

function updatePagination() {
    const total = Math.ceil(filteredArtisans.length / itemsPerPage);
    const pagination = document.getElementById('pagination');
    
    pagination.innerHTML = '';
    
    // Previous
    const prev = document.createElement('button');
    prev.className = 'page-btn';
    prev.innerHTML = '<i class="fas fa-chevron-right"></i>';
    prev.disabled = currentPage === 1;
    prev.onclick = () => currentPage > 1 && displayArtisans(currentPage - 1);
    pagination.appendChild(prev);
    
    // Numbers
    for (let i = 1; i <= total; i++) {
        const btn = document.createElement('button');
        btn.className = 'page-btn' + (i === currentPage ? ' active' : '');
        btn.textContent = i;
        btn.onclick = () => displayArtisans(i);
        pagination.appendChild(btn);
    }
    
    // Next
    const next = document.createElement('button');
    next.className = 'page-btn';
    next.innerHTML = '<i class="fas fa-chevron-left"></i>';
    next.disabled = currentPage === total;
    next.onclick = () => currentPage < total && displayArtisans(currentPage + 1);
    pagination.appendChild(next);
}

// ===== FAQ =====
function initFAQ() {
    const container = document.getElementById('faqContainer');
    container.innerHTML = faqData.map((faq, i) => `
        <div class="faq-item">
            <button class="faq-question">
                <span>${faq.question}</span>
                <i class="fas fa-chevron-down faq-icon"></i>
            </button>
            <div class="faq-answer">
                <div class="faq-answer-content">${faq.answer}</div>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', function() {
            const item = this.parentElement;
            const answer = item.querySelector('.faq-answer');
            const isActive = item.classList.contains('active');
            
            document.querySelectorAll('.faq-item').forEach(i => {
                if (i !== item) {
                    i.classList.remove('active');
                    i.querySelector('.faq-answer').style.maxHeight = '0';
                }
            });
            
            if (isActive) {
                item.classList.remove('active');
                answer.style.maxHeight = '0';
            } else {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
}

// ===== Contact Form =====
function initContactForm() {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        showToast('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
        this.reset();
    });
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
}
