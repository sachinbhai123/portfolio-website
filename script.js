document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetPage = this.getAttribute('href');

        // If the target is an internal section (single-page scrolling)
        if (targetPage.startsWith("#")) {
            const targetId = targetPage.substring(1);
            document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        } 
        // If it's a different page (multi-page navigation)
        else {
            window.location.href = targetPage;
        }
    });
});
