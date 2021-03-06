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

  FE.PLUGINS.codeBeautifier = function () {
    /**
       * HTML BEAUTIFIER
       *
       * LICENSE: The MIT License (MIT)
       *
       * Written by Nochum Sossonko, (nsossonko@hotmail.com)
       *
       * Based on code initially developed by: Einar Lielmanis, <einar@jsbeautifier.org>
       * http://jsbeautifier.org/
       *
       */

    /* jshint ignore:start */

    /* jscs:disable */
    var acorn = {};

    (function (exports) {

      var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
      var nonASCIIidentifierChars = "\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u0620-\u0649\u0672-\u06D3\u06E7-\u06E8\u06FB-\u06FC\u0730-\u074A\u0800-\u0814\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0840-\u0857\u08E4-\u08FE\u0900-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962-\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09D7\u09DF-\u09E0\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5F-\u0B60\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C01-\u0C03\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62-\u0C63\u0C66-\u0C6F\u0C82\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2-\u0CE3\u0CE6-\u0CEF\u0D02\u0D03\u0D46-\u0D48\u0D57\u0D62-\u0D63\u0D66-\u0D6F\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E34-\u0E3A\u0E40-\u0E45\u0E50-\u0E59\u0EB4-\u0EB9\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F41-\u0F47\u0F71-\u0F84\u0F86-\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1029\u1040-\u1049\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u170E-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17B2\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1920-\u192B\u1930-\u193B\u1951-\u196D\u19B0-\u19C0\u19C8-\u19C9\u19D0-\u19D9\u1A00-\u1A15\u1A20-\u1A53\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1B46-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C00-\u1C22\u1C40-\u1C49\u1C5B-\u1C7D\u1CD0-\u1CD2\u1D00-\u1DBE\u1E01-\u1F15\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2D81-\u2D96\u2DE0-\u2DFF\u3021-\u3028\u3099\u309A\uA640-\uA66D\uA674-\uA67D\uA69F\uA6F0-\uA6F1\uA7F8-\uA800\uA806\uA80B\uA823-\uA827\uA880-\uA881\uA8B4-\uA8C4\uA8D0-\uA8D9\uA8F3-\uA8F7\uA900-\uA909\uA926-\uA92D\uA930-\uA945\uA980-\uA983\uA9B3-\uA9C0\uAA00-\uAA27\uAA40-\uAA41\uAA4C-\uAA4D\uAA50-\uAA59\uAA7B\uAAE0-\uAAE9\uAAF2-\uAAF3\uABC0-\uABE1\uABEC\uABED\uABF0-\uABF9\uFB20-\uFB28\uFE00-\uFE0F\uFE20-\uFE26\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";
      var nonASCIIidentifierStart = new RegExp("[".concat(nonASCIIidentifierStartChars, "]"));
      var nonASCIIidentifier = new RegExp("[".concat(nonASCIIidentifierStartChars, " ").concat(nonASCIIidentifierChars, "]")); // Whether a single character denotes a newline.

      exports.newline = /[\n\r\u2028\u2029]/; // Matches a whole line break (where CRLF is considered a single
      // line break). Used to count lines.
      // in javascript, these two differ
      // in python they are the same, different methods are called on them

      exports.lineBreak = new RegExp("\r\n|".concat(exports.newline.source));
      exports.allLineBreaks = new RegExp(exports.lineBreak.source, 'g'); // Test whether a given character code starts an identifier.

      exports.isIdentifierStart = function (code) {
        // permit $ (36) and @ (64). @ is used in ES7 decorators.
        if (code < 65) return code === 36 || code === 64; // 65 through 91 are uppercase letters.

        if (code < 91) return true; // permit _ (95).

        if (code < 97) return code === 95; // 97 through 123 are lowercase letters.

        if (code < 123) return true;
        return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
      }; // Test whether a given character is part of an identifier.


      exports.isIdentifierChar = function (code) {
        if (code < 48) return code === 36;
        if (code < 58) return true;
        if (code < 65) return false;
        if (code < 91) return true;
        if (code < 97) return code === 95;
        if (code < 123) return true;
        return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
      };
    })(acorn);

    function run(html_source, options) {
      function ltrim(s) {
        return s.replace(/^\s+/g, '');
      }

      function rtrim(s) {
        return s.replace(/\s+$/g, '');
      }

      var multi_parser;
      var indent_inner_html;
      var indent_size;
      var indent_character;
      var wrap_line_length;
      var brace_style;
      var unformatted;
      var preserve_newlines;
      var max_preserve_newlines;
      var indent_handlebars;
      var wrap_attributes;
      var wrap_attributes_indent_size;
      var end_with_newline;
      var extra_liners;
      options = options || {}; // backwards compatibility to 1.3.4

      if ((options.wrap_line_length === undefined || parseInt(options.wrap_line_length, 10) === 0) && options.max_char !== undefined && parseInt(options.max_char, 10) !== 0) {
        options.wrap_line_length = options.max_char;
      }

      indent_inner_html = options.indent_inner_html === undefined ? false : options.indent_inner_html;
      indent_size = options.indent_size === undefined ? 4 : parseInt(options.indent_size, 10);
      indent_character = options.indent_char === undefined ? ' ' : options.indent_char;
      brace_style = options.brace_style === undefined ? 'collapse' : options.brace_style;
      wrap_line_length = parseInt(options.wrap_line_length, 10) === 0 ? 32786 : parseInt(options.wrap_line_length || 250, 10);
      unformatted = options.unformatted || ['a', 'span', 'img', 'bdo', 'em', 'strong', 'dfn', 'code', 'samp', 'kbd', 'const', 'cite', 'abbr', 'acronym', 'q', 'sub', 'sup', 'tt', 'i', 'b', 'big', 'small', 'u', 's', 'strike', 'font', 'ins', 'del', 'address', 'pre'];
      preserve_newlines = options.preserve_newlines === undefined ? true : options.preserve_newlines;
      max_preserve_newlines = preserve_newlines ? isNaN(parseInt(options.max_preserve_newlines, 10)) ? 32786 : parseInt(options.max_preserve_newlines, 10) : 0;
      indent_handlebars = options.indent_handlebars === undefined ? false : options.indent_handlebars;
      wrap_attributes = options.wrap_attributes === undefined ? 'auto' : options.wrap_attributes;
      wrap_attributes_indent_size = options.wrap_attributes_indent_size === undefined ? indent_size : parseInt(options.wrap_attributes_indent_size, 10) || indent_size;
      end_with_newline = options.end_with_newline === undefined ? false : options.end_with_newline;
      extra_liners = Array.isArray(options.extra_liners) ? options.extra_liners.concat() : typeof options.extra_liners === 'string' ? options.extra_liners.split(',') : 'head,body,/html'.split(',');

      if (options.indent_with_tabs) {
        indent_character = '\t';
        indent_size = 1;
      }

      function Parser() {
        this.pos = 0; //Parser position

        this.token = '';
        this.current_mode = 'CONTENT'; //reflects the current Parser mode: TAG/CONTENT

        this.tags = {
          //An object to hold tags, their position, and their parent-tags, initiated with default values
          parent: 'parent1',
          parentcount: 1,
          parent1: ''
        };
        this.tag_type = '';
        this.token_text = this.last_token = this.last_text = this.token_type = '';
        this.newlines = 0;
        this.indent_content = indent_inner_html;
        this.Utils = {
          //Uilities made available to the various functions
          whitespace: '\n\r\t '.split(''),
          single_token: 'br,input,link,meta,source,!doctype,basefont,base,area,hr,wbr,param,img,isindex,embed'.split(','),
          //all the single tags for HTML
          extra_liners: extra_liners,
          //for tags that need a line of whitespace before them
          in_array: function in_array(what, arr) {
            for (var i = 0; i < arr.length; i++) {
              if (what === arr[i]) {
                return true;
              }
            }

            return false;
          }
        }; // Return true if the given text is composed entirely of whitespace.

        this.is_whitespace = function (text) {
          for (var n = 0; n < text.length; text++) {
            if (!this.Utils.in_array(text.charAt(n), this.Utils.whitespace)) {
              return false;
            }
          }

          return true;
        };

        this.traverse_whitespace = function () {
          var input_char = '';
          input_char = this.input.charAt(this.pos);

          if (this.Utils.in_array(input_char, this.Utils.whitespace)) {
            this.newlines = 0;

            while (this.Utils.in_array(input_char, this.Utils.whitespace)) {
              if (preserve_newlines && input_char === '\n' && this.newlines <= max_preserve_newlines) {
                this.newlines += 1;
              }

              this.pos++;
              input_char = this.input.charAt(this.pos);
            }

            return true;
          }

          return false;
        }; // Append a space to the given content (string array) or, if we are
        // at the wrap_line_length, append a newline/indentation.


        this.space_or_wrap = function (content) {
          if (this.line_char_count >= this.wrap_line_length) {
            //insert a line when the wrap_line_length is reached
            this.print_newline(false, content);
            this.print_indentation(content);
          } else {
            this.line_char_count++;
            content.push(' ');
          }
        };

        this.get_content = function () {
          //function to capture regular content between tags
          var input_char = '',
              content = [];

          while (this.input.charAt(this.pos) != '<') {
            if (this.pos >= this.input.length) {
              return content.length ? content.join('') : ['', 'TK_EOF'];
            }

            if (this.traverse_whitespace()) {
              this.space_or_wrap(content);
              continue;
            }

            if (indent_handlebars) {
              // Handlebars parsing is complicated.
              // {{#foo}} and {{/foo}} are formatted tags.
              // {{something}} should get treated as content, except:
              // {{else}} specifically behaves like {{#if}} and {{/if}}
              var peek3 = this.input.substr(this.pos, 3);

              if (peek3 === '{{#' || peek3 === '{{/') {
                // These are tags and not content.
                break;
              } else if (peek3 === '{{!') {
                return [this.get_tag(), 'TK_TAG_HANDLEBARS_COMMENT'];
              } else if (this.input.substr(this.pos, 2) === '{{') {
                if (this.get_tag(true) === '{{else}}') {
                  break;
                }
              }
            }

            input_char = this.input.charAt(this.pos);
            this.pos++;
            this.line_char_count++;
            content.push(input_char); //letter at-a-time (or string) inserted to an array
          }

          return content.length ? content.join('') : '';
        };

        this.get_contents_to = function (name) {
          //get the full content of a script or style to pass to js_beautify
          if (this.pos === this.input.length) {
            return ['', 'TK_EOF'];
          }

          var content = '';
          var reg_match = new RegExp("</".concat(name, "\\s*>"), 'igm');
          reg_match.lastIndex = this.pos;
          var reg_array = reg_match.exec(this.input);
          var end_script = reg_array ? reg_array.index : this.input.length; //absolute end of script

          if (this.pos < end_script) {
            //get everything in between the script tags
            content = this.input.substring(this.pos, end_script);
            this.pos = end_script;
          }

          return content;
        };

        this.record_tag = function (tag) {
          //function to record a tag and its parent in this.tags Object
          if (this.tags["".concat(tag, "count")]) {
            //check for the existence of this tag type
            this.tags["".concat(tag, "count")]++;
            this.tags[tag + this.tags["".concat(tag, "count")]] = this.indent_level; //and record the present indent level
          } else {
            //otherwise initialize this tag type
            this.tags["".concat(tag, "count")] = 1;
            this.tags[tag + this.tags["".concat(tag, "count")]] = this.indent_level; //and record the present indent level
          }

          this.tags[tag + this.tags["".concat(tag, "count")] + 'parent'] = this.tags.parent; //set the parent (i.e. in the case of a div this.tags.div1parent)

          this.tags.parent = tag + this.tags["".concat(tag, "count")]; //and make this the current parent (i.e. in the case of a div 'div1')
        };

        this.retrieve_tag = function (tag) {
          //function to retrieve the opening tag to the corresponding closer
          if (this.tags["".concat(tag, "count")]) {
            //if the openener is not in the Object we ignore it
            var temp_parent = this.tags.parent; //check to see if it's a closable tag.

            while (temp_parent) {
              //till we reach '' (the initial value) 
              if (tag + this.tags["".concat(tag, "count")] === temp_parent) {
                //if this is it use it
                break;
              }

              temp_parent = this.tags["".concat(temp_parent, "parent")]; //otherwise keep on climbing up the DOM Tree
            }

            if (temp_parent) {
              //if we caught something
              this.indent_level = this.tags[tag + this.tags["".concat(tag, "count")]]; //set the indent_level accordingly

              this.tags.parent = this.tags[temp_parent + 'parent']; //and set the current parent
            }

            delete this.tags[tag + this.tags["".concat(tag, "count")] + 'parent']; //delete the closed tags parent reference...

            delete this.tags[tag + this.tags["".concat(tag, "count")]]; //...and the tag itself

            if (this.tags["".concat(tag, "count")] === 1) {
              delete this.tags["".concat(tag, "count")];
            } else {
              this.tags["".concat(tag, "count")]--;
            }
          }
        };

        this.indent_to_tag = function (tag) {
          // Match the indentation level to the last use of this tag, but don't remove it.
          if (!this.tags["".concat(tag, "count")]) {
            return;
          }

          var temp_parent = this.tags.parent;

          while (temp_parent) {
            if (tag + this.tags["".concat(tag, "count")] === temp_parent) {
              break;
            }

            temp_parent = this.tags["".concat(temp_parent, "parent")];
          }

          if (temp_parent) {
            this.indent_level = this.tags[tag + this.tags["".concat(tag, "count")]];
          }
        };

        this.get_tag = function (peek) {
          //function to get a full tag and parse its type
          var input_char = '',
              content = [],
              comment = '',
              space = false,
              first_attr = true,
              tag_start,
              tag_end,
              tag_start_char,
              orig_pos = this.pos,
              orig_line_char_count = this.line_char_count;
          peek = peek !== undefined ? peek : false;

          do {
            if (this.pos >= this.input.length) {
              if (peek) {
                this.pos = orig_pos;
                this.line_char_count = orig_line_char_count;
              }

              return content.length ? content.join('') : ['', 'TK_EOF'];
            }

            input_char = this.input.charAt(this.pos);
            this.pos++;

            if (this.Utils.in_array(input_char, this.Utils.whitespace)) {
              //don't want to insert unnecessary space
              space = true;
              continue;
            }

            if (input_char === '\'' || input_char === '"') {
              input_char += this.get_unformatted(input_char);
              space = true;
            }

            if (input_char === '=') {
              //no space before =
              space = false;
            }

            if (content.length && content[content.length - 1] != '=' && input_char != '>' && space) {
              //no space after = or before >
              this.space_or_wrap(content);
              space = false;

              if (!first_attr && wrap_attributes === 'force' && input_char != '/') {
                this.print_newline(true, content);
                this.print_indentation(content);

                for (var count = 0; count < wrap_attributes_indent_size; count++) {
                  content.push(indent_character);
                }
              }

              for (var i = 0; i < content.length; i++) {
                if (content[i] === ' ') {
                  first_attr = false;
                  break;
                }
              }
            }

            if (indent_handlebars && tag_start_char === '<') {
              // When inside an angle-bracket tag, put spaces around
              // handlebars not inside of strings.
              if (input_char + this.input.charAt(this.pos) === '{{') {
                input_char += this.get_unformatted('}}');

                if (content.length && content[content.length - 1] != ' ' && content[content.length - 1] != '<') {
                  input_char = " ".concat(input_char);
                }

                space = true;
              }
            }

            if (input_char === '<' && !tag_start_char) {
              tag_start = this.pos - 1;
              tag_start_char = '<';
            }

            if (indent_handlebars && !tag_start_char) {
              if (content.length >= 2 && content[content.length - 1] === '{' && content[content.length - 2] === '{') {
                if (input_char === '#' || input_char === '/' || input_char === '!') {
                  tag_start = this.pos - 3;
                } else {
                  tag_start = this.pos - 2;
                }

                tag_start_char = '{';
              }
            }

            this.line_char_count++;
            content.push(input_char); //inserts character at-a-time (or string)

            if (content[1] && (content[1] === '!' || content[1] === '?' || content[1] === '%')) {
              //if we're in a comment, do something special
              // We treat all comments as literals, even more than preformatted tags
              // we just look for the appropriate close tag
              content = [this.get_comment(tag_start)];
              break;
            }

            if (indent_handlebars && content[1] && content[1] === '{' && content[2] && content[2] === '!') {
              //if we're in a comment, do something special
              // We treat all comments as literals, even more than preformatted tags
              // we just look for the appropriate close tag
              content = [this.get_comment(tag_start)];
              break;
            }

            if (indent_handlebars && tag_start_char === '{' && content.length > 2 && content[content.length - 2] === '}' && content[content.length - 1] === '}') {
              break;
            }
          } while (input_char != '>');

          var tag_complete = content.join('');
          var tag_index;
          var tag_offset;

          if (tag_complete.indexOf(' ') != -1) {
            //if there's whitespace, thats where the tag name ends
            tag_index = tag_complete.indexOf(' ');
          } else if (tag_complete[0] === '{') {
            tag_index = tag_complete.indexOf('}');
          } else {
            //otherwise go with the tag ending
            tag_index = tag_complete.indexOf('>');
          }

          if (tag_complete[0] === '<' || !indent_handlebars) {
            tag_offset = 1;
          } else {
            tag_offset = tag_complete[2] === '#' ? 3 : 2;
          }

          var tag_check = tag_complete.substring(tag_offset, tag_index).toLowerCase();

          if (tag_complete.charAt(tag_complete.length - 2) === '/' || this.Utils.in_array(tag_check, this.Utils.single_token)) {
            //if this tag name is a single tag type (either in the list or has a closing /)
            if (!peek) {
              this.tag_type = 'SINGLE';
            }
          } else if (indent_handlebars && tag_complete[0] === '{' && tag_check === 'else') {
            if (!peek) {
              this.indent_to_tag('if');
              this.tag_type = 'HANDLEBARS_ELSE';
              this.indent_content = true;
              this.traverse_whitespace();
            }
          } else if (this.is_unformatted(tag_check, unformatted)) {
            // do not reformat the "unformatted" tags
            comment = this.get_unformatted("</".concat(tag_check, ">"), tag_complete); //...delegate to get_unformatted function

            content.push(comment);
            tag_end = this.pos - 1;
            this.tag_type = 'SINGLE';
          } else if (tag_check === 'script' && (tag_complete.search('type') === -1 || tag_complete.search('type') > -1 && tag_complete.search(/\b(text|application)\/(x-)?(javascript|ecmascript|jscript|livescript)/) > -1)) {
            if (!peek) {
              this.record_tag(tag_check);
              this.tag_type = 'SCRIPT';
            }
          } else if (tag_check === 'style' && (tag_complete.search('type') === -1 || tag_complete.search('type') > -1 && tag_complete.search('text/css') > -1)) {
            if (!peek) {
              this.record_tag(tag_check);
              this.tag_type = 'STYLE';
            }
          } else if (tag_check.charAt(0) === '!') {
            //peek for <! comment
            // for comments content is already correct.
            if (!peek) {
              this.tag_type = 'SINGLE';
              this.traverse_whitespace();
            }
          } else if (!peek) {
            if (tag_check.charAt(0) === '/') {
              //this tag is a double tag so check for tag-ending
              this.retrieve_tag(tag_check.substring(1)); //remove it and all ancestors

              this.tag_type = 'END';
            } else {
              //otherwise it's a start-tag
              this.record_tag(tag_check); //push it on the tag stack

              if (tag_check.toLowerCase() != 'html') {
                this.indent_content = true;
              }

              this.tag_type = 'START';
            } // Allow preserving of newlines after a start or end tag


            if (this.traverse_whitespace()) {
              this.space_or_wrap(content);
            }

            if (this.Utils.in_array(tag_check, this.Utils.extra_liners)) {
              //check if this double needs an extra line
              this.print_newline(false, this.output);

              if (this.output.length && this.output[this.output.length - 2] != '\n') {
                this.print_newline(true, this.output);
              }
            }
          }

          if (peek) {
            this.pos = orig_pos;
            this.line_char_count = orig_line_char_count;
          }

          return content.join(''); //returns fully formatted tag
        };

        this.get_comment = function (start_pos) {
          //function to return comment content in its entirety
          // this is will have very poor perf, but will work for now.
          var comment = '',
              delimiter = '>',
              matched = false;
          this.pos = start_pos;
          var input_char = this.input.charAt(this.pos);
          this.pos++;

          while (this.pos <= this.input.length) {
            comment += input_char; // only need to check for the delimiter if the last chars match

            if (comment[comment.length - 1] === delimiter[delimiter.length - 1] && comment.indexOf(delimiter) != -1) {
              break;
            } // only need to search for custom delimiter for the first few characters


            if (!matched && comment.length < 10) {
              if (comment.indexOf('<![if') === 0) {
                //peek for <![if conditional comment
                delimiter = '<![endif]>';
                matched = true;
              } else if (comment.indexOf('<![cdata[') === 0) {
                //if it's a <[cdata[ comment...
                delimiter = ']]>';
                matched = true;
              } else if (comment.indexOf('<![') === 0) {
                // some other ![ comment? ...
                delimiter = ']>';
                matched = true;
              } else if (comment.indexOf('<!--') === 0) {
                // <!-- comment ...
                delimiter = '-->';
                matched = true;
              } else if (comment.indexOf('{{!') === 0) {
                // {{! handlebars comment
                delimiter = '}}';
                matched = true;
              } else if (comment.indexOf('<?') === 0) {
                // {{! handlebars comment
                delimiter = '?>';
                matched = true;
              } else if (comment.indexOf('<%') === 0) {
                // {{! handlebars comment
                delimiter = '%>';
                matched = true;
              }
            }

            input_char = this.input.charAt(this.pos);
            this.pos++;
          }

          return comment;
        };

        this.get_unformatted = function (delimiter, orig_tag) {
          //function to return unformatted content in its entirety
          if (orig_tag && orig_tag.toLowerCase().indexOf(delimiter) != -1) {
            return '';
          }

          var input_char = '';
          var content = '';
          var min_index = 0;
          var space = true;

          do {
            if (this.pos >= this.input.length) {
              return content;
            }

            input_char = this.input.charAt(this.pos);
            this.pos++;

            if (this.Utils.in_array(input_char, this.Utils.whitespace)) {
              if (!space) {
                this.line_char_count--;
                continue;
              }

              if (input_char === '\n' || input_char === '\r') {
                content += '\n';
                /*  Don't change tab indention for unformatted blocks.  If using code for html editing, this will greatly affect <pre> tags if they are specified in the 'unformatted array'
                            for (const i=0  i<this.indent_level  i++) {
                              content += this.indent_string 
                            }
                            space = false  //...and make sure other indentation is erased
                            */

                this.line_char_count = 0;
                continue;
              }
            }

            content += input_char;
            this.line_char_count++;
            space = true;

            if (indent_handlebars && input_char === '{' && content.length && content[content.length - 2] === '{') {
              // Handlebars expressions in strings should also be unformatted.
              content += this.get_unformatted('}}'); // These expressions are opaque.  Ignore delimiters found in them.

              min_index = content.length;
            }
          } while (content.toLowerCase().indexOf(delimiter, min_index) === -1);

          return content;
        };

        this.get_token = function () {
          //initial handler for token-retrieval
          var token;

          if (this.last_token === 'TK_TAG_SCRIPT' || this.last_token === 'TK_TAG_STYLE') {
            //check if we need to format javascript
            var type = this.last_token.substr(7);
            token = this.get_contents_to(type);

            if (typeof token != 'string') {
              return token;
            }

            return [token, "TK_".concat(type)];
          }

          if (this.current_mode === 'CONTENT') {
            token = this.get_content();

            if (typeof token != 'string') {
              return token;
            } else {
              return [token, 'TK_CONTENT'];
            }
          }

          if (this.current_mode === 'TAG') {
            token = this.get_tag();

            if (typeof token != 'string') {
              return token;
            } else {
              var tag_name_type = "TK_TAG_".concat(this.tag_type);
              return [token, tag_name_type];
            }
          }
        };

        this.get_full_indent = function (level) {
          level = this.indent_level + level || 0;

          if (level < 1) {
            return '';
          }

          return new Array(level + 1).join(this.indent_string);
        };

        this.is_unformatted = function (tag_check, unformatted) {
          //is this an HTML5 block-level link?
          if (!this.Utils.in_array(tag_check, unformatted)) {
            return false;
          }

          if (tag_check.toLowerCase() != 'a' || !this.Utils.in_array('a', unformatted)) {
            return true;
          } //at this point we have an  tag  is its first child something we want to remain
          //unformatted?


          var next_tag = this.get_tag(true
          /* peek. */
          ); // test next_tag to see if it is just html tag (no external content)

          var tag = (next_tag || '').match(/^\s*<\s*\/?([a-z]*)\s*[^>]*>\s*$/); // if next_tag comes back but is not an isolated tag, then
          // let's treat the 'a' tag as having content
          // and respect the unformatted option

          if (!tag || this.Utils.in_array(tag, unformatted)) {
            return true;
          } else {
            return false;
          }
        };

        this.printer = function (js_source, indent_character, indent_size, wrap_line_length, brace_style) {
          //handles input/output and some other printing functions
          this.input = js_source || ''; //gets the input for the Parser

          this.output = [];
          this.indent_character = indent_character;
          this.indent_string = '';
          this.indent_size = indent_size;
          this.brace_style = brace_style;
          this.indent_level = 0;
          this.wrap_line_length = wrap_line_length;
          this.line_char_count = 0; //count to see if wrap_line_length was exceeded

          for (var i = 0; i < this.indent_size; i++) {
            this.indent_string += this.indent_character;
          }

          this.print_newline = function (force, arr) {
            this.line_char_count = 0;

            if (!arr || !arr.length) {
              return;
            }

            if (force || arr[arr.length - 1] != '\n') {
              //we might want the extra line
              if (arr[arr.length - 1] != '\n') {
                arr[arr.length - 1] = rtrim(arr[arr.length - 1]);
              }

              arr.push('\n');
            }
          };

          this.print_indentation = function (arr) {
            for (var _i = 0; _i < this.indent_level; _i++) {
              arr.push(this.indent_string);
              this.line_char_count += this.indent_string.length;
            }
          };

          this.print_token = function (text) {
            // Avoid printing initial whitespace.
            if (this.is_whitespace(text) && !this.output.length) {
              return;
            }

            if (text || text !== '') {
              if (this.output.length && this.output[this.output.length - 1] === '\n') {
                this.print_indentation(this.output);
                text = ltrim(text);
              }
            }

            this.print_token_raw(text);
          };

          this.print_token_raw = function (text) {
            // If we are going to print newlines, truncate trailing
            // whitespace, as the newlines will represent the space.
            if (this.newlines > 0) {
              text = rtrim(text);
            }

            if (text && text !== '') {
              if (text.length > 1 && text[text.length - 1] === '\n') {
                // unformatted tags can grab newlines as their last character
                this.output.push(text.slice(0, -1));
                this.print_newline(false, this.output);
              } else {
                this.output.push(text);
              }
            }

            for (var n = 0; n < this.newlines; n++) {
              this.print_newline(n > 0, this.output);
            }

            this.newlines = 0;
          };

          this.indent = function () {
            this.indent_level++;
          };

          this.unindent = function () {
            if (this.indent_level > 0) {
              this.indent_level--;
            }
          };
        };

        return this;
      }
      /*_____________________--------------------_____________________*/


      multi_parser = new Parser(); //wrapping functions Parser

      multi_parser.printer(html_source, indent_character, indent_size, wrap_line_length, brace_style); //initialize starting values

      while (true) {
        var t = multi_parser.get_token();
        multi_parser.token_text = t[0];
        multi_parser.token_type = t[1];

        if (multi_parser.token_type === 'TK_EOF') {
          break;
        }

        switch (multi_parser.token_type) {
          case 'TK_TAG_START':
            multi_parser.print_newline(false, multi_parser.output);
            multi_parser.print_token(multi_parser.token_text);

            if (multi_parser.indent_content) {
              multi_parser.indent();
              multi_parser.indent_content = false;
            }

            multi_parser.current_mode = 'CONTENT';
            break;

          case 'TK_TAG_STYLE':
          case 'TK_TAG_SCRIPT':
            multi_parser.print_newline(false, multi_parser.output);
            multi_parser.print_token(multi_parser.token_text);
            multi_parser.current_mode = 'CONTENT';
            break;

          case 'TK_TAG_END':
            // Print new line only if the tag has no content and has child
            if (multi_parser.last_token === 'TK_CONTENT' && multi_parser.last_text === '') {
              var tag_name = multi_parser.token_text.match(/\w+/)[0];
              var tag_extracted_from_last_output = null;

              if (multi_parser.output.length) {
                tag_extracted_from_last_output = multi_parser.output[multi_parser.output.length - 1].match(/(?:<|{{#)\/?\s*(\w+)/);
              }

              if (tag_extracted_from_last_output === null || tag_extracted_from_last_output[1] != tag_name && !multi_parser.Utils.in_array(tag_extracted_from_last_output[1], unformatted)) {
                multi_parser.print_newline(false, multi_parser.output);
              }
            }

            multi_parser.print_token(multi_parser.token_text);
            multi_parser.current_mode = 'CONTENT';
            break;

          case 'TK_TAG_SINGLE':
            // Don't add a newline before elements that should remain unformatted.
            var tag_check = multi_parser.token_text.match(/^\s*<([a-z-]+)/i);

            if (!tag_check || !multi_parser.Utils.in_array(tag_check[1], unformatted)) {
              multi_parser.print_newline(false, multi_parser.output);
            }

            multi_parser.print_token(multi_parser.token_text);
            multi_parser.current_mode = 'CONTENT';
            break;

          case 'TK_TAG_HANDLEBARS_ELSE':
            multi_parser.print_token(multi_parser.token_text);

            if (multi_parser.indent_content) {
              multi_parser.indent();
              multi_parser.indent_content = false;
            }

            multi_parser.current_mode = 'CONTENT';
            break;

          case 'TK_TAG_HANDLEBARS_COMMENT':
            multi_parser.print_token(multi_parser.token_text);
            multi_parser.current_mode = 'TAG';
            break;

          case 'TK_CONTENT':
            multi_parser.print_token(multi_parser.token_text);
            multi_parser.current_mode = 'TAG';
            break;

          case 'TK_STYLE':
          case 'TK_SCRIPT':
            if (multi_parser.token_text !== '') {
              multi_parser.print_newline(false, multi_parser.output);
              var _multi_parser = multi_parser,
                  text = _multi_parser.token_text;

              var _beautifier = void 0;

              var script_indent_level = 1;

              if (multi_parser.token_type === 'TK_SCRIPT') {
                _beautifier = typeof js_beautify === 'function' && js_beautify;
              } else if (multi_parser.token_type === 'TK_STYLE') {
                _beautifier = typeof css_beautify === 'function' && css_beautify;
              }

              if (options.indent_scripts === 'keep') {
                script_indent_level = 0;
              } else if (options.indent_scripts === 'separate') {
                script_indent_level = -multi_parser.indent_level;
              }

              var indentation = multi_parser.get_full_indent(script_indent_level);

              if (_beautifier) {
                // call the Beautifier if avaliable
                text = _beautifier(text.replace(/^\s*/, indentation), options);
              } else {
                // simply indent the string otherwise
                var white = text.match(/^\s*/)[0];

                var _level = white.match(/[^\n\r]*$/)[0].split(multi_parser.indent_string).length - 1;

                var reindent = multi_parser.get_full_indent(script_indent_level - _level);
                text = text.replace(/^\s*/, indentation).replace(/\r\n|\r|\n/g, '\n' + reindent).replace(/\s+$/, '');
              }

              if (text) {
                multi_parser.print_token_raw(text);
                multi_parser.print_newline(true, multi_parser.output);
              }
            }

            multi_parser.current_mode = 'TAG';
            break;

          default:
            // We should not be getting here but we don't want to drop input on the floor
            // Just output the text and move on
            if (multi_parser.token_text !== '') {
              multi_parser.print_token(multi_parser.token_text);
            }

            break;
        }

        multi_parser.last_token = multi_parser.token_type;
        multi_parser.last_text = multi_parser.token_text;
      }

      var sweet_code = multi_parser.output.join('').replace(/[\r\n\t ]+$/, '');

      if (end_with_newline) {
        sweet_code += '\n';
      }

      return sweet_code;
    }

    function css_beautify(source_text, options) {
      var NESTED_AT_RULE = {
        '@page': true,
        '@font-face': true,
        '@keyframes': true,
        // also in CONDITIONAL_GROUP_RULE below
        '@media': true,
        '@supports': true,
        '@document': true
      };
      var CONDITIONAL_GROUP_RULE = {
        '@media': true,
        '@supports': true,
        '@document': true
      };
      options = options || {};
      source_text = source_text || ''; // HACK: newline parsing inconsistent. This brute force normalizes the input.

      source_text = source_text.replace(/\r\n|[\r\u2028\u2029]/g, '\n');
      var indentSize = options.indent_size || 4;
      var indentCharacter = options.indent_char || ' ';
      var selectorSeparatorNewline = options.selector_separator_newline === undefined ? true : options.selector_separator_newline;
      var end_with_newline = options.end_with_newline === undefined ? false : options.end_with_newline;
      var newline_between_rules = options.newline_between_rules === undefined ? true : options.newline_between_rules;
      var eol = options.eol ? options.eol : '\n'; // compatibility

      if (typeof indentSize === 'string') {
        indentSize = parseInt(indentSize, 10);
      }

      if (options.indent_with_tabs) {
        indentCharacter = '\t';
        indentSize = 1;
      }

      eol = eol.replace(/\\r/, '\r').replace(/\\n/, '\n'); // tokenizer

      var whiteRe = /^\s+$/;
      var pos = -1,
          ch;
      var parenLevel = 0;

      function next() {
        ch = source_text.charAt(++pos);
        return ch || '';
      }

      function peek(skipWhitespace) {
        var result = '';
        var prev_pos = pos;

        if (skipWhitespace) {
          eatWhitespace();
        }

        result = source_text.charAt(pos + 1) || '';
        pos = prev_pos - 1;
        next();
        return result;
      }

      function eatString(endChars) {
        var start = pos;

        while (next()) {
          if (ch === '\\') {
            next();
          } else if (endChars.indexOf(ch) !== -1) {
            break;
          } else if (ch === '\n') {
            break;
          }
        }

        return source_text.substring(start, pos + 1);
      }

      function peekString(endChar) {
        var prev_pos = pos;
        var str = eatString(endChar);
        pos = prev_pos - 1;
        next();
        return str;
      }

      function eatWhitespace() {
        var result = '';

        while (whiteRe.test(peek())) {
          next();
          result += ch;
        }

        return result;
      }

      function skipWhitespace() {
        var result = '';

        if (ch && whiteRe.test(ch)) {
          result = ch;
        }

        while (whiteRe.test(next())) {
          result += ch;
        }

        return result;
      }

      function eatComment(singleLine) {
        var start = pos;
        singleLine = peek() === '/';
        next();

        while (next()) {
          if (!singleLine && ch === '*' && peek() === '/') {
            next();
            break;
          } else if (singleLine && ch === '\n') {
            return source_text.substring(start, pos);
          }
        }

        return source_text.substring(start, pos) + ch;
      }

      function lookBack(str) {
        return source_text.substring(pos - str.length, pos).toLowerCase() === str;
      } // Nested pseudo-class if we are insideRule
      // and the next special character found opens
      // a new block


      function foundNestedPseudoClass() {
        var openParen = 0;

        for (var i = pos + 1; i < source_text.length; i++) {
          var _ch = source_text.charAt(i);

          if (_ch === '{') {
            return true;
          } else if (_ch === '(') {
            // pseudoclasses can contain ()
            openParen += 1;
          } else if (_ch === ')') {
            if (openParen === 0) {
              return false;
            }

            openParen -= 1;
          } else if (_ch === ' ' || _ch === '}') {
            return false;
          }
        }

        return false;
      } // printer


      var basebaseIndentString = source_text.match(/^[\t ]*/)[0];
      var singleIndent = new Array(indentSize + 1).join(indentCharacter);
      var indentLevel = 0;
      var nestedLevel = 0;

      function indent() {
        indentLevel++;
        basebaseIndentString += singleIndent;
      }

      function outdent() {
        indentLevel--;
        basebaseIndentString = basebaseIndentString.slice(0, -indentSize);
      }

      var print = {};

      print['{'] = function (ch) {
        print.singleSpace();
        output.push(ch);
        print.newLine();
      };

      print['}'] = function (ch) {
        print.newLine();
        output.push(ch);
        print.newLine();
      };

      print._lastCharWhitespace = function () {
        return whiteRe.test(output[output.length - 1]);
      };

      print.newLine = function (keepWhitespace) {
        if (output.length) {
          if (!keepWhitespace && output[output.length - 1] !== '\n') {
            print.trim();
          }

          output.push('\n');

          if (basebaseIndentString) {
            output.push(basebaseIndentString);
          }
        }
      };

      print.singleSpace = function () {
        if (output.length && !print._lastCharWhitespace()) {
          output.push(' ');
        }
      };

      print.preserveSingleSpace = function () {
        if (isAfterSpace) {
          print.singleSpace();
        }
      };

      print.trim = function () {
        while (print._lastCharWhitespace()) {
          output.pop();
        }
      };

      var output = [];
      /*_____________________--------------------_____________________*/

      var insideRule = false;
      var insidePropertyValue = false;
      var enteringConditionalGroup = false;
      var top_ch = '';
      var last_top_ch = '';
      var isAfterSpace;

      while (true) {
        var whitespace = skipWhitespace();
        isAfterSpace = whitespace !== '';
        var isAfterNewline = whitespace.indexOf('\n') !== -1;
        last_top_ch = top_ch;
        top_ch = ch;

        if (!ch) {
          break;
        } else if (ch === '/' && peek() === '*') {
          /* css comment */
          var header = indentLevel === 0;

          if (isAfterNewline || header) {
            print.newLine();
          }

          output.push(eatComment());
          print.newLine();

          if (header) {
            print.newLine(true);
          }
        } else if (ch === '/' && peek() === '/') {
          // single line comment
          if (!isAfterNewline && last_top_ch !== '{') {
            print.trim();
          }

          print.singleSpace();
          output.push(eatComment());
          print.newLine();
        } else if (ch === '@') {
          print.preserveSingleSpace();
          output.push(ch); // strip trailing space, if present, for hash property checks

          var variableOrRule = peekString(': , {}()[]/=\'"');

          if (variableOrRule.match(/[ :]$/)) {
            // we have a variable or pseudo-class, add it and insert one space before continuing
            next();
            variableOrRule = eatString(': ').replace(/\s$/, '');
            output.push(variableOrRule);
            print.singleSpace();
          }

          variableOrRule = variableOrRule.replace(/\s$/, ''); // might be a nesting at-rule

          if (variableOrRule in NESTED_AT_RULE) {
            nestedLevel += 1;

            if (variableOrRule in CONDITIONAL_GROUP_RULE) {
              enteringConditionalGroup = true;
            }
          }
        } else if (ch === '#' && peek() === '{') {
          print.preserveSingleSpace();
          output.push(eatString('}'));
        } else if (ch === '{') {
          if (peek(true) === '}') {
            eatWhitespace();
            next();
            print.singleSpace();
            output.push('{}');
            print.newLine();

            if (newline_between_rules && indentLevel === 0) {
              print.newLine(true);
            }
          } else {
            indent();
            print['{'](ch); // when entering conditional groups, only rulesets are allowed

            if (enteringConditionalGroup) {
              enteringConditionalGroup = false;
              insideRule = indentLevel > nestedLevel;
            } else {
              // otherwise, declarations are also allowed
              insideRule = indentLevel >= nestedLevel;
            }
          }
        } else if (ch === '}') {
          outdent();
          print['}'](ch);
          insideRule = false;
          insidePropertyValue = false;

          if (nestedLevel) {
            nestedLevel--;
          }

          if (newline_between_rules && indentLevel === 0) {
            print.newLine(true);
          }
        } else if (ch === ':') {
          eatWhitespace();

          if ((insideRule || enteringConditionalGroup) && !(lookBack('&') || foundNestedPseudoClass())) {
            // 'property: value' delimiter
            // which could be in a conditional group query
            insidePropertyValue = true;
            output.push(':');
            print.singleSpace();
          } else {
            // sass/less parent reference don't use a space
            // sass nested pseudo-class don't use a space
            if (peek() === ':') {
              // pseudo-element
              next();
              output.push('::');
            } else {
              // pseudo-class
              output.push(':');
            }
          }
        } else if (ch === '"' || ch === '\'') {
          print.preserveSingleSpace();
          output.push(eatString(ch));
        } else if (ch === ' ') {
          insidePropertyValue = false;
          output.push(ch);
          print.newLine();
        } else if (ch === '(') {
          // may be a url
          if (lookBack('url')) {
            output.push(ch);
            eatWhitespace();

            if (next()) {
              if (ch !== ')' && ch !== '"' && ch !== '\'') {
                output.push(eatString(')'));
              } else {
                pos--;
              }
            }
          } else {
            parenLevel++;
            print.preserveSingleSpace();
            output.push(ch);
            eatWhitespace();
          }
        } else if (ch === ')') {
          output.push(ch);
          parenLevel--;
        } else if (ch === ',') {
          output.push(ch);
          eatWhitespace();

          if (selectorSeparatorNewline && !insidePropertyValue && parenLevel < 1) {
            print.newLine();
          } else {
            print.singleSpace();
          }
        } else if (ch === ']') {
          output.push(ch);
        } else if (ch === '[') {
          print.preserveSingleSpace();
          output.push(ch);
        } else if (ch === '=') {
          // no whitespace before or after
          eatWhitespace();
          ch = '=';
          output.push(ch);
        } else {
          print.preserveSingleSpace();
          output.push(ch);
        }
      }

      var sweetCode = '';

      if (basebaseIndentString) {
        sweetCode += basebaseIndentString;
      }

      sweetCode += output.join('').replace(/[\r\n\t ]+$/, ''); // establish end_with_newline

      if (end_with_newline) {
        sweetCode += '\n';
      }

      if (eol != '\n') {
        sweetCode = sweetCode.replace(/[\n]/g, eol);
      }

      return sweetCode;
    }

    function in_array(what, arr) {
      for (var i = 0; i < arr.length; i += 1) {
        if (arr[i] === what) {
          return true;
        }
      }

      return false;
    }

    function trim(s) {
      return s.replace(/^\s+|\s+$/g, '');
    }

    function ltrim(s) {
      return s.replace(/^\s+/g, '');
    }

    function js_beautify(js_source_text, options) {

      var beautifier = new Beautifier(js_source_text, options);
      return beautifier.beautify();
    }

    var MODE = {
      BlockStatement: 'BlockStatement',
      // 'BLOCK'
      Statement: 'Statement',
      // 'STATEMENT'
      ObjectLiteral: 'ObjectLiteral',
      // 'OBJECT',
      ArrayLiteral: 'ArrayLiteral',
      //'[EXPRESSION]',
      ForInitializer: 'ForInitializer',
      //'(FOR-EXPRESSION)',
      Conditional: 'Conditional',
      //'(COND-EXPRESSION)',
      Expression: 'Expression' //'(EXPRESSION)'

    };

    function Beautifier(js_source_text, options) {

      var output;
      var tokens = [],
          token_pos;
      var Tokenizer;
      var current_token;
      var last_type, last_last_text, indent_string;
      var flags, previous_flags, flag_store;
      var prefix;
      var handlers, opt;
      var baseIndentString = '';
      handlers = {
        'TK_START_EXPR': handle_start_expr,
        'TK_END_EXPR': handle_end_expr,
        'TK_START_BLOCK': handle_start_block,
        'TK_END_BLOCK': handle_end_block,
        'TK_WORD': handle_word,
        'TK_RESERVED': handle_word,
        'TK_SEMICOLON': handle_semicolon,
        'TK_STRING': handle_string,
        'TK_EQUALS': handle_equals,
        'TK_OPERATOR': handle_operator,
        'TK_COMMA': handle_comma,
        'TK_BLOCK_COMMENT': handle_block_comment,
        'TK_COMMENT': handle_comment,
        'TK_DOT': handle_dot,
        'TK_UNKNOWN': handle_unknown,
        'TK_EOF': handle_eof
      };

      function create_flags(flags_base, mode) {
        var next_indent_level = 0;

        if (flags_base) {
          next_indent_level = flags_base.indentation_level;

          if (!output.just_added_newline() && flags_base.line_indent_level > next_indent_level) {
            next_indent_level = flags_base.line_indent_level;
          }
        }

        var next_flags = {
          mode: mode,
          parent: flags_base,
          last_text: flags_base ? flags_base.last_text : '',
          // last token text
          last_word: flags_base ? flags_base.last_word : '',
          // last 'TK_WORD' passed
          declaration_statement: false,
          declaration_assignment: false,
          multiline_frame: false,
          if_block: false,
          else_block: false,
          do_block: false,
          do_while: false,
          in_case_statement: false,
          // switch(..){ INSIDE HERE }
          in_case: false,
          // we're on the exact line with "case 0:"
          case_body: false,
          // the indented case-action block
          indentation_level: next_indent_level,
          line_indent_level: flags_base ? flags_base.line_indent_level : next_indent_level,
          start_line_index: output.get_line_number(),
          ternary_depth: 0
        };
        return next_flags;
      } // Some interpreters have unexpected results with foo = baz || bar 


      options = options ? options : {};
      opt = {}; // compatibility

      if (options.braces_on_own_line !== undefined) {
        //graceful handling of deprecated option
        opt.brace_style = options.braces_on_own_line ? 'expand' : 'collapse';
      }

      opt.brace_style = options.brace_style ? options.brace_style : opt.brace_style ? opt.brace_style : 'collapse'; // graceful handling of deprecated option

      if (opt.brace_style === 'expand-strict') {
        opt.brace_style = 'expand';
      }

      opt.indent_size = options.indent_size ? parseInt(options.indent_size, 10) : 4;
      opt.indent_char = options.indent_char ? options.indent_char : ' ';
      opt.eol = options.eol ? options.eol : '\n';
      opt.preserve_newlines = options.preserve_newlines === undefined ? true : options.preserve_newlines;
      opt.break_chained_methods = options.break_chained_methods === undefined ? false : options.break_chained_methods;
      opt.max_preserve_newlines = options.max_preserve_newlines === undefined ? 0 : parseInt(options.max_preserve_newlines, 10);
      opt.space_in_paren = options.space_in_paren === undefined ? false : options.space_in_paren;
      opt.space_in_empty_paren = options.space_in_empty_paren === undefined ? false : options.space_in_empty_paren;
      opt.jslint_happy = options.jslint_happy === undefined ? false : options.jslint_happy;
      opt.space_after_anon_function = options.space_after_anon_function === undefined ? false : options.space_after_anon_function;
      opt.keep_array_indentation = options.keep_array_indentation === undefined ? false : options.keep_array_indentation;
      opt.space_before_conditional = options.space_before_conditional === undefined ? true : options.space_before_conditional;
      opt.unescape_strings = options.unescape_strings === undefined ? false : options.unescape_strings;
      opt.wrap_line_length = options.wrap_line_length === undefined ? 0 : parseInt(options.wrap_line_length, 10);
      opt.e4x = options.e4x === undefined ? false : options.e4x;
      opt.end_with_newline = options.end_with_newline === undefined ? false : options.end_with_newline;
      opt.comma_first = options.comma_first === undefined ? false : options.comma_first; // For testing of beautify ignore:start directive

      opt.test_output_raw = options.test_output_raw === undefined ? false : options.test_output_raw; // force opt.space_after_anon_function to true if opt.jslint_happy

      if (opt.jslint_happy) {
        opt.space_after_anon_function = true;
      }

      if (options.indent_with_tabs) {
        opt.indent_char = '\t';
        opt.indent_size = 1;
      }

      opt.eol = opt.eol.replace(/\\r/, '\r').replace(/\\n/, '\n'); //----------------------------------

      indent_string = '';

      while (opt.indent_size > 0) {
        indent_string += opt.indent_char;
        opt.indent_size -= 1;
      }

      var preindent_index = 0;

      if (js_source_text && js_source_text.length) {
        while (js_source_text.charAt(preindent_index) === ' ' || js_source_text.charAt(preindent_index) === '\t') {
          baseIndentString += js_source_text.charAt(preindent_index);
          preindent_index += 1;
        }

        js_source_text = js_source_text.substring(preindent_index);
      }

      last_type = 'TK_START_BLOCK'; // last token type

      last_last_text = ''; // pre-last token text

      output = new Output(indent_string, baseIndentString); // If testing the ignore directive, start with output disable set to true

      output.raw = opt.test_output_raw; // Stack of parsing/formatting states, including MODE.
      // We tokenize, parse, and output in an almost purely a forward-only stream of token input
      // and formatted output.  This makes the beautifier less accurate than full parsers
      // but also far more tolerant of syntax errors.
      //
      // For example, the default mode is MODE.BlockStatement. If we see a '{' we push a new frame of type
      // MODE.BlockStatement on the the stack, even though it could be object literal.  If we later
      // encounter a ":", we'll switch to to MODE.ObjectLiteral.  If we then see a " ",
      // most full parsers would die, but the beautifier gracefully falls back to
      // MODE.BlockStatement and continues on.

      flag_store = [];
      set_mode(MODE.BlockStatement);

      this.beautify = function () {
        /*jshint onevar:true */
        var local_token, sweet_code;
        Tokenizer = new tokenizer(js_source_text, opt, indent_string);
        tokens = Tokenizer.tokenize();
        token_pos = 0;

        while (local_token = get_token()) {
          for (var i = 0; i < local_token.comments_before.length; i++) {
            // The cleanest handling of inline comments is to treat them as though they aren't there.
            // Just continue formatting and the behavior should be logical.
            // Also ignore unknown tokens.  Again, this should result in better behavior.
            handle_token(local_token.comments_before[i]);
          }

          handle_token(local_token);
          last_last_text = flags.last_text;
          last_type = local_token.type;
          flags.last_text = local_token.text;
          token_pos += 1;
        }

        sweet_code = output.get_code();

        if (opt.end_with_newline) {
          sweet_code += '\n';
        }

        if (opt.eol != '\n') {
          sweet_code = sweet_code.replace(/[\n]/g, opt.eol);
        }

        return sweet_code;
      };

      function handle_token(local_token) {
        var newlines = local_token.newlines;
        var keep_whitespace = opt.keep_array_indentation && is_array(flags.mode);

        if (keep_whitespace) {
          for (var i = 0; i < newlines; i += 1) {
            print_newline(i > 0);
          }
        } else {
          if (opt.max_preserve_newlines && newlines > opt.max_preserve_newlines) {
            newlines = opt.max_preserve_newlines;
          }

          if (opt.preserve_newlines) {
            if (local_token.newlines > 1) {
              print_newline();

              for (var _i2 = 1; _i2 < newlines; _i2 += 1) {
                print_newline(true);
              }
            }
          }
        }

        current_token = local_token;
        handlers[current_token.type]();
      } // we could use just string.split, but
      // IE doesn't like returning empty strings


      function split_newlines(s) {
        //return s.split(/\x0d\x0a|\x0a/) 
        var idx;
        s = s.replace(/\x0d/g, '');
        var out = [];
        idx = s.indexOf('\n');

        while (idx !== -1) {
          out.push(s.substring(0, idx));
          s = s.substring(idx + 1);
          idx = s.indexOf('\n');
        }

        if (s.length) {
          out.push(s);
        }

        return out;
      }

      function allow_wrap_or_preserved_newline(force_linewrap) {
        force_linewrap = force_linewrap === undefined ? false : force_linewrap; // Never wrap the first token on a line

        if (output.just_added_newline()) {
          return;
        }

        if (opt.preserve_newlines && current_token.wanted_newline || force_linewrap) {
          print_newline(false, true);
        } else if (opt.wrap_line_length) {
          var proposed_line_length = output.current_line.get_character_count() + current_token.text.length + (output.space_before_token ? 1 : 0);

          if (proposed_line_length >= opt.wrap_line_length) {
            print_newline(false, true);
          }
        }
      }

      function print_newline(force_newline, preserve_statement_flags) {
        if (!preserve_statement_flags) {
          if (flags.last_text !== ' ' && flags.last_text !== ',' && flags.last_text !== '=' && last_type !== 'TK_OPERATOR') {
            while (flags.mode === MODE.Statement && !flags.if_block && !flags.do_block) {
              restore_mode();
            }
          }
        }

        if (output.add_new_line(force_newline)) {
          flags.multiline_frame = true;
        }
      }

      function print_token_line_indentation() {
        if (output.just_added_newline()) {
          if (opt.keep_array_indentation && is_array(flags.mode) && current_token.wanted_newline) {
            output.current_line.push(current_token.whitespace_before);
            output.space_before_token = false;
          } else if (output.set_indent(flags.indentation_level)) {
            flags.line_indent_level = flags.indentation_level;
          }
        }
      }

      function print_token(printable_token) {
        if (output.raw) {
          output.add_raw_token(current_token);
          return;
        }

        if (opt.comma_first && last_type === 'TK_COMMA' && output.just_added_newline()) {
          if (output.previous_line.last() === ',') {
            output.previous_line.pop();
            print_token_line_indentation();
            output.add_token(',');
            output.space_before_token = true;
          }
        }

        printable_token = printable_token || current_token.text;
        print_token_line_indentation();
        output.add_token(printable_token);
      }

      function indent() {
        flags.indentation_level += 1;
      }

      function deindent() {
        if (flags.indentation_level > 0 && (!flags.parent || flags.indentation_level > flags.parent.indentation_level)) flags.indentation_level -= 1;
      }

      function set_mode(mode) {
        if (flags) {
          flag_store.push(flags);
          previous_flags = flags;
        } else {
          previous_flags = create_flags(null, mode);
        }

        flags = create_flags(previous_flags, mode);
      }

      function is_array(mode) {
        return mode === MODE.ArrayLiteral;
      }

      function is_expression(mode) {
        return in_array(mode, [MODE.Expression, MODE.ForInitializer, MODE.Conditional]);
      }

      function restore_mode() {
        if (flag_store.length > 0) {
          previous_flags = flags;
          flags = flag_store.pop();

          if (previous_flags.mode === MODE.Statement) {
            output.remove_redundant_indentation(previous_flags);
          }
        }
      }

      function start_of_object_property() {
        return flags.parent.mode === MODE.ObjectLiteral && flags.mode === MODE.Statement && (flags.last_text === ':' && flags.ternary_depth === 0 || last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set']));
      }

      function start_of_statement() {
        if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['const', 'let', 'const']) && current_token.type === 'TK_WORD' || last_type === 'TK_RESERVED' && flags.last_text === 'do' || last_type === 'TK_RESERVED' && flags.last_text === 'return' && !current_token.wanted_newline || last_type === 'TK_RESERVED' && flags.last_text === 'else' && !(current_token.type === 'TK_RESERVED' && current_token.text === 'if') || last_type === 'TK_END_EXPR' && (previous_flags.mode === MODE.ForInitializer || previous_flags.mode === MODE.Conditional) || last_type === 'TK_WORD' && flags.mode === MODE.BlockStatement && !flags.in_case && !(current_token.text === '--' || current_token.text === '++') && last_last_text !== 'function' && current_token.type !== 'TK_WORD' && current_token.type !== 'TK_RESERVED' || flags.mode === MODE.ObjectLiteral && (flags.last_text === ':' && flags.ternary_depth === 0 || last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set']))) {
          set_mode(MODE.Statement);
          indent();

          if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['const', 'let', 'const']) && current_token.type === 'TK_WORD') {
            flags.declaration_statement = true;
          } // Issue #276:
          // If starting a new statement with [if, for, while, do], push to a new line.
          // if (a) if (b) if(c) d()  else e()  else f() 


          if (!start_of_object_property()) {
            allow_wrap_or_preserved_newline(current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['do', 'for', 'if', 'while']));
          }

          return true;
        }

        return false;
      }

      function all_lines_start_with(lines, c) {
        for (var i = 0; i < lines.length; i++) {
          var line = trim(lines[i]);

          if (line.charAt(0) !== c) {
            return false;
          }
        }

        return true;
      }

      function each_line_matches_indent(lines, indent) {
        var i = 0,
            len = lines.length,
            line;

        for (; i < len; i++) {
          line = lines[i]; // allow empty lines to pass through

          if (line && line.indexOf(indent) !== 0) {
            return false;
          }
        }

        return true;
      }

      function is_special_word(word) {
        return in_array(word, ['case', 'return', 'do', 'if', 'throw', 'else']);
      }

      function get_token(offset) {
        var index = token_pos + (offset || 0);
        return index < 0 || index >= tokens.length ? null : tokens[index];
      }

      function handle_start_expr() {
        if (start_of_statement()) ;

        var next_mode = MODE.Expression;

        if (current_token.text === '[') {
          if (last_type === 'TK_WORD' || flags.last_text === ')') {
            // this is array index specifier, break immediately
            // a[x], fn()[x]
            if (last_type === 'TK_RESERVED' && in_array(flags.last_text, Tokenizer.line_starters)) {
              output.space_before_token = true;
            }

            set_mode(next_mode);
            print_token();
            indent();

            if (opt.space_in_paren) {
              output.space_before_token = true;
            }

            return;
          }

          next_mode = MODE.ArrayLiteral;

          if (is_array(flags.mode)) {
            if (flags.last_text === '[' || flags.last_text === ',' && (last_last_text === ']' || last_last_text === '}')) {
              // ], [ goes to new line
              // }, [ goes to new line
              if (!opt.keep_array_indentation) {
                print_newline();
              }
            }
          }
        } else {
          if (last_type === 'TK_RESERVED' && flags.last_text === 'for') {
            next_mode = MODE.ForInitializer;
          } else if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['if', 'while'])) {
            next_mode = MODE.Conditional;
          }
        }

        if (flags.last_text === ' ' || last_type === 'TK_START_BLOCK') {
          print_newline();
        } else if (last_type === 'TK_END_EXPR' || last_type === 'TK_START_EXPR' || last_type === 'TK_END_BLOCK' || flags.last_text === '.') {
          // TODO: Consider whether forcing this is required.  Review failing tests when removed.
          allow_wrap_or_preserved_newline(current_token.wanted_newline); // do nothing on (( and )( and ][ and ]( and .(
        } else if (!(last_type === 'TK_RESERVED' && current_token.text === '(') && last_type !== 'TK_WORD' && last_type !== 'TK_OPERATOR') {
          output.space_before_token = true;
        } else if (last_type === 'TK_RESERVED' && (flags.last_word === 'function' || flags.last_word === 'typeof') || flags.last_text === '*' && last_last_text === 'function') {
          // function() vs function ()
          if (opt.space_after_anon_function) {
            output.space_before_token = true;
          }
        } else if (last_type === 'TK_RESERVED' && (in_array(flags.last_text, Tokenizer.line_starters) || flags.last_text === 'catch')) {
          if (opt.space_before_conditional) {
            output.space_before_token = true;
          }
        } // Should be a space between await and an IIFE


        if (current_token.text === '(' && last_type === 'TK_RESERVED' && flags.last_word === 'await') {
          output.space_before_token = true;
        } // Support of this kind of newline preservation.
        // a = (b &&
        //     (c || d)) 


        if (current_token.text === '(') {
          if (last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
            if (!start_of_object_property()) {
              allow_wrap_or_preserved_newline();
            }
          }
        }

        set_mode(next_mode);
        print_token();

        if (opt.space_in_paren) {
          output.space_before_token = true;
        } // In all cases, if we newline while inside an expression it should be indented.


        indent();
      }

      function handle_end_expr() {
        // statements inside expressions are not valid syntax, but...
        // statements must all be closed when their container closes
        while (flags.mode === MODE.Statement) {
          restore_mode();
        }

        if (flags.multiline_frame) {
          allow_wrap_or_preserved_newline(current_token.text === ']' && is_array(flags.mode) && !opt.keep_array_indentation);
        }

        if (opt.space_in_paren) {
          if (last_type === 'TK_START_EXPR' && !opt.space_in_empty_paren) {
            // () [] no inner space in empty parens like these, ever, ref #320
            output.trim();
            output.space_before_token = false;
          } else {
            output.space_before_token = true;
          }
        }

        if (current_token.text === ']' && opt.keep_array_indentation) {
          print_token();
          restore_mode();
        } else {
          restore_mode();
          print_token();
        }

        output.remove_redundant_indentation(previous_flags); // do {} while () // no statement required after

        if (flags.do_while && previous_flags.mode === MODE.Conditional) {
          previous_flags.mode = MODE.Expression;
          flags.do_block = false;
          flags.do_while = false;
        }
      }

      function handle_start_block() {
        // Check if this is should be treated as a ObjectLiteral
        var next_token = get_token(1);
        var second_token = get_token(2);

        if (second_token && (second_token.text === ':' && in_array(next_token.type, ['TK_STRING', 'TK_WORD', 'TK_RESERVED']) || in_array(next_token.text, ['get', 'set']) && in_array(second_token.type, ['TK_WORD', 'TK_RESERVED']))) {
          // We don't support TypeScript,but we didn't break it for a very long time.
          // We'll try to keep not breaking it.
          if (!in_array(last_last_text, ['class', 'interface'])) {
            set_mode(MODE.ObjectLiteral);
          } else {
            set_mode(MODE.BlockStatement);
          }
        } else {
          set_mode(MODE.BlockStatement);
        }

        var empty_braces = !next_token.comments_before.length && next_token.text === '}';
        var empty_anonymous_function = empty_braces && flags.last_word === 'function' && last_type === 'TK_END_EXPR';

        if (opt.brace_style === 'expand' || opt.brace_style === 'none' && current_token.wanted_newline) {
          if (last_type !== 'TK_OPERATOR' && (empty_anonymous_function || last_type === 'TK_EQUALS' || last_type === 'TK_RESERVED' && is_special_word(flags.last_text) && flags.last_text !== 'else')) {
            output.space_before_token = true;
          } else {
            print_newline(false, true);
          }
        } else {
          // collapse
          if (last_type !== 'TK_OPERATOR' && last_type !== 'TK_START_EXPR') {
            if (last_type === 'TK_START_BLOCK') {
              print_newline();
            } else {
              output.space_before_token = true;
            }
          } else {
            // if TK_OPERATOR or TK_START_EXPR
            if (is_array(previous_flags.mode) && flags.last_text === ',') {
              if (last_last_text === '}') {
                // }, { in array context
                output.space_before_token = true;
              } else {
                print_newline(); // [a, b, c, {
              }
            }
          }
        }

        print_token();
        indent();
      }

      function handle_end_block() {
        // statements must all be closed when their container closes
        while (flags.mode === MODE.Statement) {
          restore_mode();
        }

        var empty_braces = last_type === 'TK_START_BLOCK';

        if (opt.brace_style === 'expand') {
          if (!empty_braces) {
            print_newline();
          }
        } else {
          // skip {}
          if (!empty_braces) {
            if (is_array(flags.mode) && opt.keep_array_indentation) {
              // we REALLY need a newline here, but newliner would skip that
              opt.keep_array_indentation = false;
              print_newline();
              opt.keep_array_indentation = true;
            } else {
              print_newline();
            }
          }
        }

        restore_mode();
        print_token();
      }

      function handle_word() {
        if (current_token.type === 'TK_RESERVED' && flags.mode !== MODE.ObjectLiteral && in_array(current_token.text, ['set', 'get'])) {
          current_token.type = 'TK_WORD';
        }

        if (current_token.type === 'TK_RESERVED' && flags.mode === MODE.ObjectLiteral) {
          var next_token = get_token(1);

          if (next_token.text === ':') {
            current_token.type = 'TK_WORD';
          }
        }

        if (start_of_statement()) ; else if (current_token.wanted_newline && !is_expression(flags.mode) && (last_type !== 'TK_OPERATOR' || flags.last_text === '--' || flags.last_text === '++') && last_type !== 'TK_EQUALS' && (opt.preserve_newlines || !(last_type === 'TK_RESERVED' && in_array(flags.last_text, ['const', 'let', 'const', 'set', 'get'])))) {
          print_newline();
        }

        if (flags.do_block && !flags.do_while) {
          if (current_token.type === 'TK_RESERVED' && current_token.text === 'while') {
            // do {} ## while ()
            output.space_before_token = true;
            print_token();
            output.space_before_token = true;
            flags.do_while = true;
            return;
          } else {
            // do {} should always have while as the next word.
            // if we don't see the expected while, recover
            print_newline();
            flags.do_block = false;
          }
        } // if may be followed by else, or not
        // Bare/inline ifs are tricky
        // Need to unwind the modes correctly: if (a) if (b) c()  else d()  else e() 


        if (flags.if_block) {
          if (!flags.else_block && current_token.type === 'TK_RESERVED' && current_token.text === 'else') {
            flags.else_block = true;
          } else {
            while (flags.mode === MODE.Statement) {
              restore_mode();
            }

            flags.if_block = false;
            flags.else_block = false;
          }
        }

        if (current_token.type === 'TK_RESERVED' && (current_token.text === 'case' || current_token.text === 'default' && flags.in_case_statement)) {
          print_newline();

          if (flags.case_body || opt.jslint_happy) {
            // switch cases following one another
            deindent();
            flags.case_body = false;
          }

          print_token();
          flags.in_case = true;
          flags.in_case_statement = true;
          return;
        }

        if (current_token.type === 'TK_RESERVED' && current_token.text === 'function') {
          if (in_array(flags.last_text, ['}', ' ']) || output.just_added_newline() && !in_array(flags.last_text, ['[', '{', ':', '=', ','])) {
            // make sure there is a nice clean space of at least one blank line
            // before a new function definition
            if (!output.just_added_blankline() && !current_token.comments_before.length) {
              print_newline();
              print_newline(true);
            }
          }

          if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD') {
            if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set', 'new', 'return', 'export', 'async'])) {
              output.space_before_token = true;
            } else if (last_type === 'TK_RESERVED' && flags.last_text === 'default' && last_last_text === 'export') {
              output.space_before_token = true;
            } else {
              print_newline();
            }
          } else if (last_type === 'TK_OPERATOR' || flags.last_text === '=') {
            // foo = function
            output.space_before_token = true;
          } else if (!flags.multiline_frame && (is_expression(flags.mode) || is_array(flags.mode))) ; else {
            print_newline();
          }
        }

        if (last_type === 'TK_COMMA' || last_type === 'TK_START_EXPR' || last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
          if (!start_of_object_property()) {
            allow_wrap_or_preserved_newline();
          }
        }

        if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['function', 'get', 'set'])) {
          print_token();
          flags.last_word = current_token.text;
          return;
        }

        prefix = 'NONE';

        if (last_type === 'TK_END_BLOCK') {
          if (!(current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['else', 'catch', 'finally']))) {
            prefix = 'NEWLINE';
          } else {
            if (opt.brace_style === 'expand' || opt.brace_style === 'end-expand' || opt.brace_style === 'none' && current_token.wanted_newline) {
              prefix = 'NEWLINE';
            } else {
              prefix = 'SPACE';
              output.space_before_token = true;
            }
          }
        } else if (last_type === 'TK_SEMICOLON' && flags.mode === MODE.BlockStatement) {
          // TODO: Should this be for STATEMENT as well?
          prefix = 'NEWLINE';
        } else if (last_type === 'TK_SEMICOLON' && is_expression(flags.mode)) {
          prefix = 'SPACE';
        } else if (last_type === 'TK_STRING') {
          prefix = 'NEWLINE';
        } else if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD' || flags.last_text === '*' && last_last_text === 'function') {
          prefix = 'SPACE';
        } else if (last_type === 'TK_START_BLOCK') {
          prefix = 'NEWLINE';
        } else if (last_type === 'TK_END_EXPR') {
          output.space_before_token = true;
          prefix = 'NEWLINE';
        }

        if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, Tokenizer.line_starters) && flags.last_text !== ')') {
          if (flags.last_text === 'else' || flags.last_text === 'export') {
            prefix = 'SPACE';
          } else {
            prefix = 'NEWLINE';
          }
        }

        if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['else', 'catch', 'finally'])) {
          if (last_type !== 'TK_END_BLOCK' || opt.brace_style === 'expand' || opt.brace_style === 'end-expand' || opt.brace_style === 'none' && current_token.wanted_newline) {
            print_newline();
          } else {
            output.trim(true);
            var line = output.current_line; // If we trimmed and there's something other than a close block before us
            // put a newline back in.  Handles '} // comment' scenario.

            if (line.last() !== '}') {
              print_newline();
            }

            output.space_before_token = true;
          }
        } else if (prefix === 'NEWLINE') {
          if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
            // no newline between 'return nnn'
            output.space_before_token = true;
          } else if (last_type !== 'TK_END_EXPR') {
            if ((last_type !== 'TK_START_EXPR' || !(current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['const', 'let', 'const']))) && flags.last_text !== ':') {
              // no need to force newline on 'const': for (const x = 0...)
              if (current_token.type === 'TK_RESERVED' && current_token.text === 'if' && flags.last_text === 'else') {
                // no newline for } else if {
                output.space_before_token = true;
              } else {
                print_newline();
              }
            }
          } else if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, Tokenizer.line_starters) && flags.last_text !== ')') {
            print_newline();
          }
        } else if (flags.multiline_frame && is_array(flags.mode) && flags.last_text === ',' && last_last_text === '}') {
          print_newline(); // }, in lists get a newline treatment
        } else if (prefix === 'SPACE') {
          output.space_before_token = true;
        }

        print_token();
        flags.last_word = current_token.text;

        if (current_token.type === 'TK_RESERVED' && current_token.text === 'do') {
          flags.do_block = true;
        }

        if (current_token.type === 'TK_RESERVED' && current_token.text === 'if') {
          flags.if_block = true;
        }
      }

      function handle_semicolon() {
        if (start_of_statement()) {
          // The conditional starts the statement if appropriate.
          // Semicolon can be the start (and end) of a statement
          output.space_before_token = false;
        }

        while (flags.mode === MODE.Statement && !flags.if_block && !flags.do_block) {
          restore_mode();
        }

        print_token();
      }

      function handle_string() {
        if (start_of_statement()) {
          // The conditional starts the statement if appropriate.
          // One difference - strings want at least a space before
          output.space_before_token = true;
        } else if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD') {
          output.space_before_token = true;
        } else if (last_type === 'TK_COMMA' || last_type === 'TK_START_EXPR' || last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
          if (!start_of_object_property()) {
            allow_wrap_or_preserved_newline();
          }
        } else {
          print_newline();
        }

        print_token();
      }

      function handle_equals() {
        if (start_of_statement()) ;

        if (flags.declaration_statement) {
          // just got an '=' in a const-line, different formatting/line-breaking, etc will now be done
          flags.declaration_assignment = true;
        }

        output.space_before_token = true;
        print_token();
        output.space_before_token = true;
      }

      function handle_comma() {
        if (flags.declaration_statement) {
          if (is_expression(flags.parent.mode)) {
            // do not break on comma, for(const a = 1, b = 2)
            flags.declaration_assignment = false;
          }

          print_token();

          if (flags.declaration_assignment) {
            flags.declaration_assignment = false;
            print_newline(false, true);
          } else {
            output.space_before_token = true; // for comma-first, we want to allow a newline before the comma
            // to turn into a newline after the comma, which we will fixup later

            if (opt.comma_first) {
              allow_wrap_or_preserved_newline();
            }
          }

          return;
        }

        print_token();

        if (flags.mode === MODE.ObjectLiteral || flags.mode === MODE.Statement && flags.parent.mode === MODE.ObjectLiteral) {
          if (flags.mode === MODE.Statement) {
            restore_mode();
          }

          print_newline();
        } else {
          // EXPR or DO_BLOCK
          output.space_before_token = true; // for comma-first, we want to allow a newline before the comma
          // to turn into a newline after the comma, which we will fixup later

          if (opt.comma_first) {
            allow_wrap_or_preserved_newline();
          }
        }
      }

      function handle_operator() {
        if (start_of_statement()) ;

        if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
          // "return" had a special handling in TK_WORD. Now we need to return the favor
          output.space_before_token = true;
          print_token();
          return;
        } // hack for actionscript's import .* 


        if (current_token.text === '*' && last_type === 'TK_DOT') {
          print_token();
          return;
        }

        if (current_token.text === ':' && flags.in_case) {
          flags.case_body = true;
          indent();
          print_token();
          print_newline();
          flags.in_case = false;
          return;
        }

        if (current_token.text === '::') {
          // no spaces around exotic namespacing syntax operator
          print_token();
          return;
        } // Allow line wrapping between operators


        if (last_type === 'TK_OPERATOR') {
          allow_wrap_or_preserved_newline();
        }

        var space_before = true;
        var space_after = true;

        if (in_array(current_token.text, ['--', '++', '!', '~']) || in_array(current_token.text, ['-', '+']) && (in_array(last_type, ['TK_START_BLOCK', 'TK_START_EXPR', 'TK_EQUALS', 'TK_OPERATOR']) || in_array(flags.last_text, Tokenizer.line_starters) || flags.last_text === ',')) {
          // unary operators (and binary +/- pretending to be unary) special cases
          space_before = false;
          space_after = false; // http://www.ecma-international.org/ecma-262/5.1/#sec-7.9.1
          // if there is a newline between -- or ++ and anything else we should preserve it.

          if (current_token.wanted_newline && (current_token.text === '--' || current_token.text === '++')) {
            print_newline(false, true);
          }

          if (flags.last_text === ' ' && is_expression(flags.mode)) {
            // for (   ++i)
            //        ^^^
            space_before = true;
          }

          if (last_type === 'TK_RESERVED') {
            space_before = true;
          } else if (last_type === 'TK_END_EXPR') {
            space_before = !(flags.last_text === ']' && (current_token.text === '--' || current_token.text === '++'));
          } else if (last_type === 'TK_OPERATOR') {
            // a++ + ++b 
            // a - -b
            space_before = in_array(current_token.text, ['--', '-', '++', '+']) && in_array(flags.last_text, ['--', '-', '++', '+']); // + and - are not unary when preceeded by -- or ++ operator
            // a-- + b
            // a * +b
            // a - -b

            if (in_array(current_token.text, ['+', '-']) && in_array(flags.last_text, ['--', '++'])) {
              space_after = true;
            }
          }

          if ((flags.mode === MODE.BlockStatement || flags.mode === MODE.Statement) && (flags.last_text === '{' || flags.last_text === ' ')) {
            // { foo  --i }
            // foo()  --bar 
            print_newline();
          }
        } else if (current_token.text === ':') {
          if (flags.ternary_depth === 0) {
            // Colon is invalid javascript outside of ternary and object, but do our best to guess what was meant.
            space_before = false;
          } else {
            flags.ternary_depth -= 1;
          }
        } else if (current_token.text === '?') {
          flags.ternary_depth += 1;
        } else if (current_token.text === '*' && last_type === 'TK_RESERVED' && flags.last_text === 'function') {
          space_before = false;
          space_after = false;
        }

        output.space_before_token = output.space_before_token || space_before;
        print_token();
        output.space_before_token = space_after;
      }

      function handle_block_comment() {
        if (output.raw) {
          output.add_raw_token(current_token);

          if (current_token.directives && current_token.directives['preserve'] === 'end') {
            // If we're testing the raw output behavior, do not allow a directive to turn it off.
            if (!opt.test_output_raw) {
              output.raw = false;
            }
          }

          return;
        }

        if (current_token.directives) {
          print_newline(false, true);
          print_token();

          if (current_token.directives['preserve'] === 'start') {
            output.raw = true;
          }

          print_newline(false, true);
          return;
        } // inline block


        if (!acorn.newline.test(current_token.text) && !current_token.wanted_newline) {
          output.space_before_token = true;
          print_token();
          output.space_before_token = true;
          return;
        }

        var lines = split_newlines(current_token.text);
        var j; // iterator for this case

        var javadoc = false;
        var starless = false;
        var _current_token = current_token,
            lastIndent = _current_token.whitespace_before;
        var lastIndentLength = lastIndent.length; // block comment starts with a new line

        print_newline(false, true);

        if (lines.length > 1) {
          if (all_lines_start_with(lines.slice(1), '*')) {
            javadoc = true;
          } else if (each_line_matches_indent(lines.slice(1), lastIndent)) {
            starless = true;
          }
        } // first line always indented


        print_token(lines[0]);

        for (j = 1; j < lines.length; j++) {
          print_newline(false, true);

          if (javadoc) {
            // javadoc: reformat and re-indent
            print_token(" ".concat(ltrim(lines[j])));
          } else if (starless && lines[j].length > lastIndentLength) {
            // starless: re-indent non-empty content, avoiding trim
            print_token(lines[j].substring(lastIndentLength));
          } else {
            // normal comments output raw
            output.add_token(lines[j]);
          }
        } // for comments of more than one line, make sure there's a new line after


        print_newline(false, true);
      }

      function handle_comment() {
        if (current_token.wanted_newline) {
          print_newline(false, true);
        } else {
          output.trim(true);
        }

        output.space_before_token = true;
        print_token();
        print_newline(false, true);
      }

      function handle_dot() {
        if (start_of_statement()) ;

        if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
          output.space_before_token = true;
        } else {
          // allow preserved newlines before dots in general
          // force newlines on dots after close paren when break_chained - for bar().baz()
          allow_wrap_or_preserved_newline(flags.last_text === ')' && opt.break_chained_methods);
        }

        print_token();
      }

      function handle_unknown() {
        print_token();

        if (current_token.text[current_token.text.length - 1] === '\n') {
          print_newline();
        }
      }

      function handle_eof() {
        // Unwind any open statements
        while (flags.mode === MODE.Statement) {
          restore_mode();
        }
      }
    }

    function OutputLine(parent) {
      var _character_count = 0; // use indent_count as a marker for lines that have preserved indentation

      var _indent_count = -1;

      var _items = [];
      var _empty = true;

      this.set_indent = function (level) {
        _character_count = parent.baseIndentLength + level * parent.indent_length;
        _indent_count = level;
      };

      this.get_character_count = function () {
        return _character_count;
      };

      this.is_empty = function () {
        return _empty;
      };

      this.last = function () {
        if (!this._empty) {
          return _items[_items.length - 1];
        } else {
          return null;
        }
      };

      this.push = function (input) {
        _items.push(input);

        _character_count += input.length;
        _empty = false;
      };

      this.pop = function () {
        var item = null;

        if (!_empty) {
          item = _items.pop();
          _character_count -= item.length;
          _empty = _items.length === 0;
        }

        return item;
      };

      this.remove_indent = function () {
        if (_indent_count > 0) {
          _indent_count -= 1;
          _character_count -= parent.indent_length;
        }
      };

      this.trim = function () {
        while (this.last() === ' ') {
          _items.pop();

          _character_count -= 1;
        }

        _empty = _items.length === 0;
      };

      this.toString = function () {
        var result = '';

        if (!this._empty) {
          if (_indent_count >= 0) {
            result = parent.indent_cache[_indent_count];
          }

          result += _items.join('');
        }

        return result;
      };
    }

    function Output(indent_string, baseIndentString) {
      baseIndentString = baseIndentString || '';
      this.indent_cache = [baseIndentString];
      this.baseIndentLength = baseIndentString.length;
      this.indent_length = indent_string.length;
      this.raw = false;
      var lines = [];
      this.baseIndentString = baseIndentString;
      this.indent_string = indent_string;
      this.previous_line = null;
      this.current_line = null;
      this.space_before_token = false;

      this.add_outputline = function () {
        this.previous_line = this.current_line;
        this.current_line = new OutputLine(this);
        lines.push(this.current_line);
      }; // initialize


      this.add_outputline();

      this.get_line_number = function () {
        return lines.length;
      }; // Using object instead of string to allow for later expansion of info about each line


      this.add_new_line = function (force_newline) {
        if (this.get_line_number() === 1 && this.just_added_newline()) {
          return false; // no newline on start of file
        }

        if (force_newline || !this.just_added_newline()) {
          if (!this.raw) {
            this.add_outputline();
          }

          return true;
        }

        return false;
      };

      this.get_code = function () {
        var sweet_code = lines.join('\n').replace(/[\r\n\t ]+$/, '');
        return sweet_code;
      };

      this.set_indent = function (level) {
        // Never indent your first output indent at the start of the file
        if (lines.length > 1) {
          while (level >= this.indent_cache.length) {
            this.indent_cache.push(this.indent_cache[this.indent_cache.length - 1] + this.indent_string);
          }

          this.current_line.set_indent(level);
          return true;
        }

        this.current_line.set_indent(0);
        return false;
      };

      this.add_raw_token = function (token) {
        for (var x = 0; x < token.newlines; x++) {
          this.add_outputline();
        }

        this.current_line.push(token.whitespace_before);
        this.current_line.push(token.text);
        this.space_before_token = false;
      };

      this.add_token = function (printable_token) {
        this.add_space_before_token();
        this.current_line.push(printable_token);
      };

      this.add_space_before_token = function () {
        if (this.space_before_token && !this.just_added_newline()) {
          this.current_line.push(' ');
        }

        this.space_before_token = false;
      };

      this.remove_redundant_indentation = function (frame) {
        // This implementation is effective but has some issues:
        //     - can cause line wrap to happen too soon due to indent removal
        //           after wrap points are calculated
        // These issues are minor compared to ugly indentation.
        if (frame.multiline_frame || frame.mode === MODE.ForInitializer || frame.mode === MODE.Conditional) {
          return;
        } // remove one indent from each line inside this section


        var index = frame.start_line_index;
        var output_length = lines.length;

        while (index < output_length) {
          lines[index].remove_indent();
          index++;
        }
      };

      this.trim = function (eat_newlines) {
        eat_newlines = eat_newlines === undefined ? false : eat_newlines;
        this.current_line.trim(indent_string, baseIndentString);

        while (eat_newlines && lines.length > 1 && this.current_line.is_empty()) {
          lines.pop();
          this.current_line = lines[lines.length - 1];
          this.current_line.trim();
        }

        this.previous_line = lines.length > 1 ? lines[lines.length - 2] : null;
      };

      this.just_added_newline = function () {
        return this.current_line.is_empty();
      };

      this.just_added_blankline = function () {
        if (this.just_added_newline()) {
          if (lines.length === 1) {
            return true; // start of the file and newline = blank
          }

          var line = lines[lines.length - 2];
          return line.is_empty();
        }

        return false;
      };
    }

    var Token = function Token(type, text, newlines, whitespace_before, mode, parent) {
      this.type = type;
      this.text = text;
      this.comments_before = [];
      this.newlines = newlines || 0;
      this.wanted_newline = newlines > 0;
      this.whitespace_before = whitespace_before || '';
      this.parent = null;
      this.directives = null;
    };

    function tokenizer(input, opts, indent_string) {
      var whitespace = '\n\r\t '.split('');
      var digit = /[0-9]/;
      var digit_oct = /[01234567]/;
      var digit_hex = /[0123456789abcdefABCDEF]/;
      var punct = '+ - * / % & ++ -- = += -= *= /= %= == === != !== > < >= <= >> << >>> >>>= >>= <<= && &= | || ! ~ , : ? ^ ^= |= :: =>'.split(' '); // words which should always start on new line.

      this.line_starters = 'continue,try,throw,return,const,let,const,if,switch,case,default,for,while,break,function,import,export'.split(',');
      var reserved_words = this.line_starters.concat(['do', 'in', 'else', 'get', 'set', 'new', 'catch', 'finally', 'typeof', 'yield', 'async', 'await']); //  /* ... */ comment ends with nearest */ or end of file

      var block_comment_pattern = /([\s\S]*?)((?:\*\/)|$)/g; // comment ends just before nearest linefeed or end of file

      var comment_pattern = /([^\n\r\u2028\u2029]*)/g;
      var directives_block_pattern = /\/\* beautify( \w+[:]\w+)+ \*\//g;
      var directive_pattern = / (\w+)[:](\w+)/g;
      var directives_end_ignore_pattern = /([\s\S]*?)((?:\/\*\sbeautify\signore:end\s\*\/)|$)/g;
      var template_pattern = /((<\?php|<\?=)[\s\S]*?\?>)|(<%[\s\S]*?%>)/g;
      var n_newlines, whitespace_before_token, in_html_comment, tokens, parser_pos;
      var input_length;

      this.tokenize = function () {
        // cache the source's length.
        input_length = input.length;
        parser_pos = 0;
        in_html_comment = false;
        tokens = [];
        var next, last;
        var token_values;
        var open = null;
        var open_stack = [];
        var comments = [];

        while (!(last && last.type === 'TK_EOF')) {
          token_values = tokenize_next();
          next = new Token(token_values[1], token_values[0], n_newlines, whitespace_before_token);

          while (next.type === 'TK_COMMENT' || next.type === 'TK_BLOCK_COMMENT' || next.type === 'TK_UNKNOWN') {
            if (next.type === 'TK_BLOCK_COMMENT') {
              next.directives = token_values[2];
            }

            comments.push(next);
            token_values = tokenize_next();
            next = new Token(token_values[1], token_values[0], n_newlines, whitespace_before_token);
          }

          if (comments.length) {
            next.comments_before = comments;
            comments = [];
          }

          if (next.type === 'TK_START_BLOCK' || next.type === 'TK_START_EXPR') {
            next.parent = last;
            open_stack.push(open);
            open = next;
          } else if ((next.type === 'TK_END_BLOCK' || next.type === 'TK_END_EXPR') && open && (next.text === ']' && open.text === '[' || next.text === ')' && open.text === '(' || next.text === '}' && open.text === '{')) {
            next.parent = open.parent;
            open = open_stack.pop();
          }

          tokens.push(next);
          last = next;
        }

        return tokens;
      };

      function get_directives(text) {
        if (!text.match(directives_block_pattern)) {
          return null;
        }

        var directives = {};
        directive_pattern.lastIndex = 0;
        var directive_match = directive_pattern.exec(text);

        while (directive_match) {
          directives[directive_match[1]] = directive_match[2];
          directive_match = directive_pattern.exec(text);
        }

        return directives;
      }

      function tokenize_next() {
        var resulting_string;
        var whitespace_on_this_line = [];
        n_newlines = 0;
        whitespace_before_token = '';

        if (parser_pos >= input_length) {
          return ['', 'TK_EOF'];
        }

        var last_token;

        if (tokens.length) {
          last_token = tokens[tokens.length - 1];
        } else {
          // For the sake of tokenizing we can pretend that there was on open brace to start
          last_token = new Token('TK_START_BLOCK', '{');
        }

        var c = input.charAt(parser_pos);
        parser_pos += 1;

        while (in_array(c, whitespace)) {
          if (acorn.newline.test(c)) {
            if (!(c === '\n' && input.charAt(parser_pos - 2) === '\r')) {
              n_newlines += 1;
              whitespace_on_this_line = [];
            }
          } else {
            whitespace_on_this_line.push(c);
          }

          if (parser_pos >= input_length) {
            return ['', 'TK_EOF'];
          }

          c = input.charAt(parser_pos);
          parser_pos += 1;
        }

        if (whitespace_on_this_line.length) {
          whitespace_before_token = whitespace_on_this_line.join('');
        }

        if (digit.test(c)) {
          var allow_decimal = true;
          var allow_e = true;
          var local_digit = digit;

          if (c === '0' && parser_pos < input_length && /[Xxo]/.test(input.charAt(parser_pos))) {
            // switch to hex/oct number, no decimal or e, just hex/oct digits
            allow_decimal = false;
            allow_e = false;
            c += input.charAt(parser_pos);
            parser_pos += 1;
            local_digit = /[o]/.test(input.charAt(parser_pos)) ? digit_oct : digit_hex;
          } else {
            // we know this first loop will run.  It keeps the logic simpler.
            c = '';
            parser_pos -= 1;
          } // Add the digits


          while (parser_pos < input_length && local_digit.test(input.charAt(parser_pos))) {
            c += input.charAt(parser_pos);
            parser_pos += 1;

            if (allow_decimal && parser_pos < input_length && input.charAt(parser_pos) === '.') {
              c += input.charAt(parser_pos);
              parser_pos += 1;
              allow_decimal = false;
            }

            if (allow_e && parser_pos < input_length && /[Ee]/.test(input.charAt(parser_pos))) {
              c += input.charAt(parser_pos);
              parser_pos += 1;

              if (parser_pos < input_length && /[+-]/.test(input.charAt(parser_pos))) {
                c += input.charAt(parser_pos);
                parser_pos += 1;
              }

              allow_e = false;
              allow_decimal = false;
            }
          }

          return [c, 'TK_WORD'];
        }

        if (acorn.isIdentifierStart(input.charCodeAt(parser_pos - 1))) {
          if (parser_pos < input_length) {
            while (acorn.isIdentifierChar(input.charCodeAt(parser_pos))) {
              c += input.charAt(parser_pos);
              parser_pos += 1;

              if (parser_pos === input_length) {
                break;
              }
            }
          }

          if (!(last_token.type === 'TK_DOT' || last_token.type === 'TK_RESERVED' && in_array(last_token.text, ['set', 'get'])) && in_array(c, reserved_words)) {
            if (c === 'in') {
              // hack for 'in' operator
              return [c, 'TK_OPERATOR'];
            }

            return [c, 'TK_RESERVED'];
          }

          return [c, 'TK_WORD'];
        }

        if (c === '(' || c === '[') {
          return [c, 'TK_START_EXPR'];
        }

        if (c === ')' || c === ']') {
          return [c, 'TK_END_EXPR'];
        }

        if (c === '{') {
          return [c, 'TK_START_BLOCK'];
        }

        if (c === '}') {
          return [c, 'TK_END_BLOCK'];
        }

        if (c === ' ') {
          return [c, 'TK_SEMICOLON'];
        }

        if (c === '/') {
          var comment = ''; // peek for comment /* ... */

          if (input.charAt(parser_pos) === '*') {
            parser_pos += 1;
            block_comment_pattern.lastIndex = parser_pos;
            var comment_match = block_comment_pattern.exec(input);
            comment = "/*".concat(comment_match[0]);
            parser_pos += comment_match[0].length;
            var directives = get_directives(comment);

            if (directives && directives['ignore'] === 'start') {
              directives_end_ignore_pattern.lastIndex = parser_pos;
              comment_match = directives_end_ignore_pattern.exec(input);
              comment += comment_match[0];
              parser_pos += comment_match[0].length;
            }

            comment = comment.replace(acorn.lineBreak, '\n');
            return [comment, 'TK_BLOCK_COMMENT', directives];
          } // peek for comment // ...


          if (input.charAt(parser_pos) === '/') {
            parser_pos += 1;
            comment_pattern.lastIndex = parser_pos;

            var _comment_match = comment_pattern.exec(input);

            comment = "//".concat(_comment_match[0]);
            parser_pos += _comment_match[0].length;
            return [comment, 'TK_COMMENT'];
          }
        }

        if (c === '`' || c === '\'' || c === '"' || // string
        (c === '/' || // regexp
        opts.e4x && c === '<' && input.slice(parser_pos - 1).match(/^<([-a-zA-Z:0-9_.]+|{[^{}]*}|!\[CDATA\[[\s\S]*?\]\])(\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{.*?}))*\s*(\/?)\s*>/) // xml
        ) && ( // regex and xml can only appear in specific locations during parsing
        last_token.type === 'TK_RESERVED' && in_array(last_token.text, ['return', 'case', 'throw', 'else', 'do', 'typeof', 'yield']) || last_token.type === 'TK_END_EXPR' && last_token.text === ')' && last_token.parent && last_token.parent.type === 'TK_RESERVED' && in_array(last_token.parent.text, ['if', 'while', 'for']) || in_array(last_token.type, ['TK_COMMENT', 'TK_START_EXPR', 'TK_START_BLOCK', 'TK_END_BLOCK', 'TK_OPERATOR', 'TK_EQUALS', 'TK_EOF', 'TK_SEMICOLON', 'TK_COMMA']))) {
          var sep = c,
              esc = false,
              has_char_escapes = false;
          resulting_string = c;

          if (sep === '/') {
            //
            // handle regexp
            //
            var in_char_class = false;

            while (parser_pos < input_length && (esc || in_char_class || input.charAt(parser_pos) !== sep) && !acorn.newline.test(input.charAt(parser_pos))) {
              resulting_string += input.charAt(parser_pos);

              if (!esc) {
                esc = input.charAt(parser_pos) === '\\';

                if (input.charAt(parser_pos) === '[') {
                  in_char_class = true;
                } else if (input.charAt(parser_pos) === ']') {
                  in_char_class = false;
                }
              } else {
                esc = false;
              }

              parser_pos += 1;
            }
          } else if (opts.e4x && sep === '<') {
            //
            // handle e4x xml literals
            //
            var xmlRegExp = /<(\/?)([-a-zA-Z:0-9_.]+|{[^{}]*}|!\[CDATA\[[\s\S]*?\]\])(\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{.*?}))*\s*(\/?)\s*>/g;
            var xmlStr = input.slice(parser_pos - 1);
            var match = xmlRegExp.exec(xmlStr);

            if (match && match.index === 0) {
              var rootTag = match[2];
              var depth = 0;

              while (match) {
                var isEndTag = !!match[1];
                var tagName = match[2];
                var isSingletonTag = !!match[match.length - 1] || tagName.slice(0, 8) === '![CDATA[';

                if (tagName === rootTag && !isSingletonTag) {
                  if (isEndTag) {
                    --depth;
                  } else {
                    ++depth;
                  }
                }

                if (depth <= 0) {
                  break;
                }

                match = xmlRegExp.exec(xmlStr);
              }

              var xmlLength = match ? match.index + match[0].length : xmlStr.length;
              xmlStr = xmlStr.slice(0, xmlLength);
              parser_pos += xmlLength - 1;
              xmlStr = xmlStr.replace(acorn.lineBreak, '\n');
              return [xmlStr, 'TK_STRING'];
            }
          } else {
            //
            // handle string
            //
            // Template strings can travers lines without escape characters.
            // Other strings cannot
            while (parser_pos < input_length && (esc || input.charAt(parser_pos) !== sep && (sep === '`' || !acorn.newline.test(input.charAt(parser_pos))))) {
              // Handle \r\n linebreaks after escapes or in template strings
              if ((esc || sep === '`') && acorn.newline.test(input.charAt(parser_pos))) {
                if (input.charAt(parser_pos) === '\r' && input.charAt(parser_pos + 1) === '\n') {
                  parser_pos += 1;
                }

                resulting_string += '\n';
              } else {
                resulting_string += input.charAt(parser_pos);
              }

              if (esc) {
                if (input.charAt(parser_pos) === 'x' || input.charAt(parser_pos) === 'u') {
                  has_char_escapes = true;
                }

                esc = false;
              } else {
                esc = input.charAt(parser_pos) === '\\';
              }

              parser_pos += 1;
            }
          }

          if (has_char_escapes && opts.unescape_strings) {
            resulting_string = unescape_string(resulting_string);
          }

          if (parser_pos < input_length && input.charAt(parser_pos) === sep) {
            resulting_string += sep;
            parser_pos += 1;

            if (sep === '/') {
              // regexps may have modifiers /regexp/MOD , so fetch those, too
              // Only [gim] are valid, but if the user puts in garbage, do what we can to take it.
              while (parser_pos < input_length && acorn.isIdentifierStart(input.charCodeAt(parser_pos))) {
                resulting_string += input.charAt(parser_pos);
                parser_pos += 1;
              }
            }
          }

          return [resulting_string, 'TK_STRING'];
        }

        if (c === '#') {
          if (tokens.length === 0 && input.charAt(parser_pos) === '!') {
            // shebang
            resulting_string = c;

            while (parser_pos < input_length && c !== '\n') {
              c = input.charAt(parser_pos);
              resulting_string += c;
              parser_pos += 1;
            }

            return ["".concat(trim(resulting_string), "\n"), 'TK_UNKNOWN'];
          } // Spidermonkey-specific sharp variables for circular references
          // https://developer.mozilla.org/En/Sharp_variables_in_JavaScript
          // http://mxr.mozilla.org/mozilla-central/source/js/src/jsscan.cpp around line 1935


          var sharp = '#';

          if (parser_pos < input_length && digit.test(input.charAt(parser_pos))) {
            do {
              c = input.charAt(parser_pos);
              sharp += c;
              parser_pos += 1;
            } while (parser_pos < input_length && c !== '#' && c !== '=');

            if (c === '#') ; else if (input.charAt(parser_pos) === '[' && input.charAt(parser_pos + 1) === ']') {
              sharp += '[]';
              parser_pos += 2;
            } else if (input.charAt(parser_pos) === '{' && input.charAt(parser_pos + 1) === '}') {
              sharp += '{}';
              parser_pos += 2;
            }

            return [sharp, 'TK_WORD'];
          }
        }

        if (c === '<' && (input.charAt(parser_pos) === '?' || input.charAt(parser_pos) === '%')) {
          template_pattern.lastIndex = parser_pos - 1;
          var template_match = template_pattern.exec(input);

          if (template_match) {
            c = template_match[0];
            parser_pos += c.length - 1;
            c = c.replace(acorn.lineBreak, '\n');
            return [c, 'TK_STRING'];
          }
        }

        if (c === '<' && input.substring(parser_pos - 1, parser_pos + 3) === '<!--') {
          parser_pos += 3;
          c = '<!--';

          while (!acorn.newline.test(input.charAt(parser_pos)) && parser_pos < input_length) {
            c += input.charAt(parser_pos);
            parser_pos++;
          }

          in_html_comment = true;
          return [c, 'TK_COMMENT'];
        }

        if (c === '-' && in_html_comment && input.substring(parser_pos - 1, parser_pos + 2) === '-->') {
          in_html_comment = false;
          parser_pos += 2;
          return ['-->', 'TK_COMMENT'];
        }

        if (c === '.') {
          return [c, 'TK_DOT'];
        }

        if (in_array(c, punct)) {
          while (parser_pos < input_length && in_array(c + input.charAt(parser_pos), punct)) {
            c += input.charAt(parser_pos);
            parser_pos += 1;

            if (parser_pos >= input_length) {
              break;
            }
          }

          if (c === ',') {
            return [c, 'TK_COMMA'];
          } else if (c === '=') {
            return [c, 'TK_EQUALS'];
          } else {
            return [c, 'TK_OPERATOR'];
          }
        }

        return [c, 'TK_UNKNOWN'];
      }

      function unescape_string(s) {
        var esc = false,
            out = '',
            pos = 0,
            s_hex = '',
            escaped = 0,
            c;

        while (esc || pos < s.length) {
          c = s.charAt(pos);
          pos++;

          if (esc) {
            esc = false;

            if (c === 'x') {
              // simple hex-escape \x24
              s_hex = s.substr(pos, 2);
              pos += 2;
            } else if (c === 'u') {
              // unicode-escape, \u2134
              s_hex = s.substr(pos, 4);
              pos += 4;
            } else {
              // some common escape, e.g \n
              out += "\\".concat(c);
              continue;
            }

            if (!s_hex.match(/^[0123456789abcdefABCDEF]+$/)) {
              // some weird escaping, bail out,
              // leaving whole string intact
              return s;
            }

            escaped = parseInt(s_hex, 16);

            if (escaped >= 0x00 && escaped < 0x20) {
              // leave 0x00...0x1f escaped
              if (c === 'x') {
                out += "\\x".concat(s_hex);
              } else {
                out += "\\u".concat(s_hex);
              }

              continue;
            } else if (escaped === 0x22 || escaped === 0x27 || escaped === 0x5c) {
              // single-quote, apostrophe, backslash - escape these
              out += "\\".concat(String.fromCharCode(escaped));
            } else if (c === 'x' && escaped > 0x7e && escaped <= 0xff) {
              // we bail out on \x7f..\xff,
              // leaving whole string escaped,
              // as it's probably completely binary
              return s;
            } else {
              out += String.fromCharCode(escaped);
            }
          } else if (c === '\\') {
            esc = true;
          } else {
            out += c;
          }
        }

        return out;
      }
    }

    return {
      run: run
    };
    /* jshint ignore:end */

    /* jscs:enable */
  };

})));
//# sourceMappingURL=code_beautifier.js.map
