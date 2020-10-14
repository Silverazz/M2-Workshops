Mise à jour d’atelier

V1 : Ajouter le bouton de modification d’un atelier dans index.ejs

Description : Dans le fichier index.ejs, le modifier afin d’ajouter un bouton “Edit”, qui puisse rediriger vers une page de modification http://localhost:3000/workshop/nomdelatelier, récupérant les données de l’atelier en question (name et description) pour les mettre dans les champs respectifs de la page de modification. 

Un bouton “Edit” apparaîtra pour chaque atelier créé au préalable dans la liste affichée sur le lien http://localhost:3000/, afin de pouvoir cibler, et donc éditer un atelier plus spécifiquement.

Coût : 5 min/homme

Dépendance(s): Aucune.

US liée(s)  : Mise à jour d’atelier

V2 : Ajout form action POST update dans le fichier workshop.ejs

Description : Dans le fichier workshop.ejs, le modifier afin de permettre la méthode POST de mise à jour d’un atelier. Il faut donc faire une différenciation sur la page workshop.ejs entre la méthode POST de création d’un atelier, et la méthode POST de mise à jour d’un atelier. Cette différenciation se fait sur le type du workshop récupéré (si il est bien défini, alors POST update, sinon il s’agit simplement de la création d’un atelier).

Coût : 30min/homme

Dépendance(s): Aucune.

US liée(s)  : Mise à jour d’atelier

V3 : Ajout de l’ancien nom de l’atelier dans le fichier workshop.ejs

Description : Dans le fichier workshop.ejs, le modifier afin de permettre de récupérer l’ancien nom de l’atelier dans le cas d’une mise à jour d’atelier. Il s’agit essentiellement d’ajouter une ligne HTML permettant de récupérer le nom avec <%= workshop.name %>.

Coût : 30min/homme

Dépendance(s): Aucune.

US liée(s)  : Mise à jour d’atelier

B4 : Ajouter méthode updateWorkshop dans le fichier inMemoryWorkshop.js

Description : Dans le fichier inMemoryWorkshop.js, le modifier afin d’ajouter la méthode updateWorkshop, prenant en paramètres l’ancien nom de l’atelier, afin de pouvoir le récupérer l’atelier dans la liste avec getWorkshopByName, ainsi qu’un newName (nouveau nom) et un newDescription (nouvelle description). Il s’agit donc, comme dit précédemment, de récupérer l’atelier sujet à modification avec getWorkshopByName, puis de modifier ses attributs name et description avec newName et newDescription respectivement en mémoire.

Coût : 30min/homme

Dépendance(s): V1, V2, V3

US liée(s)  : Mise à jour d’atelier

B5 : Modifier fichier app.js afin d’ajouter la méthode POST de update

Description : Dans le fichier app.js, le modifier afin d’ajouter la méthode POST avec updateWorkshop. Il s’agira de récupérer dans le body de workshop.ejs l’ancien nom, le nouveau nom, et la nouvelle description, puis d’appeler la méthode updateWorkshop du fichier inMemoryWorkshop.js avec ces paramètres. Ensuite, une redirection vers la page d’accueil afin de constater les modifications sur l’atelier concerné.

Coût : 15min/homme

Dépendance(s): B4

US liée(s)  : Mise à jour d’atelier

Suppression d’atelier

V6 : Ajouter le bouton de suppression d’un atelier dans index.ejs

Description : Dans le fichier index.ejs, le modifier afin d’ajouter un bouton “Remove”, qui puisse simplement appeler la méthode POST removeWorkshop et supprimer l’atelier de la liste lié au bouton avec <%= workshop.name %>.

Un bouton “Remove” apparaîtra pour chaque atelier créé au préalable dans la liste affichée sur le lien http://localhost:3000/, afin de pouvoir cibler, et donc supprimer un atelier plus spécifiquement.

Coût : 10 min/homme

Dépendance(s): Aucune.

US liée(s)  : Suppression d’atelier

B7 : Ajouter méthode removeWorkshopByName dans le fichier inMemoryWorkshop.js


Description :  Modifier le fichier inMemoryWorkshop.js afin d’ajouter la méthode removeWorkshopByName, permettant de supprimer un atelier en mémoire à partir de son name. Il s’agit de récupérer l’atelier avec son nom par la méthode getWorkshopByName, puis de récupérer la liste getWorkshopList. Avec le workshop et la liste, il est possible de savoir dans quel index de la liste des workshops se trouve le workshop en question. De fait, si l’index est valide, il suffit d’appeler la méthode splice de la liste avec en paramètres l’index du workshop concerné dans la liste et 1. 

Autrement, si à partir du nom il n’est pas possible de récupérer un index valide, c’est que l’atelier n’est pas dans la liste, et n’est donc pas en mémoire.

Coût : 30min/homme 

Dépendance(s): V6

US liée(s)  : Suppression d’atelier

B8 : Ajouter méthode POST removeWorkshop dans le fichier app.js

Description : Modifier le fichier app.js afin d’ajouter la méthode POST removeWorkshop permettant de récupérer le nom de l’atelier sur le point d'être supprimé dans le body de index.ejs et ensuite d’appeler simplement la méthode removeWorkshopByName contenue dans le fichier InMemoryWorkshop.js. Après suppression par la méthode POST, on restera sur l’accueil par redirection.

Coût : 15 min/homme

Dépendance(s): B7

US liée(s)  : Suppression d’atelier



