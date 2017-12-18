let longValue="50" , Timer, flagAux , speed=1000;

function start() {
    Timer = setInterval(nextToChange, speed);            
}

function stop() {
    clearTimeout(Timer);                      
}
function nextToChange(){
	startMatrix();
	for(let i=0;i<longValue;i++)
		for(let j=0;j<longValue;j++)
		{
			cellStatus(i,j);					
		}
	changeStatus();
}

function startMatrix()
{
	flagAux=new Array(longValue);
	for(a=0;a<longValue;a++)
		flagAux[a]=new Array(longValue);
}	

function fillValues(){	
	for(let i=0;i<longValue;i++)
		for(let j=0;j<longValue;j++)
		{
			document.getElementById(i+","+j).className = Math.random() > 0.7 ? 'alive' : 'dead';
		}
}

function cellStatus(i,j){
	let result=cellEnviroment(i,j);
	if(document.getElementById(i+","+j).className=="dead" && result==3)
		flagAux[i][j]="alive";
	else if(document.getElementById(i+","+j).className=="alive" && (result==2 || result==3))
		flagAux[i][j]="alive";
	else
		flagAux[i][j]="dead";	
}

function dTableValues(){
    document.getElementById("tablacont").innerHTML="";
for(let i=0;i<longValue;i++){
    document.getElementById("tablacont").innerHTML+="<tr id="+i+"></tr>";
    for(let j=0;j<longValue;j++){
        document.getElementById(i).innerHTML+="<td class='dead' id="+i+","+j+"></td> ";
    }
      
}
}

