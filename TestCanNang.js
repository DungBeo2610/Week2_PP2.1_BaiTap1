function kiemtra() {
    let cannang = +document.getElementById("weigh").value;
    let chieucao =+document.getElementById("height").value;
    let BMI=cannang/(chieucao*chieucao);
    if (BMI<18.5){
    } else if (BMI<25) {
        document.getElementById("Result").innerHTML="Bình Thường";
    } else if (BMI<30) {
        document.getElementById("Result").innerHTML="Hơi Béo";
    } else {
        document.getElementById("Result").innerHTML="Béo vl";
    }
}