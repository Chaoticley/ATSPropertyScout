# PropertyScout Website

Professional website for PropertyScout - Real Estate Investment Software for seasoned investors.

## Overview

This is a fully custom HTML/CSS/JavaScript website built with:
- Clean, minimal design with lots of whitespace
- Logo-inspired color palette (Orange, Purple, Gray)
- Responsive design for all devices
- SEO-optimized structure
- Fast loading and smooth performance

## File Structure

```
propertyscout/
├── index.html          # Homepage
├── product.html        # Product overview page
├── features.html       # Features page
├── pricing.html        # Pricing page
├── about.html          # About page
├── contact.html        # Contact page
├── css/
│   └── styles.css     # Main stylesheet
├── js/
│   └── main.js        # Main JavaScript file
└── README.md          # This file
```

## Design System

### Colors (from Logo)
- **Orange**: `#FF6B35` - Primary CTA color
- **Purple**: `#6B46C1` - Secondary accent
- **Gray**: `#4B4B4B` - Text and secondary elements
- **Black**: `#111827` - Primary text
- **White**: `#FFFFFF` - Background

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ SEO optimized (meta tags, semantic HTML)
- ✅ Accessible (ARIA labels, keyboard navigation)
- ✅ Fast loading (optimized CSS, minimal JavaScript)
- ✅ Smooth animations and transitions
- ✅ Mobile-friendly navigation menu
- ✅ Contact form with validation
- ✅ Logo integrated into design

## Customization

### Updating Content

1. **Text Content**: Edit the HTML files directly
2. **Colors**: Modify CSS variables in `css/styles.css` (root section)
3. **Styling**: All styles are in `css/styles.css`
4. **Functionality**: JavaScript is in `js/main.js`

### Adding Pages

1. Create new HTML file
2. Copy structure from existing page
3. Update navigation in all HTML files
4. Add page-specific styles if needed

### Logo Colors

The logo is created using CSS shapes. To modify:
- Edit `.logo-orange`, `.logo-purple`, `.logo-gray` classes in `css/styles.css`
- Colors are defined in `:root` CSS variables

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Minimal external dependencies (only Google Fonts)
- Optimized CSS with variables
- Efficient JavaScript with event delegation
- Lazy loading ready for images

## SEO Features

- Semantic HTML5 elements
- Meta descriptions on all pages
- Open Graph tags
- Proper heading hierarchy
- Alt text ready for images

## Maintenance

### Regular Updates
- Review and update content quarterly
- Check for broken links
- Update copyright year in footer
- Test forms and functionality

### Adding Images/Videos
- Place images in an `images/` folder
- Use lazy loading: `<img loading="lazy" src="...">`
- Optimize images before uploading
- Consider using WebP format for better compression

### Form Integration
The contact form currently shows a success message. To connect to a backend:
1. Update the form submission handler in `js/main.js`
2. Replace the simulated submission with actual API call
3. Add error handling

## Development

### Local Testing
1. Open `index.html` in a web browser
2. Or use a local server:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx serve
   ```

### Deployment
- Upload all files to your web server
- Ensure proper file permissions
- Configure server for clean URLs (optional)
- Set up SSL certificate for HTTPS

## Notes

- All pages share the same header and footer
- Navigation highlights active page automatically
- Mobile menu toggles on small screens
- Forms include basic validation
- Design follows minimalist principles with ample whitespace

## Support

For questions or issues, refer to the code comments or contact the development team.

---

**PropertyScout** - Real Estate Investment Software for Professionals

