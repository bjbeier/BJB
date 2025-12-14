/**
 * Tailwind Configuration
 * Must be defined before Tailwind CDN loads, or accessible when it initializes.
 */
window.tailwindConfig = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            colors: {
                brand: {
                    dark: '#0f172a', // Slate 900
                    accent: '#38bdf8', // Sky 400
                    terminal: '#22c55e', // Green 500
                }
            }
        }
    }
};

/**
 * Reusable Components (Nav & Footer)
 */

// Function to determine correct path for links
function getLinkPath(anchor) {
    const path = window.location.pathname;
    const isHome = path.endsWith('index.html') || path.endsWith('/') || path.length < 2; // Simple check for root
    
    if (isHome) {
        return anchor;
    } else {
        return `index.html${anchor}`;
    }
}

// Navigation HTML Generator
function getNavHTML() {
    const isBlog = window.location.pathname.includes('blog.html');
    const blogLinkClass = isBlog ? "text-brand-accent" : "hover:text-brand-accent";
    
    // Adjust links based on current page
    const aboutLink = getLinkPath('#about');
    const stackLink = getLinkPath('#stack');
    const projectsLink = getLinkPath('#projects');
    const networkLink = getLinkPath('#network');

    return `
    <nav class="fixed w-full z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex-shrink-0">
                    <a href="index.html" class="font-mono text-xl font-bold text-white tracking-tighter">
                        <span class="text-brand-accent">&lt;</span>BJ.Beier<span class="text-brand-accent">/&gt;</span>
                    </a>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-8">
                        <a href="${aboutLink}" class="text-gray-300 hover:text-brand-accent transition-colors px-3 py-2 rounded-md text-sm font-medium">About</a>
                        <a href="${stackLink}" class="text-gray-300 hover:text-brand-accent transition-colors px-3 py-2 rounded-md text-sm font-medium">The Stack</a>
                        <a href="${projectsLink}" class="text-gray-300 hover:text-brand-accent transition-colors px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                        <a href="blog.html" class="${blogLinkClass} text-gray-300 transition-colors px-3 py-2 rounded-md text-sm font-medium">Insights (Blog)</a>
                        <a href="${networkLink}" class="text-gray-300 hover:text-brand-accent transition-colors px-3 py-2 rounded-md text-sm font-medium">The Network</a>
                    </div>
                </div>
                <!-- Mobile menu button -->
                <div class="-mr-2 flex md:hidden">
                    <button id="mobile-menu-btn" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
                        <i data-lucide="menu"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu (Hidden by default) -->
        <div class="hidden md:hidden bg-brand-dark border-b border-white/10" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="${aboutLink}" class="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">About</a>
                <a href="${stackLink}" class="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">The Stack</a>
                <a href="${projectsLink}" class="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Projects</a>
                <a href="blog.html" class="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Insights (Blog)</a>
                <a href="${networkLink}" class="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">The Network</a>
            </div>
        </div>
    </nav>
    `;
}

// Footer HTML Generator
function getFooterHTML() {
    return `
    <footer class="bg-brand-dark border-t border-slate-800 pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between items-center mb-8">
                <div class="mb-6 md:mb-0">
                    <a href="index.html" class="font-mono text-xl font-bold text-white tracking-tighter">
                        <span class="text-brand-accent">&lt;</span>BJ.Beier<span class="text-brand-accent">/&gt;</span>
                    </a>
                    <p class="text-slate-500 text-sm mt-2">Problem Solver. Leader. Knowledge Seeker.</p>
                </div>
                <div class="flex space-x-6">
                    <a href="https://linkedin.com/in/bjbeier" class="text-slate-400 hover:text-white transition-colors">
                        <span class="sr-only">LinkedIn</span>
                        <i data-lucide="linkedin" class="w-6 h-6"></i>
                    </a>
                    <a href="https://x.com/bjbeier" class="text-slate-400 hover:text-white transition-colors">
                        <span class="sr-only">X (Twitter)</span>
                        <i data-lucide="twitter" class="w-6 h-6"></i>
                    </a>
                    <a href="https://github.com/bjbeier" class="text-slate-400 hover:text-white transition-colors">
                        <span class="sr-only">GitHub</span>
                        <i data-lucide="github" class="w-6 h-6"></i>
                    </a>
                     <a href="mailto:contact@bjbeier.com" class="text-slate-400 hover:text-white transition-colors">
                        <span class="sr-only">Email</span>
                        <i data-lucide="mail" class="w-6 h-6"></i>
                    </a>
                </div>
            </div>
            <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
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

// Function to inject components and initialize interactive elements
function initSite() {
    // 1. Inject Nav
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = getNavHTML();
        
        // Initialize Mobile Menu Logic (must be done after injection)
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }

    // 2. Inject Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = getFooterHTML();
        
        // Initialize Dad Joke (must be done after injection)
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

    // 3. Initialize Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 4. Initialize Typewriter (Only if element exists)
    const typeWriterElement = document.getElementById('typewriter');
    if (typeWriterElement) {
        initTypewriter(typeWriterElement);
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

// Run initialization when DOM is ready
document.addEventListener('DOMContentLoaded', initSite);