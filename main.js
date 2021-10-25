/*
 * Title: Mysterious Organism
 * Description: Organism factory function
 * Author: Martin Capovcak
 * Date: 25/10/21
 *
 */

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
const pAequorFactory = (id = 0, strand = mockUpStrand()) => {
    return {
        //Properties
        _specimenNum: id,
        _dna: strand,
        _dnaBases: ['A', 'T', 'C', 'G'],

        //Getters
        get specimenNum() {
            return this._specimenNum
        },
        get dna() {
            return this._dna
        },
        get dnaBases() {
            return this._dnaBases
        },

        //Setters
        set specimenNum(newID) {
            this._specimenNum = newID;
        },

        set dna(newDNA) {
            this._dna = newDNA;
        },

        //Helper foo
        percentageCalc(num) {
            return (100 / this.dna.length * num).toFixed('0');
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
            
                .filter(base => base !== changingBase.item);

            let mutatedBase = randomItem(filteredSequence);

            this.dna[changingBase.index] = mutatedBase.item;

            return this.dna;
        },

        //Compare DNA
        compareDNA(specimen) {
            let match = 0;

            for (let i = 0; i < this.dna.length; i++) {
                this.dna[i] === specimen.dna[i] && match++
            }

            console.log(`Specimen #${this.specimenNum} and specimen #${specimen.specimenNum} have ${this.percentageCalc(match)}% DNA in common.`);
        },

        //Will likely survive
        willLikelySurvive() {
            const CG = ["C", "G"];
            let match = 0;

            this.dna.forEach(base => {
                base === CG[0] ? match++ : (base === CG[1] ? match++ : null)
            });

            return this.percentageCalc(match) >= 60 ? true : false;
        },

        //Complement strand
        complementStrand() {
            let complementaryStrandDNA = this.dna.map(base => {
                switch (base) {
                    case "A":
                        return "T";
                    case "T":
                        return "A";
                    case "C":
                        return "G";
                    case "G":
                        return "C";
                    default:
                        break;
                }
            })
            return complementaryStrandDNA;
        },

        //Most related strands
        compareColony(arr) {
            let topRankMatch = {
                topMatch: 0,
                percentage: 0,
                ex1: {},
                ex2: {},
            };
            
            let compareDNA = (specimenA, specimenB) => {
                let match = 0;
                for (let i = 0; i < this.dna.length; i++) {
                    specimenA.dna[i] === specimenB.dna[i] && match++
                }
                return match;
            };

            let i = 0;
            let cycle = 1;
            while (i < arr.length - 1) {
                let specimenA = arr[i];

                for (let j = cycle; j < arr.length; j++) {
                    let specimenB = arr[j];
                    let match = compareDNA(specimenA, specimenB);
                    if (match > topRankMatch.topMatch) {
                        topRankMatch.topMatch = match;
                        topRankMatch.ex1 = {
                            id: specimenA.specimenNum,
                            dna: specimenA.dna
                        };
                        topRankMatch.ex2 = {
                            id: specimenB.specimenNum,
                            dna: specimenB.dna
                        };
                    }
                };
                i++;
                cycle++;
            }

            topRankMatch.percentage = parseInt(this.percentageCalc(topRankMatch.topMatch));
            return topRankMatch;
        },

    }
};

module.exports = {
    pAequorFactory,
    mockUpStrand
};