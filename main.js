function box (type,color,size){
var myBox={
    color:"blue",
    size:"8x4",
    label:type
};
console.log("My box is"+myBox.color+"it is"+myBox.size+"and has a label of"+myBox.label);
}
function instructions (){
var myInstruct={
theType:"game",
pages:6,
pictures:"yes"
};
console.log("My instructions are for a"+myInstruct.theType+"it has"+myInstruct.pages+"pages and does it have pictures"+myInstruct.pictures);

}
function run(){
box("Family","yellow","8x4");
instructions();
}
run(){
    box("Family","yello","8x4");
    instructions();
}
run(){
    box("Family","yellow","8x4");
    instructions();
}
run(){
box("yello","8x4");
instructions();
}
run();
