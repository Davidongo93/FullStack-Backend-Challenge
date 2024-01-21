# Manual de Buenas Prácticas para el Equipo de Trabajo

## Introducción

El presente manual tiene como objetivo establecer pautas y buenas prácticas para el equipo de trabajo, proporcionando lineamientos que contribuirán a mantener un código limpio, consistente y fácilmente mantenible. Se abordarán temas relacionados con la administración de bases de datos, nombramiento de variables y constantes, nombramiento de funciones y clases, así como las mejores prácticas para commits.

## Buenas Prácticas para Administrar Bases de Datos

### 1. Tablas:

- Utilizar letras minúsculas.
- Separar palabras en el nombre de la tabla con guiones bajos.
- Preferir nombres en singular para las tablas que representan entidades del mundo real (por ejemplo, "usuario" en lugar de "usuarios").
- Ser descriptivo y usar una sola palabra si es posible.

### 2. Columnas:

- Utilizar letras minúsculas.
- Utilizar el nombre "id" para la columna de clave primaria.
- Para columnas de claves foráneas, combinar el nombre de la tabla referenciada con "id" (por ejemplo, "customer_id").
- Ser conciso y descriptivo en el nombre de las columnas de datos del mundo real (por ejemplo, "nombre_pais").
- Agregar sufijos para mantener la unicidad si es necesario.

### 3. Fechas:

- Describir qué representa la fecha en el nombre (por ejemplo, "fecha_inicio" y "fecha_fin").

### 4. Claves Foráneas:

- Nombrar las claves foráneas de manera que describan claramente la relación entre las tablas relacionadas (por ejemplo, "call_call_outcome").

### 5. General:

- Aplicar la convención de nombres para todos los objetos de la base de datos.
- Facilitar la comprensión y mantenimiento del modelo de datos a lo largo del tiempo.

## Uso de las Variables y Nombramiento

- Se debe evitar el uso de variables globales (declararlas con let, var o const).
- `camelCase` para variables, atributos y métodos.

```javascript
// Ejemplos de camelCase
let nombreUsuario = "John";
let fechaNacimiento = "1990-01-01";
function calcularEdad() { /* ... */ }
```

- `SCREAMING_SNAKE_CASE` para constantes.
```javascript

// Ejemplo de SCREAMING_SNAKE_CASE
const MAX_INT = 2147483647;
```

## Nombramiento de Funciones y Clases

- `PascalCase` se utiliza para nombrar clases, enum e interfaces.

Por ejemplo:

```javascript
class Usuario {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}.`);
  }
}

const nuevoUsuario = new Usuario("John", 30);
nuevoUsuario.saludar();
```

En el ejemplo anterior, la clase `Usuario` sigue la convención `PascalCase`, donde la primera letra de cada palabra está en mayúscula.



## Buenas Prácticas para Commits.


El mensaje de commit debe estructurarse de la siguiente manera:

```plaintext
<tipo>[ámbito opcional]: <descripción>

[cuerpo opcional]

[pie(s) opcional(es)]
```

El commit contiene los siguientes elementos estructurales para comunicar la intención a los consumidores de tu biblioteca:

- `fix`: un commit de tipo fix soluciona un error en tu código (correlaciona con PATCH en Versionamiento Semántico).
- `feat`: un commit de tipo feat introduce una nueva característica en el código (correlaciona con MINOR en Versionamiento Semántico).
- `BREAKING CHANGE`: un commit que tiene un pie BREAKING CHANGE: o agrega un ! después del tipo/ámbito introduce un cambio significativo en la API (correlaciona con MAJOR en Versionamiento Semántico). Un BREAKING CHANGE puede formar parte de commits de cualquier tipo.
- Se permiten tipos distintos a fix: y feat:. Por ejemplo, @commitlint/config-conventional (basado en la convención Angular) recomienda build:, chore:, ci:, docs:, style:, refactor:, perf:, test: y otros.
- Se pueden proporcionar pies distintos a BREAKING CHANGE: <descripción> y siguen una convención similar al formato de trailer de git.
- No se exigen tipos adicionales por parte de la especificación de Commits Convencionales, y no tienen un efecto implícito en el Versionamiento Semántico (a menos que incluyan un BREAKING CHANGE). Un ámbito puede proporcionarse al tipo de un commit para brindar información contextual adicional y se coloca entre paréntesis. Por ejemplo, feat(parser): agregar capacidad para analizar arreglos.

---

## Referencias:

https://www.sqlshack.com/learn-sql-naming-conventions/

https://www.aluracursos.com/blog/convenciones-de-nomenclatura-camel-pascal-kebab-snake-case

https://www.conventionalcommits.org/en/v1.0.0/

https://github.com/Wolox/tech-guides/blob/master/git/docs/pull-requests-good-practices.md
