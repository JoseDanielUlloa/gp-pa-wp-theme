<?php
/**
 * The template for displaying the footer.
 *
 * @package GeneratePress
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
?>

	</div>
</div>

<?php
/**
 * generate_before_footer hook.
 *
 * @since 0.1
 */
do_action( 'generate_before_footer' );
?>

<div <?php generate_do_attr( 'footer' ); ?>>
	<?php
	/**
	 * generate_before_footer_content hook.
	 *
	 * @since 0.1
	 */
	do_action( 'generate_before_footer_content' );
	
	/**
	 * generate_footer hook.
	 *
	 * @since 1.3.42
	 *
	 * @hooked generate_construct_footer_widgets - 5
	 * @hooked generate_construct_footer - 10
	 */
	do_action( 'generate_footer' );
	
	/**
	 * generate_after_footer_content hook.
	 *
	 * @since 0.1
	 */
	do_action( 'generate_after_footer_content' );
	?>
	<!-- Social Media Links -->
	<div class="social-nav-wrapper">
		<nav id="social-nav" class="social-nav" aria-label="Redes sociales de Padres Astutos">
			<h2 id="social-nav-heading" class="sr-only">Redes sociales de Padres Astutos</h2>
			<?php
				wp_nav_menu(
					array(
						'menu' => 'social',
						'container' => '',
						'theme_location' => 'social',
						'items_wrap' => '<ul aria-labelledby="social-nav-heading" class="list-reset">%3$s</ul>'
					)
				);
			?>
		</nav>
	</div>
</div>

<?php
/**
 * generate_after_footer hook.
 *
 * @since 2.1
 */
do_action( 'generate_after_footer' );

wp_footer();
?>

</body>
</html>
