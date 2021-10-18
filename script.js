const tables=[
    {id:1,
        name:"Table 1",
     bill:60,
     totalitems:4,
     drop:"drop1",
     itemselected:{items1: 0,items2:0,items3:0}
     },
     {id:2,
         name:"Table 2",
     bill:" Rs. 260",
     totalitems:8,
     drop:"drop2",
     itemselected:{items1:0,items2:0,items3:0}
     },
     {
        id:3,
        name:"Table 3",
     bill:" Rs. 360",
     totalitems:12,
     drop:"drop3",
     itemselected:{items1:0,items2:0,items3:0}
     }

];

const items=[
    {   id:1,
        name:"Chiken",
        price:50,
        drag:"drag1"
    },
    {   id:2,
        name:"Roti",
        price:100,
        drag:"drag2"
    },
    {   id:3,
        name:"Bread",
        price:150,
        drag:"drag3"
    }
];

function searchTablefun()
{
    
    let filter=document.getElementById('myTableInput').value.toUpperCase();
    let myTable=document.getElementById('myTable');
    let tr1=myTable.getElementsByTagName('tr');
    console.log(filter)
    console.log(tr1)

    // tr[0].style.display=""  //hurray its working

    console.log("kkkkkkkkkkkkkkkkkkkk")
    for(var i=0;i<tr1.length;i++)
    {console.log("ppppp")
        var tr1c=tr1[i]
        console.log(tr1c)
        var tr1cc=tr1[i].childNodes
        console.log(tr1cc)

        var tr1ccc=tr1cc[1]
        console.log(tr1ccc)

        var tr1cccc=tr1ccc.childNodes
        console.log(tr1cccc)

        var tr1ccccc=tr1cccc[1]
        console.log(tr1ccccc)

        var tr1cccccc=tr1ccccc.getElementsByTagName('h1')
        console.log(tr1cccccc)

        var tr1cccccc=tr1ccccc.childNodes
        console.log(tr1cccccc)

        var tr1ccc2=tr1cccccc[1]
        console.log(tr1ccc2)

        var tr1ccc3=tr1ccc2.childNodes
        console.log(tr1ccc3)

        var tr1ccc4=tr1ccc3[1].childNodes
        console.log(tr1ccc4)


        var tr1ccc5=tr1ccc4[1].childNodes
        console.log(tr1ccc5)

        var tr1ccc6=tr1ccc5[1].childNodes
        console.log(tr1ccc6)

        var tr1ccc7=tr1ccc6[0].innerHTML
        console.log(tr1ccc7)


        console.log("filter"+ filter)

        if(tr1ccc7.toUpperCase().indexOf(filter)>-1)
        {
          tr1[i].style.display=""
        }
        else{
           tr1[i].style.display="none"
        }


        console.log("qqqqqq")
    }
    console.log("lllllllllllllllll")
}
/*
const  searchTablefun=()=>{
    let filter=document.getElementById('myTableInput').value.toUpperCase();
    console.log(filter)
    let myTable=document.getElementById('myTable');
    let tr1=myTable.getElementsByTagName('tr');

    for(var i=0;i<tr1.length;i++)
    {
        console.log(tr1[i])
        var tr1cc=tr1[i].childNodes
        console.log(tr1cc)
        if(tr1cc[0]!='td')
        {
            continue;
        }

        

        var tr1ccc=tr1cc[0]
        console.log(tr1ccc)
        

        var tr1cccc=tr1ccc.childNodes
        console.log(tr1cccc)

        var tr1ccc1=tr1cccc[1]
        console.log(tr1ccc1.innerHTML)



        var tr1ccc2=tr1ccc1.childNodes
        console.log(tr1ccc2)

        var tr1ccc3=tr1ccc2[1]
        console.log(tr1ccc3)

        var tr1ccc4=tr1ccc3.childNodes
        console.log(tr1ccc4)

        var tr1ccc5=tr1ccc4[1]
        console.log(tr1ccc5)

        

        var tr1ccc6=tr1ccc5.childNodes
        console.log(tr1ccc6)

        var tr1ccc7=tr1ccc6[0]
        console.log(tr1ccc7)

        var tr1ccc8=tr1ccc7.childNodes
        console.log(tr1ccc8)

        var tr1ccc9=tr1ccc8[0]
        console.log(tr1ccc9)

        var tr1cc10=tr1ccc9.innerHTML
        console.log( tr1cc10)

        if(tr1cc10.toUpperCase().indexOf(filter)>-1)
        {
          tr1[i].style.display=""
        }
        else{
           tr1[i].style.display="none"
        }







        console.log("hello")
    }

}
*/

