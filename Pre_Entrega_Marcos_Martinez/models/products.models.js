import db from '../firebase/data.js';
import { collection, getDoc ,getDocs,addDoc,deleteDoc,doc } from 'firebase/firestore';

const productsCollection = collection(db, 'products');

async function getProductById(id) {
    const docRef = doc(db, 'products', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {       
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        return null;
    }
}

async function getAllProducts() {
    const querySnapshot = await getDocs(productsCollection);
    const products = [];
    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
    }); 
    return products;
}

async function addProduct(product) {
   const docRef = await addDoc(productsCollection, product);
    return { id: docRef.id, ...product };
};

async function deleteProduct(id) {
    const productDoc = doc(productsCollection, id);
    await deleteDoc(productDoc);
    return true;
}


export { getProductById, getAllProducts, addProduct, deleteProduct };

