// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// Dominio: LuxRoom
// ============================================


// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

// nombre del dominio
const DOMAIN_NAME = "LuxRoom";

// nombre de la entidad
const itemName = "Habitación Deluxe";

// categoría de la habitación
const itemCategory = "Habitación Premium con vista al mar";

// precio por noche
const itemQuantity = 180;

// habitación disponible
const isItemAvailable = true;

// valor pendiente (aún no asignado)
const assignedGuest = null;


// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================
console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

console.log(`Nombre:       ${itemName}`);
console.log(`Categoría:    ${itemCategory}`);
console.log(`Precio:       $${itemQuantity} por noche`);
console.log(`Disponible:   ${isItemAvailable}`);
console.log("");


// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================
console.log("--- Tipos de datos ---");

console.log("typeof itemName:        ", typeof itemName);
console.log("typeof itemQuantity:    ", typeof itemQuantity);
console.log("typeof isItemAvailable: ", typeof isItemAvailable);
console.log("");


// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================
console.log("--- Conversiones ---");

// convertir número a texto
const priceAsText = String(itemQuantity);

console.log("Precio como texto:", priceAsText);
console.log("typeof convertido:", typeof priceAsText);

console.log("");


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================
console.log("--- Valor nulo ---");

console.log("Huésped asignado:", assignedGuest);
console.log("typeof null:", typeof assignedGuest);
console.log("¿Es null?:", assignedGuest === null);

console.log("");


// ============================================
// CIERRE
// ============================================
console.log("===========================");
console.log("FIN DE FICHA LUXROOM");
console.log("===========================");