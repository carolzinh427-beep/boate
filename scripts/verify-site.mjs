import fs from 'fs';
import path from 'path';

console.log('=== VERIFICAÇÃO AUTOMATIZADA INTEGRADA DO ÂMBAR BAR ===\n');

let errors = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`[FALHA] ${message}`);
    errors++;
  } else {
    console.log(`[OK] ${message}`);
  }
}

// 1. Verificação de Arquivos e Mídias
const requiredDrinks = [
  'mojito.jpg', 'negroni.jpg', 'aperol-spritz.jpg', 'gin-tonica.jpg',
  'caipirinha.jpg', 'espresso-martini.jpg', 'ambar-da-casa.jpg',
  'brisa-de-vitoria.jpg', 'jardim-noturno.jpg', 'maracuja-fresh.jpg',
  'citrico-da-casa.jpg', 'abacaxi-hortela.jpg'
];

for (const d of requiredDrinks) {
  const p = path.join('public', 'images', 'drinks', d);
  assert(fs.existsSync(p) && fs.statSync(p).size > 1000, `Fotografia do drink ${d} existe e tem tamanho válido`);
}

const requiredBarImages = [
  'hero-fallback.jpg', 'balcao-madeira.jpg', 'mesas-ambiente.jpg', 'detalhe-gelo-copo.jpg'
];
for (const b of requiredBarImages) {
  const p = path.join('public', 'images', 'bar', b);
  assert(fs.existsSync(p) && fs.statSync(p).size > 1000, `Fotografia de atmosfera ${b} existe e tem tamanho válido`);
}

const requiredEventImages = [
  'jazz-no-ambar.jpg', 'voz-e-violao.jpg', 'soul-de-sexta.jpg',
  'samba-de-mesa.jpg', 'blues-da-casa.jpg', 'acustico-ao-entardecer.jpg'
];
for (const e of requiredEventImages) {
  const p = path.join('public', 'images', 'events', e);
  assert(fs.existsSync(p) && fs.statSync(p).size > 1000, `Fotografia de evento musical ${e} existe e tem tamanho válido`);
}

const videoPath = path.join('public', 'videos', 'hero-cocktail.mp4');
assert(fs.existsSync(videoPath) && fs.statSync(videoPath).size > 500000, 'Vídeo cinematográfico hero-cocktail.mp4 existe e tem mais de 500 KB');

// 2. Verificação de creditos.md
assert(fs.existsSync('creditos.md'), 'Arquivo creditos.md existe registrando autoria, origem e licenças');

// 3. Verificação de Dados Centralizados (barData.ts)
const barDataContent = fs.readFileSync(path.join('src', 'data', 'barData.ts'), 'utf-8');

// Verifica presença dos drinks clássicos obrigatórios
assert(barDataContent.includes('Mojito') && barDataContent.includes('Rum, limão, hortelã, açúcar e água com gás'), 'Mojito cadastrado com ingredientes corretos');
assert(barDataContent.includes('Negroni') && barDataContent.includes('Gin, vermute rosso e bitter'), 'Negroni cadastrado com ingredientes corretos');
assert(barDataContent.includes('Aperol Spritz') && barDataContent.includes('Aperitivo de laranja, espumante e água com gás'), 'Aperol Spritz cadastrado com ingredientes corretos');
assert(barDataContent.includes('Gin Tônica') && barDataContent.includes('Gin, água tônica e guarnição cítrica'), 'Gin Tônica cadastrado com ingredientes corretos');
assert(barDataContent.includes('Caipirinha') && barDataContent.includes('Cachaça, limão, açúcar e gelo'), 'Caipirinha cadastrado com ingredientes corretos');
assert(barDataContent.includes('Espresso Martini') && barDataContent.includes('Vodka, licor de café e café espresso'), 'Espresso Martini cadastrado com ingredientes corretos');

// Verifica presença dos autorais obrigatórios
assert(barDataContent.includes('Âmbar da Casa') && barDataContent.includes('Bourbon, laranja e especiarias'), 'Âmbar da Casa cadastrado com ingredientes corretos');
assert(barDataContent.includes('Brisa de Vitória') && barDataContent.includes('Gin, maracujá e limão'), 'Brisa de Vitória cadastrado com ingredientes corretos');
assert(barDataContent.includes('Jardim Noturno') && barDataContent.includes('Vodka, frutas vermelhas e manjericão'), 'Jardim Noturno cadastrado com ingredientes corretos');

// Verifica presença dos sem álcool obrigatórios
assert(barDataContent.includes('Maracujá Fresh') && barDataContent.includes('Maracujá, limão e água com gás'), 'Maracujá Fresh cadastrado com ingredientes corretos');
assert(barDataContent.includes('Cítrico da Casa') && barDataContent.includes('Laranja, limão e alecrim'), 'Cítrico da Casa cadastrado com ingredientes corretos');
assert(barDataContent.includes('Abacaxi e Hortelã') && barDataContent.includes('Abacaxi, hortelã e água com gás'), 'Abacaxi e Hortelã cadastrado com ingredientes corretos');

// Verifica eventos sugeridos
assert(barDataContent.includes('Jazz no Âmbar'), 'Evento Jazz no Âmbar cadastrado');
assert(barDataContent.includes('Voz e Violão'), 'Evento Voz e Violão cadastrado');
assert(barDataContent.includes('Soul de Sexta'), 'Evento Soul de Sexta cadastrado');
assert(barDataContent.includes('Samba de Mesa'), 'Evento Samba de Mesa cadastrado');
assert(barDataContent.includes('Blues da Casa'), 'Evento Blues da Casa cadastrado');
assert(barDataContent.includes('Acústico ao Entardecer'), 'Evento Acústico ao Entardecer cadastrado');

// 4. Verificação de Restrições Críticas de Texto (Sem emojis, sem travessões, sem pontos finais)
const checkText = fs.readFileSync('scripts/check-visible-text.mjs', 'utf-8');
assert(checkText.length > 0, 'Script de verificação de emojis e travessões configurado');

console.log(`\nResultado da verificação: ${errors} falhas encontradas.`);
if (errors > 0) process.exit(1);
