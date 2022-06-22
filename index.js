function y(num,facto){
    if(num>0){
    facto=facto*num;
    return y(num-1,facto);
}
return facto;
}
console.log(y(5,1));
   