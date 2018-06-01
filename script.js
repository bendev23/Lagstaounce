// nearly all globals need to be saved and loaded

var pictureNumber = 0;
var livePictures = 0;
var repostUrl;
var profileUrl;
var totalComments = 0;
var totalLikes = 0;
var playerUsername = "";
var currentMonth = 0;
var dollarsPerSecond =  100000000;
var dollarsTotal = 99999999999999990;
var followersPerSecond = 0;
var followers = 0;
var inSponsorship = 0;
var sponsorshipLength = 0;
var sponsorshipValue = 0;
var sponsorshipName = 0;
var sponsorError = 0;
var toBeInSponsorship = 0;
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var cameraUpgrades = ["Hasselblad H5D 200c", "Phase One IQ180 Digital Back", "Phase One P65 Plus", "Hasselblad H6D-100c", "Leaf Aptus75S", "Phase One P45 Plus", "Leaf Credo 80", "Hasselblad H5D 50c", "Hasselblad H6D-50c", "Leica S Typ 007", "Leaf Credo 60", "Hasselblad H3DII 39", "Leica S", "Hasselblad H3DII 50", "Phase One P40 Plus", "Leica S-E Typ 006", "Hasselblad CFV 50c", "Leaf Credo 40", "Canon EOS 1Dc", "Mamiya DM40 Digital Back", "Hasselblad HV", "Leica M Edition 60", "Sigma SD1", "Pentax 645D", "Nikon D3X", "Hasselblad X1D-50c", "Pentax 645Z", "Leica M-P Typ 240", "Leica SL (Typ 601)", "Leica M Monochrom (Typ 246)", "Canon EOS 1Ds Mark III", "Mamiya ZD Back", "Hasselblad Lunar", "Leica M Typ 240", "Leica M9 P", "Canon EOS 1Ds Mark II", "Canon EOS 1Dx", "Nikon D5", "Nikon D4s", "Canon  EOS-1D X Mark II", "Nikon D4", "Leica M-D Typ 262", "Canon EOS 1D Mark II N", "Canon EOS 1D Mark IV", "Nikon D3s", "Leica M9", "Leica M8", "Leica M-E Typ 220", "Leica M Typ 262", "Hasselblad Lusso", "Nikon D3", "Leica Q Typ 116", "Nikon D2Xs", "Canon EOS 1D Mark III", "Canon EOS 5DS R", "Nikon D810A", "Canon EOS 5DS", "Canon EOS 5D Mark IV", "Canon EOS 5D Mark III", "Sony Cyber-shot DSC-RX1R II", "Nikon D810", "Nikon D800E", "Sony SLT Alpha 99 II", "Sony A7R II", "Sony A7S II", "Sony Alpha 900", "Nikon D800", "Leica X-U Typ 113", "Leica X Vario", "Sony Cyber-shot DSC-RX1R", "Sony Cyber-shot DSC-RX1", "Sony SLT Alpha 99", "Nikon Df", "Canon EOS 1Ds", "Nikon D700", "Sony A7S", "Nikon D750", "Sony A7R", "Sigma SD1 Merrill", "Leica X Typ 113", "Canon EOS 5D Mark II", "Nikon D600", "Canon EOS 6D", "Nikon D500", "Hasselblad Stellar II", "Sony Alpha 850", "Canon EOS 5D", "Nikon D2X", "Nikon D610", "Hasselblad Stellar", "Leica X2", "Canon EOS 7D", "Pentax K7", "Leica T", "Nikon D300s", "Pentax K-1", "Canon EOS 7D Mark II", "Leica X-E Typ 102", "Sony NEX-7", "Fujifilm X-Pro2", "Panasonic Lumix DMC-GH4", "Sony A7", "Fujifilm FinePix X-Pro1", "Canon EOS 1D Mark II", "Olympus E5", "Olympus E30", "Fujifilm XT-2", "Sony A7 II", "Pentax K5", "Nikon D300", "Sony Cybershot DSC-RX10 III", "Samsung NX1", "Sigma dp0 Quattro", "Olympus OM-D E-M1", "Sony SLT Alpha 77", "Leica V-Lux Typ 114", "Fujifilm X100T", "Fujifilm X-T1", "Sony Cyber-shot DSC-RX10", "Pentax K-3", "Samsung GALAXY NX", "Panasonic Lumix DMC-GH3", "Canon EOS 50D", "Olympus E3", "Sony Alpha 700", "Sony Cyber-shot DSC-RX10 II", "Sony SLT Alpha 65", "Nikon D90", "Panasonic Lumix DMC-FZ2000", "Canon EOS 80D", "Olympus PEN-F", "Panasonic Lumix DMC-GX8", "Nikon D7200", "Sony SLT Alpha 77 II", "Nikon D7100", "Nikon D7000", "Fujifilm FinePix S5 Pro", "Canon EOS 70D", "Pentax K-5 IIs", "Canon EOS 60D", "Leica D-Lux Typ 109", "Fujifilm FinePix S3 Pro", "Panasonic Lumix DMC-CM1", "Fujifilm FinePix X100S", "Pentax K-3 II", "Olympus OM-D E-M5 Mark II", "Nikon Coolpix A", "Panasonic Lumix DMC GH2", "Olympus PEN EP2", "Olympus PEN EP1", "Samsung GX 20", "Canon EOS 500D", "Sony A6300", "Canon PowerShot G3 X", "Sigma dp3 Quattro", "Sigma dp2 Quattro", "Sigma dp1 Quattro", "Samsung NX 30", "Olympus PEN E-P5", "Nikon 1 V1", "Olympus PEN EP3", "Canon EOS 550D", "Nikon D200", "Nikon D50", "Nikon 1 V3", "Fujifilm X-E2", "Panasonic Lumix DMC-GX7", "Pentax K-5 II", "FujiFilm X-E1", "Olympus OM-D E-M5", "Fujifilm FinePix X100", "Nikon D40X", "Nikon DL24-500", "Sigma SD15", "Canon EOS M5", "Panasonic Lumix DMC L10", "Sony Cyber-shot DSC-RX100 IV", "Sony Alpha 380", "Panasonic Lumix DMC-G80", "Nikon D5500", "Panasonic Lumix DMC-FZ1000", "Canon EOS 550D pre production", "Sony Alpha 230", "Pentax K10D", "Nikon D2H", "Panasonic Lumix DMC-LX100", "Nikon 1 V2", "Leica V-Lux 4", "Canon EOS 650D", "Samsung NX 210", "Pentax K 01", "Samsung NX 200", "Sony Alpha 550", "Canon EOS 40D", "Nikon D5200", "Panasonic Lumix DMC GH1", "Canon EOS M3", "Sony NEX-5N", "Nikon DL18-50", "Canon EOS 760D", "Canon EOS 600D", "Sony NEX-6", "Panasonic Lumix DMC-GX80", "Fujifilm X70", "Canon PowerShot G5 X", "Ricoh GR II", "Fujifilm X-T10", "Samsung NX500", "Sony Cyber-shot DSC RX100 III", "Canon PowerShot G1 X Mark II", "Nikon D5300", "Nikon 1 AW1", "Leica D-LUX 6", "Sony Alpha 580", "Sony A6000", "Ricoh GR", "Canon EOS M", "Canon PowerShot G1X", "Pentax Q", "Nikon D5100", "Leica C", "Panasonic Lumix DMC G1", "Sony Alpha 330", "Sony NEX-C3", "Pentax K20D", "Canon EOS 750D", "Sony Cyber-shot DSC-RX100 II", "Panasonic LUMIX DMC-G6", "Canon EOS 700D", "Samsung NX 300", "Sony SLT Alpha 55", "Pentax K-S1", "Samsung NX 1000", "Canon EOS 30D", "Sony SLT Alpha 58", "Nikon D5000", "Nikon D3000", "Nikon D80", "Samsung NX 20", "Nikon Coolpix P7100", "Fujifilm FinePix S100fs", "Canon PowerShot G7 X Mark II", "Panasonic Lumix DMC GF8", "Fujifilm X-E2S", "Panasonic Lumix DMC-ZS100", "Pentax K-S2", "Canon PowerShot G7 X", "Olympus OM-D E-M10", "Olympus PEN E-PL6", "Nikon 1 J2", "Sony SLT Alpha 57", "Nikon 1 J1", "Pentax Kr", "Sony Alpha 350", "Nikon D70s", "Canon EOS 20D", "Panasonic Lumix DMC LX10", "Olympus Stylus1", "Fujifilm X-M1", "Olympus PEN E-PL5", "Nikon D3200", "Fujifilm FinePix X S1", "Panasonic Lumix DMC GX1", "Panasonic Lumix DMC GF3", "Nikon D3100", "Sony Alpha 500", "Sony Alpha 300", "Panasonic Lumix DMC GF6", "Sony Alpha 450", "Sony NEX-3N", "Pentax K200D", "Nikon D3400", "Pentax K-70", "Nikon DL24-85", "Olympus OM-D E-M10 Mark II", "Casio Exilim EX-100F", "Panasonic Lumix DMC-G7", "Panasonic Lumix DMC-GM5", "Nikon D3300", "Canon EOS M2", "Canon EOS 100D", "Sony NEX-5R", "Panasonic Lumix DMC G5", "Sony Cyber-shot DSC-RX100", "Sony Alpha 560", "Sony NEX5", "Sigma DP1x", "Samsung NX2000", "Samsung NX 11", "Sigma DP2s", "Pentax Kx", "Panasonic LUMIX DMC-FZ150", "Sony Alpha 390", "Olympus E620", "Sony Alpha 200", "Nokia Lumia 1020", "Samsung NX 10", "Canon Powershot G9", "Fujifilm X-A3", "Sony SLT Alpha 68", "Canon EOS M10", "Panasonic Lumix DMC-FZ330", "Panasonic Lumix DMC GF7", "Olympus PEN E-PL7", "FujiFilm X30", "Nokia Lumia 1520", "Panasonic Lumix DMC-GM1", "Pentax K-500", "Samsung NX1100", "Nikon 1 J3", "Panasonic LUMIX DMC-FZ200", "Sony NEX-F3", "Fujifilm FinePix X10", "Sony SLT Alpha 35", "Panasonic Lumix DMC G10", "DxO ONE SuperRAW Plus", "DxO ONE", "Nikon 1 J4", "Pentax K-50", "Canon Powershot G15", "Olympus PEN E-PM2", "Panasonic Lumix DMC GF5", "Panasonic Lumix DMC G3", "Canon EOS 1100D", "Olympus PEN EPL2", "Panasonic Lumix DMC GF2", "Sony SLT Alpha 33", "Panasonic Lumix DMC G2", "Olympus PEN EPL1", "Olympus E510", "Panasonic Lumix DMC GF1", "Canon EOS 450D", "Konica Minolta DYNAX 7D", "Canon EOS 350D", "Fujifilm X-A2", "Canon PowerShot SX60 HS", "Sony A5100", "Nikon Coolpix P7800", "Olympus Stylus XZ-10", "Sony NEX3", "Pentax KM", "Olympus PEN E-PL8", "Sony NEX-5T", "Canon PowerShot G16", "Fujifilm FinePix HS50EXR", "Olympus XZ-2 iHS", "Samsung EX2F", "Canon EOS 1000D", "Canon Powershot G11", "Olympus E420", "Olympus SP 570 UZ", "Canon EOS 400D", "Nikon Coolpix B700", "Canon PowerShot G9 X", "Nikon 1 J5", "Pentax Q-S1", "Canon EOS 1200D", "Sony A5000", "Fujifilm FinePix S1", "Fujifilm XQ1", "Panasonic LUMIX DMC-LF1", "Sony SLT Alpha 37", "Fujifilm FinePix F600EXR", "Nikon Coolpix P7000", "Konica Minolta DYNAX 5D", "Fujifilm X-A1", "Nikon 1 S1", "Pentax MX-1", "Canon Powershot S110", "Fujifilm XF1", "Pentax Q10", "Nikon Coolpix P7700", "Olympus PEN EPM1", "Canon PowerShot G12", "Samsung NX 100", "Sony Alpha 290", "Fujifilm FinePix HS10", "Olympus XZ1", "Olympus E600", "Canon PowerShot SX50 HS", "Fujifilm FinePix F770EXR", "Olympus E410", "Pentax Q7", "Pentax K-30", "Panasonic Lumix DMC LX5", "Nikon D60", "Canon Powershot G10", "Sony A3500", "Olympus PEN EPL3", "Panasonic Lumix DMC-ZS60", "Nikon 1 S2", "Panasonic Lumix DMC-ZS40", "Panasonic Lumix DMC LX7", "Fujifilm FinePix F550EXR", "Samsung EX1", "Panasonic Lumix DMC LX3", "Olympus E520", "Canon PowerShot S120", "Olympus E450", "Nikon Coolpix P6000", "Fujifilm FinePix HS20EXR", "Olympus SP 565 UZ", "Canon PowerShot S100", "Sony Alpha 100", "Panasonic DMC FZ28", "Canon PowerShot S90", "Casio Exilim EX-ZR800", "Casio Exilim EX-ZR3000", "Olympus Stylus SH-2", "Fujifilm XQ2", "Panasonic Lumix DMC-ZS50", "Sony QX1", "Sony A3000", "Fujifilm FinePix F900EXR", "Canon PowerShot S95", "Nikon D40", "Nikon D70", "Panasonic Lumix DMC-FZ70", "Fujifilm FinePix SL1000", "Panasonic Lumix DMC FX150", "Nikon Coolpix P340", "Nikon Coolpix P330", "Olympus Stylus SH-3", "Samsung NX3000", "Fujifilm FinePix F800EXR", "Canon EOS 10D", "Kodak Pixpro AZ651", "Canon EOS 300D", "Samsung NX Mini"];
cameraUpgrades.reverse();
var cameraUpgradePrice = ["45000", "42490", "39900", "33000", "32995", "32990", "30000", "28700", "26000", "25400", "25000", "22000", "21950", "20000", "19500", "16900", "15000", "15000", "15000", "14990", "11500", "11000", "10000", "9400", "9172", "8995", "8499", "7950", "7450", "7450", "7100", "6999", "6995", "6950", "6950", "6950", "6800", "6500", "6500", "6000", "5999", "5995", "5986", "5840", "5510", "5500", "5495", "5450", "5195", "5000", "4300", "4250", "4250", "4050", "3900", "3800", "3700", "3500", "3499", "3300", "3300", "3300", "3200", "3198", "3000", "3000", "2999", "2950", "2850", "2800", "2800", "2800", "2749", "2700", "2699", "2499", "2300", "2300", "2300", "2295", "2199", "2100", "2099", "2000", "2000", "2000", "2000", "2000", "1999", "1995", "1995", "1974", "1900", "1850", "1815", "1800", "1800", "1795", "1720", "1700", "1700", "1700", "1700", "1700", "1699", "1689", "1600", "1600", "1600", "1540", "1500", "1500", "1400", "1399", "1399", "1350", "1300", "1300", "1300", "1300", "1300", "1300", "1300", "1300", "1300", "1298", "1290", "1235", "1200", "1200", "1200", "1200", "1200", "1200", "1200", "1200", "1200", "1199", "1199", "1199", "1195", "1190", "1160", "1149", "1100", "1100", "1100", "1100", "1100", "1098", "1060", "1040", "1000", "1000", "1000", "1000", "1000", "1000", "1000", "1000", "1000", "1000", "1000", "1000", "999", "999", "999", "999", "999", "999", "999", "998", "996", "989", "980", "964", "948", "935", "900", "900", "900", "900", "900", "900", "900", "899", "899", "899", "899", "899", "899", "899", "899", "899", "897", "880", "870", "860", "850", "850", "850", "848", "800", "800", "800", "800", "800", "800", "800", "800", "800", "800", "800", "800", "799", "799", "799", "799", "799", "799", "795", "790", "780", "770", "770", "750", "750", "750", "750", "750", "750", "749", "749", "738", "735", "730", "730", "730", "719", "715", "713", "700", "700", "700", "700", "700", "700", "700", "700", "700", "700", "700", "700", "700", "700", "700", "699", "699", "699", "699", "699", "699", "699", "699", "699", "699", "690", "680", "680", "670", "660", "650", "650", "650", "650", "650", "650", "650", "650", "650", "650", "650", "650", "650", "650", "650", "650", "649", "649", "649", "640", "630", "620", "618", "611", "610", "610", "606", "600", "600", "600", "600", "600", "600", "600", "600", "600", "600", "600", "600", "600", "600", "600", "600", "600", "599", "599", "599", "599", "599", "599", "599", "599", "599", "599", "599", "599", "599", "599", "593", "570", "570", "569", "560", "550", "550", "550", "550", "550", "550", "550", "549", "549", "549", "549", "549", "549", "540", "523", "520", "520", "520", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "499", "499", "499", "499", "499", "499", "499", "499", "499", "499", "499", "499", "494", "490", "480", "480", "480", "477", "470", "470", "470", "467", "460", "460", "450", "450", "450", "450", "450", "450", "450", "450", "449", "443", "439", "435", "433", "429", "427", "426", "420", "410", "400", "400", "400", "400", "400", "400", "400", "400", "400", "400", "399", "399", "390", "380", "380", "350", "350", "349", "347", "325", "324", "300"];
cameraUpgradePrice.reverse();

