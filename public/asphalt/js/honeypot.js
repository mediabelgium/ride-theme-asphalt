function findAncestor(a,b){for(;(a=a.parentElement)&&!a.classList.contains(b););return a}$.fn.honeyPot=function(a){var b=$(this);$(a.fields).each(function(a,c){var d=$('input[name*="['+c+']"]',b);if(0!==d.length){var e=d.data("value");e&&d.val(e),d.parents(".form__item").hide()}}),b.on("submit",function(){var c="";$(a.fields).each(function(a,d){var e=$('input[name*="['+d+']"]',b),f=e.val();f=""===f?d:d+":"+f,c+=(""===c?"":",")+f}),$('input[name*="[honeypot-submit]"]',b).val(c)})};var rideApp=rideApp||{};