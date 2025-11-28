# Nimbus - Framework Serverless Multi-Cloud

Un framework moderne et Express-like pour développer des applications serverless multi-cloud (AWS, GCP, Azure, Cloudflare, Vercel) avec une API unifiée et simple.

## 👤 Auteur

**Minou Matoko Nkalou**  
📧 minou.matokonkalou@viacesi.fr

---

## 📋 Description

Ce projet est un framework serverless multicloud Express-like en TypeScript, conçu pour simplifier le développement d'applications serverless multi-cloud. Il permet aux développeurs d'écrire du code serverless de manière simple et familière (comme Express.js), tout en étant compatible avec plusieurs providers cloud.

### Objectifs d'apprentissage

Ce framework est également conçu comme un fil rouge pour apprendre :
- **TypeScript avancé** (generics, mapped types, conditional types, etc.)
- **Architectures serverless** (Lambda, Cloud Functions, Workers)
- **Concepts cloud** (multi-provider, event-driven, IaC)
- **Performance** (cold start reduction, bundle optimization)
- **Testing** (unit, integration, E2E avec LocalStack)

## 🎯 Vision du Projet

Créer un framework qui permet aux développeurs d'écrire du code serverless de manière simple et familière (comme Express.js), tout en étant **multi-cloud** (AWS, GCP, Azure, Cloudflare, Vercel).

> ⚠️ **Status** : Ce projet est actuellement en cours de développement.

**L'innovation clé** : L'utilisateur déclare explicitement le **type de service** qu'il utilise (`http`, `queue`, `cron`, `bucket`), et le framework route automatiquement vers le bon service du provider via un adaptateur.

### Exemple d'utilisation cible

```typescript
import { http, queue, cron } from "nimbus";

// HTTP - Express-like
http.get("/hello/:name", (req, res) => {
  return res.json({ message: `Hello ${req.params.name}` });
});

// Queue - Simple subscription
queue.subscribe("billing", async (ctx) => {
  console.log("Received billing event", ctx.body);
  return ctx.ok();
});

// Cron - Scheduled tasks
cron.every("5 minutes", async () => {
  console.log("Running scheduled task...");
});
```

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│  Service Layer (API utilisateur Express-like)           │
│  http.get(), queue.subscribe(), cron.every()            │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│  Core Runtime (Router universel + Middleware)           │
│  - Gestion des handlers par type de service            │
│  - Pipeline middleware async                          │
│  - Normalisation Request/Response                      │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│  Adapters (Provider-specific)                           │
│  AWS, GCP, Azure, Cloudflare, Vercel                    │
│  - Normalisation event provider → universel            │
│  - Exécution via core.execute()                        │
│  - Conversion réponse universelle → provider           │
└─────────────────────────────────────────────────────────┘
```

## 📦 Structure du Projet (à créer progressivement)

```
serverless-framework/
├── src/
│   ├── core/              # Runtime universel
│   │   ├── types.ts
│   │   ├── index.ts
│   │   └── router.ts
│   ├── services/          # Service layer (http, queue, cron)
│   │   ├── http.ts
│   │   ├── queue.ts
│   │   └── cron.ts
│   ├── adapters/          # Adaptateurs providers
│   │   ├── aws/
│   │   ├── gcp/
│   │   └── cloudflare/
│   ├── plugins/           # Plugins (CORS, bodyParser, etc.)
│   ├── cli/               # CLI tools
│   └── build/             # Build system
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/               # Tests avec LocalStack
├── examples/              # Exemples d'utilisation
├── docs/                  # Documentation
├── CURSOR_PROMPT.md      # Prompt pour Cursor
└── README.md             # Ce fichier
```

## 🚀 Plan d'Apprentissage

Le projet est divisé en **8 sprints** :

1. **Sprint 0** : Configuration & Setup
2. **Sprint 1** : Core Runtime Minimal
3. **Sprint 2** : Service Layer
4. **Sprint 3** : Adapter AWS + LocalStack
5. **Sprint 4** : Optimisations & Cold Start Reduction
6. **Sprint 5** : Observabilité & Tests Avancés
7. **Sprint 6** : CLI & Packaging
8. **Sprint 7** : Plugins System
9. **Sprint 8** : Documentation & Finalisation

Chaque sprint contient :
- Objectifs clairs
- Fichiers à créer
- Concepts à apprendre
- Exercices pratiques

## 🛠️ Technologies

- **TypeScript** (strict mode)
- **esbuild** (bundling ultra-rapide)
- **vitest** (tests)
- **LocalStack** (simulation AWS locale)
- **Docker** (pour LocalStack)

## 📖 Ressources d'Apprentissage

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Type Challenges](https://github.com/type-challenges/type-challenges)

### Serverless
- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/)
- [Serverless Framework Docs](https://www.serverless.com/framework/docs)

### LocalStack
- [LocalStack Documentation](https://docs.localstack.cloud/)

## 🎓 Objectifs d'Apprentissage

En fin de projet, j'auras appris :

### TypeScript
- ✅ Types génériques avec contraintes
- ✅ Mapped types et utility types
- ✅ Conditional types
- ✅ Type inference avancée
- ✅ Type-level programming

### Cloud & Serverless
- ✅ Cold start et techniques de réduction
- ✅ Event-driven architecture
- ✅ Multi-provider abstraction
- ✅ Infrastructure as Code

### Architecture
- ✅ Adapter pattern
- ✅ Middleware pattern
- ✅ Plugin architecture
- ✅ Service abstraction layer

### Performance
- ✅ Bundle optimization
- ✅ Lazy loading
- ✅ Tree shaking
- ✅ Code splitting

## 🧪 Testing avec LocalStack

LocalStack permet de tester AWS localement sans coût :
- Lambda functions
- API Gateway
- SQS queues
- EventBridge rules
- S3 buckets


## 📬 Contact

Pour toute question ou suggestion concernant ce projet :

**Minou Matoko Nkalou**  
📧 minou.matokonkalou@viacesi.fr

