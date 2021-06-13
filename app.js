

let nombre = "";
let model = "";
let doors = "";
let color = "";
let brand = "";





document.addEventListener("click", function (e) {
    e.preventDefault();
    nombre = document.getElementsByClassName("nombre")[0].value;
    model = document.getElementsByClassName("model")[0].value;
    doors = document.getElementsByClassName("Doors")[0].value;
    color = document.getElementsByClassName("Color")[0].value;
    brand = document.getElementsByClassName("Brand")[0].value;
    borrar()


}, true)



let IngresoElemento = () => {


    let nombre1 = document.createElement("div");
    nombre1.className = "contaninerinputs";

    let nombre2 = document.createElement("p")
    let textoNombre = document.createTextNode(nombre)
    nombre2.append(textoNombre);

    let model2 = document.createElement("p")
    let textomodel = document.createTextNode(model)
    model2.append(textomodel);

    let Doors2 = document.createElement("p")
    let textoDoors = document.createTextNode(doors)
    Doors2.append(textoDoors);

    let Color2 = document.createElement("p")
    let textoColor = document.createTextNode(color)
    Color2.append(textoColor);

    let Brand2 = document.createElement("p")
    let textoBrand = document.createTextNode(brand)
    Brand2.append(textoBrand);

    let button1 = document.createElement("button");
    let textobutton = document.createTextNode("x")
    button1.className = "btn-grad"
    button1.append(textobutton);

    nombre1.append(nombre2);
    nombre1.append(model2);
    nombre1.append(Doors2);
    nombre1.append(Color2);
    nombre1.append(Brand2);
    nombre1.append(button1);


    document.getElementsByTagName("div")[1].append(nombre1)
    document.getElementById("miForm").reset();


}




let borrar = () => {
    let botones = document.getElementsByTagName("button");
    for (let i = 1; i < botones.length; i++) {

        botones[i].addEventListener("click", function () {
            botones[i].parentElement.remove()

        })
    }

}

















    // let model1 = document.createElement("div");
    // model1.className = "contaninerinputs";
    // let model2 = document.createElement("p")
    // let textomodel = document.createTextNode(model)
    // model2.append(textomodel);
    // model1.append(model2);
    // document.getElementsByTagName("div")[1].append(model1)

    // let Doors1 = document.createElement("div");
    // Doors1.className = "contaninerinputs";
    // let Doors2 = document.createElement("p")
    // let textoDoors = document.createTextNode(doors)
    // Doors2.append(textoDoors);
    // Doors1.append(Doors2);
    // document.getElementsByTagName("div")[1].append(Doors1)

    // let Color1 = document.createElement("div");
    // Color1.className = "contaninerinputs";
    // let Color2 = document.createElement("p")
    // let textoColor = document.createTextNode(color)
    // Color2.append(textoColor);
    // Color1.append(Color2);
    // document.getElementsByTagName("div")[1].append(Color1)

    // let Brand1 = document.createElement("div");
    // Brand1.className = "contaninerinputs";
    // let Brand2 = document.createElement("p")
    // let textoBrand = document.createTextNode(brand)
    // Brand2.append(textoBrand);
    // Brand1.append(Brand2);
    // document.getElementsByTagName("div")[1].append(Brand1)


    // let button1 = document.createElement("button");
    // let textobutton = document.createTextNode("x")
    // button1.append(textobutton);

    // document.getElementsByTagName("div")[1].append(button1)






