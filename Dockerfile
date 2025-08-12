# Gunakan image Node.js versi LTS
FROM node:18-alpine AS builder

WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua source code ke dalam container
COPY . .

# Build Next.js app
RUN npm run build

# Production image, hanya berisi hasil build
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Salin package.json dan .next hasil build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"]