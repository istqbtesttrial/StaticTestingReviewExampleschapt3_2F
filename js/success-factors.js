// success-factors.js

document.getElementById('success-checklist-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let selectedItems = document.querySelectorAll('input[name="checklist"]:checked');

    if (selectedItems.length === 0) {
        document.getElementById('success-checklist-response').innerText = 'Veuillez sélectionner au moins un facteur de succès.';
    } else {
        document.getElementById('success-checklist-response').innerText = `Vous avez sélectionné ${selectedItems.length} facteurs de succès. Bien joué !`;
    }
});
