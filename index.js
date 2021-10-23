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

        //Mutating DNA
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

        //Compare DNA
        compareDNA(specimen) {
            let DNAlength = this.dna.length;
            let match = 0;

            const percentage = num => {
                return (100 / DNAlength * num).toFixed('0');
            };

            for(let i = 0; i < DNAlength; i++){
                this.dna[i] === specimen.dna[i] && match++
            }

            const inCommon = percentage(match);
            
            console.log(`Specimen #${this.specimentNum} and specimen #${specimen.specimentNum} have ${inCommon}% DNA in common.`);
        }

    }
};

const ex1 = pAequorFactory(1,mockUpStrand());
const ex2 = pAequorFactory(2,mockUpStrand());
console.log("ID: ", ex1.specimentNum);
console.log("DNA 1: ", ex1.dna);

console.log("ID: ", ex2.specimentNum);
console.log("DNA 2: ", ex2.dna);

console.log("Comparing...");
ex1.compareDNA(ex2);
