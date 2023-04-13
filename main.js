let Form = document.querySelector("#Form");
let range = document.querySelector("#range");
let valRange = document.querySelector("#valRango")
let color = document.querySelector("[name = 'color']");
let marca = document.querySelectorAll("[name = 'marca']:checked");
let borrador = document.querySelectorAll("[name = 'borrador']");
let material = document.querySelectorAll("[name ='material']");


range.addEventListener("input",(e)=>{
    e.preventDefault();
    const valorRango = e.target.value;
    valRange.textContent=`${valorRango} Cm`
});

window.addEventListener("DOMContentLoaded",(e)=>{;

    valRange.textContent=`${range.value} Cm`
})

class lapiz {
    #marca
    constructor({
        color = "#F7ABC4",
        range = "19",
        marca = "Mongol",
        borrador = "true",
        material = "madera",
    }){
        this.color = color;
        this.range = range;
        this.borrador = borrador;
        this.material = material;
        this.#marca = marca;
    }
    getRange(){return this.range}
    getMarca(){return this.#marca};
    setMarca(NewMarca){this.#marca = NewMarca}
};


Form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = new FormData(Form);
    let dataObj = Object.fromEntries(data.entries());
    const NewLapiz = new lapiz(dataObj);
    const table = document.querySelector("#tBody").insertAdjacentHTML("beforeend",
    `<tr>
        <td>${NewLapiz.color}</td>
        <td>${range.value}</td>
        <td>${NewLapiz.getMarca()}</td>
        <td>${NewLapiz.borrador}</td>
        <td>${NewLapiz.material}</td>
    </tr>`
    )


    console.log(dataObj);
})

