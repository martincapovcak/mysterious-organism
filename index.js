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

            const percentageCalc = num => (100 / DNAlength * num).toFixed('0')

            for (let i = 0; i < DNAlength; i++) {
                this.dna[i] === specimen.dna[i] && match++
            }

            const inCommon = percentageCalc(match);

            //console.log(`Specimen #${this.specimentNum} and specimen #${specimen.specimentNum} have ${inCommon}% DNA in common.`);
            return `Specimen #${this.specimentNum} and specimen #${specimen.specimentNum} have ${inCommon}% DNA in common.`
        },

        //Will likely survive
        willLikelySurvive() {
            const CG = ["C", "G"];
            let match = 0;

            const percentageCalc = num => (100 / this.dna.length * num).toFixed('0');

            this.dna.forEach(base => {
                base === CG[0] ? match++ : (base === CG[1] ? match++ : null)
            });

            return percentageCalc(match) >= 60 ? true : false;
        },

        //Complement strand
        complementStrand() {
            let complementaryStrandDNA = this.dna.map( base => {
                    switch(base){
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
            if(arr.length < 2){
                console.log("Need to compare 2 samples at least!")
                return null;
            }

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
            while( i < arr.length -1){
                let specimenA = arr[i];

                for(let j = cycle; j < arr.length; j++){
                    let specimenB = arr[j];
                    let match = compareDNA(specimenA, specimenB);
                    if(match > topRankMatch.topMatch){
                        topRankMatch.topMatch = match;
                        topRankMatch.ex1 = {
                            id: specimenA.specimentNum,
                            dna: specimenA.dna
                            };
                        topRankMatch.ex2 = {
                            id: specimenB.specimentNum,
                            dna: specimenB.dna
                            };
                    }
                };
                i++;
                cycle++;
            }

            const percentageCalc = num => (100 / this.dna.length * num).toFixed('0');
            topRankMatch.percentage = parseInt(percentageCalc(topRankMatch.topMatch));

            return topRankMatch;

        },

    }
};


//Testing
const log = console.log;
const line = `\n---------------------\n`
const organism = pAequorFactory(1, mockUpStrand());
log(`\n"P. aequor" - the mystique organism looks like this: \n`);
log(`ID: ${organism.specimentNum}\nDNA: ${organism.dna}\n`);

log(line);

log(`"P. aequor mutate sometimes."\n`);
organism.mutate();
log(`Blob blob, I am mutating right now!`);
log(`ID: ${organism.specimentNum}\nDNA: ${organism.dna}\n`);
log(`"Holly Darwin! In which genome is a change?"\n`);

log(line);

log(`Nevermind.`);
log(`Look! Here is an another beutifull P. aequor.\n`);
const organism2 = pAequorFactory(2, mockUpStrand());
log(`ID: ${organism2.specimentNum}\nDNA: ${organism2.dna}\n`);
log(`What a handsome! Hmm, ..lets compare them!\n`);
log(`Look closer.\n`);
log(`#1 DNA: ${organism.dna}
#2 DNA: ${organism2.dna}\n`);
log(`..comparing \n`);
log(`COMPUTER: ${organism.compareDNA(organism2)}\n`);

log(line);

log(`Did you heard that?
"P. aequor have a likelier chance of survival
if their DNA is made up of 
at least 60% 'C' or 'G' bases."\n`);
log("Thats interesting, isn't it?\n");
log(`Well, lets try the first one!\n`)
log(`...testing\n`);
log(`COMPUTER: ${organism.willLikelySurvive() ? `Yup! #1 buddy chances looks good.` : `Nope! #1 doesn't have this perspective.`}\n`);
log(`What about a second one?\n`)
log(`...testing\n`);
log(`COMPUTER: ${organism2.willLikelySurvive() ? `Yup! #2 buddy chances looks good.` : `Nope! #2 doesn't have this perspective.`}\n`);

log(line);

log(`Lets make a colony!\n`);
log(`..as a time goes colony grows.\n`)
const colony = [];
for (let i = 1; i <= 30; i++) {
    colony.push(pAequorFactory(i, mockUpStrand()));
};
log(`COMPUTER: Colony contains ${colony.length} new grown "P. aequor" buddies already.\n`);
colony.forEach(sample => {
        let entity = {
            id: sample.specimentNum,
            dna: sample.dna
        }
        let note = `#${entity.id}${entity.id < 10 ? ' ' : ''} DNA: ${entity.dna}`
        log(note);
})

log("\nSeems like a nice party there.\n");

log(line);

log(`Will be nice to see a complementary strand from #30.\n`);
log(`...processing\n`);
let organism30x = colony[29].complementStrand();
log(`DNA: ${colony[29].dna} --original
DNA: ${organism30x} --complementary\n`);

log(line);

log(`Lets find the most similar buddies from colony.\n`);
log(`...processing\n`);

let cousin = organism.compareColony(colony);
log(`COMPUTER: I found max ${cousin.percentage}% similarity
between strand #${cousin.ex1.id} and #${cousin.ex2.id} in the colony
of ${colony.length} "P. aequor" buddies.
They are sharing ${cousin.topMatch} identical DNA bases
in the same location.\n`);

log(line);

log("\nTime for a beer.");
log("Cheers!\n");

log(line);