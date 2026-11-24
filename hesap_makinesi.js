
function sayiyazdir(button){
    document.getElementById("ekran").value+=button.textContent;
}
function isaretyazdir(button){
    document.getElementById("ekran").value+=button.textContent;
}
function baslat(button){
    document.getElementById("ekran").disabled=false;//ekranın kullanılamaz devre dışı olmasını kapattık artık imle çalışabilir
    document.getElementById("ekran").focus();
}
function temizle(button){
    document.getElementById("ekran").value="";
}
function kapat(button){
    
    document.getElementById("ekran").value="";
    document.getElementById("ekran").disabled=true;
      
}
function sil(button){
    document.getElementById("ekran").value=document.getElementById("ekran").value.slice(0,-1);
//slice:0. elemandan başlayarak gider sonuncu elemanı siler

}
let sonsonuc=0;
function topla(...sayilar)
{
    
    let toplam=0;
    for(let sayi of sayilar){
        toplam+=Number(sayi);
        
        
    }
    sonsonuc=toplam;
    return toplam;

}
function fark(...sayilar) {
    let sonuc = Number(sayilar[0]);
    if (Number.isNaN(sonuc)) return "HATA!";
    else{

    for (let i = 1; i < sayilar.length; i++) {
        let sonraki = Number(sayilar[i]);
        if (Number.isNaN(sonraki)) return "HATA!";
        sonuc -= sonraki;
    }
}

    sonsonuc = sonuc;
    return sonuc;
}
function carpma(...sayilar){
    
    let carp=1;
    for(let sayi of sayilar){
        carp*=Number(sayi);
        
    }
    sonsonuc=carp;
    return carp;
}
function bolme(...sayilar){
    
  
    let bolum=Number(sayilar[0]);
    
    for(let i=1;i<sayilar.length;i++){
        let bolen=Number(sayilar[i]);
        if(bolen===0) return "HATA";
        bolum /=bolen;       
        }
    sonsonuc=bolum;
    return bolum;

}
function exp(sayi){
    let n=Number(sayi);
    if(Number.isNaN(n)) return "HATA!";
    else{
    let sonuc;
    sonuc=(10)**(n);
    sonsonuc=sonuc;
    return sonuc;}
    
}
function faktoriyel(sayi){
    let n=Number(sayi);
    if(n<0||!Number.isInteger(n)) return "HATA!";
    else{
    let sonuc=1;
    for(let i=1;i<=n;i++){
        sonuc*=(i);        
    }
    sonsonuc=sonuc;
    return sonuc;}
}
function euler(sayi){
    if(sayi==="")sayi=1;
    let euler=Math.E;
    let sonuc=sayi*euler;
    sonuc=sonuc.toFixed(4);
    sonsonuc=sonuc;
    return sonuc;
    
}
function pi(sayi){
    if(sayi==="")sayi=1;
    let pi=Math.PI;
    let sonuc=sayi*pi;
    sonuc=sonuc.toFixed(4);
    sonsonuc=sonuc;
    return sonuc;
}
function sin(sayi){
    let derece=Number(sayi);
    if (Number.isNaN(derece))return "HATA!";
    else{
    let radyan=derece*(Math.PI/180);//ilk radyan bulup sinüs alınır
    let sonuc=Math.sin(radyan).toFixed(3);
    sonsonuc=sonuc;
    return sonuc;}
}
function cos(sayi){
    let derece=Number(sayi);
    if(Number.isNaN(derece))return "HATA!";
    else{
    let radyan=derece*(Math.PI/180);
    let sonuc=Math.cos(radyan).toFixed(3);
    sonsonuc=sonuc;
    return sonuc;}
}   
function tan(sayi){
    let derece=Number(sayi);
    if(Number.isNaN(derece))return "HATA!";
    else{
    let radyan=derece*(Math.PI/180);
    if(Math.abs(Math.cos(radyan))<1e-10){return "HATA!"};
    let sonuc=Math.tan(radyan).toFixed(3);
    sonsonuc=sonuc;
    return sonuc;}
}
function ln(sayi){
    let n=Number(sayi);
    if(n<=0 ||Number.isNaN(n)){return "HATA!";}
    else{
    let sonuc=(Math.log(n)).toFixed(3);
    sonsonuc=sonuc;
    return sonuc;}
}
function log(sayi){
    let n=Number(sayi);
    if(n<=0|| Number.isNaN(n) ){return "HATA!";}
    else{
    let sonuc=(Math.log10(n)).toFixed(3);
    sonsonuc=sonuc;
    return sonuc;}
}
function ussu(alt,ust){
    let a=Number(alt);
    let b=Number(ust);
    if(Number.isNaN(a)||Number.isNaN(b)) return "HATA!";
    else{
    sonsonuc=a**b;
    return a**b;}
}
function kare(sayi){
    let n=Number(sayi);
    if (n === undefined || String(sayi).trim() === "") {
    return "HATA!";
    }
    else{
    let sonuc=n*n;
    sonsonuc=sonuc;
    return sonuc;}
}
function karakok(sayi){
    let n=Number(sayi);
    if (n === undefined || String(n).trim() === ""||n<0) {
        return "HATA!";
    }
    else{
    let sonuc=n**(0.5);
    sonsonuc=sonuc;
    return sonuc;}
}
function yuzde(sayi,deger){
    let n=Number(sayi);
    let x=Number(deger);
    let sonuc=n*(x/100);
    sonsonuc=sonuc;
    return sonuc;
}
function ters(sayi) {
    if (sayi === undefined || String(sayi).trim() === "") {
        return "HATA!";
    }

    let n = Number(sayi);

    if (Number.isNaN(n) || n === 0) {
        return "HATA!";
    }
    sonsonuc=1 / n;
    
    return 1 / n;
}
function mutlak(sayi){
    
    let n=Number(sayi);
    if(Number.isNaN(n))return "HATA!";
    else{
    let sonuc=Math.abs(n);
    sonsonuc=sonuc;
    return sonuc;
}
}





