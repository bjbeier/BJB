/**
 * Reusable Components (Nav & Footer)
 */

// Function to determine correct path for links
function getLinkPath(anchor) {
    const path = window.location.pathname;
    const isHome = path.endsWith('index.html') || path.endsWith('/') || path.length < 2; 
    
    if (isHome) {
        return anchor;
    } else {
        return `index.html${anchor}`;
    }
}

// Navigation HTML Generator
function getNavHTML() {
    const isBlog = window.location.pathname.includes('blog.html');
    const blogLinkClass = isBlog ? "text-brand-accent font-bold" : "text-slate-600 dark:text-slate-300 hover:text-brand-accent";
    
    const aboutLink = getLinkPath('#about');
    const stackLink = getLinkPath('#stack');
    const projectsLink = getLinkPath('#projects');
    const networkLink = getLinkPath('#network');
    
    // Standard link styles
    const linkBase = "transition-colors px-3 py-2 rounded-md text-sm font-medium";
    const navLink = `text-slate-600 dark:text-slate-300 hover:text-brand-accent ${linkBase}`;

    return `
    <nav class="fixed w-full z-50 bg-white/90 dark:bg-brand-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <div class="flex-shrink-0">
                    <a href="index.html" class="font-mono text-xl font-bold text-slate-900 dark:text-white tracking-tighter">
                        <span class="text-brand-accent">&lt;</span>BJ.Beier<span class="text-brand-accent">/&gt;</span>
                    </a>
                </div>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center gap-4">
                    <div class="ml-10 flex items-baseline space-x-4">
                        <a href="${aboutLink}" class="${navLink}">About</a>
                        <a href="${stackLink}" class="${navLink}">The Stack</a>
                        <a href="${projectsLink}" class="${navLink}">Projects</a>
                        <a href="blog.html" class="${blogLinkClass} ${linkBase}">Insights (Blog)</a>
                        <a href="${networkLink}" class="${navLink}">The Network</a>
                    </div>
                    
                    <!-- Dark Mode Toggle (Desktop) -->
                    <button id="theme-toggle-desktop" class="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-all ml-4" aria-label="Toggle Dark Mode">
                        <i data-lucide="moon" class="hidden dark:block w-5 h-5"></i>
                        <i data-lucide="sun" class="block dark:hidden w-5 h-5"></i>
                    </button>
                </div>

                <!-- Mobile Menu Button & Toggle -->
                <div class="flex items-center md:hidden gap-2">
                    <!-- Dark Mode Toggle (Mobile) -->
                    <button id="theme-toggle-mobile" class="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-all">
                        <i data-lucide="moon" class="hidden dark:block w-5 h-5"></i>
                        <i data-lucide="sun" class="block dark:hidden w-5 h-5"></i>
                    </button>
                    
                    <button id="mobile-menu-btn" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-slate-400 hover:text-brand-accent hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
                        <i data-lucide="menu"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu (Hidden by default) -->
        <div class="hidden md:hidden bg-white dark:bg-brand-dark border-b border-slate-200 dark:border-white/10" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="${aboutLink}" class="text-slate-600 dark:text-slate-300 hover:text-brand-accent hover:bg-slate-50 dark:hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium">About</a>
                <a href="${stackLink}" class="text-slate-600 dark:text-slate-300 hover:text-brand-accent hover:bg-slate-50 dark:hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium">The Stack</a>
                <a href="${projectsLink}" class="text-slate-600 dark:text-slate-300 hover:text-brand-accent hover:bg-slate-50 dark:hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium">Projects</a>
                <a href="blog.html" class="text-slate-600 dark:text-slate-300 hover:text-brand-accent hover:bg-slate-50 dark:hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium">Insights (Blog)</a>
                <a href="${networkLink}" class="text-slate-600 dark:text-slate-300 hover:text-brand-accent hover:bg-slate-50 dark:hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium">The Network</a>
            </div>
        </div>
    </nav>
    `;
}

