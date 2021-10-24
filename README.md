# Mysterious Organism
> Exercise made as JS challenge project<br/>
on [codecademy](https://codecademy.com) learning path.<br/>
Project focused on **factory functions**.

## Usage
```
const { pAequorFactory } = require('./main.js');

const organism1 = pAequorFactory();
```

## Function
### **pAequorFactory( _specimenNum, dna_ )**
Return: Object

#### > _specimenNum_
Type: number<br/>
Default: 0<br/>

#### > _dna_
Type: array<br/>
Default: []<br/>

## Getters
* pAequorFactory.specimenNum
* pAequorFactory.dna

### pAequorFactory.**specimenNum**
Return: number<br/>
Default: 0<br/>

### pAequorFactory.**dna**
Return: array<br/>
Default: []<br/>

## Setters
* pAequorFactory.specimenNum
* pAequorFactory.dna

### pAequorFactory.**specimenNum**
Type: number<br/>
Default: 0<br/>

Example:
```
pAequorFactory.specimenNum = 1;
```

### pAequorFactory.**dna**
Type: array<br/>
Default: []<br/>

Example:
```
pAequorFactory.dna = ['A', 'T', 'C', 'G'];
```

## Methods

* pAequorFactory.mutate()
* pAequorFactory.compareDNA()
* pAequorFactory.willLikelySurvive()
* pAequorFactory.complementStrand()
* pAequorFactory.compareColony()

### pAequorFactory.**mutate()**
> Mutates one genome in DNA sequence.<br/>Updates original DNA sequence with mutation.

Example:
```
organism1.mutate();

console.log(organism1.dna);
// Returns changed DNA
```

### pAequorFactory.**compareDNA(_organism_)**
> Compares DNA sequences.
#### > _organism_
Type: object<br/>
Default: undefined

Example:
```
organism1.compareDNA(organism2);

// Returns log of compared species numbers and genome match in %
```

### pAequorFactory.**willLikelySurvive()**
> Test of specific genome bases presence and their amounth in DNA sequence.

Example:
```
organism1.willLikelySurvive();

// Returns <boolean>
```

### pAequorFactory.**complementStrand()**
> Returning complement DNA sequence to original DNA sequence.<br/>
> Follows a key: A to T, C to G and viceversa;

Example:
```
let organism2 = organism1.complementStrand();
console.log(organism2.dna)

// Returns complement DNA
```

### pAequorFactory.**compareColony(_colony_)**
> Compares all organism in colony and returns closest two.
#### > _colony_
Type: array<br/>
Default: undefined

Example:
```
let colony = [
    organism1,
    organism2,
    organism3,
    ...
];

organism.compareColony(colony);

```

## Testing
module testing preview 
![Code](./public/aqueror-colony.png)"creation of organism colony - testing output"

![Code](./public/aqueror-colony-compare.png)"finding the most simillar DNAs - testing output"