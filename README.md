## This Repository is the project for **light test** or **assignment test**.

### Packages

-   **express** `^4.17.1` : Use to call external API instead _app.js_.
-   **node-fetch** `^3.3.1` : Use to call external API on node.
-   **cors** `^2.8.5` : Use to call external API avoiding **Same-Origin Policy**
-   **nodemon** `^3.1.6` : Use to quick apply of change.
-   **dotenv** `^16.4.5` : Use to handle constants easily.

---

### Reason why made

Some had to create samples using external API calls. However, for security reasons, browsers do not enforce CORS policies when requesting with the file:// protocol (local file protocol). This causes problems when trying to access external APIs. This Light Express server allows you to test using external. Feel free to use it.
