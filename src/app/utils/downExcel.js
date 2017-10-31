import htmlTxt from './excel.tpl.html';

function downExcel(fileName) {
	console.log('htmltext---', typeof htmlTxt);
    const blob = new Blob([htmlTxt], {type: 'text/html'});
    const url = URL.createObjectURL(blob);
    const Aele = document.createElement('a');
    Aele.download = fileName;
    Aele.href = url;
    Aele.click();
}

export default downExcel;