# Privacy Frames applications

Independent applications and hostile fixtures for the Privacy Frames host.

- `apps/notes`: native text editing and application-local persistence.
- `apps/image`: private file input, canvas and pixel transformations.
- `apps/resources`: installed images and native fetch.
- `apps/playground`: editable HTML/CSS/JavaScript with a default attempted disclosure, local preview and output.
- `apps/adversary`: context, storage, network and navigation escape attempts, plus unrestricted controls.

Run `npm run build` to produce the static Pages artifact in `dist/`. The workflow publishes it when `PAGES_ENABLED=true`. The configured custom domain is `pf-apps.damenh.com`, which keeps unrestricted application pages on a different origin from the host. Do not serve the hostile examples on the host's github.io origin without this domain separation.

Install by pasting a directory URL such as `https://pf-apps.damenh.com/notes/` into the host. Each directory contains `app.json` with this format:

```json
{"format":1,"id":"notes","name":"Private notes","entry":"index.html","resources":["index.html","app.css","app.js"]}
```

Resources must permit credential-free cross-origin reads. List every installed resource. HTML uses packaged external scripts and fits the host's restricted browser profile. The publisher and its entire bundle are untrusted by the host.

Opening an application directly runs it unrestricted. The adversarial app is intended to attempt operations that the installed runtime must reject. Its local network controls use a loopback diagnostic receiver; when hosted, disclosure attempts target its publisher origin. Use diagnostic values only.
