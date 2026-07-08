# Backend API REST - Product Manager (Firebase & Vercel)

API REST  desarrollada en **Node.js** y **Express** utilizando **ESModules**. El sistema cuenta con una arquitectura robusta en capas, persistencia de datos en la nube, un sistema integrado de seguridad mediante tokens.

---

## 🚀 Características Principales

*   **Arquitectura en Capas:** Estructura modular basada en el patrón de diseño **Routes - Controllers - Services**, garantizando una separación clara de responsabilidades, código mantenible y escalable.
*   **Persistencia con Firebase:** Almacenamiento seguro y eficiente de datos en la nube mediante la integración del SDK oficial de Firebase.
*   **Autenticación con JWT:** Implementación de *JSON Web Tokens* (JWT) y middlewares personalizados para proteger el acceso a rutas restringidas de la aplicación.
*   **Despliegue Serverless:** Configurado de manera nativa mediante `vercel.json` para su distribución inmediata en **Vercel Functions**.

---

## 🛠️ Tecnologías Utilizadas

*   **Runtime:** Node.js (v18+)
*   **Framework:** Express.js
*   **Base de Datos / Cloud:** Firebase SDK
*   **Seguridad:** JSON Web Tokens (JWT) & Cookie Parser
*   **Despliegue:** Vercel (Serverless Environment)
*   **Logs & Diagnósticos:** Morgan & Http-Errors

---

## 📂 Estructura del Proyecto

El código está organizado de forma limpia según el rol de cada módulo:

```text
PRE_ENTREGA_NODE_JS/
└── Pre_Entrega_Marcos_Martinez/
    ├── bin/                # Scripts de inicialización del entorno local
    ├── controllers/        # Manejadores de las peticiones HTTP y respuestas
    ├── firebase/           # Configuración e inicialización del entorno Firebase
    ├── middlewares/        # Capa de seguridad y validaciones (Tokens de acceso)
    ├── models/             # Modelado y definición de estructuras de datos
    ├── routes/             # Enrutadores y definición de endpoints de la API
    ├── services/           # Lógica de negocio e interacción directa con la base de datos
    ├── utils/              # Herramientas de utilidad helper (Generadores de tokens, etc.)
    ├── app.js              # Inicialización y configuración centralizada de Express
    ├── vercel.json         # Configuración de reescrituras para el deploy en Vercel
    └── package.json        # Dependencias y scripts de ejecución

🖥️ Endpoints y Uso de la API

🔐 Rutas Públicas (Autenticación)

POST /auth/login: Valida las credenciales del usuario y devuelve el token JWT necesario para operar.

📦 Rutas Protegidas (Gestión de Productos)
GET /: Retorna el catálogo completo de productos guardados en Firebase.

POST /: Registra un nuevo producto en la base de datos.

PUT /:id: Actualiza las propiedades de un producto existente según su ID.

DELETE /:id: Remueve un producto específico del sistema