const searchfun=()=>{

    let filter=document.getElementById('myInput').value.toUpperCase();
    let myTable=document.getElementById('myItems');
    let tr1=myTable.getElementsByTagName('tr');

    // tr[0].style.display=""  //hurray its working

    console.log("kkkkkkkkkkkkkkkkkkkk")
    for(var i=0;i<tr1.length;i++)
    {console.log("ppppp")
        var tr1c=tr1[i]
        console.log(tr1c)
        var tr1cc=tr1[i].childNodes
        console.log(tr1cc)

        var tr1ccc=tr1cc[1]
        console.log(tr1ccc)

        var tr1cccc=tr1ccc.childNodes
        console.log(tr1cccc)

        var tr1ccccc=tr1cccc[1]
        console.log(tr1ccccc)

        var tr1cccccc=tr1ccccc.getElementsByTagName('h1')
        console.log(tr1cccccc)

        var tr1cccccc=tr1ccccc.childNodes
        console.log(tr1cccccc)

        var tr1ccc2=tr1cccccc[1]
        console.log(tr1ccc2)

        var tr1ccc3=tr1ccc2.childNodes
        console.log(tr1ccc3)

        var tr1ccc4=tr1ccc3[1].innerHTML
        console.log(tr1ccc4)

        console.log(filter)

        if(tr1ccc4.toUpperCase().indexOf(filter)>-1)
        {
          tr1[i].style.display=""
        }
        else{
           tr1[i].style.display="none"
        }


        console.log("qqqqqq")
    }
    console.log("lllllllllllllllll")

}

function deleteitem( q1,q2)
{
    
    alert("want to delete?");
    

    q1=q1+1
    sessionStorage.removeItem(q1+" "+q2);


    var price231=document.querySelectorAll("#tableid")
    var item231=document.querySelectorAll("#itemid")
    var deleteitem=document.querySelectorAll("modal-btn1")

    
   

    var rr;
    for(var i=0;i<deleteitem.length;i++)
    {
        var price23=price231[i]
        var  item23=item231[i]
        var deleteitem1=deleteitem[i]
        console.log("deleted item sksdjfndskjfdsf  "+deleteitem[i].value)
        // alert("want to delete?");

        deleteitem[i].addEventListener('click',function(){
            // modalBg1.classList.add('bg-active');
             console.log("uuuuuuuuuuuuu "+deleteitem[i])
             rr=deleteitem[i].value;
        });

       

    }
       
    location.reload();
        

    console.log("rrrrr  "+rr)
    

     

    

}
function generatebill(tableid)
{
    window.print()

   

}

