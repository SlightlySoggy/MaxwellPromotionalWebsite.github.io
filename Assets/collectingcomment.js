(function() {
    var textFile = null,
        makeTextFile = function(text) {
            var data = new Blob([text], {
                type: 'text/plain'
            });

            if (textFile !== null) {
                window.URL.revokeObjectURL(textFile);
            }

            textFile = window.URL.createObjectURL(data);

            return textFile;
        };


    var create = document.getElementById('create');
    var fileContent = document.getElementById("fcontent");

    create.addEventListener('click', function() {
        const fileName = document.getElementById("fname").value;
        document.getElementById("downloadlink").setAttribute("download", fileName);
        var link = document.getElementById('downloadlink');
        link.href = makeTextFile(fileContent.value);
        link.style.display = 'block';
    }, false);
})();