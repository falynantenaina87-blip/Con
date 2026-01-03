# L1 G5 Mandarin Connect

Application Neo-Asian pour l'apprentissage du Mandarin.

## Configuration requise (CRITIQUE)

1. **Convex Backend** :
   - Lancez `npx convex dev` pour initialiser le backend.
   - Cela créera automatiquement les tables définies dans `schema.ts`.

2. **Google Gemini API** :
   - Obtenez une clé API sur [Google AI Studio](https://aistudio.google.com/).
   - Allez sur votre [Convex Dashboard](https://dashboard.convex.dev/).
   - Sélectionnez le projet.
   - Allez dans **Settings > Environment Variables**.
   - Ajoutez une variable nommée `GEMINI_API_KEY` avec votre clé.

## Démarrage

```bash
npm install
npx convex dev
npm run dev
```
