import { e as escape_html } from "../../chunks/escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function _page($$payload) {
  const instagramUrl = "https://www.instagram.com/sculptstudio.ch/";
  $$payload.out += `<main class="main-content svelte-hvwkpd"><img src="/ss_comingsoon.png" alt="Landingpage" class="comingsoon-img svelte-hvwkpd"></main> <footer class="insta-footer svelte-hvwkpd"><a${attr("href", instagramUrl)} target="_blank" rel="noopener noreferrer"><img src="/instalogobutton.png" alt="Instagram" class="insta-button svelte-hvwkpd"></a></footer>`;
}
export {
  _page as default
};
