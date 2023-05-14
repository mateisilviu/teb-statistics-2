
import { getFirestore, doc, setDoc, collection, getDocs, getDoc, QueryDocumentSnapshot, PartialWithFieldValue, FirestoreDataConverter } from "firebase/firestore";
import firebase_app from "./config";
import { TermoModel, TermoModelDb } from "@/types/termo-model";

// This helper function pipes your types through a firestore converter
const converter = <T>() => ({
    toFirestore: (data: PartialWithFieldValue<T>) => data,
    fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T
})

const termoModelConvertor: FirestoreDataConverter<TermoModel> = {
    toFirestore(post) {
        return post;
    },

    fromFirestore(snapshot) {
        return snapshot.data() as TermoModel;
    },
};

const db = getFirestore(firebase_app)


export async function addData(colllection, id, data) {

    let error = null;
    try {
        return await setDoc(doc(db, colllection, id), data, {
            merge: true,
        });
    } catch (e) {
        error = e;
        console.log(e);
    }

    return { error };
}

export async function getData(colllection) {
    let error = null;
    try {
        const collectionRef = collection(db, colllection).withConverter(termoModelConvertor);
        const snapshot = await getDocs(collectionRef);
        snapshot.forEach(doc => {
            console.log(doc.id);
        });
        console.log("current : " + snapshot.docs[snapshot.size - 1].id);
        const latestId = snapshot.docs[snapshot.size - 1].id;

        const latestDoc = await getDoc(doc(db, colllection, latestId));
        if (latestDoc.exists()) {
            // console.log(latestDoc.data())
            return latestDoc.data() as TermoModelDb;
        }

    } catch (e) {
        error = e;
        console.log(e);
    }


}