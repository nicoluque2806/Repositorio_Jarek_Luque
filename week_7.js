"use strict";

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

const DOMAIN_NAME = "LuxRoom — Diseño de Interiores";
const VALUE_LABEL = "costo";

const projects = [
  { id: 1, name: "Sala Moderna", category: "residencial", value: 2500000, active: true },
  { id: 2, name: "Oficina Ejecutiva", category: "comercial", value: 4200000, active: true },
  { id: 3, name: "Cocina Minimalista", category: "residencial", value: 3000000, active: false },
  { id: 4, name: "Local Comercial", category: "comercial", value: 5000000, active: true },
  { id: 5, name: "Habitación Juvenil", category: "residencial", value: 1800000, active: true }
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================

const formatItem = (project) => 
  `🏠 ${project.name} [${project.category}] — $${project.value}`;


// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

// calcular costo total (por ejemplo con factor de aumento)
const calculateValue = (baseValue, factor = 1) => 
  baseValue * factor;


// ============================================
// SECCIÓN 4: Función de validación
// ============================================

const isValid = (project) => project.active === true;


// ============================================
// SECCIÓN 5: Función con parámetros por defecto
// ============================================

const formatWithDefault = (value, label = VALUE_LABEL, currency = "$") => 
  `${label}: ${currency}${value}`;


// ============================================
// SECCIÓN 6: Reporte usando funciones
// ============================================

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

if (projects.length === 0) {
  console.log("\n⚠️ No hay proyectos.");
} else {

  // 📋 Listado
  console.log("\n📋 Listado:");
  let lineNumber = 1;

  for (const project of projects) {
    console.log(`  ${lineNumber}. ${formatItem(project)}`);
    lineNumber++;
  }

  // ✅ Validación
  let validCount = 0;

  for (const project of projects) {
    if (isValid(project)) {
      validCount++;
    }
  }

  console.log(`\n✅ Proyectos activos: ${validCount} / ${projects.length}`);

  // 💰 Cálculo total
  let totalValue = 0;

  for (const project of projects) {
    totalValue += calculateValue(project.value ?? 0);
  }

  console.log(formatWithDefault(totalValue, `Total ${VALUE_LABEL}`));
}

console.log(`\n${"═".repeat(45)}\n`);