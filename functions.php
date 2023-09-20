<?php
/**
* GeneratePress Child functions and definitions
*
* @link http://codex.wordpress.org/Theme_Development
* @link http://codex.wordpress.org/Child_Themes
*
* @package WordPress
* @subpackage GeneratePress
* @since GeneratePress 1.0
*/

// Enqueue scripts and styles
function generatepress_child_scripts(){
    $version = wp_get_theme()->get( 'Version' );
	wp_enqueue_style( 'generatepress-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array( 'generatepress-style' ));
    wp_enqueue_style( 'fontawesome', "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css", array(), '6.4.0', 'all' );
}
add_action( 'wp_enqueue_scripts', 'generatepress_child_scripts' );

// Breadcrumbs
add_action( 'generate_after_header', function() {
    if ( !is_home() && function_exists('yoast_breadcrumb') ) {
        yoast_breadcrumb( '<div class="grid-container grid-parent"><p id="breadcrumbs">','</p></div>' );
    }
} );

// Menus
function generatepress_child_menus() {
    $locations = array(
        'social' => "Redes sociales de Padres Astutos"
    );
    register_nav_menus($locations);
}
add_action('init', 'generatepress_child_menus');

// Custom copyright
add_filter( 'generate_copyright','tu_custom_copyright' );
function tu_custom_copyright() {
    ?>
    	PadresAstutos.com
    <?php
}

// Custom search form
function custom_search_scripts() {
    if ( is_single(array(77, 128)) ) {
    	wp_enqueue_style( 'custom-search-style', '/wp-content/themes/generatepress-theme-child/css/custom-search-style.css', null );
    }
}
add_action('wp_enqueue_scripts', 'custom_search_scripts');

// Baseball bat size
function baseball_bat_size_scripts() {
    if ( is_single(array(77, 128)) ) {
    	wp_enqueue_style( 'baseball-bat-size-style', '/wp-content/themes/generatepress-theme-child/css/baseball-bat-size-style.css', null );
    }
}
add_action('wp_enqueue_scripts', 'baseball_bat_size_scripts');