'use strict';
const note=document.querySelector('#note'),status=document.querySelector('#status');
if(window.privacyHost)document.querySelector('#mode').textContent='Installed · network isolated';
note.value=localStorage.getItem('note')||'';
function count(){document.querySelector('#word-count').textContent=`${note.value.trim()?note.value.trim().split(/\s+/).length:0} words`;}
note.addEventListener('input',count);count();
document.querySelector('#save').addEventListener('click',()=>{localStorage.setItem('note',note.value);status.textContent='Saved locally. Nothing sent.'});
document.querySelector('#clear').addEventListener('click',()=>{note.value='';localStorage.removeItem('note');count();status.textContent='Note cleared.'});
