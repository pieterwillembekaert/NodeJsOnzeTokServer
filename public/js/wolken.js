function myMove() {
    var elem1 = document.getElementById("wolk1");
    var elem2 = document.getElementById("wolk2");
    var elem3 = document.getElementById("wolk3");
    var elem4 = document.getElementById("wolk4");
    var elem5 = document.getElementById("wolk5");
    var elemZon = document.getElementById("zon");

    var elem1StartPos = elem1.offsetLeft;
    var elem2StartPos = elem2.offsetLeft;
    var elem3StartPos = elem3.offsetLeft;
    var elem4StartPos = elem4.offsetLeft;
    var elem5StartPos = elem5.offsetLeft;


    var pos1 = 0;
    var pos2 = 0;
    var pos3 = 0;
    var pos4 = 0;
    var pos5 = 0;
    var scaleST = 1;
    var scaleFactor = 0.006;
    var result;
    var screenW = screen.width;
    var screenH = screen.height;
    var screenRes;

    if (screenW < screenH) {
        screenRes = screenH;

    } else {
        screenRes = screenW;

    }
    var posZon = 0;

    var flag = false;


    var id = setInterval(frame, 20);


    function frame() {
        if (pos1 == screenRes - elem1StartPos) {
            pos1 = 0 - elem1StartPos;

            //clearInterval(id);
        } else {
            pos1++;
            elem1.style.left = pos1 + "px";

        }

        if (pos2 == screenRes - elem2StartPos) {
            pos2 = 0 - elem2StartPos;

            //clearInterval(id);
        } else {
            pos2++;
            elem2.style.left = pos2 + "px";

        }

        if (pos3 == screenRes - elem3StartPos) {
            pos3 = 0 - elem3StartPos;

            //clearInterval(id);
        } else {
            pos3++;
            elem3.style.left = pos3 + "px";

        }

        if (pos4 == screenRes - elem4StartPos) {
            pos4 = 0 - elem4StartPos;
            //clearInterval(id);
        } else {
            pos4++;
            elem4.style.left = pos4 + "px";

        }

        if (pos5 == screenRes - elem5StartPos) {
            pos5 = 0 - elem5StartPos;

            //clearInterval(id);
        } else {
            pos5++;
            elem5.style.left = pos5 + "px";


        }

        if (flag == false) {

            if (posZon >= 3) {

                flag = true;
            } else {
                posZon = posZon + 0.1;
                result = scaleFactor * posZon + 1;

                elemZon.style.webkitTransform = "rotate(" + posZon + "deg)";
                elemZon.style.webkitTransform = "scale(" + result + "," + result + ")";
            }

        }

        if (flag == true) {

            if (posZon <= 0) {

                flag = false;
            } else {
                posZon = posZon - 0.1;
                result = scaleFactor * posZon + 1;

                elemZon.style.webkitTransform = "rotate(" + posZon + "deg)";
                elemZon.style.webkitTransform = "scale(" + result + "," + result + ")";


            }

        }


    }
}