# Utilise une image de base Node
FROM node:16-alpine

# Définit le répertoire de travail
WORKDIR /app

# Installe les dépendances
COPY package.json package-lock.json .
RUN npm install

# Copie le code source dans le conteneur
COPY . .

# Construit l'application
RUN npm run build

# Commande pour lancer l'application
CMD ["npm", "start"]
