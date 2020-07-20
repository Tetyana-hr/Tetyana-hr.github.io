/*Функція jQuery щоб плавно переходити по секціям - скроллефект*/
$(document).ready(function(){   /*document().ready - код не виконаться поки не прогрузиться сторінка */
    $('.logo-link, .menu-link, .home-arrow').each(function(index, element){
        $(element).click(function(){
            const id = $(this).attr('href'); /* знайти цей атрибут */
            const top = $(id).offset().top;    /* знайти елемент з id і знайти який в неї offset відступ в px зверху  */
            $('html').animate({          /* анімація */
                scrollTop: top
            }, 1500);           /*доскролить за 1.5 секунди */
        })
    })
})