# Privacy Frames runtime deployment

This repository publishes the trusted runtime at https://apps.pf.damenh.com/ using
GitHub Pages. Implementation, tests and documentation live in
[privacy-frames/host](https://github.com/privacy-frames/host).

The workflow reads the full tested source revision from `runtime-host-ref.txt`,
builds that revision, and publishes only `dist-runtime/`. It never publishes
unrestricted demo applications onto the runtime origin.

The manager is hosted separately at https://pf.damenh.com/. The two GitHub Pages
sites have separate custom domains and browser origins. This repository exists
only because each Pages site has its own deployment repository.
