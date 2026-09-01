// 1. Initialize Lucide Icons
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}

// 2. Typewriter Effect Setup
if (document.getElementById('typewriter')) {
  new Typewriter('#typewriter', {
    strings: [
      'Computer Science Graduate',
      'NIT AndhraPradesh 2022 - 2026',
      'Software Engineer',
      'Data Analyst'
    ],
    autoStart: true,
    loop: true,
    deleteSpeed: 30,
    delay: 50,
  });
}

// 3. Tab Switching Engine
function switchTab(tabId) {
  // Hide all tab contents
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  
  // Reset all navigation button styles
  document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.className = "nav-tab px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 flex items-center gap-2 transition-all cursor-pointer";
  });

  // Activate selected tab content
  const targetContent = document.getElementById(`tab-${tabId}`);
  if (targetContent) targetContent.classList.add('active');

  // Highlight active navigation button
  const targetBtn = document.getElementById(`tab-btn-${tabId}`);
  if (targetBtn) {
    targetBtn.className = "nav-tab px-3 py-2 rounded-lg text-brand-400 bg-brand-500/10 flex items-center gap-2 transition-all font-semibold cursor-pointer";
  }

  // Ensure Lucide icons re-render on tab switch
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// 4. Interactive Starfield + Low-Opacity Drifting Tech Symbols
const canvas = document.getElementById('starfield');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let elements = [];
  const techSymbols = ['</>', '{ }', '>_', '10', '01', '//', 'λ', '[ ]', '&&', '!=', '0x1F'];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    elements = [];
    
    // Create soft ambient stars
    for (let i = 0; i < 90; i++) {
      elements.push({
        type: 'star',
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        alpha: Math.random(),
        speed: Math.random() * 0.015 + 0.005
      });
    }

    // Create subtle drifting low-opacity tech symbols
    for (let i = 0; i < 28; i++) {
      elements.push({
        type: 'symbol',
        text: techSymbols[Math.floor(Math.random() * techSymbols.length)],
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.floor(Math.random() * 8) + 12, // Font size 12-20px
        alpha: Math.random() * 0.12 + 0.03,      // Very subtle low opacity (3% to 15%)
        speedY: (Math.random() * 0.2 + 0.05) * -1, // Slow upwards float
      });
    }
  }

  function animateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    elements.forEach(el => {
      if (el.type === 'star') {
        el.alpha += el.speed;
        if (el.alpha > 1 || el.alpha < 0) el.speed = -el.speed;
        ctx.fillStyle = `rgba(52, 211, 153, ${Math.abs(el.alpha)})`;
        ctx.beginPath();
        ctx.arc(el.x, el.y, el.radius, 0, Math.PI * 2);
        ctx.fill();
      } else if (el.type === 'symbol') {
        el.y += el.speedY;
        if (el.y < -20) {
          el.y = canvas.height + 20;
          el.x = Math.random() * canvas.width;
        }
        ctx.font = `${el.size}px monospace`;
        ctx.fillStyle = `rgba(16, 185, 129, ${el.alpha})`;
        ctx.fillText(el.text, el.x, el.y);
      }
    });

    requestAnimationFrame(animateCanvas);
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  animateCanvas();
}
// Scroll to Top Smooth Function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}