"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[6478],{5850:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return h}});var n=a(45),r=(a(6540),a(8619)),l=a(6236);const o=["components"],s={},i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},m=i("PageDescription"),d=i("Title"),c={_frontmatter:s},p=l.A;function h(e){let{components:t}=e,a=(0,n.A)(e,o);return(0,r.yg)(p,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(m,{mdxType:"PageDescription"},(0,r.yg)("p",null,"When authoring markdown using the Carbon Gatsby theme, code blocks have some\nextra super powers you can take advantage of. We provide carbon-themed syntax\nhighlighting as well as optional ",(0,r.yg)("inlineCode",{parentName:"p"},"path")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"src")," features.")),(0,r.yg)("h2",null,"Example"),(0,r.yg)(d,{mdxType:"Title"},"Horizontal overflow"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-markdown",metastring:"path=/directory/file.mdx src=https://gatsby-theme-carbon.now.sh",path:"/directory/file.mdx",src:"https://gatsby-theme-carbon.now.sh"},"## Path and src w/ overflow\n\nThis example overflows to demonstrate the text fading out under the side bar.\nThis example overflows to demonstrate the text fading out under the side bar.\nThis example overflows to demonstrate the text fading out under the side bar.\nThis example overflows to demonstrate the text fading out under the side bar.\n")),(0,r.yg)(d,{mdxType:"Title"},"Vertical overflow"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-markdown",metastring:"path=/directory/file.mdx src=https://gatsby-theme-carbon.now.sh",path:"/directory/file.mdx",src:"https://gatsby-theme-carbon.now.sh"},"## Path and src w/ overflow\n\nThis example demonstrates the show more button. This example demonstrates the\nshow more button. This example demonstrates the show more button. This example\ndemonstrates the show more button. This example demonstrates the show more\nbutton. This example demonstrates the show more button. This example\ndemonstrates the show more button. This example demonstrates the show more\nbutton. This example demonstrates the show more button. This example\ndemonstrates the show more button. This example demonstrates the show more\nbutton. This example demonstrates the show more button.\n")),(0,r.yg)("h2",null,"Code"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"```markdown path=/directory/file.mdx src=https://gatsby-theme-carbon.now.sh\n### Path and src\n\nThis code snippet provides both a `path` and a `src`.\n```\n")),(0,r.yg)("h3",null,"Props"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"property"),(0,r.yg)("th",{parentName:"tr",align:null},"propType"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"language"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js"},"Available languages."))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"src"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The full url of a relevant link (source)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"A string indicating the filename or path. Due to markdown limitations this can only be a single word")))))}h.isMDXComponent=!0},6236:function(e,t,a){a.d(t,{A:function(){return E}});var n=a(6540),r=a(5474),l=a.n(r),o=a(1015),s=a(4698),i=a(5411),m=a(9634),d=a.n(m),c="PageHeader-module--dark-mode--WCeH8",p="PageHeader-module--with-tabs--vbQ-W";var h=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{[p]:r.length,[c]:"dark"===a})},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var g=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:s,branch:i}=a||r,m=`${l}/edit/${i}${s}/src/pages${t}`;return l?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},u=a(6526),b=a(5540),y="PageTabs-module--selected-item--aBB0K";let w=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.A)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),s=t===r,i=new RegExp(`${r}/?(#.*)?$`),m=a.replace(i,t);return n.createElement("li",{key:e,className:d()({[y]:s},"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:`${m}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component);var x=w,f=a(7012),N=a(919),v=a(185);var T=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(v.fI,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(v.VP,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var E=e=>{let{pageContext:t,children:a,location:r,Title:m}=e;const{frontmatter:d={},relativePagePath:c,titleType:p}=t,{tabs:b,title:y,theme:w,description:v,keywords:E,date:P}=d,{interiorTheme:k}=(0,N.A)(),{site:{pathPrefix:C}}=(0,o.useStaticQuery)("2456312558"),A=C?r.pathname.replace(C,""):r.pathname,D=b?A.split("/").filter(Boolean).slice(-1)[0]||l()(b[0],{lower:!0}):"",L=w||k;return n.createElement(i.A,{tabs:b,homepage:!1,theme:L,pageTitle:y,pageDescription:v,pageKeywords:E,titleType:p},n.createElement(h,{title:m?n.createElement(m,null):y,label:"label",tabs:b,theme:L}),b&&n.createElement(x,{title:y,slug:A,tabs:b,currentTab:D}),n.createElement(f.A,{padded:!0},a,n.createElement(g,{relativePagePath:c}),n.createElement(T,{date:P})),n.createElement(u.A,{pageContext:t,location:r,slug:A,tabs:b,currentTab:D}),n.createElement(s.A,null))}}}]);
//# sourceMappingURL=component---src-pages-components-code-blocks-mdx-e6aa343ca20e6cc6faa2.js.map