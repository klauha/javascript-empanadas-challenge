export const fn = (a, b, c) => {
   if (a + b + c >= 40) {
      throw new Error('La suma no puede ser mayor a 40');
   }

   if ((a + b + c) % 3 !== 0) {
      throw new Error('El numero total de empanadas debe ser divisible por 3')
   }

    

   if (b === 0 && c === 0) {
      return 12 * a;
   }

   if (a === 0 && c === 0) {
      return 14 * b
   }

   if (a === 0 && b === 0) {
      return 16 * c;
   }
   if (a < 0) {
      throw new Error("a no puede ser menor que 0")
   }

   if (b < 0) {
      throw new Error("b no puede ser menor que 0")
   }

   if (c < 0) {
      throw new Error("c no puede ser menor que 0")
   }

   let mediasEmpanadasPollo = a * 2;
   let mediasEmpanadasCarne = b * 2;
   let mediasEmpanadasVegetarinas = c * 2
   let costeTotal = 0;



   while(mediasEmpanadasPollo >= 2 && mediasEmpanadasCarne >= 2 && mediasEmpanadasVegetarinas >= 2) {
      mediasEmpanadasPollo -= 2
      mediasEmpanadasCarne-= 2
      mediasEmpanadasVegetarinas-=2

      costeTotal += 14
   }

   while(mediasEmpanadasPollo >=3 && mediasEmpanadasCarne >= 3) {
      mediasEmpanadasPollo -= 3
      mediasEmpanadasCarne-= 3

      costeTotal += 13
   }

   while(mediasEmpanadasPollo >=3 && mediasEmpanadasVegetarinas >= 3) {
      mediasEmpanadasPollo -= 3
      mediasEmpanadasVegetarinas-= 3

      costeTotal += 14
   }

   while(mediasEmpanadasCarne >=3 && mediasEmpanadasVegetarinas >= 3) {
      mediasEmpanadasCarne -= 3
      mediasEmpanadasVegetarinas-= 3

      costeTotal += 15
   }  

   while(mediasEmpanadasPollo >=4 && mediasEmpanadasCarne >= 2) {
      mediasEmpanadasPollo -= 4
      mediasEmpanadasCarne-= 2

      costeTotal += 13
   }

   while(mediasEmpanadasPollo >=4 && mediasEmpanadasVegetarinas >= 2) {
      mediasEmpanadasPollo -= 4
      mediasEmpanadasVegetarinas-= 2

      costeTotal += 14
   }

   while(mediasEmpanadasCarne >=4 && mediasEmpanadasVegetarinas >= 2) {
      mediasEmpanadasCarne -= 4
      mediasEmpanadasVegetarinas-= 2

      costeTotal += 15
   }  

   while(mediasEmpanadasPollo >=2 && mediasEmpanadasCarne >= 4) {
      mediasEmpanadasPollo -= 2
      mediasEmpanadasCarne-= 4

      costeTotal += 14
   }

   while(mediasEmpanadasPollo >=2 && mediasEmpanadasVegetarinas >= 4) {
      mediasEmpanadasPollo -= 2
      mediasEmpanadasVegetarinas-= 4

      costeTotal += 16
   }

   while(mediasEmpanadasCarne >=2 && mediasEmpanadasVegetarinas >= 4) {
      mediasEmpanadasCarne -= 2
      mediasEmpanadasVegetarinas-= 4

      costeTotal += 16
   }  


    
    

   return costeTotal;
}

