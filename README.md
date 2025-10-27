# 🚀 Agence Varek - Landing Page Moderne

Une landing page ultra-moderne et performante pour convertir vos visiteurs en clients WhatsApp avec un système de rotation automatique des numéros.

## ✨ Fonctionnalités Principales

### 🔢 **Système de Rotation des Numéros**
- **Comptage automatique** : Chaque clic sur les boutons WhatsApp est comptabilisé
- **Rotation intelligente** : Après 100 clics, le système passe automatiquement au numéro suivant
- **Persistance** : Les données sont sauvegardées dans le localStorage du navigateur
- **Pool de numéros** : Gestion de plusieurs numéros WhatsApp en rotation

### 🎨 **Design Moderne**
- **Animations fluides** : Transitions CSS3 avancées avec effets de parallaxe
- **Glassmorphism** : Effet de verre moderne sur les cartes
- **Particules flottantes** : Animation de particules en arrière-plan
- **Micro-interactions** : Effets hover sophistiqués et feedback tactile
- **Responsive design** : Optimisé pour mobile avec Bootstrap 5

### 📱 **Expérience Mobile**
- **Interface tactile** : Optimisée pour les gestes mobiles
- **Performance** : Chargement rapide et animations optimisées
- **Accessibilité** : Support des lecteurs d'écran et navigation au clavier

## 🛠️ Technologies Utilisées

- **React 19** - Framework JavaScript moderne
- **Bootstrap 5** - Framework CSS responsive
- **CSS3 Animations** - Animations et transitions avancées
- **LocalStorage** - Persistance des données côté client
- **Vite** - Build tool rapide et moderne

## 🚀 Installation et Démarrage

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev

# Build pour la production
npm run build
```

## ⚙️ Configuration

### Numéros WhatsApp
Modifiez le tableau `WHATSAPP_NUMBERS` dans `src/App.jsx` :

```javascript
const WHATSAPP_NUMBERS = [
  "2250584849917",  // Votre premier numéro
  "2250584849918",  // Votre deuxième numéro
  "2250584849919",  // Votre troisième numéro
  "2250584849920"   // Votre quatrième numéro
];
```

### Message WhatsApp
Personnalisez le message automatique :

```javascript
const WHATSAPP_MESSAGE = "Votre message personnalisé ici...";
```

## 📊 Fonctionnalités Avancées

### Compteur en Temps Réel
- Affichage du nombre total de contacts dans le header
- Indicateur de l'agent actuel (Agent #1, #2, etc.)
- Animation des badges lors des changements

### Animations CSS
- **slideInUp** : Apparition des éléments depuis le bas
- **pulse** : Pulsation des boutons CTA
- **bounce** : Animation des badges
- **float** : Mouvement des particules flottantes

### Effets Visuels
- **Glassmorphism** : Cartes avec effet de verre
- **Gradients animés** : Arrière-plans dynamiques
- **Particules** : 15 particules flottantes animées
- **Hover effects** : Effets au survol des boutons

## 🎯 Optimisations de Conversion

1. **Urgence visuelle** : Compteur en temps réel
2. **Social proof** : Indicateur d'agent actif
3. **CTA optimisés** : Boutons avec animations attractives
4. **Mobile-first** : Interface optimisée pour mobile
5. **Performance** : Chargement rapide et animations fluides

## 📱 Responsive Design

- **Mobile uniquement** : Interface optimisée pour smartphones
- **Breakpoint** : 768px (Bootstrap md)
- **Message desktop** : Redirection vers mobile recommandée

## 🔧 Personnalisation

### Couleurs
Modifiez les variables CSS dans le composant :

```javascript
style={{
  '--background-dark': '#0D1A13',
  '--text-primary': '#FFFFFF',
  '--text-secondary': '#95C6A9',
  '--accent-green': '#20DF6C',
  '--card-background': '#1A2D21',
}}
```

### Animations
Désactivez les animations pour les utilisateurs qui préfèrent :

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 📈 Analytics et Suivi

Le système enregistre automatiquement :
- Nombre total de clics sur les boutons WhatsApp
- Numéro d'agent actuellement actif
- Rotation automatique des numéros

## 🚀 Déploiement

```bash
# Build de production
npm run build

# Les fichiers sont générés dans le dossier dist/
# Déployez le contenu sur votre serveur web
```

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

---

**Développé avec ❤️ par l'équipe Agence Varek**
