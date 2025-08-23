// main.js

// Theme toggle
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
themeToggle.addEventListener("click",()=>{
  if(root.getAttribute("data-theme") === "dark"){
    root.removeAttribute("data-theme");
  }else{
    root.setAttribute("data-theme","dark");
  }
});

// Print button functionality
document.getElementById("printBtn").addEventListener("click", () => {
  window.print();
});

// Set year
document.getElementById("year").textContent = new Date().getFullYear();

// Render About
document.getElementById("aboutText").textContent = DATA.about;
DATA.chips.forEach(ch=>{
  let span=document.createElement("span");
  span.className="chip";
  span.textContent=ch;
});

// Render Achievements
DATA.achievements.forEach(a=>{
  let li=document.createElement("li");
  li.className="card";
  li.innerHTML=`<div class="title">${a.title}</div><div class="meta">${a.meta}</div>`;
  document.getElementById("achievementsList").appendChild(li);
});

// Render Education
DATA.education.forEach(e=>{
  let div=document.createElement("div");
  div.className="card";
  div.innerHTML=`<div class="title">${e.title}</div><div class="meta">${e.meta}</div>`;
  document.getElementById("educationList").appendChild(div);
});

// Core Skills
const coreSkillsDiv = document.getElementById("coreSkills");
Object.entries(DATA.coreSkills).forEach(([category, items]) => {
  const sec = document.createElement("div");
  sec.innerHTML = `<div class="title">${category.charAt(0).toUpperCase()+category.slice(1)}</div>`;
  const row = document.createElement("div");
  row.className = "row";
  items.forEach(skill=>{
    const chip=document.createElement("span");
    chip.className="chip";
    chip.textContent=skill;
    row.appendChild(chip);
  });
  sec.appendChild(row);
  coreSkillsDiv.appendChild(sec);
});

// Soft Skills
const softList = document.getElementById("softSkillsList");
DATA.softSkills.forEach(skill=>{
  const chip=document.createElement("span");
  chip.className="chip";
  chip.textContent=skill;
  softList.appendChild(chip);
});

// Render Certifications
DATA.certs.forEach(c=>{
  let li=document.createElement("li");
  li.className="card";
  li.innerHTML=`<div class="title">${c.title}</div><div class="meta">${c.meta}</div>`;
  document.getElementById("certList").appendChild(li);
});

// Render Contact
DATA.contact.forEach(c=>{
  if(c.meta){
    let div=document.createElement("div");
    div.className="card";
    div.innerHTML=`<div class="title">${c.title}</div><div class="meta">${c.meta}</div>`;
    document.getElementById("contactList").appendChild(div);
  }
  if(c.links){
    let wrap=document.createElement("div");
    wrap.className="row";
    c.links.forEach(l=>{
      let a=document.createElement("a");
      a.href=l.url;a.target="_blank";
      a.className="chip";a.textContent=l.name;
      wrap.appendChild(a);
    });
    document.getElementById("contactList").appendChild(wrap);
  }
});
// Render Main Resume Projects
const projectList = document.getElementById("projectList");
DATA.projects.forEach(p=>{
  const card=document.createElement("div");
  card.className="card";
  card.innerHTML=`
    <div class="title"><a href="${p.url}" target="_blank">${p.name}</a></div>
    <div class="meta">${p.blurb}</div>
    <pre style="font-size:13px;color:var(--muted);white-space:pre-wrap;margin-top:6px">${p.details}</pre>
    <div class="row">${p.tech.map(t=>`<span class="chip">${t}</span>`).join("")}</div>
  `;
  projectList.appendChild(card);
});

// Render Extra Projects
const extraList = document.getElementById("extraProjectList");
DATA.extraProjects.forEach(p=>{
  const card=document.createElement("div");
  card.className="card";
  card.innerHTML=`
    <div class="title"><a href="${p.url}" target="_blank">${p.name}</a></div>
    <div class="meta">${p.blurb}</div>
    <pre style="font-size:13px;color:var(--muted);white-space:pre-wrap;margin-top:6px">${p.details}</pre>
    <div class="row">${p.tech.map(t=>`<span class="chip">${t}</span>`).join("")}</div>
  `;
  extraList.appendChild(card);
});
// Simple search
const search=document.getElementById("search");
search.addEventListener("input",()=>{
  let q=search.value.toLowerCase();
  [...projectList.children].forEach(c=>{
    let txt=c.textContent.toLowerCase();
    c.style.display=txt.includes(q)?"block":"none";
  });
});
