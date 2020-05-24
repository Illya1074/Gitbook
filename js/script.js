
// $(document).ready(function(){
//     $("#flip").click(function(){
//       $("#panel").slideToggle("slow");
//     });
//   });






let indexes = [100];

function Index_Generate(){
    indexes.push(indexes[indexes.length-1]+1);
    return indexes[indexes.length-1];
}


function Panel_Generate(name){
    const index = Index_Generate();
    // console.log(Index_Generate());
    let link = document.createElement("A");
    let Li_1 = document.createElement("LI");
    let Li_2 = document.createElement("LI");
    let I_1 = document.createElement("I");
    let I_2 = document.createElement("I");
    let I_3 = document.createElement("I");

    let link_class_atrr = document.createAttribute("class");
    let link_onclick_atrr = document.createAttribute("onclick");

    link_class_atrr.value = "flip-"+index;
    link_onclick_atrr.value = "myTree('panel-"+index+"')";

    link.attributes.setNamedItem(link_class_atrr);
    link.attributes.setNamedItem(link_onclick_atrr);

    let I_1_class = document.createAttribute("class");
    I_1_class.value = "fas fa-plus";
    I_1.attributes.setNamedItem(I_1_class);
    let I_2_class = document.createAttribute("class");
    I_2_class.value = "fas fa-trash-alt";
    I_2.attributes.setNamedItem(I_2_class);
    let I_3_class = document.createAttribute("class");
    I_3_class.value = "fas fa-edit";
    I_3.attributes.setNamedItem(I_3_class);

    let I_1_onclick = document.createAttribute("onclick");
    I_1_onclick.value = "Panel_Generate('panel-"+index+"')";
    I_1.attributes.setNamedItem(I_1_onclick);
    let I_2_onclick = document.createAttribute("onclick");
    I_2_onclick.value = "Panel_Delete('flip-"+index+"')";
    I_2.attributes.setNamedItem(I_2_onclick);
    let I_3_onclick = document.createAttribute("onclick");
    I_3_onclick.value = "myInput_create('flip-"+index+"')";
    I_3.attributes.setNamedItem(I_3_onclick);

    link.innerHTML = "<span>What is a GitBook</span>";
    link.appendChild(I_1);
    link.appendChild(I_2);
    link.appendChild(I_3);

    let panel = document.getElementsByClassName(name)[0];

    panel.appendChild(Li_1);
    Li_1.appendChild(link);

    let li_2_class_atrr = document.createAttribute("class");
    let li_2_id_atrr = document.createAttribute("id");
    let li_2_style_atrr = document.createAttribute("style");


    li_2_class_atrr.value = "panel-"+index;
    li_2_id_atrr.value = "panel";
    li_2_style_atrr.value = "display: block;"

    Li_2.attributes.setNamedItem(li_2_class_atrr);
    Li_2.attributes.setNamedItem(li_2_id_atrr);
    Li_2.attributes.setNamedItem(li_2_style_atrr);


    Li_1.after(Li_2);
   
   
    // getElementsByClassName(name)[0].appendChild(link);

    // document.getElementsByClassName(name)[0].appendChild(link);
    // link.after(space);
    panel.style.display = "none ";
}

function Panel_Delete(name){
    // console.log("Pan_Gen")
    let element = document.getElementsByClassName(name)[0];
    element.remove();
}

function myInput_Value(index){
    const inputVal = document.getElementsByClassName("myinput-"+index)[0].value;
    const input = document.getElementsByClassName("myinput-"+index)[0]
    const flip = document.getElementsByClassName("flip-"+index)[0];
    const icon = document.getElementsByClassName("fas fa-check fa-check-"+index)[0];
    const str = flip.innerHTML;
    console.log(flip);
    console.log(str);
    console.log(flip.textContent);
    console.log(inputVal);
    let replace_str = str.replace(flip.textContent,inputVal);
    console.log(replace_str);
    //   
    flip.innerHTML = replace_str; 
    flip.style.display = "block";
    // flip.innerHTML.replace(flip.textContent, inputVal);
    input.remove();
    icon.remove();

    
    

}

