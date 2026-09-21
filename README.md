# CL_0002 — Kenia & Kerem
Invitación digital interactiva de StudioICrea.

## Editar el evento
La mayoría de datos se modifican en `js/config.js`:
- nombres y edad
- fecha, hora y lugar
- URL de Google Maps
- teléfono/mensaje de WhatsApp
- regalos
- recomendación
- textos de portada/cierre
- módulos habilitados

## Imagen
`assets/images/hero.png` contiene únicamente la ilustración. Los textos están en HTML/config para mantener la plantilla reutilizable.

## Probar localmente
Abrir `index.html` o usar Live Server en VS Code.

## GitHub Pages
Subir el contenido del proyecto a un repositorio y activar Pages desde la rama principal/root.


## Versión 1.1.0
- Iconos SVG para fecha, hora, lugar, WhatsApp, Google Maps y regalos.
- Módulo independiente de música de fondo.
- Coloca el audio en `assets/audio/background.mp3`.
- Activa/desactiva música con `EVENT_CONFIG.modules.music` y `EVENT_CONFIG.music.enabled`.
- Nota: los navegadores móviles pueden bloquear autoplay; el módulo inicia en la primera interacción si ocurre.


## v1.3.0
- Hero actualizado con la jerarquía visual de la vista previa aprobada.
- Fecha visible en el hero, generada desde `EVENT_CONFIG.event.date`.
- Kicker, nombres, edad y frase continúan editables desde `config.js`.
