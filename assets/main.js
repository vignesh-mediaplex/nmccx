var form_flag = false;
var INR1 =0,INR1027 =0,INR52 =0,INR2 =0,ETH1 =0,BTC52 =0,BTC1027 =0,BTC2 =0,ETH52 =0,ETH2=0,USD1=0,USD52=0,USD1027=0,USD2=0;
$(function(){

    var ids = [1,1027,52,2,1,52,2,1027,52,2,1,2,1027,52];
    var currency = ['INR', 'INR', 'INR', 'INR', 'ETH', 'BTC', 'BTC', 'BTC', 'ETH', 'ETH', 'USD', 'USD', 'USD', 'USD'];
    var result = [];
    var i = 0;
    var j=0;


    // setInterval(function (){     
    // }, 3000);
    ids.forEach(function (e) {
        $.ajax({
            method: "GET",
            contentype: "application/json",
            url: `https://api.coinmarketcap.com/v2/ticker/${e}/?convert=${currency[i]}`,
            success: function (data) {
                result[j] = data.data;
                j++;
            },
            error: function () {
                console.log("Error");
            }
        });
        i++;
    });


    setTimeout(xyz, 800);

    function addCommas(nStr){
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
         x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
       }

    //    console.log(addCommas(INR1));
    

    function xyz(){
        // console.log(result);

        result.forEach(function (element) {
            if (element.id == 1 && element.quotes.hasOwnProperty('INR')){
                INR1 = (element.quotes.INR.price).toFixed(2);
                $('.INR1').text(addCommas(INR1));
            }
            if (element.id == 1027 && element.quotes.hasOwnProperty('INR')) {
                INR1027 = (element.quotes.INR.price).toFixed(2);
                $('.INR1027').text(addCommas(INR1027));
            }
            if (element.id == 52 && element.quotes.hasOwnProperty('INR')) {
                INR52 = (element.quotes.INR.price).toFixed(2);
                $('.INR52').text(addCommas(INR52));
            }
            if (element.id == 2 && element.quotes.hasOwnProperty('INR')) {
                INR2 = (element.quotes.INR.price).toFixed(2);
                $('.INR2').text(addCommas(INR2));
            }

            if (element.id == 1 && element.quotes.hasOwnProperty('ETH')) {
                ETH1 = (element.quotes.ETH.price).toFixed(4);
                $('.ETH1').text(addCommas(ETH1));
            }
            if (element.id == 52 && element.quotes.hasOwnProperty('BTC')) {
                BTC52 = (element.quotes.BTC.price).toFixed(4);
                $('.BTC52').text(addCommas(BTC52));
            }
            if (element.id == 2 && element.quotes.hasOwnProperty('BTC')) {
                BTC2 = (element.quotes.BTC.price).toFixed(4);
                $('.BTC2').text(addCommas(BTC2));
            }
            if (element.id == 1027 && element.quotes.hasOwnProperty('BTC')) {
                BTC1027 = (element.quotes.BTC.price).toFixed(4);
                $('.BTC1027').text(addCommas(BTC1027));
            }
            if (element.id == 2 && element.quotes.hasOwnProperty('ETH')) {
                ETH2 = (element.quotes.ETH.price).toFixed(2);
                $('.ETH2').text(addCommas(ETH2));
            }
            if (element.id == 52 && element.quotes.hasOwnProperty('ETH')) {
                ETH52 = (element.quotes.ETH.price).toFixed(2);
                $('.ETH52').text(addCommas(ETH52));
            }

            if (element.id == 1 && element.quotes.hasOwnProperty('USD')) {
                USD1 = (element.quotes.USD.price).toFixed(2);
                $('.USD1').text(addCommas(USD1));
            }
            if (element.id == 1027 && element.quotes.hasOwnProperty('USD')) {
                USD1027 = (element.quotes.USD.price).toFixed(2);
                $('.USD1027').text(addCommas(USD1027));
            }
            if (element.id == 52 && element.quotes.hasOwnProperty('USD')) {
                USD52 = (element.quotes.USD.price).toFixed(2);
                $('.USD52').text(addCommas(USD52));
            }
            if (element.id == 2 && element.quotes.hasOwnProperty('USD')) {
                USD2 = (element.quotes.USD.price).toFixed(2);
                $('.USD2').text(addCommas(USD2));
            }
        });


    }
  
});

