
let kjop =[

    /*brukes vis man skal debug om vis ting ikke funker
    {
        film:"A",
        antall:"B",
        fornavn:"C",
        etternavn:"D",
        telefonnr:"E",
        epost:"F"
    }
*/
];


function leggTilKjop(){
    let billet ={
        film: document.getElementById("filmer").value,
        antall:document.getElementById("antall").value,
        fornavn: document.getElementById("fornavn").value,
        etternavn: document.getElementById("etternavn").value,
        telefonnr:document.getElementById("telefonnr").value,
        epost: document.getElementById("epost").value
    }
    let errorTeller =0;

    //antall check
    if (billet.film === "Velg film her"){
        document.getElementById("filmError").innerHTML ="Må velge film"

        errorTeller++
    }
    else {
        document.getElementById("filmError").innerHTML=""
    }

    if(billet.antall ===""){
        document.getElementById("antallError").innerHTML="Må skrive noe in i antall"
    }
    else {
        document.getElementById("antallError").innerHTML=""
    }

    // fornavn check
    if (billet.fornavn === ""){
        document.getElementById("forNavnError").innerHTML ="Må skrive noe inn i Fornavn"
        errorTeller++

    }
    else {
        document.getElementById("forNavnError").innerHTML=""
    }

    //etternavn check
    if (billet.etternavn ===""){
        document.getElementById("etterNavnError").innerHTML ="Må skrive noe inn i Etternavn"
        errorTeller++
    }
    else {
        document.getElementById("etterNavnError").innerHTML=""
    }

    // telefonnr check
    if (billet.telefonnr ===""){
        document.getElementById("telefonrError").innerHTML ="Må skrive noe inn i Telefonnr"
        errorTeller++
    }
    else {
        document.getElementById("telefonrError").innerHTML=""
    }

    //epost check
    if (billet.epost ===""){
        document.getElementById("epostError").innerHTML ="Må skrive noe inn i Epost "
        errorTeller++
    }
    else {
        document.getElementById("epostError").innerHTML=""
    }

    // vis det er ingen error så push arrayet
    if (errorTeller ===0){
        kjop.push(billet)
        visBillett()

        //legger biletten i consol logg
        for (let i=0;i<kjop.length;i++){
            console.log("billet lagt inn"+" "+kjop[i].film+" "+kjop[i].antall+" "+kjop[i].fornavn+" "+kjop[i].etternavn+" "+kjop[i].telefonnr+" "+kjop[i].epost)
        }
        tomBillett()

    }
    // fjerner elementer fra arrayer "kjop[]"
    else {
        kjop.splice(0)
        console.log("må fylle in all inputs")
    }

}

function tomBillett(){
    document.getElementById("filmer").value =""
    document.getElementById("antall").value =""
    document.getElementById("fornavn").value =""
    document.getElementById("etternavn").value =""
    document.getElementById("telefonnr").value =""
    document.getElementById("epost").value =""
}


function visBillett(){
    let ut= "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>"

    for (let billet of kjop){
        ut +="<tr><td>"+
            billet.film +"</td><th>"+
            billet.antall +"</th><th>"+
            billet.fornavn +"</th><th>"+
            billet.etternavn +"</th><th>"+
            billet.telefonnr +"</th><th>"+
            billet.epost +"</tr>"
    }

    ut += "</table"

    document.getElementById("listeBillet").innerHTML = ut
}

function slettListe(){
    console.log("Billet sletta")
    // fjerner billeten fra arrayet
    kjop.splice(0)

    document.getElementById("listeBillet").innerHTML = ""
}