/* 
 * pevb-bootstrap
 *	
 * Version: 0.1.0
 * Author : pvbarredo@gmail.com
 * 
 * Description: Custom alert confirmation box made using Bootstrap
 */


angular.module("pevb.bootstrap",["pevb.bootstrap.alert"]);
angular.module("pevb.bootstrap.alert",[])
	.constant()
	.factory('$alert', function(){
		return {
			confirmationBox : confirmationBox,
			consoleSample : consoleSample
		}

		function consoleSample(){
			console.log("Testing the versioning");
		}

		function confirmationBox(title, text, callbackFn, id){
	        var modalId = id ? id : 'modalWindow';
	        var titleText  = (title) ? 
	                      '<div class="modal-header">' +
	                          '<h4 class="modal-title">' + title +'</h4>' +
	                      '</div>' : '';
	        var messageBox = ''+
	                '<div class="modal fade" id="'+ modalId+'" tabindex="-1" role="dialog">' +
	                  '<div class="modal-dialog" role="document">' +
	                    '<div class="modal-content">' +
	                      titleText +
	                      '<div class="modal-body">'+
	                         text +
	                      '</div>' +
	                      '<div class="modal-footer">' +
	                        '<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>' +
	                        '<button type="button" id="confirmDialog'+modalId+'" class="btn btn-primary" data-dismiss="modal">Okay</button>' +
	                      '</div>' +
	                    '</div>' +
	                  '</div>' +
	                '</div>';
	        if( !_.isEmpty($('#'+modalId +'')) ){
	          $('#'+modalId +'').remove();
	        }    
	        $('body').append(messageBox);                
	        $('#confirmDialog'+modalId +'').on("click",callbackFn);
	        $('#'+modalId +'').modal('show');
	        return false;
	    };
	});
