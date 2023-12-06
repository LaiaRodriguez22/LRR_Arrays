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

    
}