function open_signup() {
    $('#exampleModalLong').modal('show');
}

function open_signin() {
    $('#exampleModal').modal('show');
}

$(function () {
    $('#SignUpForm').on('submit', function (e) {
        e.preventDefault();

        if(form_flag) {
            $.post('https://api.nmccx.com/api/create/lead',
                $('#SignUpForm').serialize(),
                function (response) {
                    if (response['success']) {
                        $('#exampleModalLong').modal('hide');
                        $('#successModal').modal('show');
                    }

                    if (!response['success']) {
                        var msg = response['msg'];
                        $('#err_msg').text(msg);
                        $('#errorModal').modal('show');
                    }
                }
            );
        }        
    });
});


function input_value(id) {
    if (id === 'Name' && event.target.value == ''){
        var empty_msg = '*This field is required';
        var element = $('#Name_msg');
        element.text(empty_msg);
        form_flag = false;
        $('#Name').css('border-color','#F41000');
        console.log($('#Name'));
    } else if (event.target.value != '' && id === 'Name') {
        form_flag = true;
        $('#Name_msg').text('');
        $('#Name').css('border-color', '#0C4272');
    }
    if (id === 'Email' && event.target.value == ''){
        var empty_msg = '*This field is required';
        var element = $('#Email_msg');
        $('#Email').css('border-color', '#F41000');
        element.text(empty_msg);
        form_flag = false;
    } else if(event.target.value != '' && id === 'Email') {
        form_flag = true;
        $('#Email_msg').text('');
        $('#Email').css('border-color', '#0C4272');
    }
    if (id === 'Phone' && event.target.value == ''){
        var empty_msg = '*This field is required';
        var element = $('#Phone_msg');
        $('#Phone').css('border-color', '#F41000');
        element.text(empty_msg);
        form_flag = false;
    } else if(event.target.value != '' && id === 'Phone') {
        form_flag = true;
        $('#Phone_msg').text('');
        $('#Phone').css('border-color', '#0C4272');
    }
    if (id === 'Address' && event.target.value == ''){
        var empty_msg = '*This field is required';
        var element = $('#Address_msg');
        $('#Address').css('border-color', '#F41000');
        element.text(empty_msg);
        form_flag = false;
    } else if(event.target.value != '' && id === 'Address') {
        form_flag = true;
        $('#Address_msg').text('');
        $('#Address').css('border-color', '#0C4272');
    }
    if (id === 'Country' && event.target.value == ''){
        var empty_msg = '*This field is required';
        var element = $('#Country_msg');
        $('#Country').css('border-color', '#F41000');
        element.text(empty_msg);
        form_flag = false;
    } else if(event.target.value != '' && id === 'Country') {
        form_flag = true;
        $('#Country_msg').text('');
        $('#Country').css('border-color', '#0C4272');
    }
    if (id === 'State' && event.target.value == ''){
        var empty_msg = '*This field is required';
        var element = $('#State_msg');
        $('#State').css('border-color', '#F41000');
        element.text(empty_msg);
        form_flag = false;
    } else if(event.target.value != '' && id === 'State') {
        form_flag = true;
        $('#State_msg').text('');
        $('#State').css('border-color', '#0C4272');
    }
    if (id === 'City' && event.target.value == ''){
        var empty_msg = '*This field is required';
        var element = $('#City_msg');
        $('#City').css('border-color', '#F41000');
        element.text(empty_msg);
        form_flag = false;
    } else if(event.target.value != '' && id === 'City') {
        form_flag = true;
        $('#City_msg').text('');
        $('#City').css('border-color', '#0C4272');
    }
    if (id === 'Pincode' && event.target.value == ''){
        var empty_msg = '*This field is required';
        var element = $('#Pincode_msg');
        $('#Pincode').css('border-color', '#F41000');
        element.text(empty_msg);
        form_flag = false;
    } else if(event.target.value != '' && id === 'Pincode') {
        form_flag = true;
        $('#Pincode_msg').text('');
        $('#Pincode').css('border-color', '#0C4272');
    }

}



