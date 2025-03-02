# Web Application Codebase

## Application Overview
This repository hosts the code for a web application that integrates data science and web development concepts. Website is available at [https://www.sotisanalytics.com](https://www.sotisanalytics.com).

## Technology Stack
- **React**: Used for crafting the user interface, showcasing the use of React components and state management.
- **Python Backend**: Demonstrates basic backend integration, primarily for data processing tasks.
- **HTML5 & CSS3**: Highlights standard practices in web layout and design.
- **JavaScript (ES6+)**: Implements client-side scripting for enhanced interactivity.

## Code Structure
The application's architecture is modular, with each component designed to showcase specific functionalities and concepts:
- `App.js`: The primary root component that manages the overall layout and rendering of the application.
- `Home.js`: The landing page component, serving as the entry point to the application.
- `Introduction_section.js`, `Parallax_section.js`, `Cards_section.js`: Components that make up various sections of the web application, demonstrating the use of React in building interactive UI elements.
- `Data_science.js`: Demonstrates the integration of data science elements, possibly including data visualization and analysis features.
- `Signal_processing.js`: Illustrates the application of signal processing techniques within a web environment, potentially showcasing real-time data processing.
- `Development.js`: Focuses on aspects related to software development, including code snippets, development methodologies, or project management tools.
- `Dashboards.js`: Showcases dashboard components, featuring data-driven insights and analytics.
- `Screenshots1.js`, `Screenshots2.js`, `Screenshots3.js`: Components possibly used for displaying screenshots or images, illustrating various features or sections of the application.
- `Data_workflow.js`: A component that describes data workflows, data pipelines, or ETL processes.

Each component is crafted to highlight a particular aspect of data science or web development, reflecting the intersection of these two domains in practical scenarios.

## Development Highlights
- **Responsive Design**: Ensures the application is accessible across different devices.
- **Client-Side Interactivity**: Utilizes JavaScript for dynamic user interactions.
- **Data Science Integration**: Provides a basic example of incorporating data analytics into a web application.

## Repository Purpose
While it includes elements that are typical in data science projects, such as data visualization and analysis, the primary focus is on demonstrating the application's structure and the use of technologies like React and Python.

## Run with Docker
To run this application using Docker:

1. Build the Docker image:
   ```bash
   docker build -t webapp-sotisanalytics .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 webapp-sotisanalytics
   ```

3. Access the application in your browser at:
   ```
   http://localhost:3000
   ```

## Run Without Docker
To run this application directly:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run start
   ```

3. For production build:
   ```bash
   npm run build
   serve -s build
   ```
   Note: You may need to install serve globally using `npm install -g serve`

4. Access the application in your browser at:
   ```
   http://localhost:3000
   ```

---

*Note: This README is intended to describe the contents of this repository and does not provide guidance on setup or deployment.*
