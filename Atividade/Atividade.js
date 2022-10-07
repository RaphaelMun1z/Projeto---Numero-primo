function ativar()
{	
	var divisores = 0;
	var elemento = eval(prompt("Digite o elemento: "));
	var UltPrimo = 0;
	var QuantiPrimo = 0;

while(QuantiPrimo < elemento)
{
	for(numero = 1; numero <= 999; numero++) 
	{
		for(numeroB = 1; numeroB <= numero; numeroB++) 
		{	

			if(numero % numeroB == 0)
			{
				divisores++;
			}
		}
		if(divisores == 2)
		{
			UltPrimo = numero;
			QuantiPrimo++;
			if(QuantiPrimo == elemento)
			{
				break;
			}
		}
		divisores = 0; 
	}
}
document.getElementById("E").innerHTML = elemento;
document.getElementById("UP").innerHTML = UltPrimo;
}
