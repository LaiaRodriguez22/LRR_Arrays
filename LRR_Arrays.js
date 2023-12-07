/*

Crea una funció JavaScript que crei un array de 6 colors per nom (‘verd’, ‘vermell’, ‘groc’, ‘blau’,
‘negre’, ‘blanc’) i que:

 digui si tots els colors són menors que ‘marró’
 et torni els colors que són menors que ‘marró’
 et torni els darrers 2 colors (independentment de quants hi hagin abans)
 afegeixi el color ‘turquesa’
 elimini el color ‘verd’
(ha d’escriure en una pàgina Web)

*/

/*------ EXERCICI UN --------*/

function lrrColors(){
    let array = ['verd', 'vermell', 'groc', 'blau', 'negre', 'blanc']

    let boolTotsColors = array.every(colorMenor);
    document.write('<br> Bool tots els colors: ' + boolTotsColors + '<br>');

    let nomesColorsMenors = array.filter(colorMenor);
    document.write('Colors menors: ' + nomesColorsMenors + '<br>');

    let darrersUltims = array.slice(array.length-2);
    document.write('Ultims dos: ' + darrersUltims + '<br>');

    let afegirTurq = array.push('turquesa');
    document.write('Amb Turquesa: ' + array + '<br>');

    array.shift();
    document.write('Eliminant el primer element: ' + array + '<br>');

}

function colorMenor(array){
    return array<'marro';
}

/*------ EXERCICI DOS --------*/

