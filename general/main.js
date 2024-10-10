document.addEventListener("DOMContentLoaded", () => {
    navigateTo(window.location.hash);
});

window.addEventListener("hashchange", () => {
    navigateTo(window.location.hash);
});

function navigateTo(hash) {
    switch (hash) {
        case "#/login":
            loadLoginPage();
            break;
        case "#/signup":
            loadSignUpPage();
            break;
        case "#/message":
            loadMessagePage();
            break; 
        case "#/profile":
            loadProfilePage();
            break;
        case "#/user-manual":
            loadUserManualPage();
            break;
        case "#/contact-us":
            loadContactUsPage();
            break;  
        default:
            loadHomePage();
            break;
    }
}

function renderHeader() {
return  `<header>
                <nav>
                <div class="nav-left">
                    <img src="images/logo.png" class="logo">
                </div>
                <div class="nav-right">
                    <div class="search-box">
                        <img src="images/search.png" >
                        <input type="text"  placeholder="Search here..">
                    </div>
                    <div class="nav-user-icon online">
                        <img src="images/profile_picture.jpeg" onclick="toggleMenu()">
                        
                    </div>
                    <!-- <div class="signout">
                        <img src="images/logout_red-theme.png">
                    </div> -->
                </div>

                <!-- -----------------------profile-drop-down-menu------------------------>    
                <div class="profile-menu-wrap" id="profileMenu">
                    <div class="profile-menu">
                        <div class="user-info">
                            <img src="images/profile_picture.jpeg" >
                            <div>
                                <h3>Alfred Moyo</h3>
                                <a href="#">See your Profile</a>
                            </div>
                        </div>
                        <hr>
                        <a href="#" class="profile-menu-link">
                            <img src="images/feedback.png" >
                            <p>Give Feedback</p>
                            <span>></span>
                        </a>
                        <a href="#" class="profile-menu-link">
                            <img src="images/help.png" >
                            <p>Help and Support</p>
                            <span>></span>
                        </a>
                        <a href="#" class="profile-menu-link">
                            <img src="images/logout-2.png" >
                            <p>Logout</p>
                            <span>></span>
                        </a>
                    </div>
                </div>
            </nav>
            </header>`;
}
function toggleMenu() {
    let profileMenu = document.getElementById("profileMenu");
    profileMenu.classList.toggle("open-menu");
}

// Render the header
document.getElementById("app").innerHTML = renderHeader();

function renderNavigationBar() {
    return `<div class="container">
                <!-------left sidebar------->
                    <div class="left-sidebar">
                        <div class="imp-links">
                            <a href="#/" ><img src="images/Home_blue-theme.png" > Home</a>
                            <a href="#/login"><img src="images/login_blue-theme.png"> Login</a>
                            <a href="#/signup"><img src="images/signup.png"> Sign Up</a>
                            <a href="#/message"><img src="images/messages2_blue-theme.png"> Messages</a>
                            <a href="#/profile"><img src="images/profile2_blue-theme.png"> Profile</a>
                            <a href="#/user-manual"><img src="images/user-manual_blue-theme.png"> User Manual</a>
                            <a href="#/contact-us"><img src="images/contact_blue-theme.png"> Contact Us</a>
                        </div>
                    </div>  
                </div>`;
}

function renderFooter(){
    return `<div class="container footer">
                <div class="social-icons">
                    <a href="#" ><i class="fa-brands fa-youtube"></i></a>
                    <a href="#" ><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" ><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="#" ><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
                <div class="copyright">
                    <p>Copyright © 2024 Eco-Connect | All rights reserved</p>
                </div>
            </div>`;
}

function loadPageContent(content) {
    const app = document.getElementById("app");
    app.innerHTML = renderHeader() + content + renderNavigationBar() + renderFooter()
}

