var heroListRef=document.querySelector(".hero-list"),inputRef=document.querySelector(".input"),btnRef=document.querySelector(".button");function onNewListItemAdd(e){if("Enter"===e.code&&""!==inputRef.value){var t=document.createElement("li");return t.classList.add("li-item"),t.textContent=inputRef.value,inputRef.value="",heroListRef.appendChild(t)}}function onClickAdd(e){var t=document.createElement("li");return t.classList.add("li-item"),t.textContent=inputRef.value,inputRef.value="",heroListRef.appendChild(t)}inputRef.addEventListener("keydown",onNewListItemAdd),btnRef.addEventListener("click",onClickAdd);
//# sourceMappingURL=index.7468569d.js.map
