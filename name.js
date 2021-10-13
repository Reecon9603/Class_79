nameofthestudentarray=[];
function submit()
{
    var name1=document.getElementById("name_of_the_student_1").value;
    var name2=document.getElementById("name_of_the_student_2").value;
    var name3=document.getElementById("name_of_the_student_3").value;
    var name4=document.getElementById("name_of_the_student_4").value;

    nameofthestudentarray.push(name1);
    nameofthestudentarray.push(name2);
    nameofthestudentarray.push(name3);
    nameofthestudentarray.push(name4);

    console.log(nameofthestudentarray);

    document.getElementById("display_name").innerHTML=nameofthestudentarray;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting()
{
    nameofthestudentarray.sort();
    console.log(nameofthestudentarray);
    document.getElementById("display_name").innerHTML=nameofthestudentarray;
}