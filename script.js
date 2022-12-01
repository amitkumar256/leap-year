

setInterval(()=>{document.getElementById("date").innerHTML=Date();},1000)

function myFunc(){
    const text=document.getElementById("year").value;
    if(text%100==0)
    {
        if(text%400==0)
        {
            document.getElementById("para").innerHTML="leap"
        }
        else{
            document.getElementById("para").innerHTML="not leap"

        }
    }
    else{
        if(text%4==0)
        {
            document.getElementById("para").innerHTML="leap"
        }
        else{
            document.getElementById("para").innerHTML="not leap"

        }
    }
}
