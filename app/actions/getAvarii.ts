import { getData } from "@/lib/firebase/firebase-db"

export default async function getAvarii() {
    return getData("/teb");
}
