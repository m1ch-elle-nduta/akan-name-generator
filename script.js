const present=birthdate;


const here=Gender;
console.log(continuewiththeexecution);
if (day>=1 &&day<=31 ){
    console.log("Correct birthdate")
}else{
    alert("Please enter a valid day between 1 and 31");
}
if(month>=1 &&month<=12){
    console.log("Correct month")
}else{
    alert("Please enter a valid month between 1 and 12");
    return;
}

const malenames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const femalenames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

letCC=parseInt(year.substring(year.substring(0,2)));
letYY=parseInt(year.substring(2,4));
letd=(
    ((CC/4)-2*CC-1)+(
        (5*YY/4)
    )+((26*(month+1)/10))+
    day
)%7;
letdayofweek=Math.floor(d);
if(dayofweek<0){
    dayofweek+=7;
}
letakanName=(gender==="male")?
malenames[dayofweek]:femalenames[dayofweek];
const result="Your Akan name is"+"akanName"+"!";
console.log("return result");
