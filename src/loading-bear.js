function loadingBear(duration) {
    hideEverything()
    appendLoadingBar()

    const lbearTimeOut = window.setTimeout(function () {
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
        lbear.id = 'loading-bear'
        lbear.style.visibility = 'visible'
        lbear.style.width = '100%'
        lbear.style.height = '50px'
        lbear.style.backgroundColor = '#c8c8c8'

        let lbearInner = document.createElement('div')
        lbearInner.style.height = '100%'
        lbearInner.style.backgroundColor = '#842'
        lbearInner.style.transition = 'width ' + duration + 'ms linear'
        lbearInner.style.width = '0%'
        lbear.appendChild(lbearInner)
        document.body.insertBefore(lbear, document.body.firstChild)

        const cheesyWorkaround = window.setTimeout(function () {
            document.getElementById('loading-bear').childNodes[0].style.width = '100%'
        }, 10)
    }
}