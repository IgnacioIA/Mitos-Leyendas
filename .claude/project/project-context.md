# Contexto del Proyecto

## Descripción

Este repositorio contiene el frontend oficial del sitio web de Mitos y Leyendas (MYL), el Trading Card Game desarrollado en Chile.

El objetivo principal es ofrecer una experiencia moderna para presentar expansiones, productos e información oficial del juego.

Este proyecto está diseñado para evolucionar de forma desacoplada de la futura API, permitiendo integrar un backend basado en Spring Boot, DDD y Clean Architecture sin modificar la arquitectura del frontend.

---

## Objetivos

- Presentar las expansiones oficiales.
- Mostrar productos asociados a cada expansión.
- Centralizar información oficial del juego.
- Facilitar el ingreso de nuevos jugadores.
- Mantener una experiencia visual consistente con la identidad de MYL.

---

## Alcance actual

Actualmente el proyecto incluye:

- Home.
- Expansiones.
- Productos.
- Aprende a jugar.
- Lore.
- Formatos.
- Lista de baneados.
- Teams oficiales.
- Tiendas amigas.

El sitio continuará creciendo mediante nuevas expansiones y futuras funcionalidades administrativas.

---

## Filosofía del proyecto

El frontend sigue los siguientes principios:

- Componentes reutilizables.
- CSS propio.
- Arquitectura modular.
- Separación clara entre UI y lógica.
- Preparado para consumir una API REST.
- Escalable a largo plazo.

---

## Arquitectura futura

Este frontend está preparado para integrarse con una API desarrollada en Spring Boot utilizando DDD y Clean Architecture.

Los contratos de integración y el modelo conceptual del dominio se documentan dentro de la carpeta `contracts/`.