function loadHomePage() {
    const homeContent = `<!-------main content------->
                    <div class="container"> 
                        <div class="main-content">
                            <div class="story-gallery">
                                <div class="story story1">
                                    <img src="images/add-post.png">
                                    <p>Add Post</p>
                                </div>
                                <div class="story story2">
                                    <img src="images/profile.png">
                                    <p>Alice</p>
                                </div>
                                <div class="story story3">
                                    <img src="images/profile.png">
                                    <p>Balati</p>
                                </div>
                                <div class="story story4">
                                    <img src="images/profile.png">
                                    <p>Samuel</p>
                                </div>
                            </div>
                            <div class="create-post">
                                <div class="create-post-input">
                                    <img src="images/profile_picture.jpeg">
                                    <textarea rows="2" placeholder="Write a post"></textarea>
                                    
                                </div>
                                <div class="create-post-links">
                                    <li><img src="images/photo.png" >Photo</li>
                                    <li><img src="images/video.png" >Video</li>
                                    <li><img src="images/event.png" >Event</li>
                                    <li>Post</li>
                                </div>
                            </div>
                            <div class="sort-by">
                                <hr>
                                <p>Sort by: <span>top <img src="images/sort-down-arrow.png" ></span></p>
                            </div>
                            <div class="post">
                                <div class="post-author">
                                    <img src="images/post-nexabyte.png" >
                                    <div>
                                        <h1>Balati Balati</h1>
                                        <small>Founder and  CEO | NexaByte Innovations</small>
                                        <small>&middot; 5 mins ago</small>
                                    </div>
                                </div>
                                <p>At NexaByte Innovations, we are dedicated to pioneering sustainable practices in all 
                                    facets of our operations. We recognize the urgent need to combat climate change, which 
                                    is why we are steadfast in our commitment to achieving a carbon-zero footprint in the 
                                    production of our products. Through innovative technologies, responsible sourcing, and 
                                    renewable energy initiatives, we are working tirelessly to minimize our environmental impact 
                                    and pave the way for a greener future.
                                </p>
                                <img src="images/climate_post-1.jpg" width="100%">
                                <div class="post-stats">
                                    <div>
                                        <img src="images/love_2.png">
                                        <img src="images/thumbs-up.png">
                                        <span class="liked-user">Samuel Timothy and 950 others</span>
                                    </div>
                                    <div>
                                        <span>210 comments &middot; 136 shares</span>
                                    </div>
                                </div>
                                <div class="post-activity">
                                    <div>
                                        <img src="images/profile_picture.jpeg" class="post-activity-user-icon">
                                        <img src="images/sort-down-arrow.png" class="post-activity-arrow-icon">
                                    </div>
                                    <div class="post-activity-link">
                                        <img src="images/thumbs-up.png" >
                                        <span>Like</span>
                                    </div>
                                    <div class="post-activity-link">
                                        <img src="images/comment.png" >
                                        <span>Comment</span>
                                    </div>
                                    <div class="post-activity-link">
                                        <img src="images/share.png" >
                                        <span>Share</span>
                                    </div>
                                    <div class="post-activity-link">
                                        <img src="images/send.png" >
                                        <span>Send</span>
                                    </div>
                                </div>
                            </div>
                            <div class="post">
                                <div class="post-author">
                                    <img src="images/profile2.png" >
                                    <div>
                                        <h1>Edwin Shayo</h1>
                                        <small>Ambassador | Go-Green Movement</small>
                                        <small>&middot; 1 hour ago</small>
                                    </div>
                                </div>
                                <p>As ambassadors of the Go-Green Movement, we champion sustainability 
                                    at every turn. Our mission is clear: to lead by example in the fight 
                                    against climate change. We are proud to announce our unwavering dedication 
                                    to achieving a carbon-zero footprint in all aspects of our activities. 
                                    Through advocacy, education, and actionable initiatives, we strive to inspire 
                                    others to join us on this crucial journey towards a more sustainable future for generations to come.
                                </p>
                                <img src="images/climate_post-2.jpg" width="100%">
                                <div class="post-stats">
                                    <div>
                                        <img src="images/love_2.png">
                                        <img src="images/thumbs-up.png">
                                        <span class="liked-user">Tobi Lean and 3k others</span>
                                    </div>
                                    <div>
                                        <span>210 comments &middot; 136 shares</span>
                                    </div>
                                </div>
                                <div class="post-activity">
                                    <div>
                                        <img src="images/profile_picture.jpeg" class="post-activity-user-icon">
                                        <img src="images/sort-down-arrow.png" class="post-activity-arrow-icon">
                                    </div>
                                    <div class="post-activity-link">
                                        <img src="images/thumbs-up.png" >
                                        <span>Like</span>
                                    </div>
                                    <div class="post-activity-link">
                                        <img src="images/comment.png" >
                                        <span>Comment</span>
                                    </div>
                                    <div class="post-activity-link">
                                        <img src="images/share.png" >
                                        <span>Share</span>
                                    </div>
                                    <div class="post-activity-link">
                                        <img src="images/send.png" >
                                        <span>Send</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-------right sidebar------->
                        <div class="right-sidebar">
                            <div class="sidebar-title">
                                <h4>Events</h4>
                                <a href="#">See All</a>                    
                            </div>

                            <div class="event">
                                <div class="left-event">
                                    <h3>28</h3>
                                    <span>February</span>
                                </div>
                                <div class="right-event">
                                    <h4>Go-Green Awareness💚</h4>
                                    <p><i class="fa-solid fa-location-dot"></i> Ebene Tech Park</p>
                                    <a href="#">More Info</a>
                                </div>
                            </div>

                            <div class="event">
                                <div class="left-event">
                                    <h3>02</h3>
                                    <span>March</span>
                                </div>
                                <div class="right-event">
                                    <h4>Launch Day🚀</h4>
                                    <p><i class="fa-solid fa-location-dot"></i> Online Event</p>
                                    <a href="https://meet.google.com/rdv-mhtq-trw">Join Now</a>
                                </div>
                            </div>
                            <div class="sidebar-title">
                                <h4>Advertisement</h4>
                                <a href="#">Close</a>                    
                            </div>
                            <img src="images/ad.jpg" class="sidebar-ads">
                        </div>
                </div>`;
    loadPageContent(homeContent);
}
function loadMessagePage() {
    const messageContent = `<div class="messages-container">
                                <div class="messages-left">
                                    <div class="messages-left-title">
                                        <h2>Messages</h2>
                                        <hr>
                                        <h3>Make new connections  to receive messages.</h3>
                                        <p>You have no messages yet.</p>
                                    </div>
                                </div> 
                                <div class="messages-right">
                                    <img src="images/messages.svg">
                                </div>
                            </div>`;
    loadPageContent(messageContent);
}
function loadProfilePage() {
    const profileContent = `<div class="profile-container">
                                <div class="profile-left">
                                    <div class="profile-left-title">
                                        <h2>User-Profile</h2>
                                        <hr>
                                    </div>
                                    <div class="profile-info">
                                        <img src="images/profile3.jpg">
                                        <ul>
                                            <li><p>0 posts</p></li>
                                            <li><p>0 followers</p></li>
                                            <li><p>0 following</p></li>
                                        </ul> 
                                    </div>
                                    <div class="profile-details">
                                        <h4>Name:</h4>
                                        <p>Ethan Blake</p>
                                        <h4>Email:</h4>
                                        <p>test@gmail.com</p>
                                        <h4>Username:</h4>
                                        <p>change-pioneer</p>
                                        <h4>Age:</h4>
                                        <p>18</p>
                                        <h4>Gender:</h4>
                                        <p>Male</p>
                                        <h4>Phone-Number:</h4>
                                        <p>(230) 5789 4321</p>
                                    </div>
                                </div> 
                                <div class="profile-right">
                                    <img src="images/profile.svg">
                                </div>
                            </div>`;
    loadPageContent(profileContent);
}
function loadUserManualPage() {
    const usermanualContent = `<div class="user-manual-container">
                                    <div class="user-manual-left">
                                        <div class="user-manual-left-title">
                                            <h2>User Manual</h2>
                                            <hr>
                                            <h3>Find below the application guide and terms  & conditions.</h3>
                                            <a href="#" class="user-manual-doc">
                                                <img src="images/pdf.png">
                                                <p>Eco-Connect v1.1</p>
                                            </a>
                                            <a href="#" class="user-manual-doc">
                                                <img src="images/pdf.png">
                                                <p>Eco-Connect User-Guide</p>
                                            </a>
                                            <a href="#" class="user-manual-doc">
                                                <img src="images/pdf.png">
                                                <p>Eco-Connect Terms & Conditions</p>
                                            </a>
                                        </div>
                                    </div> 
                                    <div class="user-manual-right">
                                        <img src="images/user-manual.svg">
                                    </div>
                                </div>`;
    loadPageContent(usermanualContent);
}
function loadContactUsPage() {
    const contactusContent = `<div class="contact-container">
    <form action="https://api.web3forms.com/submit" method="POST" class="contact-left">
        <div class="contact-left-title">
            <h2>Get in touch</h2>
            <hr>
        </div>
        <input type="hidden" name="access_key" value="bf165a5c-fe4f-4f37-a976-1946c50a1106">
        <input type="text" name="name" placeholder="Your Name" class="contact-inputs" required>
        <input type="email" name="email" placeholder="Your Email" class="contact-inputs" required>
        <textarea name="message" placeholder="Your Message" class="contact-inputs" required></textarea>
        <button type="submit">Submit <img src="images/right arrow.png" ></button>
    </form>
    <div class="contact-right">
        <img src="images/contact-us.svg">
    </div>
</div>
                              
                          `;
    loadPageContent(contactusContent);
}

