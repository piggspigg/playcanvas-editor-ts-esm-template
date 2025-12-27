This is an ESM extension of the official **playcanvas-editor-ts-template**. All credit to the original creators.

This template demonstrates a working TypeScript + ESM workflow compatible with PlayCanvas ESM Scripts.

## Additions to the original template

- Upgraded PlayCanvas from 1.73.5 to 2.14.3
- Upgraded TypeScript from 5.5.4 to 5.9.3
- Migrated TypeScript build output from AMD to native ES modules (ESM)
- Configured TypeScript to preserve ES module import/export syntax verbatim
- Added a post-build step to rename emitted files from `.js` to `.mjs` (including sourcemaps)
- Converted the sample `helloWorld` script to a **PlayCanvas ESM Script**

Original repository: [playcanvas-editor-ts-template][playcanvas-editor-ts-template]

**Important**: Please follow the installation instructions from the original README (included below).

-------------------------------------------- Original README ------------------------------------------------

A simple TypeScript template for PlayCanvas that can also sync with your playcanvas.com project.

## Quick start

This template uses the [playcanvas-sync][playcanvas-sync] tool to push files to your PlayCanvas project and requires a little bit of setup with `.pcconfig` and `pcconfig.json`.

1. Copy `.pcconfig` to your home directory (Mac: `/Users/<username>`, Windows: `C:/User/<username>`). `.pcconfig` has been preconfigured to look for a config file in the current working directory which will be this project's folder ([more information here][playcanvas-sync-pcconfig-instructions]).
2. Make a copy of `pcconfig.template.json` and rename to `pcconfig.json`. This is needed to configure playcanvas-sync to upload the file to correct PlayCanvas Editor project.
3. Complete/Update the following properties in `pcconfig.json` using these [instructions][playcanvas-sync-pcconfig-instructions]:
    - `PLAYCANVAS_API_KEY` - [Instructions to create an API key][create-api-key]
    - `PLAYCANVAS_PROJECT_ID` - [Where to find the project ID][find-project-id]
    - `PLAYCANVAS_BRANCH_ID` [Where to find the branch ID][find-branch-id]
4. On the command line, run `npm install` to install the packages.
5. On the command line, run the npm script `npm run watch-push:debug`.
6. This will watch the `src` folder for changes, compile into `build/main.bundle.js` and if successful, upload to your playcanvas.com project.

Please note, if you are adding new `pc.ScriptTypes` or attributes to existing ones, you will need to manually parse the script after upload in the PlayCanvas Editor. [Please read this][playcanvas-sync-new-script-types] for more details.

## npm scripts

| Command                      | Description                                                                                  |
|------------------------------|----------------------------------------------------------------------------------------------|
| `npm run build:debug`        | Compiles tsc files using debug config and builds to `build/main.bundle.js`                   |
| `npm run build:release`      | Compiles tsc files using release config and builds to `build/main.bundle.js`                 |
| `npm run watch:debug`        | Compiles tsc files using debug config on code changes and builds to `build/main.bundle.js`   |
| `npm run watch:release`      | Compiles tsc files using release config on code changes and builds to `build/main.bundle.js` |
| `npm run push`               | Uploads `build/main.bundle.js` to playcanvas.com project                                     |
| `npm run build-push:debug`   | Performs `build:debug` and `push` npm scripts                                                |
| `npm run build-push:release` | Performs `build:release` and `push` npm scripts                                              |
| `npm run watch-push:debug`   | Performs `watch:debug` and `push` npm scripts                                                |
| `npm run watch-push:release` | Performs `watch:release` and `push` npm scripts                                              |

[playcanvas-editor-ts-template]: https://github.com/playcanvas/playcanvas-editor-ts-template
[playcanvas-sync]: https://github.com/playcanvas/playcanvas-sync
[playcanvas-sync-pcconfig-instructions]: https://github.com/playcanvas/playcanvas-sync#config-variables
[playcanvas-sync-new-script-types]: https://github.com/playcanvas/playcanvas-sync#adding-new-files-as-script-components
[create-api-key]: https://developer.playcanvas.com/user-manual/api/#authorization
[find-project-id]: https://developer.playcanvas.com/user-manual/api/#project_id
[find-branch-id]: https://developer.playcanvas.com/user-manual/api/#branch_id
