<script lang="ts">
	export let id: string | null = null;
	export let lines: string | null = null;
	export let noescape = false;
</script>

<pre data-id={id}>
    <code data-trim data-line-numbers={lines} data-noescape={noescape}>
        <slot />
</code>
</pre>