function lrrFunctionsArray(){

    //ARRAYS QUE UTILITZO DURANT TOT L'EXERCICI
    let arrayNoms = ['David Arguelles', 'Harpreet Kaur', 'Laia Rodriguez'];
    let array = [1, 2, 3, 4, 5];
   
    //AT:
    let arrayAt = arrayNoms.at(2);
    document.writeln('<b>AT (2):</b>' + arrayNoms +' > '+ arrayAt + '</br>');

    //CONCAT:
    let arrayConcat = arrayNoms.concat('Juan Daniel');
    document.writeln('<b>CONCAT:</b>' + arrayNoms +' > '+ arrayConcat + '</br>');

    //CONSTRUCTOR:
    let arrayConstructor;
    document.writeln('<b>CONSTRUCTOR:</b>' + arrayNoms +' > '+ arrayConstructor + '</br>');

    //COPYWITHIN:
    let arrayCopy;
    document.writeln('<b>COPY:</b>' + arrayNoms +' > '+ arrayCopy + '</br>');

    //ENTRIES:
    let arrayEntries;
    document.writeln('<b>ENTRIES:</b>' + arrayNoms +' > '+ arrayEntries + '</br>');

    //EVERY:
    let arrayEvery;
    document.writeln('<b>EVERY:</b>' + arrayNoms +' > '+ arrayEvery + '</br>');

    //FILL:
    let arrayFill;
    document.writeln('<b>FILL:</b>' + arrayNoms +' > '+ arrayFill + '</br>');

    //FILTER:
    let arrayFilter;
    document.writeln('<b>FILTER:</b>' + arrayNoms +' > '+ arrayFilter + '</br>');

    //FIND:
    let arrayFind;
    document.writeln('<b>FIND:</b>' + arrayNoms +' > '+ arrayFind + '</br>');

    //FINDINDEX:
    let arrayFindInd;
    document.writeln('<b>FIND INDEX:</b>' + arrayNoms +' > '+ arrayFindInd + '</br>');

    //FLAT:
    let arrayFlat;
    document.writeln('<b>FLAT:</b>' + arrayNoms +' > '+ arrayFlat + '</br>');

    //FLATMAP:
    let arrayFlatM;
    document.writeln('<b>FLAT MAP:</b>' + arrayNoms +' > '+ arrayFlatM + '</br>');

    //FOR EACH
    let arrayFE;
    document.writeln('<b>FOR EACH:</b>' + arrayNoms +' > '+ arrayFE + '</br>');

    //FROM:
    let arrayFrom;
    document.writeln('<b>FROM:</b>' + arrayNoms +' > '+ arrayFrom + '</br>');

    //INCLUDES:
    let arrayInclude;
    document.writeln('<b>INCLUDES:</b>' + arrayNoms +' > '+ arrayInclude + '</br>');

    //INDEX:
    let arrayInd;
    document.writeln('<b>INDEX:</b>' + arrayNoms +' > '+ arrayInd + '</br>');

    //ISARRAY:
    let arrayIsArr;
    document.writeln('<b>ENTRIES:</b>' + arrayNoms +' > '+ arrayEntries + '</br>');

    //JOIN:
    let arrayJoin;
    document.writeln('<b>ENTRIES:</b>' + arrayNoms +' > '+ arrayEntries + '</br>');
    
    //KEYS:
    let arrayKeys;
    document.writeln('<b>ENTRIES:</b>' + arrayNoms +' > '+ arrayEntries + '</br>');

    //LASTINDEX:
    let arrayLastI;
    document.writeln('<b>ENTRIES:</b>' + arrayNoms +' > '+ arrayEntries + '</br>');

    //LENGTH
    let arrayLength;
    document.writeln('<b>ENTRIES:</b>' + arrayNoms +' > '+ arrayEntries + '</br>');
    
    //MAP 
    let arrayMap;
    document.writeln('<b>ENTRIES:</b>' + arrayNoms +' > '+ arrayEntries + '</br>');

    //POP
    let arrayPop;
    document.writeln('<b>ENTRIES:</b>' + arrayNoms +' > '+ arrayEntries + '</br>');

    //PROTOTYPE
    let arrayProto;
    document.writeln('<b>ENTRIES:</b>' + arrayNoms +' > '+ arrayEntries + '</br>');
    
    //PUSH
    let arrayPush;
    document.writeln('<b>ENTRIES:</b>' + arrayNoms +' > '+ arrayEntries + '</br>');

    //REDUCE 
    let arrayReduce;
    document.writeln('<b>ENTRIES:</b>' + arrayNoms +' > '+ arrayEntries + '</br>');

    //REDUCERIGHT 
    let arrayReduceR;
    document.writeln('<b>ENTRIES:</b>' + arrayNoms +' > '+ arrayEntries + '</br>');

    //REVERSE 
    let arrayReverse;
    document.writeln('<b>ENTRIES:</b>' + arrayNoms +' > '+ arrayEntries + '</br>');

    //SHIFT 
    let arrayShift;
    document.writeln('<b>ENTRIES:</b>' + arrayNoms +' > '+ arrayEntries + '</br>');

    //SLICE 
    let arraySlice;
    document.writeln('<b>ENTRIES:</b>' + arrayNoms +' > '+ arrayEntries + '</br>');

    //SOME 
    let arraySome;
    document.writeln('<b>ENTRIES:</b>' + arrayNoms +' > '+ arrayEntries + '</br>');
    
    //SORT
    let arraySort;
    document.writeln('<b>ENTRIES:</b>' + arrayNoms +' > '+ arrayEntries + '</br>');
    
    //SPLICE
    let arraySplice;
    document.writeln('<b>SPLICE:</b>' + arrayNoms +' > '+ arraySplice + '</br>');
    
    //TOSTRING
    let arrayToString;
    document.writeln('<b>TO STRING:</b>' + arrayNoms +' > '+ arrayToString + '</br>');
    
    //UNSHIFT
    let arrayUnshift;
    document.writeln('<b>UNSHIFT:</b>' + arrayNoms +' > '+ arrayUnshift + '</br>');

    //VALUEOF 
    let arrayValueOf;
    document.writeln('<b>VALUE OF:</b>' + arrayNoms +' > '+ arrayValueOf + '</br>');
}
