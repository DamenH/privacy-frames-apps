'use strict';
if(window.privacyHost)document.querySelector('#mode').textContent='Installed · network isolated';
async function load(){try{const article=await(await fetch('./article.json')).json();document.querySelector('#article-title').textContent=article.title;document.querySelector('#article').textContent=article.text;document.querySelector('#status').textContent='Article loaded using native fetch.';}catch{document.querySelector('#status').textContent='Article unavailable.'}}
document.querySelector('#load').addEventListener('click',load);
document.querySelector('#external').addEventListener('click',async()=>{try{await fetch('https://example.com/not-installed');document.querySelector('#status').textContent='Unexpected network response.'}catch{document.querySelector('#status').textContent='Uninstalled URL blocked.'}});load();
