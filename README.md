# DevConnect-v2
## Portail de portfolios

Ce projet a été créé avec Vite et configuré pour Vanilla TypeScript.

### Structure du projet

```structure
DevConnect/
├── public/                         # Ressources statiques (images, polices)
├── src/                            # Répertoire principal
    ├── assets/                     # Répertoire des styles
        └── css/                    # Dossier des styles
            ├── index.css           # Styles de la page d'accueil
            ├── reset.css           # Reset des styles
            └── variables.css       # Toutes les variables (couleur, tailles, typographie etc.)
    ├── pages/                      # Répertoire des différentes pages
        └── developpeurs.html       # Page des développeurs
    └──main.ts                      # Point d'entrée de l'application
├── .gitignore                      # Eléments à ignorer
├── index.html                      # Page d'accueil
├── LICENSE                         # Licence du projet
├── package.json                    # Dépendances et scripts du projet
├── pnpm-lock.yaml                  # Vérouillage pnpm
├── README.md                       # Documentation principale
└── tsconfig.json                   # paramètres de compilation Typescript
```

### Workflow collab

1. Faire un fork du dépôt
2. Copier le lien du dépôt
3. Cloner le dépôt en local à l'aide du terminal (dossier workspace)
```bash
    git clone url
```
4. Ouvrir le dossier du projet avec votre éditeur de code.
```bash
    cd DevConnect-v2
    code .
```
5. Installer les modules pnpm
```bash
    pnpm install
```
6. Créer votre branche et basculer sur elle
```bash
    git switch -c NomDeVotreBranche
```
7. Démarrer le serveur
```bash
    pnpm dev
```
8. Appliquer les modifications
9. Commit
```bash
    git add .
    git commit -m "VotreMessage"
```
10. Vérifier les remotes
```bash
    git remote -v
```
11. Ajouter upstream si inexistant
```bash
    git remote add upstream https://github.com/WuApp241/DevConnect-v2.git
```
12. Envoyer votre branche
```bash
    git push upstream NomDeVotreBranche
```
13. Installer la librairie Typed.js via Gestionnaires de paquets(npm/yarn)
    ```bash
        npm : npm install typed.js
        yarn : yarn add typed.js
    ```
*Assurez vous d'être régulièrement à jour sur la branche develop*

### Déploiement

Visitez le site [DevConnect](https://wuapp241.github.io/DevConnect-v2/)
