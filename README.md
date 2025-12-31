# Online Exam Application - PWA

A Progressive Web App for conducting online exams with Reasoning and Arithmetic sections.

## Features

✅ **40 Total Questions**
- 20 Reasoning Questions
- 20 Arithmetic Questions

✅ **User Interface**
- Multiple choice with radio buttons
- Question navigation (Previous/Next)
- Real-time timer
- Question counter

✅ **Results Dashboard**
- Total score and percentage
- Section-wise breakdown
- Correct/Wrong/Unanswered stats

✅ **PWA Capabilities**
- ✨ **Installable as an app** on desktop and mobile
- ⚡ **Works offline** after first load
- 📱 **Responsive design** for all devices
- 🎨 **Custom app icon**

## Installation

### Option 1: Use Locally

1. Open `index.html` in a modern browser (Chrome, Firefox, Safari, Edge)
2. Start taking the exam!

### Option 2: Install as App

#### On Desktop (Chrome/Edge):
1. Open `index.html` in Chrome or Edge
2. Look for the install icon (⊕) in the address bar
3. Click "Install" to add to your applications

#### On Mobile (Chrome/Safari):
1. Open the app in your mobile browser
2. **Chrome**: Tap menu → "Add to Home screen"
3. **Safari**: Tap Share → "Add to Home Screen"
4. The app icon will appear on your home screen

### Option 3: Host on Web Server

To enable full PWA features, serve the files using a web server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## Files

- `index.html` - Main application structure
- `style.css` - Styling and responsive design
- `script.js` - Exam logic and questions database
- `manifest.json` - PWA configuration
- `service-worker.js` - Offline functionality
- `icon-192.png` - App icon (192x192)
- `icon-512.png` - App icon (512x512)

## How to Use

1. **Start**: Click "Start Exam" on the welcome screen
2. **Answer**: Select your choice using radio buttons
3. **Navigate**: Use Previous/Next buttons to move between questions
4. **Submit**: Click "Submit Exam" on the last question
5. **Results**: View your score and detailed breakdown
6. **Retry**: Click "Take Exam Again" to restart

## Customization

### Add More Questions

Edit `script.js` and add questions to the `questions` object:

```javascript
const questions = {
    reasoning: [
        {
            question: "Your question here?",
            options: ["Option A", "Option B", "Option C", "Option D"],
            correct: 0  // Index of correct answer (0-3)
        },
        // Add more...
    ],
    arithmetic: [
        // Similar structure...
    ]
};
```

### Change Colors

Edit `style.css` and modify the color scheme:

```css
--primary-color: #667eea;  /* Main color */
--secondary-color: #764ba2; /* Accent color */
```

### Modify Timer

In `script.js`, add time limits or auto-submit:

```javascript
// Add this in startTimer() function
if (minutes >= 60) {  // 60 minute limit
    submitExam();
}
```

## Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## Offline Support

After the first visit, the app caches all resources and works completely offline. This makes it perfect for:
- Areas with poor internet connectivity
- Offline exam scenarios
- Faster load times

## License

Free to use and modify for personal or commercial projects.

## Support

For issues or questions, check the code comments or modify as needed.

---

**Happy Examining! 📝**
