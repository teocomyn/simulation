/**
 * Le site n'affiche pas de tiret cadratin. Le corpus en contient : on les
 * remplace à l'affichage, selon le contexte, sans toucher au sens.
 *
 * - Bloc de code : « — » devient « · », un caractère pour un caractère,
 *   pour garder l'alignement des colonnes.
 * - Cellule de tableau vide (« | — | ») : « · ».
 * - Tiret en tête de cellule (« | — (précision) | ») : supprimé.
 * - Incise ou fin de ligne : « , ».
 */
const FENCE = /^```[^\n]*\n[\s\S]*?^```[^\n]*$/gm;

function stripOutsideCode(text: string) {
  return text
    .replace(/\|([ \t]*)—([ \t]*)(?=\|)/g, "|$1·$2")
    .replace(/\|([ \t]*)—[ \t]+/g, "|$1")
    .replace(/\s*—\s*/g, ", ")
    .replace(/—/g, ", ");
}

export function stripEmDashes(markdown: string) {
  let out = "";
  let last = 0;
  for (const match of markdown.matchAll(FENCE)) {
    out += stripOutsideCode(markdown.slice(last, match.index));
    out += match[0].replace(/—/g, "·");
    last = match.index + match[0].length;
  }
  return out + stripOutsideCode(markdown.slice(last));
}
