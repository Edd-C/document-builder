<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<link rel="stylesheet" type="text/css" href="css/main.css">

		<!-- Libraries -->
		<script src="lib/jquery.js"></script>
		<script src="lib/jquery-ui.js"></script>
		<script src="lib/bootstrap.js"></script>
		<script src="lib/vue.js"></script>
		<script src="lib/interact.js"></script>

		<!-- Helpers -->
		<script src="js/helperFunctions.js"></script>

		<!-- Classes -->
		<script src="js/classes/draganddrop.js"></script>
		<script src="js/classes/element.js"></script> 
		<script src="js/classes/textbox.js"></script>

	</head>

	<body style="background-color:#ededed;">
		
		<div id="app">

			<div id="topMenu">
				<button type="button" onclick="devAddNewTextbox()">Add textbox</button>
			</div>

			<ul id="elementToolbar" class="nav nav-pills nav-stacked" style="width:50px">
				<li class="toolbar_pill active"><a href="#tab_select" data-toggle="pill"><span class="glyphicon glyphicon glyphicon-hand-up" aria-hidden="true"></span></a></li>
				<li class="toolbar_pill "><a href="#tab_text" data-toggle="pill"><span class="glyphicon glyphicon glyphicon glyphicon-text-size" aria-hidden="true"></span></a></li>
				<li class="toolbar_pill "><a href="#tab_c" data-toggle="pill"><span class="glyphicon glyphicon glyphicon glyphicon glyphicon-picture" aria-hidden="true"></span></a></li>
				<li class="toolbar_pill "><a href="#tab_d" data-toggle="pill"><span class="glyphicon glyphicon glyphicon glyphicon glyphicon-facetime-video" aria-hidden="true"></span></a></li>
			</ul>
			<div id="elementToolbarTabsContainer" class="tab-content" style="width:150px;">
				<div class="tab-pane active" id="tab_select">
					<h4>Pane A</h4>
					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames
					ac turpis egestas.</p>
				</div>
				<div class="tab-pane" id="tab_text">
					<div class="row">
						<div style="color: #668c98;" class="col-xs-10">Text Properties</div>
					</div>

					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames
					ac turpis egestas.</p>
				</div>
				<div class="tab-pane" id="tab_c">
					<h4>Pane C</h4>
					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames
					ac turpis egestas.</p>
				</div>
				<div class="tab-pane" id="tab_d">
					<h4>Pane D</h4>
					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames
					ac turpis egestas.</p>
				</div>
			</div>

			<div id="elements" class="elements"><!--Elements Here --><div>
		</div>

		<script>
			function devAddNewTextbox() {
				var test = new Textbox(100,100,100,100);
				app.elements.textboxes.push(test);
				console.log(app.elements);
			}

			var app = {
				elements: {
				    textboxes: []
				}
			}
		</script>
	</body>
</html>