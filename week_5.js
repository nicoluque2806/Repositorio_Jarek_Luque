// ============================================
// PROYECTO SEMANA 05: Clasificador
// Dominio: Diseño de interiores (LuxRoom)
// ============================================


// ============================================
// SECCIÓN 1: Datos del elemento
// ============================================

const elementName = "Diseño de Apartamento Moderno";
const elementStatus = "active";
const elementValue = 85; // nivel de avance del proyecto (%)
const elementType = "residencial";
const elementInfo = {
  detail: "Proyecto de diseño interior completo con acabados modernos",
  location: "Medellín",
  designer: "Carlos Pérez"
};


// ============================================
// SECCIÓN 2: Clasificación con if / else
// ============================================

let classification;

if (elementValue >= 80) {
  classification = "Proyecto avanzado";
} else if (elementValue >= 50) {
  classification = "Proyecto en proceso";
} else {
  classification = "Proyecto inicial";
}


// ============================================
// SECCIÓN 3: Estado con ternario
// ============================================

const statusLabel = elementStatus === "active" ? "Activo" : "Inactivo";


// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

let typeLabel;

switch (elementType) {
  case "residencial":
    typeLabel = "Proyecto residencial";
    break;
  case "comercial":
    typeLabel = "Proyecto comercial";
    break;
  case "oficina":
    typeLabel = "Diseño de oficina";
    break;
  default:
    typeLabel = "Tipo desconocido";
}


// ============================================
// SECCIÓN 5: Valores por defecto (??)
// ============================================

const displayName = elementName ?? "Sin nombre";
const infoDetail = elementInfo?.detail ?? "Sin información adicional";


// ============================================
// SECCIÓN 6: Acceso seguro (?.)
// ============================================

const safeProperty = elementInfo?.location ?? "Ubicación no especificada";


// ============================================
// SECCIÓN 7: Ficha final
// ============================================

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));

console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Ubicación: ${safeProperty}`);

console.log("=".repeat(40));