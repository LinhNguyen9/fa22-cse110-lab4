let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
};
for(var i in statistics){
    var first = Object.keys(statistics);
    if(first[0].charAt(0) == 'r' || statistics[i]%2 != 0){
        console.log(first);
    }
    //dont know what to do
    // console.log(first[0].charAt(0));
    // console.log(statistics[i]);
}
// for( var i in statistics){
//     //compare every key
//     var first = statistics[i]; 
//     if()
//     //if key starts with "r" or the value of the key is odd then print it
// }