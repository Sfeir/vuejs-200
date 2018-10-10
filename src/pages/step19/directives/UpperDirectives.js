const onInput=  function(e) {
    const el = e.target
    el.value = el.value.toUpperCase()
}

export default { 
    inserted(el){
        el.addEventListener('input', onInput)
    },
    unbind(el){
        el.removeEventListener('input', onInput)
    }
}