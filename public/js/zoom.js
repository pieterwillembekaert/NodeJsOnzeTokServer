
function reset() {
    var panZoom = svgPanZoom('#map', {
        zoomEnabled: false,
        controlIconsEnabled: false,
        mouseWheelZoomEnabled: false
    });
}


function ZoomIn() {

    var panZoom = svgPanZoom('#map', {
        zoomEnabled: true,
        controlIconsEnabled: false,
        mouseWheelZoomEnabled: false,
       
    });

    document.getElementById('zoom-in').addEventListener('click', function (ev) {
        ev.preventDefault()

        panZoom.zoomIn()
        reset();
    });

}

function ZoomOut() {

    var panZoom = svgPanZoom('#map', {
        zoomEnabled: true,
        controlIconsEnabled: false,
        mouseWheelZoomEnabled: false
    });

    document.getElementById('zoom-out').addEventListener('click', function (ev) {
        ev.preventDefault()

        panZoom.zoomOut()
        reset();
    });

}

function ZoomReset() {

    var panZoom = svgPanZoom('#map', {
        zoomEnabled: false,
        controlIconsEnabled: false, 
        mouseWheelZoomEnabled: false
    });

    document.getElementById('reset').addEventListener('click', function (ev) {
        ev.preventDefault()

        panZoom.resetZoom()
        reset();
    });

}


