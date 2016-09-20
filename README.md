# SendToEmailSection

function createCustomEmailListItem(inputElement, list, val) {
	var inputName = $(inputElement).closest('.email-section').find('input').get(0).id.split("_");
    var	inputEmailType = inputName[inputName.length - 1] !== "input" ? "" : inputName[inputName.length - 1];
    console.log("Type:" + inputEmailType);
	

}


			<div class="email-section">			
				<div class="email-section-input">
  					<div class="email-section-to">To:</div>
  					<input id="my_input_yahoo"/>
				</div>
				<div class="email-yahoo-icon"></div>
			</div>
