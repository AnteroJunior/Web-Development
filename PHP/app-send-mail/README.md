# app-send-mail
That's a small project using PHP and PHPMailer to send emails through the browser.

In this project you'll find two folders: 

<ul>
  
  <li>app_send_mail: For security purposes the folder outside htdocs (app_send_mail) will contain the original processa_envio.php. If you check the file you'll see the Gmail account that I used while I was testing the app. Feel free to use it during your tests.</li>

  <li>htdocs: This folder contains the index.php, logo.png and processa_envio.php files and the PHPMailer library. This processa_envio.php file contains a REQUIRE so it doesn't contain data.</li>

</ul>

<h2>XAMPP</h2>

<ul>
  
  <li><strong>app_send_mail</strong> outside the htdocs: paste this folder outside the htdocs folder</li>
  <li><strong>htdocs > app_send_mail</strong>: paste this folder inside htdocs folder</li>

</ul>
