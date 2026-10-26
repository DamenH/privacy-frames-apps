# Privacy Frames runtime deployment

This repository publishes the trusted runtime at https://pf-apps.damenh.com/ using
GitHub Pages. Implementation, examples, tests and documentation live together in
[DamenH/privacy-frames](https://github.com/DamenH/privacy-frames).

The workflow reads the full tested source revision from `runtime-host-ref.txt`,
builds that revision, and publishes only `dist-runtime/`. It never publishes
unrestricted demo applications onto the runtime origin.

The library is hosted separately at https://pf.damenh.com/. The two GitHub Pages
sites have separate custom domains and browser origins. This repository exists
only because each Pages site has its own deployment repository.
