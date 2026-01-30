import { useState, useEffect } from 'react';

interface Story {
	title: string;
	client: string;
	eventType: string;
	location: string;
	quote: string;
	impact: string;
	image: string;
}

interface StoriesSliderProps {
	stories: Story[];
}

export default function StoriesSlider({ stories }: StoriesSliderProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);
	
	const goToSlide = (index: number) => {
		setCurrentIndex(index);
		setIsAutoPlaying(false);
	};
	
	const goToPrevious = () => {
		const newIndex = currentIndex === 0 ? stories.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
		setIsAutoPlaying(false);
	};
	
	const goToNext = () => {
		const newIndex = currentIndex === stories.length - 1 ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
		setIsAutoPlaying(false);
	};
	
	useEffect(() => {
		if (!isAutoPlaying) return;
		
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === stories.length - 1 ? 0 : prevIndex + 1
			);
		}, 6000);
		
		return () => clearInterval(interval);
	}, [isAutoPlaying, stories.length]);
	
	if (!stories || stories.length === 0) {
		return null;
	}
	
	const currentStory = stories[currentIndex];
	
	return (
		<section className="stories-slider section-large">
			<div className="container">
				<div className="stories-slider__header reveal">
					<span className="text-micro text-gold">Success Stories</span>
					<h2 className="stories-slider__title">The Sound of Starbay</h2>
					<p className="stories-slider__subtitle">
						Real events. Real results. Real impact.
					</p>
				</div>
				
				<div className="stories-slider__container">
					<div className="stories-slider__content">
						<div className="stories-slider__slide" key={currentIndex}>
							<div className="stories-slider__quote-mark">"</div>
							<blockquote className="stories-slider__quote">
								{currentStory.quote}
							</blockquote>
							
							<div className="stories-slider__meta">
								<div className="stories-slider__client">
									<span className="text-micro">Client</span>
									<span className="stories-slider__client-name">{currentStory.client}</span>
								</div>
								<div className="stories-slider__event">
									<span className="text-micro">Event Type</span>
									<span className="stories-slider__event-name">{currentStory.eventType}</span>
								</div>
								<div className="stories-slider__location">
									<span className="text-micro">Location</span>
									<span className="stories-slider__location-name">{currentStory.location}</span>
								</div>
							</div>
							
							<div className="stories-slider__impact">
								<span className="text-micro text-sonic">Impact Metrics</span>
								<p className="stories-slider__impact-text">{currentStory.impact}</p>
							</div>
						</div>
					</div>
					
					<div className="stories-slider__controls">
						<button
							onClick={goToPrevious}
							className="stories-slider__nav stories-slider__nav--prev"
							aria-label="Previous story"
						>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M15 18l-6-6 6-6"/>
							</svg>
						</button>
						
						<div className="stories-slider__dots">
							{stories.map((_, index) => (
								<button
									key={index}
									onClick={() => goToSlide(index)}
									className={`stories-slider__dot ${index === currentIndex ? 'active' : ''}`}
									aria-label={`Go to story ${index + 1}`}
								/>
							))}
						</div>
						
						<button
							onClick={goToNext}
							className="stories-slider__nav stories-slider__nav--next"
							aria-label="Next story"
						>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M9 18l6-6-6-6"/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			
			<style>{`
				.stories-slider {
					background: linear-gradient(
						135deg,
						rgba(10, 10, 10, 1) 0%,
						rgba(20, 20, 20, 1) 100%
					);
					position: relative;
					overflow: hidden;
				}
				
				.stories-slider::before {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					height: 1px;
					background: linear-gradient(
						to right,
						transparent 0%,
						var(--lucid-gold) 50%,
						transparent 100%
					);
					opacity: 0.3;
				}
				
				.stories-slider__header {
					text-align: center;
					max-width: 800px;
					margin: 0 auto var(--space-16);
				}
				
				.stories-slider__header .text-micro {
					display: block;
					margin-bottom: var(--space-4);
				}
				
				.stories-slider__title {
					font-family: var(--font-display);
					font-size: var(--text-h2);
					line-height: var(--leading-h2);
					color: var(--white);
					margin-bottom: var(--space-6);
				}
				
				.stories-slider__subtitle {
					font-size: var(--text-body-lg);
					line-height: var(--leading-body-lg);
					color: var(--white-80);
				}
				
				.stories-slider__container {
					max-width: 900px;
					margin: 0 auto;
					background: linear-gradient(
						135deg,
						rgba(30, 30, 30, 0.5) 0%,
						rgba(20, 20, 20, 0.8) 100%
					);
					border: var(--border-hairline) solid rgba(212, 175, 55, 0.2);
					border-radius: var(--space-3);
					padding: var(--space-12);
					position: relative;
				}
				
				.stories-slider__content {
					position: relative;
					min-height: 400px;
				}
				
				.stories-slider__slide {
					animation: fadeInSlide 0.6s var(--ease-fader);
				}
				
				@keyframes fadeInSlide {
					from {
						opacity: 0;
						transform: translateX(20px);
					}
					to {
						opacity: 1;
						transform: translateX(0);
					}
				}
				
				.stories-slider__quote-mark {
					font-family: var(--font-display);
					font-size: 6rem;
					line-height: 1;
					color: var(--lucid-gold);
					opacity: 0.2;
					position: absolute;
					top: -20px;
					left: -10px;
				}
				
				.stories-slider__quote {
					font-family: var(--font-body);
					font-size: var(--text-body-lg);
					line-height: 1.8;
					color: var(--white);
					font-style: italic;
					margin: 0 0 var(--space-8);
					position: relative;
					z-index: 1;
				}
				
				.stories-slider__meta {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
					gap: var(--space-6);
					margin-bottom: var(--space-8);
					padding: var(--space-6) 0;
					border-top: var(--border-hairline) solid rgba(112, 112, 112, 0.2);
					border-bottom: var(--border-hairline) solid rgba(112, 112, 112, 0.2);
				}
				
				.stories-slider__client,
				.stories-slider__event,
				.stories-slider__location {
					display: flex;
					flex-direction: column;
					gap: var(--space-2);
				}
				
				.stories-slider__client-name,
				.stories-slider__event-name,
				.stories-slider__location-name {
					font-size: var(--text-body);
					color: var(--white);
					font-weight: 600;
				}
				
				.stories-slider__impact {
					background: rgba(0, 240, 255, 0.05);
					padding: var(--space-6);
					border-radius: var(--space-2);
					border: var(--border-hairline) solid rgba(0, 240, 255, 0.2);
				}
				
				.stories-slider__impact .text-micro {
					display: block;
					margin-bottom: var(--space-3);
				}
				
				.stories-slider__impact-text {
					font-family: var(--font-mono);
					font-size: var(--text-mono);
					color: var(--white-80);
					margin: 0;
				}
				
				.stories-slider__controls {
					display: flex;
					align-items: center;
					justify-content: center;
					gap: var(--space-8);
					margin-top: var(--space-8);
				}
				
				.stories-slider__nav {
					background: rgba(0, 240, 255, 0.1);
					border: var(--border-hairline) solid rgba(0, 240, 255, 0.3);
					border-radius: 50%;
					width: 48px;
					height: 48px;
					display: flex;
					align-items: center;
					justify-content: center;
					cursor: pointer;
					color: var(--sonic-electric);
					transition: all var(--transition-base) var(--ease-fader);
				}
				
				.stories-slider__nav:hover {
					background: rgba(0, 240, 255, 0.2);
					border-color: var(--sonic-electric);
					transform: scale(1.1);
				}
				
				.stories-slider__dots {
					display: flex;
					gap: var(--space-3);
				}
				
				.stories-slider__dot {
					width: 12px;
					height: 12px;
					border-radius: 50%;
					background: rgba(112, 112, 112, 0.3);
					border: var(--border-hairline) solid rgba(112, 112, 112, 0.5);
					cursor: pointer;
					transition: all var(--transition-base) var(--ease-fader);
					padding: 0;
				}
				
				.stories-slider__dot.active {
					background: var(--lucid-gold);
					border-color: var(--lucid-gold);
					box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
				}
				
				.stories-slider__dot:hover {
					background: var(--sonic-electric);
					border-color: var(--sonic-electric);
					transform: scale(1.2);
				}
				
				@media (max-width: 768px) {
					.stories-slider__container {
						padding: var(--space-8);
					}
					
					.stories-slider__quote {
						font-size: var(--text-body);
					}
					
					.stories-slider__meta {
						grid-template-columns: 1fr;
						gap: var(--space-4);
					}
				}
			`}</style>
		</section>
	);
}
