
# 💍 Izhaq & Naeema Wedding Invitation

A beautiful, modern, elegant digital wedding invitation with an interactive envelope overlay and beige & gold theme.

## Features

✨ **Interactive Envelope** - Click the wax seal to open the invitation
🎨 **Beige & Gold Theme** - Warm, sophisticated color palette
📱 **Fully Responsive** - Works perfectly on all devices
🕌 **Islamic Elements** - Basmala, Quranic verse, and Islamic greetings
✅ **All Event Details** - Nikah & Mehendi (31 July 2026) and Reception (01 August 2026)
🎭 **Smooth Animations** - Professional transitions and effects

## Quick Start

1. Open `index.html` in your browser
2. Click the wax seal on the envelope to open the invitation
3. Scroll through to see all the details

## Customization Guide

### Changing Names and Details

Edit the following sections in `index.html`:

**Parents' Names:**
```html
<p class="hero-parents">Mr. Rafeeque & Mrs. Sanjitha </p>
```

**Couple Names:**
```html
<p class="hero-names">Izhaq</p>
```

**Event Dates and Times:**
```html
<div class="event-detail">
    <span class="event-detail-icon">📅</span>
    <div>
        <span class="event-detail-label">Date</span>
        Friday, 31 July 2026
    </div>
</div>
```

**Venue Details:**
```html
<div class="location-details">
    <strong>Town Hall Auditorium</strong><br>
    Thalassery (TLY), Kerala
</div>
```

### Changing Colors

Edit the CSS variables at the top of the `<style>` section:

```css
:root {
    --beige-dark: #1a1410;      /* Background color */
    --gold: #d4af8a;             /* Accent color */
    --gold-light: #e2c47a;       /* Light gold */
    --cream: #f5ead6;            /* Text color */
}
```

### Changing Fonts

The invitation uses Google Fonts. You can replace them in the `<head>` section:

```html
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
```

Then update the CSS variables:
```css
--font-serif: 'Your Font', serif;
--font-script: 'Your Script Font', cursive;
```

## File Structure

```
wedding-invitation/
├── index.html      # Main invitation file
└── README.md       # This file
```

## Hosting on GitHub Pages

1. Your invitation is already set up for GitHub Pages
2. Visit: **https://izhaq&naeema.github.io/wedding-invitation/**
3. Share this link with your guests!

### To Enable GitHub Pages:

1. Go to your repository Settings
2. Scroll to "Pages"
3. Select `main` branch as source
4. Your site will be live in a few minutes

## Browser Support

✅ Chrome/Edge
✅ Firefox
✅ Safari
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Tips for Sharing

1. **Share the Live Link** - Send guests the GitHub Pages URL
2. **QR Code** - Generate a QR code pointing to your invitation
3. **Email** - Share the link via email with a personal message
4. **WhatsApp** - Perfect for sharing with family and friends
5. **Social Media** - Share on Facebook, Instagram, etc.

## Making Further Changes

To make changes after publishing:

1. Edit `index.html` locally
2. Commit and push to GitHub
3. GitHub Pages will automatically update (usually within a few minutes)

## Color Palette Reference

- **Background**: `#1a1410` (Dark Beige)
- **Gold**: `#d4af8a` (Main Accent)
- **Gold Light**: `#e2c47a` (Light Accent)
- **Cream**: `#f5ead6` (Text Color)

## Font Information

- **Serif**: Cormorant Garamond (elegant, classic)
- **Script**: Tangerine (decorative, flowing)
- **Sans-serif**: Montserrat (clean, modern)

## Need Help?

For CSS customization, HTML structure changes, or any other modifications, feel free to edit the file directly. The code is well-organized with clear sections for easy navigation.

---

Made with ❤️ for your special day!
