import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};


firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val
//             });
//         });
//         console.log(expenses);
//     });

// const expenses = [{
//     description: 'Some shid',
//     note: 'Get yo shit together',
//     amount: 70000,
//     createdAt: 28-09-2020
// }]

// database.ref('expenses').push({
//     description: 'Some shid',
//     note: 'Get yo shit together',
//     amount: 70000,
//     createdAt: 2015444646464845454
// });

// database.ref('expenses').push({
//     description: 'Food',
//     note: 'Salad',
//     amount: 70000,
//     createdAt: 2015444646464845454
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'new place',
//     amount: 70000,
//     createdAt: 2015444646464845454
// });


// const notes = [{
//     id: '12',
//     title: 'First note',
//     body: 'This is my note'
// }, {
//     id: '761ase',
//     title: 'Another note',
//     body: 'This is my note'
// }]

// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//         console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);    
// }, (e) => {
//     console.log('Error fetching data', e);
// });

// onValueChange;

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error getting data', e);
//     });

// database.ref().set({
//     name: 'Bosiipo',
//     age: 22,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     stressLevel: 6,
//     location: {
//         city: 'Lagos',
//         country: 'Nigeria'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed', e);
// });

// database.ref().update({
//     'job/company': 'Amazon',
//     stressLevel: 9,
//     'location/city': 'Seattle'
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     }).catch((e) => {
//         console.log('Did not remove data', e);
//     });
