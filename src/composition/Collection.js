import { db } from "@/firebase/config"
import { ref } from "vue"


let Collection = (collection) => {
    let error = ref(null)
    let addDoc = async(doc) => {
        try{
         await db.collection(collection).add(doc)
        }catch(err){
        //  console.log('error Database')
         error.value = "error Datebase or something"
        }
    }
    return {addDoc}
}

export default Collection