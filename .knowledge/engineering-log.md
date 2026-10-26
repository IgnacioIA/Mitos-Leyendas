# Engineering Log

## Objetivo

Registrar cronológicamente la evolución técnica del proyecto.

Cada entrada representa un objetivo completado, independientemente del tiempo que haya llevado realizarlo.

Este archivo constituye la fuente principal de conocimiento del proyecto y servirá posteriormente para generar:

- publicaciones técnicas;
- resúmenes semanales;
- contexto para IA;
- documentación de decisiones;
- material para portfolio;
- retrospectivas del proyecto.

No es un diario personal ni un changelog.

Su propósito es registrar el razonamiento detrás del desarrollo.

---

# Plantilla

---

## Fecha

AAAA-MM-DD

---

## Objetivo

¿Qué objetivo se completó?

---

## Problema

¿Qué problema existía?

---

## Solución

¿Qué se implementó?

---

## ¿Por qué esta solución?

Explicar brevemente el razonamiento.

---

## Resultado

¿Qué cambió en el proyecto?

---

## Aprendizajes

¿Qué aprendiste durante este objetivo?

---

## Próximo objetivo

¿Cuál es el siguiente paso lógico?

---

# Entradas

Las nuevas entradas deberán agregarse en orden cronológico.

Cada entrada debe representar un objetivo completamente finalizado.
---

## Fecha

2026-10-26

---

## Objetivo

Implementar la página **Línea del Tiempo** reproduciendo el modelo visual v10 (Hero + recorrido vertical de nueve etapas con eje de progreso, marcador de años, fondo difuminado dinámico, interludio, navegador lateral y cierre).

---

## Problema

El modelo es un HTML autónomo con JS imperativo (`innerHTML`, listeners de scroll, `position: fixed`). Había que llevarlo a la arquitectura del sitio (página → secciones → componentes, datos centralizados, CSS por componente) sin perder fidelidad y conviviendo con el header sticky y el Footer.

---

## Solución

- `LineaDelTiempoHero` y `LineaDelTiempoRecorrido`; el Recorrido coordina un único hook (`useRecorridoScroll`) y siete componentes de presentación (`RecorridoFondo`, `RecorridoEje`, `RecorridoEtapa`, `RecorridoTarjeta`, `RecorridoGaleria`, `RecorridoInterludio`, `RecorridoNavegador`).
- Datos de las nueve etapas en un archivo; imágenes por nombre de archivo explícito. La correspondencia carta ↔ nombre se verificó comparando por píxeles los assets con las imágenes embebidas en el modelo.
- Progreso del eje con `useMotionValue` + `useSpring`; fondo y acento escritos en el DOM; estado de React solo al cambiar de etapa.
- Galería con Embla (`useCarousel`).

---

## ¿Por qué esta solución?

Un solo marcador (53 % de la ventana) y una sola función de actualización mantienen coherentes el eje, los años, el fondo y el navegador. Escribir en el DOM y usar `MotionValue` evita re-renders por cuadro.

---

## Resultado

`/LineaDelTiempo` funciona y el menú/Home apuntan a ella. Con Chrome headless (CDP), las mediciones de layout coinciden con el modelo en 1440, 1280, 1000, 768 y 375 px; la única diferencia intencional es el alto del Hero, que descuenta el header.

---

## Aprendizajes

- El patrón sticky con `margin-bottom: -100dvh` deja el fondo pegado hasta 100dvh por debajo de su contenedor: hace falta `overflow: clip` en la sección.
- `useScroll({ target })` de Framer avisa en desarrollo si `<html>` es `position: static`; calcular el progreso en la misma función de scroll evita el aviso y unifica criterios.

---

## Próximo objetivo

Optimizar el peso de las imágenes de la página (banners PNG de 2 a 3,7 MB) y decidir si se elimina `/HistoriaMYL`.
