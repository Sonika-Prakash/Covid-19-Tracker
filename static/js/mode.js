function darkMode()
{
    //body
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    
    //top nav
    var top = document.getElementsByClassName("top");
    for(var i = 0; i < top.length; i++)
    {
        top[i].style.backgroundColor = "#1A0522";
    }
    
    //all cards
    var cards = document.getElementsByClassName("card");
    for(var i = 0; i < cards.length; i++)
    {
        cards[i].style.backgroundColor = "#252525";
        cards[i].style.boxShadow = "5px 5px 10px black";
    }
    
    //all stats
    var stats = document.getElementsByClassName("stat");
    for(var i = 0; i < stats.length; i++)
    {
        stats[i].style.boxShadow = "5px 5px 10px black";
    }
    
    document.getElementById("stat1").style.backgroundColor = "#7D6608";
    document.getElementById("stat2").style.backgroundColor = "#1B4F72";
    document.getElementById("stat3").style.backgroundColor = "#0E6251";
    document.getElementById("stat4").style.backgroundColor = "#641E16";
    document.getElementById("stat5").style.backgroundColor = "#4A235A";
    
    var statreds = document.getElementsByClassName("stat-red");
    for(var i = 0; i < statreds.length; i++)
    {
        statreds[i].style.color = "#E6B0AA";
    }
    var statgreens = document.getElementsByClassName("stat-green");
    for(var i = 0; i < statgreens.length; i++)
    {
        statgreens[i].style.color = "#A9DFBF";
    }
    
    //expand button
    document.getElementById("arrow").style.backgroundColor = "#252525";
    var btn = document.getElementsByClassName("expand");
    for(var i = 0; i < btn.length; i++)
    {
        btn[i].style.backgroundColor = "#252525";
    }
    
    //table
    var tbl = document.getElementsByTagName("table");
    for(var i = 0; i < tbl.length; i++)
    {
        tbl[i].style.backgroundColor = "#1F1F1F";
        tbl[i].style.boxShadow = "5px 5px 10px black";
    }
    var ths = document.getElementsByTagName("th");
    for(var i = 0; i < ths.length; i++)
    {
        ths[i].style.backgroundColor = "#4A235A";
    }
    
    //all news cards
    var news = document.getElementsByClassName("news");
    for(var i = 0; i < news.length; i++)
    {
        news[i].style.backgroundColor = "#1A1A1A";
        news[i].style.boxShadow = "5px 5px 10px black";
        news[i].style.border = "1px solid #161616";
    }
    
    var dates = document.getElementsByClassName("left");
    for(var i = 0; i < dates.length; i++)
    {
        dates[i].style.color = "#D5D5D5";
    }
    var links = document.getElementsByClassName("link");
    for(var i = 0; i < links.length; i++)
    {
        links[i].style.color = "white";
    }
}


function lightMode()
{
    /*
    //body
    document.body.style.backgroundColor = "#F2F4F4";
    document.body.style.color = "black";
    
    //top nav
    var top = document.getElementsByClassName("top");
    for(var i = 0; i < top.length; i++)
    {
        top[i].style.backgroundColor = "#4A235A";
    }
    
    //all cards
    var cards = document.getElementsByClassName("card");
    for(var i = 0; i < cards.length; i++)
    {
        cards[i].style.backgroundColor = "white";
        cards[i].style.boxShadow = "5px 5px 10px gray";
    }
    
    //all stats
    var stats = document.getElementsByClassName("stat");
    for(var i = 0; i < stats.length; i++)
    {
        stats[i].style.boxShadow = "5px 5px 10px gray";
    }
    
    document.getElementById("stat1").style.backgroundColor = "#FCF3CF";
    document.getElementById("stat2").style.backgroundColor = "#AED6F1";
    document.getElementById("stat3").style.backgroundColor = "#D5F5E3";
    document.getElementById("stat4").style.backgroundColor = "#F5B7B1";
    document.getElementById("stat5").style.backgroundColor = "#D7BDE2";
    
    var statreds = document.getElementsByClassName("stat-red");
    for(var i = 0; i < statreds.length; i++)
    {
        statreds[i].style.color = "red";
    }
    var statgreens = document.getElementsByClassName("stat-green");
    for(var i = 0; i < statgreens.length; i++)
    {
        statgreens[i].style.color = "green";
    }
    
    //expand button
    document.getElementById("arrow").style.backgroundColor = "white";
    var btn = document.getElementsByClassName("expand");
    for(var i = 0; i < btn.length; i++)
    {
        btn[i].style.backgroundColor = "white";
    }
    
    //table
    var tbl = document.getElementsByTagName("table");
    for(var i = 0; i < tbl.length; i++)
    {
        tbl[i].style.backgroundColor = "white";
        tbl[i].style.boxShadow = "5px 5px 10px gray";
    }
    var ths = document.getElementsByTagName("th");
    for(var i = 0; i < ths.length; i++)
    {
        ths[i].style.backgroundColor = "#7D3C98";
    }
    
    //news cards
    var news = document.getElementsByClassName("news");
    for(var i = 0; i < news.length; i++)
    {
        news[i].style.backgroundColor = "#E8F8F5";
        news[i].style.boxShadow = "5px 5px 10px gray";
        news[i].style.border = "1px solid gray";
        news[i].addEventListener("mouseover", function() {
    document.getElementById("myID").style.backgroundColor = "#D7BDE2";
    });
    }
    var dates = document.getElementsByClassName("left");
    for(var i = 0; i < news.length; i++)
    {
        dates[i].style.color = "#34495E";
    }
    var links = document.getElementsByClassName("link");
    for(var i = 0; i < links.length; i++)
    {
        links[i].style.color = "black";
    }
    */
    window.location.href = "/";
}