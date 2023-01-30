/**
 * @file
 * Global utilities.
 *
 */
(function (Drupal) {

  'use strict';

  Drupal.behaviors.druflix = {
    attach: function (context, settings) {

    }
  };

  Drupal.behaviors.actorSlider = {
    attach: function (context, settings) {
      $('.actor-character .items').not('.slick-initialized').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
      });
    }
  };

})(Drupal);
