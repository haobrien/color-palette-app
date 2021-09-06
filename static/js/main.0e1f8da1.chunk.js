(this["webpackJsonpcolor-palette-app"]=this["webpackJsonpcolor-palette-app"]||[]).push([[0],{229:function(e,a,t){},230:function(e,a,t){},234:function(e,a,t){},290:function(e,a,t){},292:function(e,a,t){},422:function(e,a,t){},423:function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),r=t(9),c=t.n(r),l=t(45),i=(t(229),t(52)),s=t(95),d=t(27),m=t(28),h=t(16),u=t(33),j=t(32),b=(t(230),t(24)),p=t(141),f=t(51),g=t.n(f),O=[50,100,200,300,400,500,600,700,800,900];function v(e){var a,t={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:[]},o=Object(p.a)(O);try{for(o.s();!(a=o.n()).done;){var n=a.value;t.colors[n]=[]}}catch(h){o.e(h)}finally{o.f()}var r,c,l,i=Object(p.a)(e.colors);try{for(i.s();!(r=i.n()).done;){var s=r.value,d=(c=s.color,l=10,g.a.scale(function(e){var a="#fff";return[g()(e).darken(1.4).hex(),e,a]}(c)).mode("lab").colors(l)).reverse();for(var m in d)t.colors[O[m]].push({name:"".concat(s.name," ").concat(O[m]),id:s.name.toLowerCase().replace(/ /g,"-"),hex:d[m],rgb:g()(d[m]).css(),rgba:g()(d[m]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(h){i.e(h)}finally{i.f()}return t}var x=t(427),C=t(190),y=(t(234),{checkLuminance:{color:function(e){return g()(e.background).luminance()>=.3?"#333":"#eee"}},colorboxPropStyles:{background:function(e){return e.background}}}),S=t(3),k=function(e){Object(u.a)(t,e);var a=Object(j.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=a.call(this,e)).state={copied:!1},o.changeCopyState=o.changeCopyState.bind(Object(h.a)(o)),o}return Object(m.a)(t,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},(function(){setTimeout((function(){return e.setState({copied:!1})}),1500)}))}},{key:"render",value:function(){var e=this.props,a=e.background,t=e.name,o=e.id,n=e.paletteId,r=e.isFullPalette,c=e.classes,i=this.state.copied;return Object(S.jsx)(C.CopyToClipboard,{text:a,onCopy:this.changeCopyState,children:Object(S.jsxs)("div",{className:"ColorBox ".concat(c.colorboxPropStyles),children:[Object(S.jsx)("div",{className:"copy-overlay ".concat(i&&"show")}),Object(S.jsxs)("div",{className:"copy-message ".concat(i&&"show"),children:[Object(S.jsx)("h1",{children:"Copied!"}),Object(S.jsx)("p",{className:c.copyText+c.checkLuminance,children:a})]}),Object(S.jsxs)("div",{className:"copy-container",children:[Object(S.jsx)("div",{className:"box-content",children:Object(S.jsx)("span",{className:c.checkLuminance,children:t})}),Object(S.jsx)("button",{className:"copy-button "+c.checkLuminance,children:"Copy"})]}),r&&Object(S.jsx)(l.b,{to:"/palette/".concat(n,"/").concat(o),onClick:function(e){return e.stopPropagation()},children:Object(S.jsx)("span",{className:"see-more "+c.checkLuminance,children:"More"})})]})})}}]),t}(o.Component),w=Object(x.a)(y)(k),P=t(204),N=t(484),F=t(470),B=t(471),D=t(485),L=t(144),A=t.n(L),E=t(117),I=t.n(E),G=t(488),R=t(469),T=t(425),M=t(474),U=t(475),V=t(473),q=t(472),z=t(145),H=t.n(z),W=t(146),J=t.n(W),Y=t(197),K=t.n(Y),_=(t(290),function(e){Object(u.a)(t,e);var a=Object(j.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=a.call(this,e)).openDialog=function(){o.setState({deleteDialogOpen:!0})},o.closeDialog=function(){o.setState({deleteDialogOpen:!1})},o.state={format:"hex",open:!1,deleteDialogOpen:!1},o.handleFormatChange=o.handleFormatChange.bind(Object(h.a)(o)),o.closeSnackbar=o.closeSnackbar.bind(Object(h.a)(o)),o}return Object(m.a)(t,[{key:"handleFormatChange",value:function(e){var a=this;this.setState({format:e.target.value,open:!0},(function(){a.props.changeFormat(a.state.format)}))}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,o=e.showSlider,n=e.deletePalette,r=this.state,c=r.format,i=r.deleteDialogOpen;return Object(S.jsxs)("header",{className:"Navbar",children:[Object(S.jsx)("div",{className:"logo",children:Object(S.jsx)(l.b,{to:"/",children:"reactcolorpicker"})}),o&&Object(S.jsxs)("div",{className:"slider-container",children:[Object(S.jsxs)("span",{children:["Level: ",a]}),Object(S.jsx)("div",{className:"slider",children:Object(S.jsx)(P.a,{defaultValue:a,step:100,min:100,max:900,onAfterChange:t})})]}),Object(S.jsxs)("div",{className:"right-menu",children:[Object(S.jsx)("div",{className:"select-container",children:Object(S.jsxs)(N.a,{value:c,onChange:this.handleFormatChange,children:[Object(S.jsx)(F.a,{value:"hex",children:"Hex - #ffffff"}),Object(S.jsx)(F.a,{value:"rgb",children:"rgb - rgb 255, 255, 255"}),Object(S.jsx)(F.a,{value:"rgba",children:"rgba - rgba 255, 255, 255, 1"})]})}),Object(S.jsx)("div",{className:"delete",children:Object(S.jsx)(I.a,{onClick:this.openDialog})})]}),Object(S.jsx)(D.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,message:Object(S.jsxs)("span",{id:"message-id",children:["Format Changed to ",c.toUpperCase()]}),ContentProps:{"area-describedby":"message-id"},onClose:this.closeSnackbar,action:[Object(S.jsx)(B.a,{onClick:this.closeSnackbar,color:"inherit","aria-label":"close",children:Object(S.jsx)(A.a,{})},"close")]}),Object(S.jsxs)(q.a,{open:i,"aria-labelledby":"delete-dialog-title",onClose:this.closeDialog,children:[Object(S.jsx)(V.a,{id:"delete-dialog-title",children:"Delete palette?"}),Object(S.jsxs)(R.a,{children:[Object(S.jsxs)(T.a,{button:!0,onClick:n,children:[Object(S.jsx)(M.a,{children:Object(S.jsx)(G.a,{style:{backgroundColor:H.a[100],color:H.a[600]},children:Object(S.jsx)(K.a,{})})}),Object(S.jsx)(U.a,{primary:"Delete"})]}),Object(S.jsxs)(T.a,{button:!0,onClick:this.closeDialog,children:[Object(S.jsx)(M.a,{children:Object(S.jsx)(G.a,{style:{backgroundColor:J.a[100],color:J.a[600]},children:Object(S.jsx)(A.a,{})})}),Object(S.jsx)(U.a,{primary:"Cancel"})]})]})]})]})}}]),t}(o.Component));t(291),t(292);var Q=function(e){var a=e.paletteName,t=e.emoji;return Object(S.jsxs)("footer",{className:"Palette-footer",children:[a,Object(S.jsx)("span",{className:"emoji",children:t})]})},X=function(e){Object(u.a)(t,e);var a=Object(j.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=a.call(this,e)).state={level:500,format:"hex"},o.changeLevel=o.changeLevel.bind(Object(h.a)(o)),o.changeFormat=o.changeFormat.bind(Object(h.a)(o)),o.deletePalette=o.deletePalette.bind(Object(h.a)(o)),o}return Object(m.a)(t,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"deletePalette",value:function(){this.props.deletePalette(this.props.palette.id),this.props.history.push("/")}},{key:"render",value:function(){var e=this.props.palette,a=e.colors,t=e.paletteName,o=e.emoji,n=e.id,r=this.state,c=r.level,l=r.format,i=a[c].map((function(e){return Object(S.jsx)(w,{background:e[l],name:e.name,id:e.id,paletteId:n,isFullPalette:!0},e.id)}));return Object(S.jsxs)("div",{className:"Palette",children:[Object(S.jsx)(_,{changeLevel:this.changeLevel,level:c,changeFormat:this.changeFormat,deletePalette:this.deletePalette,showSlider:!0}),Object(S.jsx)("div",{className:"Palette-colors",children:i}),Object(S.jsx)(Q,{paletteName:t,emoji:o})]})}}]),t}(o.Component),Z=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],$={root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden","&:hover":{cursor:"pointer"}},colors:{backgroundColor:"#f2f2f2",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-6px"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",paddingTop:"0.5rem",color:"black",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"}};var ee,ae=Object(x.a)($)((function(e){var a=e.classes,t=e.colors,o=e.emoji,n=e.id,r=e.paletteName,c=e.handleClick,l=t.map((function(e){return Object(S.jsx)("div",{className:a.miniColor,style:{backgroundColor:e.color}},n)}));return Object(S.jsxs)("div",{className:a.root,onClick:c,children:[Object(S.jsx)("div",{className:a.colors,children:l}),Object(S.jsxs)("h5",{className:a.title,children:[r," ",Object(S.jsx)("span",{className:a.emoji,children:o})]})]})})),te=t(37),oe=t.p+"static/media/confetti-doodles.a3fc8b17.svg",ne=(ee={root:{backgroundColor:"#e8e8e8",height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",backgroundImage:"url(".concat(oe,")"),overflow:"scroll"},container:{width:"60%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},nav:{width:"100%",display:"flex",color:"white",alignItems:"center",margin:"2rem 0 0.5rem","& a":{textDecoration:"none",color:"white",fontWeight:"bold",marginLeft:"1.2rem","& svg":{marginRight:"0.5rem"}},"& h1":{backgroundColor:"#313131"}},palettes:{width:"100%",boxSizing:"border-box",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"2rem"}},Object(te.a)(ee,"@media (max-width: 992px)",{container:{width:"80%"},palettes:{gridTemplateColumns:"repeat(2, 49%)"}}),Object(te.a)(ee,"@media (max-width: 576px)",{palettes:{gridTemplateColumns:"repeat(1, 98%)"}}),ee),re=t(476),ce=t(198),le=t.n(ce),ie=function(e){Object(u.a)(t,e);var a=Object(j.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"goToPalette",value:function(e){this.props.history.push("/palette/"+e)}},{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,n=a.classes;return Object(S.jsx)("div",{className:n.root,children:Object(S.jsxs)("div",{className:n.container,children:[Object(S.jsxs)("nav",{className:n.nav,children:[Object(S.jsx)("h1",{children:"React Colors"}),Object(S.jsx)(l.b,{to:"/palette/new",children:Object(S.jsxs)(re.a,{size:"small",variant:"contained",color:"secondary",children:[Object(S.jsx)(le.a,{}),"New Palette"]})})]}),Object(S.jsx)("div",{className:n.palettes,children:t.map((function(a){return Object(o.createElement)(ae,Object(i.a)(Object(i.a)({},a),{},{key:a.id,handleClick:function(){return e.goToPalette(a.id)}}))}))})]})})}}]),t}(o.Component),se=Object(x.a)(ne)(ie),de=function(e){Object(u.a)(t,e);var a=Object(j.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=a.call(this,e))._shades=o.gatherShades(o.props.palette,o.props.colorId),o.state={format:"hex"},o.changeFormat=o.changeFormat.bind(Object(h.a)(o)),o}return Object(m.a)(t,[{key:"gatherShades",value:function(e,a){var t=[],o=e.colors;for(var n in o)t=t.concat(o[n].filter((function(e){return e.id===a})));return t.slice(1)}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.state.format,a=this.props.palette,t=a.paletteName,o=a.emoji,n=a.id,r=this._shades.map((function(a){return Object(S.jsx)(w,{name:a.name,background:a[e],isFullPalette:!1},a.name)}));return Object(S.jsxs)("div",{className:"Palette SingleColorPalette",children:[Object(S.jsx)(_,{showSlider:!1,changeFormat:this.changeFormat}),Object(S.jsxs)("div",{className:"Palette-colors",children:[r,Object(S.jsx)("div",{className:"go-back ColorBox",children:Object(S.jsx)(l.b,{to:"/palette/".concat(n),className:"back-button",children:"Go Back"})})]}),Object(S.jsx)(Q,{paletteName:t,emoji:o})]})}}]),t}(o.Component),me=t(18),he=t.n(me),ue=t(480),je=t(481),be=t(482),pe=t(87),fe=t(200),ge=t.n(fe),Oe=t(7),ve=t(479),xe=t(477),Ce=t(478),ye=t(63),Se=t(205),ke=(t(306),function(e){Object(u.a)(t,e);var a=Object(j.a)(t);function t(){var e;Object(d.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={stage:"form",newPaletteName:""},e.handleChange=function(a){e.setState(Object(te.a)({},a.target.name,a.target.value))},e.showEmojiPicker=function(){e.setState({stage:"emoji"})},e.savePalette=function(a){var t={paletteName:e.state.newPaletteName,emoji:a.native};e.props.savePalette(t)},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;ye.ValidatorForm.addValidationRule("isPaletteUnique",(function(a){return e.props.palettes.every((function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()}))}))}},{key:"render",value:function(){var e=this.state.newPaletteName,a=this.props.hideForm;return Object(S.jsxs)("div",{children:[Object(S.jsxs)(q.a,{open:"emoji"===this.state.stage,children:[Object(S.jsx)(V.a,{id:"form-dialog-title",children:"Pick an Emoji"}),Object(S.jsx)(Se.a,{onSelect:this.savePalette,title:"Pick an Emoji"})]}),Object(S.jsx)(q.a,{open:"form"===this.state.stage,onClose:a,"aria-labelledby":"form-dialog-title",children:Object(S.jsxs)(ye.ValidatorForm,{onSubmit:this.showEmojiPicker,children:[Object(S.jsx)(V.a,{id:"form-dialog-title",children:"Choose Palette Name"}),Object(S.jsxs)(xe.a,{children:[Object(S.jsx)(Ce.a,{children:"Please enter a unique name for your new beautiful palette."}),Object(S.jsx)(ye.TextValidator,{value:e,name:"newPaletteName",label:"Palette Name",fullWidth:!0,margin:"normal",onChange:this.handleChange,validators:["required","isPaletteUnique"],errorMessages:["palette name required","palette name already taken"]}),Object(S.jsxs)(ve.a,{children:[Object(S.jsx)(re.a,{onClick:a,color:"primary",children:"Cancel"}),Object(S.jsx)(re.a,{variant:"contained",color:"primary",type:"submit",children:"Save Palette"})]})]})]})})]})}}]),t}(o.Component)),we=400,Pe=function(e){return Object(te.a)({root:{display:"flex"},hide:{display:"none"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center"},appBarShift:{width:"calc(100% - ".concat(we,"px)"),marginLeft:we,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},navButtons:{marginRight:"1rem","& button":{margin:"0 0.5rem"},"& a":{textDecoration:"none"}}},"@media (max-width: 576px)",{root:{"& h6:after":{fontSize:"1rem"}},navButtons:{marginRight:"0.2rem","& button":{margin:"0 0.3rem",padding:"5px",fontSize:"0.8rem"}},menuButton:{marginLeft:6,marginRight:0}})},Ne=function(e){Object(u.a)(t,e);var a=Object(j.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=a.call(this,e)).showForm=function(){o.setState({formShowing:!0})},o.hideForm=function(){o.setState({formShowing:!1})},o.state={formShowing:!1},o.handleChange=o.handleChange.bind(Object(h.a)(o)),o}return Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(te.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.open,o=e.palettes,n=e.savePalette;return Object(S.jsxs)("div",{className:a.root,children:[Object(S.jsx)(ue.a,{}),Object(S.jsxs)(je.a,{color:"default",position:"fixed",className:he()(a.appBar,Object(te.a)({},a.appBarShift,t)),children:[Object(S.jsxs)(be.a,{disableGutters:!t,children:[Object(S.jsx)(B.a,{color:"inherit","aria-label":"Open drawer",onClick:this.props.handleDrawerOpen,className:he()(a.menuButton,t&&a.hide),children:Object(S.jsx)(ge.a,{})}),Object(S.jsx)(pe.a,{variant:"h6",color:"inherit",noWrap:!0,children:"Create New Palette"})]}),Object(S.jsxs)("div",{className:a.navButtons,children:[Object(S.jsx)(l.b,{to:"/",children:Object(S.jsx)(re.a,{variant:"contained",color:"secondary",children:"Go Back"})}),Object(S.jsx)(re.a,{variant:"contained",color:"primary",onClick:this.showForm,children:"Save"}),this.state.formShowing&&Object(S.jsx)(ke,{palettes:o,savePalette:n,hideForm:this.hideForm})]})]})]})}}]),t}(o.Component),Fe=Object(Oe.a)(Pe,{withTheme:!0})(Ne),Be=t(486),De=t(483),Le=t(202),Ae=t.n(Le),Ee=t(203),Ie=t.n(Ee),Ge=t(201),Re={root:{width:"100%"},picker:{width:"100% !important",marginTop:"2rem"},addButton:{width:"100%",marginTop:" 1rem",padding:"0.5rem",fontSize:"1.2rem"},colorInput:{width:"100%",marginTop:"2rem",marginBottom:"1.4rem"}},Te=function(e){Object(u.a)(t,e);var a=Object(j.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=a.call(this,e)).state={currentColor:"#4AAAAA",newColorName:""},o.handleColorChange=o.handleColorChange.bind(Object(h.a)(o)),o.handleChange=o.handleChange.bind(Object(h.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(h.a)(o)),o}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;ye.ValidatorForm.addValidationRule("isColorNameUnique",(function(a){return e.props.colors.every((function(e){return e.name.toLowerCase()!==a.toLowerCase()}))})),ye.ValidatorForm.addValidationRule("isColorUnique",(function(a){return e.props.colors.every((function(a){return a.color!==e.state.currentColor}))}))}},{key:"handleColorChange",value:function(e){this.setState({currentColor:e.hex})}},{key:"handleChange",value:function(e){this.setState(Object(te.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e={color:this.state.currentColor,name:this.state.newColorName};this.props.addNewColor(e),this.setState({newColorName:""})}},{key:"render",value:function(){var e=this,a=this.props,t=a.isPaletteFull,o=a.classes,n=this.state,r=n.currentColor,c=n.newColorName,l=g()(this.state.currentColor).luminance()>=.3?"#333":"#eee";return Object(S.jsxs)("div",{className:o.root,children:[Object(S.jsx)(Ge.ChromePicker,{onChangeComplete:function(a){return e.handleColorChange(a)},color:r,className:o.picker}),Object(S.jsxs)(ye.ValidatorForm,{onSubmit:this.handleSubmit,instantValidate:!1,children:[Object(S.jsx)(ye.TextValidator,{value:c,name:"newColorName",variant:"filled",placeholder:"Color Name",onChange:this.handleChange,className:o.colorInput,validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["enter color name","colorname already taken","color already added"]}),Object(S.jsx)(re.a,{style:{background:t?"rgba(0, 0, 0, 0.26)":r,color:l},variant:"contained",type:"submit",disabled:t,className:o.addButton,children:t?"Palette Full":"Add Color"})]}),Object(S.jsx)(De.a,{})]})}}]),t}(o.Component),Me=Object(Oe.a)(Re)(Te),Ue=t(84),Ve=(t(422),{root:{backgroundColor:function(e){return e.color}},checkLuminance:{color:function(e){return g()(e.color).luminance()>=.3?"#333":"#eee"}}}),qe=Object(Ue.b)((function(e){return Object(S.jsx)("div",{className:"DraggableColorBox ".concat(e.classes.root),children:Object(S.jsxs)("div",{className:"box-content ".concat(e.classes.checkLuminance),children:[Object(S.jsx)("span",{children:e.name}),Object(S.jsx)(I.a,{onClick:e.removeColor,className:"delete-icon"})]})})})),ze=Object(x.a)(Ve)(qe),He=Object(Ue.a)((function(e){return Object(S.jsx)("div",{style:{height:"100%"},children:e.colors.map((function(a,t){return Object(S.jsx)(ze,{removeColor:function(){return e.removeColor(a.name)},index:t,color:a.color,name:a.name},a.name)}))})})),We=function(e){return{root:{display:"flex"},hide:{display:"none"},drawer:{width:we,flexShrink:0},drawerContent:{width:"90%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:"0 auto"},buttons:{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between","& button":{width:"49%"}},drawerPaper:{width:we,display:"flex",alignItems:"center"},drawerHeader:Object(i.a)(Object(i.a)({display:"flex",width:"100%",alignItems:"center",padding:"0 8px"},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400,height:"calc(100vh - 64px)",marginTop:"64px"},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}},Je=function(e){Object(u.a)(t,e);var a=Object(j.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=a.call(this,e)).handleDrawerOpen=function(){o.setState({open:!0})},o.handleDrawerClose=function(){o.setState({open:!1})},o.onSortEnd=function(e){var a=e.oldIndex,t=e.newIndex;o.setState((function(e){var o=e.colors;return{colors:Object(Ue.c)(o,a,t)}}))},o.state={open:!0,colors:Z[0].colors},o.addNewColor=o.addNewColor.bind(Object(h.a)(o)),o.handleChange=o.handleChange.bind(Object(h.a)(o)),o.savePalette=o.savePalette.bind(Object(h.a)(o)),o.removeColor=o.removeColor.bind(Object(h.a)(o)),o.clearColors=o.clearColors.bind(Object(h.a)(o)),o.addRandomColor=o.addRandomColor.bind(Object(h.a)(o)),o}return Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(te.a)({},e.target.name,e.target.value))}},{key:"addNewColor",value:function(e){this.setState({colors:[].concat(Object(s.a)(this.state.colors),[e]),newColorName:""})}},{key:"savePalette",value:function(e){var a=e.paletteName,t=e.emoji,o={paletteName:a,id:a.toLowerCase().replace(" ","-"),colors:this.state.colors,emoji:t};this.props.savePalette(o),this.props.history.push("/")}},{key:"removeColor",value:function(e){this.setState({colors:this.state.colors.filter((function(a){return a.name!==e}))})}},{key:"clearColors",value:function(){this.setState({colors:[]})}},{key:"addRandomColor",value:function(){for(var e,a,t=Z.map((function(e){return e.colors})).flat(),o=!0;o;)e=Math.floor(Math.random()*t.length),a=t[e],o=this.state.colors.some((function(e){return e.name===a.name}));this.setState({colors:[].concat(Object(s.a)(this.state.colors),[a])})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.theme,o=e.maxColors,n=e.palettes,r=this.state,c=r.open,l=r.colors,i=l.length>=o;return Object(S.jsxs)("div",{className:a.root,children:[Object(S.jsx)(Fe,{open:c,palettes:n,savePalette:this.savePalette,handleDrawerOpen:this.handleDrawerOpen}),Object(S.jsxs)(Be.a,{className:a.drawer,variant:"persistent",anchor:"left",open:c,classes:{paper:a.drawerPaper},children:[Object(S.jsx)("div",{className:a.drawerHeader,children:Object(S.jsx)(B.a,{onClick:this.handleDrawerClose,children:"ltr"===t.direction?Object(S.jsx)(Ae.a,{}):Object(S.jsx)(Ie.a,{})})}),Object(S.jsx)(De.a,{}),Object(S.jsxs)("div",{className:a.drawerContent,children:[Object(S.jsx)(pe.a,{variant:"h4",gutterBottom:!0,children:"Design Your Color"}),Object(S.jsxs)("div",{className:a.buttons,children:[Object(S.jsx)(re.a,{variant:"contained",color:"secondary",onClick:this.clearColors,children:"Clear Palette"}),Object(S.jsx)(re.a,{variant:"contained",color:"primary",onClick:this.addRandomColor,disabled:i,children:"Random Color"})]}),Object(S.jsx)(Me,{isPaletteFull:i,colors:l,addNewColor:this.addNewColor})]})]}),Object(S.jsx)("main",{className:he()(a.content,Object(te.a)({},a.contentShift,c)),children:Object(S.jsx)(He,{colors:l,removeColor:this.removeColor,axis:"xy",onSortEnd:this.onSortEnd,distance:20})})]})}}]),t}(n.a.Component);Je.defaultProps={maxColors:20};var Ye=Object(Oe.a)(We,{withTheme:!0})(Je),Ke=function(e){Object(u.a)(t,e);var a=Object(j.a)(t);function t(e){var o;Object(d.a)(this,t),o=a.call(this,e);var n=JSON.parse(window.localStorage.getItem("palettes"));return o.state={palettes:n||Z},o.findPalette=o.findPalette.bind(Object(h.a)(o)),o.savePalette=o.savePalette.bind(Object(h.a)(o)),o.deletePalette=o.deletePalette.bind(Object(h.a)(o)),o}return Object(m.a)(t,[{key:"findPalette",value:function(e){return this.state.palettes.find((function(a){return a.id===e}))}},{key:"savePalette",value:function(e){this.setState({palettes:[].concat(Object(s.a)(this.state.palettes),[e])},this.syncLocalStorage)}},{key:"deletePalette",value:function(e){this.setState((function(a){return{palettes:a.palettes.filter((function(a){return a.id!==e}))}}),this.syncLocalStorage)}},{key:"syncLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"render",value:function(){var e=this;return Object(S.jsx)("div",{children:Object(S.jsxs)(b.c,{children:[Object(S.jsx)(b.a,{exact:!0,path:"/palette/new",render:function(a){return Object(S.jsx)(Ye,Object(i.a)(Object(i.a)({savePalette:e.savePalette},a),{},{palettes:e.state.palettes}))}}),Object(S.jsx)(b.a,{exact:!0,path:"/",render:function(a){return Object(S.jsx)(se,Object(i.a)({palettes:e.state.palettes},a))}}),Object(S.jsx)(b.a,{exact:!0,path:"/palette/:id",render:function(a){return Object(S.jsx)(X,Object(i.a)({palette:v(e.findPalette(a.match.params.id)),deletePalette:e.deletePalette},a))}}),Object(S.jsx)(b.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return Object(S.jsx)(de,{colorId:a.match.params.colorId,palette:v(e.findPalette(a.match.params.paletteId))})}}),Object(S.jsx)(b.a,{render:function(a){return Object(S.jsx)(se,Object(i.a)({palettes:e.state.palettes},a))}})]})})}}]),t}(o.Component),_e=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,489)).then((function(a){var t=a.getCLS,o=a.getFID,n=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),o(e),n(e),r(e),c(e)}))};c.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(l.a,{children:Object(S.jsx)(Ke,{})})}),document.getElementById("root")),_e()}},[[423,1,2]]]);
//# sourceMappingURL=main.0e1f8da1.chunk.js.map