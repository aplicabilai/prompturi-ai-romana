// Generează README.md, meserii/*.md și prompturi.json din exportul public al site-ului aplicabilai.ro.
// Rulare: node scripts/genereaza.mjs [cale-sau-url]   (implicit https://aplicabilai.ro/date/prompturi.json)
import { writeFileSync, mkdirSync, readFileSync, readdirSync, unlinkSync } from "node:fs";

const SURSA = process.argv[2] || "https://aplicabilai.ro/date/prompturi.json";
const date = SURSA.startsWith("http")
  ? await (await fetch(SURSA, { headers: { "user-agent": "prompturi-ai-romana-sync" } })).json()
  : JSON.parse(readFileSync(SURSA, "utf8"));

if (!Array.isArray(date.meserii) || date.meserii.length === 0) throw new Error("Export gol sau invalid");

const UTM = (url, unde) => `${url}${url.includes("?") ? "&" : "?"}utm_source=github&utm_medium=referral&utm_campaign=${unde}`;
const meserii = [...date.meserii].sort((a, b) => a.meserie_titlu.localeCompare(b.meserie_titlu, "ro"));
const mic = (t) => (/^[A-ZĂÂÎȘȚ]{2}/.test(t) ? t : t.charAt(0).toLowerCase() + t.slice(1));
// data ultimei adăugări (nu data exportului), ca să nu apară commit-uri zilnice fără conținut nou
const actualizat = meserii.flatMap((m) => m.prompturi.map((p) => p.adaugat || "")).sort().pop() || date.generat;
const total = meserii.reduce((s, m) => s + m.prompturi.length, 0);
// ancorele GitHub: litere mici, se păstrează diacriticele, se scot semnele de punctuație, spațiile devin cratime
const ancora = (t) => t.toLowerCase().replace(/[^\p{L}\p{N} _-]/gu, "").replace(/ /g, "-");
const cod = (t) => "```text\n" + t.trim() + "\n```";

mkdirSync("meserii", { recursive: true });
for (const f of readdirSync("meserii")) if (f.endsWith(".md")) unlinkSync(`meserii/${f}`);

for (const m of meserii) {
  const categorii = [...new Set(m.prompturi.map((p) => p.categorie))];
  let md = `# Prompturi ChatGPT, Claude și Gemini pentru ${mic(m.meserie_titlu)}, în română\n\n`;
  md += `${m.prompturi.length} prompturi gata de copiat pentru ${mic(m.meserie_titlu)}, scrise direct în română. `;
  md += `Merg în ChatGPT, Claude, Gemini, Grok sau Copilot. Înlocuiește ce e între [paranteze drepte] cu situația ta.\n\n`;
  md += `> Versiunea cu buton de copiere, actualizată zilnic: [aplicabilai.ro/prompturi/${m.meserie}/](${UTM(m.url, "prompturi-" + m.meserie)})\n\n`;
  md += `## Cuprins\n\n` + categorii.map((c) => `- [${c}](#${ancora(c)})`).join("\n") + "\n\n";
  for (const c of categorii) {
    md += `## ${c}\n\n`;
    for (const p of m.prompturi.filter((x) => x.categorie === c)) {
      md += `### ${p.titlu}\n\n${cod(p.prompt)}\n\n`;
      if (p.cand) md += `- **Când îl folosești:** ${p.cand}\n`;
      if (p.verifici) md += `- **Ce verifici:** ${p.verifici}\n`;
      if (p.nu_pui) md += `- **Ce nu pui în chat:** ${p.nu_pui}\n`;
      md += "\n";
    }
  }
  md += `---\n\n[← Toate meseriile](../README.md) · Licență [CC BY 4.0](../LICENSE) · Sursa: [aplicabilai.ro](${UTM("https://aplicabilai.ro/", "prompturi-" + m.meserie)}), cursuri gratuite de AI pe meserii\n`;
  writeFileSync(`meserii/${m.meserie}.md`, md);
}

