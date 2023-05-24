// let a=document.getElementById("input");
// const form=document.getElementById("form");
// const output=document.getElementById("output")
// form.addEventListener("",()=>{
//     output.Objext.value=a.value
// })
const x=document.getElementById("input");
function fun()
{
    // x.value=x.value+"World";
    let a=x.value;
    words=a.split(" ")
    // console.log(words[0]);
    // console.log(words[1]);
    let b="";
    for(let i=0;i<words.length;i++)
    {
        for(let j=0;j<words[i].length;j++)
        {
            if((words[i][j]>='A'&&words[i][j]<='Z')||(words[i][j]>='a'&&words[i][j]<='z'))
            {
                b+=words[i][j];
            }
        }
    }
    x.value=b;
}
// const a=document.getElementsByName("text");
// console.log(typeof(a.value));

