// ========================================
// Dweekat Nursing Hub - Main JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Header Scroll Effect
    // ========================================
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ========================================
    // Mobile Menu Toggle
    // ========================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            const icon = this.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // ========================================
    // Smooth Scrolling for Navigation Links
    // ========================================
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                nav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // ========================================
    // CTA Button - Scroll to Register
    // ========================================
    const ctaBtn = document.querySelector('.cta-btn');
    
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const registerSection = document.getElementById('contact');
            if (registerSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = registerSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // ========================================
    // Hero Buttons Smooth Scroll
    // ========================================
    const heroButtons = document.querySelectorAll('.hero-buttons a:not([target="_blank"])');
    
    heroButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // FAQ Accordion
    // ========================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // ========================================
    // Register Form Submission
    // ========================================
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            
            if (fullName && email) {
                // Show success message
                showNotification('شكراً لتسجيلك! سنتواصل معك قريباً', 'success');
                
                // Reset form
                registerForm.reset();
            } else {
                showNotification('يرجى ملء جميع الحقول', 'error');
            }
        });
    }

    // ========================================
    // Newsletter Form Submission
    // ========================================
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value) {
                showNotification('تم الاشتراك في النشرة البريدية بنجاح!', 'success');
                emailInput.value = '';
            } else {
                showNotification('يرجى إدخال بريد إلكتروني صحيح', 'error');
            }
        });
    }

    // ========================================
    // Notification Function
    // ========================================
    function showNotification(message, type = 'success') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#14a085' : '#dc3545'};
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 600;
            animation: slideInRight 0.3s ease;
        `;
        
        // Add to body
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // ========================================
    // Scroll to Top Button
    // ========================================
    const scrollTopBtn = document.getElementById('scrollTop');
    
    if (scrollTopBtn) {
        // Show/hide button on scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        // Scroll to top on click
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========================================
    // Active Navigation on Scroll
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // ========================================
    // Animate Elements on Scroll
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animateElements = document.querySelectorAll('.topic-card, .feature-card, .feature-box, .faq-item, .quote-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // ========================================
    // Stats Counter Animation
    // ========================================
    const statNumbers = document.querySelectorAll('.stat-item h3');
    let hasAnimated = false;
    
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.textContent);
                    let current = 0;
                    const increment = target / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            stat.textContent = target;
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current);
                        }
                    }, 30);
                });
            }
        });
    }, { threshold: 0.5 });
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }

    // ========================================
    // Add Animation Keyframes to Document
    // ========================================
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // ========================================
    // Console Welcome Message
    // ========================================
    console.log('%c🏥 Dweekat Nursing Hub', 'color: #0d7377; font-size: 24px; font-weight: bold;');
    console.log('%cمرحباً بك في منصة Dweekat Nursing Hub التعليمية', 'color: #14a085; font-size: 14px;');
    console.log('%cنسخة 1.0.0 - 2025', 'color: #666; font-size: 12px;');

    // ========================================
    // Prevent Default Form Submission
    // ========================================
    document.querySelectorAll('form').forEach(form => {
        if (!form.id) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
            });
        }
    });

    // ========================================
    // Loading Animation Complete
    // ========================================
    document.body.classList.add('loaded');
});

// ========================================
// Service Worker Registration (Optional)
// ========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment below to enable service worker
        // navigator.serviceWorker.register('/sw.js').then(function(registration) {
        //     console.log('ServiceWorker registration successful');
        // }).catch(function(err) {
        //     console.log('ServiceWorker registration failed: ', err);
        // });
    });
}

function toggleFLUIDS & ELECTROLYTES PART 1() {
    const content = document.getElementById("FLUIDS & ELECTROLYTES PART 1Content");

    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
        content.scrollIntoView({ behavior: "smooth" });
    }
}
<script>
function toggleContent(id) {
  document.querySelectorAll('.topic-details').forEach(el => {
    el.style.display = 'none';
  });

  const target = document.getElementById(id);
  if (target) {
    target.style.display = 'block';
    target.scrollIntoView({ behavior: 'smooth' });
  }
}
    document.addEventListener("DOMContentLoaded", function() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = question.querySelector('i');

    question.addEventListener('click', () => {
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          other.querySelector('.faq-answer').style.maxHeight = null;
          other.querySelector('i').classList.remove('rotate');
        }
      });

      item.classList.toggle('active');

      if (item.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.classList.add('rotate');
      } else {
        answer.style.maxHeight = null;
        icon.classList.remove('rotate');
      }
    });
  });
});

/* ===== MOBILE NAVBAR TOGGLE (SAFE VERSION) ===== */

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const nav = document.getElementById("nav");

  if (!menuBtn || !nav) {
    console.warn("Navbar elements not found");
    return;
  }

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    // تغيير أيقونة الهامبرغر
    const icon = menuBtn.querySelector("i");
    if (icon) {
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    }
  });
});;
document.addEventListener('DOMContentLoaded', function() {
    const ctaContainer = document.getElementById('ctaBtnContainer');

    if (!ctaContainer) return;

    // تابع حالة تسجيل الدخول في Firebase
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            // المستخدم مسجل دخول
            ctaContainer.innerHTML = `
                <a href="dashboard.html" class="btn btn-dashboard" title="لوحة التحكم">
                    <i class="fas fa-user-circle"></i>
                </a>
            `;
        } else {
            // المستخدم غير مسجل دخول
            ctaContainer.innerHTML = `
                <a href="login.html" class="btn btn-primary" id="ctaBtn">ابدأ الآن</a>
            `;
        }
    });
});
function openModal() {
  document.getElementById("syllabusModal").style.display = "block";
}

function closeModal() {
  document.getElementById("syllabusModal").style.display = "none";
}

// تغلق المودال إذا ضغطت في أي مكان خارج الكارد
window.onclick = function(event) {
  const modal = document.getElementById("syllabusModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    // فتح المودال
function openModal() {
  document.getElementById("syllabusModal").style.display = "block";
}

// إغلاق المودال
function closeModal() {
  document.getElementById("syllabusModal").style.display = "none";
}

// إغلاق المودال عند الضغط خارج المحتوى
window.onclick = function(event) {
  const modal = document.getElementById("syllabusModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
</script>
