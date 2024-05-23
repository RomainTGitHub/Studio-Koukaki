<?php

get_header();
?>

<main id="primary" class="site-main">
    <section class="banner">
        <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants" id="logo">
        <video autoplay muted loop id="bgVideo">
            <source src="http://studio-koukaki.local/wp-content/themes/foce-child/media_koukaki/Studio+Koukaki-vide%CC%81o+header+sans+son.mp4" type="video/mp4">
            Votre navigateur ne supporte pas la lecture de vidéo.
        </video>

    </section>
    <section id="#story" class="story">
        <h2><span>L'histoire</span></h2>
        <article id="" class="story__article">
            <p><?php echo get_theme_mod('story'); ?></p>
        </article>
        <?php
        $args = array(
            'post_type' => 'characters',
            'posts_per_page' => -1,
            'meta_key'  => '_main_char_field',
            'orderby'   => 'meta_value_num',

        );
        $characters_query = new WP_Query($args);
        ?>
        <article id="characters">
            <h3><span>Les personnages</span></h3>
            <div class="main-character">
                <div class="swiper-wrapper">
                    <?php
                    // Tri des posts par leur index dans le tableau
                    usort($characters_query->posts, function ($a, $b) {
                        return $a->menu_order - $b->menu_order;
                    });

                    // Affichage des slides dans l'ordre trié
                    foreach ($characters_query->posts as $character) {
                        echo '<div class="swiper-slide">';
                        echo '<figure>';
                        echo get_the_post_thumbnail($character->ID, 'full');
                        echo '<figcaption>' . $character->post_title . '</figcaption>';
                        echo '</figure>';
                        echo '</div>';
                    }
                    ?>
                </div>
            </div>
        </article>
        <article id="place">
            <div>
                <h3><span>Le Lieu</span></h3>
                <p><?php echo get_theme_mod('place'); ?></p>
                <div class="nuages">
                    <img id="nuage1" class="nuage" src="http://studio-koukaki.local/wp-content/themes/foce-child/media_koukaki/big_cloud.png" alt="gros nuage">
                    <img id="nuage2" class="nuage" src="http://studio-koukaki.local/wp-content/themes/foce-child/media_koukaki/little_cloud.png" alt="petit nuage">
                </div>
            </div>

        </article>
    </section>


    <section id="studio">
        <h2><span>Studio Koukaki</span></h2>
        <div>
            <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
            <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
        </div>
    </section>

    <!-- Section à supprimer lorsque l'evenement sera terminé! -->

    <section class="oscars" id="oscars">
        <h3><span>Fleurs d’oranger & chats errants est nominé aux Oscars Short Film Animated de 2022 !</span></h3>
        <img src="http://studio-koukaki.local/wp-content/themes/foce-child/media_koukaki/oscars.png">
    </section>

    <!-- Fin de la section à supprimer -->

</main><!-- #main -->

<?php
get_footer();
