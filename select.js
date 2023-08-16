document.addEventListener("DOMContentLoaded", function () {
    const ofertaSelect = document.getElementById('ofertaSelect');

    if (ofertaSelect) {
        ofertaSelect.addEventListener('change', function () {
            const selectedOption = this.options[this.selectedIndex];
            const optionHref = selectedOption.getAttribute('data-href');

            if (optionHref) {
                window.location.href = optionHref;
            }
        });
    }
});
