# Short, Self Contained, Correct (Compilable), Example (SSCCE) for Flagsmith issue

Steps to reproduce
```bash
npm install
npm start
```
then you'll see thhis warning:
```bash
WARNING in ./node_modules/flagsmith/index.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from '/####/utils/angular-fetch.ts' file: Error: ENOENT: no such file or directory, open '/####/utils/angular-fetch.ts'

WARNING in ./node_modules/flagsmith/index.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from '/####//utils/async-storage.ts' file: Error: ENOENT: no such file or directory, open '/####/utils/async-storage.ts'

WARNING in ./node_modules/flagsmith/index.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from '/####/utils/get-changes.ts' file: Error: ENOENT: no such file or directory, open '/####/utils/get-changes.ts'

WARNING in ./node_modules/flagsmith/index.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from '/####/utils/set-dynatrace-value.ts' file: Error: ENOENT: no such file or directory, open '/####/utils/set-dynatrace-value.ts'
```
