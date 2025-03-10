const age = 14;


// Option 1
if(age >= 18){
    console.log(`Sarah can start driving license`);
}
else if ( age === 17){ // Option 2 
    console.log(`You need to 1 year.`);
}
else{ // else option
    const yearsLeft = 18 - age;
    console.log(`Sarah can't start driving license. Please wait ${yearsLeft} years.`);
    
}