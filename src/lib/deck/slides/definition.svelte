<script lang="ts">
	import Katex from 'svelte-katex';
</script>

<section class="text-left">
	<section data-auto-animate>
		<p>Definition of Cuckoo Search</p>
	</section>

	<section data-auto-animate="">
		<p>Definition of Cuckoo Search</p>

		<div class="text-xl text-pink-500">
			For simplicity in describing the standard CS, here we use the following three idealized rules:
		</div>

		<ul class="text-2xl">
			<li>Each cuckoo lays one egg at a time and dumps it in a randomly chosen nest.</li>
			<li>The best nests with high-quality eggs will be carried over to the next generations.</li>
			<li>
				The number of available host nests is fixed, and the egg laid by a cuckoo is discovered by
				the host bird with a probability <Katex>\rho_a \in (0,1)</Katex>. In this case, the host bird can either get rid
				of the egg or simply abandon the nest and build a completely new nest
			</li>
		</ul>
	</section>
</section>
