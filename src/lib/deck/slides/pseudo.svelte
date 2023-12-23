<script lang="ts">
	import { math } from 'mathlifier';
</script>

<section class="text-left">
	<section>
		<p>6. Pseudo code</p>
	</section>
	<section>
		<p>6. Pseudo code</p>

		<div class="text-2xl">
			<div>
				Objective function {@html math('f(x), x = (x_1, x_2, ..., x_n)^T')}
			</div>
			<div>
				Generate initial population of {@html math('n')} host nests {@html math('x_i')}
			</div>

			<div class="text-pink-500">
				{@html math('While ( t < MaxIteration ) or ( stop criterion)')}
				<div class="ml-16">
					Get a cuckoo randomly <br /> Generate a solution by Lévy flights <br /> Evaluate its
					solution quality or objective value {@html math('f_i')}
					<br />
					Choose a nest among {@html math('n (say, j)')} randomly
					<br />
					<div class="">
						if {@html math('f_i < f_j')}
						<div class="ml-4">
							Replace {@html math('j')} by the new solution {@html math('i')}
						</div>
						end if
					</div>
					A fraction {@html math('P_a')} of worse nests are abandoned
					<br />
					New nests/solutions are built/generated

					<br />
					Keep best solutions (or nests with quality solutions)

					<br />
					Rank the solutions and find the current best

					<br />
					Update {@html math('t = t + 1')}
				</div>

				{@html math('end loop')}
			</div>
		</div>
	</section>
</section>
