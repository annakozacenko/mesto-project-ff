(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-27",headers:{authorization:"2e6d7127-2c96-4424-9ab2-ffa0410b4c23","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function n(n,r){return r?fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)})):fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then((function(e){return t(e)}))}function r(e,t,n,r,o){var c=e.name,a=e.link,u=e.owner,i=e.likes,l=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),s=l.querySelector(".card__title"),d=l.querySelector(".card__image"),p=l.querySelector(".card__delete-button"),f=l.querySelector(".card__like-button"),_=l.querySelector(".card__like-counter");return s.textContent=c,d.src=a,d.alt=c,_.textContent=i.length,i.some((function(e){return e._id===o}))&&f.classList.add("card__like-button_is-active"),f.addEventListener("click",(function(){return n(f,_,e._id)})),d.addEventListener("click",(function(){return r(a,c)})),u._id!==o?p.remove():p.addEventListener("click",(function(){return t(l,e._id)})),l}function o(n,r){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))})(r).then((function(){n.remove()})).catch((function(e){console.log(e)}))}var c=function(e,t,r){(e.classList.contains("card__like-button_is-active")?n(r,!0):n(r,!1)).then((function(n){t.textContent=n.likes.length,e.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)}))},a=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");i(t)}},u=function(e){e.classList.add("popup_is-opened"),document.addEventListener("keyup",a)},i=function(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keyup",a)},l=function(e){e.classList.add("popup_is-animated"),e.querySelector(".popup__close").addEventListener("click",(function(){i(e)})),e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup")&&i(e)}))},s=function(e,t,n){var r=e.querySelector(".".concat(t.name,"-input-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},d=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},p=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){s(e,n,t)})),d(n,r,t)};function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var _,m=document.querySelector(".popup_type_edit"),y=document.forms["edit-profile"],v=y.querySelector(".popup__input_type_name"),h=y.querySelector(".popup__input_type_description"),S=document.querySelector(".profile__title"),b=document.querySelector(".profile__description"),q=document.querySelector(".popup_type_edit_profile-avatar"),g=document.forms["edit-avatar"],E=g.querySelector(".popup__input_type_url"),L=document.querySelector(".profile__image"),C=document.querySelector(".popup_type_new-card"),k=document.forms["new-place"],x=k.querySelector(".popup__input_type_card-name"),A=k.querySelector(".popup__input_type_url"),U=document.querySelector(".popup_type_image"),w=document.querySelector(".places__list"),T={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function j(e,t){e.target.querySelector(".popup__button").textContent=t?"Сохранение...":"Сохранить"}y.addEventListener("submit",(function(n){var r,o;n.preventDefault(),j(n,!0),(r=v.value,o=h.value,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then((function(e){return t(e)}))).then((function(e){S.textContent=e.name,b.textContent=e.about,i(m)})).catch((function(e){console.log(e)})).finally((function(){j(n,!1)}))})),document.querySelector(".profile__edit-button").addEventListener("click",(function(){v.value=S.textContent,h.value=b.textContent,p(y,T),u(m)})),l(m),g.addEventListener("submit",(function(n){var r;n.preventDefault(),j(n,!0),(r=E.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then((function(e){return t(e)}))).then((function(e){L.style.backgroundImage="url(".concat(e.avatar,")"),i(q)})).catch((function(e){console.log(e)})).finally((function(){j(n,!1)}))})),L.addEventListener("click",(function(){E.value="",p(g,T),u(q)})),l(q),k.addEventListener("submit",(function(n){var a,u;n.preventDefault(),j(n,!0),(a=x.value,u=A.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:a,link:u})}).then((function(e){return t(e)}))).then((function(e){w.prepend(r(e,o,c,O,_)),i(C)})).catch((function(e){console.log(e)})).finally((function(){j(n,!1)}))})),document.querySelector(".profile__add-button").addEventListener("click",(function(){x.value="",A.value="",p(k,T),u(C)})),l(C);var O=function(e,t){var n=U.querySelector(".popup__image"),r=U.querySelector(".popup__caption");n.src=e,n.alt=t,r.textContent=t,u(U)};l(U),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);d(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?s(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.name,"-input-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),d(n,r,t)}))}))}(t,e)}))}(T),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then((function(e){return t(e)})),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then((function(e){return t(e)}))]).then((function(e){var t,n,a=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=a[0],i=a[1];S.textContent=u.name,b.textContent=u.about,L.style.backgroundImage="url(".concat(u.avatar,")"),_=u._id,i.forEach((function(e){w.append(r(e,o,c,O,u._id))}))}))})();