/*
HTTP Host: static.ak.fbcdn.net
Generated: November 8th 2010 3:08:51 PM PDT
Machine: 10.30.148.190
*/

((location=='about:blank'&&(window.parent.eval_global||window.parent.eval))||(window.eval_global||window.eval))("if (window.CavalryLogger) { CavalryLogger.start_js([\"js\\\/eqzx4see9o0s0ogs.pkg.js\"]); }\n\nvar LiveTimer={restart:function(a){this.serverTime=a;this.localStartTime=new Date().getTime()\/1000;this.updateTimeStamps();},updateTimeStamps:function(){LiveTimer.timestamps=DOM.scry(document.body,'abbr.timestamp');LiveTimer.startLoop(20000);},addTimeStamps:function(a){if(!a||!LiveTimer.timestamps)return;var c=DOM.scry(a,'abbr.timestamp');for(var b=0;b<c.length;++b)LiveTimer.timestamps.push(c[b]);LiveTimer.startLoop(0);},startLoop:function(a){this.stop();this.timeout=setTimeout(function(){LiveTimer.loop();},a);},stop:function(){clearTimeout(this.timeout);},updateNode:function(a,b){LiveTimer.updateNode=(ua.ie()<7)?function(c,d){c.nextSibling.nodeValue=d;}:function(c,d){c.firstChild.nodeValue=d;};LiveTimer.updateNode(a,b);},loop:function(d){if(d)LiveTimer.updateTimeStamps();var c=Math.floor(new Date().getTime()\/1000-LiveTimer.localStartTime);var a=-1;LiveTimer.timestamps.each(function(g){var f=+new Date(g.getAttribute('data-date'))\/1000;var e=LiveTimer.renderRelativeTime(LiveTimer.serverTime+c,f);if(e.text)LiveTimer.updateNode(g,e.text);if(e.next!=-1&&(e.next<a||a==-1))a=e.next;});if(a!=-1){var b=Math.max(20000,a*1000);LiveTimer.timeout=setTimeout(function(){LiveTimer.loop();},b);}},renderRelativeTime:function(c,d){var e={text:\"\",next:-1};if(c-d>(12*3600)||(new Date(c*1000).getDay()!=new Date(d*1000).getDay()))return e;var f=c-d,b=Math.floor(f\/60),a=Math.floor(b\/60);if(b<1){e.text=_tx(\"a few seconds ago\");e.next=60-f%60;return e;}if(a<1){if(b==1){e.text=_tx(\"about a minute ago\");}else e.text=_tx(\"{number} minutes ago\",{number:b});e.next=60-f%60;return e;}if(a!=11)e.next=3600-f%3600;if(a==1){e.text=_tx(\"about an hour ago\");return e;}e.text=_tx(\"{number} hours ago\",{number:a});return e;}};\nvar PopupResizer={_opts:{allowShrink:true,timeout:100},init:function(a){copy_properties(PopupResizer._opts,a);PopupResizer._resizeCheck.recur(PopupResizer._opts.timeout);},_resizeCheck:function(){var e=Vector2.getViewportDimensions(),a=PopupResizer._getDocumentSize(),c=a.y-e.y,d=a.x-e.x;if(d<0)d=0;if(!PopupResizer._opts.allowShrink&&c<0)c=0;if(c||d)try{window.resizeBy(d,c);if(d)window.moveBy(d\/-2,0);}catch(b){}},_getDocumentSize:function(){var a={x:ua.firefox()?document.documentElement.scrollWidth:document.body.scrollWidth,y:document.body.scrollHeight};if(a.x<=0||a.x>document.documentElement.scrollWidth)a.x=document.documentElement.scrollWidth;if(a.y<=0||a.y>document.documentElement.scrollHeight)a.y=document.documentElement.scrollHeight;if(window.Dialog&&Dialog.max_bottom&&Dialog.max_bottom>a.y)a.y=Dialog.max_bottom;return a;},open:function(i,b,j){var f=typeof window.screenX!='undefined'?window.screenX:window.screenLeft,g=typeof window.screenY!='undefined'?window.screenY:window.screenTop,e=typeof window.outerWidth!='undefined'?window.outerWidth:document.body.clientWidth,d=typeof window.outerHeight!='undefined'?window.outerHeight:(document.body.clientHeight-22),c=parseInt(f+((e-j)\/2),10),h=parseInt(g+((d-b)\/2.5),10),a=('width='+j+',height='+b+',left='+c+',top='+h);return window.open(i,'_blank',a);}};\nWindowComm={_callbacks:{},makeHandler:function(a,c){c=c||'opener';var b='f'+(Math.random()*(1<<30)).toString(16).replace('.','');WindowComm._callbacks[b]=a;return new URI('\/connect\/window_comm.php').setQueryData({_id:b,_relation:c}).getQualifiedURI().toString();},_recv:function(b){var a=new URI(b).getQueryData();WindowComm._callbacks[a._id](a);}};\nfunction ConnectSocialWidget(a,b){ConnectSocialWidget.setInstance(b,this);ConnectSocialWidget.delayUntilDisplayed(function(){this.initializeObject.call(this,a,b);}.bind(this));}copy_properties(ConnectSocialWidget,{OPT_IN_FACEBOOK_APP_ID:'127760087237610',TYPE_ACTIVITY:'A',TYPE_RECOMMENDATIONS:'R',TYPE_POLL:'P',TYPE_LIKEBOX:'L',instances:{},setInstance:function(b,a){ConnectSocialWidget.instances[b]=a;},getInstance:function(a){return ConnectSocialWidget.instances[a];},popups:{},login:function(a,b){ConnectSocialWidget.popups[b]={};uri=new URI('\/connect\/uiserver.php');uri.setQueryData({api_key:ConnectSocialWidget.OPT_IN_FACEBOOK_APP_ID,social_plugin:'social_plugin',display:'popup',method:'opt.in'});ConnectSocialWidget.popups[b].popup=PopupResizer.open(uri.toString(),420,450);},aDelayedFunctions:[],delayUntilDisplayed:function(a){ConnectSocialWidget.aDelayedFunctions.push(a);if(ConnectSocialWidget.aDelayedFunctions.length===1){if(!ConnectSocialWidget.ndTestDim){var b=document.createElement('div'),c={position:'absolute',width:'1px',height:'1px',visibility:'hidden',overflow:'hidden',top:'0px'};for(var d in c)if(typeof c[d]==='string')CSS.setStyle(b,d,c[d]);document.body.appendChild(b);ConnectSocialWidget.ndTestDim=b;}ConnectSocialWidget.testForDisplay();}},testForDisplay:function(){var a=Vector2.getElementDimensions(ConnectSocialWidget.ndTestDim).y;if(a!==0){ConnectSocialWidget.aDelayedFunctions.forEach(function(b){b();});ConnectSocialWidget.aDelayedFunctions=[];}else ConnectSocialWidget.testForDisplay.defer(100);},listenForLogin:function(){if(!ConnectSocialWidget.listenerAttached){Arbiter.subscribe('platform\/socialplugins\/login',function(a){if(a.user!==Env.user)document.location.reload();});ConnectSocialWidget.listenerAttached=true;}}});copy_properties(ConnectSocialWidget.prototype,{initializeObject:function(e,g){var d=DOM.scry(document.body,e.sOverflowContainerSelector)[0],c=DOM.scry(d,'.fbConnectWidgetFooter')[0],a=c?Vector2.getElementDimensions(c).y:0,f=e.sOverflowItemsSelector,b=DOM.scry(document.body,e.sStreamContainerSelector)[0];this.fRemoveOverflowElements=this.removeOverflowElements.bind(this,d,b,f,-a);copy_properties(this,{bInitialized:true,sWidgetId:g,iFooterHeight:a,ndTop:d,ndFooter:c,ndContentContainer:b,oQueryParams:new URI(window.location.href).getQueryData(),bComboMode:e.bComboMode,sOverflowItemsSelector:f});copy_properties(this.oQueryParams,{post_form_id:Env.post_form_id,user:Env.user});this.fRemoveOverflowElements();CSS.setStyle(b,'visibility','visible');animation(b).from('opacity',0).to('opacity',1).duration(200).go();ConnectSocialWidget.listenForLogin();new ClickThroughMonitor({ndTop:this.ndContentContainer,fValidateLink:this.getElementTop.bind(this),fGetMonitorData:function(h){var i={site:this.oQueryParams.site,type:this.getLinkType(),plugin:this.getPluginType(),social:(DOM.scry(h,'^div.fbSocial').length>0),pos:this.getItemPosition(this.getElementTop(h)),signature:this.getItemSignature(this.getElementTop(h))};if(this.oQueryParams.api_key)i.api_key=this.oQueryParams.api_key;return i;}.bind(this)});},getElementTop:function(b){var a=DOM.scry(b,'^'+this.sOverflowItemsSelector);return a[0];},getItemPosition:function(d){var a=DOM.scry(this.ndContentContainer,this.sOverflowItemsSelector),c=a.length,b=a.indexOf(d)+1;return b+'\/'+c;},getItemSignature:function(c){var a=c.className.split(' ');for(var b=0;b<a.length;b++)if(a[b].startsWith(\"RES_\"))return a[b].substring(4);return '';},removeOverflowElements:function(h,g,i,d,e){var f,a=i?DOM.scry(g,i):$A(g.childNodes);if(!e){var d=d||0,b=Vector2.getElementDimensions(h).y+d,c=Vector2.getElementPosition(h).y;e=b+c;}while(a.length>0&&(f=$(a.pop()))&&(Vector2.getElementDimensions(f).y+Vector2.getElementPosition(f).y)>e)DOM.remove(f);},login:function(){ConnectSocialWidget.login(this.appID,this.sWidgetId);},toggleLogin:function(){DOM.scry(this.ndTop,'.fbToggleLogin').forEach(function(a){CSS.toggle(a);});this.fRemoveOverflowElements();}});function ActivityWidget(a,b){this.parent.construct(this,a,b);}ActivityWidget.extend('ConnectSocialWidget');ActivityWidget.ENDPOINT='\/ajax\/connect\/activity_widget.php';ActivityWidget.REQUEST_INTERVAL=15*1000;ActivityWidget.ACTIVITY_HEIGHT=45;ActivityWidget.MAX_INTERVAL=30;ActivityWidget.MAX_ITEMS=24;copy_properties(ActivityWidget.prototype,{initializeObject:function(a,b){this.parent.initializeObject.call(this,a,b);copy_properties(this,{responseHandler:function(c){ConnectSocialWidget.delayUntilDisplayed(function(){this.onResponse(c);}.bind(this));}.bind(this),scheduleHandler:function(){ConnectSocialWidget.delayUntilDisplayed(function(){this.launchAsyncRequest().scheduleRequest();}.bind(this));}.bind(this),iDecay:0,iInterval:1,sRecommendationsChild:a.sRecommendationsChild,aEventHanlders:[Event.listen(document.body,'mouseover',this._onMouseOver.bind(this))]});this.oQueryParams.nb_activities=Math.min(ActivityWidget.MAX_ITEMS,Math.round((this.oQueryParams.height||300)\/ActivityWidget.ACTIVITY_HEIGHT));this.oQueryParams.newest=a.iNewestStoryTime||0;this.scheduleRequest();},getLinkType:function(){return ConnectSocialWidget.TYPE_ACTIVITY;},getPluginType:function(){return ConnectSocialWidget.TYPE_ACTIVITY;},removeOverflowElements:function(){if(this.bComboMode&&!this.bFirstRound){this.bFirstRound=true;var d=Vector2.getElementPosition(this.ndTop).y,b=Vector2.getElementDimensions(document.body).y-(d+this.iFooterHeight),c=Math.round(b\/2),a=$A(arguments);a[a.length]=c;ConnectSocialWidget.prototype.removeOverflowElements.apply(this,a);}else ConnectSocialWidget.prototype.removeOverflowElements.apply(this,arguments);},launchAsyncRequest:function(){if(window.LiveTimer){LiveTimer.timestamps=LiveTimer.timestamps||[];LiveTimer.startLoop(0);}new AsyncRequest().setURI(ActivityWidget.ENDPOINT).setData(this.oQueryParams).setReadOnly(true).setErrorHandler(function(){}).setHandler(this.responseHandler).setMethod('GET').send();return this;},onResponse:function(f){var e=f.getPayload();if(e&&e.html&&e.iNewestStoryTime>this.oQueryParams.newest){if(this.oQueryParams.newest===0){var c=this.getEmptyMessage();if(c)DOM.remove(c);}var d=HTML(e.html).getNodes()[0],a=[];var b=function(l){var j=DOM.scry(d,l)[0];if(j.childNodes.length===0)return;j.className=\"\";var k=DOM.scry(this.ndContentContainer,l)[0];if(CSS.hasClass(k,'hidden_elem'))return;DOM.prependContent(k,j);CSS.setStyle(j,'opacity',0);ConnectSocialWidget.prototype.removeOverflowElements(this.ndTop,this.ndActivity,'div.fbActivity',-this.iFooterHeight);if(j.childNodes.length===0){DOM.remove(j);return;}var h=Vector2.getElementDimensions(j),g=$A(j.childNodes);var i=function(){DOM.prependContent(k,g);DOM.remove(j);this.fRemoveOverflowElements();if(this.sRecommendationsChild)ConnectSocialWidget.getInstance(this.sRecommendationsChild).showRecommendationsSeparator().fRemoveOverflowElements();}.bind(this);a.push(animation(j).from('height',0).to('height',h.y).from('opacity',0).to('opacity',1).blind().ondone(i).duration(400).ease());}.bind(this);b('div.fbFriendsActivity');a.forEach(function(g){g.go();});this.oQueryParams.newest=e.iNewestStoryTime+1;}},scheduleRequest:function(){var a=this.iInterval+this.iDecay;this.iDecay=this.iInterval;this.iInterval=a;this.oLastTimeout=setTimeout(this.scheduleHandler,ActivityWidget.REQUEST_INTERVAL+a*1000);},_onMouseOver:function(){var a=this.iInterval;this.iDecay=0;this.iInterval=1;if(a>ActivityWidget.MAX_INTERVAL){clearTimeout(this.oLastTimeout);this.scheduleRequest();}},hasFriendsActivity:function(){return DOM.scry(this.ndContentContainer,'div.fbFriendsActivity')[0].childNodes.length>0;},hasContent:function(){return DOM.scry(this.ndTop,this.sOverflowItemsSelector).length>0;},getEmptyMessage:function(){return DOM.find(this.ndContentContainer,'div.fbEmptyWidget');},showEmptyMessage:function(){var a=this.getEmptyMessage();if(a)CSS.show(a);}});function RecommendationsWidget(a,b){this.parent.construct(this,a,b);}RecommendationsWidget.extend('ConnectSocialWidget');copy_properties(RecommendationsWidget.prototype,{getLinkType:function(){return ConnectSocialWidget.TYPE_RECOMMENDATIONS;},getPluginType:function(){return this.sActivityParent?ConnectSocialWidget.TYPE_ACTIVITY:ConnectSocialWidget.TYPE_RECOMMENDATIONS;},initializeObject:function(b,d){this.parent.initializeObject.call(this,b,d);this.sActivityParent=b.sActivityParent;this.cropImages();if(this.sActivityParent){var a=Vector2.getElementPosition(this.ndFooter).y-Vector2.getElementPosition(this.ndContentContainer).y,c=copy_properties({},this.oQueryParams);if(a<RecommendationsWidget.ITEM_HEIGHT)return;c.nb_items=Math.round(a\/RecommendationsWidget.ITEM_HEIGHT);CSS.setStyle(DOM.scry(this.ndTop,\"img.fbLoadImg\")[0],'visibility','visible');new AsyncRequest().setURI(RecommendationsWidget.ENDPOINT).setData(c).setReadOnly(true).setErrorHandler(function(){}).setHandler(function(e){ConnectSocialWidget.delayUntilDisplayed(function(){this.onResponse(e);}.bind(this));}.bind(this)).setMethod('GET').send();}},cropImages:function(){var a=DOM.scry(this.ndContentContainer,\".fbImageContainer img\");if(a.length>0){var b=function(event){RecommendationsWidget.image_resize({image:event.getTarget(),dimension:RecommendationsWidget.IMAGE_HEIGHT});};a.forEach(function(c){if(c.complete){RecommendationsWidget.image_resize({image:c,dimension:RecommendationsWidget.IMAGE_HEIGHT});}else Event.listen(c,'load',b);});}},hasContent:function(){return this.ndContentContainer.childNodes.length>0;},getParent:function(){if(this.sActivityParent)return ConnectSocialWidget.getInstance(this.sActivityParent);},showRecommendationsSeparator:function(){var b=this.getParent();if(b&&b.hasContent()){var a=DOM.scry(this.ndTop,'div.fbRecommendationsSeparator')[0];CSS.show(a);CSS.setStyle(a,'visibility','visible');}return this;},removeOverflowElements:function(){ConnectSocialWidget.prototype.removeOverflowElements.apply(this,arguments);if(this.sActivityParent&&!this.hasContent()){var a=DOM.scry(this.ndTop,'div.fbRecommendationsSeparator')[0];CSS.hide(a);}},onResponse:function(e){DOM.remove(DOM.scry(this.ndTop,\"img.fbLoadImg\")[0]);var d=e.getPayload();if(d&&d.html){var b=HTML(d.html).getNodes()[0],a=DOM.find(b,'div.fbEmptyWidget'),c=this.getParent();if(a&&c){if(!c.hasContent())c.showEmptyMessage();}else{this.showRecommendationsSeparator();DOM.appendContent(this.ndContentContainer,$A(b.childNodes));this.fRemoveOverflowElements();this.cropImages();animation(this.ndContentContainer).from('opacity',0).to('opacity',1).go();}}}});RecommendationsWidget.ENDPOINT='\/ajax\/connect\/recommendations_widget.php';RecommendationsWidget.IMAGE_HEIGHT=35;RecommendationsWidget.ITEM_HEIGHT=45;function LikeBoxWidget(a,b){this.parent.construct(this,a,b);}LikeBoxWidget.extend('ConnectSocialWidget');copy_properties(LikeBoxWidget.prototype,{getLinkType:function(){return ConnectSocialWdiget.TYPE_LIKEBOX;},getPluginType:function(){return ConnectSocialWidget.TYPE_LIKEBOX;}});RecommendationsWidget.image_resize=function(j){var h=j.image,i=Vector2.getElementDimensions(h),a=i.y,g=i.x,e=j.dimension,k=e+'px';if(a<=5||g<=5)return;var d=a\/g;if(d<.5||d>2)return;if(a===g){CSS.setStyle(h,'width',k);}else if(a<g){var c=e\/a,b=-Math.round((g-a)*c\/2);CSS.setStyle(h,'height',k);CSS.setStyle(h,'marginLeft',b+'px');}else{var c=e\/g,f=-Math.round((a-g)*c\/2);CSS.setStyle(h,'width',k);CSS.setStyle(h,'marginTop',f+'px');}CSS.setStyle(h,'visibility','visible');CSS.setStyle(h.parentNode,'background','transparent');};ClickThroughMonitor=function(a){copy_properties(this,{ndTop:a.ndTop||document.body,fValidateLink:a.fValidateLink||function(){return true;},fGetMonitorData:a.fGetMonitorData||function(){return {};}});Event.listen(this.ndTop,'mousedown',this.onMouseDown.bind(this));};ClickThroughMonitor.CALL_BACK_SOCIAL_PLUGINS=2;copy_properties(ClickThroughMonitor.prototype,{getMonitoredLink:function(event){var a=event.getTarget(),b=Parent.byTag(a,'a');if(b&&CSS.hasClass(b,'fbMonitor')&&this.fValidateLink(b)){return b;}else return null;},getMonitorData:function(a){var b=this.fGetMonitorData(a);if(document.referrer!=='')b.referrer=document.referrer;b.cb=ClickThroughMonitor.CALL_BACK_SOCIAL_PLUGINS;return b;},onMouseDown:function(event){var a=this.getMonitoredLink(event);if(a)UntrustedLink.bootstrap(a,Env.lhsh,event,this.getMonitorData.bind(this));}});\n\nif (window.Bootloader) { Bootloader.done([\"js\\\/eqzx4see9o0s0ogs.pkg.js\"]); }")