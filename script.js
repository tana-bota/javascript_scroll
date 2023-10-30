// JavaScript
//console.log('Hello world!');
//実行する機能
//交差しているときだけ
//const show = (entries, obs) => {
//entries.forEach((entry) => {
//  if (entry.isIntersecting){
//  const keyframes = {
//    opacity: [0, 1],
//    translate: ['200px 0',0]
//  }
// entry.target.animate(keyframes,600);
//一度表示されたら止める
// obs.unobserve(entry.target);
//   }
//   });
// }
//const observer = new IntersectionObserver(show);
//監視対象
//const images = document.querySelectorAll('.img');
//images.forEach(img =>{
// observer.observe(img);
//});
//監視機能の設置
//const observer = new IntersectionObserver(show);
//監視対象の指示
//observer.observe(document.querySelector('#img10'));

//オプション＋シフト＋fで段を整理

//一度表示したら動作を止める
const show = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
          const keyframes = {
            opacity: [0, 1],
            translate: ['200px 0',0]
          }
          entry.target.animate(keyframes,600);
    
          //一度表示されたら止める
          obs.unobserve(entry.target);
        }
      });
    }

const observer = new IntersectionObserver(show);
//監視対象
const images = document.querySelectorAll('.img01');
images.forEach(img => {
    observer.observe(img);
});

const show2 = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
          const keyframes = {
            opacity: [0, 1],
            translate: ['-200px 0',0]
          }
          entry.target.animate(keyframes,600);
    
          //一度表示されたら止める
          obs.unobserve(entry.target);
        }
      });
    }
const observer2 = new IntersectionObserver(show2);
observer2.observe(document.querySelector('.img02'));

const show3 = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
          const keyframes = {
            opacity: [0, 1],
            translate: ['0 200px',0]
          }
          entry.target.animate(keyframes,600);
    
          //一度表示されたら止める
          obs.unobserve(entry.target);
        }
      });
    }

const observer3 = new IntersectionObserver(show3);
observer3.observe(document.querySelector('.img03'));