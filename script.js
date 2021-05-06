
$.ajax({
    type: "GET",
    url: "https://api.kawalcorona.com/indonesia/provinsi",
    success: function (response) {
        $.each(response, function (i, item) { 
            $('#tbody').append('<tr><th scope="row">'+ item.attributes.Kode_Provi +'</th><td>'+ item.attributes.Provinsi +'</td><td>'+ item.attributes.Kasus_Posi +'</td><td>'+ item.attributes.Kasus_Semb +'</td><td>'+ item.attributes.Kasus_Meni +'</td></tr>');
            console.log(item.attributes)
        });
    },
    error: function(errors) {
        console.log(errors)
    }
});