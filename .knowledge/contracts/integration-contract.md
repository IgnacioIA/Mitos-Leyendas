# Integration Contract

## Objetivo

Este documento define el contrato de integración entre el frontend y el futuro backend del proyecto.

Su propósito es establecer reglas estables de comunicación que permitan desarrollar ambos sistemas de manera independiente, minimizando el acoplamiento y favoreciendo la evolución del proyecto a largo plazo.

Este documento no describe endpoints específicos ni detalles de implementación. Define únicamente los principios que deben mantenerse durante toda la vida del sistema.

---

# Filosofía

El frontend y el backend son aplicaciones independientes.

La única dependencia entre ambos debe ser el contrato definido en esta carpeta.

La implementación interna de cualquiera de los dos proyectos podrá evolucionar siempre que el contrato público permanezca estable.

El backend representa la única fuente de verdad del negocio.

El frontend representa la capa de presentación e interacción con el usuario.

---

# Principios de Integración

Toda comunicación entre frontend y backend deberá respetar los siguientes principios.

- Toda comunicación se realiza exclusivamente mediante la API.
- El frontend nunca accede directamente a la base de datos.
- El backend nunca expone detalles internos de persistencia.
- El backend valida todas las reglas del negocio.
- El frontend puede realizar validaciones para mejorar la experiencia del usuario, pero nunca reemplaza las validaciones del backend.
- Los contratos públicos deben mantenerse estables.
- Las modificaciones incompatibles deberán contemplar una estrategia de evolución del contrato.

---

# Responsabilidades del Frontend

El frontend es responsable de:

- presentar la información al usuario;
- consumir la API;
- enviar solicitudes válidas;
- administrar el estado de la interfaz;
- mejorar la experiencia de usuario mediante validaciones locales;
- respetar los contratos definidos por la API.

El frontend no es responsable de validar reglas oficiales del negocio.

---

# Responsabilidades del Backend

El backend es responsable de:

- validar todas las reglas del negocio;
- administrar la autenticación;
- administrar la autorización;
- consultar la base de datos;
- aplicar filtros;
- aplicar paginación;
- validar formatos de juego;
- validar reglas de construcción de mazos;
- proteger la información del sistema.

---

# Recursos Públicos

Los siguientes recursos forman parte del catálogo público del sistema.

- Cartas
- Expansiones
- Productos
- Formatos
- BanList pública

Estos recursos pueden consultarse sin autenticación.

La API determina qué información pública expone para cada recurso.

---

# Recursos Protegidos

Requieren autenticación todas las operaciones relacionadas con:

- perfil del usuario;
- creación de mazos;
- modificación de mazos;
- eliminación de mazos;
- administración del sistema.

---

# Contrato de Comunicación

La comunicación entre frontend y backend deberá cumplir las siguientes reglas.

## Consultas

Las consultas deberán admitir:

- paginación;
- filtros;
- ordenamiento cuando corresponda.

Los filtros son opcionales.

Cuando no existan filtros, la API devolverá el catálogo paginado.

No deberán existir consultas que devuelvan la totalidad del catálogo en una única respuesta.

## Búsquedas

Toda búsqueda deberá ejecutarse del lado del servidor.

El frontend nunca descargará el catálogo completo para realizar búsquedas locales.

---

# Garantías del Backend

El backend garantiza que:

- el contrato público permanecerá estable mientras sea posible;
- toda información devuelta cumple las reglas del negocio;
- las reglas oficiales se validan únicamente en el backend;
- los recursos públicos permanecen desacoplados de la persistencia;
- las respuestas representan información consistente del dominio.

---

# Suposiciones Permitidas para el Frontend

El frontend puede asumir que:

- todas las consultas de cartas utilizan paginación;
- los filtros son opcionales;
- las cartas poseen identificadores estables;
- las reglas del negocio fueron validadas por la API;
- los recursos públicos no requieren autenticación;
- los recursos protegidos requieren autenticación.

---

# Suposiciones Prohibidas para el Frontend

El frontend nunca debe asumir que:

- conoce la estructura de la base de datos;
- puede acceder directamente a la persistencia;
- una consulta devolverá todas las cartas existentes;
- una validación local reemplaza la validación del backend;
- el backend utiliza una tecnología específica;
- un recurso mantendrá siempre la misma implementación interna.

---

# Principios de Evolución

Los contratos deberán evolucionar respetando los siguientes principios.

- Priorizar compatibilidad con versiones anteriores.
- Evitar cambios incompatibles.
- Mantener estable el lenguaje del dominio.
- Separar cambios funcionales de cambios tecnológicos.
- Preservar el desacoplamiento entre frontend y backend.

---

# Criterios de Actualización

Actualizar este documento cuando:

- cambie la forma de comunicación entre frontend y backend;
- aparezcan nuevos tipos de recursos públicos;
- cambien las responsabilidades entre ambos sistemas;
- cambien las garantías del contrato;
- cambien los principios de integración.

No actualizar este documento por cambios internos de implementación.