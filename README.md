
# MissionDesk - Connect. Contribute. Create.

[![MissionDesk Screenshot](https://raw.githubusercontent.com/AbhishekSinghShekhawatSDE/MissionDesk/afd462c4a8c2347f29cbc485826d8c1327256019/assets/output.jpg)](https://abhisheksinghshekhawatsde.github.io/MissionDesk/) 
<!-- Make sure the link in the screenshot above points to your live deployed site! -->

**MissionDesk is a prototype web platform designed to connect ambitious talent from colleges and universities with innovative startups and organizations offering impactful internships, volunteer roles, and team positions.**

This project serves as a frontend prototype demonstrating the core user interface and user experience for such a platform, utilizing Google Sheets and Google Apps Script for "serverless" form data handling.

**Live Demo:** [**https://abhisheksinghshekhawatsde.github.io/MissionDesk/**](https://abhisheksinghshekhawatsde.github.io/MissionDesk/)
*(Replace with your actual deployed GitHub Pages URL or custom domain if set up)*

## 🚀 Features

*   **User-Friendly Interface:** Clean and modern design for easy navigation.
*   **Opportunity Listings:** Browse various opportunities (currently focused on internships).
*   **Detailed Opportunity Pages:** Static pages for each listed opportunity with comprehensive details.
*   **Application Submission:** Candidates can apply for opportunities directly through forms on the detail pages.
*   **Campaign Listing for Organizations:** Startups and companies can submit their campaign/opportunity details via a dedicated form.
*   **"Serverless" Backend:** Utilizes Google Sheets as a database and Google Apps Script as an intermediary API for form submissions, avoiding traditional backend infrastructure for the prototype phase.
*   **Responsive Design:** Adapts to various screen sizes (desktop, tablet, mobile).
*   **Informational Pages:** About Us and Contact Us sections.

## 🛠️ Technology Stack

*   **Frontend:**
    *   HTML5
    *   CSS3 (with custom properties/variables for theming)
    *   Vanilla JavaScript (for UI interactions, animations, and form submissions)
*   **"Backend" (Serverless Approach):**
    *   **Google Sheets:** Used as a simple database to store candidate applications and campaign listings.
    *   **Google Apps Script (GAS):** Deployed as Web Apps to act as API endpoints, receiving data from HTML forms (via GET requests with URL parameters) and writing it to the respective Google Sheets.
*   **Hosting:**
    *   Currently deployed on GitHub Pages.

## ⚙️ Setup & How It Works (Form Submissions)

This prototype uses a "serverless" approach for handling form submissions to avoid complex backend setup.

1.  **HTML Forms:**
    *   The individual opportunity detail pages (e.g., `digital-marketing-intern-detail.html`) contain application forms.
    *   The `list-your-campaign.html` page contains a form for organizations to submit their opportunities.
2.  **Client-Side JavaScript (Inline):**
    *   Each form has an inline `<script>` tag that listens for the `submit` event.
    *   On submission, the JavaScript:
        *   Prevents the default form submission.
        *   Collects the form data.
        *   Constructs a URL with the form data appended as query parameters.
        *   Makes an asynchronous `GET` request (using `fetch` API) to a specific Google Apps Script Web App URL.
3.  **Google Apps Script (Web App):**
    *   Two separate Apps Script projects are used:
        *   One for handling candidate applications.
        *   One for handling new campaign listings.
    *   Each script contains a `doGet(e)` function that:
        *   Parses the URL parameters from the `e.parameter` object.
        *   Appends the received data as a new row to a designated Google Sheet.
        *   Returns a JSON response indicating success or failure.
4.  **Google Sheets:**
    *   Two separate Google Sheets act as simple databases:
        *   One sheet to store all candidate applications.
        *   Another sheet to store all submitted campaign listings.

This method allows for data collection without needing a traditional server or database, making it ideal for rapid prototyping.

## 📄 Project Structure
## 🔮 Future Enhancements (Potential)

*   User authentication and profiles.
*   Search and filtering for opportunities.
*   Dashboard for organizations to manage their listings.
*   Dashboard for candidates to track their applications.
*   Transition to a more robust backend and database solution (e.g., Node.js/Express with MongoDB/PostgreSQL, or a BaaS like Firebase).
*   Email notifications for applications and listings.

## 🧑‍💻 Developer

Developed by **Abhishek Singh Shekhawat**

*   Portfolio: [abhisheksinghshekhawat.com](https://abhisheksinghshekhawat.com)
*   LinkedIn: [linkedin.com/in/abhisheksinghshekhawatsde/](https://www.linkedin.com/in/abhisheksinghshekhawatsde/)
*   GitHub: [@AbhishekSinghShekhawatSDE](https://github.com/AbhishekSinghShekhawatSDE)

## 📜 License

This project is a prototype and intended for demonstration purposes. Please contact the developer for inquiries about usage or collaboration.
