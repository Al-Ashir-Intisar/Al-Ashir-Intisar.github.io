// JavaScript program for generating random scatter plots. 


window.addEventListener('DOMContentLoaded', (event) => {
    // Getting the scatter plot container
    const scatterplotContainer = document.getElementById('scatterplot');
    
    // Function to generate random points
    function generateRandomPoints(numPoints) {
        const points = [];
        for (let i = 0; i < numPoints; i++) {
            const x = Math.random() * 590; // Max width of container
            const y = Math.random() * 390; // Max height of container
            points.push({ x, y });
        }
        return points;
    }

    // Function to draw scatter plot
    function drawScatterPlot(points, shape) {
        scatterplotContainer.innerHTML = ''; // Clear previous plot
        points.forEach(point => {
            const dot = document.createElement('div');
            dot.style.position = 'absolute';
            dot.style.width = '10px';
            dot.style.height = '10px';
            dot.style.backgroundColor = 'black';
            dot.style.left = point.x + 'px';
            dot.style.top = point.y + 'px';
            if (shape === 'circle') {
                dot.style.borderRadius = '50%';
            }
            scatterplotContainer.appendChild(dot);
        });
    }

    // Initial plot with 10 random points
    let points = generateRandomPoints(25);
    drawScatterPlot(points, 'rectangle');

    // Event listener for the "Generate Points" button
    const generateButton = document.getElementById('generateButton');
    generateButton.addEventListener('click', () => {
        points = generateRandomPoints(25);
        drawScatterPlot(points, 'rectangle');
    });

   // Event listener for the "Change Shape" button
   const changeShapeButton = document.getElementById('changeShape');
   changeShapeButton.addEventListener('click', () => {
       const selectedShape = document.getElementById('shapeSelect').value;
       drawScatterPlot(points, selectedShape);
   });
});
