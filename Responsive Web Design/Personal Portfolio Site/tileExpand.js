function tileExpand(target) {
	console.log(target.style.gridArea);
	if (target.style.gridArea != "auto / auto / auto / span 2") {
		target.style.gridArea = "auto / auto / auto / span 2";
		switch (target.id) {
		case "codethink-tile":
			document.getElementById("codethink-text").style.display = "block";
			break;
		case "lm-tile":
			document.getElementById("lm-text").style.display = "block";
			break;
		case "pm-tile":
			document.getElementById("pm-text").style.display = "block";
			break;     
		}
	} else {
		target.style.gridArea = "auto";
		switch (target.id) {
		case "codethink-tile":
			document.getElementById("codethink-text").style.display = "none";
			break;
		case "lm-tile":
			document.getElementById("lm-text").style.display = "none";
			break;
		case "pm-tile":
			document.getElementById("pm-text").style.display = "none";
			break;
		}
	}
}
