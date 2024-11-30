// Fonction pour compter les mots dans une chaîne
function countWords(str) {
    return str.trim().split(/\s+/).filter(word => word.length > 0).length;
}

// Gestion des soumissions de formulaire et affichage des réponses correctes
document.addEventListener('DOMContentLoaded', function () {

    // Gestion de la soumission du formulaire pour la Revue Informelle
    document.getElementById('review-form')?.addEventListener('submit', function (event) {
        event.preventDefault();
        let feedback = document.getElementById('feedback').value.trim();

        if (countWords(feedback) < 3) {
            alert('Veuillez fournir une revue plus détaillée (au moins 3 mots).');
        } else {
            document.getElementById('response').innerText = 'Merci pour votre retour !';
            document.getElementById('feedback').value = ''; // Efface la zone de texte
            document.getElementById('show-answer-btn-review').style.display = 'block'; // Affiche le bouton "Afficher la Réponse Correcte"
        }
    });

    // Gestion de l'affichage de la réponse correcte pour la Revue Informelle
    document.getElementById('show-answer-btn-review')?.addEventListener('click', function () {
        document.getElementById('correct-answer-review').style.display = 'block'; // Affiche la réponse correcte
        this.style.display = 'none'; // Cache le bouton "Afficher la Réponse Correcte"
    });

    // Gestion de la soumission du formulaire pour le Walkthrough
    document.getElementById('walkthrough-form')?.addEventListener('submit', function (event) {
        event.preventDefault();
        let comments = document.getElementById('comments').value.trim();

        if (countWords(comments) < 3) {
            alert('Veuillez fournir des commentaires plus détaillés (au moins 3 mots).');
        } else {
            document.getElementById('walkthrough-response').innerText = 'Merci pour vos commentaires !';
            document.getElementById('comments').value = ''; // Efface la zone de texte
            document.getElementById('show-answer-btn-walkthrough').style.display = 'block'; // Affiche le bouton "Afficher la Réponse Correcte"
        }
    });

    // Gestion de l'affichage de la réponse correcte pour le Walkthrough
    document.getElementById('show-answer-btn-walkthrough')?.addEventListener('click', function () {
        document.getElementById('correct-answer-walkthrough').style.display = 'block'; // Affiche la réponse correcte
        this.style.display = 'none'; // Cache le bouton "Afficher la Réponse Correcte"
    });

    // Gestion de la soumission du formulaire pour la Revue Technique
    document.getElementById('technical-review-form')?.addEventListener('submit', function (event) {
        event.preventDefault();
        let checklistItems = document.querySelectorAll('input[name="checklist"]:checked');

        if (checklistItems.length === 0) {
            alert('Veuillez sélectionner au moins un élément de la checklist.');
        } else {
            document.getElementById('technical-review-response').innerText = 'Merci d’avoir complété la checklist !';
            document.getElementById('show-answer-btn-technical').style.display = 'block'; // Affiche le bouton "Afficher la Réponse Correcte"
        }
    });

    // Gestion de l'affichage de la réponse correcte pour la Revue Technique
    document.getElementById('show-answer-btn-technical')?.addEventListener('click', function () {
        document.getElementById('correct-answer-technical').style.display = 'block'; // Affiche la réponse correcte
        this.style.display = 'none'; // Cache le bouton "Afficher la Réponse Correcte"
    });

    // Gestion de la soumission du formulaire pour l’Inspection
    document.getElementById('inspection-form')?.addEventListener('submit', function (event) {
        event.preventDefault();
        let findings = document.getElementById('findings').value.trim();

        if (countWords(findings) < 3) {
            alert('Veuillez fournir des observations plus détaillées (au moins 3 mots).');
        } else {
            document.getElementById('inspection-response').innerText = `Merci pour vos observations !`;
            document.getElementById('show-answer-btn-inspection').style.display = 'block'; // Affiche le bouton "Afficher la Réponse Correcte"
        }
    });

    // Gestion de l'affichage de la réponse correcte pour l’Inspection
    document.getElementById('show-answer-btn-inspection')?.addEventListener('click', function () {
        document.getElementById('correct-answer-inspection').style.display = 'block'; // Affiche la réponse correcte
        this.style.display = 'none'; // Cache le bouton "Afficher la Réponse Correcte"
    });

});
