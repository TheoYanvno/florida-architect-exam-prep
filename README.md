# 📐 Florida Architect Exam Prep (Architecture License Study)

A study app for the architect registration exam (ARE® 5.0) and the path to an architect license in Florida, written for architecture students and recent graduates in Gainesville who want to pass every division on the first try. It installs on an iPhone like an app and works offline.

**Live app:** [theoyanvno.github.io/florida-architect-exam-prep](https://theoyanvno.github.io/florida-architect-exam-prep/)

**Status:** finished. All 27 lessons, 156 practice questions and 300 flashcards are in, and it installs on iPhone and Android.

## Screenshots

| Home | Course | Lesson |
|---|---|---|
| <img src="screenshots/home.png" alt="Home: overall progress ring, days to goal, the six divisions and study tools" width="240"> | <img src="screenshots/course.png" alt="A division's lessons in order" width="240"> | <img src="screenshots/lesson.png" alt="A lesson with a worked example" width="240"> |
| **Study plan** | **Practice** | |
| <img src="screenshots/plan.png" alt="A study plan spread between start and goal dates" width="240"> | <img src="screenshots/practice.png" alt="Choosing a practice set" width="240"> | |
| **Flashcards** | **Progress** | **Campus & career** |
| <img src="screenshots/flashcards.png" alt="A flashcard of a key term" width="240"> | <img src="screenshots/progress.png" alt="Readiness for each division with a Passed switch" width="240"> | <img src="screenshots/campus.png" alt="Campus and career resources" width="240"> |

## Put it on your iPhone

1. Open the live app in **Safari**.
2. Tap **Share** (the square with an arrow pointing up).
3. Tap **Add to Home Screen**, then **Add**.

It opens full screen from its own icon, keeps your progress on the phone, and works without a connection after the first visit. On Android, use Chrome's menu and **Install app**.

## What it covers

- **A full course:** 27 lessons, one for each NCARB content section of the six divisions (about 5½ hours of reading). Each lesson teaches the material in plain words, works examples where numbers matter (fees, earned value, FAR, exit separation, stairs, payment applications), sums up what to remember, and ends with a four-question check; 75% finishes the lesson
- Readiness for each division counts lessons finished (40%) and your best practice score (60%)
- A home screen with your overall progress, days to your goal date, divisions left and your practice average, a card for each division with your readiness, and the study tools
- A Progress page to mark divisions passed, and a Profile page for your name, your dates and installing on iPhone
- The six ARE 5.0 divisions with NCARB's item counts, test times and section weights
- The AXP experience hours by area
- A Florida licensing checklist from the Florida Board of Architecture and Interior Design
- A study plan that spreads the six divisions between your start and goal dates, saved in the browser
- 156 original practice questions (the lesson checks plus 48 more), one division at a time or a 20-question mixed test, with an optional timer at the exam's pace, explanations, a score by NCARB section and your best score saved
- Answer choices shuffled every session, a review of every question you missed, and a Missed list to practice until you get them right
- A Campus & career page of help around the University of Florida campus: the School of Architecture, IPAL at the UF CityLabs, the Architecture & Fine Arts Library and its databases, UF AIAS, NOMAS and Alpha Rho Chi, the Career Connections Center for AXP jobs, and AIA Florida's ARE Scholarship (up to two ARE seat credits) and the free AIA PrepARE Exam Readiness Pack for eligible Associate AIA members
- 300 flashcards of key terms (50 per division) with Got it and Again, saved in the browser

Every fact links to its source (NCARB, the Florida DBPR board pages and the University of Florida School of Architecture). Practice questions are written for this app; nothing is copied from NCARB or prep companies.

## Run it

```
npm install
npm start      # http://localhost:8000
npm test       # the course, practice questions, flashcards, study plan and progress
npm run build  # builds the site into docs/ for GitHub Pages
```

It works the same on Windows, macOS and Linux (in the VS Code terminal on Windows).

## Built with

React, JavaScript, esbuild, a web app manifest and service worker (installable, offline), Node's test runner

## Credits

Built with help from AI coding tools; every feature is reviewed and tested before it ships. Not affiliated with, sponsored or endorsed by NCARB, the University of Florida, the Florida DBPR or the AIA. No school logos, marks or landmark images are used, and the navy-and-orange palette is the app's own. ARE®, AXP® and NCARB® are registered trademarks of the National Council of Architectural Registration Boards; AIA® is a registered trademark of the American Institute of Architects; they are named only to describe what the app helps you study. The hero and icon art are original drawings.

## License

MIT. See [LICENSE](LICENSE).
