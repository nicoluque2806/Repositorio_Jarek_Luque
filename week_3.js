// ============================================
// PROYECTO SEMANA 03: Calculadora de Diseño Interior
// Dominio: App de diseño de interiores (inmobiliaria y construcción)
// ============================================


// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const DESIGN_PRICE_PER_ROOM = 250000; 
const MAX_ROOMS_PER_PROJECT = 10;
const MATERIAL_COST_PER_ROOM = 120000;
const DISCOUNT_RATE = 0.10;


// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================

console.log("=== Operaciones básicas ===");

const roomsDesigned = 6;

const designCost = DESIGN_PRICE_PER_ROOM * roomsDesigned;
console.log("Costo total del diseño:", designCost);

const materialCost = MATERIAL_COST_PER_ROOM * roomsDesigned;
console.log("Costo total de materiales:", materialCost);

const totalProjectCost = designCost + materialCost;
console.log("Costo total del proyecto:", totalProjectCost);

const remainingRooms = MAX_ROOMS_PER_PROJECT - roomsDesigned;
console.log("Habitaciones restantes permitidas:", remainingRooms);

const averageCostPerRoom = totalProjectCost / roomsDesigned;
console.log("Costo promedio por habitación:", averageCostPerRoom);

const roomPowerExample = roomsDesigned ** 2;
console.log("Ejemplo de potencia (habitaciones^2):", roomPowerExample);

console.log("");


// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================

console.log("=== Asignación compuesta ===");

let runningBudget = 0;

runningBudget += 250000;
console.log("Presupuesto tras primer diseño:", runningBudget);

runningBudget += 250000;
console.log("Presupuesto tras segundo diseño:", runningBudget);

runningBudget *= 0.9;
console.log("Aplicando descuento del 10%:", runningBudget);

runningBudget -= 50000;
console.log("Restando costo adicional:", runningBudget);

console.log("");


// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================

console.log("=== Validaciones con === ===");

const roomsRequested = 10;

const isProjectFull = roomsRequested === MAX_ROOMS_PER_PROJECT;
console.log("¿Proyecto lleno?", isProjectFull);

const canAddMoreRooms = roomsRequested < MAX_ROOMS_PER_PROJECT;
console.log("¿Se pueden agregar más habitaciones?", canAddMoreRooms);

const exceedsLimit = roomsRequested > MAX_ROOMS_PER_PROJECT;
console.log("¿Excede el límite permitido?", exceedsLimit);

console.log("");


// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================

console.log("=== Condiciones lógicas ===");

const isPremiumClient = true;
const projectBudget = 2000000;

const qualifiesForDiscount = isPremiumClient && projectBudget >= 1500000;
console.log("¿Aplica descuento?", qualifiesForDiscount);

const largeProject = roomsDesigned >= 8 || projectBudget > 2500000;
console.log("¿Es un proyecto grande?", largeProject);

const notPremiumClient = !isPremiumClient;
console.log("¿No es cliente premium?", notPremiumClient);

console.log("");


// ============================================
// SECCIÓN 6: Resumen final
// ============================================

console.log("=== Resumen ===");

console.log("Habitaciones diseñadas:", roomsDesigned);
console.log("Costo de diseño:", designCost);
console.log("Costo de materiales:", materialCost);
console.log("Costo total del proyecto:", totalProjectCost);
console.log("Habitaciones restantes posibles:", remainingRooms);

console.log("");