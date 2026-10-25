import {cp,mkdir,writeFile} from 'node:fs/promises';
const dist=new URL('./dist/',import.meta.url);await mkdir(dist,{recursive:true});
await cp(new URL('./apps/',import.meta.url),dist,{recursive:true});
await writeFile(new URL('.nojekyll',dist),'');
await writeFile(new URL('CNAME',dist),'pf-apps.damenh.com\n');
await writeFile(new URL('index.html',dist),'<!doctype html><meta charset="utf-8"><title>Privacy Frames test applications</title><style>body{font:16px system-ui;background:#111316;color:#ddd;padding:40px}a{color:#a9c7ff}li{margin:14px 0}</style><h1>Test applications</h1><ul>'+['notes','image','resources','adversary','playground'].map(id=>`<li><a href="./${id}/">${id}</a> · <a href="./${id}/app.json">manifest</a></li>`).join('')+'</ul>');
console.log('Built independent applications in dist/.');
