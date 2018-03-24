$(function(){
	$('.close').click(function(){
		$(".nav").css("display","none");
	})
	$('.navbar-toggle').click(function(){
		$(".nav").css("display","block");
	})
	
	new WOW({
		offset: 100
	}).init();

	 function setupRadios() {
            var inputs = document.getElementsByTagName("input");
            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].className != "radio")
                    continue;
                var input = inputs[i];
                var parent = input.parentNode;
                var newInput = document.createElement("span");
                newInput.setAttribute("class", "radio");
                newInput.setAttribute("data-value", input.value);
                newInput.input = input;
                input.newInput = newInput;
                input.changed = function () {
                    if(!this.newInput)
                        return;
                    if (this.checked)
                        this.newInput.className = "radio checked";
                    else
                        this.newInput.className = "radio";
                }
                parent.insertBefore(newInput, input);
                function click() {
                    this.input.checked = true;
                    this.className = "radio checked";

                    for (var i = 0; i < inputs.length; i++) {
                        var input = inputs[i];
                        input.changed.apply(input);
                    }
                }
                newInput.onclick = click;
            }
            $(".radio:first").addClass("checked");
        }
        setupRadios();
})
$(window).resize(function() {
	if ($(window).width() >= '768'){
           $(".nav").css("display","block");
        }
        if ($(window).width() < '768'){
        	$(".nav").css("display","none");
        }
});

