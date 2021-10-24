const { pAequorFactory } = require('./main.js');

const organism = pAequorFactory();
const organism1 = pAequorFactory(1);
const organism2 = pAequorFactory(2);
const colony = [];
for (let i = 1; i <= 30; i++) {
    colony.push(pAequorFactory(i));
};

const log = console.log;
const line = `\n---------------------\n`;


//Testing Story
log(`\n\n\n***********************************\n\n`);
log(`"Pila aequor - the mystique organism"`)
log(`\n\n***********************************\n\n\n`);

log(`The mystique organism looks like this: \n`);
log(`ID: ${organism1.specimenNum}\nDNA: ${organism1.dna}\n`);

log(line);

log(`"P. aequor mutate, sometimes."\n`);
let mutatedDNA = organism1.mutate();
log(`Blob blob, I am mutating right now!`);
log(`DNA: ${organism1.dna}`);
log(`DNA: ${mutatedDNA}\n`);
log(`"Holly Darwin! In which genome is a change?"\n`);

log(line);

log(`Nevermind.`);
log(`Look! Here is an another beutifull P. aequor.\n`);
log(`ID: ${organism2.specimenNum}\nDNA: ${organism2.dna}\n`);
log(`What a handsome! Hmm, ..lets compare them!\n`);
log(`Look closer.\n`);
log(`#1 DNA: ${organism1.dna}
#2 DNA: ${organism2.dna}\n`);
log(`...comparing \n`);
log(`COMPUTER: `);
organism1.compareDNA(organism2);
log();

log(line);

log(`Did you heard that?
"P. aequor have a likelier chance of survival
if their DNA is made up of 
at least 60% 'C' or 'G' bases."\n`);
log("Thats interesting, isn't it?\n");
log(`Well, lets try the first one!\n`)
log(`...testing\n`);
log(`COMPUTER: ${organism1.willLikelySurvive() ? `Yup! #1 buddy chances looks good.` : `Nope! #1 doesn't have this perspective.`}\n`);
log(`What about a second one?\n`)
log(`...testing\n`);
log(`COMPUTER: ${organism2.willLikelySurvive() ? `Yup! #2 buddy chances looks good.` : `Nope! #2 doesn't have this perspective.`}\n`);

log(line);

log(`Lets make a colony!\n`);
log(`..as a time goes colony grows.\n`)
log(`COMPUTER: Colony contains ${colony.length} new grown "P. aequor" buddies already.\n`);
colony.forEach(sample => {
        let entity = {
            id: sample.specimenNum,
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