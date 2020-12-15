# Projet "Goweb store"

Lien du projet : [https://github.com/Lucasbeneston/goweb_store](https://github.com/Lucasbeneston/goweb_store)

## Informations générales

"Goweb store" est un projet Front-End de création d'un site de e-commerce fictif, dans le but de réaliser plusieurs fonctionnalités (gestion d'un panier, intégration, carrousel d'images, etc.). Réalisé en React, ce projet ne possède ni de back-end, ni de base de données et aucuns articles ne pourras être acheté !

## Réalisations

Liste des réalisations :

- **Intégration** depuis une maquette desktop / création de la version mobile.
- **Mobile first** / responsive desktop.
- **Gestion d'affichage** du bandeau d'alerte en **sessions storage**.
- **Carrousel manuel de photos** (association miniature / visuel grand format).
- **Gestion du panier en local storage** (affichage / ajout / suppression de produits).
- **Création d'inputs** de type select / number sous forme de composant.
- **Création d'un burger menu** pour la version mobile.
- **Création de composants réutilisables** (ex : fiche produit).
- **Gestion des erreurs** d'URL.
- **Validation visuelle** du bouton d'ajout d'un produit (disabled ou non).
- **Accessibilité** (aria-label, event onKeyDown, tabIndex, alt, etc.)

## Technologies

Liste (non exhaustive) des technologies et packages utilisés :

- [React](https://www.npmjs.com/package/react) : v 17.0.1
- [Node](https://nodejs.org/en/) : v 14.15.1
- [Node-sass](https://www.npmjs.com/package/node-sass) : v 4.14.1
- [ESLint](https://www.npmjs.com/package/eslint) : v 7.15.0
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) : v 5.2.0
- [react-fontawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome) : v 0.1.13
- [prop-types](https://www.npmjs.com/package/prop-types) : v 15.7.2
- [Husky](https://www.npmjs.com/package/husky) : v 4.3.4

## Démarrer le projet

Dans un terminal, exécuter ces lignes :

`$ git clone https://github.com/Lucasbeneston/goweb_store`

`$ cd ../path/to/the/file`

`$ npm install`

`$ npm start`

## Architecture

--- **.src**

&emsp; |--- **/components** : _Ensemble des composants + styles de l'application_

&emsp; &emsp; |--- **/\_settings** : _Fichiers Sass (variables, mixins, ...)_

&emsp; &emsp; &emsp; &emsp;|--- **/\_base.scss** : _Gère les styles de base du fichier (body, font-size, ...)_

&emsp; &emsp; &emsp; &emsp;|--- **/\_mixins.scss** : _Gère la partie responsive (media queries)_

&emsp; &emsp; &emsp; &emsp;|--- **/\_reset.scss** : _Remise à zéro des styles par défaut des navigateurs_

&emsp; &emsp; &emsp; &emsp;|--- **/\_variables.scss** : _Liste des variables (couleurs)_

&emsp; &emsp; |--- **/atoms** : _Composants individuels de petites tailles_

&emsp; &emsp; &emsp; &emsp;|--- **/Inputs** : _Composants d'inputs de type "select" et "number" + styles_

&emsp; &emsp; &emsp; &emsp;|--- **/SVG** : _Fichiers SVG (Logo ou symboles)_

&emsp; &emsp; |--- **/molecules** : _Composants moyens (groupement d'atoms)_

&emsp; &emsp; &emsp; &emsp;|--- **/Banner** : _Composant de la bannière + style_

&emsp; &emsp; &emsp; &emsp;|--- **/Nav** : _Composant de la barre de navigation + style_

&emsp; &emsp; &emsp; &emsp; ...

&emsp; &emsp; |--- **/organisms** : _Composants fonctionnels (groupement de molécules / atomes)_

&emsp; &emsp; &emsp; &emsp;|--- **/Header** : _Composant du Header + style_

&emsp; &emsp; &emsp; &emsp;|--- **/Footer** : _Composant du Footer + style_

&emsp; &emsp; &emsp; &emsp;|--- **/CarouselImages** : _Composant du carroussel d'images d'articles + style_

&emsp; &emsp; &emsp; &emsp; ...

&emsp; &emsp; |--- **/pages** : _Composants des vues de l'application (groupement de molécules)_

&emsp; &emsp; &emsp; &emsp;|--- **/Item** : _Page d'un article + style_

&emsp; &emsp; &emsp; &emsp;|--- **/NoMatch** : _Page d'erreur d'affichage + style_

&emsp; &emsp; &emsp; &emsp;|--- **/ShoppingCart** : _Page du panier + style_

&emsp; &emsp; &emsp; &emsp; ...

&emsp; &emsp; |--- **Routes.jsx** : _Gère l'affichage des vues de l'application_

&emsp; |--- **/contexts** : _Contexts et dispatch de l'application_

&emsp; &emsp; |--- **/CartContext** : _Gestion de l'état du panier_

&emsp; &emsp; |--- **/HeaderContext** : _Gestion de l'état du header_

&emsp; |--- **/data** : _Tableaux des données (JSON) pour simuler une base de données_

&emsp; &emsp; |--- **item.js** : _Données de l'article "manteau"_

&emsp; &emsp; |--- **moreItems.js** : _Données des articles en plus_

--- **App.jsx** : _Point d'entrée d'application qui représente l'architecture HTML du body_

--- **App.scss** : _Fichier de style qui fait le lien entre les fichiers "\_settings" et "App.jsx"_

--- **Index.jsx** : _Fichier qui fait le lien entre "App.jsx" et "index.html"_

## Illustrations

![Illustration du projet](https://github.com/Lucasbeneston/goweb_store/blob/master/public/assets/project_illustration.jpg)
