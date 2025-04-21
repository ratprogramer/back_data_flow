export function  generarSku(lote,referencia, presentacion) {
    const lotePart =  lote.toUpperCase(); // lote completo 
    const referenciaPart = referencia.slice(0, 3).toUpperCase();
    const presentacionPart = presentacion.match(/\d+/g)?.join("") || "";
    const timestamp = Date.now().toString().slice(-5); // Últimos 5 dígitos del timestamp
  
    return `${lotePart}${referenciaPart}${presentacionPart}`;
  }
  