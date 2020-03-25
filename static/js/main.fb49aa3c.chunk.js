(this.webpackJsonpcookbook=this.webpackJsonpcookbook||[]).push([[0],[,function(e,t,a){e.exports={recipe:"Recipe_recipe__14ChR",low__level:"Recipe_low__level__1kBMB",normal__level:"Recipe_normal__level__26xRX",high__level:"Recipe_high__level__3wPjb",recipe__spans:"Recipe_recipe__spans__18kfV",recipe__span:"Recipe_recipe__span__1Svgt",recipe__createDate:"Recipe_recipe__createDate__3OACK",recipe__editDate:"Recipe_recipe__editDate__1-88P",recipe__wrapper:"Recipe_recipe__wrapper__34yz8",recipe__title:"Recipe_recipe__title__QIY4z",recipe__description:"Recipe_recipe__description__1v4DD",recipe__buttons:"Recipe_recipe__buttons__3VxbL",recipe__button:"Recipe_recipe__button__2KlJZ"}},function(e,t,a){e.exports={recipes__form:"RecipeEditor_recipes__form__Pmq7L",recipes__label:"RecipeEditor_recipes__label__2s932",recipes__input:"RecipeEditor_recipes__input__e4r01",recipes__textarea:"RecipeEditor_recipes__textarea__1USa0",recipes__labelLevel:"RecipeEditor_recipes__labelLevel__270tL",recipes__buttons:"RecipeEditor_recipes__buttons__30LPU",recipes__button:"RecipeEditor_recipes__button__A9wRj",recipes__labelDescription:"RecipeEditor_recipes__labelDescription__2MbSL"}},function(e,t,a){e.exports={container:"App_container__16xz_",recipes__header:"App_recipes__header__g166u",recipes__button:"App_recipes__button__tvMW1",recipes__quote:"App_recipes__quote__34Q6L",recipes__description:"App_recipes__description__tBBxf",recipes__author:"App_recipes__author__2AG1y",recipes__main:"App_recipes__main__3PefJ",recipes__wrapper:"App_recipes__wrapper__2-NsN"}},,,,,,,,function(e,t,a){e.exports={recipes__list:"RecipeList_recipes__list__2JbIq",recipes__item:"RecipeList_recipes__item__W3-VV"}},function(e,t,a){e.exports={backdrop:"Modal_backdrop__3FAPo",modal:"Modal_modal__P3_V5"}},function(e,t,a){e.exports={recipes__list:"Legend_recipes__list__2AcxD",recipes__item:"Legend_recipes__item__3NWjf"}},,,,function(e,t,a){e.exports={recipes__input:"RecipeFilter_recipes__input__1J-fg"}},,function(e,t,a){e.exports=a(35)},,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),n=a(15),r=a.n(n),s=a(18),o=a(8),l=a(4),p=a(5),_=a(6),u=a(7),d=a(16),m=a.n(d),h=a(10),v=function(e){var t=e.options,a=e.value,i=e.onChange;return c.a.createElement("select",{name:"level",value:a,onChange:i},t.map((function(e){return c.a.createElement("option",{key:e,value:e},e)})))},f=Object.freeze({LOW:"low",NORMAL:"normal",HIGH:"high"}),b=a(2),E=a.n(b),R=Object.values(f),g=function(e){Object(u.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(l.a)(this,a);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={text:e.props.text,description:e.props.description,level:e.props.level,createDate:e.props.createDate,editDate:e.props.editDate},e.handleChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSave(Object(o.a)({},e.state)),e.setState({text:"",description:"",level:f.NORMAL,createDate:"",editDate:""})},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state,t=e.text,a=e.description,i=e.level,n=this.props.onCancel;return c.a.createElement("form",{className:E.a.recipes__form,onSubmit:this.handleSubmit},c.a.createElement("label",{className:"".concat(E.a.recipes__label," ").concat(E.a.recipes__labelText)},c.a.createElement("input",{className:E.a.recipes__input,type:"text",name:"text",value:t,onChange:this.handleChange,placeholder:"Enter the name of the recipe"})),c.a.createElement("label",{className:"".concat(E.a.recipes__label," ").concat(E.a.recipes__labelDescription)},c.a.createElement("textarea",{className:E.a.recipes__textarea,name:"description",value:a,onChange:this.handleChange,placeholder:"Enter the description for your recipe"})),c.a.createElement("label",{className:"".concat(E.a.recipes__label," ").concat(E.a.recipes__labelLevel)},"Select the recipe difficulty level:",c.a.createElement(v,{options:R,value:i,onChange:this.handleChange})),c.a.createElement("div",{className:E.a.recipes__buttons},c.a.createElement("button",{className:E.a.recipes__button,type:"submit"},"Save"),c.a.createElement("button",{className:E.a.recipes__button,type:"button",onClick:n},"Cancel")))}}]),a}(i.Component);g.defaultProps={text:"",description:"",level:f.NORMAL,createDate:"",editDate:""};var N=a(1),C=a.n(N),D=function(e){var t=e.text,a=e.description,i=e.level,n=e.createDate,r=e.editDate,s=e.onDeleteRecipe,o=e.onEditRecipe;return c.a.createElement("div",{className:"".concat(C.a.recipe," ").concat(C.a["".concat(i,"__level")])},c.a.createElement("div",{className:C.a.recipe__spans},c.a.createElement("span",{className:"".concat(C.a.recipe__span," ").concat(C.a.recipe__createDate)},n),c.a.createElement("span",{className:"".concat(C.a.recipe__span," ").concat(C.a.recipe__editDate)},r)),c.a.createElement("div",{className:C.a.recipe__wrapper},c.a.createElement("h2",{className:C.a.recipe__title},t),c.a.createElement("p",{className:C.a.recipe__description},a)),c.a.createElement("div",{className:C.a.recipe__buttons},c.a.createElement("button",{className:C.a.recipe__button,type:"button",onClick:s},"Delete"),c.a.createElement("button",{className:C.a.recipe__button,type:"button",onClick:o},"Edit")))};D.defaultProps={createDate:"",editDate:""};var y=D,k=a(11),x=a.n(k),w=function(e){var t=e.items,a=e.onDeleteRecipe,i=e.onEditRecipe;return t.length>0&&c.a.createElement("ul",{className:x.a.recipes__list},t.map((function(e){return c.a.createElement("li",{className:x.a.recipes__item,key:e.id},c.a.createElement(y,Object.assign({},e,{onDeleteRecipe:function(){return a(e.id)},onEditRecipe:function(){return i(e.id)}})))})))},M=a(17),O=a.n(M),S=function(e){var t=e.value,a=e.onChangeFilter;return c.a.createElement("input",{className:O.a.recipes__input,type:"text",value:t,onChange:a,placeholder:"Enter text to filter the recipe"})},j=a(12),A=a.n(j),L=function(e){Object(u.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).backdropRef=Object(i.createRef)(),e.handleKeyPress=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){var a=e.backdropRef.current;a&&t.target!==a||e.props.onClose()},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.children;return c.a.createElement("div",{className:A.a.backdrop,ref:this.backdropRef,onClick:this.handleBackdropClick,role:"presentation"},c.a.createElement("div",{className:A.a.modal},e))}}]),a}(i.Component),I=a(13),P=a.n(I),Y=function(e){var t=e.items;return c.a.createElement("ul",{className:P.a.recipes__list},t.map((function(e){return c.a.createElement("li",{key:e.level,className:P.a.recipes__item},c.a.createElement("i",{className:"material-icons",style:{color:e.color,paddingRight:"6px"}},"assignment"),e.level)})))},J=a(3),W=a.n(J),q=a(32),B=[{level:f.LOW,color:"#4caf50"},{level:f.NORMAL,color:"#2196f3"},{level:f.HIGH,color:"#f44336"}],F=function(e){Object(u.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(l.a)(this,a);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={recipes:[],filter:"",isCreating:!1,isEditing:!1,selectedRecipeId:null},e.changeFilter=function(t){e.setState({filter:t.target.value})},e.openCreateModal=function(){e.setState({isCreating:!0})},e.closeCreateModal=function(){e.setState({isCreating:!1})},e.addRecipe=function(t){var a=Object(o.a)({},t,{id:m.a.generate(),createDate:q().format("MMMM Do YYYY, h:mm:ss A")});e.setState((function(e){return{recipes:[].concat(Object(s.a)(e.recipes),[a])}}),e.closeCreateModal)},e.deleteRecipe=function(t){e.setState((function(e){return{recipes:e.recipes.filter((function(e){return e.id!==t}))}}))},e.openEditModal=function(t){e.setState({isEditing:!0,selectedRecipeId:t})},e.closeEditModal=function(){e.setState({isEditing:!1,selectedRecipeId:null})},e.updateRecipe=function(t){var a=t.text,i=t.description,c=t.level;e.setState((function(e){return{recipes:e.recipes.map((function(t){return t.id===e.selectedRecipeId?Object(o.a)({},t,{text:a,description:i,level:c,editDate:q().format("MMMM Do YYYY, h:mm:ss A")}):t}))}}),e.closeEditModal)},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){try{var e="Whoops, something went wrong!",t=localStorage.getItem("recipes");if(!t)throw new Error("Whoops, something went wrong!");var a=JSON.parse(t);this.setState({recipes:a})}catch(e){console.error(e)}}},{key:"componentDidUpdate",value:function(e,t){var a=this.state.recipes;t.recipes!==a&&localStorage.setItem("recipes",JSON.stringify(a))}},{key:"render",value:function(){var e=this.state,t=e.recipes,a=e.filter,i=e.isCreating,n=e.isEditing,r=e.selectedRecipeId,s=function(e,t){return e.filter((function(e){return e.text.toLowerCase().includes(t.toLowerCase())}))}(t,a),o=null;return n&&(o=t.find((function(e){return e.id===r}))),c.a.createElement("div",null,c.a.createElement("header",{className:W.a.recipes__header},c.a.createElement("div",{className:W.a.container},c.a.createElement("button",{className:W.a.recipes__button,type:"button",onClick:this.openCreateModal},"Add recipe"),c.a.createElement("div",{className:W.a.recipes__quote},c.a.createElement("p",{className:W.a.recipes__description},'" It is important to experiment and endlessly seek after creating the best possible flavours when preparing foods. That means not being afraid to experiment with various ingredients."'),c.a.createElement("p",{className:W.a.recipes__author},"Rocco DiSpirito")))),c.a.createElement("main",{className:W.a.recipes__main},c.a.createElement("div",{className:W.a.container},c.a.createElement("div",{className:W.a.recipes__wrapper},c.a.createElement(S,{value:a,onChangeFilter:this.changeFilter}),c.a.createElement(Y,{items:B})),c.a.createElement(w,{items:s,onDeleteRecipe:this.deleteRecipe,onEditRecipe:this.openEditModal}),i&&c.a.createElement(L,{onClose:this.closeCreateModal},c.a.createElement(g,{onSave:this.addRecipe,onCancel:this.closeCreateModal})),n&&c.a.createElement(L,{onClose:this.closeEditModal},c.a.createElement(g,{onSave:this.updateRecipe,onCancel:this.closeEditModal,text:o.text,description:o.description,level:o.level,createDate:o.createDate,editDate:o.editDate})))))}}]),a}(i.Component);a(34);r.a.render(c.a.createElement(F,null),document.querySelector("#root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.fb49aa3c.chunk.js.map