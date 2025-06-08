export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","instalogo.png","instalogobutton.png","ss_comingsoon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BcjZWgMg.js","app":"_app/immutable/entry/app.DerlFdhc.js","imports":["_app/immutable/entry/start.BcjZWgMg.js","_app/immutable/chunks/entry.BWcTUiOw.js","_app/immutable/chunks/runtime.B0_THo3M.js","_app/immutable/entry/app.DerlFdhc.js","_app/immutable/chunks/runtime.B0_THo3M.js","_app/immutable/chunks/store.DqLaGGER.js","_app/immutable/chunks/disclose-version.ExatJzHu.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
