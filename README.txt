# Kavya & Vilas — Premium Engagement E-Invitation

## Files
- `index.html` — complete invitation page
- `style.css` — premium responsive design and animations
- `script.js` — opening animation, scroll reveals, petals, countdown and WhatsApp wishes
- `theme.jpg` — supplied engagement theme artwork

## Customize before delivery

### 1. Names
Edit `Kavya & Vilas` in `index.html`.

### 2. Event date/time
In `script.js`, change:
`const eventDate = new Date("December 12, 2026 18:30:00").getTime();`

### 3. Venue
Update the venue text in `index.html` and the Google Maps URL.

### 4. WhatsApp wishes
In `script.js`, replace:
`const WHATSAPP_NUMBER = "919999999999";`
with the recipient's WhatsApp number including country code, without `+`.

### 5. Music (optional)
This version intentionally has no bundled music file. If you want background music, add `wedding.mp3` and implement an audio toggle after a user interaction. Browsers commonly block autoplay before user interaction.

## Run
Open `index.html` in a browser. No server or framework is required.

## Deploy
The folder can be uploaded directly to GitHub Pages, Netlify, Vercel, or another static hosting service.
