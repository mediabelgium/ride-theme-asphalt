var rideApp=rideApp||{};rideApp.assets=function(a,b){var c=a(document),d=(a(window),a("html"),a("body"),function(){parent.rideApp.form.assets.resizeIframe(parent,c.height()),c.on("click",".preview.is-addable",function(b){b.preventDefault();var c=a(this),d=c.parent(),e=d.data("id"),f=a.trim(d.find(".name").text()),g=d.find(".image").attr("src");c.toggleClass("is-selected"),parent.rideApp.form.assets.addAsset(e,f,g)})});return{initialize:d}}(jQuery),rideApp.assets.initialize();