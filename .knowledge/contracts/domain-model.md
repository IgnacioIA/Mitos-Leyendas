# Domain Model

## Objetivo

Este documento describe el modelo conceptual del negocio.

Su propósito es establecer un lenguaje compartido entre el frontend y el backend, independientemente de la tecnología utilizada.

El modelo representa conceptos del dominio y sus relaciones, no estructuras de persistencia.

---

# Filosofía

El dominio debe describir el negocio tal como lo entienden los usuarios y las reglas oficiales de Mitos y Leyendas.

Este documento nunca debe depender de:

- React;
- Spring Boot;
- PostgreSQL;
- JSON;
- DTOs;
- tablas;
- clases.

---

# Contextos del dominio

Actualmente el sistema se divide en los siguientes contextos funcionales.

## Catálogo

Responsable de consultar la información oficial del juego.

Incluye:

- Cartas
- Expansiones
- Productos
- Formatos
- BanList

---

## Usuarios

Responsable de la autenticación y gestión de perfiles.

Incluye:

- Usuarios
- Roles

---

## Mazos

Responsable de la creación, validación y publicación de mazos.

Incluye:

- Mazos
- Cartas referenciadas
- Formatos

---

## Administración

Responsable de administrar el contenido oficial del sistema.

Incluye:

- Cartas
- Productos
- Expansiones
- Usuarios

---

## Fidelización (Futuro)

Contexto reservado para futuras funcionalidades relacionadas con:

- puntos;
- tarjetas físicas;
- beneficios;
- programas de fidelización.

No forma parte del alcance actual.

---

# Modelo conceptual

## Carta

Representa una carta oficial de Mitos y Leyendas disponible para consulta, filtrado y construcción de mazos.

En la versión actual del sistema, una carta representa una impresión física única del juego.

Cada carta posee un identificador único y contiene toda la información necesaria para ser consultada por el frontend.

---

## Expansión

Representa una colección oficial de cartas publicada por MYL.

Una expansión introduce nuevas cartas, nuevas mecánicas y nuevos productos físicos.

Una carta puede formar parte de múltiples expansiones.

---

## Producto

Representa un producto físico comercializado por MYL.

Ejemplos:

- Display
- Booster
- Kit de Batalla
- Mazo Inicial
- Toolkit
- Lootbox

Todos los productos pertenecen al concepto general de Producto.

---

## Usuario

Representa una persona registrada dentro del sistema.

Los usuarios registrados pueden:

- autenticarse;
- crear mazos;
- administrar sus propios mazos;
- compartir públicamente sus mazos.

La consulta del catálogo oficial de cartas y productos forma parte de las funcionalidades públicas del sistema y no requiere una cuenta de usuario.

Actualmente existen únicamente dos roles:

- Usuario
- Administrador

---

## Mazo

Representa una colección de cartas creada por un usuario.

Cada mazo:

- pertenece a un único usuario;
- pertenece a un único formato;
- posee un nombre;
- posee una descripción;
- puede compartirse públicamente.

No existe edición colaborativa.

---

## Formato

Representa un conjunto oficial de reglas del juego.

Cada formato determina:

- cartas permitidas;
- restricciones;
- reglas de validación;
- BanList correspondiente.

Las reglas de un mazo siempre dependen del formato seleccionado.

---

## BanList

Representa el conjunto oficial de restricciones aplicables a un formato determinado.

Forma parte de las reglas utilizadas durante la validación de un mazo.

---

# Relaciones

- Una expansión contiene múltiples cartas.
- Una expansión contiene múltiples productos.
- Una carta puede pertenecer a múltiples expansiones.
- Un usuario puede crear múltiples mazos.
- Cada mazo pertenece a un único usuario.
- Cada mazo pertenece a un único formato.
- Un formato define las reglas de validación del mazo.
- Una BanList pertenece a un formato.

---

# Reglas del negocio

## Cartas

- Cada carta posee un identificador único.
- Las cartas son únicamente consultables.
- Las cartas pueden filtrarse utilizando múltiples criterios.
- La validación de cartas siempre corresponde al backend.

---

## Mazos

- Cada usuario puede crear hasta tres mazos por formato.
- Un mazo pertenece a un único usuario.
- Un mazo puede compartirse públicamente.
- Un mazo nunca posee múltiples propietarios.
- No existe edición colaborativa.

---

## Usuarios

- Existen únicamente dos roles.
- Los permisos dependen del rol asignado.

---

## Formatos

- Cada formato define sus propias reglas.
- La validación de un mazo depende siempre del formato.

---

# Evolución prevista

El modelo actual representa una carta como una unidad única.

Si en el futuro aparecen funcionalidades relacionadas con:

- reimpresiones;
- artes alternativas;
- colección personal;
- agrupación de versiones de una misma carta;

el dominio podrá evolucionar incorporando una entidad conceptual adicional que agrupe múltiples impresiones de una misma carta.

Esta evolución no deberá romper el contrato público entre frontend y backend.

---

# Criterios de actualización

Actualizar este documento únicamente cuando cambie el dominio del negocio.

No actualizar este documento por cambios internos de implementación.