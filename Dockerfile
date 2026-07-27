# --- Stage 1: Builder ---
FROM node:22.19-alpine AS builder
WORKDIR /app

ARG NEXT_PUBLIC_API_MOCKING=false
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

COPY package*.json ./
RUN npm ci --ignore-scripts

COPY . .
RUN npm run build

# --- Stage 2: Runtime ---
FROM node:22.19-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Copy standalone output & public folder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
USER node

# Run standalone server directly with node (no npm start required)
CMD ["node", "server.js"]
