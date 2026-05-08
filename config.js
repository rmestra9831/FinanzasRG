// =============================================
// FINANZAS RG - Configuración
// Edita solo este archivo cuando necesites
// cambiar URLs, credenciales o valores base
// =============================================

const CONFIG = {
  // Google Apps Script URL (actualiza cuando hagas nueva implementación)
  APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbx0hImBrokqdUJOoKppQOPYqVWJ7V5_2xT62EhMub9RwHcGxD1Gr87McZCMXKXIFiF_/exec',

  // Google Sheets ID (la parte larga de la URL del Sheet)
  SHEET_ID: '1-vgLjK43GT-TUtRhSv9oKs0My3KKCtwR7v_KRpNCjH4',

  // Ingresos base por defecto (en pesos)
  INGRESO_RICHARD: 4000000,
  INGRESO_ESPOSA: 2900000,

  // Nombre de la app
  APP_NAME: 'Finanzas RG',
  APP_LABEL: 'Familia Mestra · Control Financiero',

  // Hojas del Sheet
  SHEETS: {
    GASTOS: 'Gastos',
    FIJOS: 'Fijos',
    POR_PAGAR: 'PorPagar',
    INGRESOS: 'Ingresos'
  }
};
