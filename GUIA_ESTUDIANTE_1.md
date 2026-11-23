# Guía de trabajo — Estudiante 1

## 1. Servicio elegido: Manos al Hogar

**Problema real:** en muchas casas se acumulan arreglos pequeños: una puerta que roza, una repisa por instalar, un mueble sin montar o una manija floja. Son tareas que no siempre justifican contratar una obra o un especialista, pero que requieren tiempo, herramientas y cuidado.

**Propuesta:** un servicio local de mantenimiento doméstico ligero, con alcance definido, presupuesto previo y coordinación por zona y horario.

### Qué ofrecer al inicio
- Montaje de muebles que incluyan manual.
- Instalación de repisas, cortineros, cuadros y accesorios.
- Ajuste de bisagras, manijas, cajones y puertas.
- Revisión visual inicial de grifos y accesorios domésticos.
- Mantenimiento sencillo de muebles y elementos del hogar.

### Qué NO ofrecer sin personal habilitado
No aceptar trabajos de gas, instalaciones eléctricas, estructuras, techos peligrosos, trabajos en altura ni reparaciones que requieran licencia o certificación. Ante una fuga, olor a gas, chispa, cable expuesto o riesgo estructural, detenerse y recomendar un profesional autorizado. No prometer certificaciones, seguros o antecedentes verificados si no existen.

### Diferenciadores que hacen útil el servicio
1. **Precio antes de empezar:** explicar mano de obra, materiales y posibles extras.
2. **Alcance por escrito:** confirmar qué se arreglará y qué queda fuera.
3. **Fotos previas:** pedir imágenes para evaluar si el trabajo es apropiado.
4. **Agenda por zonas:** agrupar visitas en barrios cercanos para reducir traslados.
5. **Lista de materiales:** indicar con anticipación qué debe comprar el cliente.
6. **Cierre del trabajo:** mostrar el resultado y confirmar que el cliente quedó conforme.

## 2. Ideas adicionales para ampliar Manos al Hogar

Estas son líneas que pueden añadirse después de validar la demanda. No es necesario implementarlas todas en la primera versión.

| Idea | Necesidad que resuelve | Cómo podría funcionar |
|---|---|---|
| Preparación de vivienda para alquiler | Propietarios necesitan dejar un inmueble listo entre inquilinos | Lista de revisión, retoques menores y limpieza coordinada |
| Armado de muebles a domicilio | Personas compran muebles en caja y no tienen herramientas o tiempo | Precio por tipo de mueble y complejidad |
| Instalación de accesorios de baño | Falta de barras, portarrollos, espejos y organizadores | Catálogo de instalaciones sencillas, previa revisión de pared |
| Mantenimiento preventivo | Los problemas pequeños se convierten en reparaciones costosas | Visita programada con checklist visual |
| Ayuda para mudanzas pequeñas | Se necesita desmontar, proteger y volver a montar muebles | Servicio por horas y volumen, sin transporte pesado al inicio |
| Adaptación doméstica básica | Adultos mayores o personas con movilidad reducida necesitan espacios más cómodos | Instalación de elementos simples, siempre con evaluación de seguridad y profesional cuando corresponda |
| Puesta a punto de habitaciones | Familias necesitan preparar un cuarto para bebé, estudio o visita | Montaje, organización e instalación de accesorios |
| Limpieza de patios y exteriores pequeños | Se acumulan hojas, polvo y tareas de mantenimiento | Paquetes por tamaño y frecuencia |

**Recomendación:** empezar con tres categorías fáciles de explicar: montaje, instalaciones sencillas y ajustes de muebles/puertas. Medir qué solicitan más los clientes antes de invertir en herramientas o ampliar el catálogo.

## 3. Cómo está organizado el proyecto

```text
servicios_colaborativos/
├── index.html       # Portada y presentación de los dos servicios
├── servicio1.html   # Manos al Hogar (Estudiante 1)
├── servicio2.html   # Mesa Lista (Estudiante 2)
├── style.css        # Estilos compartidos
├── script.js        # Interacciones compartidas
└── GUIA_ESTUDIANTE_1.md
```

Los tres HTML enlazan al mismo `style.css` y `script.js`. Cada estudiante puede trabajar en su propia página y coordinar con el compañero los cambios a archivos compartidos.

## 4. Comandos Git que debes aplicar como Estudiante 1

> Ejecuta los comandos desde la carpeta raíz del proyecto, en la terminal de VS Code. Cambia `USUARIO` y `REPO` por los datos reales del repositorio.

### A. Crear el repositorio remoto (solo quien sea dueño del repositorio)
1. Crea un repositorio en GitHub, por ejemplo `servicios-colaborativos`.
2. No crees otro README remoto si ya vas a subir esta carpeta con su propio README, para evitar conflictos iniciales.
3. Copia la URL HTTPS del repositorio.

