<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Swiper CSS -->
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

    <link rel="profile" href="https://gmpg.org/xfn/11">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="page" class="site">
        <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'foce'); ?></a>

        <header id="masthead" class="site-header">
            <button id="menu-toggle" class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </button>
            <nav id="site-navigation" class="main-navigation">
                <ul>
                    <li class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></li>
                </ul>
            </nav><!-- #site-navigation -->
        </header><!-- #masthead -->

        <!-- Fullscreen Menu -->
        <div id="fullscreen-menu">
            <ul>
                <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants" id="logo2">
                <li><a href="#story">Histoire</a></li>
                <li><a href="#characters">Personnages</a></li>
                <li><a href="#place">Lieu</a></li>
                <li><a href="#studio">Studio Koukaki</a></li>
            </ul>
            <div id="footer-fullscreenmenu"><a href="#studiokoukaki"><svg xmlns="http://www.w3.org/2000/svg" width="161" height="13" viewBox="0 0 161 13" fill="none">
                        <path d="M4.31703 12.1272C6.87613 12.1272 8.13123 10.6276 8.13123 8.8509C8.13123 6.6993 6.72943 5.9984 5.18093 5.5746L3.68133 5.1834C2.57293 4.8574 1.75793 4.1565 1.75793 3.0644C1.75793 2.0212 2.40993 1.0432 4.12143 1.0432C5.52323 1.0432 6.69683 1.6789 6.82723 3.6512L8.01713 3.3252C7.83783 0.8965 6.17523 0 4.08883 0C1.90463 0 0.48653 1.4181 0.48653 3.1785C0.48653 4.9063 1.67643 5.868 3.27383 6.3081L4.78973 6.7156C5.88183 7.0253 6.85983 7.4165 6.85983 9.0302C6.85983 10.5624 5.62103 11.084 4.30073 11.084C2.40993 11.084 1.54603 9.7637 1.33413 8.2478L0.12793 8.476C0.35613 10.4483 1.59493 12.1272 4.31703 12.1272Z" fill="black" />
                        <path d="M11.605 0.2771V1.3529H15.3051V11.8501H16.5602V1.3529H20.2603V0.2771H11.605Z" fill="black" />
                        <path d="M23.8482 0.2771V8.1337C23.8482 10.4646 25.136 12.1272 27.7276 12.1272C30.3193 12.1272 31.5093 10.4646 31.5093 8.1337V0.2771H30.2542V8.1337C30.2542 9.9104 29.4718 11.0514 27.7276 11.0514C25.9835 11.0514 25.087 9.9104 25.087 8.1337V0.2771H23.8482Z" fill="black" />
                        <path d="M35.7166 11.8501H38.7973C41.8943 11.8501 43.7688 9.4051 43.7688 6.0147C43.7688 2.6243 42.041 0.2771 38.8462 0.2771H35.7166V11.8501ZM36.9554 10.8069V1.3203H38.8462C41.2749 1.3203 42.4811 3.3415 42.4811 6.0147C42.4811 8.6553 41.1771 10.8069 38.7973 10.8069H36.9554Z" fill="black" />
                        <path d="M54.7406 1.2877V0.2771H47.5686V1.2877H50.5189V10.8395H47.5686V11.8501H54.7406V10.8395H51.774V1.2877H54.7406Z" fill="black" />
                        <path d="M62.8925 12.1272C65.6309 12.1272 67.0001 10.0734 67.0001 6.6341V5.4931C67.0001 2.0538 65.6309 0 62.8925 0C60.1541 0 58.7849 2.0538 58.7849 5.4931V6.6341C58.7849 10.0734 60.1541 12.1272 62.8925 12.1272ZM62.8925 11.0514C61.0017 11.0514 60.0889 9.6333 60.0889 6.6341V5.4931C60.0889 2.4939 61.0017 1.0758 62.8925 1.0758C64.7833 1.0758 65.6961 2.4939 65.6961 5.4931V6.6341C65.6961 9.6333 64.7833 11.0514 62.8925 11.0514Z" fill="black" />
                        <path d="M89.1393 11.8501H90.59L86.6454 4.7922L90.2151 0.2771H88.7481L84.0048 6.3081V0.2771H82.766V11.8501H84.0048V7.8403L85.7815 5.6887L89.1393 11.8501Z" fill="black" />
                        <path d="M98.1062 12.1272C100.845 12.1272 102.214 10.0734 102.214 6.6341V5.4931C102.214 2.0538 100.845 0 98.1062 0C95.3678 0 93.9986 2.0538 93.9986 5.4931V6.6341C93.9986 10.0734 95.3678 12.1272 98.1062 12.1272ZM98.1062 11.0514C96.2154 11.0514 95.3026 9.6333 95.3026 6.6341V5.4931C95.3026 2.4939 96.2154 1.0758 98.1062 1.0758C99.997 1.0758 100.91 2.4939 100.91 5.4931V6.6341C100.91 9.6333 99.997 11.0514 98.1062 11.0514Z" fill="black" />
                        <path d="M106.014 0.2771V8.1337C106.014 10.4646 107.301 12.1272 109.893 12.1272C112.485 12.1272 113.675 10.4646 113.675 8.1337V0.2771H112.42V8.1337C112.42 9.9104 111.637 11.0514 109.893 11.0514C108.149 11.0514 107.252 9.9104 107.252 8.1337V0.2771H106.014Z" fill="black" />
                        <path d="M124.353 11.8501H125.804L121.859 4.7922L125.429 0.2771H123.962L119.219 6.3081V0.2771H117.98V11.8501H119.219V7.8403L120.995 5.6887L124.353 11.8501Z" fill="black" />
                        <path d="M136.547 11.8501H137.786L134.037 0.2771H132.619L128.87 11.8501H130.093L131.217 8.3945H135.423L136.547 11.8501ZM131.56 7.3187L131.657 7.0253C132.375 4.7596 132.929 2.9177 133.304 1.4018H133.336C133.727 2.9177 134.249 4.7596 134.983 7.0253L135.08 7.3187H131.56Z" fill="black" />
                        <path d="M147.829 11.8501H149.28L145.335 4.7922L148.905 0.2771H147.438L142.694 6.3081V0.2771H141.456V11.8501H142.694V7.8403L144.471 5.6887L147.829 11.8501Z" fill="black" />
                        <path d="M160.382 1.2877V0.2771H153.21V1.2877H156.16V10.8395H153.21V11.8501H160.382V10.8395H157.415V1.2877H160.382Z" fill="black" />
                    </svg></a></div>
        </div>