const todo=[];
 renderlist();
function renderlist()
{

    let htmllist='';
for(let i=0;i<todo.length;i++)
{
    const to=todo[i];
    const name=to.name;
    const duedate=to.duedate;
    const html=`
    <div> ${name}</div>
    <div> ${duedate}</div>
    <button onclick="todo.splice(${i},1);
    renderlist();
    " class="delete">
    Delete</button>
    </p>`;
    htmllist+=html;
}

document.querySelector('.thelist').innerHTML=htmllist;


}
 


function addtodo()
{
    const inputelement= document.querySelector('.nameinput');
    const inputdate=document.querySelector('.indate');
    const name=inputelement.value;
    const duedate=inputdate.value;
    todo.push({name:name,duedate:duedate});
    console.log(todo);
    inputelement.value='';
    inputdate.value='';
    renderlist();

}
