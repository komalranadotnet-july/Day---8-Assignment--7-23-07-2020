'use strict'
let jeff = {
    weight: 65,
    height: 1.22,
    calBMI : function(){
    this.bmi = this.weight / (this.height * this.height);
     return this.bmi;
    }
   
   }
   
   let todd = {
    weight: 65,
    height: 1.22,
    calBMI : function(){
    this.bmi = this.weight / (this.height * this.height);
     return this.bmi;
    }
   
   }
   
   
   console.log("BMI of mark: "+jeff.calBMI());
   
   console.log("BMI of john: "+todd.calBMI());
   
  let bool = Boolean(jeff > todd)
   console.log(`Jeff has higher BMI than Todd: ${bool}`)