function loadLoginPage(){
    const loginContent = `
                            <div class="login-container">
                                <div class="forms-container">
                                    <div class="signin-signup">
                                        <form action="" class="sign-in-form">
                                            <h2 class="title">Sign In</h2>
                                            <div class="input-field">
                                                <i class="fas  fa-user"></i>
                                                <input type="text" placeholder="Username" />   
                                            </div>
                                            <div class="input-field">
                                                <i class="fas  fa-lock"></i>
                                                <input type="password" placeholder="Password" />   
                                            </div>
                                            <input type="submit" value="login" class="btn solid">
                                            <p class="social-text">Or Sign in with social platforms</p>
                                            <div class="social-media">
                                                <a href="#" class="social-icon">
                                                    <i class="fab fa-facebook-f"></i>
                                                </a>
                                                <a href="#" class="social-icon">
                                                    <i class="fab fa-x-twitter"></i>
                                                </a>
                                                <a href="#" class="social-icon">
                                                    <i class="fab fa-google"></i>
                                                </a>
                                                <a href="#" class="social-icon">
                                                    <i class="fab fa-linkedin-in"></i>
                                                </a>
                                            </div>
                                        </form>

                                        
                                    </div>
                                </div>
                                <div class="panels-container">
                                    <div class="panel left-panel">
                                        <div class="content">
                                            <h3>Already a member?</h3>
                                            <p>Ready to reconnect? Jump back into the conversation and spark something new!</p>
                                        </div>
                                        <img src="images/sign-up.svg" class="image" alt="">
                                    </div>
                                    
                                </div>
                            </div>`;
    
    loadPageContent(loginContent);
}


