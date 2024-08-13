// Importation des packages requis
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from './models/user.js';

// Créer l'application express
const app = express();

// Charger les variables d'environnement
dotenv.config({ path: './config/.env' });

// Middleware pour analyser le JSON
app.use(express.json());

// Connexion à MongoDB et lancement du serveur
const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGO_URI;
const connectDB = async () => {
    try {
        await mongoose.connect(MONGOURL, {});
        app.listen(PORT, () => {
            console.log(
                `Base de donnée connectée! 
Le serveur est lancée au port http://localhost:${PORT}/`
            );
        });
        } catch (err) {
        console.error('Erreur de la connexion:', err);
    }
};
connectDB();

// GET : Retourner tous les utilisateurs
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST : Ajouter un nouvel utilisateur à la base de données
app.post('/users', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT : Modifier un utilisateur par ID
app.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE: Supprimer un utilisateur par ID
app.delete('/users/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'Utilisateur supprimé' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Tester les routes

// GET : http://localhost:3000/users
// POST : http://localhost:3000/users
//  Body : { "name": "John Doe", "email": "john@example.com", "age": 30 }
// PUT : http://localhost:3000/users/id
//  Body : { "name": "John Smith" }
// DELETE : http://localhost:3000/users/id