array_name_of_student= [];


function sorting()
{
array_name_of_student.sort();
document.getElementById("display_names").innerHTML=array_name_of_student;
}

function add(){
    var name_of_the_student = document.getElementById("name").value;
    array_name_of_student.push(name_of_the_student);
    document.getElementById("name").value= '';
    document.getElementById("display_names").innerHTML=array_name_of_student;
    document.getElementById("sorting_button").style.display="inline-block";
}