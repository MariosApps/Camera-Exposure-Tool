var shutterSpeedValue = document.getElementById('shutterSpeedValue');
var isoValue = document.getElementById('isoValue');
var apertureValue = document.getElementById('apertureValue');

var values = [0, 10, 20, 30, 40, 50, 60];

var shutterSpeedInputs = ['1s', '0.5s', '1/10s', '1/60s', '1/200s', '1/800s', '1/4000s'];
var isoInputs = ['100', '320', '500', '1000', '6400', '12800', '25600'];
var apertureInputs = ['f2.8', 'f3.2', 'f3.5', 'f5.6', 'f7.1', 'f11', 'f16'];

var iso = isoInputs[0];
var shutterSpeed = shutterSpeedInputs[0];
var aperture = apertureInputs[0];


function updateShutterSpeed(val) {
    for(var i = 0; i <= values.length; i++) {
        if(val == values[i]) {
            shutterSpeedValue.innerHTML = shutterSpeedInputs[i];
            shutterSpeed = shutterSpeedValue.innerHTML;
        };
    };
    changeImage()
};


function updateIso(val) {
    for(var i = 0; i <= values.length; i++) {
        if(val == values[i]) {
            isoValue.innerHTML = isoInputs[i];
            iso = isoValue.innerHTML;
        };
    };
    changeImage()
};


function updateAperture(val) {
    for(var i = 0; i <= values.length; i++) {
        if(val == values[i]) {
            apertureValue.innerHTML = apertureInputs[i];
            aperture = apertureValue.innerHTML;
        };
    };
    changeImage()
};

function changeImage() {
    var image = "url(resources/css/img/" + aperture + "_" + iso + "_" + shutterSpeed + ".jpg)"
    document.body.style.backgroundImage = image;
};
