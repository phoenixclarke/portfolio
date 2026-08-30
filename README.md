# Phoenix Baldino-Clarke - Data Analytics Portfolio

## Overview
This is a GitHub Pages portfolio site showcasing data analytics work across three key areas:
- **Dashboard Development** - 6 interactive dashboards and data products
- **Data Storytelling** - 3 compelling business narratives and presentations
- **Training** - 2 educational programs and team enablement resources

## Features
✨ **Interactive Carousel UI** - Swiper.js with coverflow effect for elegant content browsing
📄 **Embedded PDFs** - Full-view PDF viewer on dedicated detail pages
📊 **Portfolio Showcase** - Professional presentation of work samples with descriptions
🎨 **Responsive Design** - Mobile-friendly layout that works on all devices
⚡ **Fast & Static** - Pure HTML/CSS/JS, no backend required

## Project Structure
```
portfolio/
├── index.html                 # Main portfolio page
├── assets/
│   ├── css/
│   │   └── style.css         # Global styling
│   ├── js/
│   │   └── main.js           # Swiper initialization
│   └── images/               # Portfolio thumbnail images
├── pages/                     # Detail pages for each portfolio item
│   ├── dd-*.html             # Dashboard Development pages
│   ├── ds-*.html             # Data Storytelling pages
│   └── tr-*.html             # Training pages
├── pdfs/                     # PDF source documents
│   ├── Dashboard Development/
│   ├── Data Storytelling/
│   └── Training/
└── design/                   # Design reference documents
```

## Technologies Used
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript** - Swiper.js for carousel functionality
- **PDF Viewer** - Embedded PDF.js iframe viewer
- **GitHub Pages** - Free static site hosting

## Portfolio Sections

### Dashboard Development (6 items)
Interactive dashboards and data products that provide business insights and real-time exploration capabilities:
1. Asset Utilization Executive Dashboard Suite
2. Cross-Sell Opportunity Waterfall Analysis
3. Presentation Tool & Interactive Calculator
4. Scenario Simulations Sandbox Environment
5. Personality Profile Explanation Tool
6. Resource Capacity & Workload Dashboard

### Data Storytelling (3 items)
Strategic presentations that transform data into compelling business narratives:
1. Fraud Product Value Framework
2. Implementation Best Practices
3. Impact Analysis with Next Steps

### Training (2 items)
Educational programs designed to upskill teams and establish best practices:
1. Accessibility & Inclusive Design
2. Value Communication Training

## How to Use

### View the Portfolio
Visit: **http://phoenixclarke.github.io/portfolio**

### Browse Samples
- Navigate through carousels using arrow buttons or pagination dots
- Click "View Dashboard" or "View Story" to see full PDF embed
- Use the back link to return to the main portfolio

### Local Development
```bash
# Clone the repository
git clone https://github.com/phoenixclarke/portfolio.git
cd portfolio

# Start a local server (Python 3)
python -m http.server 8000

# Or with Node.js
npx http-server
```
Then visit `http://localhost:8000` in your browser.

## Customization

### Update Contact Information
Edit `index.html` header section with your email, phone, and LinkedIn:
```html
<a href="mailto:your-email@example.com">your-email@example.com</a>
<a href="tel:5555555555">(555) 555-5555</a>
<a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
```

### Add Tableau Dashboards
Replace `[Tableau URL - Coming Soon]` placeholders in detail pages with actual Tableau URLs:
```html
<div class="tableau-container">
    <iframe src="YOUR_TABLEAU_URL" style="border: none;"></iframe>
</div>
```

### Update Images
Replace images in `assets/images/` with your own thumbnail graphics for each portfolio item.

## Performance Tips
- Images are optimized for web; compress further if needed
- PDFs load in iframes with viewer controls enabled
- Carousel auto-rotates every 5 seconds (adjustable in `assets/js/main.js`)

## Browser Support
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License
This portfolio site is personal and proprietary. All contained work samples and materials are copyrighted.

## Contact
📧 Email: contact@example.com  
🔗 LinkedIn: linkedin.com/in/phoenixclarke

---

**Last Updated:** 2024  
**Portfolio Site:** Phoenix Baldino-Clarke Data Analytics  
**Source:** http://phoenixclarke.github.io/portfolio
