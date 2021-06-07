function closeNav()
{
    document.getElementById("mySideNav").style.width = "0";
}

function openNav()
{
    document.getElementById("mySideNav").style.width = "250px";
}

function tableDD()
{
    var dd = document.getElementById("dd");
    if(dd.classList.contains("tableHidden"))
    {
        dd.classList.remove("tableHidden");
        dd.classList.add("tableShow");
        btn = document.getElementById("arrow");
        btn.src = "https://img.icons8.com/flat-round/64/000000/collapse-arrow--v1.png"
    }
    else
    {
        btn = document.getElementById("arrow");
        btn.src = "https://img.icons8.com/flat-round/64/000000/expand-arrow--v1.png"
        dd.classList.remove("tableShow");
        dd.classList.add("tableHidden");
    }
    
}