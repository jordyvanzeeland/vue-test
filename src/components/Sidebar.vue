<template>
    <nav class="pcoded-navbar">
        <div class="navbar-wrapper">
            <!-- <div class="navbar-brand header-logo">
                <a href="index.html" class="b-brand">
                    <div class="b-bg">
                        <i class="feather icon-monitor"></i>
                    </div>
                    <span class="b-title">Portfolio Manager</span>
                </a>
                <a class="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a>
            </div> -->
            <div class="navbar-content scroll-div">
                <ul class="nav pcoded-inner-navbar">
                    <li class="nav-item pcoded-menu-caption">
                        <label>Beheer</label>
                    </li>
                    <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" class="nav-item">
                        <router-link to="/"><span class="pcoded-micon"><i class="feather icon-monitor"></i></span><span class="pcoded-mtext">Projecten</span></router-link>
                    </li>
                    <li class="nav-item pcoded-menu-caption">
                        <label>Elementen</label>
                    </li>
                    <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" class="nav-item">
                        <router-link to="/categories"><span class="pcoded-micon"><i class="feather icon-list"></i></span><span class="pcoded-mtext">Categorieën</span></router-link>
                    </li>
                    <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" class="nav-item">
                        <router-link to="/skills"><span class="pcoded-micon"><i class="feather icon-star"></i></span><span class="pcoded-mtext">Skills</span></router-link>
                    </li>
                    <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" class="nav-item">
                        <router-link to="/custom-fields"><span class="pcoded-micon"><i class="feather icon-box"></i></span><span class="pcoded-mtext">Custom fields</span></router-link>
                    </li>

                    <li class="nav-item pcoded-menu-caption">
                        <label>Instellingen</label>
                    </li>
                    <li data-username="form elements advance componant validation masking wizard picker select"
                        class="nav-item">
                        <router-link to="/users"><span class="pcoded-micon"><i class="feather icon-user"></i></span><span class="pcoded-mtext">Gebruikers</span></router-link>
                    </li>
                    <li data-username="Table bootstrap datatable footable" class="nav-item">
                        <a href="#" class="nav-link "><span class="pcoded-micon"><i class="feather icon-power"></i></span><span class="pcoded-mtext">Uitloggen</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'AppSidebar',
}
</script>

