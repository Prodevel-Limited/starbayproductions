<script lang="ts">
	export let title: string;
	export let slug: string;
	export let description: string;
	export let icon: string;
	export let specs: string[];
	export let category: string;
	export let index: number = 0;
	
	let isHovered = false;
	let cardElement: HTMLElement;
</script>

<article
	bind:this={cardElement}
	class="service-card reveal hover-lift"
	on:mouseenter={() => isHovered = true}
	on:mouseleave={() => isHovered = false}
	style="animation-delay: {index * 0.1}s;"
>
	<a href={`/services/${slug}`} class="service-card__link">
		<div class="service-card__icon-wrapper">
			<span class="service-card__icon" aria-hidden="true">{icon}</span>
			<div class="service-card__category text-micro">{category}</div>
		</div>
		
		<div class="service-card__content">
			<h3 class="service-card__title">{title}</h3>
			<p class="service-card__description">{description}</p>
			
			<div class="service-card__overlay" class:active={isHovered}>
				<div class="service-card__specs">
					<span class="text-micro text-sonic">Technical Specifications</span>
					<ul class="service-card__specs-list">
						{#each specs.slice(0, 4) as spec}
							<li>{spec}</li>
						{/each}
					</ul>
				</div>
				<div class="service-card__cta">
					<span class="service-card__cta-text">
						Explore {category} Solutions
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M5 10h10M10 5l5 5-5 5"/>
						</svg>
					</span>
				</div>
			</div>
		</div>
		
		<div class="service-card__border"></div>
	</a>
</article>

<style>
	.service-card {
		position: relative;
		background: linear-gradient(
			135deg,
			rgba(20, 20, 20, 0.9) 0%,
			rgba(10, 10, 10, 0.95) 100%
		);
		border: var(--border-hairline) solid rgba(112, 112, 112, 0.2);
		border-radius: var(--space-2);
		overflow: hidden;
		transition: transform var(--transition-base) var(--ease-fader),
		            box-shadow var(--transition-base) var(--ease-fader),
		            border-color var(--transition-base) var(--ease-fader);
	}
	
	.service-card:hover {
		border-color: var(--sonic-electric);
		box-shadow: var(--shadow-glow);
	}
	
	.service-card__link {
		display: block;
		text-decoration: none;
		color: inherit;
		padding: var(--space-8);
		min-height: 400px;
		position: relative;
	}
	
	.service-card__icon-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: var(--space-6);
	}
	
	.service-card__icon {
		font-size: 3rem;
		line-height: 1;
		display: block;
		filter: grayscale(20%);
		transition: transform var(--transition-base) var(--ease-fader);
	}
	
	.service-card:hover .service-card__icon {
		transform: scale(1.1) rotate(-5deg);
	}
	
	.service-card__category {
		background: rgba(0, 240, 255, 0.1);
		color: var(--sonic-electric);
		padding: var(--space-1) var(--space-3);
		border-radius: var(--space-1);
		border: var(--border-hairline) solid rgba(0, 240, 255, 0.3);
	}
	
	.service-card__content {
		position: relative;
		z-index: 1;
	}
	
	.service-card__title {
		font-family: var(--font-display);
		font-size: var(--text-h3);
		line-height: 1.2;
		color: var(--white);
		margin-bottom: var(--space-4);
		transition: color var(--transition-base) var(--ease-fader);
	}
	
	.service-card:hover .service-card__title {
		color: var(--sonic-electric);
	}
	
	.service-card__description {
		font-size: var(--text-body);
		line-height: var(--leading-body);
		color: var(--white-80);
		margin-bottom: var(--space-6);
	}
	
	.service-card__overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			135deg,
			rgba(0, 240, 255, 0.05) 0%,
			rgba(10, 10, 10, 0.98) 30%,
			rgba(10, 10, 10, 0.98) 100%
		);
		padding: var(--space-8);
		opacity: 0;
		pointer-events: none;
		transition: opacity var(--transition-base) var(--ease-fader);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.service-card__overlay.active {
		opacity: 1;
		pointer-events: auto;
	}
	
	.service-card__specs {
		padding-top: var(--space-12);
	}
	
	.service-card__specs .text-micro {
		display: block;
		margin-bottom: var(--space-4);
	}
	
	.service-card__specs-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.service-card__specs-list li {
		font-family: var(--font-mono);
		font-size: var(--text-mono);
		line-height: var(--leading-mono);
		color: var(--white-80);
		padding: var(--space-2) 0;
		padding-left: var(--space-4);
		position: relative;
	}
	
	.service-card__specs-list li::before {
		content: '▸';
		position: absolute;
		left: 0;
		color: var(--sonic-electric);
	}
	
	.service-card__cta {
		padding-top: var(--space-4);
		border-top: var(--border-hairline) solid rgba(0, 240, 255, 0.2);
	}
	
	.service-card__cta-text {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-family: var(--font-body);
		font-size: var(--text-body);
		font-weight: 600;
		color: var(--sonic-electric);
		transition: gap var(--transition-base) var(--ease-fader);
	}
	
	.service-card:hover .service-card__cta-text {
		gap: var(--space-3);
	}
	
	.service-card__cta-text svg {
		width: 20px;
		height: 20px;
	}
	
	.service-card__border {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(
			to right,
			transparent 0%,
			var(--sonic-electric) 50%,
			transparent 100%
		);
		transform: scaleX(0);
		transition: transform var(--transition-base) var(--ease-fader);
	}
	
	.service-card:hover .service-card__border {
		transform: scaleX(1);
	}
	
	@media (max-width: 768px) {
		.service-card__link {
			min-height: 350px;
			padding: var(--space-6);
		}
		
		.service-card__title {
			font-size: 1.5rem;
		}
	}
</style>
