define(["builder/views/drawerFieldTypeSettingListComposite"],function(t){var e=Marionette.Object.extend({initialize:function(){nfRadio.channel("list-repeater").reply("get:settingChildView",this.getSettingChildView,this),nfRadio.channel("list-repeater").reply("update:optionSortable",this.updateOptionSortable,this),nfRadio.channel("list-repeater").reply("stop:optionSortable",this.stopOptionSortable,this),nfRadio.channel("list-repeater").reply("start:optionSortable",this.startOptionSortable,this)},getSettingChildView:function(e){return t},updateOptionSortable:function(t,e){var i=jQuery(t).sortable("toArray");_.each(i,function(t,i){e.collection.get({cid:t}).set("order",i)}),e.collection.sort(),nfRadio.channel("list-repeater").request("trigger:change",e.collection,e.fieldModel)},stopOptionSortable:function(t){jQuery(t.item).css("opacity","")},startOptionSortable:function(t){jQuery(t.placeholder).find("div").remove(),jQuery(t.item).css("opacity","0.5").show()}});return e});