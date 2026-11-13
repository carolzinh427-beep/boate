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
let issues = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  const lines = content.split('\n');

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    // Ignore imports, comments, css classes, script tags, file names
    if (trimmed.startsWith('import ') || trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) return;
    if (trimmed.includes('http://') || trimmed.includes('https://') || trimmed.includes('.jpg') || trimmed.includes('.mp4') || trimmed.includes('.svg') || trimmed.includes('.png')) return;
    if (trimmed.startsWith('const ') && (trimmed.includes('url') || trimmed.includes('Regex') || trimmed.includes('payload'))) return;
    if (trimmed.includes('console.')) return;

    // Check for string literals ending with a period before closing quote: e.g. '...texto.'
    const stringLiteralMatch = /['"`]([^'"`]*[a-zA-ZÀ-ÿ0-9])\.['"`]/.exec(line);
    if (stringLiteralMatch) {
      // Check if it's not a code thing like class or property
      const str = stringLiteralMatch[1];
      if (!str.includes('http') && !str.includes('/') && !str.includes('.ts') && !str.includes('.js')) {
        issues.push({ file, line: idx + 1, text: trimmed, reason: 'String literal termina com ponto final' });
      }
    }

    // Check for JSX text ending with a period before tag: e.g. >Texto.< or > Texto. <
    const jsxMatch = />\s*([^<>{}]*[a-zA-ZÀ-ÿ0-9])\.\s*</.exec(line);
    if (jsxMatch) {
      issues.push({ file, line: idx + 1, text: trimmed, reason: 'Texto JSX termina com ponto final' });
    }
  });
});

console.log(`Verificação de pontos finais: ${issues.length} ocorrências encontradas`);
issues.forEach(i => console.log(`${i.file}:${i.line}: [${i.reason}] ${i.text}`));

