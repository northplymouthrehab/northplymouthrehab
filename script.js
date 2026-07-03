const navToggle=document.querySelector('[data-nav-toggle]');
const nav=document.querySelector('[data-nav]');
if(navToggle&&nav){navToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');navToggle.setAttribute('aria-expanded',open?'true':'false')})}
const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
