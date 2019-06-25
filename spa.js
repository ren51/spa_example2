class RSP {
    constructor() {
        this.comp = document.querySelector('#computer');
        this.judge = document.querySelector('#judge');
        this.user = document.querySelector('#user');

        let bs = document.querySelectorAll('button');
        for( let b of bs ) {
            b.addEventListener('click', (e) => {
                let my = e.srcElement.getAttribute('name');
                this.display( my );
                let jd = this.judgement( my );
                console.log( jd );
            });
        }
    }
    judgement( user, computer ) {
        let judgement = [
            [ "あいこ", "勝ち", "負け" ],
            [ "負け", "あいこ", "勝ち" ],
            [ "勝ち", "負け", "あいこ" ]
        ];
        return judgement[user][computer];
    }
    display( my ) {
        let rsp = [ "グー", "チョキ", "パー" ];
        let computer = Math.floor(Math.random() * 3);
        let judge = this.judgement( my, computer );
        this.comp.textContent = rsp[computer];
        this.judge.textContent = judge;
        this.user.textContent = rsp[my];
    }
}

window.addEventListener('load', () => {
    console.log("test");
   var test = new RSP();
   console.log("test1");
});