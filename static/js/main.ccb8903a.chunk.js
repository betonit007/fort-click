(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Astronaut",image:"http://www.stickpng.com/assets/thumbs/5b43b86ce99939b4572e32ad.png",guessed:"false"},{id:2,name:"Alpine Ace",image:"http://www.stickpng.com/assets/thumbs/5b43b903e99939b4572e32ae.png",guessed:"false"},{id:3,name:"Brite Gunner",image:"http://www.stickpng.com/assets/thumbs/5b43b918e99939b4572e32b1.png",guessed:"false"},{id:4,name:"Cuddle Team Leader",image:"https://d1u5p3l4wpay3k.cloudfront.net/fortnite_gamepedia/thumb/2/2b/BattleRoyaleSkin52.png/256px-BattleRoyaleSkin52.png?version=f2a2544d7ab6f6904fb5459042898698",guessed:"false"},{id:5,name:"Bullet Storm",image:"https://d1u5p3l4wpay3k.cloudfront.net/fortnite_gamepedia/thumb/a/a7/Chromium_Ramirez.png/384px-Chromium_Ramirez.png?version=1ecfeb36bba39cc23ce0d49254463637",guessed:"false"},{id:6,name:"Black Knight",image:"http://www.stickpng.com/assets/thumbs/5b43b7ede99939b4572e32a5.png",guessed:"false"},{id:7,name:"Shock Trooper",image:"https://d1u5p3l4wpay3k.cloudfront.net/fortnite_gamepedia/thumb/6/61/BandolierOutfit.png/384px-BandolierOutfit.png?version=7afd82de3057ed00597fd07d46143d56",guessed:"false"},{id:8,name:"Maven",image:"https://d1u5p3l4wpay3k.cloudfront.net/fortnite_gamepedia/thumb/a/a5/MavenSkin.png/384px-MavenSkin.png?version=0e8223de213c2df139f676e1ccc2a89b",guessed:"false"},{id:9,name:"Skull Trooper",image:"https://d1u5p3l4wpay3k.cloudfront.net/fortnite_gamepedia/thumb/3/36/Skull_trooper_jonesy_legendary_epic.png/384px-Skull_trooper_jonesy_legendary_epic.png?version=1884d434301fdb7bf8f0b5d0bf71dc89",guessed:"false"},{id:10,name:"Urban Assault Headhunter",image:"https://d1u5p3l4wpay3k.cloudfront.net/fortnite_gamepedia/thumb/5/57/Urban_assault_legendary_portrait.png/384px-Urban_assault_legendary_portrait.png?version=4b6904e954244d1deca532462df62f6a",guessed:"false"},{id:11,name:"Bunny Raider",image:"https://d1u5p3l4wpay3k.cloudfront.net/fortnite_gamepedia/thumb/2/28/Rabbit_Raider_Jonesy.png/384px-Rabbit_Raider_Jonesy.png?version=a434d3401cdfd78eeda3502c9d938f49",guessed:"false"},{id:12,name:"Ghoul Trooper",image:"http://www.pngnames.com/files/3/Fortnite-Game-Photo-Background.png",guessed:"false"}]},,,,,,,,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(3),o=a.n(r),i=a(4),c=a(5),d=a(7),l=a(6),m=a(8);a(15);var u=function(e){return n.a.createElement("div",{onClick:function(){return e.handleGuess(e.guessed,e.id)},className:"card"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image})),n.a.createElement("div",{className:"content"},n.a.createElement("strong",null,e.name)))};a(17);var g=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)};a(19);var p=function(e){return n.a.createElement("nav",{className:"navbar"},n.a.createElement("div",{id:"score"},"Your Score: ",e.score),n.a.createElement("div",{id:"logo"},n.a.createElement("img",{alt:"Fortnite Logo",src:e.logo})),n.a.createElement("div",{id:"hScore"},"High Score: ",e.highscore),n.a.createElement("p",{onClick:function(){return e.restartGame()},id:"restart"},"Restart Game"))},f=a(1),h=(a(21),function(e){function t(){var e,a;Object(i.a)(this,t);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).state={friends:f,score:0,highscore:0,logo:"https://static1.squarespace.com/static/5a1bcb0db7411ccec823b109/t/5bcd8429eef1a115dd9bffff/1540195379446/fortnite-mobile_logo.png"},a.handleGuess=function(e,t){!0===e?a.setState({logo:"https://steamuserimages-a.akamaihd.net/ugc/956348816575653701/7BA58E2CFF7A2CF3C8862718B4F60BB8D7E64B21/"}):"false"===e&&(f[t-1].guessed=!0,a.state.score===a.state.highscore&&11===a.state.score?a.setState({friends:f,score:a.state.score+1,highscore:a.state.highscore+1,logo:"https://cdn130.picsart.com/271007286019211.png?r240x240"}):11===a.state.score&&12===a.state.highscore?a.setState({friends:f,score:a.state.score+1,logo:"https://cdn130.picsart.com/271007286019211.png?r240x240"}):a.state.score===a.state.highscore?a.setState({friends:f,score:a.state.score+1,highscore:a.state.highscore+1}):a.setState({friends:f,score:a.state.score+1}))},a.restartGame=function(){a.state.friends.map(function(e){return e.guessed="false"}),a.setState({friends:f,score:0,logo:"https://static1.squarespace.com/static/5a1bcb0db7411ccec823b109/t/5bcd8429eef1a115dd9bffff/1540195379446/fortnite-mobile_logo.png"})},a.shuffle=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),s=[e[a],e[t]];e[t]=s[0],e[a]=s[1]}return e},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(g,null,n.a.createElement(p,{score:this.state.score,highscore:this.state.highscore,restartGame:this.restartGame,logo:this.state.logo}),this.shuffle(this.state.friends.map(function(t){return n.a.createElement(u,{handleGuess:e.handleGuess,restartGame:e.restartGame,guessed:t.guessed,id:t.id,key:t.id,name:t.name,image:t.image})})))}}]),t}(n.a.Component));a(23);o.a.render(n.a.createElement(h,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.ccb8903a.chunk.js.map