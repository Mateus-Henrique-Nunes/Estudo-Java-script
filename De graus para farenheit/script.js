function calcular(degree){

    const degraus= degree.toUpperCase().includes('C')
    const farenheit= degree.toUpperCase().includes('F')
    

    if(!degraus && !farenheit){console.log('Erro')}


    let deg= Number(degree.toUpperCase().replace('C', ''))
    let formula= (graus)=> (graus - 32) * 5/9
    let degreesing= 'F'
    
    

    if(farenheit){
        
        deg= Number(degree.toUpperCase().replace('F', ''))
        formula= (graus)=> graus * 9/5 + 32

        degreesing= 'C'

    }

    return formula(deg) + degreesing


}
console.log(calcular('50F'))