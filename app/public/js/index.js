$(function() {
	//上传控件代码
	$('#file_upload').uploadifive({
		'uploadScript': '/files/upload',
		'buttonClass': 'btn upload-btn',
		'buttonText': '添加附件',
		'auto': true,
		'fileSizeLimit': (1024 * 5),
		'onUploadComplete': function(file, data) {
			data = JSON.parse(data);
			var name = data.name;

			var $img = $("<img src="+name+">");
			$("#imgShow").append($img);
		},
		'onCancel': function(file) {
			
		}
	});
});