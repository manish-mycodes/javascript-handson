let counter = 0
function getData() {
    // var x = document.getElementById('search').value
    // console.log(x)

    console.log(`Api Hit ${++counter}`)
}

const debouncingFn = function (fn, delays) {
    let timer
    return function () {
        let context = this,
            args = arguments

        console.log('timer just before clearTimeout ', timer)
        clearTimeout(timer)

        timer = setTimeout(() => {
            console.log('Timer when GetData is calling ', timer)
            getData.apply(context, args)
        }, delays)

        console.log('timer after timer set ', timer)
    }
}

const refDebouncer = debouncingFn(getData, 300)
