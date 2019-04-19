<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        iframe#iframe {
            width: auto;
            height: auto;
        }
        form:not(#uploadform) {
            margin:30px;
            margin-bottom: 60px;
            background-color: #EEE;
        }
    </style>
</head>
<body>


    <form action="lagredata" method="post">
        <h2>Fyll inn dine data:</h2>
        <label for="navn">Navn:</label>
        <input type="text" id="navn" name="navn" required><br>
        <label for="epost">Epost:</label>
        <input type="text" id="epost" name="epost" required><br>
        <label for="melding">Melding:</label>
        <input type="text" id="melding" name="melding" required><br>
        <br><br><br>
        <input type="submit" id="submit" value="Send inn">
    </form>

    <form id="uploadform" action="upload" method="post" enctype="multipart/form-data">
        Select image to upload:
        <input type="file" name="fileToUpload" id="fileToUpload">
        <input type="submit" formtarget="innhold" id="knapp" value="Upload file" name="submit">
    </form>
    <script>
        function abc() {document.getElementById("fileToUpload").value = ""};
    </script>

    <iframe id="iframe" name="innhold"></iframe>


    <form action="vis_meldinger" method="post">
        <h2>Logg inn:</h2>
        <label for="brukernavn">Brukernavn:</label>
        <input type="text" id="brukernavn" name="brukernavn" required><br>
        <label for="passord">Passord:</label>
        <input type="password" id="passord" name="passord" required><br>
        <br><br><br>
        <input type="submit" id="submit" value="Send inn">
    </form>
    <img src="bilder/a.png">



<?php
    $hostname= "localhost";
    $database = "it-1";
    $username = "root";
    $password = "root";
    ini_set( "display_errors", 0);
    // Vi kobler oss til databasen
    $tilkobling= new mysqli($hostname, $username, $password,$database);
    //Vi sjekker om tilkoblingen er OK. hvis avsluttes programmet
    if (mysqli_connect_error()) {
        echo "<script>alert('Fikk ikke koblet til databasen')</script>";
        die();

    }
?>

</body>
</html>
