// script.js

var demoData = [];
var surveyedData = [];
var actualCheatProportion = 1 / 3;

function generateData() {
    for (var i = 0; i < 500; i++) {
        demoData.push(Math.random() < actualCheatProportion);
    }
    displayData("Demo Data", demoData.slice(0, 5), "demoData");
}

function calculateTrueProportions() {
    var trueCount = demoData.filter(value => value).length;
    var trueProportion = (trueCount / demoData.length) * 100;
    document.getElementById('actualProportion').textContent = trueProportion.toFixed(2) + "%";
}

function simulateSurvey() {
    surveyedData = [];
    demoData.forEach(function(cheated) {
        var coinFlip1 = Math.random() < 0.5;
        var coinFlip2 = Math.random() < 0.5;
        var response = coinFlip1 ? cheated : (coinFlip2 ? cheated : Math.random() < 0.75);
        surveyedData.push(response);
    });
    displayData("Surveyed Data", surveyedData.slice(0, 5), "surveyedData");
}

function calculateSurveyedProportions() {
    var surveyedTrueCount = surveyedData.filter(value => value).length;
    var surveyedProportion = (surveyedTrueCount / surveyedData.length) * 100;
    document.getElementById('surveyedProportion').textContent = surveyedProportion.toFixed(2) + "%";

    calculateTrueYesProportions(surveyedProportion);
}

function calculateTrueYesProportions(surveyedProportion) {
    var trueYesProportion = (surveyedProportion * 3) / 4; // 3/4 of the proportion calculated from surveyed data
    document.getElementById('trueYesProportion').textContent = trueYesProportion.toFixed(2) + "%";
}

function displayData(title, data, containerId) {
    var dataDiv = document.getElementById('data');
    var dataHtml = "<div id='" + containerId + "'><h3>" + title + "</h3><ul>";
    data.forEach(function(entry, index) {
        dataHtml += "<li>" + (index + 1) + ". " + (entry ? "Yes" : "No") + "</li>";
    });
    dataHtml += "</ul></div>";
    dataDiv.innerHTML += dataHtml;
}


// Get all accordion buttons
var acc = document.getElementsByClassName("accordion-btn");

// Add click event listeners to each button
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Toggle active class to expand/collapse panel
    this.classList.toggle("active");
    
    // Get the panel associated with the button
    var panel = this.nextElementSibling;
    
    // Toggle panel's max-height to show/hide content
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}