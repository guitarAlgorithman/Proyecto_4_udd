import { getDocs, addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../database/firebase";


const readData = async (coleccion) => {
  try {
    const cole = await getDocs(collection(db, coleccion));
    let arr = cole.docs.map((doc) => doc.data());
    return arr;
  } catch (error) {
    console.log("Error leyendo los datos: ", error);
  }
};

const saveData = async (coleccion, data) => {
  try {
    await addDoc(collection(db, coleccion), {
      nombre: data.nombre,
      email: data.email,
      telefono: data.telefono,
      comensales: data.comensales,
      fechaReserva: Timestamp.fromDate(data.fecha),
      horaRegistro: Timestamp.now(),
      codigoReserva: data.codigo,
    });

  } catch (error) {
    console.log("Error escribiendo en la base ", error);
  }
};

export { readData, saveData };
