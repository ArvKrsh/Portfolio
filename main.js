const links = document.querySelectorAll("a[id]");
links.forEach(link => {
    console.log(link)
    if(link.id == 'about') {
        link.classList.add("active")
    } else {
        link.classList.add("inactive")
    }
})

function goToLink(event) {
    var currentLink = document.getElementById(event.target.id);
    links.forEach(link => {
        console.log(link.id + " "+  event.target.id)
        if(link.id == currentLink.id) {
            console.log("incside")
            link.classList.remove("inactive")
            link.classList.add("active")
        } else {
            link.classList.remove("active")
            link.classList.add("inactive")
        }
    })
}