### B. Preparar y subir la versión inicial a `main`

```bash
git init
git add .
git status
git commit -m "chore: crear estructura inicial del sitio"
git branch -M main
git remote add origin https://github.com/USUARIO/REPO.git
git push -u origin main
```

- `git init`: convierte la carpeta actual en un repositorio Git.
- `git add .`: prepara los archivos actuales para el próximo commit.
- `git status`: muestra qué está preparado y qué falta.
- `git commit`: guarda una versión en el historial local.
- `git branch -M main`: renombra la rama actual a `main`.
- `git remote add origin`: conecta el repositorio local con GitHub.
- `git push -u origin main`: publica `main` y establece su seguimiento remoto.

Si el repositorio ya fue inicializado y conectado, **no repitas** `git init` ni `git remote add origin`.

### C. Crear tu rama de Estudiante 1

Primero asegúrate de estar en `main` y actualizado:

```bash
git switch main
git pull origin main
git switch -c feat/manos-al-hogar
```

`git switch -c` crea la rama y te cambia a ella. El nombre `feat/manos-al-hogar` deja claro que trabajas en la funcionalidad/página del servicio 1.

### D. Trabajar y guardar tus avances

Después de editar `servicio1.html`, o los archivos acordados:

```bash
git status
git add servicio1.html
git diff --cached
git commit -m "feat: desarrollar pagina Manos al Hogar"
git push -u origin feat/manos-al-hogar
```

Si también modificaste estilos o JavaScript compartidos, inclúyelos explícitamente:

```bash
git add servicio1.html style.css script.js
```

Puedes hacer varios commits pequeños, por ejemplo:
- `feat: agregar catalogo de tareas domesticas`
- `style: mejorar diseño responsive de servicio 1`
- `feat: agregar formulario de consulta`

### E. Antes de integrar tu rama a `main`

Cuando el compañero haya subido cambios a `main`, guarda primero tu trabajo con un commit. Luego:

```bash
git switch main
git pull origin main
git switch feat/manos-al-hogar
git merge main
```

Esto incorpora a tu rama los cambios recientes de `main`. Si aparecen conflictos, abre los archivos marcados, decide qué contenido conservar, guarda y luego:

```bash
git add .
git commit -m "merge: integrar cambios recientes de main"
git push
```

Si no hubo conflictos y Git completó el merge automáticamente, puede que no necesites crear un commit manual adicional.

### F. Solicitar la integración en GitHub

1. Abre el repositorio en GitHub.
2. Selecciona **Compare & pull request** para `feat/manos-al-hogar`.
3. Revisa que la base sea `main` y la comparación sea `feat/manos-al-hogar`.
4. Describe qué agregaste y solicita revisión al compañero.
5. Después de revisar la página en conjunto, pueden aceptar el Pull Request.

No trabajes directamente en `main` para desarrollar tu servicio: usa tu rama.

### G. Comandos útiles para revisar y corregir

```bash
git branch
git branch -a
git status
git log --oneline --graph --decorate --all
git diff
git diff --cached
git restore archivo.html
git restore --staged archivo.html
```

- `git restore --staged archivo.html`: saca los cambios del staging, pero conserva las modificaciones en tu archivo.
- `git restore archivo.html`: descarta las modificaciones locales del archivo y lo devuelve al contenido del último commit. Úsalo con cuidado.
- `git diff`: muestra cambios que todavía no están en staging.
- `git diff --cached`: muestra los cambios que ya están preparados.

**Importante:** `git restore` no borra commits ya guardados. Antes de restaurar, revisa `git status` y asegúrate de que no necesitas esos cambios.

## 5. Reparto recomendado del trabajo

- **Estudiante 1:** `servicio1.html`, contenido, estructura y pruebas de Manos al Hogar. Coordina cambios en `style.css` y `script.js`.
- **Estudiante 2:** `servicio2.html`, contenido y pruebas de Mesa Lista.
- **Ambos:** revisar `index.html`, probar navegación, enlaces, vista móvil y consistencia visual.
- **Estudiante 1 (dueño del repositorio):** revisar Pull Requests y comprobar que `main` tenga la versión final.

## 6. Antes de entregar

- [ ] Las tres páginas abren correctamente.
- [ ] El menú lleva a las páginas correctas.
- [ ] Las imágenes cargan (requieren internet porque son imágenes remotas de Unsplash).
- [ ] El diseño se adapta a móvil.
- [ ] El servicio 1 y 2 están fuera del área tecnológica.
- [ ] No se anuncian certificaciones o garantías inexistentes.
- [ ] El repositorio está actualizado en GitHub.
- [ ] Ambos estudiantes envían el enlace del mismo repositorio.
