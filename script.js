// Load the Tableau Embedding API script dynamically
const scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.js';
document.head.appendChild(scriptElement);

scriptElement.onload = function() {
    // Get the Tableau Viz element
    const vizElement = document.getElementById('tableauViz');

    // Wait for the viz to become interactive
    vizElement.addEventListener('firstinteractive', () => {
        console.log('Tableau Viz is interactive');
    });

    // Example function to set the Viz to full-screen size
    function setFullSize() {
        vizElement.style.width = '100%';
        vizElement.style.height = '100vh';
    }

    // Example function to reset the Viz to default size
    function resetSize() {
        vizElement.style.width = '800px';
        vizElement.style.height = '600px';
    }

    // Example: Automatically set to full-screen size on load
    setFullSize();

    // Add your custom logic here, like buttons to control size
};

