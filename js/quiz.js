function check(){
    let q1=document.myform.q1.value;
    let q2=document.myform.q2.value;
    let q3=document.myform.q3.value;
    let count=0;
    let result;

    if(q1 == "a"){
        count++;
    }
    if(q2 == "b"){
        count++;
    }
    if(q3 == "b"){
        count++;
    }
    if (count == 3){
        result = document.getElementById('result');
        result.innerHTML += ' <p style="color:green">You gave all the right responses!</p>';
        // document.write("You gave all the right responses!");
    } else {
        result = document.getElementById('result');
        result.innerHTML += ' <p style="color:red">You have some mistakes!</p>';
        // document.write("You have some mistakes!");
    }
    
}