window.addEventListener('DOMContentLoaded', (event) => {

    /* CODE EFFECT */

    new TypeIt(".type_effect", {
        strings: ["&lt;!DOCTYPE<span style='color:#F2545B;'> html</span>&gt;", 
                  "&lt;html&gt;", 
                  "&nbsp;&nbsp;&nbsp;&lt;head&gt;", 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Agustín Brando | Wordpress Developer&lt;/title&gt;",
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta <span style='color:#F2545B;'>charset</span>=<span style='color:#BF1363;'>'UTF-8'</span>&gt;",
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta <span style='color:#F2545B;'>name</span>=<span style='color:#BF1363;'>'viewport'</span> <span style='color:#F2545B;'>content</span>=<span style='color:#BF1363;'>'width=device-width, initial-scale=1.0'</span>&gt;",
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;?php <span style='color:#F2545B;'>wp_head</span>() ?&gt;",
                  "&nbsp;&nbsp;&nbsp;&lt;/head&gt;",
                  "&nbsp;&nbsp;&nbsp;&lt;body&gt;",
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;section <span style='color:#F2545B;'>id</span>=<span style='color:#BF1363;'>#main_banner</span> <span style='color:#F2545B;'>class</span>=<span style='color:#BF1363;'>'col-12'</span>&gt;",
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div <span style='color:#F2545B;'>class</span>=<span style='color:#BF1363;'>'content col-10 m-auto d-flex justify-content-between'</span>&gt;",
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div <span style='color:#F2545B;'>class</span>=<span style='color:#BF1363;'>'text d-flex flex-column justify-content-end align-items-end col-6'</span>&gt;",
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p <span style='color:#F2545B;'>class</span>=<span style='color:#BF1363;'>'title'</span>&gtagusbrando.&lt/p&gt;",
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p <span style='color:#F2545B;'>class</span>=<span style='color:#BF1363;'>'subtitle'</span>&gtWordpress Developer&lt/p&gt;", 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;",
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;",
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/section&gt;",
                  "&nbsp;&nbsp;&nbsp;&lt;/body&gt;",
                  "&lt;/html&gt;"],
        speed: 12,
        nextStringDelay: 100,
    }).go();
    
    /* FULLPAGE SCRIPT */

    new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        scrollHorizontally: true
    });

}); 