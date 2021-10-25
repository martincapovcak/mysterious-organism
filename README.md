# Mysterious Organism
> Exercise made as JS challenge project at [codecademy](https://codecademy.com) learning path.<br/>
Project was focused on **factory functions**.
>
> Mysterious Organism DNA is based on "A","C","T","G" genes.

## Usage
```
const { pAequorFactory } = require('./main.js');

const organism1 = pAequorFactory();
```

# Function
## **pAequorFactory( _specimenNum, dna_ )**
Return: Object

### > _specimenNum_
Type: number<br/>
Default: 0<br/>

### > _dna_
Type: array<br/>
Default: random<br/>

## Getters
* pAequorFactory.specimenNum
* pAequorFactory.dna
* pAequorFactory.dnaBases

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
organism1.specimenNum = 1;
```

### pAequorFactory.**dna**
Type: array<br/>
Default: []<br/>

Example:
```
organism1.dna = ['A', 'T', 'C', 'G'];
```

## Methods

* pAequorFactory.mutate()
* pAequorFactory.compareDNA()
* pAequorFactory.willLikelySurvive()
* pAequorFactory.complementStrand()
* pAequorFactory.compareColony()

### pAequorFactory.**mutate()**
> Mutates one genome in DNA sequence. Returns mutated DNA.

Return: Array<br/>

Example:
```
organism1.mutate();
```

### pAequorFactory.**compareDNA(_organism_)**
> Compares DNA sequences.

Return: log<br/>

#### > _organism_
Type: object<br/>
Default: undefined

Example:
```
organism1.compareDNA(organism2);
```

### pAequorFactory.**willLikelySurvive()**
> Test of specific genome bases presence and their amounth in DNA sequence.

Return: Bool<br/>

Example:
```
organism1.willLikelySurvive();
```

### pAequorFactory.**complementStrand()**
> Complementary DNA strand to original DNA sequence.<br/>
> Follows a key: A to T, C to G and viceversa;

Return: Array<br/>

Example:
```
organism1.complementStrand();
```

### pAequorFactory.**compareColony(_colony_)**
> Compares all organism in colony and returns closest two.

Return: Object<br/>

#### > _colony_
Type: array<br/>
Default: undefined

Example:
```
organism.compareColony(colony);
```

# Testing
> Factory function test, based somewhere meanwhile in some unknown story.

Example:
```
$ node test.js
```

Story preview:

![Code](./public/aqueror-colony.png)<br/>
"creation of organism colony - testing output"

![Code](./public/aqueror-colony-compare.png)<br/>
"finding the most simillar DNAs - testing output"