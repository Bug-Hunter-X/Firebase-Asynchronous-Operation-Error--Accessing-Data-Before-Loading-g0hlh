The solution uses `async/await` to handle the promise returned by `get()` method. This ensures that the code waits until the data is fully loaded before accessing it. 

```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  // ... your config
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getData() {
  try {
    const docRef = doc(db, 'myCollection', 'myDoc');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error fetching document:', error);
  }
}

getData();
```