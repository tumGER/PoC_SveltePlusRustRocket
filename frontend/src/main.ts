import "carbon-components-svelte/css/all.css";
import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Unknown'
	}
});

export default app;