//EŞİTTİR TUŞU
function sonuc(button){
    
    let ekran=document.getElementById("ekran");
    //HAFIZA
    if(ekran.value.includes("Ans")){
        ekran.value=ekran.value.replaceAll("Ans",String(sonsonuc))
    }
    //+TUŞU

    if(ekran.value.includes("+")){
        let sayilar=ekran.value.split("+");
        
         ekran.value=topla(...sayilar);
         
    }
    //-TUŞU
    else if(ekran.value.includes("−")){
        let sayilar=ekran.value.split("−");
        ekran.value=fark(...sayilar);
        
    }
    //*TUŞU
    else if(ekran.value.includes("*")){
    let sayilar=ekran.value.split("*");
    ekran.value=carpma(...sayilar);
        
    }
    //TERSİNİ ALMA
    else if (ekran.value.includes("1/x")) {
    let parca = ekran.value.split("1/x");
    let sayi = parca[0];

    if (sayi === "") {
        sayi = parca[1];
    }

    ekran.value = ters(sayi);
    }
    //BÖLME
    else if(ekran.value.includes("/")){
        let sayilar=ekran.value.split("/");
        ekran.value=bolme(...sayilar);
       
    }
    //HAFIZA
    else if (ekran.value.includes("abs")){
    let parca=ekran.value.split("abs");
    let sayi=parca[1];
    if (sayi === undefined || sayi.trim() === "" || Number.isNaN(Number(sayi))) {
    ekran.value = "HATA!";}
    else{
    ekran.value=mutlak(sayi)};
    }
    //10 ÜZERİ

    else if(ekran.value.includes("EXP")){
        let parca=ekran.value.split("EXP");
        let sayi=parca[1];
        if (sayi === undefined || sayi.trim() === "" || Number.isNaN(Number(sayi))) {
        ekran.value = "HATA!";}
        else{ekran.value=exp(sayi);}

       
    }
    //FAKTÖRİYEL
    else if(ekran.value.includes("!")){
        let parca=ekran.value.split("!");
        let sayi=parca[0];
        ekran.value=faktoriyel(sayi);
    }
    //EULER
    else if(ekran.value.includes("e")){
        let parca=ekran.value.split("e");
        let sayi=parca[0];
        ekran.value=euler(sayi);
    }
    //Pİ
    else if(ekran.value.includes("π")){
        let parca=ekran.value.split("π");
        let sayi=parca[0];
        ekran.value=pi(sayi);

    }
    //TRİGONOMETRİK
    else if(ekran.value.includes("sin")){
        let parca=ekran.value.split("sin");
        let sayi=parca[1];
        if (sayi === undefined || sayi.trim() === "" || Number.isNaN(Number(sayi))) {
        ekran.value = "HATA!";}
        else{
        ekran.value=sin(sayi)};
    }
    else if(ekran.value.includes("cos")){
        let parca=ekran.value.split("cos");
        let sayi=parca[1];
        if (sayi === undefined || sayi.trim() === "" || Number.isNaN(Number(sayi))) {
        ekran.value = "HATA!";}
        else{
        ekran.value=cos(sayi)};
    
    }
    else if(ekran.value.includes("tan")){
        let parca=ekran.value.split("tan");
        let sayi=parca[1];
        if (sayi === undefined || sayi.trim() === "" || Number.isNaN(Number(sayi))) {
        ekran.value = "HATA!";}
        else{
        ekran.value=tan(sayi)};
    }
    //LOGARİTMA
    else if(ekran.value.includes("ln")){
        let parca=ekran.value.split("ln");
        let sayi=parca[1];
        if (sayi === undefined || sayi.trim() === "" || Number.isNaN(Number(sayi))) {
        ekran.value = "HATA!";}
        else{
        ekran.value=ln(sayi)};
    }
    
    else if (ekran.value.includes("log")){
        let parca=ekran.value.split("log");
        let sayi=parca[1];
        if (sayi === undefined || sayi.trim() === "" || Number.isNaN(Number(sayi))) {
        ekran.value = "HATA!";}
        else{
        ekran.value=log(sayi)};
    }
    //ÜSSEL
    else if(ekran.value.includes("yˣ")){
        let parca=ekran.value.split("yˣ");
        let alt=parca[0];
        let ust=parca[1];
        ekran.value=ussu(alt,ust);
    }
    else if(ekran.value.includes("x²")){
        let parca=ekran.value.split("x²");
        let sayi=parca[0];
        if (sayi === undefined || sayi.trim() === "" || Number.isNaN(Number(sayi))) {
        ekran.value = "HATA!";}
        else{
        ekran.value=kare(sayi)};
    }
    //KAREKÖK

    else if (ekran.value.includes("√")){
        let parca=ekran.value.split("√");
        let sayi=parca[1];
        if (sayi === undefined || sayi.trim() === "" || Number.isNaN(Number(sayi))) {
        ekran.value = "HATA!";}
        else{
        ekran.value=karakok(sayi)};
    }
    //YÜZDE
    else if (ekran.value.includes("%")){
        let parca=ekran.value.split("%");
        let sayi=parca[0];
        let deger=parca[1]
        ekran.value=yuzde(sayi,deger);
    }




    
 
    




}