var boughtUpgrades = [];

//load content when the user gets to the bottom of the content
var _throttleTimer = null;
var _throttleDelay = 100;
var $window = $(window);
var $document = $(document);

$document.ready(function () {

    $window
        .off('scroll', ScrollHandler)
        .on('scroll', ScrollHandler);

});

function ScrollHandler() {
    //throttle event:
    clearTimeout(_throttleTimer);
    _throttleTimer = setTimeout(function () {
        console.log('scroll');

        //do work
        if ($window.scrollTop() + $window.height() > $document.height() - 100) {
            if ($(".picBox:visible").length >= livePictures) {

            } else {

                $('#mainContent :nth-child(n+' + ($(".picBox:visible").length + 1) + '):nth-child(-n+' + ($(".picBox:visible").length + 5) + ')').slideDown(1000);

                $('div[class^="picCommentSection"]').each(function () {
                    //force scroll down to look at the new comment
                    $(this).animate({
                        scrollTop: $(this).prop("scrollHeight") - $(this).height()
                    }, 100);
                });



            }
        }

    }, _throttleDelay);
}



// A $( document ).ready() block.
$(document).ready(function () {
    if (localStorage.getItem("exists") === null) {

        $("#overlay").show();
        $("#pictureChange").trigger("click");


    } else {

        localStorage.setItem('exists', 'true');
        pictureNumber = JSON.parse(localStorage.getItem('pictureNumber'));
        repostUrl = JSON.parse(localStorage.getItem('repostUrl'));
        profileUrl = JSON.parse(localStorage.getItem('profileUrl'));
        totalComments = JSON.parse(localStorage.getItem('totalComments'));
        totalLikes = JSON.parse(localStorage.getItem('totalLikes'));
        playerUsername = JSON.parse(localStorage.getItem('playerUsername'));
        currentMonth = JSON.parse(localStorage.getItem('currentMonth'));
        dollarsTotal = JSON.parse(localStorage.getItem('dollarsTotal'));
        followers = JSON.parse(localStorage.getItem('followers'));
        inSponsorship = JSON.parse(localStorage.getItem('inSponsorship'));
        sponsorshipLength = JSON.parse(localStorage.getItem('sponsorshipLength'));
        sponsorshipValue = JSON.parse(localStorage.getItem('sponsorshipValue'));
        sponsorshipName = JSON.parse(localStorage.getItem('sponsorshipName'));
        sponsorError = JSON.parse(localStorage.getItem('sponsorError'));
        toBeInSponsorship = JSON.parse(localStorage.getItem('toBeInSponsorship'));
        boughtUpgrades = JSON.parse(localStorage.getItem('boughtUpgrades'));

    }
});

$(document).ready(function () {
    $('#sponsonshipsTable').DataTable({
        "pageLength": 5,
        "order": [[3, "asc"]],
        "aLengthMenu": [[5, 10, 25, 50, 75, -1], [5, 10, 25, 50, 75, "All"]]
    });


    writeUpgradeTable();

    writeFollowersTable();



    jQuery('#buyFollowersTable, #sponsonshipsTable, #buyUpgradeTable').wrap('<div class="tableWrapper" />');

});

function writeUpgradeTable() {
    // cache <tbody> element:
    var count = 0;
    var tbody = $('.upgradeTableBody');
    for (var i = 0; i < cameraUpgrades.length; i++) {
        // create an <tr> element, append it to the <tbody> and cache it as a variable:
        var tr = $('<tr/>').appendTo(tbody);
        for (var j = 0; j < 1; j++) {
            // append <td> elements to previously created <tr> element:
            tr.append('<td class="buyUpgradeName">' + cameraUpgrades[count] + '</td>');

            tr.append('<td class="buyUpgradePrice">' + cameraUpgradePrice[count] + '</td>');

            tr.append('<td><button type="button" class="btn btn-secondary buyUpgradeButton' + i + '">Buy</button></td>');
            count++;
        }
    }
    // reset the count:    
    count = 0;

    $('#buyUpgradeTable').DataTable({
        "pageLength": 5,
        "order": [[1, "asc"]],
        "aLengthMenu": [[5, 10, 25, 50, 75, -1], [5, 10, 25, 50, 75, "All"]]
    });
}

function writeFollowersTable() {

    // cache <tbody> element:
    var count = 0;
    var tbody = $('.followersTableBody');
    var followersToAdd = 100;
    var priceOfFollowers = 1000;
    for (var i = 0; i < 100; i++) {
        // create an <tr> element, append it to the <tbody> and cache it as a variable:
        var tr = $('<tr/>').appendTo(tbody);
        for (var j = 0; j < 1; j++) {
            // append <td> elements to previously created <tr> element:
            tr.append('<td class="buyFollowersAmount">' + followersToAdd + '</td>');

            tr.append('<td class="buyFollowersPrice">' + Math.floor(priceOfFollowers) + '</td>');

            tr.append('<td><button type="button" class="btn btn-secondary buyFollowersButton">Buy</button></td>');
            count++;
            followersToAdd += 100;
            priceOfFollowers += 1000;
        }
    }
    // reset the count:    
    count = 0;

    $('#buyFollowersTable').DataTable({
        "pageLength": 5,
        "aLengthMenu": [[5, 10, 25, 50, 75, -1], [5, 10, 25, 50, 75, "All"]]
    });
}

$('.upgradeTableBody').on('click', '[class*="buyUpgradeButton"]', function () {



    var $upgradeName = $(this).closest("tr") // Finds the closest row <tr> 
        .find(".buyUpgradeName") // Gets a descendent with class="sponsorRequirement"
        .text(); // Retrieves the text within <td>

    var $upgradePrice = $(this).closest("tr") // Finds the closest row <tr> 
        .find(".buyUpgradePrice") // Gets a descendent with class="sponsorRequirement"
        .text(); // Retrieves the text within <td>


    if (dollarsTotal >= $upgradePrice) {

        dollarsTotal -= $upgradePrice;

        console.log($upgradeName);


        for (var i = 0; i < cameraUpgrades.length; i++) {

            if ($upgradeName == cameraUpgrades[i]) {
                boughtUpgrades.push(i);
            }

        }

    } else {

        //cant buy upgrade
        $(".buyUpgradeError").slideDown();
        setTimeout(function () {
            $(".buyUpgradeError").slideUp();
        }, 3000);


    }
});

$("#repostExplore").click(function () {
    $('html,body').scrollTop(0);
    $('#exploreModal').modal('hide');
    $('.nav-tabs a[href="#home"]').tab('show');
    //$("#home").tab('show');
    postToWall(repostUrl);

    countDownButton();

});

