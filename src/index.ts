console.log("Salut");

class Participant {
    public bonjour() {
        return this.nom + this.prenom;
    }
    constructor(public nom: string, public prenom: string) {}
}

class Transaction {
    constructor(public parti: string, public label: string, public montant: number, public transaction: number) {}
}


let tabParticipant:string[];
let tabTransaction = [];

tabParticipant.push()