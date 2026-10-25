# Privacy Frames applications

Independent applications and hostile fixtures for the Privacy Frames host.

- `apps/notes`: native text editing and application-local persistence.
- `apps/image`: private file input, canvas and pixel transformations.
- `apps/resources`: installed images and native fetch.
- `apps/playground`: editable HTML/CSS/JavaScript with a default attempted disclosure, local preview and output.
- `apps/adversary`: context, storage, network and navigation escape attempts, plus unrestricted controls.

Run `npm run build` to produce the static Pages artifact in `dist/`. The workflow publishes it when `PAGES_ENABLED=true`. The Pages custom domain is configured as `pf-apps.damenh.com` and is awaiting DNS. Keeping it configured ensures the default github.io publisher URL redirects away from the host origin. Do not serve the hostile examples on the host's github.io origin without this domain separation.

Install directly from the public repository by pasting `https://raw.githubusercontent.com/DamenH/privacy-frames-apps/main/apps/notes/` into the host (replace `notes` with another application directory). This works without the custom domain. The existing unrestricted playground comparison is at https://pf-adversary.damenh.com/playground/. Each directory contains `app.json` with this format:

```json
{"format":1,"id":"notes","name":"Private notes","entry":"index.html","resources":["index.html","app.css","app.js"]}
```

Resources must permit credential-free cross-origin reads. List every installed resource. HTML uses packaged external scripts and fits the host's restricted browser profile. The publisher and its entire bundle are untrusted by the host.

Opening an application directly runs it unrestricted. The adversarial app is intended to attempt operations that the installed runtime must reject. Its local network controls use a loopback diagnostic receiver; when hosted, disclosure attempts target its publisher origin. Use diagnostic values only.
