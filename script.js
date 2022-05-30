function wyczysc() {
    document.getElementById("output").innerHTML = "0";
}

function usunZero() {
    var w = document.getElementById("output").innerHTML;
    if (w == "0") {
         w = " "
         document.getElementById("output").innerHTML = w;
    }
}

function procent() {
    var w = document.getElementById("output").innerHTML;
    w = w / 100;
    document.getElementById("output").innerHTML = w;
}

function wartosc(w) {
    usunZero()
    if(w==="*")
    {
        if(document.getElementById("output").innerHTML === " ")
        {
            return document.getElementById('output').innerHTML = "0";
        }
    }
    if(w ==="/")
    {
        if(document.getElementById("output").innerHTML === " ")
        {
            return document.getElementById('output').innerHTML = "0";
        }
    }
    if(w ==="-")
    {
        if(document.getElementById("output").innerHTML === " ")
        {
            return document.getElementById('output').innerHTML = "0";
        }
    }
    if(w ==="+")
    {
        if(document.getElementById("output").innerHTML === " ")
        {
            return document.getElementById('output').innerHTML = "0";
        }
    }
    if(w ===".")
    {
        if(document.getElementById("output").innerHTML.includes("."))
        {
            return
        }
    }

    document.getElementById("output").innerHTML += w;
}

function oblicz() {
    usunZero()
    var rownanie = document.getElementById("output").innerHTML;
    if(rownanie.includes("/0"))
    {
        return document.getElementById('output').innerHTML = "Nie dziel przez zero!!!"
    }
    var rozwiazanie = eval(rownanie);
    document.getElementById('output').innerHTML = rozwiazanie;
}

function sinus() {
    usunZero()
    var rownanie = document.getElementById("output").innerHTML;
    var rozwiazanie = Math.sin(rownanie);
    document.getElementById('output').innerHTML = rozwiazanie;
}

function cosinus() {
    usunZero()
    var rownanie = document.getElementById("output").innerHTML;
    var rozwiazanie = Math.cos(rownanie);
    document.getElementById('output').innerHTML = rozwiazanie;
}

function tangens() {
    usunZero()
    var rownanie = document.getElementById("output").innerHTML;
    var rozwiazanie= Math.tan(rownanie);
    document.getElementById('output').innerHTML = rozwiazanie;
}

function pierwiastek() {
    usunZero()
    var rownanie = document.getElementById("output").innerHTML;
    var rozwiazanie = Math.sqrt(rownanie);
    document.getElementById('output').innerHTML = rozwiazanie;
}