function itemchanged(quantity,totalprice,itemprice,tableid,itemid)
{
    var quantity231=document.querySelectorAll("#itemquantity")
    var eachprice231=document.querySelectorAll("#eachprice")
    var set231=document.querySelectorAll("#totalprice")
    var price231=document.querySelectorAll("#tableid")
    var item231=document.querySelectorAll("#itemid")


    console.log(quantity231);
    console.log(eachprice231);
    console.log(set231);
    console.log(price231);
    console.log(item231);

    console.log(quantity231[0]);
    console.log(eachprice231[0]);
    console.log(set231[0]);
    console.log(price231[0]);
    console.log(item231[0]);

    for(var i=0;i<quantity231.length;i++)
    {

        quantity23=quantity231[i]
        eachprice23=eachprice231[i]
        set23=set231[i]
        price23=price231[i]
        item23=item231[i]
   


var quantity2=quantity23.value
var eachprice2=eachprice23.innerHTML
var quantity=Number(quantity2)
var eachprice=Number(eachprice2)
var totalprice=quantity*eachprice;

var set2=set23.innerHTML
var price2=price23.innerHTML
var item2=item23.innerHTML

// document.querySelector("#totalprice").innerHTML=totalprice.toString(10);
set23.innerHTML=totalprice.toString(10);

var price=Number(price2)
var item=Number(item2);

var rr=price+" "+item
console.log(rr)
sessionStorage.setItem(rr,quantity);
    }

   

    


}



var tableadd= document.getElementById('myTable')
for(var i=0;i<tables.length;i++)
{

var selecteditems=``;
            var sno=0;
            var totalbill=0;
            var totalitemscount=0;
    for(var str in Object.keys(sessionStorage))
    {
        var listkey=sessionStorage.key(str);
        var values=listkey.split(" ").map(Number);
        if(values[0]==(i+1))
        {sno=sno+1;
            var quantity=Number(sessionStorage.getItem(listkey));

            var totalprice=items[values[1]-1].price * quantity
        var row22=`
        
            <tr>
                <td><label >${sno}</label>&nbsp; &nbsp;</td>
                <td><label >${items[values[1]-1].name}</label>&nbsp; &nbsp;</td>
                <td><label id="eachprice" >${items[values[1]-1].price}</label>&nbsp; &nbsp;</td>
                <td><label id="totalprice" >${totalprice}</label>&nbsp;&nbsp;</td>
                <td><input type="number" name="name" value=${quantity} id="itemquantity" min="1" max="50">&nbsp; &nbsp;</td>
                <td><input  type="button" onclick="itemchanged(${quantity},${totalprice},${items[values[1]-1].price},${tables[i].id},${items[values[1]-1].id})" value="ok">&nbsp; &nbsp;</td>
                <td><label  id="deleteid" onclick="deleteitem(${i},${items[values[1]-1].id})" value="${sno}"  >Delete</label></td>
                <td><label  id="tableid">${tables[i].id}</label>&nbsp; &nbsp;</td>
                <td><label  id="itemid">${items[values[1]-1].id}</label>&nbsp; &nbsp;</td>
            </tr>
        
          `

          selecteditems=selecteditems+row22
          totalbill=totalbill+totalprice;
          totalitemscount=totalitemscount+quantity;
        }
    }


 var row2=`<tr><td>
 <div class="tables" ondrop="${tables[i].drop}(event)" ondragover="allowDrop(event)" >
 <div class="title">
 <div id="tname"><button class="modal-btn"><h1>${tables[i].name}</h1></button></div>

 </div>
 <div class="des">
    <p id="tbill"> Rs.${totalbill}</p>
    <p id="ttitems">Total items: ${totalitemscount}</p>    
 </div>
</div>

<div class="modal-bg">
 <div class="modal">
 <table >
     <tbody>
    <tr>
     <td colspan="7"><h2 class="itemselectedheading">${tables[i].name}| Order Details</h2></td>
     </tr>
     <tr>
     <td colspan="7"> </td>
     <tr>
     
     <tr>
             <th><label >Id</label>&nbsp; &nbsp;</th>
             <th><label >ItemName</label>&nbsp; &nbsp;</th>
             <th><label >Price</label>&nbsp; &nbsp;</th>
             <th><label>TotalPrice</label>&nbsp;&nbsp;</th>
             <th><label>Quantiy</label>&nbsp; &nbsp;</th>
             <th><label>Submit</label>&nbsp; &nbsp;</th>
             <th><label >Delete<i class="fas fa-trash-alt" ></i></label></th>
    </tr>
    
            
             `;
    
            
var row223=`</tbody>
</table> 
 <label>  <br>Total bill ${totalbill}</label>
 <button onclick="generatebill(${tables[i].id})">Generate Bill</button>
<span class="modal-close">x</span>
<div>
<div>

</td>
</tr>`


 tableadd.innerHTML += row2+selecteditems+row223; 


}

