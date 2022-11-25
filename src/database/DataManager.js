import { getDocs, addDoc, collection } from "firebase/firestore";
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


// const saveData = async (coleccion, user, message) => {
//     try {
//       await addDoc(collection(db, coleccion),
//         {
//           user: user,
//           message: message,
//           ts: Date.now(),
//         });
//     } catch (error) {
//       console.log("Error escribiendo el tuit ", error);
//     }
//   }
  
export { readData }