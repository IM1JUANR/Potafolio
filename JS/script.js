// main.js - JavaScript optimizado para SEO y rendimiento

document.addEventListener('DOMContentLoaded', function() {
    // Toggle del menú móvil
    const menuToggle = document.querySelector('.alternar-menu');
    const navLinks = document.querySelector('.enlaces-nav');
    
    menuToggle.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        this.setAttribute('aria-expanded', navLinks.style.display === 'flex');
    });
    
    // Cerrar menú al hacer click en un enlace (móvil)
    const navLinksItems = document.querySelectorAll('.enlaces-nav a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
    
    // Navegación suave con fallback
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animación del header al hacer scroll
    let lastScroll = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.backgroundColor = 'rgba(15, 15, 15, 0.98)';
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.backgroundColor = 'rgba(15, 15, 15, 0.9)';
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // Mejora de formulario
    const form = document.querySelector('.formulario-contacto');
    const submitButton = form.querySelector('.boton-enviar');
    const originalButtonText = submitButton.textContent;
    
    form.addEventListener('submit', function(e) {
        // Cambiar texto del botón
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        
        // Si Formspree devuelve error, restaurar el botón
        setTimeout(() => {
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }, 5000);
    });
    
    // Lazy loading de imágenes (fallback para navegadores antiguos)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    if (image.dataset.src) {
                        image.src = image.dataset.src;
                        image.removeAttribute('data-src');
                    }
                    observer.unobserve(image);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(image => imageObserver.observe(image));
    }
    
    // Animación al scroll (aparición de elementos)
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.tarjeta-proyecto');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Inicializar animaciones
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    
    // Accesibilidad: Manejar navegación con teclado
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }
    });
    
    // Optimización de rendimiento: Debounce para resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 768) {
                navLinks.style.display = 'flex';
            } else {
                navLinks.style.display = 'none';
            }
        }, 250);
    });
    
    // Google Analytics Events (si está configurado)
    const trackEvent = (category, action, label) => {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }
    };
    
    // Rastrear clicks en enlaces externos
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.href.includes(window.location.hostname)) {
            link.addEventListener('click', () => {
                trackEvent('Enlace Externo', 'click', link.href);
            });
        }
    });
    
    // Rastrear envío de formulario
    form.addEventListener('submit', () => {
        trackEvent('Formulario', 'enviar', 'Contacto');
    });
    
    // Rastrear clicks en proyectos
    document.querySelectorAll('.enlace-proyecto').forEach(link => {
        link.addEventListener('click', function(e) {
            const projectTitle = this.closest('.tarjeta-proyecto').querySelector('.titulo-proyecto').textContent;
            trackEvent('Proyecto', 'ver', projectTitle);
        });
    });
    
    // Service Worker para PWA (opcional)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => console.log('Service Worker registrado'))
                .catch(error => console.log('Service Worker error:', error));
        });
    }
});

// Función para mejorar el SEO con JavaScript
function updateMetaTags(title, description) {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = description;
    }
}

// Función para structured data dinámico
function addStructuredData(data) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
}

// Detectar modo oscuro/claro del sistema
if (window.matchMedia) {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    darkModeQuery.addEventListener('change', (e) => {
        // Aquí podrías ajustar los colores si quisieras respetar la preferencia del sistema
        console.log('Modo oscuro:', e.matches);
    });
}

// Optimización de imágenes: Cargar versión WebP si es soportado
function supportsWebP() {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('image/webp') === 0;
}

if (supportsWebP()) {
    document.querySelectorAll('img').forEach(img => {
        if (img.src.includes('.jpg') || img.src.includes('.png')) {
            // Si tienes versiones WebP de tus imágenes, puedes cargarlas aquí
            // img.src = img.src.replace(/\.(jpg|png)$/, '.webp');
        }
    });
}