function myInput_create(name){
    const index = name.split("-")[1];
    console.log(index);
    
    let old_element = document.getElementsByClassName("flip-"+index)[0];
    let old_element_2 = document.getElementsByClassName("panel-"+index)[0];
    let new_element = document.createElement("INPUT");

    // console.log(old_element_2);

    old_element_2.style.display = "none";
    
    let class_atrr = document.createAttribute("class");
    let id_atrr = document.createAttribute("id");

    class_atrr.value = "myinput-"+index;
    id_atrr.value = "my_input";
    
    new_element.attributes.setNamedItem(class_atrr);
    new_element.attributes.setNamedItem(id_atrr);
    

    let font = document.createElement("I");
    let font_class_atrr = document.createAttribute("class");
    let font_onclick_atrr = document.createAttribute("onclick");

    font_class_atrr.value = "fas fa-check fa-check-"+index;
    font_onclick_atrr.value = "myInput_Value('"+ index +"')";

    font.attributes.setNamedItem(font_class_atrr);
    font.attributes.setNamedItem(font_onclick_atrr);
    
    old_element.after(new_element)

    new_element.after(font);
    
    old_element.style.display = "none";
}

function myTree(index){
    var panel = document.getElementsByClassName(index)[0];
    
    // console.log(panel[index].attributes[1].value);
    if(panel.attributes[2].value === "display: none;"){
        panel.style.display = "block";
    } else {
        panel.style.display = "none ";
    }    
}












// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     sidebar.classList.add("sidebar_static");
//   } else {
//     sidebar.classList.remove("sidebar_fixed");
//   }
// }



function myAdoptive(){
    
    
    
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const sidebar = document.getElementById("sidebar");
    const tips = document.getElementById("tips");
    
    if(viewport_width>1450){
        sidebar.style.paddingLeft = ((viewport_width-1450)/2).toString()+"px";
        tips.style.right = ((viewport_width-1450)/2).toString()+"px"; 
    }
}



window.addEventListener('resize', function(event){
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const sidebar = document.getElementById("sidebar");
    const tips = document.getElementById("tips");
    if(viewport_width>1450){
        sidebar.style.paddingLeft = ((viewport_width-1450)/2).toString()+"px";
        tips.style.right = ((viewport_width-1450)/2).toString()+"px"; 
    }
});


window.onscroll = function() {myFunction()};


function myFunction() {
    // var testDiv = document.getElementById("test");
    // document.getElementById("demo").innerHTML = testDiv.offsetTop;
    // document.getElementById("demo").innerHTML = window.pageYOffset;
    const sidebar = document.getElementById("sidebar");
    const tips = document.getElementById("tips");
    const create_an_account = document.getElementById("create an account");
    const tip_create_an_account = document.getElementById("tip create an account");
    const create_a_team = document.getElementById("create a team");
    const tip_create_a_team = document.getElementById("tip create a team");
    const structure_your_docs = document.getElementById("structure your docs")
    const tip_structure_your_docs = document.getElementById("tip structure your docs");
    const collaboration = document.getElementById("collaboration");
    const tip_collaboration = document.getElementById("tip collaboration");
    const rich = document.getElementById("rich");
    const tip_rich = document.getElementById("tip_rich");
    

    
    if (window.pageYOffset <= 80) {
        sidebar.style.maxHeight = "calc(100%-"+(80-window.pageYOffset).toString()+"px)";
        sidebar.style.top = (80-window.pageYOffset).toString()+"px";
        tips.style.top = (100-window.pageYOffset).toString()+"px";
       
    } else {
        sidebar.style.top = "0px";
        tips.style.top = "20px";
        sidebar.style.maxHeight = "100%";
    }

    if(create_an_account.offsetTop <= window.pageYOffset & create_a_team.offsetTop >= window.pageYOffset){
        tip_create_an_account.style.color = "rgb(56, 132, 255)";
    } else {
        tip_create_an_account.style.color = "rgb(116, 129, 141)";
    }

    if(create_a_team.offsetTop <= window.pageYOffset & structure_your_docs.offsetTop >= window.pageYOffset){
        tip_create_a_team.style.color = "rgb(56, 132, 255)";
    } else {
        tip_create_a_team.style.color = "rgb(116, 129, 141)";
    }

    if(structure_your_docs.offsetTop <= window.pageYOffset & collaboration.offsetTop >= window.pageYOffset){
        tip_structure_your_docs.style.color = "rgb(56, 132, 255)";
    } else {
        tip_structure_your_docs.style.color = "rgb(116, 129, 141)";
    }

    if(collaboration.offsetTop <= window.pageYOffset & rich.offsetTop >= window.pageYOffset){
        tip_collaboration.style.color = "rgb(56, 132, 255)";
    } else {
        tip_collaboration.style.color = "rgb(116, 129, 141)";
    }

    if(rich.offsetTop <= window.pageYOffset){
        tip_rich.style.color = "rgb(56, 132, 255)";
    } else {
        tip_rich.style.color = "rgb(116, 129, 141)";
    }

}

myFunction();

