"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[931],{3895:function(e,t,a){var l=a(6540),n=a(4794);t.A=e=>{let{location:t,title:a,children:r}=e;const c="/"===t.pathname;let m;return m=c?l.createElement("h1",{className:"main-heading"},l.createElement(n.Link,{to:"/"},a)):l.createElement(n.Link,{className:"header-link-home",to:"/"},a),l.createElement("div",{className:"global-wrapper","data-is-root-path":c},l.createElement("header",{className:"global-header"},m),l.createElement("main",null,r),l.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with 🖤"))}},9331:function(e,t,a){a.r(t);var l=a(6540),n=a(4794),r=a(3895);t.default=e=>{let{pageContext:t,data:a,location:c,data:{site:m}}=e;const{tag:i}=t,{edges:s,totalCount:o}=a.allMarkdownRemark,u=o+" post"+(1===o?"":"s")+" tagged with: ",d=m.siteMetadata.title;return l.createElement(r.A,{location:c,title:d},l.createElement("h1",null,u,l.createElement("br",null),'"',i,'"'),l.createElement("ul",null,s.map((e=>{let{node:t}=e;return l.createElement("li",{key:t.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(n.Link,{to:t.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t.frontmatter.title))),l.createElement("small",null,t.frontmatter.date))))}))),l.createElement(n.Link,{to:"/tags"},"All tags"))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-e596678342ad5f9e6647.js.map