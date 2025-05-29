# 🧠 Tarea: Filtros dinámicos sobre un conjunto de personajes

**Materia:** Taller de Programación  
**Universidad:** Universidad Nacional de José C. Paz  
**Tema:** Funciones de orden superior – Filtros dinámicos

---

## 🧩 Contexto

Contás con una base de datos en formato JSON que representa una lista de **personajes** de un universo ficticio. Cada personaje tiene múltiples atributos, como:

- `nombre` (string)
- `rol` (string)
- `nivel` (número)
- `salud` (número)
- `dano` (número)
- `velocidad` (número)
- `habilidades` (array de strings)
- `faccion` (string)
- `activo` (booleano)

Ejemplo de un personaje:

```json
{
  "nombre": "Artemis",
  "rol": "Asesino",
  "nivel": 56,
  "salud": 2145,
  "dano": 167,
  "velocidad": 3.5,
  "habilidades": ["misil", "regeneración", "dash", "invisibilidad"],
  "faccion": "Red Nova",
  "activo": false
}
```

---

## 🎯 Objetivo

Implementar un **servidor Express.js** que reciba desde un endpoint POST una lista de condiciones (filtros), y devuelva solamente aquellos personajes que cumplan **todas** las condiciones.

---

## 🧪 Ejemplo de uso

Desde Postman o curl se hace un POST a `localhost:3000` con este cuerpo:

```json
[
  {
    "attribute": "nivel",
    "operator": ">=",
    "value": 50
  },
  {
    "attribute": "habilidades",
    "operator": "includes",
    "value": "dash"
  }
]
```

Y el servidor devuelve los personajes que tengan **nivel mayor o igual a 50** y además tengan la **habilidad "dash"**.

---

## 🛠️ Requisitos

1. Implementar una función `makeFiltro(attribute, operator, value)` que genere funciones de filtro.
2. Tener un objeto `operadores` que contenga al menos los siguientes operadores:
   - `==`, `!=`, `>`, `<`, `>=`, `<=`
   - `includes` (para verificar si un array incluye un valor, como en `habilidades`)
3. Al recibir el array de filtros por POST, mapearlo a funciones usando `makeFiltro`.
4. Filtrar el array de personajes usando `filter` y `every`.
5. Devolver el resultado como JSON.

---

## 🚀 Bonus

- Permitir que `includes` también funcione con strings (por ejemplo: `nombre includes "art"`).
- Agregar logs para ver qué filtros se están generando.
- Hacer una interfaz web mínima donde se puedan seleccionar filtros.

---

## ✅ Evaluación

Se evaluará:

- Correcto uso de funciones de orden superior (`map`, `filter`, `every`).
- Modularidad del código (separar lógica de filtros).
- Pruebas con distintos cuerpos de filtros.
- Claridad del código y comentarios explicativos.
