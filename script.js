document.addEventListener("DOMContentLoaded", function() {
    const toggleSidebarBtn = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const toggleButton = document.getElementById('toggleButton');

    toggleSidebarBtn.addEventListener('click', function() {
        if (sidebar.classList.contains('hide-sidebar')) {
            // If sidebar is hidden, show it
            sidebar.classList.remove('hide-sidebar');
            content.classList.remove('expand-content');
            toggleButton.classList.remove('show-toggle-button');
        } else {
            // If sidebar is visible, hide it
            sidebar.classList.add('hide-sidebar');
            content.classList.add('expand-content');
            toggleButton.classList.add('show-toggle-button');
        }
    });

    // Add click event listener to each sidebar link
    document.querySelectorAll('.sidebar-content .button').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const pageId = link.id.replace('Link', ''); // Extract page ID
            loadPage(pageId); // Load page content
        });
    });

    // Function to load page content dynamically
    function loadPage(pageId) {
        fetch(`${pageId}.html`) // Load HTML file based on page ID
            .then(response => response.text()) // Get HTML content as text
            .then(html => {
                content.innerHTML = html; // Insert HTML content into the content div
            })
            .catch(error => {
                console.error('Error loading page:', error);
            });
    }
    
    // Add event listener for toggle button to bring back the sidebar
    toggleButton.addEventListener('click', function() {
        sidebar.classList.remove('hide-sidebar');
        content.classList.remove('expand-content');
        toggleButton.classList.remove('show-toggle-button');
    });
});


function searchHistory() {
    const year = document.getElementById("yearInput").value;
    const history = getHistory(year);
    displayHistory(history);
}

function getHistory(year) {
    let history = [];

    if (year >= 1950 && year <= 1980) {
        history = [
            "1950s to 1970s",
            "Early Development: AI was focused on developing machines capable of making inferences or decisions. Notable achievements include:",
            "1950: Alan Turing develops the Turing Test: Turing proposes a test to determine whether computers can exhibit human-like intelligence.",
            "1956: John McCarthy coins the term 'AI': McCarthy describes AI as 'the science and engineering of making intelligent machines.'",
            "1961: Development of IBM's DeepQA technology (Watson).",
            "1964: Introduction of Eliza, the first chatbot.",
            "1966: Development of Shakey, 'the first electronic person,' capable of interpreting instructions.",
            "1972: Development of MYCIN, a system for diagnosing infectious diseases.",
            "1976: Demonstration of CASNET, a consultation program for glaucoma."
        ];
    } else if (year >= 1981 && year <= 1999) {
        history = [
            "1970s to 2000",
            "AI Winter: This period saw reduced funding and interest in AI due to perceived limitations and high costs.",
            "Notable Developments:",
            "1986: Release of DXplain, a decision support system for diagnosis.",
            "Late 1990s: Renewed interest in machine learning (ML) and technological advancements."
        ];
    } else if (year >= 2000 && year <= 2020) {
        history = [
            "2000 to 2020",
            "Seminal Advancements: This period saw significant advancements in AI, particularly in deep learning and its applications in medicine.",
            "Notable Milestones:",
            "2000: Introduction of deep learning, overcoming limitations in ML.",
            "2007: Development of IBM Watson, capable of natural language processing and question-answering.",
            "2010: Application of computer-aided diagnosis (CAD) in endoscopy.",
            "2014-2017: Introduction of virtual assistants like Siri (2011) and Alexa (2014), and AI-based applications in healthcare.",
            "2015: Development of Pharmabot and introduction of Arterys, the first FDA-approved cloud-based DL application in healthcare.",
            "2017: Introduction of Chatbot Mandy and AI trials in gastroenterology.",
            "2018-2020: AI trials and applications in various medical fields, including gastroenterology.",
            "AI Applications in Medicine:",
            "Medical Imaging: AI used to improve accuracy and efficiency in reporting.",
            "Disease Diagnosis: AI applied for diagnosing diseases like diabetic retinopathy and skin cancer.",
            "Predictive Models: AI used for predicting therapeutic responses and prognosis.",
            "Endoscopic Practice: AI-assisted endoscopy aids in detection and differentiation of lesions and polyps."
        ];
    } else {
        history = ["No history available for this year."];
    }

    return history;
}

function displayHistory(history) {
    const historyContainer = document.getElementById("historyContainer");
    historyContainer.innerHTML = ""; 

    if (history.length === 0) {
        historyContainer.innerHTML = "<p>No history available for this year.</p>";
    } else {
        const ul = document.createElement("ul");
        history.forEach(event => {
            const li = document.createElement("li");
            li.textContent = event;
            ul.appendChild(li);
        });
        historyContainer.appendChild(ul);
    }
}
