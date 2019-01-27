function loadingBear(duration) {
    hideEverything()
    appendLoadingBar()

    const lbearTimeOut = window.setTimeout(function(){
        showEverything()
        document.body.removeChild(document.getElementById('loading-bear'))
    }, duration)


    function hideEverything() {
        document.body.childNodes.forEach(function (node) {
            if (node.nodeType !== Node.TEXT_NODE) {
                node.style.opacity = '0'
            }
        })

        document.body.style.visibility = 'hidden'
    }

    function showEverything() {
        document.body.childNodes.forEach(function (node) {
            if (node.nodeType !== Node.TEXT_NODE) {
                node.style.opacity = '1'
            }
        })

        document.body.style.visibility = 'visible'
    }

    function appendLoadingBar() {
        let lbear = document.createElement('div')
        lbear.appendChild(document.createTextNode('loading...'))
        lbear.id = 'loading-bear'
        lbear.style.visibility = 'visible'
        document.body.insertBefore(lbear, document.body.firstChild)
    }
}