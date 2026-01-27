function custom_blog_archive_shortcode() {
    ob_start();
    ?>

<style>
/* ================= HERO ================= */
.blog-hero {
    position: relative;
    min-height: 500px;
    display: flex;
    align-items: center;
    background-image:
        linear-gradient(
            90deg,
            rgba(255,255,255,0.95) 0%,
            rgba(255,255,255,0.85) 40%,
            rgba(255,255,255,0.3) 65%,
            rgba(255,255,255,0) 100%
        ),
        url('/wp-content/uploads/2026/01/blog-img-hero-scaled.jpg');
    background-size: cover;
    background-position: right center;
    padding: 60px 20px;
	display: flex;
   	justify-content:center;
    align-items: center;
	margin-bottom:10px;
}

.blog-hero-inner {
    max-width: 720px;
	display: flex;
   	justify-content:center;
	align-items:center;
	flex-direction:column;
}

.blog-hero h1 {
	font-family: 'El Messiri';
    font-size: clamp(28px, 4vw, 44px);
    font-weight: 600;
    margin-bottom: 8px;
}

.blog-hero h3 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 15px;
    color: #444;
}

.blog-hero p {
    font-size: 15px;
    color: #555;
    margin-bottom: 25px;
    max-width: 600px;
}

.blog-hero-search {
    display: flex;
    max-width: 460px;
}

.blog-hero-search input {
    flex: 1;
    padding: 14px 18px;
    border-radius: 30px 0 0 30px;
    border: 1px solid #ddd;
    outline: none;
}

.blog-hero-search button {
    padding: 14px 22px;
    border-radius: 0 30px 30px 0;
    border: none;
    background:#f97316;
    cursor: pointer;
}
	

/* MOBILE */
@media (max-width: 768px) {
    .blog-hero {
        background-image:
            linear-gradient(
                rgba(255,255,255,0.96),
                rgba(255,255,255,0.96)
            ),
            url('/wp-content/uploads/2025/01/blog-hero.jpg');
        background-position: center;
        text-align: center;
    }

    .blog-hero-inner {
        margin: auto;
    }

    .blog-hero-search {
        margin: auto;
    }
}
/* ================= SECTION ================= */
.blog-section {
    padding: 40px 20px;
    max-width: 1280px;
    margin: auto;
}
.blog-section h2 {
    font-size: clamp(22px, 3vw, 32px);
    margin-bottom: 10px;
	font-family: 'El Messiri';
}
.blog-section p {
    max-width: 800px;
    color: #666;
}

/* ================= GRID ================= */
.blog-grid {
    display: grid;
       grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
    margin-bottom: 20px;
}

/* ================= CARD ================= */
.blog-card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 22px rgba(0,0,0,.08);
    transition: transform .3s ease;
}
.blog-card:hover {
    transform: translateY(-6px);
}
.blog-card img {
    width: 100%;
    height: 210px;
    object-fit: cover;
}
.blog-card-content {
    padding: 18px;
}
.blog-card small {
    color: #999;
    font-size: 13px;
}
.blog-card h3 {
    font-size: 18px;
    margin: 8px 0 10px;
    line-height: 1.4;
}
.blog-card a {
    text-decoration: none;
    color: inherit;
}
.read-link {
	color: #f97316;
    font-weight: 600;
}
.all-read-link{
	color: #f97316;
    font-weight: 600;
	}

/* ================= BUTTON ================= */
.view-all-wrap {
    text-align: center;
    padding: 50px 0;
}
.view-all-btn {
    display: inline-block;
    padding: 14px 34px;
    background: #f97316;
    color: #fff;
    border-radius: 30px;
    font-weight: 600;
    text-decoration: none;
}
/* ========================== Tablet =================== */
@media (max-width: 1024px) {
    .blog-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
/* ================= MOBILE ================= */
@media (max-width: 600px) {
	    .blog-grid {
        grid-template-columns: 1fr;
    }
    .blog-search {
        flex-direction: column;
    }
    .blog-search input,
    .blog-search button {
        border-radius: 30px;
        width: 100%;
    }
    .blog-search button {
        margin-top: 10px;
    }
}
	
	/* ================= FEATURED BLOG ================= */
.featured-blog {
    background: #f8f6f4;
    padding: 20px 20px;
    margin-bottom: 20px;
}

.featured-blog h2 {
    text-align: center;
    font-size: clamp(26px, 4vw, 40px);
    margin-bottom: 20px;
}

/* Override grid for featured */
.featured-blog .blog-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 40px;
    align-items: center;
}

/* Featured card layout */
.featured-blog .blog-card {
    display: flex;
    flex-direction: row;
    box-shadow: none;
    background: transparent;
}

/* Image */
.featured-blog .blog-card a img {
    width: 100%;
    height: 150px; !important
    object-fit: cover;
    border-radius: 18px;
}

