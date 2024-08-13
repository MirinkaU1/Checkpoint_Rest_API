# API RESTful avec Node.js, Express, et Mongoose

## Description
Ce projet est une API RESTful simple qui permet de manipuler des utilisateurs dans une base de données MongoDB. Il est construit en utilisant Node.js, Express pour gérer les routes, et Mongoose pour la connexion et la manipulation de la base de données.

## Prérequis

- [Node.js](https://nodejs.org/) installé
- [MongoDB](https://www.mongodb.com/) installé ou un compte MongoDB Atlas
- [Postman](https://www.postman.com/downloads/) pour tester les routes

## Installation

1. **Initialiser le projet** :
    ```bash
    npm install
    ```
    
2. **Lancer le serveur** :
    ```bash
    npm start
    ```
    Le serveur devrait démarrer sur le port spécifié (par défaut : 3000).

## Structure du Projet

Voici la structure du projet après l'installation :
```
├── config/
│   └── .env
├── models/
│   └── User.js
├── server.js
├── package.json
└── README.md
```

- `config/.env` : Fichier de configuration des variables d'environnement.
- `models/User.js` : Définition du modèle utilisateur avec Mongoose.
- `server.js` : Configuration du serveur et définition des routes API.

## Routes de l'API

L'API supporte les routes suivantes :

### GET /users
- **Description** : Récupère la liste de tous les utilisateurs.
- **Exemple** :
    ```
    GET http://localhost:3000/users
    ```
    **Réponse** : Un tableau JSON contenant tous les utilisateurs.

### POST /users
- **Description** : Ajoute un nouvel utilisateur à la base de données.
- **Corps de la requête** :
    ```json
    {
      "name": "Jane Doe",
      "email": "jane@example.com",
      "age": 28
    }
    ```
- **Exemple** :
    ```
    POST http://localhost:3000/users
    ```
    **Réponse** : L'utilisateur ajouté avec un statut 201 (Created).

### PUT /users/:id
- **Description** : Modifie un utilisateur existant par son ID.
- **Paramètre** : `:id` est l'identifiant de l'utilisateur à modifier.
- **Corps de la requête** :
    ```json
    {
      "name": "Jane Smith"
    }
    ```
- **Exemple** :
    ```
    PUT http://localhost:3000/users/64cc0b3a5f0a3a2c78e41312
    ```
    **Réponse** : L'utilisateur mis à jour.

### DELETE /users/:id
- **Description** : Supprime un utilisateur existant par son ID.
- **Paramètre** : `:id` est l'identifiant de l'utilisateur à supprimer.
- **Exemple** :
    ```
    DELETE http://localhost:3000/users/64cc0b3a5f0a3a2c78e41312
    ```
    **Réponse** : Un message confirmant la suppression de l'utilisateur.

Voici comment tu peux tester les routes de ton API en utilisant Postman :

---

## Test des Routes avec Postman

Postman est un outil pratique pour tester les API en envoyant des requêtes HTTP et en visualisant les réponses. Voici comment tester chaque route de ton API :

### 1. **Installer Postman**

Si tu ne l'as pas encore, télécharge et installe Postman depuis [le site officiel](https://www.postman.com/downloads/).

### 2. **Tester les Routes**

#### **GET /users**

- **Description** : Récupère la liste de tous les utilisateurs.
- **Étapes** :
  1. Ouvre Postman et crée une nouvelle requête.
  2. Sélectionne le verbe HTTP `GET`.
  3. Dans le champ URL, entre : `http://localhost:3000/users`.
  4. Clique sur "Send".
  5. Vérifie que la réponse est un tableau JSON contenant tous les utilisateurs.

#### **POST /users**

- **Description** : Ajoute un nouvel utilisateur à la base de données.
- **Étapes** :
  1. Crée une nouvelle requête dans Postman.
  2. Sélectionne le verbe HTTP `POST`.
  3. Dans le champ URL, entre : `http://localhost:3000/users`.
  4. Va dans l'onglet "Body" et sélectionne "raw", puis choisis "JSON" dans le menu déroulant.
  5. Ajoute le corps de la requête en JSON, par exemple :
     ```json
     {
       "name": "Jane Doe",
       "email": "jane@example.com",
       "age": 28
     }
     ```
  6. Clique sur "Send".
  7. Vérifie que la réponse contient l'utilisateur nouvellement créé et que le statut est 201 (Created).

#### **PUT /users/:id**

- **Description** : Modifie un utilisateur existant par son ID.
- **Étapes** :
  1. Crée une nouvelle requête dans Postman.
  2. Sélectionne le verbe HTTP `PUT`.
  3. Dans le champ URL, entre : `http://localhost:3000/users/:id` (remplace `:id` par l'ID de l'utilisateur que tu souhaites modifier).
  4. Va dans l'onglet "Body" et sélectionne "raw", puis choisis "JSON" dans le menu déroulant.
  5. Ajoute le corps de la requête en JSON, par exemple :
     ```json
     {
       "name": "Jane Smith"
     }
     ```
  6. Clique sur "Send".
  7. Vérifie que la réponse contient l'utilisateur mis à jour.

#### **DELETE /users/:id**

- **Description** : Supprime un utilisateur existant par son ID.
- **Étapes** :
  1. Crée une nouvelle requête dans Postman.
  2. Sélectionne le verbe HTTP `DELETE`.
  3. Dans le champ URL, entre : `http://localhost:3000/users/:id` (remplace `:id` par l'ID de l'utilisateur que tu souhaites supprimer).
  4. Clique sur "Send".
  5. Vérifie que la réponse contient un message confirmant la suppression de l'utilisateur.

### 3. **Sauvegarder les Requêtes**

- Dans Postman, tu peux sauvegarder chaque requête en cliquant sur "Save". Cela te permet de les réutiliser plus tard sans devoir entrer les informations à nouveau.

### 4. **Visualiser les Réponses**

- Après avoir cliqué sur "Send", tu pourras voir la réponse dans la partie inférieure de la fenêtre Postman. Vérifie les données JSON renvoyées, ainsi que le statut HTTP pour t'assurer que tout fonctionne correctement.

---
