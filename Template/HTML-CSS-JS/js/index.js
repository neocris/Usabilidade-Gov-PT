import tailwind from "./css/tailwind.min.css";
import tachyons from "./css/tachyons.min.css";

console.log(tachyons);

var taillay =`<div class="grid-wrapper">
<div class="row-fluid">
    <div class="span12">header</div>
</div>
<div class="row-fluid">
    <div class="span6 ${tailwind.rounded} ${tailwind.border} ${tailwind['border-black']} ${tailwind['border-opacity-100']} ${tailwind['border-solid']}">country</div>
    <div class="span3 ${tailwind.rounded} ${tailwind.border} ${tailwind['border-black']} ${tailwind['border-opacity-100']} ${tailwind['border-solid']}">data</div>
    <div class="span3 ${tailwind.rounded} ${tailwind.border} ${tailwind['border-black']} ${tailwind['border-opacity-100']} ${tailwind['border-solid']}">data</div>
</div>
<div class="row-fluid">
    <div class="span12">footer</div>
</div>
</div>`;
var tachlay =`<div class="grid-wrapper">
<div class="row-fluid">
    <div class="span12">header</div>
</div>
<div class="row-fluid">
    <div class="span6 ${tachyons.ba} ${tachyons.br4}">country</div>
    <div class="span3 ${tachyons.ba} ${tachyons.br4}">data</div>
    <div class="span3 ${tachyons.ba} ${tachyons.br4}">data</div>
</div>
<div class="row-fluid">
    <div class="span12">footer</div>
</div>
</div>`;

document.querySelector('#root').innerHTML = taillay+tachlay;