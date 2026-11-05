// Bundles src/ into www/game.js (a single classic script so it also runs from file://).
import * as esbuild from 'esbuild';

const watch = process.argv.includes('--watch');
const serve = process.argv.includes('--serve');

const options = {
  entryPoints: ['src/main.js'],
  bundle: true,
  minify: !watch,
  sourcemap: watch ? 'inline' : false,
  format: 'iife',
  target: ['es2020'],
  outfile: 'www/game.js',
  logLevel: 'info',
};

if (watch || serve) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  if (serve) {
    const { port } = await ctx.serve({ servedir: 'www', port: 8080 });
    console.log(`Serving on http://localhost:${port}`);
  }
} else {
  await esbuild.build(options);
}
