        // Animação ao rolar a página
        function animateOnScroll() {
            const elements = document.querySelectorAll('.animate-on-scroll');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementPosition < windowHeight - 100) {
                    element.classList.add('animated');
                }
            });
        }
        
        // Adiciona o evento de scroll
        window.addEventListener('scroll', animateOnScroll);
        
        // Executa uma vez ao carregar a página
        document.addEventListener('DOMContentLoaded', animateOnScroll);
        
        // Suaviza o scroll para links internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Adiciona classe ativa ao item do menu conforme a rolagem
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${current}`) {
                    item.classList.add('active');
                }
            });
        });


        /* Adicionar ScrollSpy Javascript para o script.js */
document.addEventListener('DOMContentLoaded', function() {
    // Ativar animações no scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkScroll() {
      animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('show');
        }
      });
    }
    
    // Executar na carga inicial
    checkScroll();
    
    // Adicionar listener de scroll
    window.addEventListener('scroll', checkScroll);
    
    // ScrollSpy suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Mudar estilo da navbar no scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
      } else {
        navbar.classList.remove('navbar-scrolled');
        navbar.style.backgroundColor = '#ffffff';
      }
    });
  });