let r = `# Prompturi ChatGPT, Claude și Gemini în română, pe meserii\n\n`;
r += `**${total} de prompturi gratuite, scrise direct în limba română**, pentru ${meserii.length} meserii: `;
r += meserii.map((m) => mic(m.meserie_titlu)).join(", ") + ". ";
r += `Le copiezi, înlocuiești ce e între [paranteze drepte] și le lipești în ChatGPT, Claude, Gemini, Grok sau Copilot.\n\n`;
r += `Fiecare prompt vine cu trei lucruri pe care le uită majoritatea colecțiilor: **când** îl folosești, **ce verifici** în răspuns și **ce date nu pui** în chat.\n\n`;
r += `> Colecția e extrasă automat, zilnic, de pe [aplicabilai.ro](${UTM("https://aplicabilai.ro/", "prompturi-readme")}), un site cu cursuri gratuite de inteligență artificială pe meserii, în română, fără cont.\n\n`;
r += `## Meserii\n\n| Meserie | Prompturi | Categorii |\n|---|---:|---|\n`;
for (const m of meserii) {
  r += `| ${m.icon || ""} [${m.meserie_titlu}](meserii/${m.meserie}.md) | ${m.prompturi.length} | ${[...new Set(m.prompturi.map((p) => p.categorie))].join(", ")} |\n`;
}
r += `\n## Exemplu\n\n`;
const ex = meserii.find((m) => m.meserie === "profesori") || meserii[0];
const p0 = ex.prompturi[0];
r += `**${ex.meserie_titlu} — ${p0.titlu}**\n\n${cod(p0.prompt)}\n\n`;
if (p0.verifici) r += `Ce verifici: ${p0.verifici}\n\n`;
r += `## Cum scrii un prompt bun, pe scurt\n\n`;
r += `1. **Spune cine ești și pentru cine e textul** („sunt profesoară de clasa a V-a, scriu pentru părinți”).\n`;
r += `2. **Dă contextul concret**, nu „scrie un mesaj”, ci ce s-a întâmplat și ce vrei să obții.\n`;
r += `3. **Cere forma**: lungime, ton, listă sau tabel.\n`;
r += `4. **Verifică tot ce e cifră, lege, dată sau nume.** Asistenții AI greșesc sigur pe ei ([halucinații](${UTM("https://aplicabilai.ro/glosar/halucinatie/", "prompturi-readme")})).\n`;
r += `5. **Nu pui date personale**: CNP, adrese, diagnostice, date de clienți. Le poți ascunde întâi cu [unealta gratuită de ascuns date](${UTM("https://aplicabilai.ro/unelte/ascunde-date-personale/", "prompturi-readme")}).\n\n`;
r += `Mai mult: [Ce este un prompt](${UTM("https://aplicabilai.ro/glosar/prompt/", "prompturi-readme")}) · [Generator de prompt pe meserie](${UTM("https://aplicabilai.ro/unelte/generator-prompt/", "prompturi-readme")}) · [ChatGPT în română, pas cu pas](${UTM("https://aplicabilai.ro/ghid/chatgpt-in-romana/", "prompturi-readme")}) · [Claude sau ChatGPT?](${UTM("https://aplicabilai.ro/ghid/claude-sau-chatgpt/", "prompturi-readme")})\n\n`;
r += `## Date deschise\n\n[\`prompturi.json\`](prompturi.json) are toate prompturile, structurate (meserie, categorie, titlu, prompt, când, ce verifici, ce nu pui, data adăugării). Le poți folosi în aplicații, cursuri sau materiale proprii, cu atribuire.\n\n`;
r += `## Contribuie\n\nAi un prompt care chiar te ajută la muncă? Deschide un [issue](https://github.com/aplicabilai/prompturi-ai-romana/issues/new) cu meseria, promptul și ce verifici în răspuns. Detalii în [CONTRIBUTING.md](CONTRIBUTING.md).\n\n`;
r += `## Licență\n\n[CC BY 4.0](LICENSE): poți copia, adapta și folosi prompturile, inclusiv comercial, cu condiția să menționezi sursa: **aplicabilai.ro**.\n\n`;
r += `Vezi și: [awesome-ai-romana](https://github.com/aplicabilai/awesome-ai-romana), resurse gratuite despre AI în limba română.\n\n`;
r += `<sub>Ultimul prompt adăugat: ${actualizat}.</sub>\n`;
writeFileSync("README.md", r);

writeFileSync("prompturi.json", JSON.stringify({ sursa: date.sursa, licenta: date.licenta, actualizat, meserii }, null, 2) + "\n");
console.log(`OK: ${meserii.length} meserii, ${total} prompturi`);
