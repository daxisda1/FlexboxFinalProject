$(function() {
    $('.social a').on('mouseover', function() {
        $(this).css('font-size', '30px');
    });
    $('.social a').on('mouseout', function() {
        $(this).css('font-size', '24px');
    });

});
$(document).ready (function() {
    $ ("p").click(function() {
        $(this).addClass("blue");
    });
});
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {

    if( xhr.readyState == 4 && xhr.status == 200) {

        var output = [];
        var repos = JSON.parse(xhr.responseText);

        repos.forEach(repo => {
            output.push(`
            <div class="col-6">
                <div class="card bg-info mb-4">
                    <div class="card-body">
                        <h5 class="card-title">${repo.name}</h5>
                        <p class="card-text">${repo.description}</p>
                        <a href="${repo.html_url}" class="btn btn-primary" target="_blank">See repo</a>
                    </div>
                </div>
            </div>
            `)
        });
        document.getElementById('repos').innerHTML = output.join('');
}
}

xhr.open("GET", "https://api.github.com/users/daxisda1/repos");
xhr.send();