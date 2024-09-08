# Menu-netflix 

CSS


    video{

        background-size: cover;

        background-position: center;


        background-repeat: no-repeat;
    }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, html {
    height: 100%;
}

header {

    height: 100vh;

    overflow: hidden;

    background-size: cover;
}

#background-video {
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
    object-fit: cover;

    background-repeat: no-repeat;

    
}

.overlay {

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Ajoute une couche de transparence */
    z-index: 1;
}

.content {

    z-index: 2;
    text-align: center;
    color: white;
    top: 50%;
    transform: translateY(-50%);
}

h1 {
    font-size: 120px;
}

p {
    font-size: 1.5rem;
}

    div{
content: '';
            bottom: -5px; /* Ajuste pour bien placer le dégradé */
            left: 0;
            width: 100%;
            height: 80px; /* Hauteur du dégradé */            z-index: 1;

        
    }
    h2{

        color: white;

        margin-inline: 45%;

        margin-top: 5%;


    }
    input:hover{


        background-color: white;

color: black;
       

    
    }
    input{

        background-color: black;

color: white;

border-color: white;

border-width: 1px;

border-radius: 20px;

width: 200px;

height: 50px;

border-style: solid;

cursor: pointer;

font-size: x-large;

margin-left: 45%;
    }
    h6{
        color: white;

    }
    article{

        margin-top: 1px;
    }
    button:hover{

        background-color: rgb(0, 0, 0);

        color: rgb(255, 255, 255);


    }
    button{

        background-color: rgb(255, 255, 255);

        color: rgb(0, 0, 0);

        border-color: rgb(0, 0, 0);

        border-width: 1px;

        border-radius: 20px;

        width: 200px;

        height: 50px;

        border-style: solid;

        margin-top: 5%;

        cursor: pointer;

        font-size: x-large;

        margin-left: 25%;

        margin-bottom: 5%;

    }
    h5{

        color: rgb(5, 160, 5);

        font-family: Arial, Helvetica, sans-serif;


    }


    h3{

        color: white;

        font-family: Arial, Helvetica, sans-serif;
    }
    p{

        color: white;

        font-family: Arial, Helvetica, sans-serif;
    }


    body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #000000; /* Couleur du body */
        }

        /* Dégradé entre le header et le body */
        header::after {


            content: '';
            position: absolute;
            bottom: -5px; /* Ajuste pour bien placer le dégradé */
            left: 0;
            width: 100%;
            height: 80px; /* Hauteur du dégradé */
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000); /* Transition du header vers la couleur du body */
            z-index: 1;
        
        }

        /* Contenu du body pour voir l'effet du dégradé */
        section {
            padding: 20px;
        }

        img:hover{

            border-color: white;

            border-style: solid;



        }
img{



    border-color: white;

    margin-top: 2%;

    margin-left: 3%;

    height: 400px;

    width: 300px;
}
</style>
</body>

</head>

</html>


    <style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, html {
    height: 100%;
}

header {
    position: relative;
    height: 100vh;
    overflow: hidden;
}

#background-video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
    object-fit: cover;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Ajoute une couche de transparence */
    z-index: 1;
}

.content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: white;
    top: 50%;
    transform: translateY(-50%);
}

h1 {
    font-size: 3rem;
}

p {
    font-size: 1.5rem;
}
