// Load the Tableau Embedding API using a script tag
const scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.js';
document.head.appendChild(scriptElement);

scriptElement.onload = function() {
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
};
