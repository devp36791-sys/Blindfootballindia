# Blind Football India Website

A comprehensive web platform for blind football in India, featuring player profiles, tournaments, matches, and state team information.

## 📋 Features

✅ **5 Main Pages:**
- **Home (index.html)** - Landing page with hero section and featured sections
- **Players (pages/players.html)** - Directory of blind football players with search and position filters
- **Tournaments (pages/tournaments.html)** - List of tournaments with status filters (Upcoming, Ongoing, Completed)
- **Matches (pages/matches.html)** - Live, upcoming, and completed match information
- **States (pages/states.html)** - State-wise team information and rankings

## 🎨 Design Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Professional Color Scheme** - Navy Blue (#1a3a52) and Orange (#f39c12)
- **Smooth Animations** - Fade-in effects and hover transitions
- **Interactive Filters** - Search and filter functionality across all pages
- **Modern UI/UX** - Card-based layouts with clean typography

## 📁 File Structure

```
Blindfootballindia/
├── index.html              # Home page
├── styles.css              # Global CSS styling
├── script.js               # JavaScript functionality
├── pages/
│   ├── players.html        # Players directory
│   ├── tournaments.html    # Tournaments listing
│   ├── matches.html        # Matches information
│   └── states.html         # State teams
└── README.md               # This file
```

## 🚀 How to Use

1. **Clone or Download** the repository
2. **Open index.html** in your web browser
3. **Navigate** between pages using the navigation menu
4. **Use Search/Filter** features to find specific information

## 🔍 Search & Filter Features

### Players Page
- Search players by name
- Filter by position (Goalkeeper, Defender, Midfielder, Forward)

### Tournaments Page
- Filter by status (Upcoming, Ongoing, Completed)

### Matches Page
- Filter by status (Live, Upcoming, Completed)
- Live matches show animated badges

### States Page
- Search states by name
- View team statistics and rankings

## 🎯 Interactive Features

- **Live Match Badges** - Animated indicators for live matches
- **Smooth Scrolling** - Navigation links scroll smoothly
- **Active Page Highlighting** - Current page is highlighted in navigation
- **Responsive Navigation** - Menu adapts to different screen sizes

## 💻 Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with animations
- **JavaScript (Vanilla)** - Interactive functionality without frameworks
- **Responsive Design** - Mobile-first approach

## 📊 Sample Data

The website includes sample data for:
- 10+ Players with positions and experience
- 8+ Tournaments with various statuses
- 9+ Match records with live scores
- 12 State teams with rankings

## 🔧 Customization

### To Add More Data:
Edit the relevant HTML page and duplicate the card elements:

**For Players:** Add new `.player-card` divs
**For Tournaments:** Add new `.tournament-card` divs
**For Matches:** Add new `.match-card` divs
**For States:** Add new `.state-card` divs

### To Change Colors:
Edit `styles.css` and modify the CSS variables:
```css
:root {
    --primary-color: #1a3a52;      /* Navy Blue */
    --secondary-color: #f39c12;    /* Orange */
}
```

## 📱 Browser Compatibility

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile Browsers

## 📝 License

This project is licensed under MIT License - Feel free to use and modify!

## 👥 Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

## 📞 Contact

For more information about Blind Football India, visit the repository!

---

**Version:** 1.0
**Last Updated:** May 2026
**Created by:** Blind Football India Development Team
