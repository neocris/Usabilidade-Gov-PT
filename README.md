# Usabilidade-Gov-PT
Recursos e ferramentas para melhorar a experiência de utilização de sítios públicos.

## CSS Modules
Inclui suporte para a especificação [CSS Modules](https://github.com/css-modules/css-modules) via [Webpack](https://webpack.js.org/). Execute `npm run build` na linha de comandos para transformar o código css na versão modular que será incorporado pelo webpack na distribuição main.js numa pasta /dist por defeito que deverá ser incluída na página html. O código gerado permite que cada recurso css funcione no seu próprio namespace através de uma variável javascript para o efeito como se demonstra no exemplo a seguir; as classes mantêm as designações originais do código css embora internamente sejam convertidas em hashes gerados durante a compilação.

### Exemplo
```
  import tailwind from "./css/tailwind.min.css";
  import tachyons from "./css/tachyons.min.css";

  //tailwindcss block

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

  //tachyons block

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
```
