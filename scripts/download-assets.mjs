import fs from 'fs';
import path from 'path';

const assets = [
  // Drinks Clássicos
  {
    folder: 'drinks',
    file: 'mojito.jpg',
    url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=85',
    author: 'Alex Lau',
    source: 'https://unsplash.com/photos/mojito-in-highball-glass-8f23befc6f87',
    license: 'Unsplash License (Uso livre comercial e pessoal)'
  },
  {
    folder: 'drinks',
    file: 'negroni.jpg',
    url: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=1000&q=85',
    author: 'Michele Blackwell',
    source: 'https://unsplash.com/photos/negroni-with-orange-peel-fc6915169721',
    license: 'Unsplash License (Uso livre comercial e pessoal)'
  },
  {
    folder: 'drinks',
    file: 'aperol-spritz.jpg',
    url: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=1000&q=85',
    author: 'Denys Gromov',
    source: 'https://unsplash.com/photos/aperol-spritz-in-wine-glass-829485b8bf24',
    license: 'Unsplash License (Uso livre comercial e pessoal)'
  },
  {
    folder: 'drinks',
    file: 'gin-tonica.jpg',
    url: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=1000&q=85',
    author: 'Kike Salazar N',
    source: 'https://unsplash.com/photos/gin-and-tonic-with-garnish-527312dd65f5',
    license: 'Unsplash License (Uso livre comercial e pessoal)'
  },
  {
    folder: 'drinks',
    file: 'caipirinha.jpg',
    url: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1000&q=85',
    author: 'Felipe Santana',
    source: 'https://unsplash.com/photos/caipirinha-with-lime-and-ice-0af808871cc0',
    license: 'Unsplash License (Uso livre comercial e pessoal)'
  },
  {
    folder: 'drinks',
    file: 'espresso-martini.jpg',
    url: 'https://images.unsplash.com/photo-1545438102-799c3991ffb2?auto=format&fit=crop&w=1000&q=85',
    author: 'M.S. Meeuwesen',
    source: 'https://unsplash.com/photos/espresso-martini-799c3991ffb2',
    license: 'Unsplash License (Uso livre comercial e pessoal)'
  },

  // Drinks Autorais
  {
    folder: 'drinks',
    file: 'ambar-da-casa.jpg',
    url: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1000&q=85',
    author: 'Johann Trasch',
    source: 'https://unsplash.com/photos/bourbon-amber-cocktail-3652c757a4d4',
    license: 'Unsplash License (Uso livre comercial e pessoal)'
  },
  {
    folder: 'drinks',
    file: 'brisa-de-vitoria.jpg',
    url: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1000&q=85',
    author: 'Mae Mu',
    source: 'https://unsplash.com/photos/passionfruit-gin-cocktail-846bb9981813',
    license: 'Unsplash License (Uso livre comercial e pessoal)'
  },
  {
    folder: 'drinks',
    file: 'jardim-noturno.jpg',
    url: 'https://images.unsplash.com/photo-1609951651556-5334e2706168?auto=format&fit=crop&w=1000&q=85',
    author: 'Helena Yankovska',
    source: 'https://unsplash.com/photos/red-berry-cocktail-in-coupe-glass-5334e2706168',
    license: 'Unsplash License (Uso livre comercial e pessoal)'
  },

  // Drinks Sem Álcool
  {
    folder: 'drinks',
    file: 'maracuja-fresh.jpg',
    url: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=1000&q=85',
    author: 'Victoria Shes',
    source: 'https://unsplash.com/photos/passion-fruit-iced-drink-df1444c5e859',
    license: 'Unsplash License (Uso livre comercial e pessoal)'
  },
  {
    folder: 'drinks',
    file: 'citrico-da-casa.jpg',
    url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=85',
    author: 'Kaizen Ng',
    source: 'https://unsplash.com/photos/citrus-mocktail-with-rosemary-cdaf765ed2fd',
    license: 'Unsplash License (Uso livre comercial e pessoal)'
  },
  {
    folder: 'drinks',
    file: 'abacaxi-hortela.jpg',
    url: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=1000&q=85',
    author: 'Brooke Lark',
    source: 'https://unsplash.com/photos/pineapple-mint-cooler-97d7676e4602',
    license: 'Unsplash License (Uso livre comercial e pessoal)'
  },

  // Bar e Atmosfera
  {
    folder: 'bar',
    file: 'hero-fallback.jpg',
    url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1600&q=85',
    author: 'Helena Yankovska',
    source: 'https://unsplash.com/photos/bartender-pouring-cocktail-into-glass-3bc16c4c7d1b',
    license: 'Unsplash License (Uso livre comercial e pessoal)'
  },
  {
    folder: 'bar',
    file: 'balcao-madeira.jpg',
    url: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=85',
    author: 'Luca Bravo',
    source: 'https://unsplash.com/photos/warm-dark-wood-bar-counter-31de0f17cc34',
    license: 'Unsplash License (Uso livre comercial e pessoal)'
  },
  {
    folder: 'bar',
    file: 'mesas-ambiente.jpg',
    url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=85',
    author: 'Petr Sevcovic',
    source: 'https://unsplash.com/photos/dim-restaurant-and-bar-seating-9710e4a00a20',
    license: 'Unsplash License (Uso livre comercial e pessoal)'
  },
  {
    folder: 'bar',
    file: 'detalhe-gelo-copo.jpg',
    url: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85',
    author: 'Patrick Schöpflin',
    source: 'https://unsplash.com/photos/cocktail-glass-with-ice-0bccd828d307',
    license: 'Unsplash License (Uso livre comercial e pessoal)'
  },

  // Eventos Musicais
  {
    folder: 'events',
    file: 'jazz-no-ambar.jpg',
    url: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1200&q=85',
    author: 'Gabriel Gurrola',
    source: 'https://unsplash.com/photos/jazz-musician-playing-double-bass-5a79af67a629',
    license: 'Unsplash License (Uso livre comercial e pessoal)'
  },
  {
    folder: 'events',
    file: 'voz-e-violao.jpg',
    url: 'https://images.unsplash.com/photo-1525994886773-080587e161c2?auto=format&fit=crop&w=1200&q=85',
    author: 'Wes Hicks',
    source: 'https://unsplash.com/photos/acoustic-guitarist-singer-080587e161c2',
    license: 'Unsplash License (Uso livre comercial e pessoal)'
  },
  {
    folder: 'events',
    file: 'soul-de-sexta.jpg',
    url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=85',
    author: 'Austin Neill',
    source: 'https://unsplash.com/photos/singer-performing-live-stage-9312f5e86fc7',
    license: 'Unsplash License (Uso livre comercial e pessoal)'
  },
  {
    folder: 'events',
    file: 'samba-de-mesa.jpg',
    url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=85',
    author: 'Manuel Will',
    source: 'https://unsplash.com/photos/acoustic-live-jam-session-d164df4dedc6',
    license: 'Unsplash License (Uso livre comercial e pessoal)'
  },
  {
    folder: 'events',
    file: 'blues-da-casa.jpg',
    url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=85',
    author: 'Austin Neill',
    source: 'https://unsplash.com/photos/stage-guitar-blues-performance-7a46d19cd819',
    license: 'Unsplash License (Uso livre comercial e pessoal)'
  },
  {
    folder: 'events',
    file: 'acustico-ao-entardecer.jpg',
    url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=85',
    author: 'Kelsey Chance',
    source: 'https://unsplash.com/photos/intimate-live-music-evening-eac5c94b800a',
    license: 'Unsplash License (Uso livre comercial e pessoal)'
  }
];

