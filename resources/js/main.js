(function($){
 
     $.fn.multipleInput = function() {
 
          return this.each(function() {
               // create html elements
               // list of email addresses as unordered list
               var $list = $('<ul/>');
               
               // input
               var $input = $('<input type="text" />').keyup(function(event) {
				    // key press is space or comma
                    if(event.which == 32 || event.which == 188) {
                        
                         // remove space/comma from value
                         var val = $(this).val().slice(0, -1); 
                         var email = $.trim(val);

                         if(email.length > 0) {

                            // validate an email
                            var checkValidEmail = validateEmail(email);
                            var errorClass = toggleErrorClass(checkValidEmail);

							// append to list of emails with remove button
							$list.append($('<li class="multipleInput-email' + errorClass + '"><span>' + email + '</span></li>')
								 .append($('<a href="#" class="multipleInput-close" title="Remove" />')
								 .click(function(e) {
										    $(this).parent().remove();
										    e.preventDefault();
								        })
								)
							);
                           

							$(this).attr('placeholder', '');
							// empty input
							$(this).val('');
                         }
                         else {
                              $(this).val('');
                         }
                         

                    }
               });
 
               // container div
               var $container = $('<div class="multipleInput-container" />').click(function() {
                    $input.focus();
               });
 
               // insert elements into DOM
               $container.append($list).append($input).insertAfter($(this));
 
               // add onsubmit handler to parent form to copy emails into original input as csv before submitting
               var $orig = $(this);
               $(this).closest('form').submit(function(e) {
 
                    var emails = new Array();
                    $('.multipleInput-email span').each(function() {
                         emails.push($(this).html());
                    });
                    emails.push($input.val());
 
                    $orig.val(emails.join());
               });
               return $(this).hide();
          });
     };   
     
     
     $.fn.multipleInputOutlook = function() {
          return this.each(function() {
               // create html elements
               // list of email addresses as unordered list
               $list = $('<ul/>');
               
               // input
               var $input = $('<input type="text" />').keyup(function(event) {
				    // key press is space or comma
                    if(event.which == 32 || event.which == 188) {
                        
                         // remove space/comma from value
                         var val = $(this).val().slice(0, -1); 
                         var email = $.trim(val);

                         if(email.length > 0) {
							// first letter of the name 
							var firstLetter = email[0].toUpperCase();
                             // validate an email
                            var checkValidEmail = validateEmail(email);
                            var errorClass = toggleErrorClass(checkValidEmail);
							
							// append to list of emails with remove button
							$list.append($('<li class="multipleInput-email-outlook'+ errorClass +'"><div class="multipleInput-cicle-outlook"><div class="multipleInput-cicle-outlook-letter">' + firstLetter +'</div></div> <span>' +email+ '</span></li>')
								 .append($('<div class="multipleInput-cicle-outlook gray"><a href="#" class="multipleInput-close-outlook" title="Remove" /></div>')
									.click(function(e) {
										$(this).parent().remove();
										e.preventDefault();
									})
								 )
								//.append($('<div style="padding-left:10px;"></div>'))
							);
							$(this).attr('placeholder', '');
							// empty input
							$(this).val('');
                         }
                         else {
                              $(this).val('');
                         }
                         

                    }
               });
 
               // container div
               var $container = $('<div class="multipleInput-container-outlook" />').click(function() {
                    $input.focus();
               });
 
               // insert elements into DOM
               $container.append($list).append($input).insertAfter($(this));
               
               // add onsubmit handler to parent form to copy emails into original input as csv before submitting
               var $orig = $(this);
               $(this).closest('form').submit(function(e) {
 
                    var emails = new Array();
                    $('.multipleInput-email-outlook span').each(function() {
                         emails.push($(this).html());
                    });
                    emails.push($input.val());
 
                    $orig.val(emails.join());
               });
               return $(this).hide();
          });
     };
     
     $.fn.multipleInputGmail = function() {
 
          return this.each(function() {
               // create html elements
               // list of email addresses as unordered list
               var $list = $('<ul/>');
               
               // input
               var $input = $('<input type="text" />').keyup(function(event) {
				    // key press is space or comma
                    if(event.which == 32 || event.which == 188) {
                        
                         // remove space/comma from value
                         var val = $(this).val().slice(0, -1); 
                         var email = $.trim(val);

                         if(email.length > 0) {
                            // validate an email
                            var checkValidEmail = validateEmail(email);
                            var errorClass = toggleErrorClass(checkValidEmail); 

							// append to list of emails with remove button
							$list.append($('<li class="multipleInput-email-gmail'+ errorClass +'"><span>' + email + '</span></li>')
								.append($('<a href="#" class="multipleInput-close-gmail" title="Remove" />')
									.click(function(e) {
										$(this).parent().remove();
										e.preventDefault();
									})
								)
							);
							$(this).attr('placeholder', '');
							// empty input
							$(this).val('');
                         }
                         else {
                              $(this).val('');
                         }
                         

                    }
               });
 
               // container div
               var $container = $('<div class="multipleInput-container" />').click(function() {
                    $input.focus();
               });
 
               // insert elements into DOM
               $container.append($list).append($input).insertAfter($(this));
 
               // add onsubmit handler to parent form to copy emails into original input as csv before submitting
               var $orig = $(this);
               $(this).closest('form').submit(function(e) {
 
                    var emails = new Array();
                    $('.multipleInput-email span').each(function() {
                         emails.push($(this).html());
                    });
                    emails.push($input.val());
 
                    $orig.val(emails.join());
               });
               return $(this).hide();
          });
     };
     
     $.fn.multipleInputYahoo = function() {
 
          return this.each(function() {
               // create html elements
               // list of email addresses as unordered list
               var $list = $('<ul/>');
               
               // input
               var $input = $('<input type="text" />').keyup(function(event) {
				    // key press is space or comma
                    if(event.which == 32 || event.which == 188) {
                        
                         // remove space/comma from value
                         var val = $(this).val().slice(0, -1); 
                         var email = $.trim(val);

                         if(email.length > 0) {
                            // validate an email
                            var checkValidEmail = validateEmail(email);
                            var errorClass = toggleErrorClass(checkValidEmail); 

							// append to list of emails with remove button
							$list.append($('<li class="multipleInput-email-yahoo' + errorClass +'"><span>' + email + '</span></li>')
								.append($('<a href="#" class="multipleInput-close-yahoo" title="Remove" />')
									.click(function(e) {
										$(this).parent().remove();
										e.preventDefault();
									})
								)
							);
							$(this).attr('placeholder', '');
							// empty input
							$(this).val('');
                         }
                         else {
                              $(this).val('');
                         }
                         

                    }
               });
 
               // container div
               var $container = $('<div class="multipleInput-container" />').click(function() {
                    $input.focus();
               });
 
               // insert elements into DOM
               $container.append($list).append($input).insertAfter($(this));
 
               // add onsubmit handler to parent form to copy emails into original input as csv before submitting
               var $orig = $(this);
               $(this).closest('form').submit(function(e) {
 
                    var emails = new Array();
                    $('.multipleInput-email span').each(function() {
                         emails.push($(this).html());
                    });
                    emails.push($input.val());
 
                    $orig.val(emails.join());
               });
               return $(this).hide();
          });
     }; 
     
	$.fn.multipleInputRoyalCopenhagen = function() {
 
          return this.each(function() {
               // create html elements
               // list of email addresses as unordered list
               var $list = $('<ul/>');
               
               // input
               var $input = $('<input type="text" />').keyup(function(event) {
				    // key press is space or comma
                    if(event.which == 32 || event.which == 188) {
                        
                         // remove space/comma from value
                         var val = $(this).val().slice(0, -1); 
                         var email = $.trim(val);

                         if(email.length > 0) {
                            // validate an email
                            var checkValidEmail = validateEmail(email);
                            var errorClass = toggleErrorClass(checkValidEmail); 
							
                            // append to list of emails with remove button
							$list.append($('<li class="multipleInput-email-royalcopenhagen '+ errorClass +'"><span>' + email + '</span></li>')
								.append($('<a href="#" class="multipleInput-close-royalcopenhagen" title="Remove" />')
									.click(function(e) {
										$(this).parent().remove();
										e.preventDefault();
									})
								)
							);
							$(this).attr('placeholder', '');
							// empty input
							$(this).val('');
                         }
                         else {
                              $(this).val('');
                         }
                         

                    }
               });
 
               // container div
               var $container = $('<div class="multipleInput-container" />').click(function() {
                    $input.focus();
               });
 
               // insert elements into DOM
               $container.append($list).append($input).insertAfter($(this));
 
               // add onsubmit handler to parent form to copy emails into original input as csv before submitting
               var $orig = $(this);
               $(this).closest('form').submit(function(e) {
 
                    var emails = new Array();
                    $('.multipleInput-email span').each(function() {
                         emails.push($(this).html());
                    });
                    emails.push($input.val());
 
                    $orig.val(emails.join());
               });
               return $(this).hide();
          });
     };  

	function validateEmail($email) {
  		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  	    return emailReg.test( $email );
	}

    function toggleErrorClass(checkValidEmail) {
        var errorClass = ""; 
        if(!checkValidEmail) {
            errorClass = " errorClass";
        }
        return errorClass;
    }
           
})( jQuery );


$('#my_input').multipleInput();
$('#my_input_outlook').multipleInputOutlook();
$('#my_input_gmail').multipleInputGmail();
$('#my_input_yahoo').multipleInputYahoo();
$('#my_input_royalcopenhagen').multipleInputRoyalCopenhagen();
