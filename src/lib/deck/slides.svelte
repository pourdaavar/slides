<script lang="ts">
	import { onMount } from 'svelte';

	import Reveal from 'reveal.js';
	import Markdown from 'reveal.js/plugin/markdown/markdown';
	import Highlight from 'reveal.js/plugin/highlight/highlight';
	import Notes from 'reveal.js/plugin/notes/notes';

	import Presentation from './presentation.svelte';

	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/white-contrast.css';
	import 'reveal.js/plugin/highlight/monokai.css';

	onMount(() => {
		const deck = new Reveal({
			autoAnimateEasing: 'ease',
			autoAnimateDuration: 1,
			hash: true,
			controls: true,
			progress: true
		});

		deck.initialize({
			plugins: [Markdown, Highlight, Notes]
		});
	});
</script>

<div class="reveal">
	<div class="slides">
		<Presentation />
	</div>
</div>