// Footer HTML Generator
function getFooterHTML() {
    return `
    <footer class="bg-slate-50 dark:bg-brand-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between items-center mb-8">
                <div class="mb-6 md:mb-0">
                    <a href="index.html" class="font-mono text-xl font-bold text-slate-900 dark:text-white tracking-tighter">
                        <span class="text-brand-accent">&lt;</span>BJ.Beier<span class="text-brand-accent">/&gt;</span>
                    </a>
                    <p class="text-slate-500 text-sm mt-2">Problem Solver. Leader. Knowledge Seeker.</p>
                </div>
                <div class="flex space-x-6">
                    <a href="https://linkedin.com/in/bjbeier" class="text-slate-400 hover:text-brand-accent dark:hover:text-white transition-colors">
                        <span class="sr-only">LinkedIn</span>
                        <i data-lucide="linkedin" class="w-6 h-6"></i>
                    </a>
                    <a href="https://x.com/bjbeier" class="text-slate-400 hover:text-brand-accent dark:hover:text-white transition-colors">
                        <span class="sr-only">X (Twitter)</span>
                        <i data-lucide="twitter" class="w-6 h-6"></i>
                    </a>
                    <a href="https://github.com/bjbeier" class="text-slate-400 hover:text-brand-accent dark:hover:text-white transition-colors">
                        <span class="sr-only">GitHub</span>
                        <i data-lucide="github" class="w-6 h-6"></i>
                    </a>
                     <a href="mailto:contact@bjbeier.com" class="text-slate-400 hover:text-brand-accent dark:hover:text-white transition-colors">
                        <span class="sr-only">Email</span>
                        <i data-lucide="mail" class="w-6 h-6"></i>
                    </a>
                </div>
            </div>
            <div class="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
                <p>&copy; 2025 BJ Beier. All rights reserved.</p>
                <!-- Dad Joke Container -->
                <div class="mt-4 md:mt-0 font-mono text-xs flex items-center">
                    <span class="text-brand-terminal mr-2">➜</span>
                    <span id="dad-joke" class="italic">Loading tech humor...</span>
                </div>
            </div>
        </div>
    </footer>
    `;
}

// Logic to toggle theme
function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
    // Re-render icons to ensure color change is applied correctly
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Function to inject components and initialize interactive elements
function initSite() {
    // 0. Initialize Theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // 1. Inject Nav
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = getNavHTML();
        
        // Initialize Mobile Menu
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Initialize Theme Toggles (Desktop & Mobile)
        const desktopToggle = document.getElementById('theme-toggle-desktop');
        const mobileToggle = document.getElementById('theme-toggle-mobile');
        
        if (desktopToggle) desktopToggle.addEventListener('click', toggleTheme);
        if (mobileToggle) mobileToggle.addEventListener('click', toggleTheme);
    }

    // 2. Inject Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = getFooterHTML();
        
        // Initialize Dad Joke
        const jokeElement = document.getElementById('dad-joke');
        if (jokeElement) {
            const jokes = [
                "Why do programmers prefer dark mode? Because light attracts bugs.",
                "I would tell you a UDP joke, but you might not get it.",
                "There are 10 types of people in the world: those who understand binary, and those who don't.",
                "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
                "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
                "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'",
                "My password is the last 8 digits of Pi.",
                "I'm not lazy, I'm just in energy saving mode."
            ];
            jokeElement.textContent = jokes[Math.floor(Math.random() * jokes.length)];
        }
    }

    // 3. Initialize Typewriter
    const typeWriterElement = document.getElementById('typewriter');
    if (typeWriterElement) {
        initTypewriter(typeWriterElement);
    }

    // 4. Initialize Icons (MUST run after DOM content injection)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Typewriter Logic
function initTypewriter(element) {
    const phrases = [
        "Chief Information Officer.",
        "Tech Enthusiast.",
        "Home Automation Tinkerer.",
        "Problem Solver.",
        "Family Man."
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            element.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; 
        } else {
            element.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100; 
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }
    
    type();
}

document.addEventListener('DOMContentLoaded', initSite);