# Usabilidade-Gov-PT
Recursos e ferramentas para melhorar a experiência de utilização de sítios públicos.

## CSS Modules
Inclui suporte para a especificação [CSS Modules](https://github.com/css-modules/css-modules) via [Webpack](https://webpack.js.org/). Execute `npm run build` na linha de comandos para transformar o código css na versão modular que será incorporado pelo webpack na distribuição `main.js` (o que consiste numa aplicação prática do conceito [css-in-js](https://en.wikipedia.org/wiki/CSS-in-JS)) numa pasta `/dist` por defeito que deverá ser incluída na página html. O código gerado permite que cada recurso css funcione no seu próprio namespace através de uma variável javascript para o efeito como se demonstra no exemplo a seguir; as classes mantêm as designações originais do código css embora internamente sejam convertidas em hashes gerados durante a compilação.

Deste modo é possível integrar outras frameworks e guias de estilo css no site sem interferir com as normas e os estilos padrão usados. No exemplo que se segue demonstra-se como incorporar os estilos das frameworks [tailwind](https://tailwindcss.com/) e [tachyons](http://tachyons.io/) sem interferência nos estilos do css original transformando o css importado em objectos javascript em que as propriedades correspondem às classes do css importado.

A configuração inclui igualmente suporte para [PostCSS](https://postcss.org/) (requerido por exemplo pela framework tailwindcss) embora sem uso específico de momento (a configuração `postcss.config.js` não carrega nenhum plugin).

### Exemplo
```html
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
## Design Tokens

[Design Tokens](https://www.designtokens.org/) constituêm um meio poderoso de reutilizar primitivas de design conformes com um [Sistema de Design](http://styleguides.io/examples) coerente em vários projectos com uma identidade visual uniforme facilitando a sua gestão centralizada.

### Style Dictionary

Neste projecto providencia-se um pequeno exemplo da sua utilização que poderá ser integrada com outras frameworks e metodologias.

Para tal recorre-se à ferramenta [Style Dictionary](https://amzn.github.io/style-dictionary) que permite exportar uma especificação própria de design tokens para formatos diversos em android, scss, e ios, mas a ferramenta é extensível e pode ser configurada de acordo com as necessidades.

Siga as instruções expressas na documentação para gerar design tokens a partir dos seus projectos ou dos exemplos fornecidos no site. No exemplo aqui sugerido foi usado o exemplo básico contido na própria distribuição.

Após esse passo deverá ter uma pasta `/build` com os ficheiros necessários conforme descrito. Nessa pasta constará entre outras uma subpasta `/scss` com variáveis sass para inclusão. Essas variáveis são utilizadas para definir certas propriedades css - no exemplo apresentado há variáveis disponíveis para definir tamanhos e côres que são utilizadas posteriormente na formatação de um botão html. Com esses elementos fica-se então apto a compilar o [Sass](https://sass-lang.com) assim obtido numa folha de estilo css comum para inclusão em `button.html`. Para isso dever-se-á instalar o [gem](https://rubygems.org/) sass (requer [Ruby](https://www.ruby-lang.org)) caso necessário para acesso na linha de comandos através de `sass input.scss output.css` ou em alternativa instalar o módulo sass para javascript e [plugins webpack](https://webpack.js.org/loaders/sass-loader/) respectivos em NodeJS (a divulgar mais tarde).

### Spectrum CSS

Inclui suporte para [Adobe Spectrum CSS](https://spectrum.adobe.com/) conforme as instruções em [Get Started with Spectrum CSS](https://opensource.adobe.com/spectrum-css/get-started.html) com demonstração em `Template/HTML-CSS-JS/button.html`.
