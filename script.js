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
