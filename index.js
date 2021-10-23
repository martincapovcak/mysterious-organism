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
        _specimenNum: id,
        _dna: strand,
        _dnaBases: ['A', 'T', 'C', 'G'],
        get specimentNum(){
            return this._specimenNum
        },
        get dna() {
            return this._dna
        },
        set dna(newDNA) {
            this._dna = newDNA;
        },

        mutate() {
            const randomItem = arr => {
                const formula = Math.floor(Math.random() * arr.length);
                return {
                    item: arr[formula],
                    index: formula
                }
            };

            let changingBase = randomItem(this._dna);      
            let filteredSequence = this._dnaBases.filter( base => {
                return base !== changingBase.item;
                }
            )
            let mutatedBase = randomItem(filteredSequence);
       
            this._dna[changingBase.index] = mutatedBase.item;      
        },

    }
};

const organism = pAequorFactory(1,mockUpStrand);
console.log("ID: ", organism.specimentNum);
console.log("DNA: ", organism.dna);

organism.mutate();
console.log("Mutating...");
console.log("DNA: ", organism.dna);
