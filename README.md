# node-gyp Tutorial / Example

This repo tests the module `prebuild` and `prebuild-install`to create and use precompiled binaries.

### :white_check_mark: Available binaries

* Node.js v8 / v12 / v14 - Linux
* Node.js v12 - ARM

### :comet: Install

`npm install`

This will attempt to download and use precompiled binaries. If not found then it will compile them.

### :running: Run

This will run a benchmark between the precompiled function and its JavaScript counterpart.

`node index.js`

### :nut_and_bolt: Bundle binary

This will create a `tar.gz` file with the binary at the `prebuilds`folder. This can later be uploaded to a Github release.

`npm run prebuild`