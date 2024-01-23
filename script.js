const datebox = document.getElementById("datebox");
const btn = document.getElementById("btn");
const display= document.getElementById("display");


btn.onclick = function(){
    let birthdate=new Date(datebox.value);

    let by = birthdate.getFullYear();
    let bm = birthdate.getMonth();
    let bd =birthdate.getDate();

    let today= new Date();

    let ty = today.getFullYear();
    let tm = today.getMonth();
    let td = today.getDate();

    let ry,rm,rd;

    //dates
    if(td>=bd){
        rd=td-bd;
    }else{
        tm--;
        rd=td+exactDate(ty,tm)-bd;
    }

    //month
    if(tm>=bm){
        rm=tm-bm;
    }else{
        ty--;
        rm=tm+12-bm;
    }

    //year
    ry=ty-by;

    display.innerHTML=`You are <span>${ry} </span> years <span>${rm} </span> months and <span>${rd} </span>days old`;
}


function exactDate(year,month){
    return new Date(year,month,0).getDate();}
