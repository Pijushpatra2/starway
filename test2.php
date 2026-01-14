<style>
/* ================= HERO ================= */
.blog-hero {
    position: relative;
    min-height: 380px;
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
}

.blog-hero-inner {
    max-width: 720px;
}

.blog-hero h1 {
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
    background: #f4b400;
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
        display: flex;
        flex-direction: column;
        align-items: center;
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
    padding: 60px 20px;
    max-width: 1280px;
    margin: auto;
	background-color: red !important;
}
.blog-section h2 {
    font-size: clamp(22px, 3vw, 32px);
    margin-bottom: 10px;
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
    margin-top: 30px;
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
</style>