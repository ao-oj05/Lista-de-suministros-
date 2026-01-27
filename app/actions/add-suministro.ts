"use server"

import { revalidatePath } from "next/cache"
import { suministros } from "@/data/suministros"

export async function addSuministro(formData: FormData) {
    const nombre = formData.get("nombre")?.toString()
    const cantidad = Number(formData.get("cantidad"))

    // 🔒 Validaciones en servidor
    if (!nombre || nombre.length < 2) {
        throw new Error("El nombre debe tener al menos 2 caracteres")
    }

    if (!cantidad || cantidad < 1) {
        throw new Error("La cantidad debe ser mínimo 1")
    }

    suministros.push({
        id: Date.now(),
        nombre,
        cantidad,
    })

    // 🔄 Actualiza la vista sin recargar
    revalidatePath("/")
}
