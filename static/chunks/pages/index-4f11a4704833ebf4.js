(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9208:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9178)}])},3959:function(e,l,t){"use strict";t.d(l,{Jx:function(){return g},Um:function(){return N},Se:function(){return w},U5:function(){return P}});var s=t(5893),r=t(6752),i=t(4129),a=t(6437);let n=e=>(null==e?void 0:e.__typename)==="ComponentRichImage"?(0,s.jsx)(w,{image:e}):null,d=e=>{let{links:l}=e;return{renderNode:{[a.BLOCKS.EMBEDDED_ENTRY]:e=>{var t,r;let i=null==l?void 0:null===(t=l.entries)||void 0===t?void 0:null===(r=t.block)||void 0===r?void 0:r.find(l=>{var t;return(null==l?void 0:null===(t=l.sys)||void 0===t?void 0:t.id)===e.data.target.sys.id});return i?(0,s.jsx)(n,{...i}):null}}}},o=e=>{let{json:l,links:t}=e,r=d({links:t,json:l});return(0,s.jsx)("article",{className:"prose prose-sm max-w-none",children:(0,i.h)(l,r)})};var c=t(5675),u=t.n(c),x=t(6180);let m=e=>{let{url:l,width:t,height:r,title:i,nextImageProps:a}=e;if(!l||!t||!r)return null;let n=new URL(l);return n.searchParams.set("w","10"),(0,s.jsx)(u(),{src:l,width:t,height:r,alt:i||"",sizes:"(max-width: 1200px) 100vw, 50vw",placeholder:"blur",blurDataURL:n.toString(),...a,className:(0,x.m)(null==a?void 0:a.className,"transition-all")})},f=e=>{let{article:l}=e,{author:t}=l,i=(0,r.$Q)({entryId:null==t?void 0:t.sys.id});return(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("div",{className:"mr-2 overflow-hidden rounded-full border border-blue500",...i({fieldId:"avatar"}),children:(null==t?void 0:t.avatar)&&(0,s.jsx)(m,{nextImageProps:{width:28,height:28,sizes:void 0,placeholder:void 0},...t.avatar})}),(0,s.jsx)("span",{className:"text-xs leading-none text-gray600",...i({fieldId:"name"}),children:null==t?void 0:t.name})]})},g=e=>{let{article:l}=e,{content:t}=l,i=(0,r.$Q)({entryId:l.sys.id});return(0,s.jsx)("div",{...i({fieldId:"content"}),children:(0,s.jsx)(o,{json:null==t?void 0:t.json,links:null==t?void 0:t.links})})};var h=t(1293);let p=e=>{let{children:l,className:t,...r}=e;return(0,s.jsx)("span",{className:(0,x.m)("rounded bg-purple200 px-2 py-1 text-2xs font-semibold uppercase leading-none tracking-widest text-purple600",t),...r,children:l})};var v=t(1163);let j=e=>{let{date:l,locale:t}=e;return t&&l?new Intl.DateTimeFormat(t,{dateStyle:"long"}).format(new Date(l)):null},y=e=>{let{locale:l}=(0,v.useRouter)();return l?(0,s.jsx)(s.Fragment,{children:j({...e,locale:l})}):null},N=e=>{let{article:l,isFeatured:t,isReversedLayout:i=!1}=e,{t:a}=(0,h.$G)(),n=(0,r.$Q)({entryId:l.sys.id}),{title:d,shortDescription:o,publishedDate:c}=l;return(0,s.jsxs)("div",{className:(0,x.m)("flex flex-col overflow-hidden rounded-2xl border border-gray300 shadow-lg",i?"lg:flex-row-reverse":"lg:flex-row"),children:[(0,s.jsx)("div",{className:"flex-1 basis-1/2",...n({fieldId:"featuredImage"}),children:l.featuredImage&&(0,s.jsx)(m,{nextImageProps:{className:"w-full",priority:!0,sizes:void 0},...l.featuredImage})}),(0,s.jsxs)("div",{className:"relative flex flex-1 basis-1/2 flex-col justify-center py-6 px-4 lg:px-16 lg:py-12 xl:px-24",children:[(0,s.jsxs)("div",{className:"mb-2 flex flex-wrap items-center",children:[(0,s.jsx)(f,{article:l}),t&&(0,s.jsx)(p,{className:(0,x.m)("ml-auto pl-2 lg:absolute lg:top-8 xl:top-12",i?"lg:left-6 xl:left-12":"lg:right-6 xl:right-12"),children:a("article.featured")}),(0,s.jsx)("div",{className:(0,x.m)("ml-auto hidden pl-2 text-xs text-gray600",i?"lg:block":""),...n({fieldId:"publishedDate"}),children:(0,s.jsx)(y,{date:c})})]}),(0,s.jsx)("h1",{...n({fieldId:"title"}),children:d}),o&&(0,s.jsx)("p",{className:"mt-2",...n({fieldId:"shortDescription"}),children:o}),(0,s.jsx)("div",{className:(0,x.m)("mt-2 text-xs text-gray600",i?"lg:hidden":""),...n({fieldId:"publishedDate"}),children:(0,s.jsx)(y,{date:c})})]})]})},w=e=>{let{image:l}=e,t=(0,r.$Q)({entryId:l.sys.id});return l.image?(0,s.jsxs)("figure",{children:[(0,s.jsx)("div",{className:"flex justify-center",...t({fieldId:"image"}),children:(0,s.jsx)(m,{nextImageProps:{className:(0,x.m)("mt-0 mb-0 ",l.fullWidth?"md:w-screen md:max-w-[calc(100vw-40px)] md:shrink-0":"rounded-2xl border border-gray300 shadow-lg")},...l.image})}),l.caption&&(0,s.jsx)("figcaption",{className:"mt-4",...t({fieldId:"caption"}),children:l.caption})]}):null};var b=t(1664),I=t.n(b);let _=e=>{let{article:l,className:t}=e,{title:i,publishedDate:a}=l,n=(0,r.$Q)({entryId:l.sys.id});return(0,s.jsx)(I(),{className:"flex flex-col",href:"/".concat(l.slug),children:(0,s.jsxs)("div",{className:(0,x.m)("flex flex-1 flex-col overflow-hidden rounded-2xl border border-gray300 shadow-lg",t),children:[l.featuredImage&&(0,s.jsx)("div",{...n({fieldId:"featuredImage"}),children:(0,s.jsx)(m,{nextImageProps:{className:"object-cover aspect-[16/10] w-full"},...l.featuredImage})}),(0,s.jsxs)("div",{className:"flex flex-1 flex-col py-3 px-4 md:px-5 md:py-4 lg:px-7 lg:py-5",children:[i&&(0,s.jsx)("p",{className:"h3 mb-2 text-gray800 md:mb-3",...n({fieldId:"title"}),children:i}),(0,s.jsxs)("div",{className:"mt-auto flex items-center",children:[(0,s.jsx)(f,{article:l}),(0,s.jsx)("div",{className:(0,x.m)("ml-auto pl-2 text-xs text-gray600"),...n({fieldId:"publishedDate"}),children:(0,s.jsx)(y,{date:a})})]})]})]})})},P=e=>{let{articles:l,className:t,...r}=e;return l&&l.length>0?(0,s.jsx)("div",{className:(0,x.m)("grid grid-cols-1 gap-y-4 gap-x-5 md:grid-cols-3 lg:gap-x-12 lg:gap-y-12",t),...r,children:l.map((e,l)=>e?(0,s.jsx)(_,{article:e},l):null)}):null}},5677:function(e,l,t){"use strict";t.d(l,{L:function(){return o}});var s=t(5893),r=t(1864),i=t.n(r),a=t(2962),n=t(1163);let d=(e,l)=>new URL(i().join(e,l),"https://ornate-macaron-e6d58b.netlify.app").toString(),o=e=>{let{pageTitle:l,pageDescription:t,noindex:r,nofollow:i,canonicalUrl:o,shareImagesCollection:c}=e,{locale:u,locales:x,asPath:m}=(0,n.useRouter)(),f=d(u||"",m),g=(null==x?void 0:x.map(e=>({hrefLang:e,href:d(e,m)})))||[];return(0,s.jsx)(a.PB,{title:l||void 0,description:t||void 0,canonical:o||f||"",nofollow:i||!1,noindex:r||!1,languageAlternates:g,openGraph:{type:"website",locale:u,url:f||"",title:l||void 0,description:t||void 0,images:null==c?void 0:c.items.map(e=>({url:(null==e?void 0:e.url)||"",width:(null==e?void 0:e.width)||0,height:(null==e?void 0:e.height)||0,alt:(null==e?void 0:e.description)||"",type:(null==e?void 0:e.contentType)||""}))},twitter:{site:f,cardType:"summary_large_image"}})}},9178:function(e,l,t){"use strict";t.r(l),t.d(l,{__N_SSG:function(){return x}});var s=t(5893),r=t(6752),i=t(1293),a=t(1664),n=t.n(a),d=t(3959),o=t(5677),c=t(2568);let u=e=>{let{t:l}=(0,i.$G)(),t=(0,r.pc)(e.page),a=(0,r.pc)(e.posts);if((null==t?void 0:t.featuredBlogPost)&&a)return(0,s.jsxs)(s.Fragment,{children:[t.seoFields&&(0,s.jsx)(o.L,{...t.seoFields}),(0,s.jsx)(c.W,{children:(0,s.jsx)(n(),{href:"/".concat(t.featuredBlogPost.slug),children:(0,s.jsx)(d.Um,{article:t.featuredBlogPost})})}),(0,s.jsxs)(c.W,{className:"my-8  md:mb-10 lg:mb-16",children:[(0,s.jsx)("h2",{className:"mb-4 md:mb-6",children:l("landingPage.latestArticles")}),(0,s.jsx)(d.U5,{className:"md:grid-cols-2 lg:grid-cols-3",articles:a})]})]})};var x=!0;l.default=u}},function(e){e.O(0,[831,774,888,179],function(){return e(e.s=9208)}),_N_E=e.O()}]);