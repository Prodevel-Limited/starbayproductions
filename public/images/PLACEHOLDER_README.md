# Starbay Productions - Image Assets

## Required Placeholder Assets

Replace these placeholder references with actual high-quality images:

### Hero Section
- **hero-poster.jpg** (1920x1080px, JPEG)
  - AVIF poster frame for hero video
  - Should show audio mixing console, concert lighting rig, or professional production equipment
  - Dark, cinematic aesthetic with high contrast
  - Recommended: Unsplash search for "audio mixing console" or "concert lighting"

### Success Stories
- **stories/worship-conference-placeholder.jpg** (1600x900px, JPEG)
  - High-contrast monochrome photography of large worship event
  - Should convey scale and professionalism
  - Consider converting to grayscale for sophisticated look

- **stories/corporate-launch-placeholder.jpg** (1600x900px, JPEG)
  - Premium corporate event photography
  - Modern venue, professional audience, polished production
  - Monochrome conversion recommended

### Service Cards (Optional)
If you want service-specific imagery, create:
- **services/audio-engineering.jpg** (800x600px)
- **services/concerts-worship.jpg** (800x600px)
- **services/corporate-events.jpg** (800x600px)
- **services/media-production.jpg** (800x600px)
- **services/technical-consultancy.jpg** (800x600px)
- **services/international-support.jpg** (800x600px)

### OG Image (Social Sharing)
- **og-image.jpg** (1200x630px, JPEG)
  - Open Graph image for social media sharing
  - Should include Starbay Production branding
  - Clear, readable text overlay: "World-Class Audio Production"
  - Dark background with Sonic Electric (#00F0FF) accents

## Image Optimization Guidelines

### Format Priority
1. AVIF (best compression, modern browsers)
2. WebP (good compression, wide support)
3. JPEG (fallback, universal support)

### Recommended Tools
- **Squoosh.app** - Web-based image optimization
- **ImageOptim** (Mac) - Batch optimization
- **Sharp CLI** - Command-line processing

### Optimization Commands
Using Sharp (already installed in this project):

```bash
# Convert to AVIF
npx sharp -i input.jpg -o output.avif

# Generate responsive set
npx sharp -i input.jpg -o output-{width}.jpg --withMetadata --resize 400,800,1200
```

### File Naming Convention
- Lowercase, hyphen-separated
- Descriptive names
- Include size suffix for responsive variants
  - Example: `hero-poster-1920.jpg`, `hero-poster-1280.jpg`, `hero-poster-640.jpg`

## Stock Photo Resources

### Free High-Quality Sources
1. **Unsplash** (unsplash.com)
   - Search: "audio engineer", "concert production", "corporate event"
   - Fully free for commercial use
   
2. **Pexels** (pexels.com)
   - Search: "sound engineer", "live music", "conference"
   - Free license, no attribution required
   
3. **Pixabay** (pixabay.com)
   - Search: "music production", "stage lighting", "business event"
   - Free for commercial use

### Premium Sources (if budget allows)
1. **Adobe Stock**
2. **Shutterstock**
3. **iStock**

## Design Aesthetic Notes

All imagery should align with "The Frequency of Excellence" design philosophy:

- **Dark & Cinematic**: Obsidian (#0A0A0A) backgrounds
- **High Contrast**: Deep shadows, precise highlights
- **Professional**: No amateur snapshots
- **Monochrome Preferred**: Consider converting color images to grayscale for sophistication
- **Technical Focus**: Show equipment, venues, professional settings
- **Scale**: Convey the magnitude of productions (large crowds, big stages, impressive venues)

## Current Placeholders in Use

The website is currently configured to use these placeholder paths:

- `/images/hero-poster.jpg` - Hero video poster
- `/images/stories/worship-conference-placeholder.jpg` - Success story 1
- `/images/stories/corporate-launch-placeholder.jpg` - Success story 2
- `/og-image.jpg` - Open Graph social sharing image

Until replaced with actual images, these will show broken image placeholders.
