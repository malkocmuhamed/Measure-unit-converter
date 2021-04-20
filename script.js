// MUHAMED MALKOČ - PROJEKAT 2
    document.getElementById("duzinaInput").addEventListener
    ("input", 
    function(l)   
    {

        let metri = l.target.value;     
        document.getElementById("kmpretvorba").innerHTML = metri / 1000;
        document.getElementById("dmpretvorba").innerHTML = metri * 10;
        document.getElementById("cmpretvorba").innerHTML = metri * 100;
        document.getElementById("mmpretvorba").innerHTML = metri * 1000;  
    });

    document.getElementById("masaInput").addEventListener
    ("input", 
    function(m)   
    {

        let kilogrami = m.target.value;
        document.getElementById("tonepretvorba").innerHTML = kilogrami / 1000;
        document.getElementById("dkgpretvorba").innerHTML = kilogrami * 10;
        document.getElementById("grpretvorba").innerHTML = kilogrami * 1000;
        document.getElementById("mgpretvorba").innerHTML = kilogrami * 10000;

    });

    document.getElementById("povrsinaInput").addEventListener
    ("input", 
    function(s)   
    {

        let metri2 = s.target.value;
        document.getElementById("km2pretvorba").innerHTML = metri2 / 1000000;
        document.getElementById("hapretvorba").innerHTML = metri2 / 10000;
        document.getElementById("dm2pretvorba").innerHTML = metri2 * 100;
        document.getElementById("cm2pretvorba").innerHTML = metri2 * 10000;
        document.getElementById("mm2pretvorba").innerHTML = metri2 * 1000000;

    });

    document.getElementById("volumenInput").addEventListener
    ("input", 
    function(V)   
    {

        let metri3 = V.target.value;
        document.getElementById("hlpretvorba").innerHTML = metri3 / 100;
        document.getElementById("m3pretvorba").innerHTML = metri3 / 1000;
        document.getElementById("cm3pretvorba").innerHTML = metri3 * 1000;
        document.getElementById("mm3pretvorba").innerHTML = metri3 * 1000000;

    });

    document.getElementById("brzinaInput").addEventListener
    ("input", 
    function(v)   
    {

        let brzina = v.target.value;
        document.getElementById("kmspretvorba").innerHTML = brzina / 1000;
        document.getElementById("kmhpretvorba").innerHTML = brzina * 3.6;
        document.getElementById("mhpretvorba").innerHTML = brzina *  2.23694;
        document.getElementById("mmhpretvorba").innerHTML = brzina * 1.94385;

    });

    document.getElementById("pritisakInput").addEventListener
    ("input", 
    function(p)   
    {

        let pritisak = p.target.value;
        document.getElementById("kbarpretvorba").innerHTML = pritisak / 100000000;
        document.getElementById("barpretvorba").innerHTML = pritisak / 100000;
        document.getElementById("mbarpretvorba").innerHTML = pritisak *  100;
        document.getElementById("atpretvorba").innerHTML = pritisak * 0.000010197;
        document.getElementById("atmpretvorba").innerHTML = pritisak * 0.0000098692;


    });
    