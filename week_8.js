// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// Dominio: LuxRoom
// ============================================

const DOMAIN_NAME = "LuxRoom";
const VALUE_LABEL = "proyectos";


// ============================================
// 1. ARRAY INICIAL
// ============================================

const items = [
  { id: 1, name: "Sala Moderna", price: 2500000, category: "residencial", active: true, designer: "Carlos" },
  { id: 2, name: "Oficina Ejecutiva", price: 4200000, category: "comercial", active: true, designer: "Laura" },
  { id: 3, name: "Cocina Minimalista", price: 3000000, category: "residencial", active: false, designer: "Andrés" },
  { id: 4, name: "Local Comercial", price: 5000000, category: "comercial", active: true, designer: "Sofía" },
  { id: 5, name: "Habitación Juvenil", price: 1800000, category: "residencial", active: true, designer: "Mateo" }
];


// ============================================
// 2. FUNCIONES
// ============================================

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

const removeLastItem = () => {
  const removed = items.pop();
  console.log(`Eliminado: ${removed.name}`);
  return removed;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Prioritario agregado: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  const removed = items.splice(index, 1);
  console.log(`Eliminado en posición ${index}: ${removed[0]?.name}`);
};

const getActiveItems = () => {
  return items.filter(item => item.active === true);
};

const findByName = (name) => {
  return items.find(item => item.name === name);
};

const formatItem = (item) => {
  return `[${item.id}] ${item.name} — ${item.category} — $${item.price} — ${item.active ? "Activo" : "Inactivo"}`;
};


// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

// Inventario inicial
console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach(item => console.log(`  ${formatItem(item)}`));

console.log("\n--- Operaciones de mutación ---\n");

// Agregar nuevo proyecto
addItem({ id: 6, name: "Baño de Lujo", price: 2700000, category: "residencial", active: true, designer: "Diana" });

// Agregar prioritario
addPriorityItem({ id: 0, name: "Penthouse Premium", price: 9000000, category: "residencial", active: true, designer: "Admin" });

// Eliminar uno del medio
removeByIndex(2);

// Eliminar último
removeLastItem();


// Inventario actualizado
console.log("\n--- Inventario después de mutaciones ---\n");
items.forEach(item => console.log(`  ${formatItem(item)}`));


// ============================================
// BÚSQUEDA Y FILTRO
// ============================================

console.log("\n--- Búsqueda y filtrado ---\n");

const found = findByName("Sala Moderna");
console.log("Búsqueda:", found ? formatItem(found) : "No encontrado");

const activeItems = getActiveItems();
console.log(`Activos: ${activeItems.length}`);


// Snapshot (inmutable)
const snapshot = [...items, { id: 99, name: "Proyecto Extra", price: 1000000, category: "test", active: false }];
console.log("Snapshot creado (sin modificar original)");


// ============================================
// MAP
// ============================================

console.log("\n--- Transformación con map ---\n");

// Solo nombres
const names = items.map(item => item.name);
console.log("Nombres:", names);

// Precios con descuento 10%
const discounted = items.map(item => item.price * 0.9);
console.log("Precios con descuento:", discounted);


// ============================================
// RESUMEN
// ============================================

console.log("\n--- Resumen final ---\n");

console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);

const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);