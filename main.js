let btn = document.getElementById("start");
let broj = document.getElementById("broj");
let i,j;
let br;
let niz = [[8,10,15,20,15,10,8],[45,45,45,45,45,45,45]]
let inter;
btn.addEventListener('click',function() {
    i=0;
    j=0;
    namesti_broj();
})
function namesti_broj(){
    if(i==0){
        document.getElementsByTagName("body")[0].style.background = "red"
    }else{
        document.getElementsByTagName("body")[0].style.background = "green"
    }
    br=niz[i][j];
    broj.innerHTML=br;
    inter=setInterval(oduzimanje, 1000);
}
function oduzimanje() {
    br--;
    broj.innerHTML=br;
    if(br==0){
        clearInterval(inter);
        if(i==0){
            i++
        }else{
            i=0;
            j++;
        }
        namesti_broj();
    }
}