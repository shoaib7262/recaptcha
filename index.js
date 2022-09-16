const myFunc = ()=>{
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers   = "0123456789";
    const sumofNum = lowerCase + upperCase + numbers;
    let captcha = "";
    for(let i = 0; i < 6; i++){
        const recap = Math.floor(Math.random()*sumofNum.length);
        captcha += sumofNum[recap];
    }
    document.getElementById("input").value = captcha;

}

const newFunc = ()=>{
   const passwordDoc =  document.getElementById("input").value
    const recheckPass = document.getElementById('input-two').value
    if (passwordDoc == recheckPass){
        document.getElementById("error").innerHTML  ="congratulation";
    }
    else{
        document.getElementById("error").innerHTML  ="tary bas ka ni baap ko bhaj";
    }
}
   