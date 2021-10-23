// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
}
  
// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
}

// Factory function
const pAequorFactory = (id = 0, strand = []) => {
    return {
        //Properties
        _specimenNum: id,
        _dna: strand,
        _dnaBases: ['A', 'T', 'C', 'G'],

        //Getters
        get specimentNum(){
            return this._specimenNum
        },
        get dna() {
            return this._dna
        },
        get dnaBases() {
            return this._dnaBases
        },

        //Setters
        set dna(newDNA) {
            this._dna = newDNA;
        },

        //Methods
        mutate() {
            const randomItem = arr => {
                const formula = Math.floor(Math.random() * arr.length);
                return {
                    item: arr[formula],
                    index: formula
                }
            };

            let changingBase = randomItem(this.dna);      
            let filteredSequence = this.dnaBases
                .filter( base => {
                    return base !== changingBase.item;
                }
            )
            let mutatedBase = randomItem(filteredSequence);
       
            this.dna[changingBase.index] = mutatedBase.item; 
            
            return this.dna;
        },

    }
};

const organism = pAequorFactory(1,mockUpStrand());
console.log("ID: ", organism.specimentNum);
console.log("DNA: ", organism.dna);

console.log("Mutating...");
console.log(organism.mutate());
