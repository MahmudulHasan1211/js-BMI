const BMI = 23;

if ( BMI < 18.5){
    console.log("you are under weight")
}
else{
    if(BMI >= 18.5 && BMI <= 24.9){
        console.log("you are Normal")
    }
    else if(BMI >= 25 && BMI <= 29.9){
        console.log("you are overweight")
    }
    else{
        console.log("you are obese")
    }
}