document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.btn');
    const content = document.querySelector('.content');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            content.innerHTML = '';

            const page = button.id.slice(3);
            const pageContent = `<h2>Page ${page}</h2><p>This is the content of Page ${page}.</p>`;
            content.innerHTML = pageContent;
        });
    });
});
