const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('src');

const icons = files.filter(fileName => fileName.endsWith('.tsx')).map(fileName => `src/${fileName}`);

require('esbuild').build({
    entryPoints: icons,
    bundle: true,
    outdir: 'dist',
    external:['react']
  }).catch(() => process.exit(1))