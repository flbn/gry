import { Language, minify } from "https://deno.land/x/minifier@v1.1.1/mod.ts";
const decoder = new TextDecoder("utf-8");
const encoder = new TextEncoder();
const files = Deno.readDirSync('css');
let css = '';

for (const file of files) {
  if (file.name === 'gry.css') continue;
  console.log(`📖 reading ${file.name}`);
  css += decoder.decode(Deno.readFileSync(`./css/${file.name}`));
  console.log(`👍 added ${file.name}`);
  console.log();
}

console.log('📦 shrinking and packaging CSS...');
const minifiedCSS = encoder.encode(minify(Language.CSS, css));
Deno.writeFile('./gry.min.css', minifiedCSS);
console.log('👍 shrunk and packaged CSS to file: gry.min.css');