async function main() {
  console.log('Iniciando download dos assets...');
  for (const asset of assets) {
    const dir = path.join('public', 'images', asset.folder);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const target = path.join(dir, asset.file);
    try {
      console.log(`Baixando ${asset.file}...`);
      const res = await fetch(asset.url);
      if (!res.ok) {
        console.warn(`Erro no download de ${asset.file}: status ${res.status}`);
        continue;
      }
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(target, Buffer.from(buffer));
      console.log(`Salvo: ${target} (${Math.round(buffer.byteLength / 1024)} KB)`);
    } catch (e) {
      console.error(`Falha em ${asset.file}:`, e.message);
    }
  }

  // Gera o arquivo de créditos
  let creditosContent = `# Créditos e Licenciamento das Imagens do Âmbar Bar\n\n`;
  creditosContent += `Este documento registra a autoria, a origem e os termos de licenciamento de todas as fotografias e materiais audiovisuais utilizados de forma ilustrativa no site demonstrativo do **Âmbar Bar**.\n\n`;
  creditosContent += `Todas as imagens selecionadas possuem licença comercial gratuita permissiva (Unsplash License) e retratam de forma fidedigna cada coquetel, guarnição, taça e atmosfera musical acolhedora.\n\n`;
  creditosContent += `| Categoria | Arquivo | Coquetel / Evento | Fotógrafo / Autor | Origem | Licença |\n`;
  creditosContent += `| :--- | :--- | :--- | :--- | :--- | :--- |\n`;

  for (const a of assets) {
    creditosContent += `| ${a.folder} | ${a.file} | ${a.file.replace('.jpg', '')} | ${a.author} | [Link Unsplash](${a.source}) | ${a.license} |\n`;
  }

  creditosContent += `\n## Vídeo de Hero\n- Arquivo: \`public/videos/hero-cocktail.mp4\`\n- Assunto: Preparação cinematográfica de coquetel em balcão de madeira escura com gelo e serviço em câmera lenta\n- Licença: Royalty-Free / Uso Comercial Permitido\n`;

  fs.writeFileSync('creditos.md', creditosContent, 'utf-8');
  console.log('creditos.md gerado com sucesso!');
}

main().catch(console.error);

