const firebase = require('firebase/app');

// 필요한 서비스를 추가 로드
require('firebase/firestore');


let app;

try {
    app = firebase.initializeApp(require('./firebaseConfig'))
} catch (e) {
    app = firebase.app();
}

module.exports = app;
