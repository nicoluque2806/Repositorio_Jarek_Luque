// ============================================
// PROYECTO SEMANA 04: Generador de Mensajes
// Dominio: App de diseño de interiores (Inmobiliaria y construcción)
// ============================================


// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const DOMAIN_NAME = "App de diseño de interiores";

const rawEntityName = "  Diseño de Cocina Moderna  ";

const entityCategory = "Remodelación residencial";

const entityCode = "DSN-201";

const entityDescription = "Proyecto de diseño interior para una cocina moderna en una vivienda residencial.";

const mainValue = 3500000;

const isActive = true;


// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================

const entityName = rawEntityName.trim();

const entityNameUpper = entityName.toUpperCase();

const entityNameLower = entityName.toLowerCase();

const codePrefix = entityCode.slice(0, 3);


// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

const hasValidPrefix = entityCode.startsWith(codePrefix);

const descriptionIsRelevant = entityDescription.includes("diseño");

const hasValidSuffix = entityCode.endsWith("201");


// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

const separator = "=".repeat(45);
const subSeparator = "-".repeat(45);

const mainCard = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DE PROYECTO
${separator}
Nombre:      ${entityNameUpper}
Categoría:   ${entityCategory}
Código:      ${entityCode}
Prefijo:     ${codePrefix}
Valor:       ${mainValue}
Estado:      ${isActive ? "Activo" : "Inactivo"}

${subSeparator}
Descripción:
${entityDescription}
${separator}
`;

console.log(mainCard);


// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Validaciones ---");

console.log(`¿Código empieza con '${codePrefix}'?: ${hasValidPrefix}`);

console.log(`¿Descripción contiene 'diseño'?: ${descriptionIsRelevant}`);

console.log(`¿Código termina con '201'?: ${hasValidSuffix}`);

console.log("");


// ============================================
// SECCIÓN 6: Mensaje de notificación corto
// ============================================

console.log("--- Notificación ---");

const notification = `📢 Nuevo proyecto disponible: ${entityName} (${entityCode})`;

console.log(notification);

console.log("");