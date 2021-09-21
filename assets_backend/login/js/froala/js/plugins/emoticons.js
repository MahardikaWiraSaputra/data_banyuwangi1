/*!
 * froala_editor v3.2.6 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2021 Froala Labs
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('froala-editor')) :
  typeof define === 'function' && define.amd ? define(['froala-editor'], factory) :
  (factory(global.FroalaEditor));
}(this, (function (FE) { 'use strict';

  FE = FE && FE.hasOwnProperty('default') ? FE['default'] : FE;

  Object.assign(FE.POPUP_TEMPLATES, {
    emoticons: '[_BUTTONS_][_CUSTOM_LAYER_]'
  }); // Extend defaults.

  Object.assign(FE.DEFAULTS, {
    emoticonsSet: [{
      'id': 'people',
      'name': 'Smileys & People',
      'code': '1f600',
      'emoticons': [{
        code: '1f600',
        desc: 'Grinning face'
      }, {
        code: '1f601',
        desc: 'Grinning Face with Smiling Eyes'
      }, {
        code: '1f602',
        desc: 'Face with Tears of Joy'
      }, {
        code: '1f603',
        desc: 'Smiling Face with Open Mouth'
      }, {
        code: '1f604',
        desc: 'Smiling Face with Open Mouth and Smiling Eyes'
      }, {
        code: '1f605',
        desc: 'Smiling Face with Open Mouth and Cold Sweat'
      }, {
        code: '1f606',
        desc: 'Smiling Face with Open Mouth and Tightly-Closed Eyes'
      }, {
        code: '1f609',
        desc: 'Winking Face'
      }, {
        code: '1f60a',
        desc: 'Smiling Face with Smiling Eyes'
      }, {
        code: '1f608',
        desc: 'Face Savouring Delicious Food'
      }, {
        code: '1f60e',
        desc: 'Smiling Face with Sunglasses'
      }, {
        code: '1f60d',
        desc: 'Smiling Face with Heart-Shaped Eyes'
      }, {
        code: '1f618',
        desc: 'Face Throwing a Kiss'
      }, {
        code: '1f617',
        desc: 'Kissing Face'
      }, {
        code: '1f619',
        desc: 'Kissing Face with Smiling Eyes'
      }, {
        code: '1f61a',
        desc: 'Kissing Face with Closed Eyes'
      }, {
        code: '263a',
        desc: 'White Smiling Face'
      }, {
        code: '1f642',
        desc: 'Slightly Smiling Face'
      }, {
        code: '1f610',
        desc: 'Neutral Face'
      }, {
        code: '1f611',
        desc: 'Expressionless Face'
      }, {
        code: '1f636',
        desc: 'Face Without Mouth'
      }, {
        code: '1f60f',
        desc: 'Smirking Face'
      }, {
        code: '1f623',
        desc: 'Persevering Face'
      }, {
        code: '1f625',
        desc: 'Disappointed but Relieved Face'
      }, {
        code: '1f62e',
        desc: 'Face with Open Mouth'
      }, {
        code: '1f62f',
        desc: 'Hushed Face'
      }, {
        code: '1f62a',
        desc: 'Sleepy Face'
      }, {
        code: '1f62b',
        desc: 'Tired Face'
      }, {
        code: '1f634',
        desc: 'Sleeping Face'
      }, {
        code: '1f60c',
        desc: 'Relieved Face'
      }, {
        code: '1f61b',
        desc: 'Face with Stuck-out Tongue'
      }, {
        code: '1f61c',
        desc: 'Face with Stuck-out Tongue and Winking Eye'
      }, {
        code: '1f61d',
        desc: 'Face with Stuck-out Tongue and Tightly-Closed Eyes'
      }, {
        code: '1f612',
        desc: 'Unamused Face'
      }, {
        code: '1f613',
        desc: 'Face with Cold Sweat'
      }, {
        code: '1f613',
        desc: 'Face with Cold Sweat'
      }, {
        code: '1f614',
        desc: 'Pensive Face'
      }, {
        code: '1f615',
        desc: 'Confused Face'
      }, {
        code: '1f632',
        desc: 'Astonished  Face'
      }, {
        code: '1f616',
        desc: 'Confounded Face'
      }, {
        code: '1f61e',
        desc: 'Disappointed Face'
      }, {
        code: '1f61f',
        desc: 'Worried Face'
      }, {
        code: '1f624',
        desc: 'Face with Look of Triumph'
      }, {
        code: '1f622',
        desc: 'Crying Face'
      }, {
        code: '1f62d',
        desc: 'Loudly Crying Face'
      }, {
        code: '1f626',
        desc: 'Frowning Face with Open Mouth'
      }, {
        code: '1f627',
        desc: 'Anguished Face'
      }, {
        code: '1f628',
        desc: 'Fearful Face'
      }, {
        code: '1f629',
        desc: 'Weary Face'
      }, {
        code: '1f62c',
        desc: 'Grimacing Face'
      }, {
        code: '1f630',
        desc: 'Face with Open Mouth and Cold Sweat'
      }, {
        code: '1f631',
        desc: 'Face Screaming in Fear'
      }, {
        code: '1f633',
        desc: 'Flushed Face'
      }, {
        code: '1f635',
        desc: 'Dizzy Face'
      }, {
        code: '1f621',
        desc: 'Pouting Face'
      }, {
        code: '1f620',
        desc: 'Angry Face'
      }, {
        code: '1f637',
        desc: 'Face with Medical Mask'
      }, {
        code: '1f607',
        desc: 'Smiling Face with Halo'
      }, {
        code: '1f608',
        desc: 'Smiling Face with Horns'
      }, {
        code: '1f47f',
        desc: 'Imp'
      }, {
        code: '1f479',
        desc: 'Japanese Ogre'
      }, {
        code: '1f47a',
        desc: 'Japanese Goblin'
      }, {
        code: '1f480',
        desc: 'Skull'
      }, {
        code: '1f47b',
        desc: 'Ghost'
      }, {
        code: '1f47d',
        desc: 'Extraterrestrial Alien'
      }, {
        code: '1f47e',
        desc: 'Alien Monster'
      }, {
        code: '1f4a9',
        desc: 'Pile of Poo'
      }, {
        code: '1f63a',
        desc: 'Smiling Cat Face with Open Mouth'
      }, {
        code: '1f638',
        desc: 'Grinning Cat Face with Smiling Eyes'
      }, {
        code: '1f639',
        desc: 'Cat Face with Tears of Joy'
      }, {
        code: '1f63b',
        desc: 'Smiling Cat Face with Heart-Shaped Eyes'
      }, {
        code: '1f63c',
        desc: 'Cat Face with Wry Smile'
      }, {
        code: '1f63d',
        desc: 'Kissing Cat Face with Closed Eyes'
      }, {
        code: '1f640',
        desc: 'Weary Cat Face'
      }, {
        code: '1f63f',
        desc: 'Crying Cat Face'
      }, {
        code: '1f63e',
        desc: 'Pouting Cat Face'
      }, {
        code: '1f648',
        desc: 'See-No-Evil Monkey'
      }, {
        code: '1f649',
        desc: 'Hear-No-Evil Monkey'
      }, {
        code: '1f64a',
        desc: 'Speak-No-Evil Monkey'
      }, {
        code: '1f476',
        desc: 'Baby'
      }, {
        code: '1f466',
        desc: 'Boy'
      }, {
        code: '1f467',
        desc: 'Girl'
      }, {
        code: '1f468',
        desc: 'Man'
      }, {
        code: '1f469',
        desc: 'Woman'
      }, {
        code: '1f474',
        desc: 'Older Man'
      }, {
        code: '1f475',
        desc: 'Older Woman'
      }, {
        code: '1f46e',
        desc: 'Police Officer'
      }, {
        code: '1f482',
        desc: ' Guardsman'
      }, {
        code: '1f477',
        desc: ' Construction Worker'
      }, {
        code: '1f478',
        desc: 'Princess'
      }, {
        code: '1f473',
        desc: 'Man with Turban'
      }, {
        code: '1f472',
        desc: 'Man with Gua Pi Mao'
      }, {
        code: '1f471',
        desc: 'Person with Blond Hair'
      }, {
        code: '1f470',
        desc: 'Bride with Veil'
      }, {
        code: '1f47c',
        desc: 'Baby Angel'
      }, {
        code: '1f385',
        desc: 'Father Christmas'
      }, {
        code: '1f64e',
        desc: 'Person with Pouting Face'
      }, {
        code: '1f645',
        desc: 'Face with No Good Gesture'
      }, {
        code: '1f646',
        desc: 'Face with Ok Gesture'
      }, {
        code: '1f481',
        desc: 'Information Desk Person'
      }, {
        code: '1f64b',
        desc: 'Happy Person Raising One Hand'
      }, {
        code: '1f647',
        desc: 'Person Bowing Deeply'
      }, {
        code: '1f486',
        desc: 'Face Massage'
      }, {
        code: '1f487',
        desc: 'Haircut'
      }, {
        code: '1f6b6',
        desc: 'Pedestrian'
      }, {
        code: '1f3c3',
        desc: 'Runner'
      }, {
        code: '1f483',
        desc: 'Dancer'
      }, {
        code: '1f46f',
        desc: 'Woman with Bunny Ears'
      }, {
        code: '1f6c0',
        desc: 'Bath'
      }, {
        code: '1f464',
        desc: 'Bust in Silhouette'
      }, {
        code: '1f465',
        desc: 'Busts in Silhouette'
      }, {
        code: '1f3c7',
        desc: 'Horse Racing'
      }, {
        code: '1f3c2',
        desc: ' Snowboarder'
      }, {
        code: '1f3c4',
        desc: ' Surfer'
      }, {
        code: '1f6a3',
        desc: ' Rowboat'
      }, {
        code: '1f3ca',
        desc: ' Swimmer'
      }, {
        code: '1f6b4',
        desc: ' Bicyclist'
      }, {
        code: '1f6b5',
        desc: 'Mountain Bicyclist'
      }, {
        code: '1f46b',
        desc: ' Man and Woman Holding Hands'
      }, {
        code: '1f46c',
        desc: 'Two Men Holding Hands'
      }, {
        code: '1f46d',
        desc: 'Two Women Holding Hands'
      }, {
        code: '1f48f',
        desc: 'Kiss'
      }, {
        code: '1f468-2764-1f48b-1f468',
        uCode: "\uD83D\uDC68\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68",
        desc: 'Man Kiss Man'
      }, {
        code: '1f469-2764-1f48b-1f469',
        uCode: "\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC69",
        desc: 'Woman Kiss Woman'
      }, {
        code: '1f491',
        desc: 'Couple with Heart'
      }, {
        code: '1f468-2764-1f468',
        uCode: "\uD83D\uDC68\u200D\u2764\uFE0F\u200D\uD83D\uDC68",
        desc: 'Man Heart Man'
      }, {
        code: '1f469-2764-1f469',
        uCode: "\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC69",
        desc: 'Woman Heart Woman'
      }, {
        code: '1f46a',
        desc: 'Family'
      }, {
        code: '1f468',
        desc: 'Man Woman Boy'
      }, {
        code: '1f468-1f469-1f467',
        desc: 'Man Woman Girl'
      }, {
        code: '1f468-1f469-1f467-1f466',
        desc: 'Man Woman Girl Boy'
      }, {
        code: '1f468-1f469-1f466-1f466',
        desc: 'Man Woman Boy Boy'
      }, {
        code: '1f468-1f469-1f467-1f467',
        desc: 'Man Woman Girl Girl'
      }, {
        code: '1f468-1f468-1f466',
        desc: 'Man Man Boy'
      }, {
        code: '1f468-1f468-1f467',
        desc: 'Man Man Girl'
      }, {
        code: '1f468-1f468-1f467-1f466',
        desc: 'Man Man Girl Boy'
      }, {
        code: '1f468-1f468-1f466-1f466',
        desc: 'Man Man Boy Boy'
      }, {
        code: '1f469-1f469-1f466',
        desc: 'Woman Woman Boy'
      }, {
        code: '1f469-1f469-1f467',
        desc: 'Woman Woman Girl'
      }, {
        code: '1f469-1f469-1f467-1f466',
        desc: 'Woman Woman Girl Boy'
      }, {
        code: '1f469-1f469-1f467-1f467',
        desc: 'Woman Woman Girl Girl'
      }, {
        code: '1f4aa',
        desc: 'Flexed Biceps'
      }, {
        code: '1f448',
        desc: 'White Left Pointing Backhand Index'
      }, {
        code: '1f449',
        desc: 'White Right Pointing Backhand Index'
      }, {
        code: '1f446',
        desc: 'White Up Pointing Backhand Index'
      }, {
        code: '1f447',
        desc: 'White Down Pointing Backhand Index'
      }, {
        code: '270c',
        desc: 'Victory Hand'
      }, {
        code: '270b',
        desc: 'Raised Hand'
      }, {
        code: '1f44c',
        desc: 'Ok Hand Sign'
      }, {
        code: '1f44d',
        desc: 'Thumbs Up Sign'
      }, {
        code: '1f44e',
        desc: 'Thumbs Down Sign'
      }, {
        code: '270a',
        desc: 'Raised Fist'
      }, {
        code: '1f44a',
        desc: 'Fisted Hand Sign'
      }, {
        code: '1f44b',
        desc: 'Waving Hand Sign'
      }, {
        code: '1f44f',
        desc: 'Clapping Hands Sign'
      }, {
        code: '1f450',
        desc: 'Open  Hands Sign'
      }, {
        code: '1f64c',
        desc: 'Person Raising Both Hands in Celebration'
      }, {
        code: '1f64f',
        desc: 'Person with Folded Hands'
      }, {
        code: '1f485',
        desc: 'Nail Polish'
      }, {
        code: '1f442',
        desc: 'Ear'
      }, {
        code: '1f443',
        desc: 'Nose'
      }, {
        code: '1f463',
        desc: 'Footprints'
      }, {
        code: '1f440',
        desc: 'Eyes'
      }, {
        code: '1f445',
        desc: 'Tongue'
      }, {
        code: '1f444',
        desc: 'Mouth'
      }, {
        code: '1f48b',
        desc: 'Kiss Mark'
      }, {
        code: '1f498',
        desc: 'Heart with Arrow'
      }, {
        code: '2764',
        desc: 'Heavy Black Heart'
      }, {
        code: '1f493',
        desc: 'Heavy Black Heart'
      }, {
        code: '1f494',
        desc: 'Broken Heart'
      }, {
        code: '1f495',
        desc: 'Two Hearts'
      }, {
        code: '1f496',
        desc: 'Sparkling Hearts'
      }, {
        code: '1f497',
        desc: 'Growing Hearts'
      }, {
        code: '1f499',
        desc: 'Blue Heart'
      }, {
        code: '1f49a',
        desc: 'Green Heart'
      }, {
        code: '1f49b',
        desc: 'Yellow Heart'
      }, {
        code: '1f49c',
        desc: 'Purple Heart'
      }, {
        code: '1f49d',
        desc: 'Heart with Ribbon'
      }, {
        code: '1f49e',
        desc: 'Revolving Hearts'
      }, {
        code: '1f49f',
        desc: 'Heart Decoration'
      }, {
        code: '1f48c',
        desc: 'Love Letter'
      }, {
        code: '1f4a4',
        desc: 'Sleeping Symbol'
      }, {
        code: '1f4a2',
        desc: 'Anger Symbol'
      }, {
        code: '1f4a3',
        desc: 'Bomb'
      }, {
        code: '1f4a5',
        desc: 'Collision Symbol'
      }, {
        code: '1f4a6',
        desc: 'Splashing Sweat Symbol'
      }, {
        code: '1f4a8',
        desc: 'Dash Symbol'
      }, {
        code: '1f4ab',
        desc: 'Dizzy Symbol'
      }, {
        code: '1f4ab',
        desc: 'Dizzy Symbol'
      }, {
        code: '1f4ac',
        desc: 'Speech Balloon'
      }, {
        code: '1f4ad',
        desc: 'Thought Balloon'
      }, {
        code: '1f453',
        desc: 'Eyeglasses'
      }, {
        code: '1f454',
        desc: 'Necktie'
      }, {
        code: '1f455',
        desc: 'T-Shirt'
      }, {
        code: '1f456',
        desc: 'Jeans'
      }, {
        code: '1f457',
        desc: 'Dress'
      }, {
        code: '1f458',
        desc: 'Kimono'
      }, {
        code: '1f459',
        desc: 'Bikini'
      }, {
        code: '1f45a',
        desc: 'Womans Clothes'
      }, {
        code: '1f45b',
        desc: 'Purse'
      }, {
        code: '1f45c',
        desc: 'Handbag'
      }, {
        code: '1f45d',
        desc: 'Pouch'
      }, {
        code: '1f392',
        desc: 'School Satchel'
      }, {
        code: '1f45e',
        desc: 'Mans Shoe'
      }, {
        code: '1f45f',
        desc: 'Athletic Shoe'
      }, {
        code: '1f460',
        desc: 'High-Heeled Shoe'
      }, {
        code: '1f461',
        desc: 'Womans Sandal'
      }, {
        code: '1f462',
        desc: 'Womans Boots'
      }, {
        code: '1f451',
        desc: 'Crown'
      }, {
        code: '1f452',
        desc: 'Womans Hat'
      }, {
        code: '1f462',
        desc: 'Top Hat'
      }, {
        code: '1f393',
        desc: 'Graduation Cap'
      }, {
        code: '1f484',
        desc: 'Lipstick'
      }, {
        code: '1f48d',
        desc: 'Ring'
      }, {
        code: '1f48e',
        desc: 'Gem Stone'
      }]
    }, {
      'id': 'nature',
      'name': 'Animals & Nature',
      'code': '1F435',
      'emoticons': [{
        code: '1F435',
        desc: 'Monkey Face'
      }, {
        code: '1F412',
        desc: 'Monkey'
      }, {
        code: '1F436',
        desc: 'Dog Face'
      }, {
        code: '1F415',
        desc: 'Dog'
      }, {
        code: '1F429',
        desc: 'Poodle'
      }, {
        code: '1F43A',
        desc: 'Wolf Face'
      }, {
        code: '1F431',
        desc: 'Cat Face'
      }, {
        code: '1F408',
        desc: 'Cat'
      }, {
        code: '1F42F',
        desc: 'Tiger Face'
      }, {
        code: '1F405',
        desc: 'Tiger'
      }, {
        code: '1F406',
        desc: 'Leopard'
      }, {
        code: '1F434',
        desc: 'Horse Face'
      }, {
        code: '1F40E',
        desc: 'Horse'
      }, {
        code: '1F42E',
        desc: 'Cow Face'
      }, {
        code: '1F402',
        desc: 'Ox'
      }, {
        code: '1F403',
        desc: 'Water Buffalo'
      }, {
        code: '1F404',
        desc: 'Cow'
      }, {
        code: '1F437',
        desc: 'Pig Face'
      }, {
        code: '1F416',
        desc: 'Pig'
      }, {
        code: '1F417',
        desc: 'Boar'
      }, {
        code: '1F43D',
        desc: 'Pig Nose'
      }, {
        code: '1F40F',
        desc: 'Ram'
      }, {
        code: '1F411',
        desc: 'Sheep'
      }, {
        code: '1F410',
        desc: 'Goat'
      }, {
        code: '1F42A',
        desc: 'Dromedary Camel'
      }, {
        code: '1F42B',
        desc: 'Bactrian Camel'
      }, {
        code: '1F418',
        desc: 'Elephant'
      }, {
        code: '1F42D',
        desc: 'Mouse Face'
      }, {
        code: '1F401',
        desc: 'Mouse'
      }, {
        code: '1F400',
        desc: 'Rat'
      }, {
        code: '1F439',
        desc: 'Hamster Face'
      }, {
        code: '1F430',
        desc: 'Rabbit Face'
      }, {
        code: '1F407',
        desc: 'Rabbit'
      }, {
        code: '1F43B',
        desc: 'Bear Face'
      }, {
        code: '1F428',
        desc: 'Koala'
      }, {
        code: '1F43C',
        desc: 'Panda Face'
      }, {
        code: '1F43E',
        desc: 'Paw Prints'
      }, {
        code: '1F414',
        desc: 'Chicken'
      }, {
        code: '1F413',
        desc: 'Rooster'
      }, {
        code: '1F423',
        desc: 'Hatching Chick'
      }, {
        code: '1F424',
        desc: 'Baby Chick'
      }, {
        code: '1F425',
        desc: 'Front-Facing Baby Chick'
      }, {
        code: '1F426',
        desc: 'Bird'
      }, {
        code: '1F427',
        desc: 'Penguin'
      }, {
        code: '1F438',
        desc: 'Frog Face'
      }, {
        code: '1F40A',
        desc: 'Crocodile'
      }, {
        code: '1F422',
        desc: 'Turtle'
      }, {
        code: '1F40D',
        desc: 'Snake'
      }, {
        code: '1F432',
        desc: 'Dragon Face'
      }, {
        code: '1F409',
        desc: 'Dragon'
      }, {
        code: '1F433',
        desc: 'Spouting Whale'
      }, {
        code: '1F40B',
        desc: 'Whale'
      }, {
        code: '1F42C',
        desc: 'Dolphin'
      }, {
        code: '1F41F',
        desc: 'Fish'
      }, {
        code: '1F420',
        desc: 'Tropical Fish'
      }, {
        code: '1F421',
        desc: 'Blowfish'
      }, {
        code: '1F419',
        desc: 'Octopus'
      }, {
        code: '1F41A',
        desc: 'Spiral Shell'
      }, {
        code: '1F40C',
        desc: 'Snail'
      }, {
        code: '1F41B',
        desc: 'Bug'
      }, {
        code: '1F41C',
        desc: 'Ant'
      }, {
        code: '1F41D',
        desc: 'Honeybee'
      }, {
        code: '1F41E',
        desc: 'Lady Beetle'
      }, {
        code: '1F490',
        desc: 'Bouquet'
      }, {
        code: '1F338',
        desc: 'Cherry Blossom'
      }, {
        code: '1F4AE',
        desc: 'White Flower'
      }, {
        code: '1F339',
        desc: 'Rose'
      }, {
        code: '1F33A',
        desc: 'Hibiscus'
      }, {
        code: '1F33B',
        desc: 'Sunflower'
      }, {
        code: '1F33C',
        desc: 'Blossom'
      }, {
        code: '1F337',
        desc: 'Tulip'
      }, {
        code: '1F331',
        desc: 'Seedling'
      }, {
        code: '1F332',
        desc: 'Evergreen Tree'
      }, {
        code: '1F333',
        desc: 'Deciduous Tree'
      }, {
        code: '1F334',
        desc: 'Palm Tree'
      }, {
        code: '1F335',
        desc: 'Cactus'
      }, {
        code: '1F33E',
        desc: 'Ear of Rice'
      }, {
        code: '1F33F',
        desc: 'Herb'
      }, {
        code: '2618',
        desc: 'Four Leaf Clover'
      }, {
        code: '1F341',
        desc: 'Maple Leaf'
      }, {
        code: '1F342',
        desc: 'Fallen Leaf'
      }, {
        code: '1F343',
        desc: 'Leaf Fluttering in Wind'
      }]
    }, {
      'id': 'foods',
      'name': 'Food & Drink',
      'code': '1F347',
      'emoticons': [{
        code: '1F347',
        desc: 'Grapes'
      }, {
        code: '1F348',
        desc: 'Melon'
      }, {
        code: '1F349',
        desc: 'Watermelon'
      }, {
        code: '1F34A',
        desc: 'Tangerine'
      }, {
        code: '1F34B',
        desc: 'Lemon'
      }, {
        code: '1F34C',
        desc: 'Banana'
      }, {
        code: '1F34D',
        desc: 'Pineapple'
      }, {
        code: '1F34E',
        desc: 'Red Apple'
      }, {
        code: '1F34F',
        desc: 'Green Apple'
      }, {
        code: '1F350',
        desc: 'Pear'
      }, {
        code: '1F351',
        desc: 'Peach'
      }, {
        code: '1F352',
        desc: 'Cherries'
      }, {
        code: '1F353',
        desc: 'Strawberry'
      }, {
        code: '1F345',
        desc: 'Tomato'
      }, {
        code: '1F346',
        desc: 'Aubergine'
      }, {
        code: '1F33D',
        desc: 'Ear of Maize'
      }, {
        code: '1F344',
        desc: 'Mushroom'
      }, {
        code: '1F330',
        desc: 'Chestnut'
      }, {
        code: '1F35E',
        desc: 'Bread'
      }, {
        code: '1F356',
        desc: 'Meat on Bone'
      }, {
        code: '1F357',
        desc: 'Poultry Leg'
      }, {
        code: '1F354',
        desc: 'Hamburger'
      }, {
        code: '1F35F',
        desc: 'French Fries'
      }, {
        code: '1F355',
        desc: 'Slice of Pizza'
      }, {
        code: '1F373',
        desc: 'Cooking'
      }, {
        code: '1F372',
        desc: 'Pot of Food'
      }, {
        code: '1F371',
        desc: 'Bento Box'
      }, {
        code: '1F358',
        desc: 'Rice Cracker'
      }, {
        code: '1F359',
        desc: 'Rice Ball'
      }, {
        code: '1F35A',
        desc: 'Cooked Rice'
      }, {
        code: '1F35B',
        desc: 'Curry and Rice'
      }, {
        code: '1F35C',
        desc: 'Steaming Bowl'
      }, {
        code: '1F35D',
        desc: 'Spaghetti'
      }, {
        code: '1F360',
        desc: 'Roasted Sweet Potato'
      }, {
        code: '1F362',
        desc: 'Oden'
      }, {
        code: '1F363',
        desc: 'Sushi'
      }, {
        code: '1F364',
        desc: 'Fried Shrimp'
      }, {
        code: '1F365',
        desc: 'Fish Cake with Swirl Design'
      }, {
        code: '1F361',
        desc: 'Dango'
      }, {
        code: '1F366',
        desc: 'Soft Ice Cream'
      }, {
        code: '1F367',
        desc: 'Shaved Ice'
      }, {
        code: '1F368',
        desc: 'Ice Cream'
      }, {
        code: '1F369',
        desc: 'Doughnut'
      }, {
        code: '1F36A',
        desc: 'Cookie'
      }, {
        code: '1F382',
        desc: 'Birthday Cake'
      }, {
        code: '1F370',
        desc: 'Shortcake'
      }, {
        code: '1F36B',
        desc: 'Chocolate Bar'
      }, {
        code: '1F36C',
        desc: 'Candy'
      }, {
        code: '1F36D',
        desc: 'Lollipop'
      }, {
        code: '1F36E',
        desc: 'Custard'
      }, {
        code: '1F36F',
        desc: 'Honey Pot'
      }, {
        code: '1F37C',
        desc: 'Baby Bottle'
      }, {
        code: '2615',
        desc: 'Hot Beverage'
      }, {
        code: '1F375',
        desc: 'Teacup Without Handle'
      }, {
        code: '1F376',
        desc: 'Sake Bottle and Cup'
      }, {
        code: '1F377',
        desc: 'Wine Glass'
      }, {
        code: '1F378',
        desc: 'Cocktail Glass'
      }, {
        code: '1F379',
        desc: 'Tropical Drink'
      }, {
        code: '1F37A',
        desc: 'Beer Mug'
      }, {
        code: '1F37B',
        desc: 'Clinking Beer Mugs'
      }, {
        code: '1F374',
        desc: 'Fork and Knife'
      }, {
        code: '1F52A',
        desc: 'Hocho'
      }]
    }, {
      'id': 'activity',
      'name': 'Activities',
      'code': '1f383',
      'emoticons': [{
        code: '1f383',
        desc: ' Jack-O-Lantern'
      }, {
        code: '1f384',
        desc: 'Christmas Tree'
      }, {
        code: '1f386',
        desc: ' Fireworks'
      }, {
        code: '1f387',
        desc: 'Firework Sparkler'
      }, {
        code: '2728',
        desc: ' Sparkles'
      }, {
        code: '1f388',
        desc: 'Balloon'
      }, {
        code: '1f389',
        desc: 'Party Popper'
      }, {
        code: '1f38a',
        desc: 'Confetti Ball'
      }, {
        code: '1f38b',
        desc: 'Tanabata Tree'
      }, {
        code: '1f38d',
        desc: 'Pine Decoration'
      }, {
        code: '1f38e',
        desc: 'Japanese Dolls'
      }, {
        code: '1f38f',
        desc: 'Carp Streamer'
      }, {
        code: '1f390',
        desc: 'Wind Chime'
      }, {
        code: '1f391',
        desc: 'Moon Viewing Ceremony'
      }, {
        code: '1f380',
        desc: 'Ribbon'
      }, {
        code: '1f381',
        desc: 'Wrapped Present'
      }, {
        code: '1f3ab',
        desc: 'Ticket'
      }, {
        code: '1f3c6',
        desc: 'Trophy'
      }, {
        code: '1f388',
        desc: 'Balloon'
      }, {
        code: '26bd',
        desc: 'Soccer Ball'
      }, {
        code: '26be',
        desc: 'Baseball'
      }, {
        code: '1f3c0',
        desc: 'Basketball and Hoop'
      }, {
        code: '1f3c8',
        desc: 'American Football'
      }, {
        code: '1f3c9',
        desc: 'Rugby Football'
      }, {
        code: '1f3be',
        desc: 'Tennis Racquet and Ball'
      }, {
        code: '1f3b1',
        desc: 'Billiards'
      }, {
        code: '1f3b3',
        desc: 'Bowling'
      }, {
        code: '1f3af',
        desc: 'Direct Hit'
      }, {
        code: '26f3',
        desc: 'Flag in Hole'
      }, {
        code: '1f3a3',
        desc: 'Fishing Pole and Fish'
      }, {
        code: '1f3bd',
        desc: 'Running Shirt with Sash'
      }, {
        code: '1f3bf',
        desc: 'Ski and Ski Boot'
      }, {
        code: '1f3ae',
        desc: 'Video Game'
      }, {
        code: '1f3b2',
        desc: 'Game Die'
      }, {
        code: '2660',
        desc: 'Black Spade Suit'
      }, {
        code: '2665',
        desc: 'Black Heart SuiT'
      }, {
        code: '2666',
        desc: 'Black Diamond Suit'
      }, {
        code: '2663',
        desc: 'Black Club Suit'
      }, {
        code: '1f0cf',
        desc: 'Playing Card Black Joker'
      }, {
        code: '1f004',
        desc: 'Mahjong Tile Red Dragon'
      }, {
        code: '1f3b4',
        desc: 'Flower Playing Cards'
      }]
    }, {
      'id': 'places',
      'name': 'Travel & Places',
      'code': '1f30d',
      'emoticons': [{
        code: '1f30d',
        desc: 'Earth Globe Europe-Africa'
      }, {
        code: '1f30e',
        desc: 'Earth Globe Americas'
      }, {
        code: '1f30f',
        desc: 'Earth Globe Asia-Australia'
      }, {
        code: '1f310',
        desc: 'Globe with Meridians'
      }, {
        code: '1f5fe',
        desc: 'Silhouette of Japan'
      }, {
        code: '1f30b',
        desc: 'Volcano'
      }, {
        code: '1f5fb',
        desc: 'Mount Fuji'
      }, {
        code: '1f3e0',
        desc: 'House Building'
      }, {
        code: '1f3e1',
        desc: 'House with Garden'
      }, {
        code: '1f3e2',
        desc: 'Office Building'
      }, {
        code: '1f3e3',
        desc: 'Japanese Post Office'
      }, {
        code: '1f3e4',
        desc: 'European Post Office'
      }, {
        code: '1f3e5',
        desc: 'Hospital'
      }, {
        code: '1f3e6',
        desc: 'Bank'
      }, {
        code: '1f3e8',
        desc: 'Hotel'
      }, {
        code: '1f3e9',
        desc: 'Love Hotel'
      }, {
        code: '1f3ea',
        desc: 'Convenience Store'
      }, {
        code: '1f3eb',
        desc: 'School'
      }, {
        code: '1f3ec',
        desc: 'Department Store'
      }, {
        code: '1f3ed',
        desc: 'Factory'
      }, {
        code: '1f3ef',
        desc: 'Japanese Castle'
      }, {
        code: '1f3f0',
        desc: 'European Castle'
      }, {
        code: '1f492',
        desc: 'Wedding'
      }, {
        code: '1f5fc',
        desc: 'Tokyo Tower'
      }, {
        code: '1f5fd',
        desc: 'Statue of Liberty'
      }, {
        code: '26ea',
        desc: 'Church'
      }, {
        code: '26f2',
        desc: 'Fountain'
      }, {
        code: '26fa',
        desc: 'Tent'
      }, {
        code: '1f301',
        desc: 'Foggy'
      }, {
        code: '1f303',
        desc: 'Night with Stars'
      }, {
        code: '1f304',
        desc: 'Sunrise over Mountains'
      }, {
        code: '1f305',
        desc: 'Sunrise'
      }, {
        code: '1f306',
        desc: 'Cityscape at Dusk'
      }, {
        code: '1f307',
        desc: 'Sunset over Buildings'
      }, {
        code: '1f309',
        desc: 'Bridge at Night'
      }, {
        code: '2668',
        desc: 'Hot Springs'
      }, {
        code: '1f30c',
        desc: 'Milky Way'
      }, {
        code: '1f3a0',
        desc: 'Carousel Horse'
      }, {
        code: '1f3a1',
        desc: 'Ferris Wheel'
      }, {
        code: '1f3a2',
        desc: 'Roller Coaster'
      }, {
        code: '1f488',
        desc: 'Barber Pole'
      }, {
        code: '1f3aa',
        desc: 'Circus Tent'
      }, {
        code: '1f3ad',
        desc: 'Performing Arts'
      }, {
        code: '1f3a8',
        desc: 'Artist Palette'
      }, {
        code: '1f3b0',
        desc: 'Slot Machine'
      }, {
        code: '1f682',
        desc: 'Steam Locomotive'
      }, {
        code: '1f683',
        desc: 'Railway Car'
      }, {
        code: '1f684',
        desc: 'High-Speed Train'
      }, {
        code: '1f685',
        desc: 'High-Speed Train with Bullet Nose'
      }, {
        code: '1f686',
        desc: 'Train'
      }, {
        code: '1f687',
        desc: 'Metro'
      }, {
        code: '1f688',
        desc: 'Light Rail'
      }, {
        code: '1f689',
        desc: 'Station'
      }, {
        code: '1f68a',
        desc: 'Tram'
      }, {
        code: '1f69d',
        desc: 'Monorail'
      }, {
        code: '1f69e',
        desc: 'Mountain Railway'
      }, {
        code: '1f68b',
        desc: 'Tram Car'
      }, {
        code: '1f68c',
        desc: 'Bus'
      }, {
        code: '1f68d',
        desc: 'Oncoming Bus'
      }, {
        code: '1f68e',
        desc: 'Trolleybus'
      }, {
        code: '1f690',
        desc: 'Minibus'
      }, {
        code: '1f691',
        desc: 'Ambulance'
      }, {
        code: '1f692',
        desc: 'Fire Engine'
      }, {
        code: '1f693',
        desc: 'Police Car'
      }, {
        code: '1f694',
        desc: 'Oncoming Police Car'
      }, {
        code: '1f695',
        desc: 'Taxi'
      }, {
        code: '1f695',
        desc: 'Oncoming Taxi'
      }, {
        code: '1f697',
        desc: 'Automobile'
      }, {
        code: '1f698',
        desc: 'Oncoming Automobile'
      }, {
        code: '1f699',
        desc: 'Recreational Vehicle'
      }, {
        code: '1f69a',
        desc: 'Delivery Truck'
      }, {
        code: '1f69b',
        desc: 'Articulated Lorry'
      }, {
        code: '1f69c',
        desc: 'Tractor'
      }, {
        code: '1f6b2',
        desc: 'Bicycle'
      }, {
        code: '1f68f',
        desc: 'Bus Stop'
      }, {
        code: '26fd',
        desc: 'Fuel Pump'
      }, {
        code: '1f6a8',
        desc: 'Police Cars Revolving Light'
      }, {
        code: '1f6a5',
        desc: 'Horizontal Traffic Light'
      }, {
        code: '1f6a6',
        desc: 'Vertical Traffic Light'
      }, {
        code: '1f6a7',
        desc: 'Construction Sign'
      }, {
        code: '2693',
        desc: 'Anchor'
      }, {
        code: '26f5',
        desc: 'Sailboat'
      }, {
        code: '1f6a4',
        desc: 'Speedboat'
      }, {
        code: '1f6a2',
        desc: 'Ship'
      }, {
        code: '2708',
        desc: 'Airplane'
      }, {
        code: '1f4ba',
        desc: 'Seat'
      }, {
        code: '1f681',
        desc: 'Helicopter'
      }, {
        code: '1f69f',
        desc: 'Suspension Railway'
      }, {
        code: '1f6a0',
        desc: 'Mountain Cableway'
      }, {
        code: '1f6a1',
        desc: 'Aerial Tramway'
      }, {
        code: '1f680',
        desc: 'Rocket'
      }, {
        code: '1f6aa',
        desc: 'Door'
      }, {
        code: '1f6bd',
        desc: 'Toilet'
      }, {
        code: '1f6bf',
        desc: 'Shower'
      }, {
        code: '1f6c1',
        desc: 'Bathtub'
      }, {
        code: '231b',
        desc: 'Hourglass'
      }, {
        code: '23f3',
        desc: 'Hourglass with Flowing Sand'
      }, {
        code: '231a',
        desc: 'Watch'
      }, {
        code: '23f0',
        desc: 'Alarm Clock'
      }, {
        code: '1f55b',
        desc: 'Clock Face Twelve Oclock'
      }, {
        code: '1f567',
        desc: 'Clock Face Twelve-Thirty'
      }, {
        code: '1f550',
        desc: 'Clock Face One Oclock'
      }, {
        code: '1f55c',
        desc: 'Clock Face One-thirty'
      }, {
        code: '1f551',
        desc: 'Clock Face Two Oclock'
      }, {
        code: '1f55d',
        desc: 'Clock Face Two-thirty'
      }, {
        code: '1f552',
        desc: 'Clock Face Three Oclock'
      }, {
        code: '1f55e',
        desc: 'Clock Face Three-thirty'
      }, {
        code: '1f553',
        desc: 'Clock Face Four Oclock'
      }, {
        code: '1f55f',
        desc: 'Clock Face Four-thirty'
      }, {
        code: '1f554',
        desc: 'Clock Face Five Oclock'
      }, {
        code: '1f560',
        desc: 'Clock Face Five-thirty'
      }, {
        code: '1f555',
        desc: 'Clock Face Six Oclock'
      }, {
        code: '1f561',
        desc: 'Clock Face Six-thirty'
      }, {
        code: '1f556',
        desc: 'Clock Face Seven Oclock'
      }, {
        code: '1f562',
        desc: 'Clock Face Seven-thirty'
      }, {
        code: '1f557',
        desc: 'Clock Face Eight Oclock'
      }, {
        code: '1f563',
        desc: 'Clock Face Eight-thirty'
      }, {
        code: '1f558',
        desc: 'Clock Face Nine Oclock'
      }, {
        code: '1f564',
        desc: 'Clock Face Nine-thirty'
      }, {
        code: '1f559',
        desc: 'Clock Face Ten Oclock'
      }, {
        code: '1f565',
        desc: 'Clock Face Ten-thirty'
      }, {
        code: '1f55a',
        desc: 'Clock Face Eleven Oclock'
      }, {
        code: '1f566',
        desc: 'Clock Face Eleven-thirty'
      }, {
        code: '1f311',
        desc: 'New Moon Symbol'
      }, {
        code: '1f312',
        desc: 'Waxing Crescent Moon Symbol'
      }, {
        code: '1f313',
        desc: 'First Quarter Moon Symbol'
      }, {
        code: '1f314',
        desc: 'Waxing Gibbous Moon Symbol'
      }, {
        code: '1f315',
        desc: 'Full Moon Symbol'
      }, {
        code: '1f316',
        desc: 'Waning Gibbous Moon Symbol'
      }, {
        code: '1f317',
        desc: 'Last Quarter Moon Symbol'
      }, {
        code: '1f318',
        desc: 'Waning Crescent Moon Symbol'
      }, {
        code: '1f319',
        desc: 'Crescent Moon'
      }, {
        code: '1f31a',
        desc: 'New Moon with Face'
      }, {
        code: '1f31b',
        desc: 'First Quarter Moon with Face'
      }, {
        code: '1f31c',
        desc: 'Last Quarter Moon with Face'
      }, {
        code: '2600',
        desc: 'Black Sun with Rays'
      }, {
        code: '1f31d',
        desc: 'Full Moon with Face'
      }, {
        code: '1f31e',
        desc: 'Sun with Face'
      }, {
        code: '2b50',
        desc: 'White Medium Star'
      }, {
        code: '1f31f',
        desc: 'Glowing Star'
      }, {
        code: '1f320',
        desc: 'Shooting Star'
      }, {
        code: '2601',
        desc: 'Cloud'
      }, {
        code: '26c5',
        desc: 'Sun Behind Cloud'
      }, {
        code: '1f300',
        desc: 'Cyclone'
      }, {
        code: '1f308',
        desc: 'Rainbow'
      }, {
        code: '1f302',
        desc: 'Closed Umbrella'
      }, {
        code: '2614',
        desc: 'Umbrella with Rain Drops'
      }, {
        code: '26a1',
        desc: 'High Voltage Sign'
      }, {
        code: '2744',
        desc: 'Snowflake'
      }, {
        code: '2603',
        desc: 'Snowman Without Snow'
      }, {
        code: '1f525',
        desc: 'Fire'
      }, {
        code: '1f4a7',
        desc: 'Droplet'
      }, {
        code: '1F30A',
        desc: 'Water Wave'
      }]
    }, {
      'id': 'objects',
      'name': 'Objects',
      'code': '1F507',
      'emoticons': [{
        code: '1F507',
        desc: 'Speaker with Cancellation Stroke'
      }, {
        code: '1F508',
        desc: 'Speaker'
      }, {
        code: '1F509',
        desc: 'Speaker with One Sound Wave'
      }, {
        code: '1F50A',
        desc: 'Speaker with Three Sound Wave'
      }, {
        code: '1F4E2',
        desc: 'Public Address Loudspeaker'
      }, {
        code: '1F4E3',
        desc: 'Cheering Megaphone'
      }, {
        code: '1F4EF',
        desc: 'Postal Horn'
      }, {
        code: '1F514',
        desc: 'Bell'
      }, {
        code: '1F515',
        desc: 'Bell with Cancellation Stroke'
      }, {
        code: '1F3BC',
        desc: 'Musical Score'
      }, {
        code: '1F3B5',
        desc: 'Musical Note'
      }, {
        code: '1F3B6',
        desc: 'Multiple Musical Notes'
      }, {
        code: '1F3A4',
        desc: 'Microphone'
      }, {
        code: '1F3A7',
        desc: 'Headphone'
      }, {
        code: '1F4FB',
        desc: 'Radio'
      }, {
        code: '1F3B7',
        desc: 'Saxophone'
      }, {
        code: '1F3B8',
        desc: 'Guitar'
      }, {
        code: '1F3B9',
        desc: 'Musical Keyboard'
      }, {
        code: '1F3BA',
        desc: 'Trumpet'
      }, {
        code: '1F3BB',
        desc: 'Violin'
      }, {
        code: '1F4F1',
        desc: 'Mobile Phone'
      }, {
        code: '1F4F2',
        desc: 'Mobile Phone with Rightwards Arrow at Left'
      }, {
        code: '260E',
        desc: 'Black Telephone'
      }, {
        code: '1F4DE',
        desc: 'Telephone Receiver'
      }, {
        code: '1F4DF',
        desc: 'Pager'
      }, {
        code: '1F4E0',
        desc: 'Fax Machine'
      }, {
        code: '1F50B',
        desc: 'Battery'
      }, {
        code: '1F50C',
        desc: 'Electric Plug'
      }, {
        code: '1F4BB',
        desc: 'Personal Computer'
      }, {
        code: '1F4BD',
        desc: 'Minidisc'
      }, {
        code: '1F4BE',
        desc: 'Floppy Disk'
      }, {
        code: '1F4BF',
        desc: 'Optical Disk'
      }, {
        code: '1F4C0',
        desc: 'Dvd'
      }, {
        code: '1F3A5',
        desc: 'Movie Camera'
      }, {
        code: '1F3AC',
        desc: 'Clapper Board'
      }, {
        code: '1F4FA',
        desc: 'Television'
      }, {
        code: '1F4F7',
        desc: 'Camera'
      }, {
        code: '1F4F9',
        desc: 'Video Camera'
      }, {
        code: '1F4FC',
        desc: 'Videocassette'
      }, {
        code: '1F50D',
        desc: 'Left-Pointing Magnifying Glass'
      }, {
        code: '1F50E',
        desc: 'Right-Pointing Magnifying Glass'
      }, {
        code: '1F52C',
        desc: 'Microscope'
      }, {
        code: '1F52D',
        desc: 'Telelscope'
      }, {
        code: '1F4E1',
        desc: 'Satellite Antenna'
      }, {
        code: '1F4A1',
        desc: 'Electric Light Bulb'
      }, {
        code: '1F526',
        desc: 'Electric Torch'
      }, {
        code: '1F3EE',
        desc: 'Izakaya Lantern'
      }, {
        code: '1F4D4',
        desc: 'Notebook with Decorative Cover'
      }, {
        code: '1F4D5',
        desc: 'Closed Book'
      }, {
        code: '1F4D6',
        desc: 'Open Book'
      }, {
        code: '1F4D7',
        desc: 'Green Book'
      }, {
        code: '1F4D8',
        desc: 'Blue Book'
      }, {
        code: '1F4D9',
        desc: 'Orange Book'
      }, {
        code: '1F4DA',
        desc: 'Books'
      }, {
        code: '1F4D3',
        desc: 'Notebook'
      }, {
        code: '1F4D2',
        desc: 'Ledger'
      }, {
        code: '1F4C3',
        desc: 'Curl'
      }, {
        code: '1F4DC',
        desc: 'Scroll'
      }, {
        code: '1F4C4',
        desc: 'Page Facing Up'
      }, {
        code: '1F4F0',
        desc: 'Newspaper'
      }, {
        code: '1F4D1',
        desc: 'Bookmark Tabs'
      }, {
        code: '1F516',
        desc: 'Bookmark'
      }, {
        code: '1F4B0',
        desc: 'Money Bag'
      }, {
        code: '1F4B4',
        desc: 'Banknote with Yen Sign'
      }, {
        code: '1F4B5',
        desc: 'Banknote with Dollar Sign'
      }, {
        code: '1F4B6',
        desc: 'Banknote with Euro Sign'
      }, {
        code: '1F4B7',
        desc: 'Banknote with Pound Sign'
      }, {
        code: '1F4B8',
        desc: 'Money with Wings'
      }, {
        code: '1F4B3',
        desc: 'Credit Card'
      }, {
        code: '1F4B9',
        desc: 'Chart with Upwards Trend and Yen Sign'
      }, {
        code: '1F4B1',
        desc: 'Currency Exchange'
      }, {
        code: '1F4B2',
        desc: 'Heavy Dollar Sign'
      }, {
        code: '2709',
        desc: 'Envelope'
      }, {
        code: '1F4E7',
        desc: 'E-Mail Symbol'
      }, {
        code: '1F4E8',
        desc: 'Incoming Envelope'
      }, {
        code: '1F4E9',
        desc: 'Envelope with Downwards Arrow Above'
      }, {
        code: '1F4E4',
        desc: 'Outbox Tray'
      }, {
        code: '1F4E5',
        desc: 'Inbox Tray'
      }, {
        code: '1F4E6',
        desc: 'Package'
      }, {
        code: '1F4BE',
        desc: 'Closed Mailbox with Raised Flag'
      }, {
        code: '1F4EA',
        desc: 'Closed Mailbox with Lowered Flag'
      }, {
        code: '1F4EC',
        desc: 'Open Mailbox with Raised Flag'
      }, {
        code: '1F4ED',
        desc: 'Open Mailbox with Lowered Flag'
      }, {
        code: '1F5F3',
        desc: 'Postbox'
      }, {
        code: '270F',
        desc: 'Pencil'
      }, {
        code: '2712',
        desc: 'Black Nib'
      }, {
        code: '1F4DD',
        desc: 'Memo'
      }, {
        code: '1F4BC',
        desc: 'Briefcase'
      }, {
        code: '1F4C1',
        desc: 'File Folder'
      }, {
        code: '1F4C2',
        desc: 'Open File Folder'
      }, {
        code: '1F4C5',
        desc: 'Calender'
      }, {
        code: '1F4C6',
        desc: 'Tear-off Calender'
      }, {
        code: '1F4C7',
        desc: 'Card Index'
      }, {
        code: '1F4C8',
        desc: 'Chart with Upwards Trend'
      }, {
        code: '1F4C9',
        desc: 'Chart with Downwards Trend'
      }, {
        code: '1F4CA',
        desc: 'Bar Chart'
      }, {
        code: '1F4CB',
        desc: 'Clipboard'
      }, {
        code: '1F4CC',
        desc: 'Pushpin'
      }, {
        code: '1F4CD',
        desc: 'Round Pushpin'
      }, {
        code: '1F4CE',
        desc: 'Paperclip'
      }, {
        code: '1F4CF',
        desc: 'Straight Ruler'
      }, {
        code: '1F4D0',
        desc: 'Triangular Ruler'
      }, {
        code: '2702',
        desc: 'Black Scissors'
      }, {
        code: '1F512',
        desc: 'Lock'
      }, {
        code: '1F513',
        desc: 'Open Lock'
      }, {
        code: '1F50F',
        desc: 'Lock with Ink Pen'
      }, {
        code: '1F510',
        desc: 'Closed Lock with Key'
      }, {
        code: '1F511',
        desc: 'Key'
      }, {
        code: '1F528',
        desc: 'Hammer'
      }, {
        code: '1F52B',
        desc: 'Pistol'
      }, {
        code: '1F527',
        desc: 'Wrench'
      }, {
        code: '1F529',
        desc: 'Nut and Bolt'
      }, {
        code: '1F517',
        desc: 'Link Symbol'
      }, {
        code: '1F489',
        desc: 'Syringe'
      }, {
        code: '1F48A',
        desc: 'Pill'
      }, {
        code: '1F6AC',
        desc: 'Smoking Symbol'
      }, {
        code: '1F5FF',
        desc: 'Moyai'
      }, {
        code: '1F52E',
        desc: 'Crystal Ball'
      }]
    }, {
      'id': 'symbols',
      'name': 'Symbols',
      'code': '1F3E7',
      'emoticons': [{
        code: '1F3E7',
        desc: 'Automated Teller Machine'
      }, {
        code: '1F6AE',
        desc: 'Put Litter in Its Place Symbol'
      }, {
        code: '1F6B0',
        desc: 'Potable Water Symbol'
      }, {
        code: '267F',
        desc: 'Wheelchair Symbol'
      }, {
        code: '1F6B9',
        desc: 'Mens Symbol'
      }, {
        code: '1F6BA',
        desc: 'Womens Symbol'
      }, {
        code: '1F6BB',
        desc: 'Restroom'
      }, {
        code: '1F6BC',
        desc: 'Baby Symbol'
      }, {
        code: '1F6BE',
        desc: 'Water Closet'
      }, {
        code: '1F6C2',
        desc: 'Passport Control'
      }, {
        code: '1F6C3',
        desc: 'Customs'
      }, {
        code: '1F6C4',
        desc: 'Baggage Claim'
      }, {
        code: '1F6C5',
        desc: 'Left Luggage'
      }, {
        code: '26A0',
        desc: 'Warning Sign'
      }, {
        code: '1F6B8',
        desc: 'Children Crossing'
      }, {
        code: '26D4',
        desc: 'No Entry'
      }, {
        code: '1F6AB',
        desc: 'No Entry Sign'
      }, {
        code: '1F6B3',
        desc: 'No Bicycles'
      }, {
        code: '1F6AD',
        desc: 'No Smoking Symbol'
      }, {
        code: '1F6AF',
        desc: 'Do Not Litter Symbol'
      }, {
        code: '1F6B1',
        desc: 'Non-Potable Water Symbol'
      }, {
        code: '1F6B7',
        desc: 'No Pedestrians'
      }, {
        code: '1F4F5',
        desc: 'No Mobile Phones'
      }, {
        code: '1F51E',
        desc: 'No One Under Eighteen Symbol'
      }, {
        code: '2B06',
        desc: 'Upwards Black Arrow'
      }, {
        code: '2197',
        desc: 'North East Arrow'
      }, {
        code: '27A1',
        desc: 'Black Rightwards Arrow'
      }, {
        code: '2198',
        desc: 'South East Arrow'
      }, {
        code: '2B07',
        desc: 'Downwards Black Arrow'
      }, {
        code: '2199',
        desc: 'South West Arrow'
      }, {
        code: '2B05',
        desc: 'Leftwards Black Arrow'
      }, {
        code: '2196',
        desc: 'North West Arrow'
      }, {
        code: '2195',
        desc: 'Up Down Arrow'
      }, {
        code: '2194',
        desc: 'Left Right Arrow'
      }, {
        code: '21A9',
        desc: 'Leftwards Arrow with Hook'
      }, {
        code: '21AA',
        desc: 'Rightwards Arrow with Hook'
      }, {
        code: '2934',
        desc: 'Arrow Pointing Rightwards Then Curving Upwards'
      }, {
        code: '2935',
        desc: 'Arrow Pointing Rightwards Then Curving Downwards'
      }, {
        code: '1F503',
        desc: 'Clockwise Downwards and Upwards Open Circle Arrows'
      }, {
        code: '1F504',
        desc: 'Anticlockwise Downwards and Upwards Open Circle Arrows'
      }, {
        code: '1F519',
        desc: 'Back with Leftwards Arrow Above'
      }, {
        code: '1F51A',
        desc: 'End with Leftwards Arrow Above'
      }, {
        code: '1F51B',
        desc: 'On with Exclamation Mark with Left Right Arrow Above'
      }, {
        code: '1F51C',
        desc: 'Soon with Rightwards Arrow Above'
      }, {
        code: '1F51D',
        desc: 'Top with Upwards Arrow Above'
      }, {
        code: '1F52F',
        desc: 'Six Pointed Star with Middle Dot'
      }, {
        code: '2648',
        desc: 'Aries'
      }, {
        code: '2649',
        desc: 'Taurus'
      }, {
        code: '264A',
        desc: 'Gemini'
      }, {
        code: '264B',
        desc: 'Cancer'
      }, {
        code: '264C',
        desc: 'Leo'
      }, {
        code: '264D',
        desc: 'Virgo'
      }, {
        code: '264E',
        desc: 'Libra'
      }, {
        code: '264F',
        desc: 'Scorpius'
      }, {
        code: '2650',
        desc: 'Sagittarius'
      }, {
        code: '2651',
        desc: 'Capricorn'
      }, {
        code: '2652',
        desc: 'Aquarius'
      }, {
        code: '2653',
        desc: 'Pisces'
      }, {
        code: '26CE',
        desc: 'Ophiuchus'
      }, {
        code: '1F500',
        desc: 'Twisted Rightwards Arrows'
      }, {
        code: '1F501',
        desc: 'Clockwise Rightwards and Leftwards Open Circle Arrows'
      }, {
        code: '1F502',
        desc: 'Clockwise Rightwards and Leftwards Open Circle Arrows with Circled One Overlay'
      }, {
        code: '25B6',
        desc: 'Black Right-Pointing Triangle'
      }, {
        code: '23E9',
        desc: 'Black Right-Pointing Double Triangle'
      }, {
        code: '25C0',
        desc: 'Black Left-Pointing Triangle'
      }, {
        code: '23EA',
        desc: 'Black Left-Pointing Double Triangle'
      }, {
        code: '1F53C',
        desc: 'Up-Pointing Small Red Triangle'
      }, {
        code: '23EB',
        desc: 'Black Up-Pointing Double Triangle'
      }, {
        code: '1F53D',
        desc: 'Down-Pointing Small Red Triangle'
      }, {
        code: '23EC',
        desc: 'Black Down-Pointing Double Triangle'
      }, {
        code: '1F3A6',
        desc: 'Cinema'
      }, {
        code: '1F505',
        desc: 'Low Brightness Symbol'
      }, {
        code: '1F506',
        desc: 'High Brightness Symbol'
      }, {
        code: '1F4F6',
        desc: 'Antenna with Bars'
      }, {
        code: '1F4F3',
        desc: 'Vibration Mode'
      }, {
        code: '1F4F4',
        desc: 'Mobile Phone off'
      }, {
        code: '267B',
        desc: 'Black Universal Recycling Symbol'
      }, {
        code: '1F531',
        desc: 'Trident Emblem'
      }, {
        code: '1F4DB',
        desc: 'Name Badge'
      }, {
        code: '1F530',
        desc: 'Japanese Symbol for Beginner'
      }, {
        code: '2B55',
        desc: 'Heavy Large Circle'
      }, {
        code: '2705',
        desc: 'White Heavy Check Mark'
      }, {
        code: '2611',
        desc: 'Ballot Box with Check'
      }, {
        code: '2714',
        desc: 'Heavy Check Mark'
      }, {
        code: '2716',
        desc: 'Heavy Multiplication X'
      }, {
        code: '274C',
        desc: 'Cross Mark'
      }, {
        code: '274E',
        desc: 'Negative Squared Cross Mark'
      }, {
        code: '2795',
        desc: 'Heavy Plus Sign'
      }, {
        code: '2796',
        desc: 'Heavy Minus Sign'
      }, {
        code: '2797',
        desc: 'Heavy Division Sign'
      }, {
        code: '27B0',
        desc: 'Curly Loop'
      }, {
        code: '27BF',
        desc: 'Double Curly Loop'
      }, {
        code: '303D',
        desc: 'Part Alternation Mark'
      }, {
        code: '2733',
        desc: 'Eight Spoked Asterisk'
      }, {
        code: '2734',
        desc: 'Eight Pointed Black Star'
      }, {
        code: '2747',
        desc: 'Sparkle'
      }, {
        code: '203C',
        desc: 'Double Exclamation Mark'
      }, {
        code: '2049',
        desc: 'Exclamation Question Mark'
      }, {
        code: '2753',
        desc: 'Black Question Mark Ornament'
      }, {
        code: '2754',
        desc: 'White Question Mark Ornament'
      }, {
        code: '2755',
        desc: 'White Exclamation Mark Ornament'
      }, {
        code: '2757',
        desc: 'Heavy Exclamation Mark Symbol'
      }, {
        code: '3030',
        desc: 'Wavy Dash'
      }, {
        code: '2122',
        desc: 'Trade Mark Sign'
      }, {
        code: '1F51F',
        desc: 'Keycap Ten'
      }, {
        code: '1F4AF',
        desc: 'Hundred Points Symbol'
      }, {
        code: '1F520',
        desc: 'Input Symbol for Latin Capital Letters'
      }, {
        code: '1F521',
        desc: 'Input Symbol for Latin Small Letters'
      }, {
        code: '1F522',
        desc: 'Input Symbol for Numbers'
      }, {
        code: '1F523',
        desc: 'Input Symbol for Symbols'
      }, {
        code: '1F524',
        desc: 'Input Symbol for Latin Letters'
      }, {
        code: '1F170',
        desc: 'Negative Squared Latin Capital Letter a'
      }, {
        code: '1F18E',
        desc: 'Negative Squared Ab'
      }, {
        code: '1F171',
        desc: 'Negative Squared Latin Capital Letter B'
      }, {
        code: '1F191',
        desc: 'Squared Cl'
      }, {
        code: '1F192',
        desc: 'Squared Cool'
      }, {
        code: '1F193',
        desc: 'Squared Free'
      }, {
        code: '2139',
        desc: 'Information Source'
      }, {
        code: '1F194',
        desc: 'Squared Id'
      }, {
        code: '24C2',
        desc: 'Circled Latin Capital Letter M'
      }, {
        code: '1F195',
        desc: 'Squared New'
      }, {
        code: '1F196',
        desc: 'Squared Ng'
      }, {
        code: '1F17E',
        desc: 'Negative Squared Latin Capital Letter O'
      }, {
        code: '1F197',
        desc: 'Squared Ok'
      }, {
        code: '1F17F',
        desc: 'Negative Squared Latin Capital Letter P'
      }, {
        code: '1F198',
        desc: 'Squared Sos'
      }, {
        code: '1F199',
        desc: 'Squared Up with Exclamation Mark'
      }, {
        code: '1F19A',
        desc: 'Squared Vs'
      }, {
        code: '1F201',
        desc: 'Squared Katakana Koko'
      }, {
        code: '1F202',
        desc: 'Squared Katakana Sa'
      }, {
        code: '1F237',
        desc: 'Squared Cjk Unified Ideograph-6708'
      }, {
        code: '1F236',
        desc: 'Squared Cjk Unified Ideograph-6709'
      }, {
        code: '1F22F',
        desc: 'Squared Cjk Unified Ideograph-6307'
      }, {
        code: '1F250',
        desc: 'Circled Ideograph Advantage'
      }, {
        code: '1F239',
        desc: 'Squared Cjk Unified Ideograph-5272'
      }, {
        code: '1F21A',
        desc: 'Squared Cjk Unified Ideograph-7121'
      }, {
        code: '1F232',
        desc: 'Squared Cjk Unified Ideograph-7981'
      }, {
        code: '1F251',
        desc: 'Circled Ideograph Accept'
      }, {
        code: '1F238',
        desc: 'Squared Cjk Unified Ideograph-7533'
      }, {
        code: '1F234',
        desc: 'Squared Cjk Unified Ideograph-5408'
      }, {
        code: '1F233',
        desc: 'Squared Cjk Unified Ideograph-7a7a'
      }, {
        code: '3297',
        desc: 'Circled Ideograph Congratulation'
      }, {
        code: '3299',
        desc: 'Circled Ideograph Secret'
      }, {
        code: '1F23A',
        desc: 'Squared Cjk Unified Ideograph-55b6'
      }, {
        code: '1F235',
        desc: 'Squared Cjk Unified Ideograph-6e80'
      }, {
        code: '25AA',
        desc: 'Black Small Square'
      }, {
        code: '25AB',
        desc: 'White Small Square'
      }, {
        code: '25FB',
        desc: 'White Medium Square'
      }, {
        code: '25FC',
        desc: 'Black Medium Square'
      }, {
        code: '25FD',
        desc: 'White Medium Small Square'
      }, {
        code: '25FE',
        desc: 'Black Medium Small Square'
      }, {
        code: '2B1B',
        desc: 'Black Large Square'
      }, {
        code: '2B1C',
        desc: 'White Large Square'
      }, {
        code: '1F536',
        desc: 'Large Orange Diamond'
      }, {
        code: '1F537',
        desc: 'Large Blue Diamond'
      }, {
        code: '1F538',
        desc: 'Small Orange Diamond'
      }, {
        code: '1F539',
        desc: 'Small Blue Diamond'
      }, {
        code: '1F53A',
        desc: 'Up-Pointing Red Triangle'
      }, {
        code: '1F53B',
        desc: 'Down-Pointing Red Triangle'
      }, {
        code: '1F4A0',
        desc: 'Diamond Shape with a Dot Inside'
      }, {
        code: '1F518',
        desc: 'Radio Button'
      }, {
        code: '1F532',
        desc: 'Black Square Button'
      }, {
        code: '1F533',
        desc: 'White Square Button'
      }, {
        code: '26AA',
        desc: 'Medium White Circle'
      }, {
        code: '26AB',
        desc: 'Medium Black Circle'
      }, {
        code: '1F534',
        desc: 'Large Red Circle'
      }, {
        code: '1F535',
        desc: 'Large Blue Circle'
      }]
    }, {
      'id': 'flags',
      'name': 'Flags',
      'code': '1F3C1',
      'emoticons': [{
        code: '1f3c1',
        desc: 'Chequered Flag'
      }, {
        code: '1f1e8-1f1f3',
        desc: 'China Flag'
      }, {
        code: '1f38c',
        desc: 'Crossed Flags'
      }, {
        code: '1f1e9-1f1ea',
        desc: 'Germany Flag'
      }, {
        code: '1f1ea-1f1f8',
        desc: 'Spain Flag'
      }, {
        code: '1f1e6-1f1e8',
        desc: 'Ascension Island Flag'
      }, {
        code: '1f1e6-1f1e9',
        desc: 'Andorra Flag'
      }, {
        code: '1f1e6-1f1ea',
        desc: 'United Arab Emirates Flag'
      }, {
        code: '1f1e6-1f1eb',
        desc: 'Afghanistan Flag'
      }, {
        code: '1f1e6-1f1ec',
        desc: 'Antigua & Barbuda Flag'
      }, {
        code: '1f1e6-1f1ee',
        desc: 'Anguilla Flag'
      }, {
        code: '1f1e6-1f1f1',
        desc: 'Albania Flag'
      }, {
        code: '1f1e6-1f1f2',
        desc: 'Armenia Flag'
      }, {
        code: '1f1e6-1f1f4',
        desc: 'Angola Flag'
      }, {
        code: '1f1e6-1f1f6',
        desc: 'Antarctica Flag'
      }, {
        code: '1f1e6-1f1f7',
        desc: 'Argentina Flag'
      }, {
        code: '1f1e6-1f1f8',
        desc: 'American Samoa Flag'
      }, {
        code: '1f1e6-1f1f9',
        desc: 'Austria Flag'
      }, {
        code: '1f1e6-1f1fa',
        desc: 'Australia Flag'
      }, {
        code: '1f1e6-1f1fc',
        desc: 'Aruba Flag'
      }, {
        code: '1f1e6-1f1fd',
        desc: 'Åland Islands Flag'
      }, {
        code: '1f1e6-1f1ff',
        desc: 'Azerbaijan Flag'
      }, {
        code: '1f1e7-1f1e7',
        desc: 'Barbados Flag'
      }, {
        code: '1f1e7-1f1e9',
        desc: 'Bangladesh Flag'
      }, {
        code: '1f1e7-1f1ea',
        desc: 'Belgium Flag'
      }, {
        code: '1f1e7-1f1eb',
        desc: 'Burkina Faso Flag'
      }, {
        code: '1f1e7-1f1ec',
        desc: 'Bulgaria Flag'
      }, {
        code: '1f1e7-1f1ed',
        desc: 'Bahrain Flag'
      }, {
        code: '1f1e7-1f1ee',
        desc: 'Burundi Flag'
      }, {
        code: '1f1e7-1f1ef',
        desc: 'Benin Flag'
      }, {
        code: '1f1e7-1f1f1',
        desc: 'St. Barthélemy Flag'
      }, {
        code: '1f1e7-1f1f2',
        desc: 'Bermuda Flag'
      }, {
        code: '1f1e7-1f1f4',
        desc: 'Bolivia Flag'
      }, {
        code: '1f1e7-1f1f6',
        desc: 'Caribbean Netherlands Flag'
      }, {
        code: '1f1e7-1f1f7',
        desc: 'Brazil Flag'
      }, {
        code: '1f1e7-1f1f8',
        desc: 'Bahamas Flag'
      }, {
        code: '1f1e7-1f1f9',
        desc: 'Bhutan Flag'
      }, {
        code: '1f1e7-1f1fb',
        desc: 'Bouvet Island Flag'
      }, {
        code: '1f1e7-1f1fc',
        desc: 'Botswana Flag'
      }, {
        code: '1f1e7-1f1fe',
        desc: 'Belarus Flag'
      }, {
        code: '1f1e7-1f1ff',
        desc: 'Belize Flag'
      }, {
        code: '1f1e8-1f1e6',
        desc: 'Canada Flag'
      }, {
        code: '1f1e8-1f1e8',
        desc: 'Cocos (keeling) Islands Flag'
      }, {
        code: '1f1e8-1f1e9',
        desc: 'Congo - Kinshasa Flag'
      }, {
        code: '1f1e8-1f1eb',
        desc: 'Central African Republic Flag'
      }, {
        code: '1f1e8-1f1ec',
        desc: 'Congo - Brazzaville Flag'
      }, {
        code: '1f1e8-1f1ed',
        desc: 'Switzerland Flag'
      }, {
        code: '1f1e8-1f1ee',
        desc: 'Côte D’ivoire Flag'
      }, {
        code: '1f1e8-1f1f0',
        desc: 'Cook Islands Flag'
      }, {
        code: '1f1e8-1f1f1',
        desc: 'Chile Flag'
      }, {
        code: '1f1e8-1f1f2',
        desc: 'Cameroon Flag'
      }, {
        code: '1f1e8-1f1f4',
        desc: 'Colombia Flag'
      }, {
        code: '1f1e8-1f1f7',
        desc: 'Costa Rica Flag'
      }, {
        code: '1f1e8-1f1fa',
        desc: 'Cuba Flag'
      }, {
        code: '1f1e8-1f1fb',
        desc: 'Cape Verde Flag'
      }, {
        code: '1f1e8-1f1fc',
        desc: 'Curaçao Flag'
      }, {
        code: '1f1e8-1f1fd',
        desc: 'Christmas Island Flag'
      }, {
        code: '1f1e8-1f1fe',
        desc: 'Cyprus Flag'
      }, {
        code: '1f1e8-1f1ff',
        desc: 'Czechia Flag"'
      }, {
        code: '1f1e9-1f1ec',
        desc: 'Diego Garcia Flag'
      }, {
        code: '1f1e9-1f1ef',
        desc: 'Djibouti Flag'
      }, {
        code: '1f1e9-1f1f0',
        desc: 'Denmark Flag'
      }, {
        code: '1f1e9-1f1f2',
        desc: 'Dominica Flag'
      }, {
        code: '1f1e9-1f1f4',
        desc: 'Dominican Republic Flag'
      }, {
        code: '1f1e9-1f1ff',
        desc: 'Algeria Flag'
      }, {
        code: '1f1ea-1f1e6',
        desc: 'Ceuta & Melilla Flag'
      }, {
        code: '1f1ea-1f1e8',
        desc: 'Ecuador Flag'
      }, {
        code: '1f1ea-1f1ea',
        desc: 'Estonia Flag'
      }, {
        code: '1f1ea-1f1ec',
        desc: 'Egypt Flag'
      }, {
        code: '1f1ea-1f1ed',
        desc: 'Western Sahara Flag'
      }, {
        code: '1f1ea-1f1f7',
        desc: 'Eritrea Flag'
      }, {
        code: '1f1ea-1f1f9',
        desc: 'Ethiopia Flag'
      }, {
        code: '1f1ea-1f1fa',
        desc: 'European Union Flag'
      }, {
        code: '1f1eb-1f1ee',
        desc: 'Finland Flag'
      }, {
        code: '1f1eb-1f1ef',
        desc: 'Fiji Flag'
      }, {
        code: '1f1eb-1f1f0',
        desc: 'Falkland Islands Flag'
      }, {
        code: '1f1eb-1f1f2',
        desc: 'Micronesia Flag'
      }, {
        code: '1f1eb-1f1f4',
        desc: 'Faroe Islands Flag'
      }, {
        code: '1f1ec-1f1e6',
        desc: 'Gabon Flag'
      }, {
        code: '1f1ec-1f1e9',
        desc: 'Grenada Flag'
      }, {
        code: '1f1ec-1f1ea',
        desc: 'Georgia Flag'
      }, {
        code: '1f1ec-1f1eb',
        desc: 'French Guiana Flag'
      }, {
        code: '1f1ec-1f1ec',
        desc: 'Guernsey Flag'
      }, {
        code: '1f1ec-1f1ed',
        desc: 'Ghana Flag'
      }, {
        code: '1f1ec-1f1ee',
        desc: 'Gibraltar Flag'
      }, {
        code: '1f1ec-1f1f1',
        desc: 'Greenland Flag'
      }, {
        code: '1f1ec-1f1f2',
        desc: 'Gambia Flag'
      }, {
        code: '1f1ec-1f1f3',
        desc: 'Guinea Flag'
      }, {
        code: '1f1ec-1f1f5',
        desc: 'Guadeloupe Flag'
      }, {
        code: '1f1ec-1f1f6',
        desc: 'Equatorial Guinea Flag'
      }, {
        code: '1f1ec-1f1f7',
        desc: 'Greece Flag'
      }, {
        code: '1f1ec-1f1f8',
        desc: 'South Georgia & South Sandwich Islands Flag'
      }, {
        code: '1f1ec-1f1f9',
        desc: 'Guatemala Flag'
      }, {
        code: '1f1ec-1f1fa',
        desc: 'Guam Flag'
      }, {
        code: '1f1ec-1f1fc',
        desc: 'Guinea-Bissau Flag'
      }, {
        code: '1f1ec-1f1fe',
        desc: 'Guyana Flag'
      }, {
        code: '1f1ed-1f1f0',
        desc: 'Hong Kong Sar China Flag'
      }, {
        code: '1f1ed-1f1f2',
        desc: 'Heard & Mcdonald Islands Flag'
      }, {
        code: '1f1ed-1f1f3',
        desc: 'Honduras Flag'
      }, {
        code: '1f1ed-1f1f7',
        desc: 'Croatia Flag'
      }, {
        code: '1f1ed-1f1f9',
        desc: 'Haiti Flag'
      }, {
        code: '1f1ed-1f1fa',
        desc: 'Hungary Flag'
      }, {
        code: '1f1ee-1f1e8',
        desc: 'Canary Islands Flag'
      }, {
        code: '1f1ee-1f1e9',
        desc: 'Indonesia Flag'
      }, {
        code: '1f1ee-1f1ea',
        desc: 'Ireland Flag'
      }, {
        code: '1f1ee-1f1f1',
        desc: 'Israel Flag'
      }, {
        code: '1f1ee-1f1f2',
        desc: 'Isle of Man Flag'
      }, {
        code: '1f1ee-1f1f3',
        desc: 'India Flag'
      }, {
        code: '1f1ee-1f1f4',
        desc: 'British Indian Ocean Territory Flag'
      }, {
        code: '1f1ee-1f1f6',
        desc: 'Iraq Flag'
      }, {
        code: '1f1ee-1f1f7',
        desc: 'Iran Flag'
      }, {
        code: '1f1ee-1f1f8',
        desc: 'Iceland Flag'
      }, {
        code: '1f1ef-1f1ea',
        desc: 'Jersey Flag'
      }, {
        code: '1f1ef-1f1f2',
        desc: 'Jamaica Flag'
      }, {
        code: '1f1ef-1f1f4',
        desc: 'Jordan Flag'
      }, {
        code: '1f1f0-1f1ea',
        desc: 'Kenya Flag'
      }, {
        code: '1f1f0-1f1ec',
        desc: 'Kyrgyzstan Flag'
      }, {
        code: '1f1f0-1f1ed',
        desc: 'Cambodia Flag'
      }, {
        code: '1f1f0-1f1ee',
        desc: 'Kiribati Flag'
      }, {
        code: '1f1f0-1f1f2',
        desc: 'Comoros Flag'
      }, {
        code: '1f1f0-1f1f3',
        desc: 'St. Kitts & Nevis Flag'
      }, {
        code: '1f1f0-1f1f5',
        desc: 'North Korea Flag'
      }, {
        code: '1f1f0-1f1fc',
        desc: 'Kuwait Flag'
      }, {
        code: '1f1f0-1f1fe',
        desc: 'Cayman Islands Flag'
      }, {
        code: '1f1f0-1f1ff',
        desc: 'Kazakhstan Flag'
      }, {
        code: '1f1f1-1f1e6',
        desc: 'Laos Flag'
      }, {
        code: '1f1f1-1f1e7',
        desc: 'Lebanon Flag'
      }, {
        code: '1f1f1-1f1e8',
        desc: 'St. Lucia Flag'
      }, {
        code: '1f1f1-1f1ee',
        desc: 'Liechtenstein Flag'
      }, {
        code: '1f1f1-1f1f0',
        desc: 'Sri Lanka Flag'
      }, {
        code: '1f1f1-1f1f7',
        desc: 'Liberia Flag'
      }, {
        code: '1f1f1-1f1f8',
        desc: 'Lesotho Flag'
      }, {
        code: '1f1f1-1f1f9',
        desc: 'Lithuania Flag'
      }, {
        code: '1f1f1-1f1fa',
        desc: 'Luxembourg Flag'
      }, {
        code: '1f1f1-1f1fb',
        desc: 'Latvia Flag'
      }, {
        code: '1f1f1-1f1fe',
        desc: 'Libya Flag'
      }, {
        code: '1f1f2-1f1e6',
        desc: 'Morocco Flag'
      }, {
        code: '1f1f2-1f1e8',
        desc: 'Monaco Flag'
      }, {
        code: '1f1f2-1f1e9',
        desc: 'Moldova Flag'
      }, {
        code: '1f1f2-1f1ea',
        desc: 'Montenegro Flag'
      }, {
        code: '1f1f2-1f1eb',
        desc: 'St. Martin Flag'
      }, {
        code: '1f1f2-1f1ec',
        desc: 'Madagascar Flag'
      }, {
        code: '1f1f2-1f1ed',
        desc: 'Marshall Islands Flag'
      }, {
        code: '1f1f2-1f1f0',
        desc: 'Macedonia Flag'
      }, {
        code: '1f1f2-1f1f1',
        desc: 'Mali Flag'
      }, {
        code: '1f1f2-1f1f2',
        desc: 'Myanmar (burma) Flag'
      }, {
        code: '1f1f2-1f1f3',
        desc: 'Mongolia Flag'
      }, {
        code: '1f1f2-1f1f4',
        desc: 'Macau Sar China Flag'
      }, {
        code: '1f1f2-1f1f5',
        desc: 'Northern Mariana Islands Flag'
      }, {
        code: '1f1f2-1f1f6',
        desc: 'Martinique Flag'
      }, {
        code: '1f1f2-1f1f7',
        desc: 'Mauritania Flag'
      }, {
        code: '1f1f2-1f1f8',
        desc: 'Montserrat Flag'
      }, {
        code: '1f1f2-1f1f9',
        desc: 'Malta Flag'
      }, {
        code: '1f1f2-1f1fa',
        desc: 'Mauritius Flag'
      }, {
        code: '1f1f2-1f1fb',
        desc: 'Maldives Flag'
      }, {
        code: '1f1f2-1f1fc',
        desc: 'Malawi Flag'
      }, {
        code: '1f1f2-1f1fd',
        desc: 'Mexico Flag'
      }, {
        code: '1f1f2-1f1fe',
        desc: 'Malaysia Flag'
      }, {
        code: '1f1f2-1f1ff',
        desc: 'Mozambique Flag'
      }, {
        code: '1f1f3-1f1e6',
        desc: 'Namibia Flag'
      }, {
        code: '1f1f3-1f1e8',
        desc: 'New Caledonia Flag'
      }, {
        code: '1f1f3-1f1ea',
        desc: 'Niger Flag'
      }, {
        code: '1f1f3-1f1eb',
        desc: 'Norfolk Island Flag'
      }, {
        code: '1f1f3-1f1ec',
        desc: 'Nigeria Flag'
      }, {
        code: '1f1f3-1f1ee',
        desc: 'Nicaragua Flag'
      }, {
        code: '1f1f3-1f1f1',
        desc: 'Netherlands Flag'
      }, {
        code: '1f1f3-1f1f4',
        desc: 'Norway Flag'
      }, {
        code: '1f1f3-1f1f5',
        desc: 'Nepal Flag'
      }, {
        code: '1f1f3-1f1f7',
        desc: 'Nauru Flag'
      }, {
        code: '1f1f3-1f1fa',
        desc: 'Niue Flag'
      }, {
        code: '1f1f3-1f1ff',
        desc: 'New Zealand Flag'
      }, {
        code: '1f1f4-1f1f2',
        desc: 'Oman Flag'
      }, {
        code: '1f1f8-1f1ff',
        desc: 'Swaziland Flag'
      }, {
        code: '1f1f5-1f1e6',
        desc: 'Panama Flag'
      }, {
        code: '1f1f5-1f1ea',
        desc: 'Peru Flag'
      }, {
        code: '1f1f5-1f1eb',
        desc: 'French Polynesia Flag'
      }, {
        code: '1f1f5-1f1ec',
        desc: 'Papua New Guinea Flag'
      }, {
        code: '1f1f5-1f1ed',
        desc: 'Philippines Flag'
      }, {
        code: '1f1f5-1f1f0',
        desc: 'Pakistan Flag'
      }, {
        code: '1f1f5-1f1f1',
        desc: 'Poland Flag'
      }, {
        code: '1f1f5-1f1f2',
        desc: 'St. Pierre & Miquelon  Flag'
      }, {
        code: '1f1f5-1f1f3',
        desc: 'Pitcairn Islands Flag'
      }, {
        code: '1f1f5-1f1f7',
        desc: 'Puerto Rico Flag'
      }, {
        code: '1f1f5-1f1f8',
        desc: 'Palestinian Territories Flag'
      }, {
        code: '1f1f5-1f1f9',
        desc: 'Portugal Flag'
      }, {
        code: '1f1f5-1f1fc',
        desc: 'Palau Flag'
      }, {
        code: '1f1f5-1f1fe',
        desc: 'Paraguay Flag'
      }, {
        code: '1f1f6-1f1e6',
        desc: 'Qatar Flag'
      }, {
        code: '1f1f7-1f1ea',
        desc: 'Réunion Flag'
      }, {
        code: '1f1f7-1f1f4',
        desc: 'Romania Flag'
      }, {
        code: '1f1f7-1f1f8',
        desc: 'Serbia Flag'
      }, {
        code: '1f1f7-1f1fc',
        desc: 'Rwanda Flag'
      }, {
        code: '1f1f8-1f1e6',
        desc: 'Saudi Arabia Flag'
      }, {
        code: '1f1f8-1f1e7',
        desc: 'Solomon Islands Flag'
      }, {
        code: '1f1f8-1f1e8',
        desc: 'Seychelles Flag'
      }, {
        code: '1f1f8-1f1e9',
        desc: 'Sudan Flag'
      }, {
        code: '1f1f8-1f1ea',
        desc: 'Sweden Flag'
      }, {
        code: '1f1f8-1f1ec',
        desc: 'Singapore Flag'
      }, {
        code: '1f1f8-1f1ee',
        desc: 'Slovenia Flag'
      }, {
        code: '1f1f8-1f1ed',
        desc: 'St. Helena  Flag'
      }, {
        code: '1f1f8-1f1ef',
        desc: 'Svalbard & Jan Mayen  Flag'
      }, {
        code: '1f1f8-1f1f1',
        desc: 'Sierra Leone Flag'
      }, {
        code: '1f1f8-1f1f2',
        desc: 'San Marino Flag'
      }, {
        code: '1f1f8-1f1f3',
        desc: 'Senegal Flag'
      }, {
        code: '1f1f8-1f1f4',
        desc: 'Somalia Flag'
      }, {
        code: '1f1f8-1f1f7',
        desc: 'Suriname Flag'
      }, {
        code: '1f1f8-1f1f8',
        desc: 'South Sudan  Flag'
      }, {
        code: '1f1f8-1f1f9',
        desc: 'São Tomé & Príncipe Flag'
      }, {
        code: '1f1f8-1f1fb',
        desc: 'El Salvador Flag'
      }, {
        code: '1f1f8-1f1fd',
        desc: 'Sint Maarten Flag'
      }, {
        code: '1f1f8-1f1fe',
        desc: 'Syria Flag'
      }, {
        code: '1f1f9-1f1e6',
        desc: 'Tristan Da Cunha Flag'
      }, {
        code: '1f1f9-1f1e8',
        desc: 'Turks & Caicos Islands  Flag'
      }, {
        code: '1f1f9-1f1eb',
        desc: 'French Southern Territories Flag'
      }, {
        code: '1f1f9-1f1ec',
        desc: 'Togo Flag'
      }, {
        code: '1f1f9-1f1ed',
        desc: 'Thailand Flag'
      }, {
        code: '1f1f9-1f1ef',
        desc: 'Tajikistan Flag'
      }, {
        code: '1f1f9-1f1f0',
        desc: 'Tokelau Flag'
      }, {
        code: '1f1f9-1f1f1',
        desc: 'Timor-Leste Flag'
      }, {
        code: '1f1f9-1f1f2',
        desc: 'Turkmenistan Flag'
      }, {
        code: '1f1f9-1f1f3',
        desc: 'Tunisia Flag'
      }, {
        code: '1f1f9-1f1f4',
        desc: 'Tonga Flag'
      }, {
        code: '1f1f9-1f1f7',
        desc: 'Turkey Flag'
      }, {
        code: '1f1f9-1f1f9',
        desc: 'Trinidad & Tobago Flag'
      }, {
        code: '1f1f9-1f1fb',
        desc: 'Tuvalu Flag'
      }, {
        code: '1f1f9-1f1fc',
        desc: 'Taiwan Flag'
      }, {
        code: '1f1f9-1f1ff',
        desc: 'Tanzania Flag'
      }, {
        code: '1f1fa-1f1e6',
        desc: 'Ukraine City  Flag'
      }, {
        code: '1f1fa-1f1ec',
        desc: 'Uganda Flag'
      }, {
        code: '1f1fa-1f1f2',
        desc: 'U.s. Outlying Islands  Flag'
      }, {
        code: '1f1fa-1f1fe',
        desc: 'Uruguay  Flag'
      }, {
        code: '1f1fa-1f1ff',
        desc: 'Uzbekistan Flag'
      }, {
        code: '1f1fb-1f1e6',
        desc: 'Vatican City  Flag'
      }, {
        code: '1f1fb-1f1e8',
        desc: 'St. Vincent & Grenadines Flag'
      }, {
        code: '1f1fb-1f1ea',
        desc: 'Venezuela Flag'
      }, {
        code: '1f1fb-1f1ec',
        desc: 'British Virgin Islands Flag'
      }, {
        code: '1f1fb-1f1ee',
        desc: 'U.s. Virgin Islands Flag'
      }, {
        code: '1f1fb-1f1f3',
        desc: 'Vietnam Flag'
      }, {
        code: '1f1fc-1f1f8',
        desc: 'Samoa Flag'
      }, {
        code: '1f1fb-1f1fa',
        desc: 'Vanuatu Flag'
      }, {
        code: '1f1fc-1f1eb',
        desc: '"Wallis & Futuna Flag'
      }, {
        code: '1f1fd-1f1f0',
        desc: 'Kosovo Flag'
      }, {
        code: '1f1fe-1f1ea',
        desc: 'Yemen Flag'
      }, {
        code: '1f1fe-1f1f9',
        desc: 'Mayotte Flag'
      }, {
        code: '1f1ff-1f1e6',
        desc: 'South Africa Flag'
      }, {
        code: '1f1ff-1f1f2',
        desc: 'Zambia Flag'
      }, {
        code: '1f1ff-1f1fc',
        desc: 'Zimbabwe Flag'
      }, {
        code: '1f1eb-1f1f7',
        desc: 'France Flag'
      }, {
        code: '1f1ec-1f1e7',
        desc: 'United Kingdom  Flag'
      }, {
        code: '1f1ee-1f1f9',
        desc: 'Italy Flag'
      }, {
        code: '1f1ef-1f1f5',
        desc: 'Japan Flag'
      }, {
        code: '1f1f0-1f1f7',
        desc: 'South Korea Flag'
      }, {
        code: '1f1f7-1f1fa',
        desc: 'Russia Flag'
      }, {
        code: '1F6A9',
        desc: 'Triangular Flag on Post'
      }, {
        code: '1f1fa-1f1f8',
        desc: 'United States Flag'
      }]
    }],
    emoticonsButtons: ['emoticonsBack', '|'],
    emoticonsUseImage: true
  });

  FE.PLUGINS.emoticons = function (editor) {
    var $ = editor.$; // Load the categories for the emoticons

    var categories = editor.opts.emoticonsSet;
    var selectedCategory = categories && categories[0];
    var emoticonsButtons = '';
    /**
     *  Show emoticons popup
     */

    function _showEmoticonsPopup() {
      var $popup = editor.popups.get('emoticons');
      if (!$popup) $popup = _initEmoticonsPopup();

      if (!$popup.hasClass('fr-active')) {
        editor.popups.refresh('emoticons');
        editor.popups.setContainer('emoticons', editor.$tb);
        var $btn = editor.$tb.find('.fr-command[data-cmd="emoticons"]'); // Get popup left and top position

        var _editor$button$getPos = editor.button.getPosition($btn),
            left = _editor$button$getPos.left,
            top = _editor$button$getPos.top; // Show popup


        editor.popups.show('emoticons', left, top, $btn.outerHeight());
      }
    }
    /** 
     * Initialize the emoticons popup 
     */


    function _initEmoticonsPopup() {
      if (editor.opts.toolbarInline) {
        // If toolbar is inline then load emoticons buttons
        if (editor.opts.emoticonsButtons.length > 0) {
          emoticonsButtons = "<div class=\"fr-buttons fr-emoticons-buttons fr-tabs\">".concat(editor.button.buildList(editor.opts.emoticonsButtons), "</div>");
        }
      } // Template for popup


      var template = {
        buttons: emoticonsButtons,
        custom_layer: _emoticonsHTML()
      }; // Create popup

      var $popup = editor.popups.create('emoticons', template); // Add accessibility to popup

      _addAccessibility($popup);

      return $popup;
    }

    function _inEmoticon() {
      if (!editor.selection.isCollapsed()) return false;
      var s_el = editor.selection.element();
      var e_el = editor.selection.endElement();
      if (s_el && editor.node.hasClass(s_el, 'fr-emoticon')) return s_el;
      if (e_el && editor.node.hasClass(e_el, 'fr-emoticon')) return e_el;
      var range = editor.selection.ranges(0);
      var container = range.startContainer;

      if (container.nodeType == Node.ELEMENT_NODE) {
        if (container.childNodes.length > 0 && range.startOffset > 0) {
          var node = container.childNodes[range.startOffset - 1];

          if (editor.node.hasClass(node, 'fr-emoticon')) {
            return node;
          }
        }
      }

      return false;
    }
    /** 
     * Add emoticon 
     */


    function addEmoticon(emoticon, img) {
      var el = _inEmoticon();

      var range = editor.selection.ranges(0);

      if (!el) {
        editor.html.insert("<span class=\"fr-emoticon fr-deletable".concat(img ? ' fr-emoticon-img' : '', "\"").concat(img ? " style=\"background: url(".concat(img, ");\"") : '', ">").concat(img ? '&nbsp;' : emoticon, "</span>&nbsp;"), true);
      } else {
        if (range.startOffset === 0 && editor.selection.element() === el) {
          $(el).before(FE.MARKERS + FE.INVISIBLE_SPACE);
        } else if (range.startOffset > 0 && editor.selection.element() === el && range.commonAncestorContainer.parentNode.classList.contains('fr-emoticon')) {
          // Inside emoticon move out side of it.
          $(el).after(FE.INVISIBLE_SPACE + FE.MARKERS);
        }

        editor.selection.restore();
        editor.html.insert("<span class=\"fr-emoticon fr-deletable".concat(img ? ' fr-emoticon-img' : '', "\"").concat(img ? " style=\"background: url(".concat(img, ");\"") : '', ">").concat(img ? '&nbsp;' : emoticon, "</span>&nbsp;").concat(FE.MARKERS), true);
      }
    }
    /** 
     * Load emoticons
     */


    function _load() {
      var setDeletable = function setDeletable() {
        var emtcs = editor.el.querySelectorAll('.fr-emoticon:not(.fr-deletable)');

        for (var i = 0; i < emtcs.length; i++) {
          emtcs[i].className += ' fr-deletable';
        }
      };

      setDeletable();
      editor.events.on('html.set', setDeletable);
      editor.events.on('keydown', function (e) {
        if (editor.keys.isCharacter(e.which) && editor.selection.inEditor()) {
          var range = editor.selection.ranges(0);

          var el = _inEmoticon();

          if (editor.node.hasClass(el, 'fr-emoticon-img')) {
            if (el) {
              if (range.startOffset === 0 && editor.selection.element() === el) {
                $(el).before(FE.MARKERS + FE.INVISIBLE_SPACE);
              } else {
                $(el).after(FE.INVISIBLE_SPACE + FE.MARKERS);
              }

              editor.selection.restore();
            }
          }
        }
      });
      editor.events.on('keyup', function (e) {
        var emtcs = editor.el.querySelectorAll('.fr-emoticon');

        for (var i = 0; i < emtcs.length; i++) {
          if (typeof emtcs[i].textContent != 'undefined' && emtcs[i].textContent.replace(/\u200B/gi, '').length === 0) {
            $(emtcs[i]).remove();
          }
        }

        if (!(e.which >= FE.KEYCODE.ARROW_LEFT && e.which <= FE.KEYCODE.ARROW_DOWN)) {
          var el = _inEmoticon();

          if (editor.node.hasClass(el, 'fr-emoticon-img')) {
            $(el).append(FE.MARKERS);
            editor.selection.restore();
          }
        }
      });
    }
    /**
      * Returns the HTML for the emoticons popup.
      */


    function _emoticonsHTML() {
      var emoticons_html = '';
      emoticons_html = "".concat(_renderCategoryHtml(categories, selectedCategory), "\n                      ").concat(_renderEmoticonHtml(selectedCategory), "\n                      ").concat(_renderUseImage());
      return emoticons_html;
    }
    /**
      * Replaces the pop-up's HTML with updated HTML - should be called
      * when the selected category changes.
      */


    function _refreshPopup() {
      editor.popups.get('emoticons').html(emoticonsButtons + _emoticonsHTML());
    }
    /**
      * Set the currently selected emoticon category and refresh the popup
      */


    function setEmoticonCategory(categoryId) {
      selectedCategory = categories.filter(function (category) {
        return category.id === categoryId;
      })[0]; // Refresh the popup to update the emoticons in the popup view

      _refreshPopup();
    }
    /**
      * Returns the HTML of the Category selector
      */


    function _renderCategoryHtml(categories, selectedCategory) {
      var categoryHtml = "<div class=\"fr-buttons fr-tabs fr-tabs-scroll\">\n                        ".concat(_renderCategory(categories, selectedCategory), "\n                        </div>");
      return categoryHtml;
    }
    /** 
     * Returns the HTML for the emoticon selector part of the popup 
     */


    function _renderEmoticonHtml(selectedCategory) {
      var emoticonHtml = "\n        <div class=\"fr-icon-container fr-emoticon-container\">\n            ".concat(_renderEmoticon(selectedCategory), "\n        </div>\n        ");
      return emoticonHtml;
    }
    /** 
     * Register keyboard events. 
     */


    function _addAccessibility($popup) {
      // Register popup event.
      editor.events.on('popup.tab', function (e) {
        var $focused_item = $(e.currentTarget); // Skip if popup is not visible or focus is elsewere.

        if (!editor.popups.isVisible('emoticons') || !$focused_item.is('span, a')) {
          return true;
        }

        var key_code = e.which;
        var status;
        var index;
        var $el; // Tabbing.

        if (FE.KEYCODE.TAB == key_code) {
          // Extremities reached.
          if ($focused_item.is('span.fr-emoticon') && e.shiftKey || $focused_item.is('a') && !e.shiftKey) {
            var $tb = $popup.find('.fr-buttons'); // Focus back the popup's toolbar if exists.

            status = !editor.accessibility.focusToolbar($tb, e.shiftKey ? true : false);
          }

          if (status !== false) {
            // Build elements that should be focused next.
            var $tabElements = $popup.find('span.fr-emoticon:focus').first().concat($popup.findVisible(' div.fr-tabs').first().concat($popup.find('a')));

            if ($focused_item.is('span.fr-emoticon')) {
              $tabElements = $tabElements.not('span.fr-emoticon:not(:focus)');
            } // Get focused item position.


            index = $tabElements.index($focused_item); // Backwards.

            if (e.shiftKey) {
              index = ((index - 1) % $tabElements.length + $tabElements.length) % $tabElements.length; // Javascript negative modulo bug.
              // Forward.
            } else {
              index = (index + 1) % $tabElements.length;
            } // Find next element to focus.


            $el = $tabElements.get(index);
            editor.events.disableBlur();
            $el.focus();
            status = false;
          }
        } // Arrows.
        else if (FE.KEYCODE.ARROW_UP == key_code || FE.KEYCODE.ARROW_DOWN == key_code || FE.KEYCODE.ARROW_LEFT == key_code || FE.KEYCODE.ARROW_RIGHT == key_code) {
            if ($focused_item.is('span.fr-emoticon')) {
              // Get all current emoticons.
              var $emoticons = $focused_item.parent().find('span.fr-emoticon'); // Get focused item position.

              index = $emoticons.index($focused_item); // Get emoticons matrix dimensions.

              var columns = editor.opts.emoticonsStep;
              var lines = Math.floor($emoticons.length / columns); // Get focused item coordinates.

              var column = index % columns;
              var line = Math.floor(index / columns);
              var nextIndex = line * columns + column;
              var dimension = lines * columns; // Calculate next index. Go to the other opposite site of the matrix if there is no next adjacent element.
              // Up/Down: Traverse matrix lines.
              // Left/Right: Traverse the matrix as it is a vector.

              if (FE.KEYCODE.ARROW_UP == key_code) {
                nextIndex = ((nextIndex - columns) % dimension + dimension) % dimension; // Javascript negative modulo bug.
              } else if (FE.KEYCODE.ARROW_DOWN == key_code) {
                nextIndex = (nextIndex + columns) % dimension;
              } else if (FE.KEYCODE.ARROW_LEFT == key_code) {
                nextIndex = ((nextIndex - 1) % dimension + dimension) % dimension; // Javascript negative modulo bug.
              } else if (FE.KEYCODE.ARROW_RIGHT == key_code) {
                nextIndex = (nextIndex + 1) % dimension;
              } // Get the next element based on the new index.


              $el = $($emoticons.get(nextIndex)); // Focus.

              editor.events.disableBlur();
              $el.focus();
              status = false;
            }
          } // ENTER or SPACE.
          else if (FE.KEYCODE.ENTER == key_code) {
              if ($focused_item.is('a')) {
                $focused_item[0].click();
              } else {
                editor.button.exec($focused_item);
              }

              status = false;
            } // Prevent propagation.


        if (status === false) {
          e.preventDefault();
          e.stopPropagation();
        }

        return status;
      }, true);
    }
    /*
       * Go back to the inline editor.
       */


    function back() {
      editor.popups.hide('emoticons');
      editor.toolbar.showInline();
    }
    /** 
     * Render and return the emoticon span html
     */


    function _renderEmoticon(selectedCategory) {
      var emoticon_html = '';
      selectedCategory.emoticons.forEach(function (emoticon) {
        var compiledCode = emoticon.code.split('-').reduce(function (compiledCode, code) {
          return compiledCode ? "".concat(compiledCode, "&zwj;&#x").concat(code.toLowerCase(), ";") : "&#x".concat(code.toLowerCase(), ";");
        }, '');
        var imageMap = {
          image: emoticon.code.toLowerCase(),
          compiledCode: emoticon.uCode ? emoticon.uCode : compiledCode
        };
        var emoticonMap = {
          dataParam1: emoticon.code.toLowerCase(),
          dataParam2: imageMap.compiledCode,
          title: editor.language.translate(emoticon.desc),
          image: editor.opts.emoticonsUseImage ? "<img src=\"https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/".concat(imageMap.image, ".svg\"/>") : "".concat(imageMap.compiledCode),
          desc: editor.language.translate(emoticon.desc)
        };
        emoticon_html += "<span class=\"fr-command fr-emoticon fr-icon\" role=\"button\" \n      data-cmd=\"insertEmoticon\" data-param1=\"".concat(emoticonMap.dataParam1, "\" \n      data-param2=\"").concat(emoticonMap.dataParam2, "\"  title=\"").concat(emoticonMap.title, "\" >\n      ").concat(emoticonMap.image, "<span class=\"fr-sr-only\">").concat(emoticonMap.desc, "&nbsp;&nbsp;&nbsp;</span></span>");
      });
      return emoticon_html;
    }
    /** 
     * Render and return tab button html
     */


    function _renderCategory(categories, selectedCategory) {
      var buttonHtml = '';
      categories.forEach(function (category) {
        var imageMap = {
          image: category.code.toLowerCase()
        };
        var buttonMap = {
          elementClass: category.id === selectedCategory.id ? 'fr-active fr-active-tab' : '',
          emoticonsUnicodeClass: editor.opts.emoticonsUseImage ? '' : 'fr-tabs-unicode',
          title: editor.language.translate(category.name),
          dataCmd: 'setEmoticonCategory',
          dataParam1: category.id,
          image: editor.opts.emoticonsUseImage ? "<img src=\"https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/".concat(imageMap.image, ".svg\"/>") : "&#x".concat(imageMap.image, ";")
        };
        buttonHtml += "<button class=\"fr-command fr-btn ".concat(buttonMap.elementClass, " ").concat(buttonMap.emoticonsUnicodeClass, "\" \n      title=\"").concat(buttonMap.title, "\" data-cmd=\"").concat(buttonMap.dataCmd, "\" data-param1=\"").concat(buttonMap.dataParam1, "\">\n       ").concat(buttonMap.image, " </button>");
      });
      return buttonHtml;
    }
    /**
     * Render image if emoticonsUseImage option is set to 'true'
     */


    function _renderUseImage() {
      if (editor.opts.emoticonsUseImage) {
        return '<p style="font-size: 12px; text-align: center; padding: 0 5px;">Emoji free by <a class="fr-link" tabIndex="-1" href="http://emojione.com/" target="_blank" rel="nofollow noopener noreferrer" role="link" aria-label="Open Emoji One website.">Emoji One</a></p>';
      } else {
        return '';
      }
    }

    return {
      _init: _load,
      insert: addEmoticon,
      setEmoticonCategory: setEmoticonCategory,
      showEmoticonsPopup: _showEmoticonsPopup,
      back: back
    };
  }; // Toolbar emoticons button.


  FE.DefineIcon('emoticons', {
    NAME: 'smile-o',
    FA5NAME: 'smile',
    SVG_KEY: 'smile'
  });
  FE.RegisterCommand('emoticons', {
    title: 'Emoticons',
    undo: false,
    focus: true,
    refreshAfterCallback: false,
    popup: true,
    callback: function callback() {
      if (this.popups.isVisible('emoticons')) {
        if (this.$el.find('.fr-marker').length) {
          this.events.disableBlur();
          this.selection.restore();
        }

        this.popups.hide('emoticons');
      } else {
        this.emoticons.showEmoticonsPopup();
      }
    },
    plugin: 'emoticons'
  }); // Insert emoticon command.

  FE.RegisterCommand('insertEmoticon', {
    callback: function callback(cmd, code, compiledCode) {
      // Insert emoticon
      this.emoticons.insert(compiledCode, this.opts.emoticonsUseImage ? "https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/".concat(code, ".svg") : null); // Hide emoticons popup.

      this.popups.hide('emoticons');
    }
  });
  /* set and show the emoticon category */

  FE.RegisterCommand('setEmoticonCategory', {
    undo: false,
    focus: false,
    callback: function callback(cmd, category) {
      this.emoticons.setEmoticonCategory(category);
    }
  }); // Emoticons back.

  FE.DefineIcon('emoticonsBack', {
    NAME: 'arrow-left',
    SVG_KEY: 'back'
  });
  FE.RegisterCommand('emoticonsBack', {
    title: 'Back',
    undo: false,
    focus: false,
    back: true,
    refreshAfterCallback: false,
    callback: function callback() {
      this.emoticons.back();
    }
  });

})));
//# sourceMappingURL=emoticons.js.map
