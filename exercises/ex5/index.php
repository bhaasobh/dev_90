<?php
include 'db.php';

if(isset($_GET["category"])){
 $cat = $_GET["category"];
  if($cat==='"All"'){
    $query 	= "SELECT * FROM tbl_90_books";
  }else
  {
    $query  = "SELECT * FROM tbl_90_books where category = $cat;";

  }
  
//echo $query;
}else{
  $query  = "SELECT * FROM tbl_90_books ;";

}

$result = mysqli_query($connection , $query);

if(!$result)
{
    die("DB query failed !");
}

?>


<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">  
            <title>Bahaa Book's</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
    crossorigin="anonymous"></script>
            <link rel="stylesheet" href="css/style.css">
          <script src="js/script.js"></script>
    </head>
    <body>
         <header><h1> Bahaa's Booooks</h1></header> 
      
 <!-- Example single danger button -->
<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Filter by category
  </button>
  <ul class="dropdown-menu" id="categoryMenu">
  </ul>
</div>

        <div class="container">
      
       <?php
        echo '<div class="row">';
        while($row = mysqli_fetch_assoc($result))
        {
            $img = $row["image_path"];
           // echo $img;
       echo '<div class="card" style="width: 18rem;">
             <div class="book_img" > <img class="card-img-top" src="'. $img .'" alt="'. $row["book_name"] . '"> </div>
               <div class="card-body">
               <h5 class="card-title">'. $row["book_name"] . '</h5>
               <p class="card-text">'. $row["description"] . '</p>
           </div>
               <b> price : '. $row["price"] .' NIS </b><br>
              <div class="book_btn"> <a href="bookPage.php?bookId='.$row["book_id"].'" class="btn btn-primary">book page</a></div>
         </div>';
        }

        ?>
       
        </div>
    </body>
</html>