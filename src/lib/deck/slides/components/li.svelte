<script lang="ts">
	export let index: string;
	export let text: string;
</script>

<div class="flex items-baseline gap-2 pl-10" data-id={index}>
	<div class="text-3xl text-pink-400">{index}.</div>
	<div class="text-2xl">{text}</div>
</div>
