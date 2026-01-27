"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

const dataPath = path.join(process.cwd(), "data", "suministros.json");

export async function agregarSuministro(formData: FormData) {
    const nombre = String(formData.get("nombre") || "").trim();
    const cantidad = Number(formData.get("cantidad") || 1);

    if (nombre.length < 2) {
        throw new Error("El nombre debe tener al menos 2 caracteres");
    }

    if (cantidad < 1) {
        throw new Error("La cantidad debe ser mínimo 1");
    }

    const file = await fs.readFile(dataPath, "utf-8");
    const suministros = JSON.parse(file);

    suministros.push({
        nombre,
        cantidad,
        fecha: new Date().toISOString()
    });

    await fs.writeFile(dataPath, JSON.stringify(suministros, null, 2));

    revalidatePath("/");
}
