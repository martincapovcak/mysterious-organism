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
        get specimentNum() {
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
                .filter(base => base !== changingBase.item)

            let mutatedBase = randomItem(filteredSequence);

            this.dna[changingBase.index] = mutatedBase.item;

            return this.dna;
        },

        //Compare DNA
        compareDNA(specimen) {
            let DNAlength = this.dna.length;
            let match = 0;

            const percentage = num => (100 / DNAlength * num).toFixed('0')

            for (let i = 0; i < DNAlength; i++) {
                this.dna[i] === specimen.dna[i] && match++
            }

            const inCommon = percentage(match);

            console.log(`Specimen #${this.specimentNum} and specimen #${specimen.specimentNum} have ${inCommon}% DNA in common.`);
        },

        //Will likely survive
        willLikelySurvive() {
            let CG = ["C", "G"];
            let match = 0;

            const percentage = num => (100 / this.dna.length * num).toFixed('0');

            this.dna.forEach(base => {
                base === CG[0] ? match++ : (base === CG[1] ? match++ : null)
            });

            return percentage(match) >= 60 ? true : false;
        },

    }
};

const pAquarium = [];

for (let i = 0; i < 30; i++) {
    pAquarium.push(pAequorFactory(i, mockUpStrand()));
};

console.log(pAquarium[10].specimentNum);
console.log(pAquarium[10].dna);
pAquarium[10].compareDNA(pAquarium[11]);
console.log(pAquarium[10].willLikelySurvive());
pAquarium[10].mutate();
console.log(pAquarium[10].dna);