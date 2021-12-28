<?php

/* Carga estilos y scripts */

function load_files() {
  
    wp_enqueue_style( 'theme_styles', get_template_directory_uri() . '/style.css');
    wp_enqueue_style( 'bootstrap_style', get_template_directory_uri() . '/dist/css/bootstrap.css');
    wp_enqueue_style( 'fullpage_style', get_template_directory_uri() . '/dist/css/fullpage.min.css');

    wp_enqueue_script( 'theme_scripts', get_template_directory_uri() . '/dist/js/bundle-min.js' );
  
}
add_action( 'wp_head', 'load_files' );