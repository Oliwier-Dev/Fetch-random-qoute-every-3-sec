This is a small side project I built to practice working with asynchronous JavaScript and interval-based UI updates.

The main goal was to simulate a simple “live quote” system. When the user clicks the Start button, the app fetches a JSON file containing a list of quotes. The data is fetched only once and stored locally in an array to avoid unnecessary repeated network requests. After that, a setInterval runs every 3 seconds and selects a random quote from the stored array, updating the DOM each time.

The project focuses on:

Using fetch with async/await

Handling asynchronous data properly

Managing application state (start/stop logic)

Working with setInterval and clearInterval

Preventing multiple intervals from running at the same time

Basic loading state handling in the UI

Instead of repeatedly calling the API every 3 seconds, I chose to cache the data after the first fetch. This makes the app more efficient and closer to how real-world applications handle static datasets.

The button acts as a toggle:

First click → starts the interval and begins rotating quotes.

Second click → clears the interval and stops the updates.

This project helped me better understand how timing functions interact with asynchronous logic and how improper interval handling can quickly cause performance issues.

The code is not perfect and may contain minor bugs or areas for improvement, but the main focus was learning and improving async control and state management.

If you would like to test the project live, you can access it here:
https://oliwier-dev.github.io/Fetch-random-qoute-every-3-sec/