$(".exploreGoButton").click(function () {

    //disable the buttons
    $(".exploreGoButton").prop("disabled", true);

    loadFunction(this);

    if ($(this).attr("id") == "randomExploreGoButton") {

        $('.lagstaExplorePicFocus').css('background-image', 'url(' + 'https://source.unsplash.com/random?sig=1' + ')');

    } else if ($(this).attr("id") == "buildingsExploreGoButton") {

        $('.lagstaExplorePicFocus').css('background-image', 'url(' + 'https://source.unsplash.com/category/buildings?sig=1' + ')');

    } else if ($(this).attr("id") == "foodExploreGoButton") {

        $('.lagstaExplorePicFocus').css('background-image', 'url(' + 'https://source.unsplash.com/category/food?sig=1' + ')');

    } else if ($(this).attr("id") == "natureExploreGoButton") {

        $('.lagstaExplorePicFocus').css('background-image', 'url(' + 'https://source.unsplash.com/category/nature?sig=1' + ')');

    } else if ($(this).attr("id") == "peopleExploreGoButton") {

        $('.lagstaExplorePicFocus').css('background-image', 'url(' + 'https://source.unsplash.com/category/people?sig=1' + ')');

    } else if ($(this).attr("id") == "technologyExploreGoButton") {

        $('.lagstaExplorePicFocus').css('background-image', 'url(' + 'https://source.unsplash.com/category/technology?sig=1' + ')');

    } else if ($(this).attr("id") == "objectsExploreGoButton") {

        $('.lagstaExplorePicFocus').css('background-image', 'url(' + 'https://source.unsplash.com/category/objects?sig=1' + ')');

    } else {

    }

    openExploreModal();

    //post to wall function
    function openExploreModal() {


        //get response url
        var xhr;
        var _orgAjax = jQuery.ajaxSettings.xhr;
        jQuery.ajaxSettings.xhr = function () {
            xhr = _orgAjax();
            return xhr;
        };
        var picUrl = $('.lagstaExplorePicFocus').css('background-image');
        picUrl = /^url\((['"]?)(.*)\1\)$/.exec(picUrl);
        picUrl = picUrl ? picUrl[2] : ""; // If matched, retrieve url, otherwise ""
        var picSig = parseInt(picUrl.split("=")[1]) + 1;
        picUrl = picUrl.slice(0, -1);
        picUrl += picSig;

        //preload and grab the url then open modal
        jQuery.ajax(picUrl, {
            success: function () {
                var image = $('.lagstaExplorePicFocus');
                image.fadeOut(100, function () {
                    image.css('background-image', 'url(' + picUrl + ')');
                    image.fadeIn(100);
                });
                $('#exploreModal').modal('show');

                repostUrl = xhr.responseURL;


                loadFunction('.exploreGoButton');
                //disable the buttons
                $(".exploreGoButton").prop("disabled", false);

            },
            //try to open modal until success
            error: function () {
                setTimeout(function () {
                    openExploreModal();
                }, 1000);
            }
        });

    }



});



function loadFunction(buttonName) {

    if ($(buttonName).find("i").hasClass('fa-spin')) {

        $(buttonName).find("i").removeClass('fa-spin');

    } else {


        $(buttonName).find("i").addClass('fa-spin');

    }

}

$("#exploreNext").click(function () {

    loadFunction(this);

    nextExploreItem();
    //disable the buttons
    $("#exploreNext").prop("disabled", true);

    //post to wall function
    function nextExploreItem() {

        //get response url
        var xhr;
        var _orgAjax = jQuery.ajaxSettings.xhr;
        jQuery.ajaxSettings.xhr = function () {
            xhr = _orgAjax();
            return xhr;
        };
        var picUrl = $('.lagstaExplorePicFocus').css('background-image');
        picUrl = /^url\((['"]?)(.*)\1\)$/.exec(picUrl);
        picUrl = picUrl ? picUrl[2] : ""; // If matched, retrieve url, otherwise ""
        var picSig = parseInt(picUrl.split("=")[1]) + 1;
        picUrl = picUrl.slice(0, -1);
        picUrl += picSig;

        //preload and grab the url then open modal
        jQuery.ajax(picUrl, {
            success: function () {

                
                var image = $('.lagstaExplorePicFocus');
                image.fadeOut(200);
                image.css('background-image', 'url(' + picUrl + ')');
                image.fadeIn(200);
                //enables the buttons
                $("#exploreNext").prop("disabled", false);

                repostUrl = xhr.responseURL;

                loadFunction('#exploreNext');
            },
            //try to open modal until success
            error: function () {
                setTimeout(function () {
                    nextExploreItem();
                }, 1000);
            }
        });

    }

});

//post picture - picture categories based on href tag
$(".postButton").click(function () {

    loadFunction(".postButton");

    //disable the buttons
    //$(".postButton, .postButtonDrop").prop("disabled", true);

    var picUrl = 'https://source.unsplash.com/random?sig=' + livePictures;

    //determine the value of picUrl
    if ($(this).attr("href") == "#1") {

        picUrl = "https://source.unsplash.com/category/buildings?sig=" + livePictures;

    } else if ($(this).attr("href") == "#2") {

        picUrl = "https://source.unsplash.com/category/food?sig=" + livePictures;

    } else if ($(this).attr("href") == "#3") {

        picUrl = "https://source.unsplash.com/category/nature?sig=" + livePictures;

    } else if ($(this).attr("href") == "#4") {

        picUrl = "https://source.unsplash.com/category/people?sig=" + livePictures;

    } else if ($(this).attr("href") == "#5") {

        picUrl = "https://source.unsplash.com/category/technology?sig=" + livePictures;

    } else if ($(this).attr("href") == "#6") {

        picUrl = "https://source.unsplash.com/category/objects?sig=" + livePictures;

    } else {

        picUrl = 'https://source.unsplash.com/random?sig=' + livePictures;

    }

    postToWall(picUrl);

    $(".picBox:gt(3)").slideUp();

    countDownButton();

});

//function button countdown
function countDownButton() {
    $('.postButton, .postButtonDrop, .exploreGoButton').prop('disabled', true);
    var oldPostText = $('.postButton').first().html();
    var oldExploreText = $('.exploreGoButton').html();

    var count = 10;

    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer() {
        count = count - 1;
        if (count <= 0) {
            clearInterval(counter);
            //counter ended, do something here

            $('.postButton, .postButtonDrop, .exploreGoButton').prop('disabled', false);
            $('.postButton').first().html(oldPostText);
            $('.exploreGoButton').html(oldExploreText);
            if ($('.postButton, .exploreGoButton').find("i").hasClass('fa-spin')) {

                $('.postButton, .exploreGoButton').find("i").removeClass('fa-spin');

            }
            return;
        }

        //Do code for showing the number of seconds here
        $('.postButton').first().text(count);
        $('.exploreGoButton').text(count);
    }

}

//post to wall function
function postToWall(picUrl) {

    //get response url
    var xhr;
    var _orgAjax = jQuery.ajaxSettings.xhr;
    jQuery.ajaxSettings.xhr = function () {
        xhr = _orgAjax();
        return xhr;
    };

    //preload and grab the url to set it as the background url on the prepended div
    jQuery.ajax(picUrl, {
        success: function () {
            console.log('responseURL:', xhr.responseURL);

            var display = "none";
            pictureNumber += 1;
            livePictures += 1;
            if (inSponsorship) {
                display = "inline";
            } else {
                display = "none";
            }

            $('<div class="container top-buffer white-bg content-border picBox"><div class="container lagstaPicName"><div class="lagstaPicThumb"></div><h5 class="playerUsername"></h5></div><div class="lagstaPic pictureNumberID' + livePictures + '" style="background: url(' + xhr.responseURL + ') 50% 50% no-repeat; background-size: 100%;"><h2 style="display: ' + display + ';"><span style=" color: white; font: bold 24px/45px Helvetica, Sans-Serif; letter-spacing: -1px;  background: rgb(0, 0, 0); background: rgba(0, 0, 0, 0.7); padding: 10px;"><span style="padding:0 5px;">Sponsored by: </span><br/><span style="padding:0 15px;">' + sponsorshipName + '</span></span></h2></div><div class="picComments"><p><strong><span id="likesSpan' + livePictures + '">0</span> Likes</strong></p><div class="picCommentSection' + livePictures + '" style="height: 100px; overflow-y: auto;"></div><hr><div class="container-fluid"><form onsubmit="return false;"><div class="form-group row"><label class="sr-only" for="commentBox">Comment</label><div class="col-xs-1"><i class="fa fa-heart-o fa-2x" aria-hidden="true"></i></div><div class="col-xs-9"><input type="text" class="form-control" id="commentBox" placeholder="Add a comment..."></div><div class="col-xs-1"><i class="fa fa-ellipsis-h fa-2x" aria-hidden="true"></i></div></div></form></div></div></div>').hide().prependTo("#mainContent").slideDown(2000);
            //enable the buttons again

        },
        //post to wall until success
        error: function () {
            setTimeout(function () {
                postToWall();
            }, 1000);
        }
    });

}


//temporary - post comment
$(".commentButton").click(function () {

    postComment();

});

//temporary - post comment
$(".likeButton").click(function () {

    likePicture();

});

//like a random picture
function likePicture() {

    //if the user has posted a picture
    if (livePictures > 0) {

        var likeUsername = generateUserName();



        //redundant right now, can include in generateComment function chooses the picture to comment on
        var likesSpanNumber = randomIntBetween((livePictures - 9), livePictures);

        // force ~10% of users to comment on the completely random
        // force ~40% of users to comment on old content from last 10 posts
        // force ~60% of users to comment on the newest picture
        var numberDecider = Math.floor(Math.random() * 9);

        if (numberDecider < 4) {
            if (livePictures < 10) {

                likesSpanNumber = randomIntBetween(1, (livePictures));

            } else {

                likesSpanNumber = randomIntBetween((livePictures - 9), (livePictures - 1));
            }
        } else if (numberDecider == 8) {

            likesSpanNumber = randomIntBetween(1, (livePictures));

        } else {

            likesSpanNumber = livePictures;

        }
        var bg_url = $('.pictureNumberID' + likesSpanNumber).css('background-image');
        bg_url = /^url\((['"]?)(.*)\1\)$/.exec(bg_url);
        //like the content
        var currentLikes = parseInt($('#likesSpan' + likesSpanNumber).text());

        $('#likesSpan' + likesSpanNumber).text(currentLikes + 1);

        //prepend the comment to the chain of notifications
        $('<div><hr><div class="notificationCommentPicture" style="background: url(' + bg_url[2] + ') 50% 50% no-repeat; background-size: 200%; width: 50px; height: 50px; border-radius: 5px; float: right;"></div><span><strong><h6>' + likeUsername + '</h6> Liked your photo</strong></span></div>').hide().prependTo(".notificationBox").slideDown(100);


        $(".notificationBox :nth-child(20)").nextAll().remove();

        totalLikes += 1;

    }

}
//random a number between min-max
function randomIntBetween(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);

}

//function to decide where to post comment and push it through
function postComment() {

    //if the user has posted a picture
    if (livePictures > 0) {

        //redundant right now, can include in generateComment function chooses the picture to comment on
        var pictureCommentNumber = randomIntBetween((livePictures - 9), livePictures);

        // force ~10% of users to comment on the completely random
        // force ~40% of users to comment on old content
        // force ~60% of users to comment on the newest picture
        var numberDecider = Math.floor(Math.random() * 9);

        if (numberDecider < 4) {
            if (livePictures < 10) {

                pictureCommentNumber = randomIntBetween(1, (livePictures));

            } else {

                pictureCommentNumber = randomIntBetween((livePictures - 9), (livePictures - 1));
            }
        } else if (numberDecider == 8) {

            pictureCommentNumber = randomIntBetween(1, (livePictures));

        } else {

            pictureCommentNumber = livePictures;

        }
        //generate the comment
        generateComment(pictureCommentNumber);
        //hide when more than 10 comments
        var ltVar = 0;

        var childrenLength = $('.picCommentSection' + pictureCommentNumber).children().length;

        if (childrenLength - 5 <= 5) {

            ltVar = 0;

        } else {

            ltVar = childrenLength - 10;

        }

        //todo make slideup instead of remove and then load in more comments
        //problem when loading posts after reaching bottom of page, scoll in weird place and more than 10 comments loaded
        $('p.commentInBox:lt(' + ltVar + ')', 'div.picCommentSection' + pictureCommentNumber).remove();

        totalComments += 1;

    }


}

//generate the comment content
function generateComment(pictureCommentNumber) {

    var commentUsername = generateUserName();
    var commentContent = generateCommentContent();

    var bg_url = $('.pictureNumberID' + pictureCommentNumber).css('background-image');
    bg_url = /^url\((['"]?)(.*)\1\)$/.exec(bg_url);

    //append the comment to the chain of comments
    $('<p class="commentInBox"><strong>' + commentUsername + '</strong> ' + commentContent + '</p>').hide().appendTo(".picCommentSection" + pictureCommentNumber).slideDown(100);
    //prepend the comment to the chain of notifications
    $('<div><hr><div class="notificationCommentPicture" style="background: url(' + bg_url[2] + ') 50% 50% no-repeat; background-size: 200%; width: 50px; height: 50px; border-radius: 5px; float: right;"></div><span><strong><h6>' + commentUsername + '</h6> Commented</strong> <br><span class="notificationCommentPicture">' + commentContent + '</span></span></div>').hide().prependTo(".notificationBox").slideDown(100);

    $(".notificationBox :nth-child(20)").nextAll().remove();

    //force scroll down to look at the new comment
    $(".picCommentSection" + pictureCommentNumber).animate({
        scrollTop: $(".picCommentSection" + pictureCommentNumber).prop("scrollHeight")
    }, 100);

}

//change profile preview picture
$("#pictureChange").click(function () {

    loadFunction(this);

    nextProfilePic();
    //disable the buttons
    $("#pictureChange").prop("disabled", true);

    //post to wall function
    function nextProfilePic() {

        //get response url
        var xhr;
        var _orgAjax = jQuery.ajaxSettings.xhr;
        jQuery.ajaxSettings.xhr = function () {
            xhr = _orgAjax();
            return xhr;
        };
        var picUrl = $('.lagstaProfilePicSelect').css('background-image');
        picUrl = /^url\((['"]?)(.*)\1\)$/.exec(picUrl);
        picUrl = picUrl ? picUrl[2] : ""; // If matched, retrieve url, otherwise ""
        var picSig = parseInt(picUrl.split("=")[1]) + 1;
        picUrl = picUrl.slice(0, -1);
        picUrl += picSig;

        //preload and grab the url then open modal
        jQuery.ajax(picUrl, {
            success: function () {

                /*
                $('.lagstaExplorePicFocus').fadeTo('fast', 0.3, function () {
                    $(this).css('background-image', 'url(' + picUrl + ')');
                }).fadeTo('fast', 1);
                */
                //$('.lagstaExplorePicFocus').css('background-image', 'url(' + picUrl + ')');
                var image = $('.lagstaProfilePicSelect');
                image.fadeOut(200);
                image.css('background-image', 'url(' + picUrl + ')');
                image.fadeIn(200);
                //enables the buttons
                $("#pictureChange").prop("disabled", false);

                repostUrl = xhr.responseURL;

                loadFunction('#pictureChange');
                $('#introModal').modal('show');

                $("#overlay").fadeOut();
            },
            //try to open modal until success
            error: function () {
                setTimeout(function () {
                    nextProfilePic();
                }, 1000);
            }
        });

    }

});

//generate name for preview
$("#namePreviewGenerate").click(function () {

    $("#profileNameInput").val(generateUserName());

});

//set new name variable and profile pic
$("#submitIntro").click(function () {

    if (!$("#profileNameInput").val()) {
        playerUsername = generateUserName();
    } else {
        playerUsername = $("#profileNameInput").val();
    }

    profileUrl = repostUrl;
    $('#introModal').modal('hide');



});

//open shop modal
$(".shopButton").click(function () {

    $('#shopModal').modal('show');

});

//sign contract
$(".signSponsorship").click(function () {

    var $requirement = $(this).closest("tr") // Finds the closest row <tr> 
        .find(".sponsorRequirement") // Gets a descendent with class="sponsorRequirement"
        .text(); // Retrieves the text within <td>

    var $value = $(this).closest("tr") // Finds the closest row <tr> 
        .find(".sponsorDollarsPerMonth") // Gets a descendent with class="sponsorDollarsPerMonth"
        .text(); // Retrieves the text within <td>

    var $length = $(this).closest("tr") // Finds the closest row <tr> 
        .find(".sponsorDuration") // Gets a descendent with class="sponsorDollarsPerMonth"
        .text(); // Retrieves the text within <td>

    var $name = $(this).closest("tr") // Finds the closest row <tr> 
        .find(".sponsorName") // Gets a descendent with class="sponsorDollarsPerMonth"
        .text(); // Retrieves the text within <td>


    if (followers >= $requirement) {

        //locked into sponsorship
        //inSponsorship = 1;
        toBeInSponsorship = 1;
        //set monthly income
        sponsorshipValue = $value;
        //set length of sponsorship
        sponsorshipLength = $length;
        //set sponsor name 
        sponsorshipName = $name;

        //not enough followers for sponsorship
        $(".sponsorshipSuccess").slideDown();

        /*
        setTimeout(function () {
            $(".sponsorshipSuccess").slideUp();
        }, 3000);
        */


    } else {

        //not enough followers for sponsorship
        sponsorError = 1;
        $(".signSponsorship").prop("disabled", true);
        $(".sponsorshipError").slideDown();
        setTimeout(function () {
            sponsorError = 0;
            $(".sponsorshipError").slideUp();
            $(".signSponsorship").prop("disabled", false);
        }, 3000);

    }

    /* find row info example
    var $item = $(this).closest("tr") // Finds the closest row <tr> 
        .find(".sponsorDollarsPerMonth") // Gets a descendent with class="nr"
        .text(); // Retrieves the text within <td>

    alert($item);
    */
});

//buy followers

$('.followersTableBody').on('click', '.buyFollowersButton', function () {


    var $followerAmount = $(this).closest("tr") // Finds the closest row <tr> 
        .find(".buyFollowersAmount") // Gets a descendent with class="sponsorRequirement"
        .text(); // Retrieves the text within <td>

    var $cost = $(this).closest("tr") // Finds the closest row <tr> 
        .find(".buyFollowersPrice") // Gets a descendent with class="sponsorDollarsPerMonth"
        .text(); // Retrieves the text within <td>


    if (dollarsTotal >= $cost) {

        dollarsTotal -= $cost;
        followers += parseInt($followerAmount);

    } else {

        //not enough money
        $(".buyFollowersButton").prop("disabled", true);
        $(".buyFollowersError").slideDown();
        setTimeout(function () {
            $(".buyFollowersError").slideUp();
            $(".buyFollowersButton").prop("disabled", false);
        }, 3000);


    }

});

//set new name variable and profile pic
$(".profileTabEdit").click(function () {

    repostUrl = profileUrl;
    $('#introModal').modal('show');
    $("#profileNameInput").val(playerUsername);

});

$('#introModal').on('hidden.bs.modal', function () {
    if (!playerUsername) {
        playerUsername = generateUserName();
        profileUrl = repostUrl;
    }
    $("#overlay").fadeOut();
});

//save game
$(".saveGame").click(function () {

    saveProgress();

});

//save game
$(".deleteData").click(function () {

    localStorage.clear();
    location.reload();

});



function generateCommentContent() {

    var commentContents = ["Dude brush ur shiba..",
                          "So cute omg",
                          "Woof",
                          "pls dont eat ur doge",
                          "Good choice man, well done",
                          "I hate that I enjoyed this haha",
                          "True words. I wonder if equilibrists find it easier to find balance in everything in life At least I'm more balanced since I started training handstands",
                          "NEXT TIME COME JOIN US",
                          "U look v nice ppl",
                          "Holy crap I love this",
                          "Love u son",
                          "Oh god ヾ(-_- )ゞ cutie",
                          "those legs",
                          "AW",
                          "Aww, looks so adorable!",
                          "We get it, you're massif",
                          "Cute",
                          "Wow this is really really throw back",
                          "uh yeah s'nice but not ma style init",
                          "Lovin it",
                          "This is soo amazing!",
                          "looks hot af",
                          "this is so good!",
                          "I love it",
                          "dude i just realized your stuff is sortve roald dahl -esque.",
                          "This is really your best.",
                          "This reminds me of the pizza the size of the sun",
                          "lol",
                          "LOL!",
                          "Love love love",
                          "If you bounce up and down rly fast while u smoke its not bad 4 you",
                          "The bouncing counteracts disease x",
                          "this is so me",
                          "thanks for this",
                          "if you could go to space with like a 97% chance of death, would you?",
                          "amazing and original :) love you bro!",
                          "im your number one fan",
                          "That's so beautiful. Crazy!!",
                          "Beautiful!",
                          "Magnificent",
                          "~",
                          "IF YOU ARE A TRUE FAN OF THIS GUY FOLLOW MY LAGSTAGRAM FAN PAGE",
                          "LOOKING FABULOUS THERE",
                          "fuck who is she",
                          "The only person missing was me",
                          "<3",
                          "I want to see this in person",
                          "Cool as always :-D",
                          'This pic makes me hear "The Immigrant Song" by Led Zeppelin in my head...',
                          "I could stare at this all day",
                          "fk this is groovy af dude",
                          "deserves a 99.95",
                          "How cute is this",
                          "ROFL!",
                          "New number who's this?",
                          "Let me know if u want a job",
                          "This is sixk",
                          "Damnnn nice",
                          "This is great!",
                          "NEVER AGAIN",
                          "So pretty is this from ur phone?",
                          "This looks so nice",
                          "Omg inlove",
                          "HaHA Nice pIctURe, MAYbe you couLd try phOtOgraPhing a SUSTAINABLE caReer wITh a rEgUlaR incomE mMMm, YeA nah kiLLiing it hun HMM x :-)",
                          "So beautiful!",
                          "Model",
                          "I think I'm a bit obsessed really",
                          "You love skies don't you!",
                          "Wow",
                          "Follow back tq",
                          "Hello",
                          "I love you",
                          "Love u! come back to Brooklyn",
                          "hype hype hype",
                          "Wow so pretty",
                          "Absolutely beautiful",
                          "woah!!!",
                          "Nice",
                          "so gorgeous it hurts",
                          "Cool..",
                          "add me",
                          "Keep up the awesome work",
                          "interesting stuff",
                          "Thank you for that!",
                          "Cute cute cute queen slayer",
                          "Even though u are fake u are just perfect",
                          "Very nice photo.",
                          "Stunning",
                          "What a sight))))",
                          "Nice pic",
                          "Awesome :)",
                          "YOU'RE A MONSTER",
                          "this is a bit cute",
                          "Awesome profile",
                          "shiba inu is the doggie",
                          "You lil hottie",
                          "ugly",
                          "Love this!!!",
                          "Looks deep!",
                          "HOT",
                          "It's so beautiful there!",
                          "It's like a painting", "Your smile is contagious.", "You look great today.", "You're a smart cookie.", "I bet you make babies smile.", "You have impeccable manners.", "I like your style.", "You have the best laugh.", "I appreciate you.", "You are the most perfect you there is.", "You are enough.", "You're strong.", "Your perspective is refreshing.", "You're an awesome friend.", "You light up the room.", "You deserve a hug right now.", "You should be proud of yourself.", "You're more helpful than you realize.", "You have a great sense of humor.", "You've got all the right moves!", "Is that your picture next to 'charming' in the dictionary?", "Your kindness is a balm to all who encounter it.", "You're all that and a super-size bag of chips.", "On a scale from 1 to 10, you're an 11.", "You are brave.", "You're even more beautiful on the inside than you are on the outside.", "You have the courage of your convictions.", "Your eyes are breathtaking.", "If cartoon bluebirds were real, a bunch of them would be sitting on your shoulders singing right now.", "You are making a difference.", "You're like sunshine on a rainy day.", "You bring out the best in other people.", "Your ability to recall random factoids at just the right time is impressive.", "You're a great listener.", "How is it that you always look great, even in sweatpants?", "Everything would be better if more people were like you!", "I bet you sweat glitter.", "You were cool way before hipsters were cool.", "That color is perfect on you.", "Hanging out with you is always a blast.", "You always know -- and say -- exactly what I need to hear when I need to hear it.", "You smell really good.", "You may dance like no one's watching, but everyone's watching because you're an amazing dancer!", "Being around you makes everything better!", "When you say, 'I meant to do that,' I totally believe you.", "When you're not afraid to be yourself is when you're most incredible.", "Colors seem brighter when you're around.", "You're more fun than a ball pit filled with candy. (And seriously, what could be more fun than that?)", "That thing you don't like about yourself is what makes you so interesting.", "You're wonderful.", "You have cute elbows. For reals! ", "Jokes are funnier when you tell them.", "You're better than a triple-scoop ice cream cone. With sprinkles.", "Your bellybutton is kind of adorable.", "Your hair looks stunning.", "You're one of a kind!", "You're inspiring.", "If you were a box of crayons, you'd be the giant name-brand one with the built-in sharpener.", "You should be thanked more often. So thank you!!", "Our community is better because you're in it.", "Someone is getting through something hard right now because you've got their back. ", "You have the best ideas.", "You always know how to find that silver lining.", "Everyone gets knocked down sometimes, but you always get back up and keep going.", "You're a candle in the darkness.", "You're a great example to others.", "Being around you is like being on a happy little vacation.", "You always know just what to say.", "You're always learning new things and trying to better yourself, which is awesome.", "If someone based an Internet meme on you, it would have impeccable grammar.", "You could survive a Zombie apocalypse.", "You're more fun than bubble wrap.", "When you make a mistake, you fix it.", "Who raised you? They deserve a medal for a job well done.", "You're great at figuring stuff out.", "Your voice is magnificent.", "The people you love are lucky to have you in their lives.", "You're like a breath of fresh air.", "You're gorgeous -- and that's the least interesting thing about you, too.", "You're so thoughtful.", "Your creative potential seems limitless.", "Your name suits you to a T.", "You're irresistible when you blush.", "Actions speak louder than words, and yours tell an incredible story.", "Somehow you make time stop and fly at the same time.", "When you make up your mind about something, nothing stands in your way.", "You seem to really know who you are.", "Any team would be lucky to have you on it.", "In high school I bet you were voted 'most likely to keep being awesome.'", "I bet you do the crossword puzzle in ink.", "Babies and small animals probably love you.", "If you were a scented candle they'd call it Perfectly Imperfect (and it would smell like summer).", "There's ordinary, and then there's you.", "You're someone's reason to smile.", "You're even better than a unicorn, because you're real.", "How do you keep being so funny and making everyone laugh?", "You have a good head on your shoulders.", "Has anyone ever told you that you have great posture?", "The way you treasure your loved ones is incredible.", "You're really something special.", "You're a gift to those around you.", "Mirrors can’t talk, lucky for you they can’t laugh either.", "I don’t believe in plastic surgery, But in your case, Go ahead.", "People like you are the reason we have middle fingers.", "Why Don’t You Slip Into Something More Comfortable. Like A Coma?", "When your mom dropped you off at the school, she got a ticket for littering.", "Tell me… Is being stupid a profession or are you just gifted?", "Me pretending to listen should be enough for you.", "What’s the point of putting on makeup, a monkey is gonna stay a monkey.", "My mom says pigs don’t eat biscuits… So I better take that one out of your hand.", "No need for insults, your face says it all.", "Wow! You have a huge pimple in between your shoulders! Oh wait that’s your face.", "You’re so ugly that when you cry, the tears roll down the back of your head…just to avoid your face.", "Zombies eat brains. You’re safe.", "It’s not that you are weird…it’s just that everyone else is normal.", "It’s not that I’m smarter than you, its just that you’re dumber than everyone else.", "Scientists are trying to figure out how long human can live without a brain. You should tell them your age.", "Your intelligence is my common sense.", "Your age doesn’t lie. Neither does that face.", "You know most days when I look in a mirror I feel ugly, but when I look at you I feel lucky.", "Everyone has the right to be stupid, but you’re abusing the privilege.", "You’re so ugly, when you were born, the doctor was the one screaming instead of your mother.", "You’re so ugly, when you were born, your parents asked for a refund.", "You’re so ugly, when you were born, your parents sued the doctor.", "You’re so ugly, when you were born, the doctor said “Wheres the baby?”", "Act your age not your shoe size.", "Don’t you have a terrible empty feeling – in your skull?", "Do you want people to accept you as you are or do you want people to like you?", "Do you still love nature, despite what it did to you?", "You’re very beautiful, no doubt about that but I’ll still rate a monkey ahead of you.", "What would beauty be without ugliness? See, you are important!", "Lets play fetch a little differently! I’ll throw the stick and you don’t come back ;)", "Is that your face or did your neck throw up?", "Holy wow! it looks like your face caught fire and someone tried to put it out with a fork.", "I don’t hate you… I just don’t appreciate your existence."];

    var commentContent = commentContents[Math.floor(Math.random() * commentContents.length)];

    return commentContent;

}

//generate a username adj + noun
function generateUserName() {

    var adjectives = ["broad", "crooked", "curved", "deep", "even", "flat", "hilly", "jagged", "round", "shallow", "square", "steep", "straight", "thick", "thin", "triangular", "uneven", "average", "big", "fat", "gigantic", "huge", "large", "little", "long", "massive", "medium", "miniature", "narrow", "petite", "short", "skinny", "small", "tall", "tiny", "wide", "", "cooing", "deafening", "faint", "harsh", "high-pitched", "hissing", "hushed", "husky", "loud", "melodic", "moaning", "mute", "noisy", "purring", "quiet", "raspy", "screeching", "shrill", "silent", "soft", "squeaky", "squealing", "thundering", "voiceless", "whispering", "fast", "quick", "rapid", "slow", "swift", "bitter", "bland", "delicious", "different", "fresh", "greasy", "hot", "juicy", "repulsive", "revolting", "ripe", "rotten", "salty", "sour", "spicy", "stale", "strong", "sweet", "tasteless", "tasty", "terrible", "wonderful", "ancient", "brief", "early", "late", "long", "modern", "new", "old", "old-fashioned", "quick", "short", "young", "blunt", "boiling", "breakable", "breezy", "broken", "bumpy", "chilly", "clean", "cold", "cool", "crooked", "cuddly", "curly", "damaged", "damp", "different", "dirty", "dry", "dusty", "filthy", "flaky", "fluffy", "fuzzy", "greasy", "grubby", "hard", "icy", "loose", "plastic", "prickly", "ripe", "rough", "rubbery", "scratchy", "shaky", "shaggy", "sharp", "silky", "slimy", "slippery", "smooth", "soft", "solid", "steady", "sticky", "tight", "uneven", "unusual", "unripe", "warm", "weak", "wet", "wooden", "wooly", "afraid", "angry", "annoyed", "anxious", "arrogant", "ashamed", "awful", "bad", "bewildered", "bored", "concerned", "condemned", "confused", "creepy", "cruel", "dangerous", "defeated", "defiant", "depressed", "disgusted", "disturbed", "doubtful", "eerie", "embarrassed", "envious", "evil", "fierce", "foolish", "frantic", "frightened", "grieving", "guilty", "helpless", "hungry", "hurt", "ill", "jealous", "lonely", "mad", "naughty", "nervous", "obnoxious", "outrageous", "panicky", "repulsive", "safe", "scared", "shy", "sleepy", "sore", "strange", "tense", "terrible", "tired", "troubled", "unusual", "upset", "uptight", "weary", "wicked", "worried", "alright", "calm", "different", "fair", "fine", "OK", "pleasant", "puzzled", "agreeable", "alert", "amused", "brave", "bright", "charming", "cheerful", "comfortable", "cooperative", "courageous", "delightful", "determined", "eager", "elated", "enchanting", "encouraging", "energetic", "enthusiastic", "excited", "exuberant", "faithful", "fantastic", "friendly", "frowning", "funny", "gentle", "glorious", "good", "happy", "healthy", "helpful", "hilarious", "innocent", "jolly", "kind", "lively", "lovely", "lucky", "obedient", "perfect", "proud", "relaxed", "relieved", "silly", "smiling", "splendid", "successful", "thoughtful", "victorious", "vivacious", "well", "witty", "wonderful", "adorable", "alert", "average", "beautiful", "blonde", "bloody", "blushing", "bright", "clean", "clear", "cloudy", "colourful", "concerned", "crowded", "curious", "cute", "dark", "dirty", "drab", "distinct", "dull", "elegant", "fancy", "filthy", "glamorous", "gleaming", "graceful", "grotesque", "homely", "light", "misty", "motionless", "muddy", "plain", "poised", "quaint", "scary", "shiny", "smoggy", "sparkling", "spotless", "stormy", "strange", "ugly", "unsightly", "unusual", "alive", "brainy", "broken", "busy", "careful", "cautious", "clever", "crazy", "damaged", "dead", "difficult", "easy", "fake", "false", "famous", "forward", "fragile", "guilty", "helpful", "helpless", "important", "impossible", "infamous", "innocent", "inquisitive", "mad", "modern", "open", "outgoing", "outstanding", "poor", "powerful", "puzzled", "real", "rich", "right", "robust", "sane", "scary", "shy", "sleepy", "stupid", "super", "tame", "thick", "tired", "wild", "wrong", "abandoned", "able", "absolute", "adorable", "adventurous", "academic", "acceptable", "acclaimed", "accomplished", "accurate", "aching", "acidic", "acrobatic", "active", "actual", "adept", "admirable", "admired", "adolescent", "adorable", "adored", "advanced", "afraid", "affectionate", "aged", "aggravating", "aggressive", "agile", "agitated", "agonizing", "agreeable", "ajar", "alarmed", "alarming", "alert", "alienated", "alive", "all", "altruistic", "amazing", "ambitious", "ample", "amused", "amusing", "anchored", "ancient", "angelic", "angry", "anguished", "animated", "annual", "another", "antique", "anxious", "any", "apprehensive", "appropriate", "apt", "arctic", "arid", "aromatic", "artistic", "ashamed", "assured", "astonishing", "athletic", "attached", "attentive", "attractive", "austere", "authentic", "authorized", "automatic", "avaricious", "average", "aware", "awesome", "awful", "awkward", "babyish", "bad", "back", "baggy", "bare", "barren", "basic", "beautiful", "belated", "beloved", "beneficial", "better", "best", "bewitched", "big", "big-hearted", "biodegradable", "bite-sized", "bitter", "black", "black-and-white", "bland", "blank", "blaring", "bleak", "blind", "blissful", "blond", "blue", "blushing", "bogus", "boiling", "bold", "bony", "boring", "bossy", "both", "bouncy", "bountiful", "bowed", "brave", "breakable", "brief", "bright", "brilliant", "brisk", "broken", "bronze", "brown", "bruised", "bubbly", "bulky", "bumpy", "buoyant", "burdensome", "burly", "bustling", "busy", "buttery", "buzzing", "calculating", "calm", "candid", "canine", "capital", "carefree", "careful", "careless", "caring", "cautious", "cavernous", "celebrated", "charming", "cheap", "cheerful", "cheery", "chief", "chilly", "chubby", "circular", "classic", "clean", "clear", "clear-cut", "clever", "close", "closed", "cloudy", "clueless", "clumsy", "cluttered", "coarse", "cold", "colorful", "colorless", "colossal", "comfortable", "common", "compassionate", "competent", "complete", "complex", "complicated", "composed", "concerned", "concrete", "confused", "conscious", "considerate", "constant", "content", "conventional", "cooked", "cool", "cooperative", "coordinated", "corny", "corrupt", "costly", "courageous", "courteous", "crafty", "crazy", "creamy", "creative", "creepy", "criminal", "crisp", "critical", "crooked", "crowded", "cruel", "crushing", "cuddly", "cultivated", "cultured", "cumbersome", "curly", "curvy", "cute", "cylindrical", "damaged", "damp", "dangerous", "dapper", "daring", "darling", "dark", "dazzling", "dead", "deadly", "deafening", "dear", "dearest", "decent", "decimal", "decisive", "deep", "defenseless", "defensive", "defiant", "deficient", "definite", "definitive", "delayed", "delectable", "delicious", "delightful", "delirious", "demanding", "dense", "dental", "dependable", "dependent", "descriptive", "deserted", "detailed", "determined", "devoted", "different", "difficult", "digital", "diligent", "dim", "dimpled", "dimwitted", "direct", "disastrous", "discrete", "disfigured", "disgusting", "disloyal", "dismal", "distant", "downright", "dreary", "dirty", "disguised", "dishonest", "dismal", "distant", "distinct", "distorted", "dizzy", "dopey", "doting", "double", "downright", "drab", "drafty", "dramatic", "dreary", "droopy", "dry", "dual", "dull", "dutiful", "each", "eager", "earnest", "early", "easy", "easy-going", "ecstatic", "edible", "educated", "elaborate", "elastic", "elated", "elderly", "electric", "elegant", "elementary", "elliptical", "embarrassed", "embellished", "eminent", "emotional", "empty", "enchanted", "enchanting", "energetic", "enlightened", "enormous", "enraged", "entire", "envious", "equal", "equatorial", "essential", "esteemed", "ethical", "euphoric", "even", "evergreen", "everlasting", "every", "evil", "exalted", "excellent", "exemplary", "exhausted", "excitable", "excited", "exciting", "exotic", "expensive", "experienced", "expert", "extraneous", "extroverted", "extra-large", "extra-small", "fabulous", "failing", "faint", "fair", "faithful", "fake", "false", "familiar", "famous", "fancy", "fantastic", "far", "faraway", "far-flung", "far-off", "fast", "fat", "fatal", "fatherly", "favorable", "favorite", "fearful", "fearless", "feisty", "feline", "female", "feminine", "few", "fickle", "filthy", "fine", "finished", "firm", "first", "firsthand", "fitting", "fixed", "flaky", "flamboyant", "flashy", "flat", "flawed", "flawless", "flickering", "flimsy", "flippant", "flowery", "fluffy", "fluid", "flustered", "focused", "fond", "foolhardy", "foolish", "forceful", "forked", "formal", "forsaken", "forthright", "fortunate", "fragrant", "frail", "frank", "frayed", "free", "French", "fresh", "frequent", "friendly", "frightened", "frightening", "frigid", "frilly", "frizzy", "frivolous", "front", "frosty", "frozen", "frugal", "fruitful", "full", "fumbling", "functional", "funny", "fussy", "fuzzy", "gargantuan", "gaseous", "general", "generous", "gentle", "genuine", "giant", "giddy", "gigantic", "gifted", "giving", "glamorous", "glaring", "glass", "gleaming", "gleeful", "glistening", "glittering", "gloomy", "glorious", "glossy", "glum", "golden", "good", "good-natured", "gorgeous", "graceful", "gracious", "grand", "grandiose", "granular", "grateful", "grave", "gray", "great", "greedy", "green", "gregarious", "grim", "grimy", "gripping", "grizzled", "gross", "grotesque", "grouchy", "grounded", "growing", "growling", "grown", "grubby", "gruesome", "grumpy", "guilty", "gullible", "gummy", "hairy", "half", "handmade", "handsome", "handy", "happy", "happy-go-lucky", "hard", "hard-to-find", "harmful", "harmless", "harmonious", "harsh", "hasty", "hateful", "haunting", "healthy", "heartfelt", "hearty", "heavenly", "heavy", "hefty", "helpful", "helpless", "hidden", "hideous", "high", "high-level", "hilarious", "hoarse", "hollow", "homely", "honest", "honorable", "honored", "hopeful", "horrible", "hospitable", "hot", "huge", "humble", "humiliating", "humming", "humongous", "hungry", "hurtful", "husky", "icky", "icy", "ideal", "idealistic", "identical", "idle", "idiotic", "idolized", "ignorant", "ill", "illegal", "ill-fated", "ill-informed", "illiterate", "illustrious", "imaginary", "imaginative", "immaculate", "immaterial", "immediate", "immense", "impassioned", "impeccable", "impartial", "imperfect", "imperturbable", "impish", "impolite", "important", "impossible", "impractical", "impressionable", "impressive", "improbable", "impure", "inborn", "incomparable", "incompatible", "incomplete", "inconsequential", "incredible", "indelible", "inexperienced", "indolent", "infamous", "infantile", "infatuated", "inferior", "infinite", "informal", "innocent", "insecure", "insidious", "insignificant", "insistent", "instructive", "insubstantial", "intelligent", "intent", "intentional", "interesting", "internal", "international", "intrepid", "ironclad", "irresponsible", "irritating", "itchy", "jaded", "jagged", "jam-packed", "jaunty", "jealous", "jittery", "joint", "jolly", "jovial", "joyful", "joyous", "jubilant", "judicious", "juicy", "jumbo", "junior", "jumpy", "juvenile", "kaleidoscopic", "keen", "key", "kind", "kindhearted", "kindly", "klutzy", "knobby", "knotty", "knowledgeable", "knowing", "known", "kooky", "kosher", "lame", "lanky", "large", "last", "lasting", "late", "lavish", "lawful", "lazy", "leading", "lean", "leafy", "left", "legal", "legitimate", "light", "lighthearted", "likable", "likely", "limited", "limp", "limping", "linear", "lined", "liquid", "little", "live", "lively", "livid", "loathsome", "lone", "lonely", "long", "long-term", "loose", "lopsided", "lost", "loud", "lovable", "lovely", "loving", "low", "loyal", "lucky", "lumbering", "luminous", "lumpy", "lustrous", "luxurious", "mad", "made-up", "magnificent", "majestic", "major", "male", "mammoth", "married", "marvelous", "masculine", "massive", "mature", "meager", "mealy", "mean", "measly", "meaty", "medical", "mediocre", "medium", "meek", "mellow", "melodic", "memorable", "menacing", "merry", "messy", "metallic", "mild", "milky", "mindless", "miniature", "minor", "minty", "miserable", "miserly", "misguided", "misty", "mixed", "modern", "modest", "moist", "monstrous", "monthly", "monumental", "moral", "mortified", "motherly", "motionless", "mountainous", "muddy", "muffled", "multicolored", "mundane", "murky", "mushy", "musty", "muted", "mysterious", "naive", "narrow", "nasty", "natural", "naughty", "nautical", "near", "neat", "necessary", "needy", "negative", "neglected", "negligible", "neighboring", "nervous", "new", "next", "nice", "nifty", "nimble", "nippy", "nocturnal", "noisy", "nonstop", "normal", "notable", "noted", "noteworthy", "novel", "noxious", "numb", "nutritious", "nutty", "obedient", "obese", "oblong", "oily", "oblong", "obvious", "occasional", "odd", "oddball", "offbeat", "offensive", "official", "old", "old-fashioned", "only", "open", "optimal", "optimistic", "opulent", "orange", "orderly", "organic", "ornate", "ornery", "ordinary", "original", "other", "our", "outlying", "outgoing", "outlandish", "outrageous", "outstanding", "oval", "overcooked", "overdue", "overjoyed", "overlooked", "palatable", "pale", "paltry", "parallel", "parched", "partial", "passionate", "past", "pastel", "peaceful", "peppery", "perfect", "perfumed", "periodic", "perky", "personal", "pertinent", "pesky", "pessimistic", "petty", "phony", "physical", "piercing", "pink", "pitiful", "plain", "plaintive", "plastic", "playful", "pleasant", "pleased", "pleasing", "plump", "plush", "polished", "polite", "political", "pointed", "pointless", "poised", "poor", "popular", "portly", "posh", "positive", "possible", "potable", "powerful", "powerless", "practical", "precious", "present", "prestigious", "pretty", "precious", "previous", "pricey", "prickly", "primary", "prime", "pristine", "private", "prize", "probable", "productive", "profitable", "profuse", "proper", "proud", "prudent", "punctual", "pungent", "puny", "pure", "purple", "pushy", "putrid", "puzzled", "puzzling", "quaint", "qualified", "quarrelsome", "quarterly", "queasy", "querulous", "questionable", "quick", "quick-witted", "quiet", "quintessential", "quirky", "quixotic", "quizzical", "radiant", "ragged", "rapid", "rare", "rash", "raw", "recent", "reckless", "rectangular", "ready", "real", "realistic", "reasonable", "red", "reflecting", "regal", "regular", "reliable", "relieved", "remarkable", "remorseful", "remote", "repentant", "required", "respectful", "responsible", "repulsive", "revolving", "rewarding", "rich", "rigid", "right", "ringed", "ripe", "roasted", "robust", "rosy", "rotating", "rotten", "rough", "round", "rowdy", "royal", "rubbery", "rundown", "ruddy", "rude", "runny", "rural", "rusty", "sad", "safe", "salty", "same", "sandy", "sane", "sarcastic", "sardonic", "satisfied", "scaly", "scarce", "scared", "scary", "scented", "scholarly", "scientific", "scornful", "scratchy", "scrawny", "second", "secondary", "second-hand", "secret", "self-assured", "self-reliant", "selfish", "sentimental", "separate", "serene", "serious", "serpentine", "several", "severe", "shabby", "shadowy", "shady", "shallow", "shameful", "shameless", "sharp", "shimmering", "shiny", "shocked", "shocking", "shoddy", "short", "short-term", "showy", "shrill", "shy", "sick", "silent", "silky", "silly", "silver", "similar", "simple", "simplistic", "sinful", "single", "sizzling", "skeletal", "skinny", "sleepy", "slight", "slim", "slimy", "slippery", "slow", "slushy", "small", "smart", "smoggy", "smooth", "smug", "snappy", "snarling", "sneaky", "sniveling", "snoopy", "sociable", "soft", "soggy", "solid", "somber", "some", "spherical", "sophisticated", "sore", "sorrowful", "soulful", "soupy", "sour", "Spanish", "sparkling", "sparse", "specific", "spectacular", "speedy", "spicy", "spiffy", "spirited", "spiteful", "splendid", "spotless", "spotted", "spry", "square", "squeaky", "squiggly", "stable", "staid", "stained", "stale", "standard", "starchy", "stark", "starry", "steep", "sticky", "stiff", "stimulating", "stingy", "stormy", "straight", "strange", "steel", "strict", "strident", "striking", "striped", "strong", "studious", "stunning", "stupendous", "stupid", "sturdy", "stylish", "subdued", "submissive", "substantial", "subtle", "suburban", "sudden", "sugary", "sunny", "super", "superb", "superficial", "superior", "supportive", "sure-footed", "surprised", "suspicious", "svelte", "sweaty", "sweet", "sweltering", "swift", "sympathetic", "tall", "talkative", "tame", "tan", "tangible", "tart", "tasty", "tattered", "taut", "tedious", "teeming", "tempting", "tender", "tense", "tepid", "terrible", "terrific", "testy", "thankful", "that", "these", "thick", "thin", "third", "thirsty", "this", "thorough", "thorny", "those", "thoughtful", "threadbare", "thrifty", "thunderous", "tidy", "tight", "timely", "tinted", "tiny", "tired", "torn", "total", "tough", "traumatic", "treasured", "tremendous", "tragic", "trained", "tremendous", "triangular", "tricky", "trifling", "trim", "trivial", "troubled", "true", "trusting", "trustworthy", "trusty", "truthful", "tubby", "turbulent", "twin", "ugly", "ultimate", "unacceptable", "unaware", "uncomfortable", "uncommon", "unconscious", "understated", "unequaled", "uneven", "unfinished", "unfit", "unfolded", "unfortunate", "unhappy", "unhealthy", "uniform", "unimportant", "unique", "united", "unkempt", "unknown", "unlawful", "unlined", "unlucky", "unnatural", "unpleasant", "unrealistic", "unripe", "unruly", "unselfish", "unsightly", "unsteady", "unsung", "untidy", "untimely", "untried", "untrue", "unused", "unusual", "unwelcome", "unwieldy", "unwilling", "unwitting", "unwritten", "upbeat", "upright", "upset", "urban", "usable", "used", "useful", "useless", "utilized", "utter", "vacant", "vague", "vain", "valid", "valuable", "vapid", "variable", "vast", "velvety", "venerated", "vengeful", "verifiable", "vibrant", "vicious", "victorious", "vigilant", "vigorous", "villainous", "violet", "violent", "virtual", "virtuous", "visible", "vital", "vivacious", "vivid", "voluminous", "wan", "warlike", "warm", "warmhearted", "warped", "wary", "wasteful", "watchful", "waterlogged", "watery", "wavy", "wealthy", "weak", "weary", "webbed", "wee", "weekly", "weepy", "weighty", "weird", "welcome", "well-documented", "well-groomed", "well-informed", "well-lit", "well-made", "well-off", "well-to-do", "well-worn", "wet", "which", "whimsical", "whirlwind", "whispered", "white", "whole", "whopping", "wicked", "wide", "wide-eyed", "wiggly", "wild", "willing", "wilted", "winding", "windy", "winged", "wiry", "wise", "witty", "wobbly", "woeful", "wonderful", "wooden", "woozy", "wordy", "worldly", "worn", "worried", "worrisome", "worse", "worst", "worthless", "worthwhile", "worthy", "wrathful", "wretched", "writhing", "wrong", "wry", "yawning", "yearly", "yellow", "yellowish", "young", "youthful", "yummy", "zany", "zealous", "zesty", "zigzag"];

    var nouns = ["aardvark", "abacus", "abbey", "abdomen", "abolishment", "abroad", "abyssinian", "accelerant", "accelerator", "accompanist", "accordion", "account", "accountant", "achieve", "achiever", "acid", "acknowledgment", "acoustic", "acoustics", "acrylic", "act", "action", "active", "activity", "actor", "actress", "acupuncture", "adapter", "addiction", "addition", "address", "adjustment", "administration", "adrenalin", "adult", "advancement", "advantage", "advertisement", "advertising", "advice", "affair", "affect", "afghanistan", "africa", "aftermath", "afternoon", "aftershave", "aftershock", "afterthought", "age", "agency", "agenda", "agent", "aglet", "agreement", "air", "airbag", "airbus", "airfare", "airforce", "airline", "airmail", "airplane", "airport", "airship", "alarm", "alb", "albatross", "alcohol", "alcove", "alder", "algebra", "algeria", "alibi", "allergist", "alley", "alligator", "alloy", "almanac", "almond", "alpaca", "alpenglow", "alpenhorn", "alpha", "alphabet", "alternative", "altitude", "alto", "aluminium", "aluminum", "ambassador", "ambulance", "amendment", "america", "amount", "amusement", "anagram", "analgesia", "analog", "analysis", "analyst", "anatomy", "anesthesiology", "anethesiologist", "anger", "angiosperm", "angle", "angora", "angstrom", "anguish", "animal", "anime", "ankle", "anklet", "annual", "anorak", "answer", "ant", "antarctica", "anteater", "antechamber", "antelope", "anthony", "anthropology", "antler", "anybody", "anything", "anywhere", "apartment", "ape", "aperitif", "apology", "apparatus", "apparel", "appeal", "appendix", "apple", "applewood", "appliance", "approval", "april", "apron", "apse", "aquarius", "aquifer", "arch", "archaeology", "archeology", "archer", "architect", "architecture", "arch-rival", "area", "argentina", "argument", "aries", "arithmetic", "arm", "armadillo", "armament", "armchair", "armenian", "armoire", "armor", "arm-rest", "army", "arrival", "arrow", "art", "artichoke", "artificer", "ascot", "ash", "ashram", "ashtray", "asia", "asparagus", "asphalt", "assignment", "assistance", "associate", "association", "asterisk", "astrakhan", "astrolabe", "astrologer", "astrology", "astronomy", "atelier", "athelete", "athlete", "atm", "atmosphere", "atom", "atrium", "attachment", "attack", "attempt", "attendant", "attention", "attenuation", "attic", "attitude", "attorney", "attraction", "audience", "auditorium", "august", "aunt", "australia", "australian", "author", "authorisation", "authority", "authorization", "automaton", "avalanche", "avenue", "average", "azimuth", "babe", "babies", "baboon", "babushka", "baby", "back", "backbone", "backdrop", "backpack", "bacon", "bad", "badge", "badger", "bafflement", "bag", "bagel", "bagpipe", "bagpipes", "bail", "bait", "bake", "baker", "bakery", "bakeware", "balaclava", "balalaika", "balance", "balcony", "balinese", "ball", "balloon", "ballpark", "bamboo", "banana", "band", "bandana", "bandanna", "bandolier", "bangladesh", "bangle", "banjo", "bank", "bankbook", "banker", "banquette", "baobab", "bar", "barbara", "barbeque", "barber", "barbiturate", "barge", "baritone", "barium", "barn", "barometer", "barracks", "barstool", "base", "baseball", "basement", "basin", "basis", "basket", "basketball", "bass", "bassinet", "bassoon", "bat", "bath", "bather", "bathhouse", "bathrobe", "bathroom", "bathtub", "batter", "battery", "batting", "battle", "battleship", "bay", "bayou", "beach", "bead", "beak", "beam", "bean", "beanie", "beanstalk", "bear", "beard", "beast", "beat", "beautician", "beauty", "beaver", "bed", "bedroom", "bee", "beech", "beef", "beer", "beet", "beetle", "beggar", "beginner", "begonia", "behavior", "beheading", "behest", "belfry", "belgian", "belief", "believe", "bell", "belligerency", "bellows", "belly", "belt", "bench", "bend", "beneficiary", "benefit", "bengal", "beret", "berry", "bestseller", "best-seller", "betty", "beverage", "beyond", "bibliography", "bicycle", "bid", "bidet", "bifocals", "big", "big-rig", "bijou", "bike", "bikini", "bill", "billboard", "bin", "biology", "biplane", "birch", "bird", "birdbath", "birdcage", "birdhouse", "bird-watcher", "birth", "birthday", "bit", "bite", "black", "blackberry", "blackboard", "blackfish", "bladder", "blade", "blame", "blank", "blanket", "blazer", "blight", "blinker", "blister", "blizzard", "block", "blocker", "blood", "bloodflow", "bloom", "bloomers", "blossom", "blouse", "blow", "blowgun", "blowhole", "blue", "blueberry", "boar", "board", "boat", "boat-building", "boatload", "boatyard", "bobcat", "body", "bog", "bolero", "bolt", "bomb", "bomber", "bondsman", "bone", "bongo", "bonnet", "bonsai", "bonus", "boogeyman", "book", "bookcase", "bookend", "booklet", "booster", "boot", "bootee", "bootie", "boots", "booty", "border", "bore", "bosom", "botany", "bottle", "bottling", "bottom", "bottom-line", "boudoir", "bough", "boundary", "bow", "bower", "bowl", "bowler", "bowling", "bowtie", "box", "boxer", "boxspring", "boy", "bra", "brace", "bracelet", "bracket", "brain", "brake", "branch", "brand", "brandy", "brass", "brassiere", "bratwurst", "brazil", "bread", "breadcrumb", "break", "breakfast", "breakpoint", "breast", "breastplate", "breath", "breeze", "brian", "bribery", "brick", "bricklaying", "bridge", "brief", "briefs", "brilliant", "british", "broccoli", "brochure", "broiler", "broker", "brome", "bronchitis", "bronco", "bronze", "brooch", "brood", "brook", "broom", "brother", "brother-in-law", "brow", "brown", "brush", "brushfire", "brushing", "bubble", "bucket", "buckle", "bud", "budget", "buffer", "buffet", "bug", "buggy", "bugle", "building", "bulb", "bull", "bulldozer", "bullet", "bull-fighter", "bumper", "bun", "bunch", "bungalow", "bunghole", "bunkhouse", "burglar", "burlesque", "burma", "burn", "burn-out", "burst", "bus", "bush", "business", "bust", "bustle", "butane", "butcher", "butter", "button", "buy", "buyer", "buzzard", "cabana", "cabbage", "cabin", "cabinet", "cable", "caboose", "cacao", "cactus", "caddy", "cadet", "cafe", "caftan", "cake", "calcification", "calculation", "calculator", "calculus", "calendar", "calf", "calico", "call", "calm", "camel", "cameo", "camera", "camp", "campaign", "campanile", "can", "canada", "canadian", "canal", "cancel", "cancer", "candelabra", "candidate", "candle", "candy", "cane", "cannon", "canoe", "canon", "canopy", "canteen", "canvas", "cap", "cape", "capital", "capitulation", "capon", "cappelletti", "cappuccino", "capricorn", "captain", "caption", "car", "caravan", "carbon", "card", "cardboard", "cardigan", "care", "cargo", "carload", "carnation", "carol", "carotene", "carp", "carpenter", "carpet", "carport", "carriage", "carrier", "carrot", "carry", "cart", "cartilage", "cartload", "cartoon", "cartridge", "cascade", "case", "casement", "cash", "cashier", "casino", "casserole", "cassock", "cast", "castanet", "castanets", "castle", "cat", "catacomb", "catamaran", "category", "caterpillar", "cathedral", "catsup", "cattle", "cauliflower", "cause", "caution", "cave", "c-clamp", "cd", "ceiling", "celebration", "celeriac", "celery", "celeste", "cell", "cellar", "cello", "celsius", "cement", "cemetery", "cenotaph", "census", "cent", "centenarian", "center", "centimeter", "centurion", "century", "cephalopod", "ceramic", "cereal", "certification", "cesspool", "chador", "chafe", "chain", "chainstay", "chair", "chairlift", "chairman", "chairperson", "chairwoman", "chaise", "chalet", "chalice", "chalk", "champion", "chance", "chandelier", "change", "channel", "chap", "chapel", "character", "chard", "charge", "charity", "charlatan", "charles", "charm", "chart", "chastity", "chasuble", "chateau", "chauffeur", "chauvinist", "check", "checkroom", "cheek", "cheese", "cheetah", "chef", "chemistry", "cheque", "cherries", "cherry", "chess", "chest", "chick", "chicken", "chicory", "chief", "chiffonier", "child", "childhood", "children", "chill", "chime", "chimpanzee", "chin", "china", "chinese", "chino", "chipmunk", "chit-chat", "chivalry", "chive", "chocolate", "choice", "choker", "chop", "chopstick", "chord", "chowder", "christmas", "christopher", "chrome", "chromolithograph", "chronograph", "chronometer", "chub", "chug", "church", "churn", "cicada", "cinema", "circle", "circulation", "circumference", "cirrus", "citizenship", "city", "civilisation", "clam", "clank", "clapboard", "clarinet", "clasp", "class", "claus", "clave", "clavicle", "clavier", "cleaner", "cleat", "cleavage", "clef", "cleric", "clerk", "click", "client", "cliff", "climb", "clip", "clipper", "cloak", "cloakroom", "clock", "clockwork", "clogs", "cloister", "close", "closet", "cloth", "clothes", "clothing", "cloud", "cloudburst", "cloudy", "clove", "clover", "club", "clutch", "coach", "coal", "coast", "coat", "cob", "cobweb", "cockpit", "cockroach", "cocktail", "cocoa", "cod", "codon", "codpiece", "coevolution", "coffee", "coffin", "coil", "coin", "coinsurance", "coke", "cold", "coliseum", "collar", "collection", "college", "collision", "colloquia", "colombia", "colon", "colonisation", "colony", "color", "colt", "column", "columnist", "comb", "combat", "combination", "comfort", "comfortable", "comic", "comma", "command", "commercial", "commission", "committee", "communicant", "communication", "community", "company", "comparison", "competition", "competitor", "complement", "complex", "component", "comportment", "composer", "composition", "compost", "compulsion", "computer", "comradeship", "concert", "concrete", "condition", "condominium", "condor", "conductor", "cone", "confectionery", "conference", "confidence", "confirmation", "conflict", "conga", "congo", "congressman", "congressperson", "congresswoman", "conifer", "connection", "consent", "consequence", "console", "consonant", "conspirator", "constant", "constellation", "construction", "consul", "consulate", "contact lens", "contagion", "contest", "context", "continent", "contract", "contrail", "contrary", "contribution", "control", "convection", "convert", "convertible", "cook", "cookie", "cooking", "coonskin", "cope", "cop-out", "copper", "co-producer", "copy", "copyright", "copywriter", "cord", "corduroy", "cork", "cormorant", "corn", "cornerstone", "cornet", "corral", "correspondent", "corridor", "corsage", "cost", "costume", "cot", "cottage", "cotton", "couch", "cougar", "cough", "council", "councilman", "councilor", "councilperson", "councilwoman", "counter", "counter-force", "countess", "country", "couple", "courage", "course", "court", "cousin", "covariate", "cover", "coverall", "cow", "cowbell", "cowboy", "crab", "crack", "cracker", "crackers", "cradle", "craftsman", "crash", "crate", "cravat", "craw", "crawdad", "crayfish", "crayon", "cream", "creative", "creator", "creature", "creche", "credenza", "credit", "creditor", "creek", "creme brulee", "crest", "crew", "crib", "cribbage", "cricket", "cricketer", "crime", "criminal", "crinoline", "criteria", "criterion", "criticism", "crocodile", "crocus", "croissant", "crook", "crop", "cross", "cross-contamination", "cross-stitch", "crotch", "croup", "crow", "crowd", "crown", "crude", "crush", "cry", "crystallography", "cub", "cuban", "cuckoo", "cucumber", "cuff-links", "cultivar", "cultivator", "culture", "culvert", "cummerbund", "cup", "cupboard", "cupcake", "cupola", "curio", "curl", "curler", "currency", "current", "cursor", "curtain", "curve", "cushion", "custard", "custodian", "customer", "cut", "cuticle", "cutlet", "cutover", "cutting", "cyclamen", "cycle", "cyclone", "cylinder", "cymbal", "cymbals", "cynic", "cyst", "cytoplasm", "dad", "daffodil", "dagger", "dahlia", "daisy", "damage", "dame", "dance", "dancer", "danger", "daniel", "dark", "dart", "dash", "dashboard", "database", "date", "daughter", "david", "day", "daybed", "dead", "deadline", "deal", "dealer", "dear", "death", "deathwatch", "deborah", "debt", "debtor", "decade", "december", "decimal", "decision", "deck", "declination", "decongestant", "decrease", "decryption", "dedication", "deer", "defense", "deficit", "deformation", "degree", "delete", "delivery", "demand", "demur", "den", "denim", "dentist", "deodorant", "department", "dependent", "deployment", "deposit", "depressive", "depth", "deputy", "derby", "derrick", "description", "desert", "design", "designer", "desire", "desk", "dessert", "destiny", "destroyer", "destruction", "detail", "detainment", "detective", "detention", "determination", "development", "deviance", "dew", "dhow", "diadem", "diamond", "diaphragm", "diarist", "dibble", "dickey", "dictaphone", "diction", "dictionary", "diet", "dietician", "difference", "differential", "difficulty", "digestion", "digger", "digital", "dilapidation", "dill", "dime", "dimension", "dimple", "diner", "dinghy", "dinner", "dinosaur", "diploma", "dipstick", "direction", "director", "dirndl", "dirt", "disadvantage", "disarmament", "disaster", "disco", "disconnection", "discount", "discovery", "discrepancy", "discussion", "disease", "disembodiment", "disengagement", "disguise", "disgust", "dish", "dishes", "dishwasher", "disk", "display", "disposer", "distance", "distribution", "distributor", "district", "divan", "diver", "divide", "divider", "diving", "division", "dock", "doctor", "document", "doe", "dog", "dogsled", "dogwood", "doll", "dollar", "dolman", "dolphin", "domain", "donald", "donkey", "donna", "door", "doorknob", "doorpost", "dorothy", "dory", "dot", "double", "doubling", "doubt", "doubter", "downforce", "downgrade", "downtown", "draft", "dragon", "dragonfly", "dragster", "drain", "drake", "drama", "dramaturge", "draw", "drawbridge", "drawer", "drawing", "dream", "dredger", "dress", "dresser", "dressing", "drill", "drink", "drive", "driver", "driveway", "driving", "drizzle", "dromedary", "drop", "drug", "drum", "drummer", "drunk", "dry", "dryer", "duck", "duckling", "dud", "duffel", "dugout", "dulcimer", "dumbwaiter", "dump truck", "dune buggy", "dungarees", "dungeon", "duplexer", "dust", "dust storm", "duster", "duty", "dwarf", "dwelling", "dynamo", "eagle", "ear", "eardrum", "earmuffs", "earplug", "earrings", "earth", "earthquake", "earthworm", "ease", "easel", "east", "eave", "eavesdropper", "e-book", "ecclesia", "eclipse", "ecliptic", "economics", "ecumenist", "eddy", "edge", "edger", "editor", "editorial", "education", "edward", "eel", "effacement", "effect", "effective", "efficacy", "efficiency", "effort", "egg", "egghead", "eggnog", "eggplant", "egypt", "eight", "ejector", "elbow", "election", "electrocardiogram", "element", "elephant", "elevator", "elixir", "elizabeth", "elk", "ellipse", "elm", "elongation", "embossing", "emergence", "emergent", "emery", "emotion", "employ", "employee", "employer", "employment", "empowerment", "emu", "encirclement", "encyclopedia", "end", "endothelium", "enemy", "energy", "engine", "engineer", "engineering", "english", "enigma", "enquiry", "entertainment", "entrance", "entry", "environment", "epauliere", "epee", "ephemera", "ephemeris", "epoch", "eponym", "epoxy", "equinox", "equipment", "era", "e-reader", "error", "escape", "espadrille", "espalier", "establishment", "estate", "estimate", "estrogen", "estuary", "ethernet", "ethiopia", "euphonium", "eurocentrism", "europe", "evaluator", "evening", "evening-wear", "event", "eviction", "evidence", "evocation", "examination", "examiner", "example", "exchange", "exclamation", "excuse", "executor", "exhaust", "ex-husband", "exile", "existence", "exit", "expansion", "expansionism", "experience", "expert", "explanation", "exposition", "extension", "extent", "extreme", "ex-wife", "eye", "eyeball", "eyebrow", "eyebrows", "eyeglasses", "eyelash", "eyelashes", "eyelid", "eyelids", "eyeliner", "eyestrain", "face", "facelift", "facet", "facilities", "facsimile", "fact", "factor", "factory", "faculty", "fahrenheit", "fairies", "fairy", "fall", "falling-out", "familiar", "family", "fan", "fang", "fanlight", "fanny", "fanny-pack", "farm", "farmer", "fascia", "fat", "father", "father-in-law", "fatigues", "faucet", "fault", "fawn", "fax", "fear", "feast", "feather", "feature", "february", "fedelini", "fedora", "feed", "feedback", "feeling", "feet", "felony", "female", "fen", "fence", "fencing", "fender", "ferry", "ferryboat", "fertilizer", "few", "fiber", "fiberglass", "fibre", "fiction", "fiddle", "field", "fifth", "fight", "fighter", "figurine", "file", "fill", "filly", "filth", "final", "finance", "find", "fine", "finger", "fingernail", "finisher", "fir", "fire", "fireman", "fireplace", "firewall", "fish", "fishbone", "fisherman", "fishery", "fishmonger", "fishnet", "fisting", "fix", "fixture", "flag", "flame", "flanker", "flare", "flash", "flat", "flatboat", "flavor", "flax", "fleck", "fleece", "flesh", "flight", "flintlock", "flip-flops", "flock", "flood", "floor", "floozie", "flower", "flu", "flugelhorn", "fluke", "flute", "fly", "flytrap", "foam", "fob", "focus", "fog", "fold", "folder", "fondue", "font", "food", "foot", "football", "footnote", "footrest", "foot-rest", "footstool", "foray", "force", "forearm", "forebear", "forecast", "forehead", "forest", "forestry", "forgery", "fork", "form", "formal", "format", "former", "fort", "fortnight", "fortress", "forum", "foundation", "fountain", "fowl", "fox", "foxglove", "fragrance", "frame", "france", "fratricide", "fraudster", "frazzle", "freckle", "freeplay", "freeze", "freezer", "freight", "freighter", "french", "freon", "fresco", "friction", "friday", "fridge", "friend", "friendship", "frigate", "fringe", "frock", "frog", "front", "frost", "frown", "fruit", "frustration", "fuel", "fulfillment", "full", "function", "fundraising", "funny", "fur", "furnace", "furniture", "fusarium", "futon", "future", "gaffer", "gaiters", "gale", "gall-bladder", "galleon", "gallery", "galley", "gallon", "galoshes", "game", "gamebird", "gamma-ray", "gander", "gap", "garage", "garb", "garbage", "garden", "garlic", "garment", "garter", "gas", "gasoline", "gastropod", "gate", "gateway", "gather", "gauge", "gauntlet", "gazebo", "gazelle", "gear", "gearshift", "geese", "gelding", "gem", "gemini", "gemsbok", "gender", "gene", "general", "genetics", "geography", "geology", "geometry", "george", "geranium", "gerbil", "geriatrician", "german", "germany", "geyser", "ghana", "gherkin", "ghost", "giant", "gigantism", "ginseng", "giraffe", "girdle", "girl", "git", "glad", "gladiolus", "gland", "glass", "glasses", "glen", "glider", "gliding", "glockenspiel", "glove", "gloves", "glue", "glut", "goal", "goat", "gobbler", "godmother", "goggles", "go-kart", "gold", "goldfish", "golf", "gondola", "gong", "good", "goodbye", "good-bye", "goodie", "goose", "gopher", "gore-tex", "gorilla", "gosling", "governance", "government", "governor", "gown", "grab-bag", "grade", "grain", "gram", "granddaughter", "grandfather", "grandmom", "grandmother", "grandson", "granny", "grape", "grapefruit", "graph", "graphic", "grass", "grasshopper", "grassland", "gray", "grease", "great", "great-grandfather", "great-grandmother", "greece", "greek", "green", "greenhouse", "grenade", "grey", "grief", "grill", "grip", "grit", "ground", "group", "grouper", "grouse", "growth", "guarantee", "guatemalan", "guest", "guestbook", "guide", "guilty", "guitar", "guitarist", "gum", "gumshoes", "gun", "gutter", "guy", "gym", "gymnast", "gynaecology", "gyro", "hacienda", "hacksaw", "hackwork", "hail", "hair", "haircut", "half", "half-brother", "half-sister", "halibut", "hall", "hallway", "hamaki", "hamburger", "hammer", "hammock", "hamster", "hand", "handball", "hand-holding", "handicap", "handle", "handlebar", "handmaiden", "handsaw", "hang", "harbor", "harbour", "hardboard", "hardcover", "hardening", "hardhat", "hard-hat", "hardware", "harm", "harmonica", "harmony", "harp", "harpooner", "harpsichord", "hassock", "hat", "hatbox", "hatchet", "hate", "haunt", "haversack", "hawk", "hay", "head", "headlight", "headline", "headrest", "health", "hearing", "heart", "heartache", "hearth", "hearthside", "heart-throb", "heartwood", "heat", "heater", "heaven", "heavy", "hedge", "hedgehog", "heel", "height", "heirloom", "helen", "helicopter", "helium", "hell", "hellcat", "helmet", "helo", "help", "hemp", "hen", "herb", "heron", "herring", "hexagon", "heyday", "hide", "high", "highlight", "high-rise", "highway", "hill", "himalayan", "hip", "hippodrome", "hippopotamus", "historian", "history", "hit", "hive", "hobbies", "hobbit", "hobby", "hockey", "hoe", "hog", "hold", "hole", "holiday", "home", "homogenate", "homonym", "honey", "honeybee", "honoree", "hood", "hoof", "hook", "hope", "hops", "horn", "hornet", "horse", "hose", "hosiery", "hospice", "hospital", "host", "hostel", "hostess", "hot", "hot-dog", "hotel", "hour", "hourglass", "house", "houseboat", "hovel", "hovercraft", "howitzer", "hub", "hubcap", "hugger", "human", "humidity", "humor", "hunger", "hurdler", "hurricane", "hurry", "hurt", "husband", "hut", "hutch", "hyacinth", "hybridisation", "hydrant", "hydraulics", "hydrofoil", "hydrogen", "hyena", "hygienic", "hyphenation", "hypochondria", "hypothermia", "ice", "icebreaker", "icecream", "ice-cream", "icicle", "icon", "idea", "ideal", "igloo", "ikebana", "illegal", "image", "imagination", "impact", "implement", "importance", "impress", "imprisonment", "improvement", "impudence", "impulse", "inbox", "incandescence", "inch", "income", "increase", "independent", "index", "india", "indigence", "indonesia", "industry", "infancy", "inflammation", "inflation", "information", "infusion", "inglenook", "ingrate", "initial", "initiative", "in-joke", "injury", "ink", "in-laws", "inlay", "inn", "innervation", "innocent", "input", "inquiry", "inscription", "insect", "inside", "insolence", "inspector", "instruction", "instrument", "instrumentalist", "instrumentation", "insulation", "insurance", "insurgence", "intelligence", "intention", "interactive", "interest", "interferometer", "interior", "interloper", "internal", "internet", "interpreter", "intervenor", "interview", "interviewer", "intestine", "intestines", "invention", "inventor", "inventory", "invite", "invoice", "iPad", "iran", "iraq", "iridescence", "iris", "iron", "ironclad", "island", "israel", "issue", "italian", "italy", "jackal", "jacket", "jaguar", "jail", "jailhouse", "jam", "james", "january", "japan", "japanese", "jar", "jasmine", "jason", "jaw", "jeans", "jeep", "jeff", "jelly", "jellyfish", "jennifer", "jet", "jewel", "jewelry", "jiffy", "job", "jockey", "jodhpurs", "joey", "jogging", "john", "join", "joke", "joseph", "jot", "journey", "judge", "judo", "juggernaut", "juice", "july", "jumbo", "jump", "jumper", "jumpsuit", "june", "junior", "junk", "junker", "junket", "jury", "justice", "jute", "kale", "kamikaze", "kangaroo", "karate", "karen", "kayak", "kazoo", "kendo", "kenneth", "kenya", "ketch", "ketchup", "kettle", "kettledrum", "kevin", "key", "keyboard", "keyboarding", "keystone", "kick", "kick-off", "kid", "kidney", "kidneys", "kielbasa", "kill", "kilogram", "kilometer", "kilt", "kimberly", "kimono", "kind", "king", "kingfish", "kiosk", "kiss", "kitchen", "kite", "kitten", "kitty", "kleenex", "klomps", "knee", "kneejerk", "knickers", "knife", "knife-edge", "knight", "knitting", "knot", "knowledge", "knuckle", "koala", "kohlrabi", "korean", "lab", "laborer", "lace", "lacquerware", "ladder", "ladybug", "lake", "lamb", "lamp", "lan", "lanai", "land", "landform", "landmine", "language", "lantern", "lap", "laparoscope", "lapdog", "laptop", "larch", "larder", "lark", "laryngitis", "lasagna", "latency", "latex", "lathe", "latte", "laugh", "laundry", "laura", "law", "lawn", "lawsuit", "lawyer", "layer", "lead", "leader", "leaf", "league", "leaker", "learning", "leash", "leather", "leaver", "lecture", "leek", "leg", "legal", "legging", "legume", "lei", "lemon", "lemonade", "lemur", "length", "lentil", "leo", "leopard", "leotard", "leprosy", "let", "letter", "lettuce", "level", "lever", "leverage", "libra", "librarian", "library", "license", "lier", "life", "lift", "light", "lighting", "lightning", "lilac", "lily", "limit", "limo", "line", "linen", "liner", "link", "linseed", "lion", "lip", "lipstick", "liquid", "liquor", "lisa", "list", "literature", "litigation", "litter", "liver", "living", "lizard", "llama", "loaf", "loafer", "loan", "lobotomy", "lobster", "lock", "locker", "locket", "locomotive", "locust", "loft", "log", "loggia", "loincloth", "look", "loss", "lot", "lotion", "lounge", "lout", "love", "low", "loyalty", "luck", "luggage", "lumber", "lumberman", "lunch", "luncheonette", "lunchroom", "lung", "lunge", "lute", "luttuce", "lycra", "lye", "lymphocyte", "lynx", "lyocell", "lyre", "lyric", "macadamia", "macaroni", "machine", "macrame", "macrofauna", "maelstrom", "maestro", "magazine", "magic", "magician", "maid", "maiden", "mail", "mailbox", "mailman", "maintenance", "major", "major-league", "makeup", "malaysia", "male", "mall", "mallet", "mambo", "mammoth", "man", "management", "manager", "mandarin", "mandolin", "mangrove", "manhunt", "maniac", "manicure", "manner", "manor", "mansard", "manservant", "mansion", "mantel", "mantle", "mantua", "manufacturer", "manx", "map", "maple", "maraca", "maracas", "marble", "march", "mare", "margaret", "margin", "maria", "mariachi", "marimba", "mark", "market", "marketing", "marksman", "marriage", "marsh", "marshland", "marxism", "mary", "mascara", "mask", "mass", "massage", "master", "mastication", "mastoid", "mat", "match", "material", "math", "mattock", "mattress", "maximum", "may", "maybe", "mayonnaise", "mayor", "meal", "meaning", "measure", "meat", "mechanic", "medicine", "medium", "meet", "meeting", "megalomaniac", "melody", "member", "membership", "memory", "men", "menorah", "mention", "menu", "mercury", "mess", "message", "metal", "metallurgist", "meteor", "meteorology", "meter", "methane", "method", "methodology", "metro", "metronome", "mexican", "mexico", "mezzanine", "mice", "michael", "michelle", "microlending", "microwave", "mid-course", "middle", "middleman", "midi", "midline", "midnight", "midwife", "might", "migrant", "mile", "milk", "milkshake", "millennium", "millimeter", "millisecond", "mime", "mimosa", "mind", "mine", "mini", "minibus", "minion", "mini-skirt", "minister", "minor", "minor-league", "mint", "minute", "mirror", "miscarriage", "miscommunication", "misfit", "misogyny", "misplacement", "misreading", "missile", "mission", "mist", "mistake", "mister", "miter", "mitten", "mix", "mixer", "mixture", "moat", "mobile", "moccasins", "mocha", "mode", "model", "modem", "mole", "mom", "moment", "monastery", "monasticism", "monday", "money", "monger", "monitor", "monkey", "monocle", "monotheism", "monsoon", "monster", "month", "mood", "moon", "moonscape", "moonshine", "mop", "Mormon", "morning", "morocco", "morsel", "mortise", "mosque", "mosquito", "most", "motel", "moth", "mother", "mother-in-law", "motion", "motor", "motorboat", "motorcar", "motorcycle", "mound", "mountain", "mouse", "mouser", "mousse", "moustache", "mouth", "mouton", "move", "mover", "movie", "mower", "mug", "mukluk", "mule", "multimedia", "muscle", "musculature", "museum", "music", "music-box", "musician", "music-making", "mustache", "mustard", "mutt", "myanmar", "mycoplasma", "nail", "name", "naming", "nancy", "nanoparticle", "napkin", "narcissus", "nation", "naturalisation", "nature", "neat", "neck", "necklace", "necktie", "necromancer", "need", "needle", "negligee", "neologism", "neon", "nepal", "nephew", "nerve", "nest", "net", "netball", "netbook", "netsuke", "network", "neurobiologist", "neuropathologist", "neuropsychiatry", "news", "newspaper", "newsprint", "newsstand", "nexus", "nic", "nicety", "niche", "nickel", "niece", "nigeria", "night", "nightclub", "nightgown", "nightingale", "nightlight", "nitrogen", "node", "noise", "nonbeliever", "nonconformist", "nondisclosure", "noodle", "normal", "norse", "north", "north america", "north korea", "norwegian", "nose", "note", "notebook", "notice", "notify", "notoriety", "nougat", "novel", "november", "nudge", "number", "numeracy", "numeric", "numismatist", "nurse", "nursery", "nurture", "nut", "nylon", "oak", "oar", "oasis", "oatmeal", "obi", "objective", "obligation", "oboe", "observation", "observatory", "occasion", "occupation", "ocean", "ocelot", "octagon", "octave", "octavo", "octet", "october", "octopus", "odometer", "oeuvre", "offence", "offer", "office", "official", "off-ramp", "oil", "okra", "oldie", "olive", "omega", "omelet", "oncology", "one", "onion", "open", "opening", "opera", "operation", "ophthalmologist", "opinion", "opium", "opossum", "opportunist", "opportunity", "opposite", "option", "orange", "orangutan", "orator", "orchard", "orchestra", "orchid", "order", "ordinary", "ordination", "organ", "organisation", "organization", "original", "ornament", "osmosis", "osprey", "ostrich", "others", "otter", "ottoman", "ounce", "outback", "outcome", "outfit", "outhouse", "outlay", "output", "outrigger", "outset", "outside", "oval", "ovary", "oven", "overcharge", "overclocking", "overcoat", "overexertion", "overflight", "overnighter", "overshoot", "owl", "owner", "ox", "oxen", "oxford", "oxygen", "oyster", "pacemaker", "pack", "package", "packet", "pad", "paddle", "paddock", "page", "pagoda", "pail", "pain", "paint", "painter", "painting", "paintwork", "pair", "pajama", "pajamas", "pakistan", "paleontologist", "paleontology", "palm", "pamphlet", "pan", "pancake", "pancreas", "panda", "panic", "pannier", "panpipe", "pansy", "panther", "panties", "pantry", "pants", "pantsuit", "panty", "pantyhose", "paper", "paperback", "parable", "parachute", "parade", "parallelogram", "paramedic", "parcel", "parchment", "parent", "parentheses", "park", "parka", "parrot", "parsnip", "part", "participant", "particle", "particular", "partner", "partridge", "party", "passage", "passbook", "passenger", "passive", "pasta", "paste", "pastor", "pastoralist", "pastry", "patch", "path", "patient", "patina", "patio", "patriarch", "patricia", "patrimony", "patriot", "patrol", "pattern", "paul", "pavement", "pavilion", "paw", "pawnshop", "payee", "payment", "pea", "peace", "peach", "peacoat", "peacock", "peak", "peanut", "pear", "pearl", "pedal", "pedestrian", "pediatrician", "peen", "peer", "peer-to-peer", "pegboard", "pelican", "pelt", "pen", "penalty", "pencil", "pendant", "pendulum", "penicillin", "pension", "pentagon", "peony", "people", "pepper", "percentage", "perch", "perfume", "period", "periodical", "peripheral", "permafrost", "permission", "permit", "perp", "persian", "person", "personality", "peru", "pest", "pet", "petal", "petticoat", "pew", "pharmacist", "pharmacopoeia", "phase", "pheasant", "philippines", "philosopher", "philosophy", "phone", "photo", "photographer", "phrase", "physical", "physician", "pianist", "piano", "piccolo", "pick", "pickax", "picket", "pickle", "picture", "pie", "piece", "pier", "piety", "pig", "pigeon", "pike", "pile", "pilgrimage", "pillbox", "pillow", "pilot", "pimp", "pimple", "pin", "pinafore", "pince-nez", "pine", "pineapple", "pinecone", "ping", "pink", "pinkie", "pinstripe", "pint", "pinto", "pinworm", "pioneer", "pipe", "piracy", "piranha", "pisces", "piss", "pitch", "pitching", "pith", "pizza", "place", "plain", "plane", "planet", "plant", "plantation", "planter", "plaster", "plasterboard", "plastic", "plate", "platform", "platinum", "platypus", "play", "player", "playground", "playroom", "pleasure", "pleated", "plier", "plot", "plough", "plover", "plow", "plowman", "plume", "plunger", "plywood", "pneumonia", "pocket", "pocketbook", "pocket-watch", "poet", "poignance", "point", "poison", "poisoning", "poland", "pole", "polenta", "police", "policeman", "policy", "polish", "politician", "pollution", "polo", "polyester", "pompom", "poncho", "pond", "pony", "poof", "pool", "popcorn", "poppy", "popsicle", "population", "populist", "porch", "porcupine", "port", "porter", "portfolio", "porthole", "position", "positive", "possibility", "postage", "postbox", "poster", "pot", "potato", "potential", "potty", "pouch", "poultry", "pound", "pounding", "powder", "power", "precedent", "precipitation", "preface", "prelude", "premeditation", "premier", "preoccupation", "preparation", "presence", "presentation", "president", "pressroom", "pressure", "pressurisation", "price", "pride", "priest", "priesthood", "primary", "primate", "prince", "princess", "principal", "print", "printer", "priority", "prison", "prize", "prizefight", "probation", "problem", "procedure", "process", "processing", "produce", "producer", "product", "production", "professional", "professor", "profit", "program", "project", "promotion", "prompt", "proof-reader", "propane", "property", "prose", "prosecution", "protest", "protocol", "prow", "pruner", "pseudoscience", "psychiatrist", "psychoanalyst", "psychologist", "psychology", "ptarmigan", "publisher", "pudding", "puddle", "puffin", "pull", "pulley", "puma", "pump", "pumpkin", "pumpkinseed", "punch", "punishment", "pupa", "pupil", "puppy", "purchase", "puritan", "purple", "purpose", "purse", "push", "pusher", "put", "pvc", "pyjama", "pyramid", "quadrant", "quail", "quality", "quart", "quarter", "quartz", "queen", "question", "quicksand", "quiet", "quill", "quilt", "quince", "quit", "quiver", "quotation", "rabbi", "rabbit", "raccoon", "race", "racer", "racing", "racist", "rack", "radar", "radiator", "radio", "radiosonde", "radish", "raffle", "raft", "rag", "rage", "rail", "railway", "raiment", "rain", "rainbow", "raincoat", "rainmaker", "rainstorm", "raise", "rake", "ram", "rambler", "ramie", "ranch", "random", "randomisation", "range", "rank", "raspberry", "rat", "rate", "ratio", "raven", "ravioli", "raw", "rawhide", "ray", "rayon", "reactant", "reaction", "read", "reading", "reamer", "rear", "reason", "receipt", "reception", "recess", "recliner", "recognition", "recommendation", "record", "recorder", "recover", "recruit", "rectangle", "red", "redesign", "rediscovery", "reduction", "reef", "refectory", "reflection", "refrigerator", "refund", "refuse", "region", "register", "regret", "regular", "regulation", "reindeer", "reinscription", "reject", "relation", "relative", "religion", "relish", "reminder", "rent", "repair", "reparation", "repeat", "replace", "replication", "reply", "report", "representative", "reprocessing", "request", "resale", "research", "resident", "resist", "resolution", "respect", "respite", "responsibility", "rest", "restaurant", "result", "retailer", "rethinking", "retina", "retouch", "return", "reveal", "revenant", "review", "revolution", "revolve", "revolver", "reward", "rheumatism", "rhinoceros", "rhyme", "rhythm", "rice", "richard", "riddle", "ride", "rider", "ridge", "rifle", "right", "rim", "ring", "ringworm", "ripple", "rise", "riser", "risk", "river", "riverbed", "rivulet", "road", "roadway", "roast", "robe", "robert", "robin", "rock", "rocker", "rocket", "rocket-ship", "rod", "role", "roll", "roller", "romania", "romanian", "ronald", "roof", "room", "rooster", "root", "rope", "rose", "rostrum", "rotate", "roundabout", "route", "router", "routine", "row", "rowboat", "royal", "rub", "rubber", "rubric", "ruckus", "ruffle", "rugby", "rule", "run", "runaway", "runner", "russia", "russian", "rutabaga", "ruth", "sabre", "sack", "sad", "saddle", "safe", "safety", "sage", "sagittarius", "sail", "sailboat", "sailor", "salad", "salary", "sale", "salesman", "salmon", "salon", "saloon", "salt", "samovar", "sampan", "sample", "samurai", "sand", "sandals", "sandbar", "sandra", "sandwich", "santa", "sarah", "sardine", "sari", "sarong", "sash", "satellite", "satin", "satire", "saturday", "sauce", "saudi arabia", "sausage", "save", "saving", "savior", "saviour", "saw", "saxophone", "scale", "scallion", "scanner", "scarecrow", "scarf", "scarification", "scene", "scent", "schedule", "scheme", "schizophrenic", "schnitzel", "school", "schoolhouse", "schooner", "science", "scimitar", "scissors", "scooter", "score", "scorn", "scorpio", "scorpion", "scow", "scraper", "screamer", "screen", "screenwriting", "screw", "screwdriver", "screw-up", "scrim", "scrip", "sculpting", "sculpture", "sea", "seagull", "seal", "seaplane", "search", "seashore", "season", "seat", "second", "secretariat", "secretary", "section", "sectional", "sector", "secure", "security", "seed", "seeder", "segment", "select", "selection", "self", "sell", "semicircle", "semicolon", "senator", "sense", "sentence", "sepal", "september", "septicaemia", "series", "servant", "server", "service", "session", "set", "setting", "settler", "sewer", "sex", "shack", "shade", "shadow", "shadowbox", "shake", "shakedown", "shaker", "shallot", "shame", "shampoo", "shanty", "shape", "share", "shark", "sharon", "shawl", "shearling", "shears", "sheath", "shed", "sheep", "sheet", "shelf", "shell", "sherry", "shield", "shift", "shin", "shine", "shingle", "ship", "shirt", "shirtdress", "shoat", "shock", "shoe", "shoehorn", "shoe-horn", "shoelace", "shoemaker", "shoes", "shoestring", "shofar", "shoot", "shootdown", "shop", "shopper", "shopping", "shore", "shortage", "shorts", "shortwave", "shot", "shoulder", "shovel", "show", "shower", "show-stopper", "shred", "shrimp", "shrine", "siamese", "siberian", "sibling", "sick", "side", "sideboard", "sideburns", "sidecar", "sidestream", "sidewalk", "siding", "sign", "signature", "signet", "significance", "signup", "silica", "silk", "silkworm", "sill", "silo", "silver", "simple", "sing", "singer", "single", "sink", "sister", "sister-in-law", "sit", "sitar", "size", "skate", "skiing", "skill", "skin", "skirt", "skulduggery", "skull", "skullcap", "skullduggery", "skunk", "sky", "skylight", "skyscraper", "skywalk", "slapstick", "slash", "slave", "sled", "sledge", "sleep", "sleet", "sleuth", "slice", "slider", "slime", "slip", "slipper", "slippers", "slope", "sloth", "smash", "smell", "smelting", "smile", "smock", "smog", "smoke", "smuggling", "snail", "snake", "snakebite", "sneakers", "sneeze", "snob", "snorer", "snow", "snowboarding", "snowflake", "snowman", "snowmobiling", "snowplow", "snowstorm", "snowsuit", "snuggle", "soap", "soccer", "society", "sociology", "sock", "socks", "soda", "sofa", "softball", "softdrink", "softening", "software", "soil", "soldier", "solid", "solitaire", "sombrero", "somersault", "somewhere", "son", "song", "songbird", "sonnet", "soot", "soprano", "sorbet", "sort", "soulmate", "sound", "soup", "source", "sourwood", "sousaphone", "south", "south africa", "south america", "south korea", "sow", "soy", "soybean", "space", "spacing", "spade", "spaghetti", "spain", "spandex", "spank", "spark", "sparrow", "spasm", "speaker", "speakerphone", "spear", "special", "specialist", "specific", "spectacle", "spectacles", "spectrograph", "speedboat", "spend", "sphere", "sphynx", "spider", "spike", "spinach", "spine", "spiral", "spirit", "spiritual", "spite", "spleen", "split", "sponge", "spoon", "sport", "spot", "spotlight", "spray", "spread", "spring", "sprinter", "sprout", "spruce", "spume", "spur", "spy", "square", "squash", "squatter", "squeegee", "squid", "squirrel", "stable", "stack", "stacking", "stadium", "staff", "stag", "stage", "stain", "stair", "staircase", "stallion", "stamen", "stamina", "stamp", "stance", "standoff", "star", "start", "starter", "state", "statement", "station", "station-wagon", "statistic", "statistician", "steak", "steal", "steam", "steamroller", "steel", "steeple", "stem", "stencil", "step", "step-aunt", "step-brother", "stepdaughter", "step-daughter", "step-father", "step-grandfather", "step-grandmother", "stepmother", "step-mother", "stepping-stone", "steps", "step-sister", "stepson", "step-son", "step-uncle", "steven", "stew", "stick", "stiletto", "still", "stinger", "stitch", "stock", "stocking", "stockings", "stock-in-trade", "stole", "stomach", "stone", "stonework", "stool", "stop", "stopsign", "stopwatch", "store", "storey", "storm", "story", "storyboard", "story-telling", "stove", "strait", "stranger", "strap", "straw", "strawberry", "stream", "street", "streetcar", "stress", "stretch", "strike", "string", "strip", "structure", "struggle", "stud", "student", "studio", "study", "stuff", "stumbling", "sturgeon", "style", "styling", "stylus", "subcomponent", "subconscious", "submarine", "subroutine", "subsidence", "substance", "suburb", "subway", "success", "suck", "sudan", "suede", "suffocation", "sugar", "suggestion", "suit", "suitcase", "sultan", "summer", "sun", "sunbeam", "sunbonnet", "sunday", "sundial", "sunflower", "sunglasses", "sunlamp", "sunroom", "sunshine", "supermarket", "supply", "support", "supporter", "suppression", "surface", "surfboard", "surgeon", "surgery", "surname", "surprise", "susan", "sushi", "suspect", "suspenders", "sustainment", "SUV", "swallow", "swamp", "swan", "swath", "sweat", "sweater", "sweats", "sweatshirt", "sweatshop", "sweatsuit", "swedish", "sweets", "swell", "swim", "swimming", "swimsuit", "swing", "swiss", "switch", "switchboard", "swivel", "sword", "swordfish", "sycamore", "syndicate", "synergy", "synod", "syria", "syrup", "system", "tabby", "tabernacle", "table", "tablecloth", "tabletop", "tachometer", "tackle", "tadpole", "tail", "tailor", "tailspin", "taiwan", "tale", "talk", "tam", "tambour", "tambourine", "tam-o'-shanter", "tandem", "tangerine", "tank", "tanker", "tankful", "tank-top", "tanzania", "tap", "target", "tassel", "taste", "tatami", "tattler", "tattoo", "taurus", "tavern", "tax", "taxi", "taxicab", "tea", "teacher", "teaching", "team", "tear", "technician", "technologist", "technology", "teen", "teeth", "telephone", "telescreen", "teletype", "television", "teller", "temp", "temper", "temperature", "temple", "tempo", "temporariness", "temptress", "tendency", "tenement", "tennis", "tenor", "tent", "tepee", "term", "terracotta", "terrapin", "territory", "test", "text", "textbook", "texture", "thailand", "thanks", "thaw", "theater", "theism", "theme", "theoretician", "theory", "therapist", "thermals", "thermometer", "thigh", "thing", "thinking", "thistle", "thomas", "thong", "thongs", "thorn", "thought", "thread", "thrill", "throat", "throne", "thrush", "thumb", "thunder", "thunderbolt", "thunderhead", "thunderstorm", "thursday", "tiara", "tic", "ticket", "tie", "tiger", "tight", "tights", "tile", "till", "timbale", "time", "timeline", "timeout", "timer", "timpani", "tin", "tinderbox", "tinkle", "tintype", "tip", "tire", "tissue", "titanium", "title", "toad", "toast", "toe", "toenail", "toga", "togs", "toilet", "tom", "tomato", "tomography", "tomorrow", "tom-tom", "ton", "tongue", "toot", "tooth", "toothbrush", "toothpaste", "toothpick", "top", "top-hat", "topsail", "toque", "torchiere", "toreador", "tornado", "torso", "tortellini", "tortoise", "tosser", "total", "tote", "touch", "tough", "tough-guy", "tour", "tourist", "towel", "tower", "town", "townhouse", "tow-truck", "toy", "trachoma", "track", "tracksuit", "tractor", "trade", "tradition", "traditionalism", "traffic", "trail", "trailer", "train", "trainer", "training", "tram", "tramp", "transaction", "translation", "transmission", "transom", "transport", "trapdoor", "trapezium", "trapezoid", "trash", "travel", "tray", "treatment", "tree", "trellis", "tremor", "trench", "trial", "triangle", "tribe", "trick", "trigonometry", "trim", "trinket", "trip", "tripod", "trolley", "trombone", "trooper", "trouble", "trousers", "trout", "trove", "trowel", "truck", "truckit", "trumpet", "trunk", "trust", "try", "t-shirt", "tsunami", "tub", "tuba", "tube", "tuesday", "tugboat", "tulip", "tummy", "tuna", "tune", "tune-up", "tunic", "tunnel", "turban", "turkey", "turkish", "turn", "turnip", "turnover", "turnstile", "turret", "turtle", "tussle", "tutu", "tuxedo", "tv", "twig", "twilight", "twine", "twist", "twister", "two", "typewriter", "typhoon", "tyvek", "uganda", "ukraine", "ukrainian", "ukulele", "umbrella", "unblinking", "uncle", "underclothes", "underground", "underneath", "underpants", "underpass", "undershirt", "underwear", "underwire", "unibody", "uniform", "union", "unit", "united kingdom", "urn", "use", "usher", "utensil", "uzbekistan", "vacation", "vacuum", "vagrant", "valance", "valley", "valuable", "value", "van", "vane", "vanity", "variation", "variety", "vase", "vast", "vault", "vaulting", "veal", "vegetable", "vegetarian", "vehicle", "veil", "vein", "veldt", "vellum", "velodrome", "velvet", "venezuela", "venezuelan", "venom", "veranda", "verdict", "vermicelli", "verse", "version", "vertigo", "verve", "vessel", "vest", "vestment", "veterinarian", "vibe", "vibraphone", "vibration", "vietnam", "view", "villa", "village", "vineyard", "vinyl", "viola", "violet", "violin", "virginal", "virgo", "virtue", "viscose", "vise", "vision", "visit", "visitor", "visor", "vixen", "voice", "volcano", "volleyball", "voyage", "vulture", "wad", "wafer", "waffle", "waist", "waistband", "waiter", "waitress", "walk", "walker", "walkway", "wall", "wallaby", "wallet", "walnut", "walrus", "wampum", "wannabe", "war", "warden", "warlock", "warm-up", "warning", "wash", "washbasin", "washcloth", "washer", "washtub", "wasp", "waste", "wastebasket", "watch", "watchmaker", "water", "waterbed", "waterfall", "waterskiing", "waterspout", "wave", "wax", "way", "weakness", "wealth", "weapon", "weasel", "weather", "web", "wedge", "wednesday", "weed", "weeder", "weedkiller", "week", "weekend", "weekender", "weight", "weird", "well", "west", "western", "wet-bar", "wetsuit", "whale", "wharf", "wheel", "whip", "whirlpool", "whirlwind", "whisker", "whiskey", "whistle", "white", "whole", "wholesale", "wholesaler", "whorl", "wife", "wilderness", "will", "william", "willow", "wind", "windage", "wind-chime", "window", "windscreen", "windshield", "wine", "wing", "wingman", "wingtip", "winter", "wire", "wiseguy", "wish", "wisteria", "witch", "witch-hunt", "withdrawal", "witness", "wolf", "woman", "wombat", "women", "wood", "woodland", "woodshed", "woodwind", "wool", "woolen", "word", "work", "workbench", "worker", "workhorse", "worklife", "workshop", "world", "worm", "worthy", "wound", "wrap", "wraparound", "wrecker", "wren", "wrench", "wrestler", "wrinkle", "wrist", "writer", "writing", "wrong", "xylophone", "yacht", "yak", "yam", "yard", "yarmulke", "yarn", "yawl", "year", "yellow", "yesterday", "yew", "yin", "yogurt", "yoke", "young", "youth", "yugoslavian", "yurt", "zampone", "zebra", "zebrafish", "zephyr", "ziggurat", "zinc", "zipper", "zither", "zone", "zoo", "zoologist", "zoology", "zoot-suit", "zucchini"];


    var adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    var noun = nouns[Math.floor(Math.random() * nouns.length)];

    var userName = ucwords(adjective) + ucwords(noun);

    return userName;

}

//function to capitalize first letter of words
function ucwords(str) {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
        return $1.toUpperCase();
    });
}

//update textfields statistics every 50ms
setInterval(function () {

        $(".postCount").text(pictureNumber);
        $(".commentCount").text(totalComments);
        $(".likeCount").text(totalLikes);
        $(".playerUsername").text(playerUsername);
        $(".profileThumb").css('background-image', 'url(' + profileUrl + ')');
        $(".lagstaPicThumb").css('background-image', 'url(' + profileUrl + ')');
        $(".profileTabThumb").css('background-image', 'url(' + profileUrl + ')');
        $(".currencyPerSecond").text(dollarsPerSecond.toFixed(2) + '/s');
        $(".totalCurrency").text(dollarsTotal.toFixed(2));
        $(".followerCount").text(Math.floor(followers));
        $('.currentMonth').text(months[currentMonth]);

        //if in sponsorship disable sponsor buttons and edit labels
        if (inSponsorship || toBeInSponsorship) {
            $(".signSponsorship").prop("disabled", true);

            $(".sponsorAmountLabel").text(sponsorshipValue);

            $(".sponsorDurationLabel").text(sponsorshipLength);

            $(".currentSponsorLabel").text(sponsorshipName);
        } else {
            if (!sponsorError) {
                $(".signSponsorship").prop("disabled", false);
            }

            $(".currentSponsorLabel").text("None");

            $(".sponsorAmountLabel").text("0.00");

            $(".sponsorDurationLabel").text("0");
        }

        //disable already bought cameras
        for (var i = 0; i < boughtUpgrades.length; i++) {
            $(".buyUpgradeButton" + boughtUpgrades[i] + "").prop("disabled", true);
        }



    },
    100); // every .1 second

//update things per second
setInterval(function () {

        followersPerSecond = (pictureNumber / 100) + (followers / 974);
        dollarsPerSecond = (pictureNumber / 920) + (followers / 9893);

        dollarsTotal += dollarsPerSecond;
        followers += followersPerSecond + (boughtUpgrades.length / 10);

    },
    1000); // every 1 second

//update current month
setInterval(function () {

        if (currentMonth == 11) {

            currentMonth = 0;

        } else {

            currentMonth += 1;

        }

        if (toBeInSponsorship) {

            toBeInSponsorship = 0;
            inSponsorship = 1;

            $(".sponsorshipSuccess").slideUp();

        } else if (inSponsorship) {

            sponsorshipLength -= 1;

            dollarsTotal += parseInt(sponsorshipValue);

            if (sponsorshipLength === 0) {

                inSponsorship = false;

            }

        }

        saveProgress();

    },
    60000); // every minute

//make chat speed inversely proportionate to followers
var followerCommentSpeed = 10000;
var followerLikeSpeed = 9000;

function changeLikeSpeed() {

    if (followers >= 100000) {

        followerLikeSpeed = 100;

    } else if (followers === 0) {

        followerLikeSpeed = 9000;

    } else {

        followerLikeSpeed = Math.ceil(10000000 / followers);

    }
    if (followerLikeSpeed > 9000 && followers !== 0) {
        followerLikeSpeed = 9000;
    }


}

function changeChatSpeed() {

    if (followers >= 100000) {

        followerCommentSpeed = 200;

    } else if (followers === 0) {

        followerCommentSpeed = 10000;

    } else {

        followerCommentSpeed = Math.ceil(100000000 / followers);

    }
    if (followerCommentSpeed > 10000 && followers !== 0) {
        followerCommentSpeed = 10000;
    }


}

//clear and make interval of fireChatMessage to new chatSpeed
var calculateCommentInterval = function () {

    clearInterval(commentPicture);

    changeChatSpeed();

    commentPicture = setInterval(function () {

        postComment();

        calculateCommentInterval();

    }, followerCommentSpeed);

};

//clear and make interval of fireChatMessage to new chatSpeed
var calculateLikeInterval = function () {

    clearInterval(likePictureInterval);

    changeLikeSpeed();

    likePictureInterval = setInterval(function () {

        likePicture();

        calculateLikeInterval();

    }, followerLikeSpeed);
};

//comment
var commentPicture = setInterval(function () {

    postComment();
    calculateCommentInterval();

}, followerCommentSpeed);

//like
var likePictureInterval = setInterval(function () {

    likePicture();
    calculateLikeInterval();

}, followerLikeSpeed);

//function to save
function saveProgress() {

    localStorage.setItem('pictureNumber', JSON.stringify(pictureNumber));
    localStorage.setItem('repostUrl', JSON.stringify(repostUrl));
    localStorage.setItem('profileUrl', JSON.stringify(profileUrl));
    localStorage.setItem('totalComments', JSON.stringify(totalComments));
    localStorage.setItem('totalLikes', JSON.stringify(totalLikes));
    localStorage.setItem('playerUsername', JSON.stringify(playerUsername));
    localStorage.setItem('currentMonth', JSON.stringify(currentMonth));
    localStorage.setItem('dollarsTotal', JSON.stringify(dollarsTotal));
    localStorage.setItem('followers', JSON.stringify(followers));
    localStorage.setItem('inSponsorship', JSON.stringify(inSponsorship));
    localStorage.setItem('sponsorshipLength', JSON.stringify(sponsorshipLength));
    localStorage.setItem('sponsorshipValue', JSON.stringify(sponsorshipValue));
    localStorage.setItem('sponsorshipName', JSON.stringify(sponsorshipName));
    localStorage.setItem('sponsorError', JSON.stringify(sponsorError));
    localStorage.setItem('toBeInSponsorship', JSON.stringify(toBeInSponsorship));
    localStorage.setItem('boughtUpgrades', JSON.stringify(boughtUpgrades));
    localStorage.setItem('exists', 'true');

    $(".saveGame").prop("disabled", true);
    $(".saveSuccess").slideDown();
    setTimeout(function () {
        $(".saveSuccess").slideUp();
        $(".saveGame").prop("disabled", false);
    }, 3000);


}
