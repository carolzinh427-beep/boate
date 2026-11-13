import fs from 'fs';
import path from 'path';

function findFiles(dir, exts = ['.ts', '.tsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(findFiles(fullPath, exts));
    } else if (exts.includes(path.extname(fullPath))) {
      results.push(fullPath);
    }
  }
  return results;
}

const files = findFiles('src');
console.log(`Verificando ${files.length} arquivos em src...`);

let issues = 0;
// Regular expressions to detect:
// 1. Emojis
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
// 2. Dashes / travessões in string literals: — or – or " - "
const dashRegex = /[—–]/;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf-8');
  const lines = content.split('\n');

  lines.forEach((line, idx) => {
    // Ignore import lines and comments
    if (line.trim().startsWith('import ') || line.trim().startsWith('//') || line.trim().startsWith('*')) return;

    if (emojiRegex.test(line)) {
      console.warn(`[EMOJI] ${file}:${idx + 1}: ${line.trim()}`);
      issues++;
    }

    if (dashRegex.test(line)) {
      console.warn(`[TRAVESSÃO] ${file}:${idx + 1}: ${line.trim()}`);
      issues++;
    }
  });
}

console.log(`Verificação concluída com ${issues} problemas encontrados.`);

