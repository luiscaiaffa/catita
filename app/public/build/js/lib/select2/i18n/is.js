!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var n=jQuery.fn.select2.amd;return n.define("select2/i18n/is",[],function(){return{inputTooLong:function(n){var e=n.input.length-n.maximum,t="Vinsamlegast styttið texta um "+e+" staf";return e<=1?t:t+"i"},inputTooShort:function(n){var e=n.minimum-n.input.length,t="Vinsamlegast skrifið "+e+" staf";return e>1&&(t+="i"),t+=" í viðbót"},loadingMore:function(){return"Sæki fleiri niðurstöður…"},maximumSelected:function(n){return"Þú getur aðeins valið "+n.maximum+" atriði"},noResults:function(){return"Ekkert fannst"},searching:function(){return"Leita…"}}}),{define:n.define,require:n.require}}();