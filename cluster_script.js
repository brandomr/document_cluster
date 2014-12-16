function mpld3_load_lib(url, callback){
  var s = document.createElement('script');
  s.src = url;
  s.async = true;
  s.onreadystatechange = s.onload = callback;
  s.onerror = function(){console.warn("failed to load library " + url);};
  document.getElementsByTagName("head")[0].appendChild(s);
}

if(typeof(mpld3) !== "undefined" && mpld3._mpld3IsLoaded){
   // already loaded: just create the figure
   !function(mpld3){
       
    mpld3.register_plugin("htmltooltip", HtmlTooltipPlugin);
    HtmlTooltipPlugin.prototype = Object.create(mpld3.Plugin.prototype);
    HtmlTooltipPlugin.prototype.constructor = HtmlTooltipPlugin;
    HtmlTooltipPlugin.prototype.requiredProps = ["id"];
    HtmlTooltipPlugin.prototype.defaultProps = {labels:null, hoffset:0, voffset:10};
    function HtmlTooltipPlugin(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    HtmlTooltipPlugin.prototype.draw = function(){
       var obj = mpld3.get_element(this.props.id);
       var labels = this.props.labels;
       var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("position", "absolute")
                    .style("z-index", "10")
                    .style("visibility", "hidden");

       obj.elements()
           .on("mouseover", function(d, i){
                              tooltip.html(labels[i])
                                     .style("visibility", "visible");})
           .on("mousemove", function(d, i){
                    tooltip
                      .style("top", d3.event.pageY + this.props.voffset + "px")
                      .style("left",d3.event.pageX + this.props.hoffset + "px");
                 }.bind(this))
           .on("mouseout",  function(d, i){
                           tooltip.style("visibility", "hidden");});
    };
    
    mpld3.register_plugin("toptoolbar", TopToolbar);
    TopToolbar.prototype = Object.create(mpld3.Plugin.prototype);
    TopToolbar.prototype.constructor = TopToolbar;
    function TopToolbar(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    TopToolbar.prototype.draw = function(){
      // the toolbar svg doesn't exist
      // yet, so first draw it
      this.fig.toolbar.draw();

      // then change the y position to be
      // at the top of the figure
      this.fig.toolbar.toolbar.attr("x", 150);
      this.fig.toolbar.toolbar.attr("y", 400);

      // then remove the draw function,
      // so that it is not called again
      this.fig.toolbar.draw = function() {}
    }
    
    mpld3.register_plugin("htmltooltip", HtmlTooltipPlugin);
    HtmlTooltipPlugin.prototype = Object.create(mpld3.Plugin.prototype);
    HtmlTooltipPlugin.prototype.constructor = HtmlTooltipPlugin;
    HtmlTooltipPlugin.prototype.requiredProps = ["id"];
    HtmlTooltipPlugin.prototype.defaultProps = {labels:null, hoffset:0, voffset:10};
    function HtmlTooltipPlugin(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    HtmlTooltipPlugin.prototype.draw = function(){
       var obj = mpld3.get_element(this.props.id);
       var labels = this.props.labels;
       var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("position", "absolute")
                    .style("z-index", "10")
                    .style("visibility", "hidden");

       obj.elements()
           .on("mouseover", function(d, i){
                              tooltip.html(labels[i])
                                     .style("visibility", "visible");})
           .on("mousemove", function(d, i){
                    tooltip
                      .style("top", d3.event.pageY + this.props.voffset + "px")
                      .style("left",d3.event.pageX + this.props.hoffset + "px");
                 }.bind(this))
           .on("mouseout",  function(d, i){
                           tooltip.style("visibility", "hidden");});
    };
    
    mpld3.register_plugin("toptoolbar", TopToolbar);
    TopToolbar.prototype = Object.create(mpld3.Plugin.prototype);
    TopToolbar.prototype.constructor = TopToolbar;
    function TopToolbar(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    TopToolbar.prototype.draw = function(){
      // the toolbar svg doesn't exist
      // yet, so first draw it
      this.fig.toolbar.draw();

      // then change the y position to be
      // at the top of the figure
      this.fig.toolbar.toolbar.attr("x", 150);
      this.fig.toolbar.toolbar.attr("y", 400);

      // then remove the draw function,
      // so that it is not called again
      this.fig.toolbar.draw = function() {}
    }
    
    mpld3.register_plugin("htmltooltip", HtmlTooltipPlugin);
    HtmlTooltipPlugin.prototype = Object.create(mpld3.Plugin.prototype);
    HtmlTooltipPlugin.prototype.constructor = HtmlTooltipPlugin;
    HtmlTooltipPlugin.prototype.requiredProps = ["id"];
    HtmlTooltipPlugin.prototype.defaultProps = {labels:null, hoffset:0, voffset:10};
    function HtmlTooltipPlugin(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    HtmlTooltipPlugin.prototype.draw = function(){
       var obj = mpld3.get_element(this.props.id);
       var labels = this.props.labels;
       var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("position", "absolute")
                    .style("z-index", "10")
                    .style("visibility", "hidden");

       obj.elements()
           .on("mouseover", function(d, i){
                              tooltip.html(labels[i])
                                     .style("visibility", "visible");})
           .on("mousemove", function(d, i){
                    tooltip
                      .style("top", d3.event.pageY + this.props.voffset + "px")
                      .style("left",d3.event.pageX + this.props.hoffset + "px");
                 }.bind(this))
           .on("mouseout",  function(d, i){
                           tooltip.style("visibility", "hidden");});
    };
    
    mpld3.register_plugin("toptoolbar", TopToolbar);
    TopToolbar.prototype = Object.create(mpld3.Plugin.prototype);
    TopToolbar.prototype.constructor = TopToolbar;
    function TopToolbar(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    TopToolbar.prototype.draw = function(){
      // the toolbar svg doesn't exist
      // yet, so first draw it
      this.fig.toolbar.draw();

      // then change the y position to be
      // at the top of the figure
      this.fig.toolbar.toolbar.attr("x", 150);
      this.fig.toolbar.toolbar.attr("y", 400);

      // then remove the draw function,
      // so that it is not called again
      this.fig.toolbar.draw = function() {}
    }
    
    mpld3.register_plugin("htmltooltip", HtmlTooltipPlugin);
    HtmlTooltipPlugin.prototype = Object.create(mpld3.Plugin.prototype);
    HtmlTooltipPlugin.prototype.constructor = HtmlTooltipPlugin;
    HtmlTooltipPlugin.prototype.requiredProps = ["id"];
    HtmlTooltipPlugin.prototype.defaultProps = {labels:null, hoffset:0, voffset:10};
    function HtmlTooltipPlugin(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    HtmlTooltipPlugin.prototype.draw = function(){
       var obj = mpld3.get_element(this.props.id);
       var labels = this.props.labels;
       var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("position", "absolute")
                    .style("z-index", "10")
                    .style("visibility", "hidden");

       obj.elements()
           .on("mouseover", function(d, i){
                              tooltip.html(labels[i])
                                     .style("visibility", "visible");})
           .on("mousemove", function(d, i){
                    tooltip
                      .style("top", d3.event.pageY + this.props.voffset + "px")
                      .style("left",d3.event.pageX + this.props.hoffset + "px");
                 }.bind(this))
           .on("mouseout",  function(d, i){
                           tooltip.style("visibility", "hidden");});
    };
    
    mpld3.register_plugin("toptoolbar", TopToolbar);
    TopToolbar.prototype = Object.create(mpld3.Plugin.prototype);
    TopToolbar.prototype.constructor = TopToolbar;
    function TopToolbar(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    TopToolbar.prototype.draw = function(){
      // the toolbar svg doesn't exist
      // yet, so first draw it
      this.fig.toolbar.draw();

      // then change the y position to be
      // at the top of the figure
      this.fig.toolbar.toolbar.attr("x", 150);
      this.fig.toolbar.toolbar.attr("y", 400);

      // then remove the draw function,
      // so that it is not called again
      this.fig.toolbar.draw = function() {}
    }
    
    mpld3.register_plugin("htmltooltip", HtmlTooltipPlugin);
    HtmlTooltipPlugin.prototype = Object.create(mpld3.Plugin.prototype);
    HtmlTooltipPlugin.prototype.constructor = HtmlTooltipPlugin;
    HtmlTooltipPlugin.prototype.requiredProps = ["id"];
    HtmlTooltipPlugin.prototype.defaultProps = {labels:null, hoffset:0, voffset:10};
    function HtmlTooltipPlugin(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    HtmlTooltipPlugin.prototype.draw = function(){
       var obj = mpld3.get_element(this.props.id);
       var labels = this.props.labels;
       var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("position", "absolute")
                    .style("z-index", "10")
                    .style("visibility", "hidden");

       obj.elements()
           .on("mouseover", function(d, i){
                              tooltip.html(labels[i])
                                     .style("visibility", "visible");})
           .on("mousemove", function(d, i){
                    tooltip
                      .style("top", d3.event.pageY + this.props.voffset + "px")
                      .style("left",d3.event.pageX + this.props.hoffset + "px");
                 }.bind(this))
           .on("mouseout",  function(d, i){
                           tooltip.style("visibility", "hidden");});
    };
    
    mpld3.register_plugin("toptoolbar", TopToolbar);
    TopToolbar.prototype = Object.create(mpld3.Plugin.prototype);
    TopToolbar.prototype.constructor = TopToolbar;
    function TopToolbar(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    TopToolbar.prototype.draw = function(){
      // the toolbar svg doesn't exist
      // yet, so first draw it
      this.fig.toolbar.draw();

      // then change the y position to be
      // at the top of the figure
      this.fig.toolbar.toolbar.attr("x", 150);
      this.fig.toolbar.toolbar.attr("y", 400);

      // then remove the draw function,
      // so that it is not called again
      this.fig.toolbar.draw = function() {}
    }
    
       mpld3.draw_figure("fig_el290745801570086793125459", {"axes": [{"xlim": [-0.70189582032870046, 0.71051473536226761], "yscale": "linear", "axesbg": "#FFFFFF", "texts": [], "zoomable": true, "images": [], "xdomain": [-0.70189582032870046, 0.71051473536226761], "ylim": [-0.70830339802964049, 0.69370701811001245], "paths": [], "sharey": [], "sharex": [], "axesbgalpha": null, "axes": [{"scale": "linear", "tickformat": "", "grid": {"gridOn": false}, "fontsize": null, "position": "bottom", "nticks": 0, "tickvalues": []}, {"scale": "linear", "tickformat": "", "grid": {"gridOn": false}, "fontsize": null, "position": "left", "nticks": 0, "tickvalues": []}], "lines": [], "markers": [{"edgecolor": "none", "facecolor": "#1B9E77", "edgewidth": 0.5, "yindex": 1, "coordinates": "data", "zorder": 2, "markerpath": [[[0.0, 9.0], [2.3868279, 9.0], [4.676218837063681, 8.051703224294176], [6.3639610306789285, 6.3639610306789285], [8.051703224294176, 4.676218837063681], [9.0, 2.3868279], [9.0, 0.0], [9.0, -2.3868279], [8.051703224294176, -4.676218837063681], [6.3639610306789285, -6.3639610306789285], [4.676218837063681, -8.051703224294176], [2.3868279, -9.0], [0.0, -9.0], [-2.3868279, -9.0], [-4.676218837063681, -8.051703224294176], [-6.3639610306789285, -6.3639610306789285], [-8.051703224294176, -4.676218837063681], [-9.0, -2.3868279], [-9.0, 0.0], [-9.0, 2.3868279], [-8.051703224294176, 4.676218837063681], [-6.3639610306789285, 6.3639610306789285], [-4.676218837063681, 8.051703224294176], [-2.3868279, 9.0], [0.0, 9.0]], ["M", "C", "C", "C", "C", "C", "C", "C", "C", "Z"]], "alpha": 1, "xindex": 0, "data": "data01", "id": "el29074665479312pts"}, {"edgecolor": "none", "facecolor": "#D95F02", "edgewidth": 0.5, "yindex": 1, "coordinates": "data", "zorder": 2, "markerpath": [[[0.0, 9.0], [2.3868279, 9.0], [4.676218837063681, 8.051703224294176], [6.3639610306789285, 6.3639610306789285], [8.051703224294176, 4.676218837063681], [9.0, 2.3868279], [9.0, 0.0], [9.0, -2.3868279], [8.051703224294176, -4.676218837063681], [6.3639610306789285, -6.3639610306789285], [4.676218837063681, -8.051703224294176], [2.3868279, -9.0], [0.0, -9.0], [-2.3868279, -9.0], [-4.676218837063681, -8.051703224294176], [-6.3639610306789285, -6.3639610306789285], [-8.051703224294176, -4.676218837063681], [-9.0, -2.3868279], [-9.0, 0.0], [-9.0, 2.3868279], [-8.051703224294176, 4.676218837063681], [-6.3639610306789285, 6.3639610306789285], [-4.676218837063681, 8.051703224294176], [-2.3868279, 9.0], [0.0, 9.0]], ["M", "C", "C", "C", "C", "C", "C", "C", "C", "Z"]], "alpha": 1, "xindex": 0, "data": "data02", "id": "el29074709227536pts"}, {"edgecolor": "none", "facecolor": "#7570B3", "edgewidth": 0.5, "yindex": 1, "coordinates": "data", "zorder": 2, "markerpath": [[[0.0, 9.0], [2.3868279, 9.0], [4.676218837063681, 8.051703224294176], [6.3639610306789285, 6.3639610306789285], [8.051703224294176, 4.676218837063681], [9.0, 2.3868279], [9.0, 0.0], [9.0, -2.3868279], [8.051703224294176, -4.676218837063681], [6.3639610306789285, -6.3639610306789285], [4.676218837063681, -8.051703224294176], [2.3868279, -9.0], [0.0, -9.0], [-2.3868279, -9.0], [-4.676218837063681, -8.051703224294176], [-6.3639610306789285, -6.3639610306789285], [-8.051703224294176, -4.676218837063681], [-9.0, -2.3868279], [-9.0, 0.0], [-9.0, 2.3868279], [-8.051703224294176, 4.676218837063681], [-6.3639610306789285, 6.3639610306789285], [-4.676218837063681, 8.051703224294176], [-2.3868279, 9.0], [0.0, 9.0]], ["M", "C", "C", "C", "C", "C", "C", "C", "C", "Z"]], "alpha": 1, "xindex": 0, "data": "data03", "id": "el29074665483024pts"}, {"edgecolor": "none", "facecolor": "#E7298A", "edgewidth": 0.5, "yindex": 1, "coordinates": "data", "zorder": 2, "markerpath": [[[0.0, 9.0], [2.3868279, 9.0], [4.676218837063681, 8.051703224294176], [6.3639610306789285, 6.3639610306789285], [8.051703224294176, 4.676218837063681], [9.0, 2.3868279], [9.0, 0.0], [9.0, -2.3868279], [8.051703224294176, -4.676218837063681], [6.3639610306789285, -6.3639610306789285], [4.676218837063681, -8.051703224294176], [2.3868279, -9.0], [0.0, -9.0], [-2.3868279, -9.0], [-4.676218837063681, -8.051703224294176], [-6.3639610306789285, -6.3639610306789285], [-8.051703224294176, -4.676218837063681], [-9.0, -2.3868279], [-9.0, 0.0], [-9.0, 2.3868279], [-8.051703224294176, 4.676218837063681], [-6.3639610306789285, 6.3639610306789285], [-4.676218837063681, 8.051703224294176], [-2.3868279, 9.0], [0.0, 9.0]], ["M", "C", "C", "C", "C", "C", "C", "C", "C", "Z"]], "alpha": 1, "xindex": 0, "data": "data04", "id": "el29074540723600pts"}, {"edgecolor": "none", "facecolor": "#66A61E", "edgewidth": 0.5, "yindex": 1, "coordinates": "data", "zorder": 2, "markerpath": [[[0.0, 9.0], [2.3868279, 9.0], [4.676218837063681, 8.051703224294176], [6.3639610306789285, 6.3639610306789285], [8.051703224294176, 4.676218837063681], [9.0, 2.3868279], [9.0, 0.0], [9.0, -2.3868279], [8.051703224294176, -4.676218837063681], [6.3639610306789285, -6.3639610306789285], [4.676218837063681, -8.051703224294176], [2.3868279, -9.0], [0.0, -9.0], [-2.3868279, -9.0], [-4.676218837063681, -8.051703224294176], [-6.3639610306789285, -6.3639610306789285], [-8.051703224294176, -4.676218837063681], [-9.0, -2.3868279], [-9.0, 0.0], [-9.0, 2.3868279], [-8.051703224294176, 4.676218837063681], [-6.3639610306789285, 6.3639610306789285], [-4.676218837063681, 8.051703224294176], [-2.3868279, 9.0], [0.0, 9.0]], ["M", "C", "C", "C", "C", "C", "C", "C", "C", "Z"]], "alpha": 1, "xindex": 0, "data": "data05", "id": "el29074709858768pts"}], "id": "el29074527433296", "ydomain": [-0.70830339802964049, 0.69370701811001245], "collections": [], "xscale": "linear", "bbox": [0.125, 0.125, 0.77500000000000002, 0.77500000000000002]}], "height": 480.0, "width": 1120.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"voffset": 10, "labels": ["Schindler's List", "One Flew Over the Cuckoo's Nest", "Gone with the Wind", "The Wizard of Oz", "Titanic", "Forrest Gump", "E.T. the Extra-Terrestrial", "The Silence of the Lambs", "Gandhi", "A Streetcar Named Desire", "The Best Years of Our Lives", "My Fair Lady", "Ben-Hur", "Doctor Zhivago", "The Pianist", "The Exorcist", "Out of Africa", "Good Will Hunting", "Terms of Endearment", "Giant", "The Grapes of Wrath", "Close Encounters of the Third Kind", "The Graduate", "Stagecoach", "Wuthering Heights"], "type": "htmltooltip", "id": "el29074665479312pts", "hoffset": 10}, {"type": "toptoolbar"}, {"voffset": 10, "labels": ["Casablanca", "Psycho", "Sunset Blvd.", "Vertigo", "Chinatown", "Amadeus", "High Noon", "The French Connection", "Fargo", "Pulp Fiction", "The Maltese Falcon", "A Clockwork Orange", "Double Indemnity", "Rebel Without a Cause", "The Third Man", "North by Northwest"], "type": "htmltooltip", "id": "el29074709227536pts", "hoffset": 10}, {"type": "toptoolbar"}, {"voffset": 10, "labels": ["The Godfather", "Raging Bull", "Citizen Kane", "The Godfather: Part II", "On the Waterfront", "12 Angry Men", "Rocky", "To Kill a Mockingbird", "Braveheart", "The Good, the Bad and the Ugly", "The Apartment", "Goodfellas", "City Lights", "It Happened One Night", "Midnight Cowboy", "Mr. Smith Goes to Washington", "Rain Man", "Annie Hall", "Network", "Taxi Driver", "Rear Window"], "type": "htmltooltip", "id": "el29074665483024pts", "hoffset": 10}, {"type": "toptoolbar"}, {"voffset": 10, "labels": ["West Side Story", "Singin' in the Rain", "It's a Wonderful Life", "Some Like It Hot", "The Philadelphia Story", "An American in Paris", "The King's Speech", "A Place in the Sun", "Tootsie", "Nashville", "American Graffiti", "Yankee Doodle Dandy"], "type": "htmltooltip", "id": "el29074540723600pts", "hoffset": 10}, {"type": "toptoolbar"}, {"voffset": 10, "labels": ["The Shawshank Redemption", "Lawrence of Arabia", "The Sound of Music", "Star Wars", "2001: A Space Odyssey", "The Bridge on the River Kwai", "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb", "Apocalypse Now", "The Lord of the Rings: The Return of the King", "Gladiator", "From Here to Eternity", "Saving Private Ryan", "Unforgiven", "Raiders of the Lost Ark", "Patton", "Jaws", "Butch Cassidy and the Sundance Kid", "The Treasure of the Sierra Madre", "Platoon", "Dances with Wolves", "The Deer Hunter", "All Quiet on the Western Front", "Shane", "The Green Mile", "The African Queen", "Mutiny on the Bounty"], "type": "htmltooltip", "id": "el29074709858768pts", "hoffset": 10}, {"type": "toptoolbar"}], "data": {"data04": [[-0.48383166475045314, 0.17406382605759155], [-0.3431621006015567, 0.6339455084054434], [0.42023926967786635, 0.585073332726518], [-0.17325065040967416, 0.23163649164649666], [0.6705408517106365, 0.1152867311811776], [-0.20507682543002934, 0.5602431727781544], [0.4029759387982718, 0.4993894350885348], [0.6671527866782192, 0.2655632808140779], [-0.02368751477042728, 0.34058596130883056], [0.06057638900463016, 0.6101307798961454], [-0.6012117652228453, -0.04229065076764765], [0.6299986440743635, 0.35408489380322294]], "data05": [[0.4425217895905002, -0.2796139796878817], [-0.24776866601229716, -0.5782685424165561], [0.5555461511292237, 0.486954891259419], [0.19708753275222002, -0.38902709232046384], [0.3497144798998901, -0.338553421833173], [-0.07419701411754268, -0.5782948227044011], [-0.014592308929045296, -0.6368511048162793], [0.025373394060233537, -0.634289200597481], [0.24399849236205579, -0.5034936076710894], [0.07277111225479607, -0.47961483445651304], [-0.1519065165847722, -0.338080020776755], [-0.015830214134386178, -0.36229007847066996], [-0.13402784922090072, -0.3012324095400005], [-0.23474733283083896, -0.4502062748678493], [0.12924047876683878, -0.6686238579502164], [0.08194147679809109, -0.3929722898416771], [-0.34747538257781435, -0.3233751877512795], [-0.3631413985443942, -0.4813272206475685], [-0.09731550319802962, -0.505864130911545], [0.18513473762402247, -0.5781596431297301], [-0.09597244991104013, -0.19942409220233107], [-0.18228725458498232, -0.5566467223632475], [-0.551994202072232, 0.33486446230226674], [-0.5679692454857176, -0.35356444529282777], [-0.45369369757595834, -0.44434234569143366], [0.3366116741827183, -0.6447240310583208]], "data02": [[-0.2476475600239232, -0.26290199748846194], [-0.22919155130164443, 0.06968880208772948], [-0.42967373628736466, 0.28652830354480197], [-0.3531795894914802, 0.12742474874876483], [-0.5517590615479852, -0.22488031423191712], [0.4134372284409409, 0.40907893375027393], [-0.6619219366770693, -0.20578641688667848], [-0.4603909162269872, 0.008430725029157468], [-0.3422448822106277, 0.03699561151307461], [-0.3438274431555653, -0.06956150821349773], [-0.3384187737692901, -0.1515124959398215], [-0.18283874549876644, 0.14829844310283077], [-0.46586683087784553, -0.09919136771199337], [-0.577910557660688, 0.28870430670538155], [-0.20956788370183355, -0.0574148454899521], [-0.20029308653202116, 0.00718931223386455]], "data03": [[0.18558490034956887, -0.01077771968604301], [-0.13262115988334475, 0.5751789037009231], [0.016222043434641144, 0.4652342083561871], [0.07240937947290513, 0.13247203862675336], [-0.05239281560115413, 0.12267112673062845], [0.5241688637949986, 0.14425768177773893], [-0.2825557188697044, 0.2745647039405087], [0.21864153351095966, 0.22101476971173736], [0.49293979852148206, -0.1406180288639719], [-0.07221741889036004, 0.5688366094319275], [-0.5967680343768968, 0.1894475004960752], [0.2030557040289471, 0.06941302351286169], [0.5649139525233913, 0.34616110908884656], [-0.42188287709302075, 0.4618936364485825], [-0.30512268820937116, 0.4768633838569787], [0.6449291941438089, -0.15516297397920956], [-0.18081125741175175, 0.4765240199441122], [-0.027643220902818993, 0.6540274780305884], [0.6687778032882542, -0.08795572251657516], [-0.5534118533588518, 0.02875489034480997], [-0.5807159767006421, 0.10579656075156939]], "data01": [[-0.0777242299467317, -0.4515361500051302], [0.05143904563855998, 0.25947569793979247], [0.05926003443907459, -0.04759931281928853], [-0.4336747338877505, -0.2971244895104658], [0.6035469203843735, -0.3456193989894745], [0.35577780891092403, 0.007409352966807421], [-0.019806795422961994, -0.044100107912120406], [0.5183164260703591, -0.25353575550390045], [0.43257291891111244, 0.1381593571372851], [0.3437182373924481, 0.24527960034963084], [0.31733764740406106, 0.08349042218139716], [-0.19661734109288, 0.39627304179640405], [0.3443594003836902, -0.13069722017172503], [0.1620196922509593, -0.11876438020876365], [0.1563956093287554, -0.21269443337356803], [0.17499103541231237, 0.2985373547088241], [0.12782499859472804, 0.4815648223887244], [0.12523150357922094, 0.41721548160929905], [0.2219315942794893, 0.47877846167983906], [0.48413541386850095, 0.008757361949769692], [0.4755390685857624, -0.4356393509319867], [0.27427215751846695, -0.2940897904508699], [-0.32213342140019896, 0.33175887910243107], [0.3241754832842173, -0.45547190176887226], [0.18462105786497715, 0.5797922578764358]]}, "id": "el29074580157008"});
   }(mpld3);
}else if(typeof define === "function" && define.amd){
   // require.js is available: use it to load d3/mpld3
   require.config({paths: {d3: "https://mpld3.github.io/js/d3.v3.min"}});
   require(["d3"], function(d3){
      window.d3 = d3;
      mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.2.js", function(){
         
    mpld3.register_plugin("htmltooltip", HtmlTooltipPlugin);
    HtmlTooltipPlugin.prototype = Object.create(mpld3.Plugin.prototype);
    HtmlTooltipPlugin.prototype.constructor = HtmlTooltipPlugin;
    HtmlTooltipPlugin.prototype.requiredProps = ["id"];
    HtmlTooltipPlugin.prototype.defaultProps = {labels:null, hoffset:0, voffset:10};
    function HtmlTooltipPlugin(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    HtmlTooltipPlugin.prototype.draw = function(){
       var obj = mpld3.get_element(this.props.id);
       var labels = this.props.labels;
       var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("position", "absolute")
                    .style("z-index", "10")
                    .style("visibility", "hidden");

       obj.elements()
           .on("mouseover", function(d, i){
                              tooltip.html(labels[i])
                                     .style("visibility", "visible");})
           .on("mousemove", function(d, i){
                    tooltip
                      .style("top", d3.event.pageY + this.props.voffset + "px")
                      .style("left",d3.event.pageX + this.props.hoffset + "px");
                 }.bind(this))
           .on("mouseout",  function(d, i){
                           tooltip.style("visibility", "hidden");});
    };
    
    mpld3.register_plugin("toptoolbar", TopToolbar);
    TopToolbar.prototype = Object.create(mpld3.Plugin.prototype);
    TopToolbar.prototype.constructor = TopToolbar;
    function TopToolbar(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    TopToolbar.prototype.draw = function(){
      // the toolbar svg doesn't exist
      // yet, so first draw it
      this.fig.toolbar.draw();

      // then change the y position to be
      // at the top of the figure
      this.fig.toolbar.toolbar.attr("x", 150);
      this.fig.toolbar.toolbar.attr("y", 400);

      // then remove the draw function,
      // so that it is not called again
      this.fig.toolbar.draw = function() {}
    }
    
    mpld3.register_plugin("htmltooltip", HtmlTooltipPlugin);
    HtmlTooltipPlugin.prototype = Object.create(mpld3.Plugin.prototype);
    HtmlTooltipPlugin.prototype.constructor = HtmlTooltipPlugin;
    HtmlTooltipPlugin.prototype.requiredProps = ["id"];
    HtmlTooltipPlugin.prototype.defaultProps = {labels:null, hoffset:0, voffset:10};
    function HtmlTooltipPlugin(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    HtmlTooltipPlugin.prototype.draw = function(){
       var obj = mpld3.get_element(this.props.id);
       var labels = this.props.labels;
       var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("position", "absolute")
                    .style("z-index", "10")
                    .style("visibility", "hidden");

       obj.elements()
           .on("mouseover", function(d, i){
                              tooltip.html(labels[i])
                                     .style("visibility", "visible");})
           .on("mousemove", function(d, i){
                    tooltip
                      .style("top", d3.event.pageY + this.props.voffset + "px")
                      .style("left",d3.event.pageX + this.props.hoffset + "px");
                 }.bind(this))
           .on("mouseout",  function(d, i){
                           tooltip.style("visibility", "hidden");});
    };
    
    mpld3.register_plugin("toptoolbar", TopToolbar);
    TopToolbar.prototype = Object.create(mpld3.Plugin.prototype);
    TopToolbar.prototype.constructor = TopToolbar;
    function TopToolbar(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    TopToolbar.prototype.draw = function(){
      // the toolbar svg doesn't exist
      // yet, so first draw it
      this.fig.toolbar.draw();

      // then change the y position to be
      // at the top of the figure
      this.fig.toolbar.toolbar.attr("x", 150);
      this.fig.toolbar.toolbar.attr("y", 400);

      // then remove the draw function,
      // so that it is not called again
      this.fig.toolbar.draw = function() {}
    }
    
    mpld3.register_plugin("htmltooltip", HtmlTooltipPlugin);
    HtmlTooltipPlugin.prototype = Object.create(mpld3.Plugin.prototype);
    HtmlTooltipPlugin.prototype.constructor = HtmlTooltipPlugin;
    HtmlTooltipPlugin.prototype.requiredProps = ["id"];
    HtmlTooltipPlugin.prototype.defaultProps = {labels:null, hoffset:0, voffset:10};
    function HtmlTooltipPlugin(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    HtmlTooltipPlugin.prototype.draw = function(){
       var obj = mpld3.get_element(this.props.id);
       var labels = this.props.labels;
       var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("position", "absolute")
                    .style("z-index", "10")
                    .style("visibility", "hidden");

       obj.elements()
           .on("mouseover", function(d, i){
                              tooltip.html(labels[i])
                                     .style("visibility", "visible");})
           .on("mousemove", function(d, i){
                    tooltip
                      .style("top", d3.event.pageY + this.props.voffset + "px")
                      .style("left",d3.event.pageX + this.props.hoffset + "px");
                 }.bind(this))
           .on("mouseout",  function(d, i){
                           tooltip.style("visibility", "hidden");});
    };
    
    mpld3.register_plugin("toptoolbar", TopToolbar);
    TopToolbar.prototype = Object.create(mpld3.Plugin.prototype);
    TopToolbar.prototype.constructor = TopToolbar;
    function TopToolbar(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    TopToolbar.prototype.draw = function(){
      // the toolbar svg doesn't exist
      // yet, so first draw it
      this.fig.toolbar.draw();

      // then change the y position to be
      // at the top of the figure
      this.fig.toolbar.toolbar.attr("x", 150);
      this.fig.toolbar.toolbar.attr("y", 400);

      // then remove the draw function,
      // so that it is not called again
      this.fig.toolbar.draw = function() {}
    }
    
    mpld3.register_plugin("htmltooltip", HtmlTooltipPlugin);
    HtmlTooltipPlugin.prototype = Object.create(mpld3.Plugin.prototype);
    HtmlTooltipPlugin.prototype.constructor = HtmlTooltipPlugin;
    HtmlTooltipPlugin.prototype.requiredProps = ["id"];
    HtmlTooltipPlugin.prototype.defaultProps = {labels:null, hoffset:0, voffset:10};
    function HtmlTooltipPlugin(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    HtmlTooltipPlugin.prototype.draw = function(){
       var obj = mpld3.get_element(this.props.id);
       var labels = this.props.labels;
       var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("position", "absolute")
                    .style("z-index", "10")
                    .style("visibility", "hidden");

       obj.elements()
           .on("mouseover", function(d, i){
                              tooltip.html(labels[i])
                                     .style("visibility", "visible");})
           .on("mousemove", function(d, i){
                    tooltip
                      .style("top", d3.event.pageY + this.props.voffset + "px")
                      .style("left",d3.event.pageX + this.props.hoffset + "px");
                 }.bind(this))
           .on("mouseout",  function(d, i){
                           tooltip.style("visibility", "hidden");});
    };
    
    mpld3.register_plugin("toptoolbar", TopToolbar);
    TopToolbar.prototype = Object.create(mpld3.Plugin.prototype);
    TopToolbar.prototype.constructor = TopToolbar;
    function TopToolbar(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    TopToolbar.prototype.draw = function(){
      // the toolbar svg doesn't exist
      // yet, so first draw it
      this.fig.toolbar.draw();

      // then change the y position to be
      // at the top of the figure
      this.fig.toolbar.toolbar.attr("x", 150);
      this.fig.toolbar.toolbar.attr("y", 400);

      // then remove the draw function,
      // so that it is not called again
      this.fig.toolbar.draw = function() {}
    }
    
    mpld3.register_plugin("htmltooltip", HtmlTooltipPlugin);
    HtmlTooltipPlugin.prototype = Object.create(mpld3.Plugin.prototype);
    HtmlTooltipPlugin.prototype.constructor = HtmlTooltipPlugin;
    HtmlTooltipPlugin.prototype.requiredProps = ["id"];
    HtmlTooltipPlugin.prototype.defaultProps = {labels:null, hoffset:0, voffset:10};
    function HtmlTooltipPlugin(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    HtmlTooltipPlugin.prototype.draw = function(){
       var obj = mpld3.get_element(this.props.id);
       var labels = this.props.labels;
       var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("position", "absolute")
                    .style("z-index", "10")
                    .style("visibility", "hidden");

       obj.elements()
           .on("mouseover", function(d, i){
                              tooltip.html(labels[i])
                                     .style("visibility", "visible");})
           .on("mousemove", function(d, i){
                    tooltip
                      .style("top", d3.event.pageY + this.props.voffset + "px")
                      .style("left",d3.event.pageX + this.props.hoffset + "px");
                 }.bind(this))
           .on("mouseout",  function(d, i){
                           tooltip.style("visibility", "hidden");});
    };
    
    mpld3.register_plugin("toptoolbar", TopToolbar);
    TopToolbar.prototype = Object.create(mpld3.Plugin.prototype);
    TopToolbar.prototype.constructor = TopToolbar;
    function TopToolbar(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    TopToolbar.prototype.draw = function(){
      // the toolbar svg doesn't exist
      // yet, so first draw it
      this.fig.toolbar.draw();

      // then change the y position to be
      // at the top of the figure
      this.fig.toolbar.toolbar.attr("x", 150);
      this.fig.toolbar.toolbar.attr("y", 400);

      // then remove the draw function,
      // so that it is not called again
      this.fig.toolbar.draw = function() {}
    }
    
         mpld3.draw_figure("fig_el290745801570086793125459", {"axes": [{"xlim": [-0.70189582032870046, 0.71051473536226761], "yscale": "linear", "axesbg": "#FFFFFF", "texts": [], "zoomable": true, "images": [], "xdomain": [-0.70189582032870046, 0.71051473536226761], "ylim": [-0.70830339802964049, 0.69370701811001245], "paths": [], "sharey": [], "sharex": [], "axesbgalpha": null, "axes": [{"scale": "linear", "tickformat": "", "grid": {"gridOn": false}, "fontsize": null, "position": "bottom", "nticks": 0, "tickvalues": []}, {"scale": "linear", "tickformat": "", "grid": {"gridOn": false}, "fontsize": null, "position": "left", "nticks": 0, "tickvalues": []}], "lines": [], "markers": [{"edgecolor": "none", "facecolor": "#1B9E77", "edgewidth": 0.5, "yindex": 1, "coordinates": "data", "zorder": 2, "markerpath": [[[0.0, 9.0], [2.3868279, 9.0], [4.676218837063681, 8.051703224294176], [6.3639610306789285, 6.3639610306789285], [8.051703224294176, 4.676218837063681], [9.0, 2.3868279], [9.0, 0.0], [9.0, -2.3868279], [8.051703224294176, -4.676218837063681], [6.3639610306789285, -6.3639610306789285], [4.676218837063681, -8.051703224294176], [2.3868279, -9.0], [0.0, -9.0], [-2.3868279, -9.0], [-4.676218837063681, -8.051703224294176], [-6.3639610306789285, -6.3639610306789285], [-8.051703224294176, -4.676218837063681], [-9.0, -2.3868279], [-9.0, 0.0], [-9.0, 2.3868279], [-8.051703224294176, 4.676218837063681], [-6.3639610306789285, 6.3639610306789285], [-4.676218837063681, 8.051703224294176], [-2.3868279, 9.0], [0.0, 9.0]], ["M", "C", "C", "C", "C", "C", "C", "C", "C", "Z"]], "alpha": 1, "xindex": 0, "data": "data01", "id": "el29074665479312pts"}, {"edgecolor": "none", "facecolor": "#D95F02", "edgewidth": 0.5, "yindex": 1, "coordinates": "data", "zorder": 2, "markerpath": [[[0.0, 9.0], [2.3868279, 9.0], [4.676218837063681, 8.051703224294176], [6.3639610306789285, 6.3639610306789285], [8.051703224294176, 4.676218837063681], [9.0, 2.3868279], [9.0, 0.0], [9.0, -2.3868279], [8.051703224294176, -4.676218837063681], [6.3639610306789285, -6.3639610306789285], [4.676218837063681, -8.051703224294176], [2.3868279, -9.0], [0.0, -9.0], [-2.3868279, -9.0], [-4.676218837063681, -8.051703224294176], [-6.3639610306789285, -6.3639610306789285], [-8.051703224294176, -4.676218837063681], [-9.0, -2.3868279], [-9.0, 0.0], [-9.0, 2.3868279], [-8.051703224294176, 4.676218837063681], [-6.3639610306789285, 6.3639610306789285], [-4.676218837063681, 8.051703224294176], [-2.3868279, 9.0], [0.0, 9.0]], ["M", "C", "C", "C", "C", "C", "C", "C", "C", "Z"]], "alpha": 1, "xindex": 0, "data": "data02", "id": "el29074709227536pts"}, {"edgecolor": "none", "facecolor": "#7570B3", "edgewidth": 0.5, "yindex": 1, "coordinates": "data", "zorder": 2, "markerpath": [[[0.0, 9.0], [2.3868279, 9.0], [4.676218837063681, 8.051703224294176], [6.3639610306789285, 6.3639610306789285], [8.051703224294176, 4.676218837063681], [9.0, 2.3868279], [9.0, 0.0], [9.0, -2.3868279], [8.051703224294176, -4.676218837063681], [6.3639610306789285, -6.3639610306789285], [4.676218837063681, -8.051703224294176], [2.3868279, -9.0], [0.0, -9.0], [-2.3868279, -9.0], [-4.676218837063681, -8.051703224294176], [-6.3639610306789285, -6.3639610306789285], [-8.051703224294176, -4.676218837063681], [-9.0, -2.3868279], [-9.0, 0.0], [-9.0, 2.3868279], [-8.051703224294176, 4.676218837063681], [-6.3639610306789285, 6.3639610306789285], [-4.676218837063681, 8.051703224294176], [-2.3868279, 9.0], [0.0, 9.0]], ["M", "C", "C", "C", "C", "C", "C", "C", "C", "Z"]], "alpha": 1, "xindex": 0, "data": "data03", "id": "el29074665483024pts"}, {"edgecolor": "none", "facecolor": "#E7298A", "edgewidth": 0.5, "yindex": 1, "coordinates": "data", "zorder": 2, "markerpath": [[[0.0, 9.0], [2.3868279, 9.0], [4.676218837063681, 8.051703224294176], [6.3639610306789285, 6.3639610306789285], [8.051703224294176, 4.676218837063681], [9.0, 2.3868279], [9.0, 0.0], [9.0, -2.3868279], [8.051703224294176, -4.676218837063681], [6.3639610306789285, -6.3639610306789285], [4.676218837063681, -8.051703224294176], [2.3868279, -9.0], [0.0, -9.0], [-2.3868279, -9.0], [-4.676218837063681, -8.051703224294176], [-6.3639610306789285, -6.3639610306789285], [-8.051703224294176, -4.676218837063681], [-9.0, -2.3868279], [-9.0, 0.0], [-9.0, 2.3868279], [-8.051703224294176, 4.676218837063681], [-6.3639610306789285, 6.3639610306789285], [-4.676218837063681, 8.051703224294176], [-2.3868279, 9.0], [0.0, 9.0]], ["M", "C", "C", "C", "C", "C", "C", "C", "C", "Z"]], "alpha": 1, "xindex": 0, "data": "data04", "id": "el29074540723600pts"}, {"edgecolor": "none", "facecolor": "#66A61E", "edgewidth": 0.5, "yindex": 1, "coordinates": "data", "zorder": 2, "markerpath": [[[0.0, 9.0], [2.3868279, 9.0], [4.676218837063681, 8.051703224294176], [6.3639610306789285, 6.3639610306789285], [8.051703224294176, 4.676218837063681], [9.0, 2.3868279], [9.0, 0.0], [9.0, -2.3868279], [8.051703224294176, -4.676218837063681], [6.3639610306789285, -6.3639610306789285], [4.676218837063681, -8.051703224294176], [2.3868279, -9.0], [0.0, -9.0], [-2.3868279, -9.0], [-4.676218837063681, -8.051703224294176], [-6.3639610306789285, -6.3639610306789285], [-8.051703224294176, -4.676218837063681], [-9.0, -2.3868279], [-9.0, 0.0], [-9.0, 2.3868279], [-8.051703224294176, 4.676218837063681], [-6.3639610306789285, 6.3639610306789285], [-4.676218837063681, 8.051703224294176], [-2.3868279, 9.0], [0.0, 9.0]], ["M", "C", "C", "C", "C", "C", "C", "C", "C", "Z"]], "alpha": 1, "xindex": 0, "data": "data05", "id": "el29074709858768pts"}], "id": "el29074527433296", "ydomain": [-0.70830339802964049, 0.69370701811001245], "collections": [], "xscale": "linear", "bbox": [0.125, 0.125, 0.77500000000000002, 0.77500000000000002]}], "height": 480.0, "width": 1120.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"voffset": 10, "labels": ["Schindler's List", "One Flew Over the Cuckoo's Nest", "Gone with the Wind", "The Wizard of Oz", "Titanic", "Forrest Gump", "E.T. the Extra-Terrestrial", "The Silence of the Lambs", "Gandhi", "A Streetcar Named Desire", "The Best Years of Our Lives", "My Fair Lady", "Ben-Hur", "Doctor Zhivago", "The Pianist", "The Exorcist", "Out of Africa", "Good Will Hunting", "Terms of Endearment", "Giant", "The Grapes of Wrath", "Close Encounters of the Third Kind", "The Graduate", "Stagecoach", "Wuthering Heights"], "type": "htmltooltip", "id": "el29074665479312pts", "hoffset": 10}, {"type": "toptoolbar"}, {"voffset": 10, "labels": ["Casablanca", "Psycho", "Sunset Blvd.", "Vertigo", "Chinatown", "Amadeus", "High Noon", "The French Connection", "Fargo", "Pulp Fiction", "The Maltese Falcon", "A Clockwork Orange", "Double Indemnity", "Rebel Without a Cause", "The Third Man", "North by Northwest"], "type": "htmltooltip", "id": "el29074709227536pts", "hoffset": 10}, {"type": "toptoolbar"}, {"voffset": 10, "labels": ["The Godfather", "Raging Bull", "Citizen Kane", "The Godfather: Part II", "On the Waterfront", "12 Angry Men", "Rocky", "To Kill a Mockingbird", "Braveheart", "The Good, the Bad and the Ugly", "The Apartment", "Goodfellas", "City Lights", "It Happened One Night", "Midnight Cowboy", "Mr. Smith Goes to Washington", "Rain Man", "Annie Hall", "Network", "Taxi Driver", "Rear Window"], "type": "htmltooltip", "id": "el29074665483024pts", "hoffset": 10}, {"type": "toptoolbar"}, {"voffset": 10, "labels": ["West Side Story", "Singin' in the Rain", "It's a Wonderful Life", "Some Like It Hot", "The Philadelphia Story", "An American in Paris", "The King's Speech", "A Place in the Sun", "Tootsie", "Nashville", "American Graffiti", "Yankee Doodle Dandy"], "type": "htmltooltip", "id": "el29074540723600pts", "hoffset": 10}, {"type": "toptoolbar"}, {"voffset": 10, "labels": ["The Shawshank Redemption", "Lawrence of Arabia", "The Sound of Music", "Star Wars", "2001: A Space Odyssey", "The Bridge on the River Kwai", "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb", "Apocalypse Now", "The Lord of the Rings: The Return of the King", "Gladiator", "From Here to Eternity", "Saving Private Ryan", "Unforgiven", "Raiders of the Lost Ark", "Patton", "Jaws", "Butch Cassidy and the Sundance Kid", "The Treasure of the Sierra Madre", "Platoon", "Dances with Wolves", "The Deer Hunter", "All Quiet on the Western Front", "Shane", "The Green Mile", "The African Queen", "Mutiny on the Bounty"], "type": "htmltooltip", "id": "el29074709858768pts", "hoffset": 10}, {"type": "toptoolbar"}], "data": {"data04": [[-0.48383166475045314, 0.17406382605759155], [-0.3431621006015567, 0.6339455084054434], [0.42023926967786635, 0.585073332726518], [-0.17325065040967416, 0.23163649164649666], [0.6705408517106365, 0.1152867311811776], [-0.20507682543002934, 0.5602431727781544], [0.4029759387982718, 0.4993894350885348], [0.6671527866782192, 0.2655632808140779], [-0.02368751477042728, 0.34058596130883056], [0.06057638900463016, 0.6101307798961454], [-0.6012117652228453, -0.04229065076764765], [0.6299986440743635, 0.35408489380322294]], "data05": [[0.4425217895905002, -0.2796139796878817], [-0.24776866601229716, -0.5782685424165561], [0.5555461511292237, 0.486954891259419], [0.19708753275222002, -0.38902709232046384], [0.3497144798998901, -0.338553421833173], [-0.07419701411754268, -0.5782948227044011], [-0.014592308929045296, -0.6368511048162793], [0.025373394060233537, -0.634289200597481], [0.24399849236205579, -0.5034936076710894], [0.07277111225479607, -0.47961483445651304], [-0.1519065165847722, -0.338080020776755], [-0.015830214134386178, -0.36229007847066996], [-0.13402784922090072, -0.3012324095400005], [-0.23474733283083896, -0.4502062748678493], [0.12924047876683878, -0.6686238579502164], [0.08194147679809109, -0.3929722898416771], [-0.34747538257781435, -0.3233751877512795], [-0.3631413985443942, -0.4813272206475685], [-0.09731550319802962, -0.505864130911545], [0.18513473762402247, -0.5781596431297301], [-0.09597244991104013, -0.19942409220233107], [-0.18228725458498232, -0.5566467223632475], [-0.551994202072232, 0.33486446230226674], [-0.5679692454857176, -0.35356444529282777], [-0.45369369757595834, -0.44434234569143366], [0.3366116741827183, -0.6447240310583208]], "data02": [[-0.2476475600239232, -0.26290199748846194], [-0.22919155130164443, 0.06968880208772948], [-0.42967373628736466, 0.28652830354480197], [-0.3531795894914802, 0.12742474874876483], [-0.5517590615479852, -0.22488031423191712], [0.4134372284409409, 0.40907893375027393], [-0.6619219366770693, -0.20578641688667848], [-0.4603909162269872, 0.008430725029157468], [-0.3422448822106277, 0.03699561151307461], [-0.3438274431555653, -0.06956150821349773], [-0.3384187737692901, -0.1515124959398215], [-0.18283874549876644, 0.14829844310283077], [-0.46586683087784553, -0.09919136771199337], [-0.577910557660688, 0.28870430670538155], [-0.20956788370183355, -0.0574148454899521], [-0.20029308653202116, 0.00718931223386455]], "data03": [[0.18558490034956887, -0.01077771968604301], [-0.13262115988334475, 0.5751789037009231], [0.016222043434641144, 0.4652342083561871], [0.07240937947290513, 0.13247203862675336], [-0.05239281560115413, 0.12267112673062845], [0.5241688637949986, 0.14425768177773893], [-0.2825557188697044, 0.2745647039405087], [0.21864153351095966, 0.22101476971173736], [0.49293979852148206, -0.1406180288639719], [-0.07221741889036004, 0.5688366094319275], [-0.5967680343768968, 0.1894475004960752], [0.2030557040289471, 0.06941302351286169], [0.5649139525233913, 0.34616110908884656], [-0.42188287709302075, 0.4618936364485825], [-0.30512268820937116, 0.4768633838569787], [0.6449291941438089, -0.15516297397920956], [-0.18081125741175175, 0.4765240199441122], [-0.027643220902818993, 0.6540274780305884], [0.6687778032882542, -0.08795572251657516], [-0.5534118533588518, 0.02875489034480997], [-0.5807159767006421, 0.10579656075156939]], "data01": [[-0.0777242299467317, -0.4515361500051302], [0.05143904563855998, 0.25947569793979247], [0.05926003443907459, -0.04759931281928853], [-0.4336747338877505, -0.2971244895104658], [0.6035469203843735, -0.3456193989894745], [0.35577780891092403, 0.007409352966807421], [-0.019806795422961994, -0.044100107912120406], [0.5183164260703591, -0.25353575550390045], [0.43257291891111244, 0.1381593571372851], [0.3437182373924481, 0.24527960034963084], [0.31733764740406106, 0.08349042218139716], [-0.19661734109288, 0.39627304179640405], [0.3443594003836902, -0.13069722017172503], [0.1620196922509593, -0.11876438020876365], [0.1563956093287554, -0.21269443337356803], [0.17499103541231237, 0.2985373547088241], [0.12782499859472804, 0.4815648223887244], [0.12523150357922094, 0.41721548160929905], [0.2219315942794893, 0.47877846167983906], [0.48413541386850095, 0.008757361949769692], [0.4755390685857624, -0.4356393509319867], [0.27427215751846695, -0.2940897904508699], [-0.32213342140019896, 0.33175887910243107], [0.3241754832842173, -0.45547190176887226], [0.18462105786497715, 0.5797922578764358]]}, "id": "el29074580157008"});
      });
    });
}else{
    // require.js not available: dynamically load d3 & mpld3
    mpld3_load_lib("https://mpld3.github.io/js/d3.v3.min.js", function(){
         mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.2.js", function(){
                 
    mpld3.register_plugin("htmltooltip", HtmlTooltipPlugin);
    HtmlTooltipPlugin.prototype = Object.create(mpld3.Plugin.prototype);
    HtmlTooltipPlugin.prototype.constructor = HtmlTooltipPlugin;
    HtmlTooltipPlugin.prototype.requiredProps = ["id"];
    HtmlTooltipPlugin.prototype.defaultProps = {labels:null, hoffset:0, voffset:10};
    function HtmlTooltipPlugin(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    HtmlTooltipPlugin.prototype.draw = function(){
       var obj = mpld3.get_element(this.props.id);
       var labels = this.props.labels;
       var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("position", "absolute")
                    .style("z-index", "10")
                    .style("visibility", "hidden");

       obj.elements()
           .on("mouseover", function(d, i){
                              tooltip.html(labels[i])
                                     .style("visibility", "visible");})
           .on("mousemove", function(d, i){
                    tooltip
                      .style("top", d3.event.pageY + this.props.voffset + "px")
                      .style("left",d3.event.pageX + this.props.hoffset + "px");
                 }.bind(this))
           .on("mouseout",  function(d, i){
                           tooltip.style("visibility", "hidden");});
    };
    
    mpld3.register_plugin("toptoolbar", TopToolbar);
    TopToolbar.prototype = Object.create(mpld3.Plugin.prototype);
    TopToolbar.prototype.constructor = TopToolbar;
    function TopToolbar(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    TopToolbar.prototype.draw = function(){
      // the toolbar svg doesn't exist
      // yet, so first draw it
      this.fig.toolbar.draw();

      // then change the y position to be
      // at the top of the figure
      this.fig.toolbar.toolbar.attr("x", 150);
      this.fig.toolbar.toolbar.attr("y", 400);

      // then remove the draw function,
      // so that it is not called again
      this.fig.toolbar.draw = function() {}
    }
    
    mpld3.register_plugin("htmltooltip", HtmlTooltipPlugin);
    HtmlTooltipPlugin.prototype = Object.create(mpld3.Plugin.prototype);
    HtmlTooltipPlugin.prototype.constructor = HtmlTooltipPlugin;
    HtmlTooltipPlugin.prototype.requiredProps = ["id"];
    HtmlTooltipPlugin.prototype.defaultProps = {labels:null, hoffset:0, voffset:10};
    function HtmlTooltipPlugin(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    HtmlTooltipPlugin.prototype.draw = function(){
       var obj = mpld3.get_element(this.props.id);
       var labels = this.props.labels;
       var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("position", "absolute")
                    .style("z-index", "10")
                    .style("visibility", "hidden");

       obj.elements()
           .on("mouseover", function(d, i){
                              tooltip.html(labels[i])
                                     .style("visibility", "visible");})
           .on("mousemove", function(d, i){
                    tooltip
                      .style("top", d3.event.pageY + this.props.voffset + "px")
                      .style("left",d3.event.pageX + this.props.hoffset + "px");
                 }.bind(this))
           .on("mouseout",  function(d, i){
                           tooltip.style("visibility", "hidden");});
    };
    
    mpld3.register_plugin("toptoolbar", TopToolbar);
    TopToolbar.prototype = Object.create(mpld3.Plugin.prototype);
    TopToolbar.prototype.constructor = TopToolbar;
    function TopToolbar(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    TopToolbar.prototype.draw = function(){
      // the toolbar svg doesn't exist
      // yet, so first draw it
      this.fig.toolbar.draw();

      // then change the y position to be
      // at the top of the figure
      this.fig.toolbar.toolbar.attr("x", 150);
      this.fig.toolbar.toolbar.attr("y", 400);

      // then remove the draw function,
      // so that it is not called again
      this.fig.toolbar.draw = function() {}
    }
    
    mpld3.register_plugin("htmltooltip", HtmlTooltipPlugin);
    HtmlTooltipPlugin.prototype = Object.create(mpld3.Plugin.prototype);
    HtmlTooltipPlugin.prototype.constructor = HtmlTooltipPlugin;
    HtmlTooltipPlugin.prototype.requiredProps = ["id"];
    HtmlTooltipPlugin.prototype.defaultProps = {labels:null, hoffset:0, voffset:10};
    function HtmlTooltipPlugin(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    HtmlTooltipPlugin.prototype.draw = function(){
       var obj = mpld3.get_element(this.props.id);
       var labels = this.props.labels;
       var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("position", "absolute")
                    .style("z-index", "10")
                    .style("visibility", "hidden");

       obj.elements()
           .on("mouseover", function(d, i){
                              tooltip.html(labels[i])
                                     .style("visibility", "visible");})
           .on("mousemove", function(d, i){
                    tooltip
                      .style("top", d3.event.pageY + this.props.voffset + "px")
                      .style("left",d3.event.pageX + this.props.hoffset + "px");
                 }.bind(this))
           .on("mouseout",  function(d, i){
                           tooltip.style("visibility", "hidden");});
    };
    
    mpld3.register_plugin("toptoolbar", TopToolbar);
    TopToolbar.prototype = Object.create(mpld3.Plugin.prototype);
    TopToolbar.prototype.constructor = TopToolbar;
    function TopToolbar(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    TopToolbar.prototype.draw = function(){
      // the toolbar svg doesn't exist
      // yet, so first draw it
      this.fig.toolbar.draw();

      // then change the y position to be
      // at the top of the figure
      this.fig.toolbar.toolbar.attr("x", 150);
      this.fig.toolbar.toolbar.attr("y", 400);

      // then remove the draw function,
      // so that it is not called again
      this.fig.toolbar.draw = function() {}
    }
    
    mpld3.register_plugin("htmltooltip", HtmlTooltipPlugin);
    HtmlTooltipPlugin.prototype = Object.create(mpld3.Plugin.prototype);
    HtmlTooltipPlugin.prototype.constructor = HtmlTooltipPlugin;
    HtmlTooltipPlugin.prototype.requiredProps = ["id"];
    HtmlTooltipPlugin.prototype.defaultProps = {labels:null, hoffset:0, voffset:10};
    function HtmlTooltipPlugin(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    HtmlTooltipPlugin.prototype.draw = function(){
       var obj = mpld3.get_element(this.props.id);
       var labels = this.props.labels;
       var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("position", "absolute")
                    .style("z-index", "10")
                    .style("visibility", "hidden");

       obj.elements()
           .on("mouseover", function(d, i){
                              tooltip.html(labels[i])
                                     .style("visibility", "visible");})
           .on("mousemove", function(d, i){
                    tooltip
                      .style("top", d3.event.pageY + this.props.voffset + "px")
                      .style("left",d3.event.pageX + this.props.hoffset + "px");
                 }.bind(this))
           .on("mouseout",  function(d, i){
                           tooltip.style("visibility", "hidden");});
    };
    
    mpld3.register_plugin("toptoolbar", TopToolbar);
    TopToolbar.prototype = Object.create(mpld3.Plugin.prototype);
    TopToolbar.prototype.constructor = TopToolbar;
    function TopToolbar(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    TopToolbar.prototype.draw = function(){
      // the toolbar svg doesn't exist
      // yet, so first draw it
      this.fig.toolbar.draw();

      // then change the y position to be
      // at the top of the figure
      this.fig.toolbar.toolbar.attr("x", 150);
      this.fig.toolbar.toolbar.attr("y", 400);

      // then remove the draw function,
      // so that it is not called again
      this.fig.toolbar.draw = function() {}
    }
    
    mpld3.register_plugin("htmltooltip", HtmlTooltipPlugin);
    HtmlTooltipPlugin.prototype = Object.create(mpld3.Plugin.prototype);
    HtmlTooltipPlugin.prototype.constructor = HtmlTooltipPlugin;
    HtmlTooltipPlugin.prototype.requiredProps = ["id"];
    HtmlTooltipPlugin.prototype.defaultProps = {labels:null, hoffset:0, voffset:10};
    function HtmlTooltipPlugin(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    HtmlTooltipPlugin.prototype.draw = function(){
       var obj = mpld3.get_element(this.props.id);
       var labels = this.props.labels;
       var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("position", "absolute")
                    .style("z-index", "10")
                    .style("visibility", "hidden");

       obj.elements()
           .on("mouseover", function(d, i){
                              tooltip.html(labels[i])
                                     .style("visibility", "visible");})
           .on("mousemove", function(d, i){
                    tooltip
                      .style("top", d3.event.pageY + this.props.voffset + "px")
                      .style("left",d3.event.pageX + this.props.hoffset + "px");
                 }.bind(this))
           .on("mouseout",  function(d, i){
                           tooltip.style("visibility", "hidden");});
    };
    
    mpld3.register_plugin("toptoolbar", TopToolbar);
    TopToolbar.prototype = Object.create(mpld3.Plugin.prototype);
    TopToolbar.prototype.constructor = TopToolbar;
    function TopToolbar(fig, props){
        mpld3.Plugin.call(this, fig, props);
    };

    TopToolbar.prototype.draw = function(){
      // the toolbar svg doesn't exist
      // yet, so first draw it
      this.fig.toolbar.draw();

      // then change the y position to be
      // at the top of the figure
      this.fig.toolbar.toolbar.attr("x", 150);
      this.fig.toolbar.toolbar.attr("y", 400);

      // then remove the draw function,
      // so that it is not called again
      this.fig.toolbar.draw = function() {}
    }
    
                 mpld3.draw_figure("fig_el290745801570086793125459", {"axes": [{"xlim": [-0.70189582032870046, 0.71051473536226761], "yscale": "linear", "axesbg": "#FFFFFF", "texts": [], "zoomable": true, "images": [], "xdomain": [-0.70189582032870046, 0.71051473536226761], "ylim": [-0.70830339802964049, 0.69370701811001245], "paths": [], "sharey": [], "sharex": [], "axesbgalpha": null, "axes": [{"scale": "linear", "tickformat": "", "grid": {"gridOn": false}, "fontsize": null, "position": "bottom", "nticks": 0, "tickvalues": []}, {"scale": "linear", "tickformat": "", "grid": {"gridOn": false}, "fontsize": null, "position": "left", "nticks": 0, "tickvalues": []}], "lines": [], "markers": [{"edgecolor": "none", "facecolor": "#1B9E77", "edgewidth": 0.5, "yindex": 1, "coordinates": "data", "zorder": 2, "markerpath": [[[0.0, 9.0], [2.3868279, 9.0], [4.676218837063681, 8.051703224294176], [6.3639610306789285, 6.3639610306789285], [8.051703224294176, 4.676218837063681], [9.0, 2.3868279], [9.0, 0.0], [9.0, -2.3868279], [8.051703224294176, -4.676218837063681], [6.3639610306789285, -6.3639610306789285], [4.676218837063681, -8.051703224294176], [2.3868279, -9.0], [0.0, -9.0], [-2.3868279, -9.0], [-4.676218837063681, -8.051703224294176], [-6.3639610306789285, -6.3639610306789285], [-8.051703224294176, -4.676218837063681], [-9.0, -2.3868279], [-9.0, 0.0], [-9.0, 2.3868279], [-8.051703224294176, 4.676218837063681], [-6.3639610306789285, 6.3639610306789285], [-4.676218837063681, 8.051703224294176], [-2.3868279, 9.0], [0.0, 9.0]], ["M", "C", "C", "C", "C", "C", "C", "C", "C", "Z"]], "alpha": 1, "xindex": 0, "data": "data01", "id": "el29074665479312pts"}, {"edgecolor": "none", "facecolor": "#D95F02", "edgewidth": 0.5, "yindex": 1, "coordinates": "data", "zorder": 2, "markerpath": [[[0.0, 9.0], [2.3868279, 9.0], [4.676218837063681, 8.051703224294176], [6.3639610306789285, 6.3639610306789285], [8.051703224294176, 4.676218837063681], [9.0, 2.3868279], [9.0, 0.0], [9.0, -2.3868279], [8.051703224294176, -4.676218837063681], [6.3639610306789285, -6.3639610306789285], [4.676218837063681, -8.051703224294176], [2.3868279, -9.0], [0.0, -9.0], [-2.3868279, -9.0], [-4.676218837063681, -8.051703224294176], [-6.3639610306789285, -6.3639610306789285], [-8.051703224294176, -4.676218837063681], [-9.0, -2.3868279], [-9.0, 0.0], [-9.0, 2.3868279], [-8.051703224294176, 4.676218837063681], [-6.3639610306789285, 6.3639610306789285], [-4.676218837063681, 8.051703224294176], [-2.3868279, 9.0], [0.0, 9.0]], ["M", "C", "C", "C", "C", "C", "C", "C", "C", "Z"]], "alpha": 1, "xindex": 0, "data": "data02", "id": "el29074709227536pts"}, {"edgecolor": "none", "facecolor": "#7570B3", "edgewidth": 0.5, "yindex": 1, "coordinates": "data", "zorder": 2, "markerpath": [[[0.0, 9.0], [2.3868279, 9.0], [4.676218837063681, 8.051703224294176], [6.3639610306789285, 6.3639610306789285], [8.051703224294176, 4.676218837063681], [9.0, 2.3868279], [9.0, 0.0], [9.0, -2.3868279], [8.051703224294176, -4.676218837063681], [6.3639610306789285, -6.3639610306789285], [4.676218837063681, -8.051703224294176], [2.3868279, -9.0], [0.0, -9.0], [-2.3868279, -9.0], [-4.676218837063681, -8.051703224294176], [-6.3639610306789285, -6.3639610306789285], [-8.051703224294176, -4.676218837063681], [-9.0, -2.3868279], [-9.0, 0.0], [-9.0, 2.3868279], [-8.051703224294176, 4.676218837063681], [-6.3639610306789285, 6.3639610306789285], [-4.676218837063681, 8.051703224294176], [-2.3868279, 9.0], [0.0, 9.0]], ["M", "C", "C", "C", "C", "C", "C", "C", "C", "Z"]], "alpha": 1, "xindex": 0, "data": "data03", "id": "el29074665483024pts"}, {"edgecolor": "none", "facecolor": "#E7298A", "edgewidth": 0.5, "yindex": 1, "coordinates": "data", "zorder": 2, "markerpath": [[[0.0, 9.0], [2.3868279, 9.0], [4.676218837063681, 8.051703224294176], [6.3639610306789285, 6.3639610306789285], [8.051703224294176, 4.676218837063681], [9.0, 2.3868279], [9.0, 0.0], [9.0, -2.3868279], [8.051703224294176, -4.676218837063681], [6.3639610306789285, -6.3639610306789285], [4.676218837063681, -8.051703224294176], [2.3868279, -9.0], [0.0, -9.0], [-2.3868279, -9.0], [-4.676218837063681, -8.051703224294176], [-6.3639610306789285, -6.3639610306789285], [-8.051703224294176, -4.676218837063681], [-9.0, -2.3868279], [-9.0, 0.0], [-9.0, 2.3868279], [-8.051703224294176, 4.676218837063681], [-6.3639610306789285, 6.3639610306789285], [-4.676218837063681, 8.051703224294176], [-2.3868279, 9.0], [0.0, 9.0]], ["M", "C", "C", "C", "C", "C", "C", "C", "C", "Z"]], "alpha": 1, "xindex": 0, "data": "data04", "id": "el29074540723600pts"}, {"edgecolor": "none", "facecolor": "#66A61E", "edgewidth": 0.5, "yindex": 1, "coordinates": "data", "zorder": 2, "markerpath": [[[0.0, 9.0], [2.3868279, 9.0], [4.676218837063681, 8.051703224294176], [6.3639610306789285, 6.3639610306789285], [8.051703224294176, 4.676218837063681], [9.0, 2.3868279], [9.0, 0.0], [9.0, -2.3868279], [8.051703224294176, -4.676218837063681], [6.3639610306789285, -6.3639610306789285], [4.676218837063681, -8.051703224294176], [2.3868279, -9.0], [0.0, -9.0], [-2.3868279, -9.0], [-4.676218837063681, -8.051703224294176], [-6.3639610306789285, -6.3639610306789285], [-8.051703224294176, -4.676218837063681], [-9.0, -2.3868279], [-9.0, 0.0], [-9.0, 2.3868279], [-8.051703224294176, 4.676218837063681], [-6.3639610306789285, 6.3639610306789285], [-4.676218837063681, 8.051703224294176], [-2.3868279, 9.0], [0.0, 9.0]], ["M", "C", "C", "C", "C", "C", "C", "C", "C", "Z"]], "alpha": 1, "xindex": 0, "data": "data05", "id": "el29074709858768pts"}], "id": "el29074527433296", "ydomain": [-0.70830339802964049, 0.69370701811001245], "collections": [], "xscale": "linear", "bbox": [0.125, 0.125, 0.77500000000000002, 0.77500000000000002]}], "height": 480.0, "width": 1120.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"voffset": 10, "labels": ["Schindler's List", "One Flew Over the Cuckoo's Nest", "Gone with the Wind", "The Wizard of Oz", "Titanic", "Forrest Gump", "E.T. the Extra-Terrestrial", "The Silence of the Lambs", "Gandhi", "A Streetcar Named Desire", "The Best Years of Our Lives", "My Fair Lady", "Ben-Hur", "Doctor Zhivago", "The Pianist", "The Exorcist", "Out of Africa", "Good Will Hunting", "Terms of Endearment", "Giant", "The Grapes of Wrath", "Close Encounters of the Third Kind", "The Graduate", "Stagecoach", "Wuthering Heights"], "type": "htmltooltip", "id": "el29074665479312pts", "hoffset": 10}, {"type": "toptoolbar"}, {"voffset": 10, "labels": ["Casablanca", "Psycho", "Sunset Blvd.", "Vertigo", "Chinatown", "Amadeus", "High Noon", "The French Connection", "Fargo", "Pulp Fiction", "The Maltese Falcon", "A Clockwork Orange", "Double Indemnity", "Rebel Without a Cause", "The Third Man", "North by Northwest"], "type": "htmltooltip", "id": "el29074709227536pts", "hoffset": 10}, {"type": "toptoolbar"}, {"voffset": 10, "labels": ["The Godfather", "Raging Bull", "Citizen Kane", "The Godfather: Part II", "On the Waterfront", "12 Angry Men", "Rocky", "To Kill a Mockingbird", "Braveheart", "The Good, the Bad and the Ugly", "The Apartment", "Goodfellas", "City Lights", "It Happened One Night", "Midnight Cowboy", "Mr. Smith Goes to Washington", "Rain Man", "Annie Hall", "Network", "Taxi Driver", "Rear Window"], "type": "htmltooltip", "id": "el29074665483024pts", "hoffset": 10}, {"type": "toptoolbar"}, {"voffset": 10, "labels": ["West Side Story", "Singin' in the Rain", "It's a Wonderful Life", "Some Like It Hot", "The Philadelphia Story", "An American in Paris", "The King's Speech", "A Place in the Sun", "Tootsie", "Nashville", "American Graffiti", "Yankee Doodle Dandy"], "type": "htmltooltip", "id": "el29074540723600pts", "hoffset": 10}, {"type": "toptoolbar"}, {"voffset": 10, "labels": ["The Shawshank Redemption", "Lawrence of Arabia", "The Sound of Music", "Star Wars", "2001: A Space Odyssey", "The Bridge on the River Kwai", "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb", "Apocalypse Now", "The Lord of the Rings: The Return of the King", "Gladiator", "From Here to Eternity", "Saving Private Ryan", "Unforgiven", "Raiders of the Lost Ark", "Patton", "Jaws", "Butch Cassidy and the Sundance Kid", "The Treasure of the Sierra Madre", "Platoon", "Dances with Wolves", "The Deer Hunter", "All Quiet on the Western Front", "Shane", "The Green Mile", "The African Queen", "Mutiny on the Bounty"], "type": "htmltooltip", "id": "el29074709858768pts", "hoffset": 10}, {"type": "toptoolbar"}], "data": {"data04": [[-0.48383166475045314, 0.17406382605759155], [-0.3431621006015567, 0.6339455084054434], [0.42023926967786635, 0.585073332726518], [-0.17325065040967416, 0.23163649164649666], [0.6705408517106365, 0.1152867311811776], [-0.20507682543002934, 0.5602431727781544], [0.4029759387982718, 0.4993894350885348], [0.6671527866782192, 0.2655632808140779], [-0.02368751477042728, 0.34058596130883056], [0.06057638900463016, 0.6101307798961454], [-0.6012117652228453, -0.04229065076764765], [0.6299986440743635, 0.35408489380322294]], "data05": [[0.4425217895905002, -0.2796139796878817], [-0.24776866601229716, -0.5782685424165561], [0.5555461511292237, 0.486954891259419], [0.19708753275222002, -0.38902709232046384], [0.3497144798998901, -0.338553421833173], [-0.07419701411754268, -0.5782948227044011], [-0.014592308929045296, -0.6368511048162793], [0.025373394060233537, -0.634289200597481], [0.24399849236205579, -0.5034936076710894], [0.07277111225479607, -0.47961483445651304], [-0.1519065165847722, -0.338080020776755], [-0.015830214134386178, -0.36229007847066996], [-0.13402784922090072, -0.3012324095400005], [-0.23474733283083896, -0.4502062748678493], [0.12924047876683878, -0.6686238579502164], [0.08194147679809109, -0.3929722898416771], [-0.34747538257781435, -0.3233751877512795], [-0.3631413985443942, -0.4813272206475685], [-0.09731550319802962, -0.505864130911545], [0.18513473762402247, -0.5781596431297301], [-0.09597244991104013, -0.19942409220233107], [-0.18228725458498232, -0.5566467223632475], [-0.551994202072232, 0.33486446230226674], [-0.5679692454857176, -0.35356444529282777], [-0.45369369757595834, -0.44434234569143366], [0.3366116741827183, -0.6447240310583208]], "data02": [[-0.2476475600239232, -0.26290199748846194], [-0.22919155130164443, 0.06968880208772948], [-0.42967373628736466, 0.28652830354480197], [-0.3531795894914802, 0.12742474874876483], [-0.5517590615479852, -0.22488031423191712], [0.4134372284409409, 0.40907893375027393], [-0.6619219366770693, -0.20578641688667848], [-0.4603909162269872, 0.008430725029157468], [-0.3422448822106277, 0.03699561151307461], [-0.3438274431555653, -0.06956150821349773], [-0.3384187737692901, -0.1515124959398215], [-0.18283874549876644, 0.14829844310283077], [-0.46586683087784553, -0.09919136771199337], [-0.577910557660688, 0.28870430670538155], [-0.20956788370183355, -0.0574148454899521], [-0.20029308653202116, 0.00718931223386455]], "data03": [[0.18558490034956887, -0.01077771968604301], [-0.13262115988334475, 0.5751789037009231], [0.016222043434641144, 0.4652342083561871], [0.07240937947290513, 0.13247203862675336], [-0.05239281560115413, 0.12267112673062845], [0.5241688637949986, 0.14425768177773893], [-0.2825557188697044, 0.2745647039405087], [0.21864153351095966, 0.22101476971173736], [0.49293979852148206, -0.1406180288639719], [-0.07221741889036004, 0.5688366094319275], [-0.5967680343768968, 0.1894475004960752], [0.2030557040289471, 0.06941302351286169], [0.5649139525233913, 0.34616110908884656], [-0.42188287709302075, 0.4618936364485825], [-0.30512268820937116, 0.4768633838569787], [0.6449291941438089, -0.15516297397920956], [-0.18081125741175175, 0.4765240199441122], [-0.027643220902818993, 0.6540274780305884], [0.6687778032882542, -0.08795572251657516], [-0.5534118533588518, 0.02875489034480997], [-0.5807159767006421, 0.10579656075156939]], "data01": [[-0.0777242299467317, -0.4515361500051302], [0.05143904563855998, 0.25947569793979247], [0.05926003443907459, -0.04759931281928853], [-0.4336747338877505, -0.2971244895104658], [0.6035469203843735, -0.3456193989894745], [0.35577780891092403, 0.007409352966807421], [-0.019806795422961994, -0.044100107912120406], [0.5183164260703591, -0.25353575550390045], [0.43257291891111244, 0.1381593571372851], [0.3437182373924481, 0.24527960034963084], [0.31733764740406106, 0.08349042218139716], [-0.19661734109288, 0.39627304179640405], [0.3443594003836902, -0.13069722017172503], [0.1620196922509593, -0.11876438020876365], [0.1563956093287554, -0.21269443337356803], [0.17499103541231237, 0.2985373547088241], [0.12782499859472804, 0.4815648223887244], [0.12523150357922094, 0.41721548160929905], [0.2219315942794893, 0.47877846167983906], [0.48413541386850095, 0.008757361949769692], [0.4755390685857624, -0.4356393509319867], [0.27427215751846695, -0.2940897904508699], [-0.32213342140019896, 0.33175887910243107], [0.3241754832842173, -0.45547190176887226], [0.18462105786497715, 0.5797922578764358]]}, "id": "el29074580157008"});
            })
         });
}