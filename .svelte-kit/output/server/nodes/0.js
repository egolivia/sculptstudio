

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DSyDlVNu.js","_app/immutable/chunks/disclose-version.ExatJzHu.js","_app/immutable/chunks/runtime.B0_THo3M.js"];
export const stylesheets = [];
export const fonts = [];
