<template>
    <div class="main-content">
        
        <breadcumb :page="'Task Manager'" :folder="'Apps'" />
       

        <!-- content-start -->
        <b-row>
            <b-col md="9">
                <b-row>
                    <b-col xl="6">
                        <b-card class=" mb-30">
                            <div class="d-sm-flex align-item-sm-center flex-sm-nowrap">
                                            <div>
                                                <h5><a href="">#23. New icons set for an iOS app</a></h5>
                                                <p class="ul-task-manager__paragraph mb-3">A collection of textile samples ..</p>

                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle " width="36" height="36" alt="corrupted">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle" width="36" height="36" alt="corrupted 2">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle" width="36" height="36" alt="corrupted 2">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <i class="ul-task-manager__fonts i-Add text-30 " style="vertical-align:middle"></i>
                                                </a>
                                                <a href="" class="btn btn-icon bg-transparent border-slate-300 text-slate rounded-round border-dashed"><i class="icon-plus22"></i></a>
                                            </div>

                                            <ul class="list list-unstyled mb-0 mt-3 mt-sm-0 ml-auto">
                                                <li><span class="ul-task-manager__font-date text-muted">20 Jan,2015</span></li>
                                                <!-- <li class="dropdown">
                                                    Priority: &nbsp;
                                                    <a href="#" class="badge badge-danger align-top dropdown-toggle" data-toggle="dropdown">Blocker</a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a href="#" class="dropdown-item active"><span class="badge badge-mark mr-2 border-danger"></span> Blocker</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-warning-400"></span> High priority</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-success"></span> Normal priority</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-grey-300"></span> Low priority</a>
                                                    </div>
                                                </li> -->
                                                <li><a href="#">Eternity app</a></li>
                                            </ul>
                                        </div>
                                     <div slot="footer">
                                        <small class="text-muted d-sm-flex justify-content-sm-between align-items-sm-center">
                                            <span>Due: <span class="font-weight-semibold">18 hours</span></span>
                                            
                                            

                                            
                                            <div class="list-inline mb-0 mt-2 mt-sm-0">
                                                <b-dropdown  variant="link p-0" toggle-class="text-decoration-none" no-caret>
                                                    <template slot="button-content">On hold</template>
                                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                                </b-dropdown>

                                                <b-dropdown  variant="link p-2" toggle-class="text-decoration-none" no-caret>
                                                    <template slot="button-content"><i class="i-Gear-2"></i></template>
                                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                                </b-dropdown>
                                            </div>
                                        </small>
                                    </div>     
                                        
                        </b-card>
                    </b-col>
                    <b-col xl="6">
                        <b-card class=" mb-30">
                            <div class="d-sm-flex align-item-sm-center flex-sm-nowrap">
                                            <div>
                                                <h5><a href="">#23. New icons set for an iOS app</a></h5>
                                                <p class="ul-task-manager__paragraph mb-3">A collection of textile samples ..</p>

                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle " width="36" height="36" alt="corrupted">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle" width="36" height="36" alt="corrupted 2">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle" width="36" height="36" alt="corrupted 2">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <i class="ul-task-manager__fonts i-Add text-30 " style="vertical-align:middle"></i>
                                                </a>
                                                <a href="" class="btn btn-icon bg-transparent border-slate-300 text-slate rounded-round border-dashed"><i class="icon-plus22"></i></a>
                                            </div>

                                            <ul class="list list-unstyled mb-0 mt-3 mt-sm-0 ml-auto">
                                                <li><span class="ul-task-manager__font-date text-muted">20 Jan,2015</span></li>
                                                <!-- <li class="dropdown">
                                                    Priority: &nbsp;
                                                    <a href="#" class="badge badge-danger align-top dropdown-toggle" data-toggle="dropdown">Blocker</a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a href="#" class="dropdown-item active"><span class="badge badge-mark mr-2 border-danger"></span> Blocker</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-warning-400"></span> High priority</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-success"></span> Normal priority</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-grey-300"></span> Low priority</a>
                                                    </div>
                                                </li> -->
                                                <li><a href="#">Eternity app</a></li>
                                            </ul>
                                        </div>
                                     <div slot="footer">
                                        <small class="text-muted d-sm-flex justify-content-sm-between align-items-sm-center">
                                            <span>Due: <span class="font-weight-semibold">18 hours</span></span>
                                            
                                            

                                            
                                            <div class="list-inline mb-0 mt-2 mt-sm-0">
                                                <b-dropdown  variant="link p-0" toggle-class="text-decoration-none" no-caret>
                                                    <template slot="button-content">On hold</template>
                                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                                </b-dropdown>

                                                <b-dropdown  variant="link p-2" toggle-class="text-decoration-none" no-caret>
                                                    <template slot="button-content"><i class="i-Gear-2"></i></template>
                                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                                </b-dropdown>
                                            </div>
                                        </small>
                                    </div>     
                                        
                        </b-card>
                    </b-col>
                    <b-col xl="6">
                        <b-card class=" mb-30">
                            <div class="d-sm-flex align-item-sm-center flex-sm-nowrap">
                                            <div>
                                                <h5><a href="">#23. New icons set for an iOS app</a></h5>
                                                <p class="ul-task-manager__paragraph mb-3">A collection of textile samples ..</p>

                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle " width="36" height="36" alt="corrupted">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle" width="36" height="36" alt="corrupted 2">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle" width="36" height="36" alt="corrupted 2">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <i class="ul-task-manager__fonts i-Add text-30 " style="vertical-align:middle"></i>
                                                </a>
                                                <a href="" class="btn btn-icon bg-transparent border-slate-300 text-slate rounded-round border-dashed"><i class="icon-plus22"></i></a>
                                            </div>

                                            <ul class="list list-unstyled mb-0 mt-3 mt-sm-0 ml-auto">
                                                <li><span class="ul-task-manager__font-date text-muted">20 Jan,2015</span></li>
                                                <!-- <li class="dropdown">
                                                    Priority: &nbsp;
                                                    <a href="#" class="badge badge-danger align-top dropdown-toggle" data-toggle="dropdown">Blocker</a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a href="#" class="dropdown-item active"><span class="badge badge-mark mr-2 border-danger"></span> Blocker</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-warning-400"></span> High priority</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-success"></span> Normal priority</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-grey-300"></span> Low priority</a>
                                                    </div>
                                                </li> -->
                                                <li><a href="#">Eternity app</a></li>
                                            </ul>
                                        </div>
                                     <div slot="footer">
                                        <small class="text-muted d-sm-flex justify-content-sm-between align-items-sm-center">
                                            <span>Due: <span class="font-weight-semibold">18 hours</span></span>
                                            
                                            

                                            
                                            <div class="list-inline mb-0 mt-2 mt-sm-0">
                                                <b-dropdown  variant="link p-0" toggle-class="text-decoration-none" no-caret>
                                                    <template slot="button-content">On hold</template>
                                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                                </b-dropdown>

                                                <b-dropdown  variant="link p-2" toggle-class="text-decoration-none" no-caret>
                                                    <template slot="button-content"><i class="i-Gear-2"></i></template>
                                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                                </b-dropdown>
                                            </div>
                                        </small>
                                    </div>     
                                        
                        </b-card>
                    </b-col>
                    <b-col xl="6">
                        <b-card class=" mb-30">
                            <div class="d-sm-flex align-item-sm-center flex-sm-nowrap">
                                            <div>
                                                <h5><a href="">#23. New icons set for an iOS app</a></h5>
                                                <p class="ul-task-manager__paragraph mb-3">A collection of textile samples ..</p>

                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle " width="36" height="36" alt="corrupted">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle" width="36" height="36" alt="corrupted 2">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle" width="36" height="36" alt="corrupted 2">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <i class="ul-task-manager__fonts i-Add text-30 " style="vertical-align:middle"></i>
                                                </a>
                                                <a href="" class="btn btn-icon bg-transparent border-slate-300 text-slate rounded-round border-dashed"><i class="icon-plus22"></i></a>
                                            </div>

                                            <ul class="list list-unstyled mb-0 mt-3 mt-sm-0 ml-auto">
                                                <li><span class="ul-task-manager__font-date text-muted">20 Jan,2015</span></li>
                                                <!-- <li class="dropdown">
                                                    Priority: &nbsp;
                                                    <a href="#" class="badge badge-danger align-top dropdown-toggle" data-toggle="dropdown">Blocker</a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a href="#" class="dropdown-item active"><span class="badge badge-mark mr-2 border-danger"></span> Blocker</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-warning-400"></span> High priority</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-success"></span> Normal priority</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-grey-300"></span> Low priority</a>
                                                    </div>
                                                </li> -->
                                                <li><a href="#">Eternity app</a></li>
                                            </ul>
                                        </div>
                                     <div slot="footer">
                                        <small class="text-muted d-sm-flex justify-content-sm-between align-items-sm-center">
                                            <span>Due: <span class="font-weight-semibold">18 hours</span></span>
                                            
                                            

                                            
                                            <div class="list-inline mb-0 mt-2 mt-sm-0">
                                                <b-dropdown  variant="link p-0" toggle-class="text-decoration-none" no-caret>
                                                    <template slot="button-content">On hold</template>
                                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                                </b-dropdown>

                                                <b-dropdown  variant="link p-2" toggle-class="text-decoration-none" no-caret>
                                                    <template slot="button-content"><i class="i-Gear-2"></i></template>
                                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                                </b-dropdown>
                                            </div>
                                        </small>
                                    </div>     
                                        
                        </b-card>
                    </b-col>
                    <b-col xl="6">
                        <b-card class=" mb-30">
                            <div class="d-sm-flex align-item-sm-center flex-sm-nowrap">
                                            <div>
                                                <h5><a href="">#23. New icons set for an iOS app</a></h5>
                                                <p class="ul-task-manager__paragraph mb-3">A collection of textile samples ..</p>

                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle " width="36" height="36" alt="corrupted">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle" width="36" height="36" alt="corrupted 2">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle" width="36" height="36" alt="corrupted 2">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <i class="ul-task-manager__fonts i-Add text-30 " style="vertical-align:middle"></i>
                                                </a>
                                                <a href="" class="btn btn-icon bg-transparent border-slate-300 text-slate rounded-round border-dashed"><i class="icon-plus22"></i></a>
                                            </div>

                                            <ul class="list list-unstyled mb-0 mt-3 mt-sm-0 ml-auto">
                                                <li><span class="ul-task-manager__font-date text-muted">20 Jan,2015</span></li>
                                                <!-- <li class="dropdown">
                                                    Priority: &nbsp;
                                                    <a href="#" class="badge badge-danger align-top dropdown-toggle" data-toggle="dropdown">Blocker</a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a href="#" class="dropdown-item active"><span class="badge badge-mark mr-2 border-danger"></span> Blocker</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-warning-400"></span> High priority</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-success"></span> Normal priority</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-grey-300"></span> Low priority</a>
                                                    </div>
                                                </li> -->
                                                <li><a href="#">Eternity app</a></li>
                                            </ul>
                                        </div>
                                     <div slot="footer">
                                        <small class="text-muted d-sm-flex justify-content-sm-between align-items-sm-center">
                                            <span>Due: <span class="font-weight-semibold">18 hours</span></span>
                                            
                                            

                                            
                                            <div class="list-inline mb-0 mt-2 mt-sm-0">
                                                <b-dropdown  variant="link p-0" toggle-class="text-decoration-none" no-caret>
                                                    <template slot="button-content">On hold</template>
                                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                                </b-dropdown>

                                                <b-dropdown  variant="link p-2" toggle-class="text-decoration-none" no-caret>
                                                    <template slot="button-content"><i class="i-Gear-2"></i></template>
                                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                                </b-dropdown>
                                            </div>
                                        </small>
                                    </div>     
                                        
                        </b-card>
                    </b-col>
                    <b-col xl="6">
                        <b-card class=" mb-30">
                            <div class="d-sm-flex align-item-sm-center flex-sm-nowrap">
                                            <div>
                                                <h5><a href="">#23. New icons set for an iOS app</a></h5>
                                                <p class="ul-task-manager__paragraph mb-3">A collection of textile samples ..</p>

                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle " width="36" height="36" alt="corrupted">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle" width="36" height="36" alt="corrupted 2">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle" width="36" height="36" alt="corrupted 2">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <i class="ul-task-manager__fonts i-Add text-30 " style="vertical-align:middle"></i>
                                                </a>
                                                <a href="" class="btn btn-icon bg-transparent border-slate-300 text-slate rounded-round border-dashed"><i class="icon-plus22"></i></a>
                                            </div>

                                            <ul class="list list-unstyled mb-0 mt-3 mt-sm-0 ml-auto">
                                                <li><span class="ul-task-manager__font-date text-muted">20 Jan,2015</span></li>
                                                <!-- <li class="dropdown">
                                                    Priority: &nbsp;
                                                    <a href="#" class="badge badge-danger align-top dropdown-toggle" data-toggle="dropdown">Blocker</a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a href="#" class="dropdown-item active"><span class="badge badge-mark mr-2 border-danger"></span> Blocker</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-warning-400"></span> High priority</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-success"></span> Normal priority</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-grey-300"></span> Low priority</a>
                                                    </div>
                                                </li> -->
                                                <li><a href="#">Eternity app</a></li>
                                            </ul>
                                        </div>
                                     <div slot="footer">
                                        <small class="text-muted d-sm-flex justify-content-sm-between align-items-sm-center">
                                            <span>Due: <span class="font-weight-semibold">18 hours</span></span>
                                            
                                            

                                            
                                            <div class="list-inline mb-0 mt-2 mt-sm-0">
                                                <b-dropdown  variant="link p-0" toggle-class="text-decoration-none" no-caret>
                                                    <template slot="button-content">On hold</template>
                                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                                </b-dropdown>

                                                <b-dropdown  variant="link p-2" toggle-class="text-decoration-none" no-caret>
                                                    <template slot="button-content"><i class="i-Gear-2"></i></template>
                                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                                </b-dropdown>
                                            </div>
                                        </small>
                                    </div>     
                                        
                        </b-card>
                    </b-col>
                    <b-col xl="6">
                        <b-card class=" mb-30">
                            <div class="d-sm-flex align-item-sm-center flex-sm-nowrap">
                                            <div>
                                                <h5><a href="">#23. New icons set for an iOS app</a></h5>
                                                <p class="ul-task-manager__paragraph mb-3">A collection of textile samples ..</p>

                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle " width="36" height="36" alt="corrupted">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle" width="36" height="36" alt="corrupted 2">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle" width="36" height="36" alt="corrupted 2">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <i class="ul-task-manager__fonts i-Add text-30 " style="vertical-align:middle"></i>
                                                </a>
                                                <a href="" class="btn btn-icon bg-transparent border-slate-300 text-slate rounded-round border-dashed"><i class="icon-plus22"></i></a>
                                            </div>

                                            <ul class="list list-unstyled mb-0 mt-3 mt-sm-0 ml-auto">
                                                <li><span class="ul-task-manager__font-date text-muted">20 Jan,2015</span></li>
                                                <!-- <li class="dropdown">
                                                    Priority: &nbsp;
                                                    <a href="#" class="badge badge-danger align-top dropdown-toggle" data-toggle="dropdown">Blocker</a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a href="#" class="dropdown-item active"><span class="badge badge-mark mr-2 border-danger"></span> Blocker</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-warning-400"></span> High priority</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-success"></span> Normal priority</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-grey-300"></span> Low priority</a>
                                                    </div>
                                                </li> -->
                                                <li><a href="#">Eternity app</a></li>
                                            </ul>
                                        </div>
                                     <div slot="footer">
                                        <small class="text-muted d-sm-flex justify-content-sm-between align-items-sm-center">
                                            <span>Due: <span class="font-weight-semibold">18 hours</span></span>
                                            
                                            

                                            
                                            <div class="list-inline mb-0 mt-2 mt-sm-0">
                                                <b-dropdown  variant="link p-0" toggle-class="text-decoration-none" no-caret>
                                                    <template slot="button-content">On hold</template>
                                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                                </b-dropdown>

                                                <b-dropdown  variant="link p-2" toggle-class="text-decoration-none" no-caret>
                                                    <template slot="button-content"><i class="i-Gear-2"></i></template>
                                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                                </b-dropdown>
                                            </div>
                                        </small>
                                    </div>     
                                        
                        </b-card>
                    </b-col>
                    <b-col xl="6">
                        <b-card class=" mb-30">
                            <div class="d-sm-flex align-item-sm-center flex-sm-nowrap">
                                            <div>
                                                <h5><a href="">#23. New icons set for an iOS app</a></h5>
                                                <p class="ul-task-manager__paragraph mb-3">A collection of textile samples ..</p>

                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle " width="36" height="36" alt="corrupted">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle" width="36" height="36" alt="corrupted 2">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle" width="36" height="36" alt="corrupted 2">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <i class="ul-task-manager__fonts i-Add text-30 " style="vertical-align:middle"></i>
                                                </a>
                                                <a href="" class="btn btn-icon bg-transparent border-slate-300 text-slate rounded-round border-dashed"><i class="icon-plus22"></i></a>
                                            </div>

                                            <ul class="list list-unstyled mb-0 mt-3 mt-sm-0 ml-auto">
                                                <li><span class="ul-task-manager__font-date text-muted">20 Jan,2015</span></li>
                                                <!-- <li class="dropdown">
                                                    Priority: &nbsp;
                                                    <a href="#" class="badge badge-danger align-top dropdown-toggle" data-toggle="dropdown">Blocker</a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a href="#" class="dropdown-item active"><span class="badge badge-mark mr-2 border-danger"></span> Blocker</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-warning-400"></span> High priority</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-success"></span> Normal priority</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-grey-300"></span> Low priority</a>
                                                    </div>
                                                </li> -->
                                                <li><a href="#">Eternity app</a></li>
                                            </ul>
                                        </div>
                                     <div slot="footer">
                                        <small class="text-muted d-sm-flex justify-content-sm-between align-items-sm-center">
                                            <span>Due: <span class="font-weight-semibold">18 hours</span></span>
                                            
                                            

                                            
                                            <div class="list-inline mb-0 mt-2 mt-sm-0">
                                                <b-dropdown  variant="link p-0" toggle-class="text-decoration-none" no-caret>
                                                    <template slot="button-content">On hold</template>
                                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                                </b-dropdown>

                                                <b-dropdown  variant="link p-2" toggle-class="text-decoration-none" no-caret>
                                                    <template slot="button-content"><i class="i-Gear-2"></i></template>
                                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                                </b-dropdown>
                                            </div>
                                        </small>
                                    </div>     
                                        
                        </b-card>
                    </b-col>
                    <b-col xl="6">
                        <b-card class=" mb-30">
                            <div class="d-sm-flex align-item-sm-center flex-sm-nowrap">
                                            <div>
                                                <h5><a href="">#23. New icons set for an iOS app</a></h5>
                                                <p class="ul-task-manager__paragraph mb-3">A collection of textile samples ..</p>

                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle " width="36" height="36" alt="corrupted">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle" width="36" height="36" alt="corrupted 2">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle" width="36" height="36" alt="corrupted 2">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <i class="ul-task-manager__fonts i-Add text-30 " style="vertical-align:middle"></i>
                                                </a>
                                                <a href="" class="btn btn-icon bg-transparent border-slate-300 text-slate rounded-round border-dashed"><i class="icon-plus22"></i></a>
                                            </div>

                                            <ul class="list list-unstyled mb-0 mt-3 mt-sm-0 ml-auto">
                                                <li><span class="ul-task-manager__font-date text-muted">20 Jan,2015</span></li>
                                                <!-- <li class="dropdown">
                                                    Priority: &nbsp;
                                                    <a href="#" class="badge badge-danger align-top dropdown-toggle" data-toggle="dropdown">Blocker</a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a href="#" class="dropdown-item active"><span class="badge badge-mark mr-2 border-danger"></span> Blocker</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-warning-400"></span> High priority</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-success"></span> Normal priority</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-grey-300"></span> Low priority</a>
                                                    </div>
                                                </li> -->
                                                <li><a href="#">Eternity app</a></li>
                                            </ul>
                                        </div>
                                     <div slot="footer">
                                        <small class="text-muted d-sm-flex justify-content-sm-between align-items-sm-center">
                                            <span>Due: <span class="font-weight-semibold">18 hours</span></span>
                                            
                                            

                                            
                                            <div class="list-inline mb-0 mt-2 mt-sm-0">
                                                <b-dropdown  variant="link p-0" toggle-class="text-decoration-none" no-caret>
                                                    <template slot="button-content">On hold</template>
                                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                                </b-dropdown>

                                                <b-dropdown  variant="link p-2" toggle-class="text-decoration-none" no-caret>
                                                    <template slot="button-content"><i class="i-Gear-2"></i></template>
                                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                                </b-dropdown>
                                            </div>
                                        </small>
                                    </div>     
                                        
                        </b-card>
                    </b-col>
                    <b-col xl="6">
                        <b-card class=" mb-30">
                            <div class="d-sm-flex align-item-sm-center flex-sm-nowrap">
                                            <div>
                                                <h5><a href="">#23. New icons set for an iOS app</a></h5>
                                                <p class="ul-task-manager__paragraph mb-3">A collection of textile samples ..</p>

                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle " width="36" height="36" alt="corrupted">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle" width="36" height="36" alt="corrupted 2">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <img src="@/assets/images/faces/1.jpg" class="rounded-circle" width="36" height="36" alt="corrupted 2">
                                                </a>
                                                <a href="#" class="m-1">
                                                    <i class="ul-task-manager__fonts i-Add text-30 " style="vertical-align:middle"></i>
                                                </a>
                                                <a href="" class="btn btn-icon bg-transparent border-slate-300 text-slate rounded-round border-dashed"><i class="icon-plus22"></i></a>
                                            </div>

                                            <ul class="list list-unstyled mb-0 mt-3 mt-sm-0 ml-auto">
                                                <li><span class="ul-task-manager__font-date text-muted">20 Jan,2015</span></li>
                                                <!-- <li class="dropdown">
                                                    Priority: &nbsp;
                                                    <a href="#" class="badge badge-danger align-top dropdown-toggle" data-toggle="dropdown">Blocker</a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a href="#" class="dropdown-item active"><span class="badge badge-mark mr-2 border-danger"></span> Blocker</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-warning-400"></span> High priority</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-success"></span> Normal priority</a>
                                                        <a href="#" class="dropdown-item"><span class="badge badge-mark mr-2 border-grey-300"></span> Low priority</a>
                                                    </div>
                                                </li> -->
                                                <li><a href="#">Eternity app</a></li>
                                            </ul>
                                        </div>
                                     <div slot="footer">
                                        <small class="text-muted d-sm-flex justify-content-sm-between align-items-sm-center">
                                            <span>Due: <span class="font-weight-semibold">18 hours</span></span>
                                            
                                            

                                            
                                            <div class="list-inline mb-0 mt-2 mt-sm-0">
                                                <b-dropdown  variant="link p-0" toggle-class="text-decoration-none" no-caret>
                                                    <template slot="button-content">On hold</template>
                                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                                </b-dropdown>

                                                <b-dropdown  variant="link p-2" toggle-class="text-decoration-none" no-caret>
                                                    <template slot="button-content"><i class="i-Gear-2"></i></template>
                                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                                </b-dropdown>
                                            </div>
                                        </small>
                                    </div>     
                                        
                        </b-card>
                    </b-col>

                    
                   
                </b-row>
            </b-col>
            <b-col md="3">
    
               
                <b-row>
                     <!-- search -->
                    <b-col md="12">
                        <b-card  
                            b-card-link
                            no-body
                            class="mb-30  o-hidden">
                            <b-card-header 
                                style="cursor:pointer"
                                v-b-toggle.collapse-1>
                                Search Task
                            </b-card-header>
                            <b-collapse 
                                visible 
                                id="collapse-1" 
                                class="mt-2">
                                <b-card-body>
                                    <input type="text" placeholder="type  &amp;  hit enter" class="form-control">
                                </b-card-body>
                                    
                                
                            </b-collapse>
                        </b-card>
                    </b-col>
                 

                    <!-- navigation -->
                    <b-col md="12">
                        <b-card  
                            b-card-link
                            no-body
                            class="mb-30  o-hidden">
                            <!-- <b-card-header 
                                 style="cursor:pointer"
                                v-b-toggle.collapse-3>
                                Navigation
                            </b-card-header> -->
                            <b-collapse 
                                visible 
                                id="collapse-3" 
                                class="mt-2">
                                <b-card-body>
                                    <p class="card-text">Actions</p>
                                    <b-list-group>
                                        <b-list-group-item button>
                                            <a href=""><i class="i-Empty-Box mr-2"> </i> Create Project</a>
                                        </b-list-group-item>
                                        <b-list-group-item button>
                                            <a href=""><i class="i-Edit mr-2"> </i>  Edit Task List</a>
                                        </b-list-group-item>
                                        <b-list-group-item button>
                                            <a href=""><i class="i-Add-User mr-2"> </i>  Assign User</a>
                                        </b-list-group-item>
                                        <b-list-group-item button>
                                            <a href=""><i class="i-Network mr-2"> </i>  Create Team </a>
                                        </b-list-group-item>
                                        
                                    </b-list-group>

                                    <div class=" mb-30"></div>

                                    <p class="card-text">Tasks</p>

                                    <b-list-group>
                                        <b-list-group-item button>
                                            <a href=""><i class="i-Folders mr-2"> </i> All Tasks</a>
                                        </b-list-group-item>
                                        <b-list-group-item button>
                                            <a href=""><i class="i-Add-File mr-2"> </i> Active Tasks</a>
                                        </b-list-group-item>
                                        <b-list-group-item button>
                                            <a href=""><i class="i-File-Favorite mr-2"> </i> Closed Tasks</a>
                                        </b-list-group-item>
                                        <b-list-group-item button>
                                            <a href=""><i class="i-Administrator mr-2"> </i>  Assigned To Me  
                                                  <b-badge pill variant="primary ml-4">14</b-badge>
                                             </a>
                                        </b-list-group-item>
                                        <b-list-group-item button>
                                            <a href=""><i class="i-Conference mr-2"> </i>   Assigned To My Team    
                                                  <b-badge pill variant="primary ml-4">14</b-badge>
                                             </a>
                                        </b-list-group-item>
                                        <b-list-group-item button>
                                            <a href=""><i class="i-Gears mr-2"> </i> Settings     
                                                  
                                             </a>
                                        </b-list-group-item>
                                        
                                    </b-list-group>
                                </b-card-body>                             
                            </b-collapse>
                            </b-card>
                    </b-col>
                    
                    <!-- assigners -->


                    <b-col md="12">
                             <b-card  
                            b-card-link
                            no-body
                            class="mb-30  o-hidden">
                            <b-card-header 
                                style="cursor:pointer"
                                v-b-toggle.collapse-4>
                                Assigners
                            </b-card-header>
                            <b-collapse 
                                visible 
                                id="collapse-4" 
                                class="mt-2">
                                <b-card-body>
                                    <ul class="media-list pl-0">
                                        <li class="media mb-4">
                                            <a href="#" class="mr-4">
                                                <img src="http://gull-html-laravel.ui-lib.com/assets/images/faces/1.jpg" class="rounded-circle" width="40" alt="asd" srcset="">
                                            </a>
                                            <div class="ul-task-manager__media">
                                                <a href="">James Alexander gull</a>
                                                <div class="font-size-sm text-muted">Santa Ana,CA</div>
                                            </div>
                                            <div class="ml-3 align-self-center">
                                                <span class="badge badge-mark"></span>
                                            </div>
                                        </li>

                                        <li class="media mb-4">
                                            <a href="#" class="mr-4">
                                                <img src="@/assets/images/faces/4.jpg" class="rounded-circle" width="40" alt="asd" srcset="">
                                            </a>
                                            <div class="ul-task-manager__media">
                                                <a href="">James Alexander</a>
                                                <div class="font-size-sm text-muted">Santa Ana,CA</div>
                                            </div>
                                            <div class="ml-3 align-self-center">
                                                <span class="badge badge-mark "></span>
                                            </div>
                                        </li>

                                        <li class="media ">
                                            <a href="#" class="mr-4">
                                                <img src="@/assets/images/faces/3.jpg" class="rounded-circle" width="40" alt="asd" srcset="">
                                            </a>
                                            <div class="ul-task-manager__media">
                                                <a href="">James Alexander</a>
                                                <div class="font-size-sm text-muted">Santa Ana,CA</div>
                                            </div>
                                            <div class="ml-3 align-self-center">
                                                <span class="badge badge-mark"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                    </b-col>

                   
                   

                   <!-- completeness-stats -->
                    <b-col md="12">
                        <b-card  
                            b-card-link
                            no-body
                            class="mb-30  o-hidden">
                            <b-card-header 
                                style="cursor:pointer"
                                v-b-toggle.collapse-6>
                                Completeness Stats
                            </b-card-header>
                            <b-collapse 
                                visible 
                                id="collapse-6" 
                                class="mt-2">
                                <b-card-body>
                                    <b-list-group>
                                        <b-list-group-item class="mb-3 border-0">
                                            <div class="d-flex align-items-center  mb-1">Blockers <span class="text-muted ml-auto">50%</span></div>
                                            <b-progress height="2px" :value="value"></b-progress>
                                        </b-list-group-item>
                                        <b-list-group-item class="mb-3 border-0">
                                            <div class="d-flex align-items-center  mb-1">High Priority <span class="text-muted ml-auto">50%</span></div>
                                            <b-progress variant="danger" height="2px" :value="value"></b-progress>
                                        </b-list-group-item>
                                        <b-list-group-item class="mb-3 border-0">
                                            <div class="d-flex align-items-center  mb-1">Normal Priority <span class="text-muted ml-auto">50%</span></div>
                                            <b-progress variant="success" height="2px" :value="value"></b-progress>
                                        </b-list-group-item>
                                        <b-list-group-item class="mb-3 border-0">
                                            <div class="d-flex align-items-center  mb-1">Low Priority <span class="text-muted ml-auto">50%</span></div>
                                            <b-progress variant="warning" height="2px" :value="value"></b-progress>
                                        </b-list-group-item>
                                        
                                    </b-list-group>
                                </b-card-body>  
                            </b-collapse>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>
<script>
  export default {
           metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
        title: "Task Manager"
    },
    data() {
      return {
        value: 75,

        // pagination
        perPage: 3,
        currentPage: 1,
        items: [
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubble' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
  }
</script>