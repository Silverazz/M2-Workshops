La structure a été modifiée de telle sorte que l'on passe des dossiers ejs, css et js à une structure avec une inspiration node.js express. De fait, on se retrouve avec les dossiers suivants :

• annexe (servant de Data Access Layer en Node.js express)
• node_modules (les modules de node.js)
• view (contenant les fichiers UI de l'application)
    - css
    - template (contenant les fichiers .ejs de l'application)
• test (contenant les fichiers de test)


Dans le root, on a placé l'ancien fichier index.js renommé app.js, servant de entrypoint de l'application et définissant les routes. On peut faire le parallèle comme étant un Controller en architecture Node.js express.