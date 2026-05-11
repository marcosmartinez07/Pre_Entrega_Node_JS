CLI Product Manager - FakeStore API
Este es un proyecto de consola (CLI) desarrollado en Node.js que permite interactuar con la API de FakeStore. El sistema procesa comandos directamente desde la terminal para consultar información de productos en tiempo real utilizando operaciones asíncronas.

🚀 Características
Consumo de API: Integración con FakeStore API mediante fetch.

Interfaz de Línea de Comandos: Manejo dinámico de argumentos con process.argv.

Arquitectura Moderna: Configurado para utilizar ESModules (import/export).

Procesamiento de Datos: Uso de desestructuración y métodos avanzados de arrays para la manipulación de la información recibida.

🛠️ Requisitos Previos
Node.js (Versión 18 o superior recomendada por el soporte nativo de fetch).

npm (instalado junto con Node.js).

📦 Instalación y Configuración
Clona este repositorio o crea tu directorio de trabajo.

Inicializa el proyecto y asegúrate de tener las dependencias listas:


npm install
Verifica que el archivo package.json contenga la propiedad "type": "module".

🖥️ Uso del Programa
El sistema se ejecuta mediante el script start. Los comandos siguen la estructura: npm run start <MÉTODO> <RECURSO>.

1. Consultar todos los productos
Para obtener la lista completa de productos disponibles:

npm run start GET products

2. Consultar un producto específico
Para obtener el detalle de un solo producto, añade el ID al final de la ruta:


npm run start GET products/15

📂 Estructura del Proyecto
index.js: Punto de entrada de la aplicación. Contiene la lógica de captura de argumentos y las llamadas asíncronas.

package.json: Configuración del proyecto, scripts de ejecución y definición de módulos.

Notas de Implementación
El proyecto utiliza programación asíncrona (async/await) para garantizar que la interfaz no se bloquee mientras se espera la respuesta del servidor. La lógica de filtrado de argumentos permite que el programa sea escalable para futuros métodos de la API.
