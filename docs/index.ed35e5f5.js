const t=[{url:"https://strangerthings-quotes.vercel.app/api/quotes",tvShow:"Stranger Things",quote:t=>t.at(0).quote,author:t=>t.at(0).author},{url:"https://api.breakingbadquotes.xyz/v1/quotes",tvShow:"Breaking Bad",quote:t=>t.at(0).quote,author:t=>t.at(0).author},{url:"https://lucifer-quotes.vercel.app/api/quotes",tvShow:"Lucifer",quote:t=>t.at(0).quote,author:t=>t.at(0).author},{url:"https://api.gameofthronesquotes.xyz/v1/random",tvShow:"GOT",quote:t=>t.sentence,author:t=>t.character.name}],e=function(t){return Promise.race([fetch(t),(e=10,new Promise((function(t,r){setTimeout((function(){r(new Error(`Request took too long! Timeout after ${e} seconds`))}),1e3*e)})))]).then((t=>{if(!t.ok)throw new Error(`${error}`);return t.json()}));var e};function r(){return t[Math.floor(Math.random()*t.length)].url}const n=document.getElementById("timerEl"),o=document.getElementById("quoteEl"),a=document.getElementById("typingAreaEl"),s=document.getElementById("charactersEl"),c=document.getElementById("secondsEl"),u=document.getElementById("quoteAuthor");let l,i,d,h;window.addEventListener("load",(t=>m(r())));const m=r=>{e(r).then((e=>{const n=t.findIndex((t=>t.url===r)),o=t[n].tvShow,a=t[n].author(e),s=t[n].quote(e);p(s,a,o)})).catch((t=>{console.log(t),o.innerText=`Oops, we have an error: ${t.message}.`}))},p=(t,e,r)=>{o.innerText="",t.split("").forEach((t=>{"’"===t&&(t="'"),"“"!==t&&"”"!==t||(t='"'),"…"!==t&&"..."!==t||(t=".");const e=`<span>${t}</span>`;o.insertAdjacentHTML("beforeend",e)})),u.innerText=`${e}, '${r}'`,a.value="",l&&clearInterval(l),l=v()};a.addEventListener("input",(()=>{const t=document.querySelectorAll("#quoteEl span"),e=a.value.split("");let n=!0;t.forEach(((t,r)=>{const o=e[r];o?o===t.innerText?(t.classList.add("correctStyle"),t.classList.remove("incorrectStyle")):(t.classList.remove("correctStyle"),t.classList.add("incorrectStyle"),n=!1):(t.classList.remove("correctStyle"),t.classList.remove("incorrectStyle"),n=!1)})),n&&((void 0===h||h>i)&&(h=i-1,d=e.length),c.innerText=h,s.innerText=d,m(r()))}));const v=()=>{function t(){const t=String(Math.trunc(i/60)).padStart(2,0),e=String(i%60).padStart(2,0);n.innerText=`${t}:${e}`,i++}i=0,t();return setInterval(t,1e3)};
//# sourceMappingURL=index.ed35e5f5.js.map