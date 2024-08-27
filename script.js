// Import the Tableau Embedding API
import { TableauEventType } from 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.js';

document.addEventListener('DOMContentLoaded', () => {
    const containerDiv = document.getElementById("tableauVizContainer");
    const url = "https://public.tableau.com/views/UdemyCourseAnalysisDashboard/Dashboard";
    
    const options = {
        hideTabs: true,
        onFirstInteractive: function() {
            console.log('Tableau dashboard is interactive');
        }
    };

    // Initialize the Tableau Viz
    const viz = new tableau.Viz(containerDiv, url, options);

    // Optional: Add event listeners or custom functionality
    // For example, to activate a custom view:
    // viz.getWorkbook().showCustomViewAsync("CustomViewName").then(() => {
    //     console.log("Custom view activated");
    // });
});
