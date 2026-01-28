# Lista de Suministros – AWOS

Aplicación web desarrollada con **Next.js (App Router)** como parte de la actividad **ACT 8 – Aplicaciones Web Orientadas a Servicios**.

## 📌 Descripción del Proyecto

Esta aplicación permite a los empleados de una empresa registrar en tiempo real los suministros que hacen falta en la oficina.  
La información se captura desde una **URL única accesible desde cualquier dispositivo**, evitando el uso de mensajes dispersos por WhatsApp.

La lista se actualiza automáticamente sin necesidad de recargar la página.

---

## 🧠 Decisión Técnica

Se eligió el enfoque de **Server Actions** debido a que:

- El único consumidor es la propia aplicación web
- No existen clientes externos
- No se requiere Postman
- Funciona incluso con JavaScript deshabilitado
- El contrato se mantiene dentro del mismo proyecto
- Permite revalidación automática con `revalidatePath`

---

## ⚙️ Tecnologías Utilizadas

- Next.js 16 (App Router)
- Server Actions
- TypeScript
- CSS Modules
- Node.js

---

---

## 🚀 Cómo ejecutar el proyecto
## Clonar el repositorio desde GitHub
git clone https://github.com/ao-oj05/Lista-de-suministros-.git

## Acceder a la carpeta del proyecto
cd Lista-de-suministros-

## Instalar las dependencias
npm install

## Ejecutar el proyecto 
npm run dev

## Abrir la aplicación en el navegador
http://localhost:3000


## Probar la funcionalidad de la aplicación
-Ingresar el nombre de un producto.
-Dejar la cantidad en el valor por defecto (1) o modificarla.
-Presionar el botón para agregar el suministro.
-Verificar que la lista se actualiza automáticamente sin necesidad de recargar la página.

## Verificación del enfoque Server Actions (opcional)

Para comprobar que la aplicación funciona correctamente utilizando Server Actions:
Deshabilitar JavaScript en el navegador.
Recargar la página.
Agregar un nuevo producto.
Confirmar que la información se procesa correctamente y la lista se actualiza.

## Nota final

Si se siguen correctamente los pasos anteriores, el proyecto se ejecutará sin necesidad de configuraciones adicionales y cumplirá con los requerimientos solicitados en la actividad.

