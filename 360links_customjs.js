//JS for customizing the new 360 links sidebar
//Jquery is already loaded with the page, watchout $ is actually Prototype

//mobile check
window.isMobile = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

//Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

(function() {
  //frame buster stops automatically removing sidebar
  if (window.location.search.toLowerCase().indexOf('newui') === -1) {
    var prevent_bust = 0;
    window.onbeforeunload = function() {
      prevent_bust++;
    }
    var frameBusterBuster;
    function startBuster() {
	  console.log(2);
      frameBusterBuster = setInterval(function() {
        if (prevent_bust > 0) {
        prevent_bust -= 3;
        window.top.location = 'http://library2.fairfield.edu/tests/204.php';
        jQuery('#next-source').removeAttr('disabled');
          jQuery('#iframeOverlay').hide();
        }
      }, 1);
    };
    function stopBuster() {
      setTimeout(function() {
        clearInterval(frameBusterBuster);
      }, 2500);
    }
	if (window.location.search.toLowerCase().indexOf('newui') === -1 && jQuery('.custom-links-rectangle:contains("Sorry")').length === 0) {
      startBuster();
	}
  }

  var iframe = document.getElementById('website');
  if (iframe) {
    iframe.onload = function() {
      jQuery('#next-source').removeAttr('disabled');
      jQuery('#iframeOverlay').hide();
      stopBuster();
    };
  }

//library help
jQuery("div.chat").html("<h4>Ask a Librarian</h4><div class='needs-js'>Loading Ask a Librarian Chat</div>");
(function() {
	var x = document.createElement("script"); x.type = "text/javascript"; x.async = true;
	x.src = (document.location.protocol === "https:" ? "https://" : "http://") + "libraryh3lp.com/js/libraryh3lp.js?1096"
	var y = document.getElementsByTagName("script")[0]; y.parentNode.insertBefore(x, y);
 })();

jQuery(document).ready(function() {
  //standardize parameters from URL
	var params = {};
	window.location.search.substr(1).split('&').forEach(function(a) {
		var param = a.split('=');
		params[param[0].replace('rft.', '')] = decodeURIComponent(param[1]);
	});
  //scripts for sidebar
	if (window.location.search.toLowerCase().indexOf('newui') === -1  && jQuery('.custom-links-rectangle:contains("Sorry")').length === 0 && !isMobile()) {
      ga('create', 'UA-18832309-14', 'auto');
      ga('send', 'pageview');
	     jQuery('.title').css('margin', '0');
		  jQuery('.actions, .additional-options').hide();
		  
		 //make the x sign actually reload the page without frame, the normal behavior is just hide the sidebar - no kidding!
		 //remove the default listener
		 jQuery("div.breakout").off("click");
		 jQuery("div.breakout").on("click", function(){
			//get the iframe URL and go
			var actualUrl = jQuery("iframe#website").attr("src");
			document.location.href = actualUrl;
		 });
		 
		 //custom next source changer
			function addParamsAndReload(paramsObject) {
				var url = location.href;
				jQuery.each( paramsObject, function( key, value ) {
					if (url.indexOf(key) > 0) {
						url = url.replace(new RegExp(key + "=[^&]+", ""), key + "=" + value);
					} else {
						if (url.indexOf("?") > 0) {
							url = url + "&" + key + "=" + value;
						}
						else {
							url = url + "?" + key + "=" + value;
						}
					}
				});
				window.open(url, "_blank");
			}
			
			jQuery('#ulrichs-header').hide();
			jQuery('#source-menu-header').parent().hide();
			jQuery('#source').text('Source: ' + jQuery('#source').text());
			jQuery('.chat').after('<button type="button" class="btn btn-link all-sources not-all-viewed">View All Sources &amp; Additional Options</button>');
			jQuery('body').on('click', '.all-sources', function(event) {
				event.preventDefault();
				ga('send', 'event', 'additional-options', 'click');
				var paramsObject = {
					"newUI": "1clickoff"
				};
				if (!jQuery(event.currentTarget).hasClass('not-all-viewed')) {
				  paramsObject.viewedAll = true;
				}
				addParamsAndReload(paramsObject);
			});
      
			function browseJournal() {
			  if (jQuery('.alert.alert-success')[0]) {
			    return;
		      }
  			  jQuery('.citation-data .row-fluid:contains("Volume") div').wrap('<strong>');
			  jQuery('.inner .row-fluid.section').eq(0).prepend('<div id="browse-directions" class="alert alert-info">Try searching for the title in the journal on the left or look for the volume and issue in the journal to find your article</div>');
			  jQuery('#browse-directions').siblings().wrapAll('<div class="alert alert-success">');
			  jQuery('#source-directions').hide();
			}
			jQuery('#browse-link a').addClass('btn btn-small').on('click', browseJournal);
			var choice = 1;
			if (jQuery('#linksToContent option:enabled[data-link-type="Book"]').length !== 0) {
			  choice = 2;
			}
			var allSources = function() {
				if (choices === 0) {
				    jQuery('#source-count').text('All Sources Tried');
					jQuery('#next-source').hide().after('<button type="button" class="btn btn-primary all-sources">View All Sources</button>');
				 }
			};
      //iframe loading overlay
			jQuery('#iframeContainer').prepend('<div id="iframeOverlay" style="display:none;position:absolute;height:100%;width:100%;background:rgba(200,200,200,0.7)"><span class="icon icon-spinner icon-spin icon-2x" style="position:absolute;left:50%;top:50%;"></span></div>');
      
      //remove duplicate openurl resolvers
			var sources = [];
			jQuery('#linksToContent option[data-link-type="Article"]').each(function() {
			  var source = jQuery(this).val();
			  source = source.substr(source.indexOf('url%3D') + 6, source.indexOf('%2F', source.indexOf('url%3D') + 17) - source.indexOf('url%3D') - 6);
			  source = decodeURIComponent(source);
			  if (sources.indexOf(source) !== -1) {
				jQuery(this).remove();
			  } else {
				sources.push(source);
			  }
			});
			var choices = jQuery('#linksToContent option:enabled[data-link-type="Article"], #linksToContent option:enabled[data-link-type="Book"]').length - 1;
			if (choices < 0) {
			  choices = 0;
			}
			if (jQuery('#linksToContent option.selected-resource').data('linkType') === 'Journal') {
			  var text = '';
			  if (jQuery('#linksToContent option.selected-resource').text() .indexOf('Print') === -1) {
			    jQuery('.citation-data .row-fluid:contains("Volume") div').wrap('<strong>');
				text = 'We cannot link you directly to the article, but it should be available in this journal.</div><div style="padding:10px;margin-bottom:5px;" class="well">Try searching for the title in the journal on the left or look for the volume and issue in the journal to find your article';
		      } else {
			    text = 'This article is not available online, you can still access it in our print journal holdings.';
			  }
			  if (params.atitle !== undefined) {
			    jQuery('.inner .row-fluid.section').eq(0).append('<div id="source-directions" class="alert alert-info">' + text + '</div>');
			  }
			} else {
			  jQuery('#source-control').parent().wrap('<div class="text-center">');
			  jQuery('#source-control').children('span:not(#source)').remove();
			  if (choices > 0) {
			    jQuery('#source-control').parent().prepend('<div id="source-directions" class="alert alert-info" style="margin-bottom:3px;">Article not working? Try a different source.</div>');
				jQuery('#source-control').after('<div></div><div id="source-count">Sources not tried: <span id="unused-sources"></span></div><button id="next-source" class="btn btn-primary btn-large" type="button">Try Next Source</button><hr style="margin:0.5em;"/>');
			  } else {
			    jQuery('#source-control').parent().prepend('<div id="source-directions" class="alert alert-info" style="margin-bottom:3px;">If the article is not appearing, try browsing the journal.</div>');
				jQuery('#source-control').after('<div></div><button id="next-source" class="btn btn-primary btn-large" type="button">Try Next Source</button><hr style="margin:0.5em;"/>');
			  }
			}
			allSources();
			jQuery('#unused-sources').text(choices);
			jQuery('#next-source').click(function() {
			  if (jQuery('.alert.alert-success')[0]) {
			    jQuery('.alert.alert-success')[0].outerHTML = jQuery('.alert.alert-success').html();
		      }
			  jQuery('#browse-directions').remove();
			  jQuery('#source-directions').show();
			  jQuery('#next-source').attr('disabled', 'disabled');
			  startBuster();
			  jQuery('#iframeOverlay').show();
			  choice++;
			  choices--;
			  jQuery('#linksToContent').val(jQuery('#linksToContent option').eq(choice).val()).change();
			  jQuery('#unused-sources').text(choices);
			  jQuery('#source').text('Source: ' + jQuery('#source').text());
			  jQuery('#browse-link a').addClass('btn btn-small').on('click', browseJournal);
			  ga('send', 'event', 'databaseOpened', decodeURIComponent(jQuery('iframe').first().attr('src')), window.location.href);
			  allSources();
			});

		 //track changing sources
		 jQuery('#linksToContent').on('change', function() {
		   ga('send', 'event', 'change_source', jQuery('#linksToContent .selected-resource').text().trim(), jQuery('#linksToContent .selected-resource').val());
		 });
		 //make it work with the old style link with param SS_PostParamDict=disableOneClick - so it goes to the normal details page
		 if(window.location.search.indexOf("SS_PostParamDict=disableOneClick") !== -1 && window.location.search.indexOf('newUI=1clickoff') === -1) { 
			//if has this param in the URL
			//just form a new URL - the new 360 links also needs the NewUI param to be 1clickoff to show the detail page
			if (window.location.search.indexOf('newUI=false') === -1) {
			  console.log(1);
			  window.onbeforeunload = function() {};
			  window.location = window.location + "&newUI=1clickoff";
			} else {
			  window.onbeforeunload = function() {};
			  window.location = (window.location + '').replace('&newUI=false', '&newUI=1clickoff');
			}
		 }
		 
		 //track database request
		 ga('send', 'event', 'databaseOpened', decodeURIComponent(jQuery('iframe').first().attr('src')), window.location.href);
		 
		 //style
		 jQuery('#source-directions').css({marginTop:'10px', marginBottom: '10px'});
		 jQuery('#custom-links-control').click();
		 jQuery('#browse-journal-message').hide();
		 jQuery('#source-control').click();
		 jQuery('head').append('<style>.report-problem-form{position:static!important}</style>');
	} else {
		//scripts for full sources page
		ga('create', 'UA-18832309-13', 'auto');
		ga('send', 'pageview');
		 if (jQuery('.custom-links-rectangle:contains("Sorry")').length > 0) {
		  ga('send', 'event', 'no_results', window.location);
		 }
		//library help
		jQuery('#mobile-action-page').append("<center><h4>Ask a Librarian</h4><div class='needs-js'>Loading Ask a Librarian Chat</div></center>");
		(function() {
		  var x = document.createElement("script"); x.type = "text/javascript"; x.async = true;
		  x.src = (document.location.protocol === "https:" ? "https://" : "http://") + "libraryh3lp.com/js/libraryh3lp.js?1096"
		  var y = document.getElementsByTagName("script")[0]; y.parentNode.insertBefore(x, y);
		 })();
		 setTimeout(function() {
		   jQuery('.libraryh3lp iframe')[0].style.setProperty('width', '280px', 'important');
		 }, 1000);
     
		jQuery('#show-more-options').click();
		//add google scholar link
		console.log(params);
		if (params.genre === 'article' && params.atitle) {
			var googleScholar = 'https://scholar.google.com/scholar?q=&quot;' + params.atitle.replace(/%20/g,'+') + '&quot;';
			var link = '<div class="resource-row"><h3>Search External Sources</h3><a target="_blank" class="full-text-link" href="' + googleScholar + '">Search for article on Google Scholar</a></div>';
			if (jQuery('#more-options').length !== 0) {
			  jQuery('#more-options').after(link);
			} else {
			  jQuery('.custom-links').before(link);
			}
		 } else if (params.genre === 'book' || params.genre === 'book item') {
		 //add catalog search link for books
			var catalog;
			if (params.isbn) {
				catalog = 'http://libcat.fairfield.edu/search/c?SEARCH=' + params.isbn + '&amp;sortdropdown=-&searchscope=1';
			} else {
				catalog = 'http://libcat.fairfield.edu/search~S1/X?t:(&quot;' + params.title.replace(/%20/g,'+') + '&quot;~5)&amp;searchscope=1&amp;SORT=D';
			}
			jQuery('#more-options').after('<div class="resource-row"><a target="_blank" class="full-text-link" href="' + catalog + '">Search for book in catalog</a></div>');
		 }
		 
		 //style the page
		 setTimeout(function() {jQuery('.link-details').addClass('pull-right').css({display: 'block'}).children('a').css({fontWeight:'bold'});}, 100);
		 jQuery('.resource-row').addClass('row').filter(':not(:last-of-type)').css('border-bottom', '1px dashed #ccc');
		 jQuery('.resource-description-text, .resource-description-button').css({display: 'inline'});
		 jQuery('.link-details-control').remove();
		 jQuery('a:contains("Full Text Online")').addClass('pull-left');
		 if (jQuery('.single-results .resource-row a').text().indexOf('Browse') !== 0) {
		   var text = '';
		   if (params.viewedAll) {
		     text = '<div class="alert alert-info">All direct article links have been tried.  You can <strong>browse journals</strong> for your article or try an external source.</div>';
		   }
		   jQuery('.single-results').prepend('<h4>These links should bring you directly to the article</h4>' + text);
		 } else {
		   jQuery('.single-results').prepend('<h4>We cannot link you directly to articles in these sources.  Try searching for the title in the journal or look for the volume and issue in the journal to find your article.</h4>').find('br').eq(0).remove();
		   jQuery('.journal-section').remove();
		 }
		 jQuery('.hide').removeClass('hide').hide();
		 if (jQuery('#more-options').length !== 0) {
		   jQuery('.resource-row:contains("Browse")').last().after('<hr/>');
		 }
		 jQuery('link[href="./alEJPStatic/css/bootstrap.min.css"]').remove();
		 jQuery('.span8').addClass('col-sm-8');
		 jQuery('.span4').addClass('col-sm-4');
		 jQuery('.sticky-row').removeClass('sticky-row');
		 jQuery('.actions.btn-group').remove();
		 jQuery('.full-text-link:contains("Full Text Online"), .full-text-link:contains("Read Book Online")').addClass('btn btn-large btn-primary').removeClass('full-text-link');
		 jQuery('#custom-links-control').css({display:'inline'});
	}
});

}());