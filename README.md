# Privacy Frames applications

Independent applications and hostile fixtures for the Privacy Frames host.

- `apps/notes`: native text editing and application-local persistence.
- `apps/image`: private file input, canvas and pixel transformations.
- `apps/resources`: installed images and native fetch.
- `apps/playground`: editable HTML/CSS/JavaScript with a default attempted disclosure, local preview and output.
- `apps/adversary`: context, storage, network and navigation escape attempts, plus unrestricted controls.
- `apps/ordinary`: conventional precache PWA with no Privacy Frames manifest.

Run `npm run build` to produce the static Pages artifact in `dist/`. The workflow publishes it when `PAGES_ENABLED=true`. The Pages custom domain is configured as `pf-apps.damenh.com` and is awaiting DNS. Keeping it configured ensures the default github.io publisher URL redirects away from the host origin. Do not serve the hostile examples on the host's github.io origin without this domain separation.

The canonical manager is https://pf.damenh.com/. Paste https://pf-notes.damenh.com/, https://pf-image.damenh.com/, https://pf-resources.damenh.com/, https://pf-adversary.damenh.com/, https://pf-adversary.damenh.com/playground/ or https://pf-ordinary.damenh.com/ to install examples. `npm run build:publishers` prepares their separate static custom-domain deployments; the Wrangler configurations are in `deployment/`. There is no application backend. The unrestricted playground comparison is at https://pf-adversary.damenh.com/playground/index.html.

The original packaged examples can also be installed directly from `https://raw.githubusercontent.com/DamenH/privacy-frames-apps/main/apps/notes/` (replace `notes`). These directories contain `app.json`:

```json
{"format":1,"id":"notes","name":"Private notes","entry":"index.html","resources":["index.html","app.css","app.js"]}
```

Resources must permit credential-free cross-origin reads. List every installed resource. HTML uses packaged external scripts and fits the host's restricted browser profile. The publisher and its entire bundle are untrusted by the host.

The ordinary example instead has a standard web manifest and a `sw.js` precache installation. Its original-root URLs are intended for its independent publisher origin. Pitch Training is a separate compatibility target at https://damenh.github.io/pitch-training/; it does not depend on this example convention or a host manifest.

Opening an application directly runs it unrestricted. The adversarial app is intended to attempt operations that the installed runtime must reject. Its local network controls use a loopback diagnostic receiver; when hosted, disclosure attempts target its publisher origin. Use diagnostic values only.
