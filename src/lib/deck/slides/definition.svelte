<script lang="ts">
	import { display, math } from 'mathlifier';
</script>

<section class="text-left">
	<section data-auto-animate>
		<p>4. Definition of Cuckoo Search</p>
	</section>

	<section data-auto-animate="">
		<p>4. Definition of Cuckoo Search</p>

		<div class="text-xl text-pink-500">
			For simplicity in describing the standard CS, here we use the following three idealized rules:
		</div>

		<ul class="text-2xl">
			<li>Each cuckoo lays one egg at a time and dumps it in a randomly chosen nest.</li>
			<li>The best nests with high-quality eggs will be carried over to the next generations.</li>
			<li>
				The number of available host nests is fixed, and the egg laid by a cuckoo is discovered by
				the host bird with a probability {@html math('P_a\\in (0,1)')}. In this case, the host bird
				can either get rid of the egg or simply abandon the nest and build a completely new nest.
			</li>
		</ul>
	</section>

	<section data-auto-animate>
		<p>4. Definition of Cuckoo Search</p>

		<p>Steps</p>

		<ul>
			<li>Lev`y flights - generate a set of solution</li>
			<li>Replace some nests with new solutions</li>
			<li>Greedy selection strategy</li>
		</ul>
	</section>

	<section data-auto-animate>
		<p>4. Definition of Cuckoo Search</p>

		<p class=" text-pink-500">Lev`y flights</p>
		<p class="text-2xl">It's used to generate a new candidate solution (eggs):</p>
	</section>

	<section data-auto-animate>
		<p>4. Definition of Cuckoo Search</p>

		<p class=" text-pink-500">Lev`y flights</p>
		<p class="text-2xl">It's used to generate a new candidate solution (eggs):</p>

		<div data-id="lambda">{@html display('x_i^{t+1} = x_i^t + \\alpha\\otimes L(s,\\lambda)')}</div>
	</section>

	<section data-auto-animate>
		<p>4. Definition of Cuckoo Search</p>

		<p class=" text-pink-500">Lev`y flights</p>
		<p class="text-2xl">It's used to generate a new candidate solution (eggs):</p>

		<div data-id="lambda">{@html display('x_i^{t+1} = x_i^t + \\alpha\\otimes L(s,\\lambda)')}</div>
		<div class="text-2xl">Where {@html math('L(s,\\lambda)')} is the Levy flight</div>
		<div class="text-2xl">and {@html math('\\alpha \\gt 0')} is a step size scaling factor</div>
	</section>

	<section data-auto-animate>
		<p>4. Definition of Cuckoo Search</p>

		<p class=" text-pink-500">Lev`y flights</p>

		<div class="text-2xl">
			{@html math(
				'L(s,\\lambda) = \\frac{\\lambda\\Gamma(\\lambda)\\sin(\\frac{\\pi\\lambda}{2})}{\\pi} \\frac{1}{s^{1+\\lambda}}'
			)}
		</div>

		<div class="text-2xl">
			For most of the problems we can set {@html math('\\lambda = 1.5')} and {@html math(
				'\\alpha = 0.01'
			)}
		</div>
	</section>

	<section data-auto-animate>
		<p>4. Definition of Cuckoo Search</p>

		<p class=" text-pink-500">Replace some nests with new solutions</p>

		<div data-id="dasd" class="text-2xl">
			the host bird can throw the egg away or abandon the nest and build a completely new nest with {@html math(
				'P_a\\in (0,1)'
			)}
		</div>
	</section>

	<section data-auto-animate>
		<p>4. Definition of Cuckoo Search</p>

		<p class=" text-pink-500">Replace some nests with new solutions</p>

		<div data-id="dasd" class="text-2xl">
			the host bird can throw the egg away or abandon the nest and build a completely new nest with {@html math(
				'P_a\\in (0,1)'
			)}
		</div>

		<br />
		<div class="text-xl">
			Choose randomly {@html math('r \\in (0,1)')}
			<br />
			if {@html math('r < P_a')} then do replace new nest with old nest<br />
		</div>
	</section>
</section>
