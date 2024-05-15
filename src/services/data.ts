import {initializeApp} from 'firebase/app';
import {doc, getFirestore, onSnapshot, setDoc} from 'firebase/firestore';
import {Atom} from "@grammarly/focal-atom";
import {IUser} from "./interfaces.ts";
// import {Subscription} from "rxjs";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAy4r_raKpYyu3bF0LpEfF599oZCxSd5BQ",
    authDomain: "stellar-trust.firebaseapp.com",
    databaseURL: "https://stellar-trust-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "stellar-trust",
    storageBucket: "stellar-trust.appspot.com",
    messagingSenderId: "561288171394",
    appId: "1:561288171394:web:234826897fcab9120a099b",
    measurementId: "G-3LJVE7QRX6"
};

export class DataService {

    // private subs: Array<Subscription> = []
    public isLoggedIn = true
    public user$: Atom<IUser | null> = Atom.create(null)

    private _app = initializeApp(firebaseConfig);
    private _db = getFirestore(this._app);
    private _userId = "Cw4ZAfkI1DiniefrL4Hb";

    constructor() {
        this._fetch()
    }

    private async _fetch() {
        this._subToUserChanges()
    }

    private _subToUserChanges() {

        // todo manage unsubs
        onSnapshot(doc(this._db, "users", this._userId), (doc) => {
            // const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
            this.user$.set(doc.data() as IUser)
        });
    }

    public async saveUser(user: IUser) {
        console.log(user)
        await setDoc(doc(this._db, "users", this._userId), user);
    }
}