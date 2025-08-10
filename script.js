/* script.js */
(function(){
  // small DOM helpers
  const $ = (s)=>document.querySelector(s);
  const $$ = (s)=>document.querySelectorAll(s);

  // set year
  document.getElementById('year').textContent = new Date().getFullYear();

  // tiny typewriter for role
  const roles = ['Virtual Assistant & Freelancer','Inbox Management','Research & Admin','Social Media VA'];
  let rIdx=0,charIdx=0,forward=true;
  const roleEl = document.getElementById('role');
  function tick(){
    const txt = roles[rIdx];
    if(forward){
      charIdx++;
      roleEl.textContent = txt.slice(0,charIdx);
      if(charIdx===txt.length){forward=false;setTimeout(tick,900);return}
    } else {
      charIdx--;
      roleEl.textContent = txt.slice(0,charIdx);
      if(charIdx===0){forward=true;rIdx=(rIdx+1)%roles.length}
    }
    setTimeout(tick,80);
  }
  tick();

  // animate elements on scroll
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('in');
    });
  },{threshold:.12});
  document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el));

  // Book a call (example) -> opens calendar link
  document.getElementById('bookBtn').addEventListener('click',()=>{
    window.open('https://calendly.com/your-calendly','_blank');
  });

  // attach fade-up to panels
  ['.about-text','.skills-card','.service','.work-item','.quote','.contact-form','.contact-info'].forEach(sel=>{
    document.querySelectorAll(sel).forEach(el=>el.classList.add('fade-up'));
  });

  // progressive image load fallback: replace unsplash placeholders with real images if available
  // (leave as-is for demo)

})();