/* Content */
.featured-blog .blog-card-content {
    padding: 20px 0 20px 40px;
}

.featured-blog .blog-card-content small {
    font-size: 14px;
    color: #888;
}

.featured-blog .blog-card-content h3 {
    font-size: clamp(22px, 3vw, 32px);
    line-height: 1.3;
    margin: 15px 0 20px;
}

.featured-blog .read-link {
    font-size: 16px;
    font-weight: 600;
}

/* ================= RESPONSIVE ================= */
@media (max-width: 1024px) {
    .featured-blog .blog-grid {
        grid-template-columns: 1fr;
    }

    .featured-blog .blog-card-content {
        padding: 25px 0 0;
    }

    .featured-blog .blog-card img {
        height: 300px;
    }
}

@media (max-width: 600px) {
    .featured-blog {
        padding: 60px 15px;
    }

    .featured-blog .blog-card img {
        height: 260px;
    }

    .featured-blog h2 {
        margin-bottom: 30px;
    }
}

</style>
    <!-- ================= HERO ================= -->
    <section class="blog-hero">
        <div class="blog-hero-inner">
            <h1>INTERIOR DESIGN BLOG</h1>
            <h3>Insights & Trends by Oraanj Interior Design</h3>
            <p>
                Explore the latest trends, expert advice, and case studies on interior design.
                Discover inspiration for offices, commercial spaces, luxury residences and local London projects.
            </p>

            <form class="blog-hero-search" method="get" action="<?php echo esc_url(home_url('/')); ?>">
                <input type="search" name="s" placeholder="Search interior blogs">
                <button type="submit" aria-label="Search">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
         xmlns="http://www.w3.org/2000/svg">
        <path d="M21 21L15.8 15.8M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
              stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
</button>

            </form>
        </div>
    </section>
  <!-- ================= FEATURED BLOG ================= -->
    <?php
    $featured_query = new WP_Query([
        'post_type'      => 'post',
        'posts_per_page' => 1,
        'post_status'    => 'publish',
    ]);

    if ($featured_query->have_posts()) :
        while ($featured_query->have_posts()) : $featured_query->the_post();
    ?>
        <section class="blog-section featured-blog">
		<div class="blog-grid">
               
                    <a href="<?php the_permalink(); ?>">
                        <?php
                        if (has_post_thumbnail()) {
                            the_post_thumbnail('large');
                        }
                        ?>
                    </a>

                    <div class="blog-card-content">
                        <small><?php echo esc_html(get_the_date()); ?></small>
                        <h3><?php the_title(); ?></h3>
                        <a class="read-link" href="<?php the_permalink(); ?>">
                            Read Article →
                        </a>
                    </div>
            
            </div>
        </section>
    <?php
        endwhile;
        wp_reset_postdata();
    endif;
    ?>

    <!-- ================= CATEGORY SECTIONS ================= -->
    <?php
 $categories = get_categories([
    'hide_empty' => true,
    'orderby'    => 'count',
    'order'      => 'DESC',
    'number'     => 4, // ✅ LIMIT TO 4 CATEGORIES
]);

foreach ($categories as $category) :

    $cat_query = new WP_Query([
        'post_type'      => 'post',
        'posts_per_page' => 3,
        'cat'            => $category->term_id,
        'post_status'    => 'publish',
    ]);

    if ($cat_query->have_posts()) :
?>
<section class="blog-section">
    <h2><?php echo esc_html($category->name); ?></h2>

    <?php if (!empty($category->description)) : ?>
        <p><?php echo esc_html($category->description); ?></p>
    <?php endif; ?>

    <div class="blog-grid">
        <?php while ($cat_query->have_posts()) : $cat_query->the_post(); ?>
            <article class="blog-card">
                <a href="<?php the_permalink(); ?>">
                    <?php if (has_post_thumbnail()) the_post_thumbnail('medium'); ?>
                </a>

                <div class="blog-card-content">
                    <small><?php echo esc_html(get_the_date()); ?></small>
                    <h3><?php the_title(); ?></h3>
                    <a class="read-link" href="<?php the_permalink(); ?>">
                        Read Article →
                    </a>
                </div>
            </article>
        <?php endwhile; wp_reset_postdata(); ?>
    </div>

    <a class="all-read-link" href="<?php echo esc_url(get_category_link($category)); ?>">
        View All <?php echo esc_html($category->name); ?> →
    </a>
</section>
<?php
    endif;
endforeach;
    ?>

    <div class="view-all-wrap">
        <a class="view-all-btn" href="<?php echo esc_url(get_permalink(get_option('page_for_posts'))); ?>">
            View All Blog Posts
        </a>
    </div>

    <?php
    return ob_get_clean();
}

add_shortcode('blog_archive', 'custom_blog_archive_shortcode');