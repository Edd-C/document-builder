<!DOCTYPE html>
<html>
	<head>
		 <!-- CSS. -->
	    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
	    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/codemirror.min.css">
	    <link href="https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.8.4/css/froala_editor.pkgd.min.css" rel="stylesheet" type="text/css" />
	    <link href="https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.8.4/css/froala_style.min.css" rel="stylesheet" type="text/css" />
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

		<link rel="stylesheet" type="text/css" href="css/main.css">
		<link rel="stylesheet" type="text/css" href="css/custom-theme.css">
		<link rel="stylesheet" type="text/css" href="css/jquery.bootstrap-touchspin.css">
		<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

		<!-- JS -->
		<script src="lib/jquery.js"></script>
		<!-- <script src="lib/jquery-ui.js"></script> -->
		<script src="lib/bootstrap.js"></script>
		<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
		<script src="lib/jquery.bootstrap-touchspin.js"></script>
		<script src="lib/jquery.mousewheel.js"></script>
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/codemirror.min.js"></script>
    	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/mode/xml/xml.min.js"></script>
	
    	 <!-- Include Editor JS files. -->
    	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.8.4/js/froala_editor.pkgd.min.js"></script>
		<script src="js/helperFunctions.js"></script>
		<script src="js/classes/draganddrop.js"></script>
		<script src="js/classes/element.js"></script> 
		<script src="js/classes/textbox.js"></script>
		<script src="js/classes/editor.js"></script>

	</head>

	<body style="background-color:#ededed;">
		
		<div id="app">

			<div id="topMenu">
				<p style="color: #668c98; font-size:20px; font-weight: bold; padding-left:20px;"> Document Builder</p>			
			</div>

			<div id="right_container">
				<div id="elementToolbar">
					<ul id="elementToolbar" class="nav nav-pills nav-stacked">
						<li class="toolbar_pill active"><a href="#tab_select" data-toggle="pill"><span class="glyphicon glyphicon glyphicon-hand-up" aria-hidden="true"></span></a></li>
						<li class="toolbar_pill "><a href="#tab_text" data-toggle="pill"><span class="glyphicon glyphicon glyphicon glyphicon-text-size" aria-hidden="true"></span></a></li>
						<li class="toolbar_pill "><a href="#tab_c" data-toggle="pill"><span class="glyphicon glyphicon glyphicon glyphicon glyphicon-picture" aria-hidden="true"></span></a></li>
						<li class="toolbar_pill "><a href="#tab_d" data-toggle="pill"><span class="glyphicon glyphicon glyphicon glyphicon glyphicon-facetime-video" aria-hidden="true"></span></a></li>
					</ul>
				</div>
				<div id="elementToolbarTabsContainer" class="tab-content">
					<div class="tab-pane active" id="tab_select">
						<p class="toolbar_text toolbar_title">Select</p>
						<p class="toolbar_text">Use the cursor to select an element.</p>
					</div>
					<div class="tab-pane" id="tab_text">
						<p class="toolbar_text toolbar_title" >Text Properties</p>
						<p class="toolbar_text">Click on the page to create a textbox</p>
						<p class="toolbar_text"><b>Drag</b> to move</p>
						<p class="toolbar_text"><b>Click twice</b> to edit</p>

						<div id="tp_edit_properties" style='display:none;'>
							<div class="row tp_row">
								<div class="col-xs-6 tp_label">
									Width
								</div>
								<div class="col-xs-6 tp_input">
									<input type="text" name="tp_width" id="tp_width" class="ts_button form-control">
								</div>
							</div>

							<div class="row tp_row">
								<div class="col-xs-6 tp_label">
									Height
								</div>
								<div class="col-xs-6 tp_input">
									<input type="text" name="tp_height" id="tp_height" class="ts_button form-control">
								</div>
							</div>

							<div class="row tp_row">
								<div class="col-xs-6 tp_label">
									Rotate
								</div>
								<div class="col-xs-6 tp_input">
									<input type="text" name="tp_rotation" id="tp_rotation" class="ts_button_rotate form-control">
								</div>
							</div>
						</div>
					</div>
					<div class="tab-pane" id="tab_c">
						<p class="toolbar_text toolbar_title" >Image Properties</p>
						<p class="toolbar_text">Coming soon</p>
					</div>
					<div class="tab-pane" id="tab_d">
						<p class="toolbar_text toolbar_title" >Video Properties</p>
						<p class="toolbar_text">Coming soon</p>
					</div>
				</div>
			</div>

			<div id="left_container" style="padding:10px;">
			</div>

			<div id="workspace_container">
				<div id="froala_toolbar_container">
					<div style="position:relative; width:500px; margin: 0 auto;" id="froala_toolbar"></div>
				</div>

				<div id="elements" class="elements"></div>
			</div>

		</div>

		<script>
			var editor = new Editor();
			
			var app = {
				elements: {
				    textboxes: []
				}
			}

			// Init text input spinners
			$( function() {
			  	//Init basic spinner
			  	var spinner = $( ".ts_button" ).spinner();
			    spinner.spinner( "value", 0 );
			    spinner.spinner('option', 'min', 0);

			    // Init rotation spinner (0 - 360 value). Loops.
			    var spinner_rotate = $( ".ts_button_rotate" ).spinner();
			    spinner_rotate.spinner( "value", 0 );
			    spinner_rotate.spinner('option', 'min', 0);
				spinner_rotate.spinner('option', 'max', 360);

				// When the spinner is started
				spinner_rotate.on( "spinstart", function( event, ui ) {
					startval = $(this).spinner("value"); // Get starting val

					// When the spinner ends
					spinner_rotate.on( "spinstop", function( event, ui ) {
						stopval = $(this).spinner("value"); // Get ending val

						// If trying to go below 0, set 360
						if(stopval == 0 && stopval == startval) { 
							$(this).spinner( "value", 360 );
						}

						// If trying to go above 360, set 0
						if(stopval == 360 && stopval == startval){ 
							$(this).spinner( "value", 0 );
						}
					});
				});
			});
		</script>
	</body>
</html>