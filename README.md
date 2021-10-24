# Mysterious Organism
> Exercise made as JS challenge project<br/>
on [codecademy](https://codecademy.com) learning path.<br/>
Project focused on factory functions

## Usage
```
const { pAequorFactory } = require('./main.js');
```

## API

### Parrameters
#### pAequorFactory(specimenNum,dna)

#### > specimenNum
Type: number<br/>
Default: 0<br/>

#### > dna
Type: array<br/>
Default: []<br/>

### Setters
#### pAequorFactory.specimenNum(num)
#### > num
Type: number<br/>
Default: 0<br/>

Set the specimen numper.<br/>

#### pAequorFactory.dna(dna)
#### > dna
Type: array<br/>
Default: []<br/>

Set the specimen DNA sequence.<br/>

### Methods
#### pAequorFactory.mutate()

Mutate DNA sequence and set it as new dna.<br/>

#### pAequorFactory.compareDNA(organism)
#### > organism
Type: object<br/>

Compare dna sequence with "organism" dna.<br/>

#### pAequorFactory.willLikelySurvive()
Tests if organism has bigger chance to survive.<br/>

#### pAequorFactory.complementStrand()
Returns complement DNA sequence</br>

#### pAequorFactory.compareColony(colony)
#### > colony
Type: array<br/>

Compares all organism in colony and returns closest two</br>




## Testing
module testing preview 
![Code](./public/aqueror-colony.png)"creation of organism colony - testing output"

![Code](./public/aqueror-colony-compare.png)"finding the most simillar DNAs - testing output"