function loadSignUpPage(){
    const signupContent = `
                            <div class="login-container">
                                <div class="forms-container">
                                    <div class="signin-signup">

                                        <form action="/M00881072/signup"  method="post" class="sign-up-form">
                                            <h2 class="title">Sign Up</h2>
                                            <div class="input-field">
                                                <i class="fas  fa-envelope"></i>
                                                <input type="email" placeholder="Email" />   
                                            </div>
                                            <div class="input-field">
                                                <i class="fas  fa-user"></i>
                                                <input type="text" placeholder="Username" />   
                                            </div>
                                            <div class="input-field">
                                                <i class="fas  fa-user"></i>
                                                <input type="number" placeholder="Age" />   
                                            </div>
                                            <div class="input-field">
                                                <i class="fas  fa-venus-mars"></i>
                                                <input type="text" placeholder="Gender" />   
                                            </div>
                                            <div class="input-field">
                                                <i class="fas  fa-lock"></i>
                                                <input type="password" placeholder="Password" />   
                                            </div>
                                            <button type="submit" class="btn solid">Sign up</button>
                                            <p class="social-text">Or Sign up with social platforms</p>
                                            <div class="social-media">
                                                <a href="#" class="social-icon">
                                                    <i class="fab fa-facebook-f"></i>
                                                </a>
                                                <a href="#" class="social-icon">
                                                    <i class="fab fa-x-twitter"></i>
                                                </a>
                                                <a href="#" class="social-icon">
                                                    <i class="fab fa-google"></i>
                                                </a>
                                                <a href="#" class="social-icon">
                                                    <i class="fab fa-linkedin-in"></i>
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="panels-container">
                                    <div class="panel left-panel">
                                        <div class="content">
                                            <h3>New here?</h3>
                                            <p>Click here to join our community! It's quick, easy, and free.</p>
                                            <p>Sign up now and start connecting! We can't wait to welcome you.</p>
                                            <button class="btn transparent" id="sign-up-btn">Sign Up</button>
                                        </div>
                                        <img src="images/sign-up.svg" class="image">
                                    </div>
                                    <div class="panel right-panel">
                                        <div class="content">
                                            <p>Welcome to Eco-Connect! Begin your journey by creating an account and unlocking a world of possibilities.</p>
                                            
                                        </div>
                                        <img src="images/sign-in.svg" class="image">
                                    </div>
                                </div>
                            </div>`;
    
    loadPageContent(signupContent);

}
document.addEventListener("DOMContentLoaded", function() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".login-container");

    //for signup animation

    sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");

    });
    
    sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
    });
});

// Load the signup page initially
loadSignUpPage();


