#btn-red{
    background-color: red;

    height: 50px;

    width: 50px;

    border-radius: 50%;

    margin-inline: 35%;

    position: relative;

    animation-name: rouge;

    animation-duration: 2s;

    animation-iteration-count: infinite;

}
#btn-blue{
    background-color: blue;

    height: 50px;

    width: 50px;

    border-radius: 50%;

    margin-inline: 35%;

    position: relative;

    animation-name: bleu;

    animation-duration: 2s;

    animation-iteration-count: infinite;

}
@keyframes rouge{
    0% {left: 0px; top: 0px;}

    25% {left: 200px; top: 0px;}

    50% {left: 200px; top: 200px;}

    75% {left: 0px; top: 200px;}

    100%{left: 0px; top: 0px;}

}
@keyframes bleu{
    0% {left: 0px; top: 0px;}

    25% {left: 0px; top: 200px;}

    50% {left: 200px; top: 200px;}

    75% {left: 200px; top: 0px;}

    100%{left: 0px; top: 0px;}

}
body{
    background-color: rgb(154, 226, 255);
}
h1{
    text-align: center;
}
section{
    border-style: solid;

    padding:20%;

    background-color: black;


}
h2{
    font-family: Arial Black;

    text-align: center;
    
    color: white;

    font-size: 90px;
}
