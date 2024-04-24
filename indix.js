const genrateColor=() =>{
    const randomNumber= Math.floor(Math.random() * 16777215). toString(16);
    const colorCode = "#" + randomNumber;
    document.body.style.backgroundColor=colorCode
    document.getElementById("color-content").innerText=colorCode;

}
document.getElementById("btn").addEventListener('click',genrateColor)

genrateColor();