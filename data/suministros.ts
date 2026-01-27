export interface Suministro {
    id: number
    nombre: string
    cantidad: number
}

export const suministros: Suministro[] = [
    { id: 1, nombre: "Papel higiénico", cantidad: 20 },
    { id: 2, nombre: "Jabón", cantidad: 15 },
    { id: 3, nombre: "Cloro", cantidad: 10 }
]
