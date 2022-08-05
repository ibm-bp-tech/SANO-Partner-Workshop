"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[452],{5803:function(e,t,a){a.r(t),a.d(t,{Title:function(){return o},_frontmatter:function(){return s},default:function(){return u}});var n=a(3366),r=(a(7294),a(4983)),l=a(4295),i=["components"],o=function(){return(0,r.kt)("span",null,"Lab 5 - Dynamic Focus Query ",(0,r.kt)("br",null))},s={},c={Title:o,_frontmatter:s},m=l.Z;function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)(m,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Instana Dynamic Focus search functionality can be used to filter the 3D maps, comparison tables, and incident views.\nThe search bar has extensive abilities to search using fuzzy and wildcard searches as well as boolean operators. "),(0,r.kt)("h2",null,"Step 1:"),(0,r.kt)("p",null,"Navigate to the Infrastructure screen in the UI."),(0,r.kt)("img",{src:"images/lab5.1.png",alt:"Lab 5"}),(0,r.kt)("h2",null,"Step 2:"),(0,r.kt)("p",null,"Use the following DFQs: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"entity.host.name:<your_host_name> \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"entity.host.name:<your_host_name> entity.type:host \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"entity.host.name:<your_host_name> entity.selfType:host \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"entity.zone:”PartnerTraining” \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"entity.tag:Student=<your_last_name> \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'entity.tag:"Application=Robot Shop"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"entity.tag:Student=<your_last_name> entity.type:jvm \n")))}u.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(7294),r=a(8650),l=a.n(r),i=a(5444),o=a(5426),s=a(4311),c=a(5900),m=a.n(c),u=function(e){var t,a=e.title,r=e.theme,l=e.tabs,i=void 0===l?[]:l;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,o=l.baseUrl,s=l.subDirectory,c=o+"/edit/"+l.branch+s+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(4275),g=a(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,o=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),s=a===o,c=new RegExp(o+"/?(#.*)?$"),u=r.replace(c,a);return n.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+u},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),b=h,y=a(2881),f=a(6958),k=a(36),E=function(e){var t=e.date,a=new Date(t);return t?n.createElement(k.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(k.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},v=function(e){var t=e.pageContext,a=e.children,r=e.location,c=e.Title,m=t.frontmatter,g=void 0===m?{}:m,h=t.relativePagePath,k=t.titleType,v=g.tabs,N=g.title,x=g.theme,P=g.description,w=g.keywords,T=g.date,_=(0,f.Z)().interiorTheme,D=(0,i.useStaticQuery)("2456312558").site.pathPrefix,S=D?r.pathname.replace(D,""):r.pathname,Z=v?S.split("/").filter(Boolean).slice(-1)[0]||l()(v[0],{lower:!0}):"",C=x||_;return n.createElement(s.Z,{tabs:v,homepage:!1,theme:C,pageTitle:N,pageDescription:P,pageKeywords:w,titleType:k},n.createElement(u,{title:c?n.createElement(c,null):N,label:"label",tabs:v,theme:C}),v&&n.createElement(b,{title:N,slug:S,tabs:v,currentTab:Z}),n.createElement(y.Z,{padded:!0},a,n.createElement(d,{relativePagePath:h}),n.createElement(E,{date:T})),n.createElement(p.Z,{pageContext:t,location:r,slug:S,tabs:v,currentTab:Z}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-labs-lab-5-mdx-8f1a17265635817b90e0.js.map