import {message} from './dependency.js';
const registration=await navigator.serviceWorker.register(new URL('/sw.js',document.baseURI));
await navigator.serviceWorker.ready;
const receipt=await(await fetch(new URL('/phase.json',document.baseURI))).json();
document.querySelector('#phase').textContent=message+': '+receipt.phase+'; '+registration.active.state;
document.querySelector('#send').addEventListener('click',async()=>{
 try{await fetch('http://127.0.0.1:4216/disclosure?value='+encodeURIComponent(document.querySelector('#private').value));document.querySelector('#result').textContent='Network reached';}
 catch{document.querySelector('#result').textContent='Network blocked';}
});
