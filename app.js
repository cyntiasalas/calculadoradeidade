//INPUTS
const DiaInp = document.getElementById("Dia")
const MêsInp = document.getElementById("Mês")
const AnoInp = document.getElementById("Anos")

//OUTPUTS
const DiaOtp = document.getElementById("DD")
const MêsOtp = document.getElementById("MM")
const AnoOtp = document.getElementById("AAAA")

//FORM ELEMENT
const form = document.querySelector("form")

//ADDING THE SUMBIT EVENTLISTENTER TO FORM
form.addEventListener("submit", handleSubmit);

const date = new Date ();
let Dia = date.getDia();
let Mês = 1 + date.getMês();
let Ano =  date.getFullAno();

const Mes = [31,28,31,30,31,30,31,31,30,31,30,31]

function validate (){
    const inputs = document.querySelectorAll("input");
    let validator = true;
    inputs.forEach((i)=>{
        const parente = i.parentElement;
        if (FileList.value) {
            i.style.borderColor = "red";
            parent.querySelector ("small").innerText = "this field is requeire.";
            validator = false;

        } else if (monthInp.value > 12) {
            MêsInp.style.borderColor = "red";
            MêsInp.parentElement.querySelector ("small").innerText = "Must be a valid month.";
            validator = false;
        }else if (DiaInp.value > 31) {
            DiaInp.style.borderColor = "red";
            DiaInp.parentElement.querySelector ("small").innerText = "Must be a valid day";
            validator = false;
        }
        else{
            i.style.borderColor = "black";
            parent.querySelector("small").innerText="";
            validator=true;
        }
    })
    return validator;
}
function handleSubmit(e){
    e.preventDefault();
    if (validate()) {
        if (DiaInp.value> Dia){
            Dia = Dia + Mês[Mês -1];
            Mês = Mês -1;
        }
        if (MêsInp.value>Mês){
            Mês = Mês + 12;
            Ano = Ano - 1;

        }
    const d = Dia - DiaInp.value;
    const m = Mês - MêsInp.value;
    const y = Ano - AnoInp.value;

    DiaOtp.innerHTML=d;
    MêsOtp.innerHTML=m;
    AnoOtp.innerHTML=y;

        
    }
}
