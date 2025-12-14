/**
 * Reusable Components (Nav & Footer) - Self Contained (No Tailwind Dependency)
 */

// Function to determine correct path for links
function getLinkPath(anchor) {
    const path = window.location.pathname;
    // Check if we are on the home page (root or index.html)
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
    const blogClass = isBlog ? "active" : "";
    
    const aboutLink = getLinkPath('#about');
    const stackLink = getLinkPath('#stack');
    const projectsLink = getLinkPath('#projects');
    const networkLink = getLinkPath('#network');

    return `
    <nav class="navbar">
        <div class="nav-container">
            <!-- Logo -->
            <a href="index.html" class="nav-logo">
                <span class="text-accent">&lt;</span>BJ.Beier<span class="text-accent">/&gt;</span>
            </a>

            <!-- Desktop Menu -->
            <div class="nav-links hidden-md">
                <a href="${aboutLink}" class="nav-link">About</a>
                <a href="${stackLink}" class="nav-link">The Stack</a>
                <a href="${projectsLink}" class="nav-link">Projects</a>
                <a href="blog.html" class="nav-link ${blogClass}">Insights (Blog)</a>
                <a href="${networkLink}" class="nav-link">The Network</a>
                
                <!-- Dark Mode Toggle (Desktop) -->
                <button id="theme-toggle-desktop" class="theme-toggle" aria-label="Toggle Dark Mode">
                    <i data-lucide="moon" class="hidden-light-mode"></i>
                    <i data-lucide="sun" class="hidden-dark-mode"></i>
                </button>
            </div>

            <!-- Mobile Controls -->
            <div class="flex items-center gap-4 hidden-desktop">
                <button id="theme-toggle-mobile" class="theme-toggle">
                    <i data-lucide="moon" class="hidden-light-mode"></i>
                    <i data-lucide="sun" class="hidden-dark-mode"></i>
                </button>
                <button id="mobile-menu-btn" class="mobile-menu-btn">
                    <i data-lucide="menu"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="mobile-menu hidden">
            <a href="${aboutLink}" class="nav-link">About</a>
            <a href="${stackLink}" class="nav-link">The Stack</a>
            <a href="${projectsLink}" class="nav-link">Projects</a>
            <a href="blog.html" class="nav-link ${blogClass}">Insights (Blog)</a>
            <a href="${networkLink}" class="nav-link">The Network</a>
        </div>
    </nav>
    `;
}

// Footer HTML Generator
function getFooterHTML() {
    return `
    <footer class="site-footer">
        <div class="container">
            <div class="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div class="text-center md:text-left">
                    <a href="index.html" class="nav-logo">
                        <span class="text-accent">&lt;</span>BJ.Beier<span class="text-accent">/&gt;</span>
                    </a>
                    <p class="text-muted text-sm mt-4">Problem Solver. Leader. Knowledge Seeker.</p>
                </div>
                <div class="flex gap-4">
                    <a href="https://linkedin.com/in/bjbeier" class="nav-link" aria-label="LinkedIn">
                        <i data-lucide="linkedin"></i>
                    </a>
                    <a href="https://x.com/bjbeier" class="nav-link" aria-label="X (Twitter)">
                        <i data-lucide="twitter"></i>
                    </a>
                    <a href="https://github.com/bjbeier" class="nav-link" aria-label="GitHub">
                        <i data-lucide="github"></i>
                    </a>
                     <a href="mailto:contact@bjbeier.com" class="nav-link" aria-label="Email">
                        <i data-lucide="mail"></i>
                    </a>
                </div>
            </div>
            <div class="flex flex-col md:flex-row justify-between items-center text-sm text-muted" style="border-top: 1px solid var(--border); padding-top: 2rem;">
                <p>&copy; 2025 BJ Beier. All rights reserved.</p>
                <div class="flex items-center gap-2 mt-4 md:mt-0 font-mono">
                    <span style="color: var(--terminal-green);">➜</span>
                    <span id="dad-joke" class="italic">Loading tech humor...</span>
                </div>
            </div>
        </div>
    </footer>
    `;
}

// Theme Toggle Logic
function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    
    if (isDark) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
    
    updateThemeIcons();
}

function updateThemeIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    
    // Helper to toggle visibility (assuming Lucide icons are SVGs)
    const moons = document.querySelectorAll('[data-lucide="moon"]');
    const suns = document.querySelectorAll('[data-lucide="sun"]');
    
    moons.forEach(el => el.style.display = isDark ? 'none' : 'block');
    suns.forEach(el => el.style.display = isDark ? 'block' : 'none');
}

// Initialization
function initSite() {
    // 1. Initialize Theme from Storage
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // 2. Inject Nav
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = getNavHTML();
        
        // Mobile Menu Logic
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileBtn && mobileMenu) {
            mobileBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Theme Toggle Logic
        const desktopToggle = document.getElementById('theme-toggle-desktop');
        const mobileToggle = document.getElementById('theme-toggle-mobile');
        if (desktopToggle) desktopToggle.addEventListener('click', toggleTheme);
        if (mobileToggle) mobileToggle.addEventListener('click', toggleTheme);
    }

    // 3. Inject Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = getFooterHTML();
        
        // Dad Joke
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

    // 4. Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
        updateThemeIcons(); // Set initial icon state
    }

    // 5. Typewriter
    const twEl = document.getElementById('typewriter');
    if (twEl) initTypewriter(twEl);
}

function initTypewriter(element) {
    const phrases = ["Chief Information Officer.", "Tech Enthusiast.", "Home Automation Tinkerer.", "Problem Solver.", "Family Man."];
    let phraseIndex = 0, charIndex = 0, isDeleting = false, typeSpeed = 100;

    function type() {
        const current = phrases[phraseIndex];
        if (isDeleting) {
            element.textContent = current.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            element.textContent = current.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === current.length) {
            isDeleting = true; typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; typeSpeed = 500;
        }
        setTimeout(type, typeSpeed);
    }
    type();
}

document.addEventListener('DOMContentLoaded', initSite);