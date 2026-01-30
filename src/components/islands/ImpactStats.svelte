<script lang="ts">
	import { onMount } from 'svelte';
	
	interface Stat {
		value: number;
		suffix: string;
		label: string;
		prefix?: string;
	}
	
	export let stats: Stat[] = [
		{ value: 500, suffix: '+', label: 'Global Events Delivered', prefix: '' },
		{ value: 120, suffix: 'dB', label: 'Crystal Clear Sound', prefix: '' },
		{ value: 25, suffix: '+', label: 'International Markets', prefix: '' }
	];
	
	let isVisible = false;
	let countedValues: number[] = stats.map(() => 0);
	
	function easeOutQuad(t: number): number {
		return t * (2 - t);
	}
	
	function countUp(index: number, target: number, duration: number = 2000) {
		const startTime = Date.now();
		const startValue = 0;
		
		function update() {
			const elapsed = Date.now() - startTime;
			const progress = Math.min(elapsed / duration, 1);
			const easedProgress = easeOutQuad(progress);
			
			countedValues[index] = Math.floor(startValue + (target - startValue) * easedProgress);
			
			if (progress < 1) {
				requestAnimationFrame(update);
			} else {
				countedValues[index] = target;
			}
		}
		
		update();
	}
	
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !isVisible) {
						isVisible = true;
						stats.forEach((stat, index) => {
							setTimeout(() => {
								countUp(index, stat.value, 2000 + index * 200);
							}, index * 100);
						});
						observer.disconnect();
					}
				});
			},
			{ threshold: 0.3 }
		);
		
		const element = document.querySelector('.impact-stats');
		if (element) {
			observer.observe(element);
		}
		
		return () => observer.disconnect();
	});
</script>

<section class="impact-stats section">
	<div class="container">
		<div class="impact-stats__grid">
			{#each stats as stat, index}
				<div class="impact-stats__item reveal" class:active={isVisible}>
					<div class="impact-stats__value">
						<span class="impact-stats__number">
							{stat.prefix || ''}{countedValues[index]}{stat.suffix}
						</span>
					</div>
					<div class="impact-stats__label">{stat.label}</div>
					<div class="impact-stats__divider"></div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.impact-stats {
		background: linear-gradient(
			to bottom,
			rgba(10, 10, 10, 0.95) 0%,
			rgba(10, 10, 10, 1) 50%,
			rgba(10, 10, 10, 0.95) 100%
		);
		position: relative;
		overflow: hidden;
	}
	
	.impact-stats::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(
			to right,
			transparent 0%,
			var(--sonic-electric) 50%,
			transparent 100%
		);
		opacity: 0.3;
	}
	
	.impact-stats__grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--space-12);
		padding: var(--space-8) 0;
	}
	
	.impact-stats__item {
		text-align: center;
		padding: var(--space-6);
		position: relative;
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.8s var(--ease-fader),
		            transform 0.8s var(--ease-fader);
	}
	
	.impact-stats__item.active {
		opacity: 1;
		transform: translateY(0);
	}
	
	.impact-stats__value {
		margin-bottom: var(--space-4);
	}
	
	.impact-stats__number {
		font-family: var(--font-display);
		font-size: clamp(3rem, 6vw, 4.5rem);
		line-height: 1;
		letter-spacing: var(--tracking-tight-1);
		background: linear-gradient(
			135deg,
			var(--lucid-gold) 0%,
			var(--sonic-electric) 100%
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		display: inline-block;
		position: relative;
	}
	
	.impact-stats__number::after {
		content: '';
		position: absolute;
		bottom: -8px;
		left: 50%;
		transform: translateX(-50%);
		width: 60%;
		height: 2px;
		background: linear-gradient(
			to right,
			transparent 0%,
			var(--sonic-electric) 50%,
			transparent 100%
		);
		opacity: 0.5;
	}
	
	.impact-stats__label {
		font-family: var(--font-body);
		font-size: var(--text-body-lg);
		line-height: var(--leading-body-lg);
		color: var(--white-80);
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: var(--tracking-wide);
		font-size: var(--text-mono);
	}
	
	.impact-stats__divider {
		margin: var(--space-6) auto 0;
		width: 100px;
		height: 1px;
		background: linear-gradient(
			to right,
			transparent 0%,
			var(--slate-grey) 50%,
			transparent 100%
		);
		opacity: 0.3;
	}
	
	/* Responsive */
	@media (max-width: 768px) {
		.impact-stats__grid {
			grid-template-columns: 1fr;
			gap: var(--space-8);
		}
		
		.impact-stats__number {
			font-size: clamp(2.5rem, 10vw, 3.5rem);
		}
	}
	
	/* Animation delays */
	.impact-stats__item:nth-child(1) {
		transition-delay: 0s;
	}
	
	.impact-stats__item:nth-child(2) {
		transition-delay: 0.1s;
	}
	
	.impact-stats__item:nth-child(3) {
		transition-delay: 0.2s;
	}
</style>
