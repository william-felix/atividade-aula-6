var outputParagraph = document.getElementById("output-paragraph");
var months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var out = "";

for (var i = 0; i < months.length; i += 1) {
    	out += months[i] + "<br/>";
}

outputParagraph.innerHTML = out;