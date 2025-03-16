# Étape de build
FROM node:16-alpine AS builder

# Définit le répertoire de travail
WORKDIR /app

# Debug - affiche le contenu initial
RUN ls -la

# Copie les fichiers de package.json
COPY package*.json ./

# Debug - vérifie si les fichiers ont été copiés
RUN ls -la

# Installe les dépendances
RUN npm ci

# Copie tous les fichiers source
COPY . .

# Debug - vérifie le contenu du répertoire src
RUN ls -la src/

# Construit l'application
RUN npm run build

# Étape de production - utilisation de serve pour servir les fichiers statiques
FROM node:16-alpine

# Définit le répertoire de travail
WORKDIR /app

# Installe serve globalement
RUN npm install -g serve

# Copie uniquement le répertoire build depuis l'étape précédente
COPY --from=builder /app/build ./build

# Expose le port 3000
EXPOSE 3000

# Commande pour servir les fichiers statiques
CMD ["serve", "-s", "build", "-l", "3000"]
