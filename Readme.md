# Memory Card Game - Competition Mode
🎮 A challenging and engaging memory card matching game with multiple difficulty levels and time constraints.

Developed by: **Srujit Varasala**

## ⚠️ Important Display Notice
For the best gaming experience, please set your browser zoom level to 50%.

To adjust zoom level:
- **Windows/Linux**: Press `Ctrl` and `-`
- **Mac**: Press `Cmd` and `-`
- **Alternative**: Use `Ctrl` + Mouse Wheel
- **Manual**: Browser menu (⋮) > Zoom > Set to 50%

## 🎯 Game Overview
Test your memory while racing against time! Match pairs of cards across different difficulty levels, each with its own time limit and challenge level.

## ✨ Features

### 🎚️ Multiple Difficulty Levels
- **Easy**: 6 pairs, 60 seconds
- **Medium**: 8 pairs, 90 seconds
- **Hard**: 12 pairs, 120 seconds
- **Expert**: 15 pairs, 150 seconds

### 🎮 Game Elements
- ⏱️ Interactive countdown timer
- 📊 Visual progress bar
- 🔄 Move counter
- ⭐ Level progression system
- 🎴 Smooth card animations
- 📱 Responsive design

### 🏆 Competition Features
- ⏳ Level-specific time limits
- 📈 Progress tracking
- ⚡ Time warning system
- 🎯 Score calculation
- 🔄 Automatic level progression

## 🛠️ Technical Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Dependencies**: None (Pure web technologies)
- **Deployment**: Any web server or local environment

## 📥 Installation

1. **Clone Repository**
   ```bash
   git clone https://github.com/srujitv/memory-game.git
   ```

2. **Navigate to Project**
   ```bash
   cd memory-game
   ```

3. **Required Files**
   - index.html
   - styles.css
   - script.js

4. **Launch**
   - Open index.html in a web browser
   - Set zoom level to 50%
   - Start playing!

## 🎮 How to Play

### Getting Started
1. Select difficulty level
2. Click "Start Game"
3. Wait for 3-second countdown

### Gameplay
- Click cards to flip them
- Find matching pairs
- Complete before time runs out
- Progress to harder levels

### Game Rules
- Two cards can be flipped at once
- Matches stay face up
- Non-matches flip back
- Time limit for each level

### Winning & Losing
- **Win**: Match all pairs in time
- **Lose**: Time runs out
- **Progress**: Unlock next level on win

## 💻 Browser Compatibility
- ✅ Google Chrome (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Microsoft Edge

## 🎨 Customization
Modify game elements in source files:

### Level Configuration (script.js)
```javascript
const levelConfig = {
    easy: { pairs: 6, timeLimit: 60 },
    medium: { pairs: 8, timeLimit: 90 },
    hard: { pairs: 12, timeLimit: 120 },
    expert: { pairs: 15, timeLimit: 150 }
};
```

### Card Symbols (script.js)
```javascript
const emojis = ['🎨', '🎮', '🎲', '🎸', '🎪', '🎭', '🎼', '🎧', 
                '🎤', '🎯', '🎨', '🎪', '🎭', '🎪', '🎨'];
```

### Styling (styles.css)
- Colors
- Animations
- Layout
- Responsive breakpoints

## 🚀 Future Enhancements
- 🔊 Sound effects system
- 🏆 High score leaderboard
- 💾 Progress saving
- 🎨 Multiple themes
- 👥 Multiplayer mode
- 🏅 Achievement badges
- 📱 Social sharing

## ⚠️ Known Issues & Troubleshooting

### Display Issues
- Game requires 50% zoom for optimal display
- Some cards may misalign at different zoom levels

### Solutions
1. **Check Zoom Level**
   - Verify browser is at 50% zoom
   - Reset zoom if needed

2. **Display Problems**
   - Clear browser cache
   - Refresh page
   - Try different browser

3. **Performance Issues**
   - Close other tabs
   - Clear browser cache
   - Update browser

## 👨‍💻 Developer Contact username
**Srujit Varasala**
- 📧 Email: srujit.v@gmail.com
- 🌐 GitHub: [srujit12091997](https://github.com/srujit12091997)
- 💼 LinkedIn: [Srujitvarasala](https://www.linkedin.com/in/srujitvarasala/)

## 📜 License
This project is licensed under the MIT License.

## 📝 Version History
### v1.0.0 (Current)
- Initial release
- Four difficulty levels
- Timer system
- Responsive design
- Level progression

## 🙏 Acknowledgments
- Emoji icons: Unicode Standard
- Design inspiration: Classic memory games
- Testing team: [List of testers]

## 🤝 Contributing
Contributions are welcome! Please feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## ⭐ Rate This Project
If you found this game helpful or enjoyable, please:
- Star the repository
- Share with friends
- Provide feedback

<p align="center">
Developed with ❤️ by Srujit Varasala<br>
© 2024 All Rights Reserved
</p>
