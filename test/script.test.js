import chai from 'chai';
const assert = chai.assert;
// On importe les fonctions
import {multiply, addition, division} from '../script.js';


describe('#addition()', () => {

    it('Should do addition a + b.', () => {     
        assert.equal(addition(2, 3), 5, "L'addition n'a pas aboutie");
    });
    // autres tests de la fonction...
});

describe('#multiply()', () => {

    
    it('Should do multiply a * b.', () => {       
        assert.equal(multiply(2, 3), 6, 'La multiplication n\'a pas aboutie');
    });
    // autres tests de la fonction...
});

describe('#division()', () => {

    it('Should do devide a / b.', () => {     
        assert.equal(division(4, 2), 2, "La division n'est pas aboutie");
    });
    // autres tests de la fonction...
    
});