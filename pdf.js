// Getting Elements from DOM
const downloadButton = document.getElementById('download');

//Adding Event Listener
downloadButton.addEventListener('click',downloadFunc);

// Function to download the element
function downloadFunc() {
    var element = document.getElementById('invoice');
    var opt = {
        margin:       1,
        filename:     'File.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2},
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait'
                      }
               };

// New Promise-based usage:
html2pdf().set(opt).from(element).save();

}


