// Load the Tableau Embedding API script
const scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.js';
document.head.appendChild(scriptElement);

scriptElement.onload = function() {
    // Get the Tableau Viz element
    const vizElement = document.getElementById('tableauViz');

    // Add event listeners or custom logic here if needed
    vizElement.addEventListener('firstinteractive', () => {
        console.log('Tableau Viz is interactive');
    });

    // Example: Set the Viz to full-screen size
    function setFullSize() {
        vizElement.style.width = '100%';
        vizElement.style.height = '100vh';
    }

    // You can call setFullSize() to resize the viz element as needed
    setFullSize();
};
