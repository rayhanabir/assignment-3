 //kilometerToMeter:

function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;

}
kilometerToMeter();

 //hotelCost:

    function hotelCost (day){
        
        var cost = 0;
        if(day<=10){
            cost = day*100;
        }else if(day<=20){
            var firstPartCost = 10*100;
            var remainingDay = day-10;
            var secondPartCost = remainingDay*80;
            cost = firstPartCost+secondPartCost;  
        }else
        {
            var firstPartCost = 10*100;
            var secondPartCost = 10*80;
            var remainingDay = day-20;
            var thirdPartCost = remainingDay*50;
            cost = firstPartCost+secondPartCost+thirdPartCost;
        }
        return cost;
    }
    hotelCost();

    //megaFriend

     function megaFriend(friendsName){
         var max = friendsName[0];
         for(var i = 0; i<friendsName.length; i++){
             var element = friendsName[i];
             if(element.length > max.length){
                 max = element;
             }
         }
         return max;
     }
     megaFriend();

    //budgetCalculator
     
    
function budgetCalculator (watch, mobile, laptop){
    var watchPrice = watch*50;
    var mobilePrice = mobile*100;
    var laptopPrice = laptop*500;

    totalBill= watchPrice+mobilePrice+laptopPrice;
   
    return totalBill;
}
    budgetCalculator ();
    






    

   
    



