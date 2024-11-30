// Gestion de la soumission du formulaire pour la Revue Ad Hoc
document.getElementById('ad-hoc-review-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let feedback = document.getElementById('ad-hoc-feedback').value.trim();

    if (feedback === '') {
        alert('Veuillez fournir vos commentaires.');
    } else {
        document.getElementById('ad-hoc-response').innerText = 'Merci pour vos commentaires !';
        document.getElementById('ad-hoc-feedback').value = ''; // Efface la zone de texte
        document.getElementById('show-answer-btn-ad-hoc').style.display = 'block'; // Affiche le bouton "Afficher la Réponse Correcte"
    }
});

// Gestion de l'affichage de la réponse correcte pour la Revue Ad Hoc
document.getElementById('show-answer-btn-ad-hoc')?.addEventListener('click', function() {
    document.getElementById('correct-answer-ad-hoc').style.display = 'block'; // Affiche la réponse correcte
    this.style.display = 'none'; // Cache le bouton "Afficher la Réponse Correcte"
});

// Gestion de la soumission du formulaire pour la Revue Basée sur une Checklist
document.getElementById('checklist-review-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let checklistItems = document.querySelectorAll('input[name="checklist"]:checked');

    if (checklistItems.length === 0) {
        alert('Veuillez sélectionner au moins un élément de la checklist.');
    } else {
        document.getElementById('checklist-response').innerText = `Vous avez sélectionné ${checklistItems.length} éléments de la checklist. Merci pour votre revue !`;
        document.getElementById('show-answer-btn-checklist').style.display = 'block'; // Affiche le bouton "Afficher la Réponse Correcte"
    }
});

// Gestion de l'affichage de la réponse correcte pour la Revue Basée sur une Checklist
document.getElementById('show-answer-btn-checklist')?.addEventListener('click', function() {
    document.getElementById('correct-answer-checklist').style.display = 'block'; // Affiche la réponse correcte
    this.style.display = 'none'; // Cache le bouton "Afficher la Réponse Correcte"
});

// Gestion de la soumission du formulaire pour la Revue Basée sur des Scénarios
document.getElementById('scenario-review-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let feedback = document.getElementById('scenario-feedback').value.trim();

    if (feedback === '') {
        alert('Veuillez fournir vos commentaires.');
    } else {
        document.getElementById('scenario-response').innerText = 'Merci pour votre revue basée sur des scénarios !';
        document.getElementById('scenario-feedback').value = ''; // Efface la zone de texte
        document.getElementById('show-answer-btn-scenario').style.display = 'block'; // Affiche le bouton "Afficher la Réponse Correcte"
    }
});

// Gestion de l'affichage de la réponse correcte pour la Revue Basée sur des Scénarios
document.getElementById('show-answer-btn-scenario')?.addEventListener('click', function() {
    document.getElementById('correct-answer-scenario').style.display = 'block'; // Affiche la réponse correcte
    this.style.display = 'none'; // Cache le bouton "Afficher la Réponse Correcte"
});

// Gestion de la soumission du formulaire pour la Revue Basée sur les Rôles
document.getElementById('role-review-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let role = document.getElementById('role').value;
    let feedback = document.getElementById('role-feedback').value.trim();

    if (feedback === '') {
        alert('Veuillez fournir vos commentaires.');
    } else {
        document.getElementById('role-response').innerText = `Merci, ${role}, pour votre revue !`;
        document.getElementById('role-feedback').value = ''; // Efface la zone de texte
        document.getElementById('show-answer-btn-role').style.display = 'block'; // Affiche le bouton "Afficher la Réponse Correcte"
    }
});

// Gestion de l'affichage de la réponse correcte pour la Revue Basée sur les Rôles
document.getElementById('show-answer-btn-role')?.addEventListener('click', function() {
    let role = document.getElementById('role').value;
    let answerText;

    switch (role) {
        case 'Analyste en Sécurité':
            answerText = 'Le code ne doit pas enregistrer d\'informations sensibles comme les numéros de carte. Il doit traiter ces données de manière sécurisée pour éviter toute fuite.';
            break;
        case 'Développeur':
            answerText = 'Le code devrait inclure une validation des erreurs. Il manque actuellement des vérifications pour s\'assurer que le numéro de carte est dans un format correct.';
            break;
        case 'Testeur':
            answerText = 'Le code doit être testé pour des cas limites, tels que des numéros de carte invalides, des montants très élevés ou des types de carte non pris en charge.';
            break;
        default:
            answerText = 'Veuillez sélectionner un rôle pour voir la réponse correcte.';
    }

    document.getElementById('role-specific-answer').innerText = answerText;
    document.getElementById('correct-answer-role').style.display = 'block'; // Affiche la réponse correcte
    this.style.display = 'none'; // Cache le bouton "Afficher la Réponse Correcte"
});

// Gestion de la soumission du formulaire pour la Revue Basée sur les Perspectives
document.getElementById('perspective-review-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let perspective = document.getElementById('perspective').value;
    let feedback = document.getElementById('perspective-feedback').value.trim();

    if (feedback === '') {
        alert('Veuillez fournir vos commentaires.');
    } else {
        document.getElementById('perspective-response').innerText = `Merci pour votre revue ${perspective} !`;
        document.getElementById('perspective-feedback').value = ''; // Efface la zone de texte
        document.getElementById('show-answer-btn-perspective').style.display = 'block'; // Affiche le bouton "Afficher la Réponse Correcte"
    }
});

// Gestion de l'affichage de la réponse correcte pour la Revue Basée sur les Perspectives
document.getElementById('show-answer-btn-perspective')?.addEventListener('click', function() {
    let perspective = document.getElementById('perspective').value;
    let answerText;

    switch (perspective) {
        case 'Performances':
            answerText = 'Le code utilise des boucles imbriquées, ce qui pourrait être optimisé pour de meilleures performances. Envisagez des techniques de traitement des données plus efficaces.';
            break;
        case 'Convivialité':
            answerText = 'Le code fonctionne, mais il pourrait être rendu plus convivial en fournissant des messages d\'erreur clairs si les données ne sont pas dans le format attendu.';
            break;
        case 'Sécurité':
            answerText = 'Le code devrait s\'assurer que les données traitées sont nettoyées pour éviter d\'éventuelles vulnérabilités, comme les attaques par injection.';
            break;
        default:
            answerText = 'Veuillez sélectionner une perspective pour voir la réponse correcte.';
    }

    document.getElementById('perspective-specific-answer').innerText = answerText;
    document.getElementById('correct-answer-perspective').style.display = 'block'; // Affiche la réponse correcte
    this.style.display = 'none'; // Cache le bouton "Afficher la Réponse Correcte"
});
