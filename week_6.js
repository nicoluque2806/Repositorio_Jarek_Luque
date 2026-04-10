// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: Diseño de interiores (LuxRoom)
// ============================================


// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const projects = [
  { name: "Sala Moderna", category: "residencial", value: 2500000 },
  { name: "Oficina Ejecutiva", category: "comercial", value: 4200000 },
  { name: "Cocina Minimalista", category: "residencial", value: 3000000 },
  { name: "Local Comercial", category: "comercial", value: 5000000 },
  { name: "Habitación Juvenil", category: "residencial", value: 1800000 },
  { name: "Coworking Space", category: "oficina", value: 4700000 }
];

const categories = ["residencial", "comercial", "oficina"];

const valueLabel = "costo";


// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================

console.log("=== LISTADO COMPLETO ===");

let lineNumber = 0;

for (const project of projects) {
  lineNumber++;
  console.log(`${lineNumber}. ${project.name} — ${project.category} — ${valueLabel}: ${project.value}`);
}

console.log("");


// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================

console.log("=== CONTEO POR CATEGORÍA ===");

for (const category of categories) {
  let count = 0;

  for (const project of projects) {
    if (project.category === category) count++;
  }

  console.log(`${category}: ${count} proyecto(s)`);
}

console.log("");


// ============================================
// SECCIÓN 4: Totales y promedio
// ============================================

console.log("=== ESTADÍSTICAS ===");

let totalValue = 0;

for (const project of projects) {
  totalValue += project.value;
}

const averageValue = projects.length > 0 ? totalValue / projects.length : 0;

console.log(`Total ${valueLabel}: ${totalValue}`);
console.log(`Promedio ${valueLabel}: ${averageValue.toFixed(1)}`);

console.log("");


// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================

console.log("=== MÁXIMO Y MÍNIMO ===");

let maxItem = projects[0] ?? null;
let minItem = projects[0] ?? null;

if (projects.length > 0) {
  for (const project of projects) {
    if (project.value > maxItem.value) {
      maxItem = project;
    }

    if (project.value < minItem.value) {
      minItem = project;
    }
  }

  console.log(`Mayor ${valueLabel}: ${maxItem?.name} (${maxItem?.value})`);
  console.log(`Menor ${valueLabel}: ${minItem?.name} (${minItem?.value})`);
}

console.log("");


// ============================================
// SECCIÓN 6: Reporte detallado
// ============================================

console.log("=== REPORTE DETALLADO ===");

for (let i = 0; i < projects.length; i++) {
  const project = projects[i];

  const comparison = project.value >= averageValue 
    ? "sobre el promedio" 
    : "bajo el promedio";

  console.log(`${i + 1}. ${project.name} — ${comparison}`);
}

console.log("");
console.log("=== FIN DEL REPORTE ===");