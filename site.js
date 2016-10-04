$(function() {
	$('.input-row input').on({
		focus: focusInput,
		blur: blurInput
	});

	function focusInput() {
		$(this).closest('.input-row').addClass('focused');
	}

	function blurInput() {
		$(this).closest('.input-row').removeClass('focused');
	}
});
