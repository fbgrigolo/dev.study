<?php get_header(); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<h1><?php the_title(); ?></h1>
<?php the_content(); ?>

<?php endwhile; else: ?>
   <p><?php _e('Desculpa, nenhuma página encontrada com este críterio.') ?></p>
<?php endif; ?>

<?php get_footer(); ?>