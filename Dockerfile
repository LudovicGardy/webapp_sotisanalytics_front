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

# Debug - vérifie le contenu final
RUN ls -la

# Construit l'application
RUN npm run build

# Étape de production
FROM node:16-alpine

# Définit le répertoire de travail
WORKDIR /app

# Copie package.json et package-lock.json
COPY package*.json ./

# Installe uniquement les dépendances de production
RUN npm ci --only=production

# Copie les fichiers build depuis l'étape précédente
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public

# Expose le port 3000
EXPOSE 3000

# Commande pour lancer l'application
CMD ["npm", "start"]
