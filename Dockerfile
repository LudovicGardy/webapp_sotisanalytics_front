# Utilise une image de base Node
FROM node:16-alpine

# Définit le répertoire de travail
WORKDIR /app

# Commandes de débogage pour voir le contenu du répertoire courant
RUN ls -la

# Copie d'abord uniquement les fichiers de dépendances
COPY package*.json ./

# Vérifie si les fichiers ont été correctement copiés
RUN ls -la && echo "Contenu du répertoire après copie des fichiers package.json"

# Installe les dépendances
RUN npm install

# Copie le reste du code source dans le conteneur
COPY . .

# Vérifie le contenu après la copie complète
RUN ls -la && echo "Contenu du répertoire après copie complète"

# Construit l'application
RUN npm run build

# Commande pour lancer l'application
CMD ["npm", "start"]
