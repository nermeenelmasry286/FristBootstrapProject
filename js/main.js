document.querySelectorAll('[data-bs-toggle="modal"]').forEach(img => {
    img.addEventListener('click', function () {
        const title = this.getAttribute('data-title');
        document.getElementById('modalTitle').textContent = title;

        const src = this.getAttribute('src');
        document.getElementById('modalImage').setAttribute('src', src);

        const description = this.getAttribute('data-description') || "No description available.";
        document.getElementById('modalDescription').textContent = description;
    });
});