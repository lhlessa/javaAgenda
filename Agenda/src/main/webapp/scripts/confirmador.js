/**
 * Confirmação de exclusão de contato
 * @author Luiz Henrique Lessa
 * @param idcon
 */

 function confirmar(idcon){
	 
	 let resposta = confirm("Confirma a exclus\u00e3o deste contato ?")
	 if(resposta === true){
		 
		 //alert(idcon)
		 window.location.href = "delete?idcon=" + idcon
	 }
	 
	 
 }