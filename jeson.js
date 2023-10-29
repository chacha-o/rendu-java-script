var jeson = {
    prenom: "jeson", PV: 100
}

const caracteristiques = [
 {nom:"Nerd", Mort: 0.3,Degats:0.5, MortDegats: 0.2},
 {nom:"Sportif", Mort: 0.3, Degats:0.5,MortDegats: 0.2},
 {nom:"Blonde", Mort:0.3, Degats: 0.5, MortDegats: 0.2},
 {nom:"grand", Mort:0.3,Degats: 0.5, MortDegats: 0.2},
 {nom:"suisse", Mort:0.3,Degats: 0.5, MortDegats: 0.2}
]

var nom =["Bili","Laink","Max","Aldric","Luffy"]

let perso1= ["perso1"]
let perso2= ["perso2"]
let perso3= ["perso3"]
let perso4= ["perso4"]
let perso5= ["perso5"]

function genererCaract() {
    const caract = caracteristiques[Math.floor(Math.random() * caracteristiques.length)]
    return caract
}
function genererName() {
    const name = nom[Math.floor(Math.random() * nom.length)]
    return name
}

perso1.push(genererCaract(),genererName())
perso2.push(genererCaract(),genererName())
perso3.push(genererCaract(),genererName())
perso4.push(genererCaract(),genererName())
perso5.push(genererCaract(),genererName())

let character = [perso1, perso2, perso3, perso4, perso5]
let morts = []

function attaque(perso){
    var proba=Math.random()
    if (morts.length>0){
        for (var i=0;i<morts.length;i++){ 
            if (morts[i]==perso[0]) {
                return null 
            }
        }
    }
    if (proba<=perso[0][1].MortDegats){
        morts.push(perso[0])
        jeson.PV-=15
        console.log(perso[2]+ " inflige 15 points de dégâts mais meurt") 
        return null
    }
    if (proba>=perso[1].Degats){
        jeson.PV-=10
        console.log(perso[2]+ " a esquivé et a infligé 10 dmg") 
        return null
    }
    if (proba<perso[1].Degats){
        morts.push(perso[0])
        console.log("jeson a tué "+ perso[2]) 
        return null
    }
}

function mort(){
    if (jeson.PV<=0){
       if (morts.length==0) {
        console.log("les survivants ont gagné")
       }
       else {
        console.log("jeson est mort , les survivants ont gagné mais RIP à " +morts )
       }
    }
    if (morts.length==5) {
        console.log("jeson a gagné")  
    }
}


while (jeson.PV > 0 && morts.length < 5) {
    for (let i = 0; i < character.length; i++) {
        attaque(character[i])
        if (jeson.PV <= 0 || morts.length == 5) {
            mort()
            break
        }
    }
}
