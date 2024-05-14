import {Atom} from "@grammarly/focal-atom";

export class DataService {
    public counter$ = Atom.create(0)
    public isLoggedIn = true

    public increment() {
        this.counter$.modify(x => x + 1)
    }
}