/*
 * This file has been compiled from: /modules/system/lang/fr/client.php
 */
if ($.oc === undefined) $.oc = {}
if ($.oc.langMessages === undefined) $.oc.langMessages = {}
$.oc.langMessages['fr'] = $.extend(
    $.oc.langMessages['fr'] || {},
    {"markdowneditor":{"formatting":"Formatage","quote":"Citation","code":"Code","header1":"Ent\u00eate 1","header2":"Ent\u00eate 2","header3":"Ent\u00eate 3","header4":"Ent\u00eate 4","header5":"Ent\u00eate 5","header6":"Ent\u00eate 6","bold":"Gras","italic":"Italique","unorderedlist":"Liste non ordonn\u00e9e","orderedlist":"Liste ordonn\u00e9e","video":"Vid\u00e9o","image":"Image","link":"Lien","horizontalrule":"Ins\u00e9rer la r\u00e8gle horizontalement","fullscreen":"Plein \u00e9cran","preview":"Aper\u00e7u"},"mediamanager":{"insert_link":"Ins\u00e9rer un lien vers un fichier de la m\u00e9diath\u00e8que","insert_image":"Ins\u00e9rer une image de la m\u00e9diath\u00e8que","insert_video":"Ins\u00e9rer une vid\u00e9o de la m\u00e9diath\u00e8que","insert_audio":"Ins\u00e9rer un document audio de la m\u00e9diath\u00e8que","invalid_file_empty_insert":"Veuillez s\u00e9lectionner un fichier \u00e0 lier.","invalid_file_single_insert":"Veuillez s\u00e9lectionner un seul fichier.","invalid_image_empty_insert":"Veuillez s\u00e9lectionner au moins une image \u00e0 ins\u00e9rer.","invalid_video_empty_insert":"Veuillez s\u00e9lectionner une vid\u00e9o \u00e0 ins\u00e9rer.","invalid_audio_empty_insert":"Veuillez s\u00e9lectionner un document audio \u00e0 ins\u00e9rer.","invalid_image_invalid_insert":"Le fichier n\u2019est pas une image.","invalid_video_invalid_insert":"Le fichier n\u2019est pas une vid\u00e9o.","invalid_audio_invalid_insert":"Le fichier n\u2019est pas un document audio."},"alert":{"confirm_button_text":"OK","cancel_button_text":"Annuler"},"datepicker":{"previousMonth":"Mois pr\u00e9c\u00e9dent","nextMonth":"Mois suivant","months":["Janvier","F\u00e9vrier","Mars","Avril","Mai","Juin","Juillet","Ao\u00fbt","Septembre","Octobre","Novembre","D\u00e9cembre"],"weekdays":["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],"weekdaysShort":["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"]},"filter":{"group":{"all":"tous"},"dates":{"all":"toute la p\u00e9riode","filter_button_text":"Filtrer","reset_button_text":"Effacer","date_placeholder":"Date","after_placeholder":"Apr\u00e8s le","before_placeholder":"Avant le"}}}
);

//! moment.js locale configuration
//! locale : french (fr)
//! author : John Fischer : https://github.com/jfroffice

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var fr = moment.defineLocale('fr', {
        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact : true,
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Aujourd\'hui à] LT',
            nextDay: '[Demain à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[Hier à] LT',
            lastWeek: 'dddd [dernier à] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'dans %s',
            past : 'il y a %s',
            s : 'quelques secondes',
            m : 'une minute',
            mm : '%d minutes',
            h : 'une heure',
            hh : '%d heures',
            d : 'un jour',
            dd : '%d jours',
            M : 'un mois',
            MM : '%d mois',
            y : 'un an',
            yy : '%d ans'
        },
        ordinalParse: /\d{1,2}(er|)/,
        ordinal : function (number) {
            return number + (number === 1 ? 'er' : '');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return fr;

}));