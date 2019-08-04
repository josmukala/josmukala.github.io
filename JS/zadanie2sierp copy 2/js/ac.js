console.log(document.getElementById("formularz").lastElementChild)
document.getElementById("formularz").lastElementChild.addEventListener('click', function(e){
    e.preventDefault();
    let fname =  document.getElementsByTagName("input")[0].value
    let lname = document.getElementsByTagName("input")[1].value
    console.log("jego imie to:" + fname + "a nazwisko to:" + lname)
})