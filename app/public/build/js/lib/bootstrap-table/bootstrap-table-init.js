$(document).ready(function(){var o=$("#table"),t=$("#remove"),n=[];o.bootstrapTable({iconsPrefix:"font-icon",icons:{paginationSwitchDown:"font-icon-arrow-square-down",paginationSwitchUp:"font-icon-arrow-square-down up",refresh:"font-icon-refresh",toggle:"font-icon-list-square",columns:"font-icon-list-rotate","export":"font-icon-download",detailOpen:"font-icon-plus",detailClose:"font-icon-minus-1"},paginationPreText:'<i class="font-icon font-icon-arrow-left"></i>',paginationNextText:'<i class="font-icon font-icon-arrow-right"></i>'}),o.on("check.bs.table uncheck.bs.table check-all.bs.table uncheck-all.bs.table",function(){t.prop("disabled",!o.bootstrapTable("getSelections").length),n=getIdSelections()}),t.click(function(){var n=getIdSelections();o.bootstrapTable("remove",{field:"id",values:n}),t.prop("disabled",!0)}),$("#toolbar").find("select").change(function(){o.bootstrapTable("refreshOptions",{exportDataType:$(this).val()})})});