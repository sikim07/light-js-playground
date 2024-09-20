# Light-Js-Playground

This repository is for projects for assignment testing and light testing using **Javascript**.

---

### Packages

-   **express** `^4.17.1` : Used to call external APIs instead of _app.js_.
-   **node-fetch** `^3.3.1` : Used to call external APIs from node.
-   **cors** `^2.8.5` : Used to call external APIs while avoiding **Same-Origin Policy**
-   **nodemon** `^3.1.6` : Used to apply changes quickly.
-   **dotenv** `^16.4.5` : Used to handle constants easily.

---

### Reason why made

Some had to create samples using external API calls. However, for security reasons, browsers do not enforce **CORS policies** when requesting with the `file://` protocol _(local file protocol)_. This causes problems when trying to access external APIs. This Light Express server allows you to test using external. Feel free to use it.
