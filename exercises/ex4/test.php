<!DOCTYPE html>
<html>
    <head>
        <script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
        <script src="js/scripts.js"></script>
        <link rel="stylesheet" href="css/style.css">
        <title>Product Edit</title>
    </head>
    <body>
        welcome 
        <br>
        your product is : <?php echo $_GET["product"]; ?>
        <br>
        your logo is : <?php echo $_GET["logo"]; ?>
        <br>
        Size is : <?php echo $_GET["size"]; ?>
        <br>
        <?php
         $logo = $_GET["logo"];
            if($logo =="bahaa")
                echo "<h2> your logo is aowsome :D</h2>";
            else
                echo "<h2> your logo is NOT aowsome :D only bahaa is </h2>";
            ?>
       <a type="button" class="btn btn-primary" id="btn_product" href="http://127.0.0.1:5500/edit.html" >Back</a>
    </body>
</html>