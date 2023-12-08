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
    let arrayNomsNoCopy = ['David Arguelles', 'Harpreet Kaur', 'Laia Rodriguez'];
    let array = [1, 2, 3, 4, 5];
   
    //AT:
    let arrayAt = arrayNoms.at(2);
    document.writeln('<b>AT (2):</b>' + arrayNoms +' > '+ arrayAt + '</br>');

    //CONCAT:
    let arrayConcat = arrayNoms.concat('Juan Daniel');
    document.writeln('</br><b>CONCAT:</b>' + arrayNoms +' > '+ arrayConcat + '</br>');

    //CONSTRUCTOR:
    let arrayConstructor = new Array(arrayNoms);
    document.writeln('</br><b>CONSTRUCTOR:</b>' + arrayNoms +' > '+ arrayConstructor + '</br>');

    //COPYWITHIN:
    let arrayCopy = arrayNoms.slice();
    arrayCopy.copyWithin(2);
    document.writeln('</br><b>COPY:</b>' + arrayNoms +' > '+ arrayCopy + '</br>');

    //ENTRIES:
    let arrayEntries = arrayNoms.entries();
    document.writeln('</br><b>ENTRIES:</b></br>');

    for (let entry of arrayEntries) {
        document.writeln(entry + '<br>');
    }

    //EVERY:
    let arrayEvery = arrayNoms.every(colorMenor);
    document.writeln('</br><b>EVERY:</b>' + arrayNoms +' > '+ arrayEvery + '</br>');

    //FILL:
    let arrayFill = arrayNoms.slice();
    arrayFill.fill('Juan Daniel');
    document.writeln('</br><b>FILL:</b>' + arrayNoms +' > '+ arrayFill + '</br>');

    //FILTER:
    let arrayFilter = arrayNoms.filter(function(nom) {
        return nom.includes('David');
      });
    document.writeln('</br><b>FILTER:</b>' + arrayNoms +' > '+ arrayFilter + '</br>');

    //FIND:
    let nomABuscar = 'Harpreet';

    let persona = arrayNoms.find(function(element) {
        return element.includes(nomABuscar);
    });

    let arrayFind = persona;

    document.writeln('</br><b>FIND:</b>' + arrayNoms +' > '+ arrayFind + '</br>');

    //FINDINDEX:
    let arrayFindInd= arrayNoms.findIndex(function(element) {
        return element.includes('Harpreet Kaur');
      });

    document.writeln('</br><b>FIND INDEX:</b>' + arrayNoms +' > '+ arrayFindInd + '</br>');

    //FLAT:
    let arrayNomsSubArray = ['David Arguelles', ['Harpreet Kaur', 'Laia Rodriguez'], 'John Doe'];
    let arrayFlat = arrayNomsSubArray.flat();
    document.writeln('</br><b>FLAT:</b>' + arrayNoms +' > '+ arrayFlat + '</br>');

    //FLATMAP: ---------- FINS AQUI
    let arrayFlatM;
    document.writeln('</br><b>FLAT MAP:</b>' + arrayNoms +' > '+ arrayFlatM + '</br>');

    //FOR EACH
    let arrayFE;
    document.writeln('</br><b>FOR EACH:</b>' + arrayNoms +' > '+ arrayFE + '</br>');

    //FROM:
    let arrayFrom;
    document.writeln('</br><b>FROM:</b>' + arrayNoms +' > '+ arrayFrom + '</br>');

    //INCLUDES:
    let arrayInclude;
    document.writeln('</br><b>INCLUDES:</b>' + arrayNoms +' > '+ arrayInclude + '</br>');

    //INDEX:
    let arrayInd;
    document.writeln('</br><b>INDEX:</b>' + arrayNoms +' > '+ arrayInd + '</br>');

    //ISARRAY:
    let arrayIsArr;
    document.writeln('</br><b>IS ARRAY:</b>' + arrayNoms +' > '+ arrayIsArr + '</br>');

    //JOIN:
    let arrayJoin = arrayNoms.join(', juju ');
    document.writeln('</br><b>JOIN:</b>' + arrayNoms +' > '+ arrayJoin + '</br>');
    
    //KEYS:
    let arrayKeys = arrayNoms.keys();
    document.writeln('</br><b>KEYS:</b>' + arrayNoms +' > '+ arrayKeys + '</br>');

    //LASTINDEX:
    let arrayLastI;
    document.writeln('</br><b>LAST INDEX:</b>' + arrayNoms +' > '+ arrayLastI + '</br>');

    //LENGTH
    let arrayLength;
    document.writeln('</br><b>LENGHT:</b>' + arrayNoms +' > '+ arrayLength + '</br>');
    
    //MAP 
    let arrayMap;
    document.writeln('</br><b>MAP:</b>' + arrayNoms +' > '+ arrayMap + '</br>');

    //POP
    let arrayPop = arrayNoms.slice();
    arrayPop.pop();
    document.writeln('</br><b>POP:</b>' + arrayNoms +' > '+ arrayPop + '</br>');

    //PROTOTYPE
    let arrayProto;
    document.writeln('</br><b>PROTOTYPE:</b>' + arrayNoms +' > '+ arrayProto + '</br>');
    
    //PUSH
    let arrayPush = arrayNoms.slice();
    arrayPush.push('Stitchu');
    document.writeln('</br><b>PUSH:</b>' + arrayNoms +' > '+ arrayPush + '</br>');

    //REDUCE 
    let arrayReduce;
    document.writeln('</br><b>REDUCE:</b>' + arrayNoms +' > '+ arrayReduce + '</br>');

    //REDUCERIGHT 
    let arrayReduceR;
    document.writeln('</br><b>REDUCE RIGHT:</b>' + arrayNoms +' > '+ arrayReduceR + '</br>');

    //REVERSE 
    let arrayReverse;
    document.writeln('</br><b>REVERSE:</b>' + arrayNoms +' > '+ arrayReverse + '</br>');

    //SHIFT 
    let arrayShift;
    document.writeln('</br><b>SHIFT:</b>' + arrayNoms +' > '+ arrayShift + '</br>');

    //SLICE 
    let arraySlice;
    document.writeln('</br><b>SLICE:</b>' + arrayNoms +' > '+ arraySlice + '</br>');

    //SOME 
    let arraySome;
    document.writeln('</br><b>SOME:</b>' + arrayNoms +' > '+ arraySome + '</br>');
    
    //SORT
    let arraySort;
    document.writeln('</br><b>SORT:</b>' + arrayNoms +' > '+ arraySort + '</br>');
    
    //SPLICE
    let arraySplice;
    document.writeln('</br><b>SPLICE:</b>' + arrayNoms +' > '+ arraySplice + '</br>');
    
    //TOSTRING - FET
    let arrayToString = arrayNoms.toString();
    document.writeln('</br><b>TO STRING:</b>' + arrayNoms +' > '+ arrayToString + '</br>');
    
    //UNSHIFT
    let arrayUnshift;
    document.writeln('</br><b>UNSHIFT:</b>' + arrayNoms +' > '+ arrayUnshift + '</br>');

    //VALUEOF 
    let arrayValueOf;
    document.writeln('</br><b>VALUE OF:</b>' + arrayNoms +' > '+ arrayValueOf + '</br>');
}
