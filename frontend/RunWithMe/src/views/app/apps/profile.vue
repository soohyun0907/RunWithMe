<template>
    <div class="main-content">
        
         <breadcumb :page="'User Profile'" :folder="'Pages'" />

        <div class="card user-profile o-hidden mb-30">
            <div class="header-cover" style="background-image: url(http://gull-html-laravel.ui-lib.com/assets/images/photo-wide-5.jpeg"></div>
                <div class="user-info">
                    <img class="profile-picture avatar-lg mb-2" src="http://gull-html-laravel.ui-lib.com/assets/images/faces/1.jpg" alt="">
                        <p class="m-0 text-24">Timothy Carlson</p>
                        <p class="text-muted m-0">Digital Marketer</p>
            </div>
            <div class="card-body">
                <div>
                    <b-tabs content-class="mt-3" align="center">
                        <b-tab title="Timeline" active>
                            <ul class="timeline clearfix">
                                <li class="timeline-line"></li>
                                <li class="timeline-item">
                                    <div class="timeline-badge">
                                        <i class="badge-icon bg-primary text-white i-Cloud-Picture"></i>
                                    </div>
                                    <div class="timeline-card card">
                                        <div class="card-body">
                                            <div class="mb-1">
                                                <strong class="mr-1">Timothy Carlson</strong> added a new photo
                                                <p class="text-muted">3 hours ago</p>
                                            </div>
                                            <img class="rounded mb-2" src="http://gull-html-laravel.ui-lib.com/assets/images/photo-wide-1.jpg" alt="">
                                            <div class="mb-3">
                                                <a href="#" class="mr-1">Like</a>
                                                <a href="#">Comment</a>
                                            </div>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Write comment" aria-label="comment">
                                                <div class="input-group-append">
                                                    <button class="btn btn-primary" type="button" id="button-comment1">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="timeline-item">
                                    <div class="timeline-badge">
                                        <img class="badge-img" src="http://gull-html-laravel.ui-lib.com/assets/images/faces/1.jpg" alt="">
                                    </div>
                                    <div class="timeline-card card">
                                        <div class="card-body">
                                            <div class="mb-1">
                                                <strong class="mr-1">Timothy Carlson</strong> updated his sattus
                                                <p class="text-muted">16 hours ago</p>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta beatae illo illum iusto iste mollitia explicabo quam officia. Quas ullam, quisquam architecto aspernatur enim iure debitis dignissimos suscipit
                                                ipsa.
                                            </p>
                                            <div class="mb-3">
                                                <a href="#" class="mr-1">Like</a>
                                                <a href="#">Comment</a>
                                            </div>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Write comment" aria-label="comment">
                                                <div class="input-group-append">
                                                    <button class="btn btn-primary" type="button" id="button-comment">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="timeline clearfix">
                                <li class="timeline-line"></li>
                                <li class="timeline-group text-center">
                                    <button class="btn btn-icon-text btn-primary"><i class="i-Calendar-4"></i> 2018</button>
                                </li>
                            </ul>
                            <ul class="timeline clearfix">
                                <li class="timeline-line"></li>
                                <li class="timeline-item">
                                    <div class="timeline-badge">
                                        <i class="badge-icon bg-danger text-white i-Love-User"></i>
                                    </div>
                                    <div class="timeline-card card">
                                        <div class="card-body">
                                            <div class="mb-1">
                                                <strong class="mr-1">New followers</strong>
                                                <p class="text-muted">2 days ago</p>
                                            </div>
                                            <p><a href="#">Henry krick</a> and 16 others followed you</p>
                                            <div class="mb-3">
                                                <a href="#" class="mr-1">Like</a>
                                                <a href="#">Comment</a>
                                            </div>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Write comment" aria-label="comment">
                                                <div class="input-group-append">
                                                    <button class="btn btn-primary" type="button" id="button-comment3">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="timeline-item">
                                    <div class="timeline-badge">
                                        <i class="badge-icon bg-primary text-white i-Cloud-Picture"></i>
                                    </div>
                                    <div class="timeline-card card">
                                        <div class="card-body">
                                            <div class="mb-1">
                                                <strong class="mr-1">Timothy Carlson</strong> added a new photo
                                                <p class="text-muted">2 days ago</p>
                                            </div>
                                            <img class="rounded mb-2" src="http://gull-html-laravel.ui-lib.com/assets/images/photo-wide-2.jpg" alt="">
                                            <div class="mb-3">
                                                <a href="#" class="mr-1">Like</a>
                                                <a href="#">Comment</a>
                                            </div>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Write comment" aria-label="comment">
                                                <div class="input-group-append">
                                                    <button class="btn btn-primary" type="button" id="button-comment4">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="timeline clearfix">
                                <li class="timeline-line"></li>
                                <li class="timeline-group text-center">
                                    <button class="btn btn-icon-text btn-warning"><i class="i-Calendar-4"></i> Joined
                                        in 2013</button>
                                </li>
                            </ul>

                        </b-tab>
                        <b-tab title="About">
                            <h4>Personal Information</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, commodi quam! Provident quis voluptate asperiores ullam, quidem odio pariatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, nulla eos?
                                Cum non ex voluptate corporis id asperiores doloribus dignissimos blanditiis iusto qui repellendus deleniti aliquam, vel quae eligendi explicabo.
                            </p>

                            <hr>

                            <div class="row">
                                <div class="col-md-4 col-6">
                                    <div class=" mb-30">
                                        <p class="text-primary mb-1"><i class="i-Calendar text-16 mr-1"></i> Birth Date</p>
                                        <span>1 Jan, 1994</span>
                                    </div>
                                    <div class=" mb-30">
                                        <p class="text-primary mb-1"><i class="i-Edit-Map text-16 mr-1"></i> Birth Place</p>
                                        <span>Dhaka, DB</span>
                                    </div>
                                    <div class=" mb-30">
                                        <p class="text-primary mb-1"><i class="i-Globe text-16 mr-1"></i> Lives In</p>
                                        <span>Dhaka, DB</span>
                                    </div>
                                </div>
                                <div class="col-md-4 col-6">
                                    <div class=" mb-30">
                                        <p class="text-primary mb-1"><i class="i-MaleFemale text-16 mr-1"></i> Gender</p>
                                        <span>1 Jan, 1994</span>
                                    </div>
                                    <div class=" mb-30">
                                        <p class="text-primary mb-1"><i class="i-MaleFemale text-16 mr-1"></i> Email</p>
                                        <span>example@ui-lib.com</span>
                                    </div>
                                    <div class=" mb-30">
                                        <p class="text-primary mb-1"><i class="i-Cloud-Weather text-16 mr-1"></i> Website</p>
                                        <span>www.ui-lib.com</span>
                                    </div>
                                </div>
                                <div class="col-md-4 col-6">
                                    <div class=" mb-30">
                                        <p class="text-primary mb-1"><i class="i-Face-Style-4 text-16 mr-1"></i> Profession</p>
                                        <span>Digital Marketer</span>
                                    </div>
                                    <div class=" mb-30">
                                        <p class="text-primary mb-1"><i class="i-Professor text-16 mr-1"></i> Experience</p>
                                        <span>8 Years</span>
                                    </div>
                                    <div class=" mb-30">
                                        <p class="text-primary mb-1"><i class="i-Home1 text-16 mr-1"></i> School</p>
                                        <span>School of Digital Marketing</span>
                                    </div>
                                </div>
                            </div>

                            <hr>

                            <h4>Other Info</h4>

                            <p class=" mb-30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolore labore reiciendis ab quo ducimus reprehenderit natus debitis, provident ad iure sed aut animi dolor incidunt voluptatem. Blanditiis, nobis aut.</p>

                            <div class="row">
                                <div class="col-md-2 col-sm-4 col-6 text-center">
                                    <i class="i-Plane text-32 text-primary"></i>
                                    <p class="text-16 mt-1">Travelling</p>
                                </div>
                                <div class="col-md-2 col-sm-4 col-6 text-center">
                                    <i class="i-Camera text-32 text-primary"></i>
                                    <p class="text-16 mt-1">Photography</p>
                                </div>
                                <div class="col-md-2 col-sm-4 col-6 text-center">
                                    <i class="i-Car-3 text-32 text-primary"></i>
                                    <p class="text-16 mt-1">Driving</p>
                                </div>
                                <div class="col-md-2 col-sm-4 col-6 text-center">
                                    <i class="i-Gamepad-2 text-32 text-primary"></i>
                                    <p class="text-16 mt-1">Gaming</p>
                                </div>
                                <div class="col-md-2 col-sm-4 col-6 text-center">
                                    <i class="i-Music-Note-2 text-32 text-primary"></i>
                                    <p class="text-16 mt-1">Music</p>
                                </div>
                                <div class="col-md-2 col-sm-4 col-6 text-center">
                                    <i class="i-Shopping-Bag text-32 text-primary"></i>
                                    <p class="text-16 mt-1">Shopping</p>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab title="Friends">
                            <b-row>
                                <b-col md="3">
                                    <b-card class="card-profile-1 mb-30 text-center">
                                        <div class="avatar box-shadow-2 mb-3">
                                            <img src="@/assets/images/faces/16.jpg" alt="">
                                        </div>
                                        <h5 class="m-0">Jassica Hike</h5>
                                        <p class="mt-0">UI/UX Designer</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque.</p>
                                        <button class="btn btn-primary btn-rounded">Contact Jassica</button>
                                        <div class="card-socials-simple mt-4">
                                                <a href="">
                                                    <i class="i-Linkedin-2"></i>
                                                </a>
                                                <a href="">
                                                    <i class="i-Facebook-2"></i>
                                                </a>
                                                <a href="">
                                                    <i class="i-Twitter"></i>
                                                </a>
                                            </div>
                                    </b-card>
                                </b-col>
                                <b-col md="3">
                                    <b-card class="card-profile-1 mb-30 text-center">
                                        <div class="avatar box-shadow-2 mb-3">
                                            <img src="@/assets/images/faces/2.jpg" alt="">
                                        </div>
                                        <h5 class="m-0">Frank Powell</h5>
                                        <p class="mt-0">UI/UX Designer</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque.</p>
                                        <button class="btn btn-primary btn-rounded">Contact Jassica</button>
                                        <div class="card-socials-simple mt-4">
                                                <a href="">
                                                    <i class="i-Linkedin-2"></i>
                                                </a>
                                                <a href="">
                                                    <i class="i-Facebook-2"></i>
                                                </a>
                                                <a href="">
                                                    <i class="i-Twitter"></i>
                                                </a>
                                            </div>
                                    </b-card>
                                </b-col>
                                <b-col md="3">
                                    <b-card class="card-profile-1 mb-30 text-center">
                                        <div class="avatar box-shadow-2 mb-3">
                                            <img src="@/assets/images/faces/3.jpg" alt="">
                                        </div>
                                        <h5 class="m-0">Jassica Hike</h5>
                                        <p class="mt-0">UI/UX Designer</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque.</p>
                                        <button class="btn btn-primary btn-rounded">Arthur Mendoza</button>
                                        <div class="card-socials-simple mt-4">
                                                <a href="">
                                                    <i class="i-Linkedin-2"></i>
                                                </a>
                                                <a href="">
                                                    <i class="i-Facebook-2"></i>
                                                </a>
                                                <a href="">
                                                    <i class="i-Twitter"></i>
                                                </a>
                                            </div>
                                    </b-card>
                                </b-col>
                                <b-col md="3">
                                    <b-card class="card-profile-1 mb-30 text-center">
                                        <div class="avatar box-shadow-2 mb-3">
                                            <img src="@/assets/images/faces/4.jpg" alt="">
                                        </div>
                                        <h5 class="m-0">Jassica Hike</h5>
                                        <p class="mt-0">UI/UX Designer</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque.</p>
                                        <button class="btn btn-primary btn-rounded">Jacqueline Day</button>
                                        <div class="card-socials-simple mt-4">
                                                <a href="">
                                                    <i class="i-Linkedin-2"></i>
                                                </a>
                                                <a href="">
                                                    <i class="i-Facebook-2"></i>
                                                </a>
                                                <a href="">
                                                    <i class="i-Twitter"></i>
                                                </a>
                                            </div>
                                    </b-card>
                                </b-col>
                            </b-row>
                        </b-tab>
                    </b-tabs>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Profile"
  },
}
</script>

