

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2._zvgXTJT.js","_app/immutable/chunks/disclose-version.ExatJzHu.js","_app/immutable/chunks/runtime.B0_THo3M.js"];
export const stylesheets = ["_app/immutable/assets/2.DtM-EHK-.css"];
export const fonts = [];
