import { suministros } from "@/data/suministros"
import { addSuministro } from "./actions/add-suministro"

export default function Home() {
    return (
        <main style={{ padding: "2rem" }}>
            <h1>Lista de Suministros</h1>

            <form action={addSuministro} style={{ marginBottom: "2rem" }}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre del producto"
                    required
                />

                <input
                    type="number"
                    name="cantidad"
                    defaultValue={1}
                    min={1}
                    style={{ marginLeft: "1rem" }}
                />

                <button type="submit" style={{ marginLeft: "1rem" }}>
                    Agregar
                </button>
            </form>

            <ul>
                {suministros.map((item) => (
                    <li key={item.id}>
                        {item.nombre} — Cantidad: {item.cantidad}
                    </li>
                ))}
            </ul>
        </main>
    )
}
