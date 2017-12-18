let longValue="50" , Timer, flagAux , speed=1000;

function start() {
    Timer = setInterval(nextToChange, speed);            
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
