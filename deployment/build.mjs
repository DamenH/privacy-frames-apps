import {cp,mkdir,writeFile} from 'node:fs/promises';
const root=new URL('../',import.meta.url),out=new URL('../out/',import.meta.url);
for(const id of ['notes','image','resources','adversary','ordinary']){
 const directory=new URL(id+'/',out);await mkdir(directory,{recursive:true});await cp(new URL('apps/'+id+'/',root),directory,{recursive:true});
 if(id==='adversary')await cp(new URL('apps/playground/',root),new URL('playground/',directory),{recursive:true});
 await writeFile(new URL('_headers',directory),'/*\n  Access-Control-Allow-Origin: *\n  X-Content-Type-Options: nosniff\n  Cache-Control: no-cache\n');
 await writeFile(new URL('_redirects',directory),'/ /index.html 200\n'+(id==='adversary'?'/playground/ /playground/index.html 200\n':''));
 await writeFile(new URL(id+'.jsonc',import.meta.url),JSON.stringify({name:'privacy-frames-'+id,account_id:'80fb1dead4566be76066353bdf826b7e',compatibility_date:'2026-10-25',workers_dev:false,preview_urls:false,assets:{directory:'../out/'+id,html_handling:'none',not_found_handling:'none'},routes:[{pattern:'pf-'+id+'.damenh.com',custom_domain:true}]},null,2)+'\n');
}
console.log('Prepared independent static publishers.');