var itemtable = document.getElementById('myItems');
for(var i=0;i<items.length;i++)
{
    var row2= `<tr>
    <td>
     <div class="items" class="card" draggable="true" ondragstart="${items[i].drag}(event)">

    <div class="title">
    <h1>${items[i].name}</h1>
    </div>
 
    <div class="des">
    <p>${items[i].price}</p>
    </div>
 </div>
 </td>
 </tr>
 `     
    itemtable.innerHTML += row2;    
}




function allowDrop(ev) {
ev.preventDefault();
}

function drop1(ev) {
    console.log("inside dropped table 1");
    var data = ev.dataTransfer.getData("text");
    var rr=tables[0].id+" "+data;
    if(sessionStorage.getItem(rr) == null)
    {
        sessionStorage.setItem(rr,1);
        console.log(sessionStorage)
    }
    else{
        var value3=Number(sessionStorage.getItem(rr))
        value3=value3+1;
        sessionStorage.setItem(rr,value3);
        console.log(sessionStorage.getItem(rr))

        console.log("///////")
        for(var str in Object.keys(sessionStorage))
         {   console.log("\\\\\\\\")
            var listkey=sessionStorage.key(str);
            console.log(listkey.split(" ").map(Number))
            var values=listkey.split(" ").map(Number);
            console.log(values[0]+"  "+values[1])      
        }
    }
}
function drop2(ev) {
    

    console.log("inside dropped table 2");
    var data = ev.dataTransfer.getData("text");
   
    
    var rr=tables[1].id+" "+data;

    if(sessionStorage.getItem(rr) == null)
    {
        sessionStorage.setItem(rr,1);
        console.log(sessionStorage)

    }
    else{

        var value3=Number(sessionStorage.getItem(rr))
        value3=value3+1;
        sessionStorage.setItem(rr,value3);
        console.log(sessionStorage.getItem(rr))

       
    }


}

function drop3(ev) {
    console.log("inside dropped table 3");
    var data = ev.dataTransfer.getData("text");
    


    var rr=tables[2].id+" "+data;

    if(sessionStorage.getItem(rr) == null)
    {
        sessionStorage.setItem(rr,1);
        console.log(sessionStorage)

    }
    else{

        var value3=Number(sessionStorage.getItem(rr))
        value3=value3+1;
        sessionStorage.setItem(rr,value3);
        console.log(sessionStorage.getItem(rr));
    }
}

function drag1(ev){
    console.log("inside draggable1")
//    var str=items[0].name;
var str=items[0].id;
    ev.dataTransfer.setData("text", str);
}


function drag2(ev){
    console.log("inside draggable2")
    // var str=items[1].name;
    var str=items[1].id;
    ev.dataTransfer.setData("text", str);
}
function drag3(ev){
    console.log("inside draggable3")
    // var str=items[2].name;
    var str=items[2].id;
    ev.dataTransfer.setData("text", str);
    
}




var modalBtn=document.querySelectorAll('.modal-btn'); //get element by class name
var modalBg=document.querySelectorAll('.modal-bg');
var modalClose=document.querySelectorAll('.modal-close');

console.log("modal number")
console.log(modalBtn)


for(var i=0;i<modalBtn.length;i++)
{
    let modalBtn1 = modalBtn[i];
    let modalBg1=modalBg[i];
    let modalClose1=modalClose[i];


modalBtn1.addEventListener('click',function(){
    modalBg1.classList.add('bg-active');
   
});

modalClose1.addEventListener('click',function(){
    modalBg1.classList.remove('bg-active');
  
});

}








