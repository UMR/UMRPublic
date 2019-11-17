<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>UMR Recruitment Services | CONTACT</title>

    <link rel="stylesheet" href="fonts/css/all.css">

    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>

    <header class="fixed-top">
        <div class="topbar-area">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <ul class="list-inline d-flex justify-content-center">
                            <li class="list-inline-item">UMR Recruitment Services</li>
                            <li class="list-inline-item"><i class="fas fa-map-marker-alt"></i> 2 John Walsh Boulevard, Suite 204, NY 10566 US</li>
                            <li class="list-inline-item"><i class="fas fa-phone-alt"></i> (914) 737-7499</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="navbar-area">
            <nav class="navbar navbar-expand-lg navbar-light bg-light px-0 py-0">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand d-sm-block d-md-block d-lg-none m-auto" href="#">UMR RECRUITMENT SERVICES</a>
                
                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="services.html">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">About</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="contact.html">Contact <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="logo-area d-none d-md-none d-lg-block">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h4 class="text-center">UMR RECRUITMENT SERVICES</h4>
                    </div>
                </div>
            </div>
        </div>
    </header>



    <section class="content-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h4>CONTACT US</h4>
                    <hr>
                    <!--<h1 class="text-center mt-5" style="color: #FC6E51;font-size:64px;font-family:cursive">Coming Soon</h1>-->
                    <? php

                    // Check for Header Injections
                    function has_header_injection($str) {
                    return preg_match( "/[\r\n]/", $str );
                    }

                    if (isset($_POST['contact_submit'])) {

                    // Assign trimmed form data to variables
                    // Note that the value within the $_POST array is looking for the HTML "name" attribute, i.e. name="email"
                    $name	= trim($_POST['name']);
                    $email	= trim($_POST['email']);
                    $phone	= trim($_POST['phone']);
                    $msg	= $_POST['message']; // no need to trim message

                    // Check to see if $name or $email have header injections
                    if (has_header_injection($name) || has_header_injection($email) || has_header_injection($phone)) {
                        die(); // If true, kill the script
                    }

                    // Add the recipient email to a variable
                    $to	= "recruitment@universalmedicalrecord.com";

                    // Create a subject
                    $subject = "$name sent a message via your contact form";

                    // Construct the message
                    $message .= "Name: $name\r\n";
                    $message .= "Email: $email\r\n";
                    $message .= "Message:\r\n$msg";

                    $message = wordwrap($message, 72); // Keep the message neat n' tidy

                    // Set the mail headers into a variable
                    $headers = "MIME-Version: 1.0\r\n";
                    $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
                    $headers .= "From: " . $name . " <" . $email . ">\r\n";
                    $headers .= "X-Priority: 1\r\n";
                    $headers .= "X-MSMail-Priority: High\r\n\r\n";


                    // Send the email!
                    mail($to, $subject, $message, $headers);
                    ?>

                    <!-- Show success message after email has sent -->
                    <div class="success-message text-center">
                        <img src="img/envelope.png" alt="">
                        <h5>Email Send Successfully</h5>
                        <a href="index.html" class="btn btn-default tf-btn color" style="color:#fff">Go to Home</a>
                    </div>

                    <?php
                    } else {
                    ?>

                    <form action="" method="post" id="contact-form" class="form" name="sentMessage">
                        <!-- form wrapper -->

                        <div class="row">
                            <!-- nested inner row -->
                            <!-- Input your name -->
                            <div class="col-md-6">
                                <div class="form-group">
                                    <!-- Your name input -->
                                    <input type="text" class="form-control" placeholder="Your Name *" id="name" name="name" required>
                                </div>
                            </div>

                            <!-- Input your email -->
                            <div class="col-md-6">
                                <div class="form-group">
                                    <!-- Your email input -->
                                    <input type="email" class="form-control" placeholder="Your Email *" id="email" name="email" required>
                                </div>
                            </div>

                        </div><!-- end nested inner row -->
                        <!-- Message Text area -->
                        <div class="form-group">
                            <!-- Your email input -->
                            <textarea class="form-control" rows="7" placeholder="Tell Us Something..." id="message" name="message" required></textarea>
                        </div>
                        <input type="submit" class="btn btn-primary tf-btn color" name="contact_submit" value="Send Message"><!-- Send button -->

                    </form><!-- end form wrapper -->
                    <?php
                    }
                    ?>

                </div>
            </div>
        </div>
        
    </section>



    <footer class="footer-area fixed-bottom">
        <hr>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="copyright">
                        <p class="text-center">Copyright <span>&copy;</span> 2019 UMR Recruitment Services  - All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>



    <!-- Jquery Plugins -->
    <script src="js/jquery-v3.4.1.js"></script>
    <script src="js/bootstrap.js"></script>
    
</body>
</html>