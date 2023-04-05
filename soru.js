function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
};

Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogruCevap
};

let sorular = [
    new Soru("1-Hangisi javaScript paket yönetim uygulamasıdır?", {a: "Node.js", b: "TypeScript", c: "Npm", d: "Nuget"}, "c"),
    new Soru("2-Hangisi Front-end kapsamında değerlendirilmez?", {a: "CSS", b: "HTML", c: "javaScript", d: "SQL"}, "d"),
    new Soru("3-Hangisi Back-end kapsamında değerlendirilir?", {a: "Node.js", b: "TypeScript", c: "Angular", d: "React"}, "a"),
    new Soru("4-Hangisi javaScript programlama dilini kullanmaz?", {a: "React", b: "Angular", c: "Vue", d: "Asp.net"}, "d")
];