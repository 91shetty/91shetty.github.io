<!DOCTYPE html>
<html>
    <head>
        <title> About | Facing Homelessness </title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="stylesheet" type="text/css" href="../css/style.css">
        <style>
            .card {
                width: 210px;
            }
        </style>
    </head>
    <body>
        <div class="overlay" id="overlay">
            <div class="close" onclick="closeOverlay()"> x </div>
            <div class="overlayContent">
                <div class='row'>
                    <div id="img"></div>
                    <div class='column'>
                        <div class="personDesc">
                            <div class="bold" id="name"></div>
                            <div id="homeContent"></div> 
                        </div>
                        <div class="navigation">
                            <a class="prev" onclick="prev()"> View Previous </a>
                            <a class="next" onclick="next()"> View Next </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        <div class="container" id="about">
            <span class="button" id="menu" style="position: fixed; top: 10px; left: 20px; z-index: 200" onclick="toggleNav()"> menu </span>
            <div id="menu-items">
                <a href="../"> <div> home </div> </a>
                <a href="../getinvolved/"> <div> get involved </div> </a>
                <a href="../programs/"> <div> programs </div> </a>
                <a href="../donate"> <div> donate </div> </a>
                <a href="../community/"> <div> community </div> </a>
                <!--<a href="../stories"> <div> stories </div> </a>-->
                <a href="../about"> <div class="current"> about </div> </a>
            </div>
            <div class="section">
                <div id="splash-screen" style="background-image: url('image.jpg');height: 100vh;" title='About'>
                    <div class="button" style="position: absolute; top: 10px; right: 20px;"> <a style='color: #fff !important;' href='../donate'>donate</a> </div>
                    <h1 id='text1' style="display:block;"> It's all about love. </h1>
                </div>
            </div>
            <div class='section'>
                <div class='section-content'>
                    <h2> Our Mission </h2>
                    <p> Through an invitation to see the beauty in each person, we encourage the community to bring connection and relationship to the center of their lives. This nurtures the empathy and compassion needed to catalyze a grassroots movement toward ending homelessness. </p>
                </div>
            </div>
            <div class="section">
                <div class="section-content">
                    <h2> History </h2>
                    <p> Facing Homelessness began its journey in 2010, with a belief that we can and will end homelessness when we invite community to be a part of the solution. The power in humanizing homelessness is that it allows all us to see the beauty of each person living on our streets, rather than fixating on the complexity of an issue that overwhelms us. This realization became evident to our founder, Rex Hohlbein, when he began inviting folks living homeless into his architecture office for conversation. He shares that, "The negative stereotype against the homeless was not matching up to the beauty of those I was meeting." From those encounters Rex began the Facing Homelessness Facebook page, sharing black and white photos with stories of people he was meeting. In 2013, what began as a passion project on social media took shape as a nonprofit organization, powered by three staff and the compassion of community. To this day, Facing Homelessness honors a simple purpose: To invite all of us to come closer, and to contribute our unique passions and skills toward the effort of ending homelessness. </p>
                </div>
            </div>
            <div class='section'>
                <div class='section-content'>
                    <h2> Media </h2>
                    <iframe src="https://player.vimeo.com/video/179532941" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    <!--<p><a href="https://vimeo.com/179532941">Just Say Hello // A Facebook Story</a> from <a href="https://vimeo.com/onlytoday">Only Today</a> on <a href="https://vimeo.com">Vimeo</a>.</p>-->
                    <p> To view more videos, <a href='https://www.youtube.com/channel/UCrC2LQb6EI6ExlZlKPq70jQ'>visit our Youtube channel</a>.
                </div>
            </div>
            <div class="section">
                <div class="section-content">
                    <h2> Our Team </h2>
                    <div class='cards'>
                        <?php
                            $dirs = array_filter(glob('*'), 'is_dir');
                            foreach ($dirs as $dir) {
                                $images = glob($dir."/*.jpg");
                                $files = glob($dir.'/homelessness.txt');
                                $roles = glob($dir.'/role.txt');
                                if ($dir[0] == 0)
                                    $dir = $dir[1];
                                foreach ($images as $image) {
                                    echo "<div class='card' onclick='showOverlay(".$dir.")'><div class='flipper'><div class='front' style='background-image: url(".$image.")' id='".$dir."'></div>";
                                    echo "<div class='back'><p class='pname' id='".$dir."pname'>".basename($image, '.jpg')."<br>";
                                    foreach ($roles as $role) {
                                        $rolefile = fopen($role, 'r') or die('Unable to opne file!');
                                        echo fread($rolefile, filesize($role)).'</p>';
                                        fclose($rolefile);
                                    }
                                    echo "<p class='biography' onclick='showOverlay(".$dir.")'> View </p> </div></div>";
                                    foreach ($files as $file) {
                                        $myfile = fopen($file, 'r') or die('Unable to opne file!');
                                        echo "<div class='homeMeaning' id='".$dir."homeMeaning'>".fread($myfile, filesize($file)).'</div></div>';
                                        fclose($myfile);
                                    } 
                                }
                            }     
                        ?>
                    </div>
                    <p> Nancy Waldman, Board President <br> Sue Rooney, Board Vice President </p>
                </div>
            </div>
            <div class="section">
                <div class="section-content">
                    <h2> Contact Us </h2>
                    <p> 206.632.7299 <br>
                        info@facinghomelessness.org
                    </p>

                    <h2> Office Hours </h2>
                    <p>
                        Monday - Friday <br>
                        9 AM to 5 PM Pacific<br>
                    </p>
                </div>
            </div>
            <footer>
                <div class="footer-content">
                    <div class="site-map">
                        <span> 
                            <h4> Get Involved </h4>
                            <p> Passions and Skills </p>
                        </span>
                        <span>
                            <h4> Programs </h4>
                            <p> Photojournalism </p>
                            <p> The Window of Kindness </p>
                            <p> The BLOCK Project </p>
                            <p> The Cities Project </p>
                            <p> Just Say Hello </p>
                        </span>
                        <span>
                            <h4> Donate </h4>
                            <p> Donate Funds </p>
                            <p> Donate Supplies </p>
                            <p> Drop off hours </p>
                        </span>
                        <span>
                            <h4> Community </h4>
                            <p> Grateful </p>
                        </span>
                        <span>
                            <h4> About </h4>
                            <p> Mission </p>
                            <p> History </p>
                            <p> Media </p>
                            <p> Our Team </p>
                            <p> Office Hours </p>
                        </span>
                    </div>
                    <div id="social">
                        <div id="social-content">
                            <h4 class="centered"> Follow us</h4>
                            <div class="social-icons"> 
                                <a class="fb" href="https://www.facebook.com/HomelessInSeattle/">
                                </a>
                                <a class="twitter" href="https://twitter.com/facinghomeless">
                                </a>
                                <a class="instagram" href="https://www.instagram.com/facinghomelessness/">
                                </a>
                                <a class="youtube" href="https://www.youtube.com/channel/UCrC2LQb6EI6ExlZlKPq70jQ">
                                </a>
                                <a class="tumblr" href="http://facing-homelessness.tumblr.com/">
                                </a>
                                <a class="google-plus" href="https://plus.google.com/+FacinghomelessnessOrg/posts">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div id='copyright' style="width: 100%; margin-top: 10px; padding-top: 5px; border-top: 1px solid #626262;">
                        <span> &copy; 
                        <script>
                            var yr = new Date().getFullYear();
                            document.write(yr);
                        </script> 
                        | Facing Homelessness </span>
                        <span> <a href="tel:+1-206-632-7299"> 206.632.7299 </a> </span>
                        <span> <a href="mailto:info@facinghomelessness.org">info@facinghomelessness.org </a> </span>
                    </div>
                </div>
            </footer>
        </div>
        <script>
            var toggle = 0;
            var currentPerson = 1;
            function toggleNav() {
                if (toggle == 0) {
                    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
                    document.ontouchmove = function (e) {
                        e.preventDefault();
                    }
                    document.getElementById("menu-items").style.opacity = "1";
                    document.getElementById("menu-items").style.visibility = "visible";
                    document.getElementById("menu").innerHTML = 'CLOSE';
                    toggle = 1;
                }
                else {
                    document.getElementsByTagName('body')[0].style.overflow = 'auto';
                    document.ontouchmove = function (e) {
                        return true;
                    }   
                    document.getElementById("menu-items").style.opacity = "0";
                    document.getElementById("menu-items").style.visibility = "hidden";
                    document.getElementById("menu").innerHTML = 'MENU';
                    toggle = 0;
                }
            }
            function showOverlay(id) {
                document.getElementsByTagName('body')[0].style.overflow = 'hidden';
                document.getElementById('about').ontouchmove = function (e) {
                    e.preventDefault();
                }
                var overlay = document.getElementById('overlay');
                document.getElementById('name').innerHTML = document.getElementById(id + 'pname').innerHTML;
                document.getElementById('homeContent').innerHTML = document.getElementById(id + 'homeMeaning').innerHTML;
                document.getElementById('img').style.backgroundImage = document.getElementById(id).style.backgroundImage;
                overlay.style.display = 'block';
                currentPerson = id;
            }
            function closeOverlay() {
                document.getElementsByTagName('body')[0].style.overflow = 'auto';
                document.ontouchmove = function (e) {
                    return true;
                }
                document.getElementById('overlay').style.display = 'none';
            }
            function prev() {
                if (currentPerson > 1) {
                    currentPerson = currentPerson - 1;
                    showOverlay(currentPerson);
                }
            }
            function next() {
                currentPerson = currentPerson + 1;
                showOverlay(currentPerson);
            }
        </script>
    </body>
</html>