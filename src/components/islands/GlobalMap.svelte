<script lang="ts">
	interface Location {
		name: string;
		country: string;
		x: number;
		y: number;
		events: number;
	}
	
	export let locations: Location[] = [
		{ name: 'Lagos', country: 'Nigeria', x: 50, y: 52, events: 150 },
		{ name: 'Accra', country: 'Ghana', x: 48, y: 54, events: 85 },
		{ name: 'London', country: 'United Kingdom', x: 49, y: 38, events: 42 },
		{ name: 'New York', country: 'USA', x: 25, y: 40, events: 38 },
		{ name: 'Dubai', country: 'UAE', x: 62, y: 48, events: 28 },
		{ name: 'Johannesburg', country: 'South Africa', x: 55, y: 68, events: 45 }
	];
	
	let activeLocation: Location | null = null;
	let hoveredLocation: Location | null = null;
	
	$: displayLocation = hoveredLocation || activeLocation;
</script>

<section class="global-map section-large">
	<div class="container">
		<div class="global-map__header reveal">
			<span class="text-micro text-sonic">International Presence</span>
			<h2 class="global-map__title">Global Operations</h2>
			<p class="global-map__subtitle">
				Delivering world-class production across continents. Our experience spans major cities 
				and international markets, bringing consistent excellence wherever events demand it.
			</p>
		</div>
		
		<div class="global-map__container">
			<svg
				class="global-map__svg"
				viewBox="0 0 100 60"
				xmlns="http://www.w3.org/2000/svg"
			>
				<!-- World Map Simplified Outline -->
				<g class="global-map__world" opacity="0.15" stroke="var(--slate-grey)" fill="none" stroke-width="0.2">
					<!-- Africa -->
					<path d="M 45 35 L 48 38 L 50 42 L 52 48 L 54 52 L 56 56 L 55 60 L 52 62 L 48 60 L 46 56 L 44 52 L 43 48 L 42 42 L 43 38 L 45 35 Z" />
					<!-- Europe -->
					<path d="M 46 28 L 48 30 L 50 32 L 52 33 L 54 32 L 56 30 L 56 28 L 54 26 L 52 26 L 50 27 L 48 27 L 46 28 Z" />
					<!-- North America -->
					<path d="M 15 25 L 20 28 L 25 30 L 28 32 L 30 35 L 32 40 L 30 45 L 25 48 L 20 46 L 18 42 L 16 38 L 14 32 L 15 25 Z" />
					<!-- South America -->
					<path d="M 28 48 L 30 50 L 32 54 L 32 58 L 30 62 L 28 64 L 26 62 L 24 58 L 24 54 L 26 50 L 28 48 Z" />
					<!-- Asia -->
					<path d="M 58 28 L 65 30 L 72 32 L 78 35 L 82 38 L 84 42 L 82 46 L 78 48 L 72 46 L 68 44 L 64 42 L 60 38 L 58 34 L 58 28 Z" />
					<!-- Australia -->
					<path d="M 78 52 L 82 54 L 84 56 L 84 58 L 82 60 L 78 60 L 76 58 L 76 54 L 78 52 Z" />
				</g>
				
				<!-- Connection Lines -->
				<g class="global-map__connections" opacity="0.3">
					{#each locations as location, i}
						{#if i < locations.length - 1}
							<line
								x1={locations[i].x}
								y1={locations[i].y}
								x2={locations[i + 1].x}
								y2={locations[i + 1].y}
								stroke="var(--sonic-electric)"
								stroke-width="0.1"
								stroke-dasharray="0.5 0.5"
							/>
						{/if}
					{/each}
				</g>
				
				<!-- Location Markers -->
				{#each locations as location}
					<g
						class="global-map__marker"
						class:active={activeLocation === location}
						class:hovered={hoveredLocation === location}
						on:mouseenter={() => hoveredLocation = location}
						on:mouseleave={() => hoveredLocation = null}
						on:click={() => activeLocation = activeLocation === location ? null : location}
					>
						<!-- Pulse Ring -->
						<circle
							cx={location.x}
							cy={location.y}
							r="1.5"
							fill="none"
							stroke="var(--sonic-electric)"
							stroke-width="0.1"
							opacity="0.5"
							class="global-map__pulse"
						/>
						
						<!-- Marker Pin -->
						<circle
							cx={location.x}
							cy={location.y}
							r="0.8"
							fill="var(--sonic-electric)"
							class="global-map__pin"
						/>
						
						<!-- Inner Dot -->
						<circle
							cx={location.x}
							cy={location.y}
							r="0.3"
							fill="var(--obsidian)"
						/>
					</g>
				{/each}
			</svg>
			
		<!-- Location Info Panel -->
		{#if displayLocation}
			<div class="global-map__info" class:visible={displayLocation}>
				<div class="global-map__info-content">
					<h3 class="global-map__info-city">{displayLocation.name}</h3>
					<p class="global-map__info-country">{displayLocation.country}</p>
					<div class="global-map__info-stat">
						<span class="global-map__info-number">{displayLocation.events}</span>
						<span class="global-map__info-label">Events Delivered</span>
					</div>
				</div>
			</div>
		{/if}
		</div>
		
		<!-- Location Grid -->
		<div class="global-map__locations">
			{#each locations as location}
				<button
					class="global-map__location-item"
					class:active={activeLocation === location}
					on:click={() => activeLocation = activeLocation === location ? null : location}
					on:mouseenter={() => hoveredLocation = location}
					on:mouseleave={() => hoveredLocation = null}
				>
					<span class="global-map__location-name">{location.name}</span>
					<span class="global-map__location-events text-mono">{location.events} events</span>
				</button>
			{/each}
		</div>
	</div>
</section>

<style>
	.global-map {
		background: var(--obsidian);
		position: relative;
		overflow: hidden;
	}
	
	.global-map__header {
		text-align: center;
		max-width: 800px;
		margin: 0 auto var(--space-16);
	}
	
	.global-map__header .text-micro {
		display: block;
		margin-bottom: var(--space-4);
	}
	
	.global-map__title {
		font-family: var(--font-display);
		font-size: var(--text-h2);
		line-height: var(--leading-h2);
		color: var(--white);
		margin-bottom: var(--space-6);
	}
	
	.global-map__subtitle {
		font-size: var(--text-body-lg);
		line-height: var(--leading-body-lg);
		color: var(--white-80);
	}
	
	.global-map__container {
		position: relative;
		max-width: 1200px;
		margin: 0 auto var(--space-12);
		background: linear-gradient(
			135deg,
			rgba(20, 20, 20, 0.5) 0%,
			rgba(10, 10, 10, 0.8) 100%
		);
		border: var(--border-hairline) solid rgba(0, 240, 255, 0.2);
		border-radius: var(--space-3);
		padding: var(--space-8);
	}
	
	.global-map__svg {
		width: 100%;
		height: auto;
		display: block;
	}
	
	.global-map__marker {
		cursor: pointer;
		transition: transform var(--transition-base) var(--ease-fader);
	}
	
	.global-map__marker:hover,
	.global-map__marker.active {
		transform: scale(1.2);
	}
	
	.global-map__pin {
		transition: fill var(--transition-base) var(--ease-fader);
	}
	
	.global-map__marker:hover .global-map__pin,
	.global-map__marker.active .global-map__pin {
		fill: var(--lucid-gold);
	}
	
	.global-map__pulse {
		animation: pulse 2s ease-out infinite;
	}
	
	@keyframes pulse {
		0% {
			r: 0.8;
			opacity: 0.8;
		}
		100% {
			r: 2;
			opacity: 0;
		}
	}
	
	.global-map__info {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(0.9);
		background: rgba(10, 10, 10, 0.95);
		border: var(--border-thin) solid var(--sonic-electric);
		border-radius: var(--space-2);
		padding: var(--space-6);
		min-width: 200px;
		opacity: 0;
		pointer-events: none;
		transition: opacity var(--transition-base) var(--ease-fader),
		            transform var(--transition-base) var(--ease-fader);
		box-shadow: var(--shadow-glow);
	}
	
	.global-map__info.visible {
		opacity: 1;
		transform: translate(-50%, -50%) scale(1);
	}
	
	.global-map__info-city {
		font-family: var(--font-display);
		font-size: var(--text-h3);
		color: var(--sonic-electric);
		margin-bottom: var(--space-2);
	}
	
	.global-map__info-country {
		font-size: var(--text-body);
		color: var(--white-80);
		margin-bottom: var(--space-4);
	}
	
	.global-map__info-stat {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		padding-top: var(--space-4);
		border-top: var(--border-hairline) solid rgba(0, 240, 255, 0.3);
	}
	
	.global-map__info-number {
		font-family: var(--font-display);
		font-size: 2rem;
		color: var(--lucid-gold);
	}
	
	.global-map__info-label {
		font-size: var(--text-mono);
		color: var(--slate-grey);
		text-transform: uppercase;
		letter-spacing: var(--tracking-wide);
	}
	
	.global-map__locations {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: var(--space-4);
		max-width: 1200px;
		margin: 0 auto;
	}
	
	.global-map__location-item {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding: var(--space-4);
		background: rgba(20, 20, 20, 0.5);
		border: var(--border-hairline) solid rgba(112, 112, 112, 0.2);
		border-radius: var(--space-2);
		cursor: pointer;
		transition: all var(--transition-base) var(--ease-fader);
		text-align: left;
	}
	
	.global-map__location-item:hover,
	.global-map__location-item.active {
		background: rgba(0, 240, 255, 0.1);
		border-color: var(--sonic-electric);
		transform: translateY(-2px);
	}
	
	.global-map__location-name {
		font-size: var(--text-body);
		font-weight: 600;
		color: var(--white);
	}
	
	.global-map__location-item:hover .global-map__location-name,
	.global-map__location-item.active .global-map__location-name {
		color: var(--sonic-electric);
	}
	
	.global-map__location-events {
		font-size: var(--text-mono);
		color: var(--slate-grey);
	}
	
	@media (max-width: 768px) {
		.global-map__locations {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
