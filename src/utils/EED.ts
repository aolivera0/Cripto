export default function EEA(a: number, b: number): [number, number, number] {
    if (b === 0) {
        // Normalización para que el MCD sea siempre positivo
        return a < 0 ? [-a, -1, 0] : [a, 1, 0];
    }

    const q = Math.trunc(a / b);
    const [d, xp, yp] = EEA(b, a % b);

    return [d, yp, xp - q * yp];
}