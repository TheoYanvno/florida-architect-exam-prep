# 📐 Florida Architect Exam Prep (Architecture License Study)

A study app for the architect registration exam (ARE® 5.0) and the path to an architect license in Florida, written for architecture students and recent graduates in Gainesville who want to pass every division on the first try. It installs on an iPhone like an app and works offline.

**Live app:** [theoyanvno.github.io/florida-architect-exam-prep](https://theoyanvno.github.io/florida-architect-exam-prep/)

**Status:** finished. Each of the six divisions is a course of 12 lessons in four units, each unit closed by a quiz, then a full-length practice exam, with 573 questions, full-length practice exams, 300 flashcards and 32 achievements, and it installs on iPhone and Android.

## Screenshots

| Home | Course | Lesson |
|---|---|---|
| <img src="screenshots/home.png" alt="Home: overall progress ring, days to goal, your level, points and streak, and a course card for each division" width="240"> | <img src="screenshots/course.png" alt="A division course: units of three lessons, each ending with a unit quiz" width="240"> | <img src="screenshots/lesson.png" alt="A lesson with a worked example" width="240"> |
| **Practice exam** | **Achievements** | **Study plan** |
| <img src="screenshots/exam.png" alt="A full-length practice exam with a hot-spot question on a drawing" width="240"> | <img src="screenshots/achievements.png" alt="Division badges, one earned and the rest showing progress" width="240"> | <img src="screenshots/plan.png" alt="A study plan spread between start and goal dates" width="240"> |
| **Practice** | | |
| <img src="screenshots/practice.png" alt="Choosing a practice set" width="240"> | | |
| **Flashcards** | **Progress** | **Campus & career** |
| <img src="screenshots/flashcards.png" alt="A flashcard of a key term" width="240"> | <img src="screenshots/progress.png" alt="Readiness for each division with a Passed switch" width="240"> | <img src="screenshots/campus.png" alt="Campus and career resources" width="240"> |

## Put it on your iPhone

1. Open the live app in **Safari**.
2. Tap **Share** (the square with an arrow pointing up).
3. Tap **Add to Home Screen**, then **Add**.

It opens full screen from its own icon, keeps your progress on the phone, and works without a connection after the first visit. On Android, use Chrome's menu and **Install app**.

## How the course works

Like CodeForge, each division is a course of four units:

1. **Lessons.** Each unit has three lessons (12 per division, 72 in all). Each one teaches the material in plain words, works the numbers, sums up what to remember and ends with a check drawn from the questions it teaches (75% finishes it). Every question in the bank, including every practice exam question, is assigned to the lesson that teaches it.
2. **Unit quiz.** After each unit's three lessons: 10 questions on what those lessons taught, with the answer and explanation after each one. Pass with 75%.
3. **Practice exam.** Unlocks when all four unit quizzes are passed. It is full length, with the real division's item count (65 for PcM, 75 for PjM, PA and CE, 100 for PPD and PDD), spread across NCARB's sections by its published weights and ending with a case study. Each exam draws a new mix from the bank. As on the real exam, you don't see answers until you submit, you can flag questions and jump between them, and the timer runs at the real division's length. You can stop and resume later. Pass with 70%; results are broken down by NCARB section.

Finish every lesson, pass the four unit quizzes and pass the exam to earn the division's badge. **Achievements** award points (20 per lesson, 25 per unit quiz, 100 per exam, 2 per flashcard). There are three levels (Candidate, Course graduate, Exam ready), a badge for each division and 23 milestones, among them Perfect quiz, Beat the clock, Halfway there (3 divisions finished), Card sharp and Total recall (70% and 100% on a flashcard quiz) and streaks from 3 days up to six months. Free practice and flashcards stay open at any time.

## What it covers

- **A full course:** 72 lessons in 24 units, covering every NCARB content section of the six divisions (about 14 hours of reading). Each lesson teaches the material in plain words, works examples where numbers matter, sums up what to remember and ends with a check; a quiz closes each unit
- Readiness for each division counts lessons finished (40%) and your best practice or exam score (60%)
- A home screen with your overall progress, days to your goal date, divisions left and your practice average, your level and streak, a course card for each division showing your next step, and the study tools (exam divisions, flashcards and resources)
- A Progress page to mark divisions passed, and a Profile page for your name, your dates and installing on iPhone
- The six ARE 5.0 divisions with NCARB's item counts, test times and section weights
- The AXP experience hours by area
- A Florida licensing checklist from the Florida Board of Architecture and Interior Design
- A study plan that spreads the six divisions between your start and goal dates, saved in the browser
- 573 original questions written to NCARB's objectives, in the ARE's item types: multiple choice, check all that apply, number fill-in (65), hot spot on 20 original drawings (24) and drag-and-place (19), plus six case studies, one per division, each a project brief with tables that 6 or 7 questions refer to. Practice them one division at a time or a 20-question mixed test, with an optional timer at the exam's pace, explanations, a score by NCARB section and your best score saved
- Answer choices shuffled every session, a review of every question you missed, and a Missed list to practice until you get them right
- A Campus & career page of help around the University of Florida campus: the School of Architecture, IPAL at the UF CityLabs, the Architecture & Fine Arts Library and its databases, UF AIAS, NOMAS and Alpha Rho Chi, the Career Connections Center for AXP jobs, and AIA Florida's ARE Scholarship (up to two ARE seat credits) and the free AIA PrepARE Exam Readiness Pack for eligible Associate AIA members
- 300 flashcards of key terms (50 per division) with Got it and Again, saved in the browser, and a flashcard quiz mode: see a definition, pick the matching term from four, ten at a time, with your best score saved

Every fact links to its source (NCARB, the Florida DBPR board pages and the University of Florida School of Architecture). Practice questions are written for this app; nothing is copied from NCARB or prep companies.

## Run it

```
npm install
npm start      # http://localhost:8000
npm test       # the course, the quiz and exam path, achievements, questions, flashcards, study plan and progress
npm run build  # builds the site into docs/ for GitHub Pages
```

It works the same on Windows, macOS and Linux (in the VS Code terminal on Windows).

## Built with

React, JavaScript, esbuild, a web app manifest and service worker (installable, offline), Node's test runner

## Credits

Built with help from AI coding tools; every feature is reviewed and tested before it ships. Not affiliated with, sponsored or endorsed by NCARB, the University of Florida, the Florida DBPR or the AIA. No school logos, marks or landmark images are used, and the navy-and-orange palette is the app's own. ARE®, AXP® and NCARB® are registered trademarks of the National Council of Architectural Registration Boards; AIA® is a registered trademark of the American Institute of Architects; they are named only to describe what the app helps you study. The hero and icon art are original drawings.

## License

MIT. See [LICENSE](LICENSE).
