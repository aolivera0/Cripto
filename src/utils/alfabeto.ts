// Alfabeto inglés de 26 letras, común a todos los talleres
export const ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Pasa a mayúsculas, quita tildes (Á → A, Ñ → N) y descarta todo lo que no sea A-Z
export function limpiarTexto(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toUpperCase()
    .replace(/[^A-Z]/g, "");
}
