let pictures = ["https://i.imgur.com/Z0RpStwh.jpg",
"https://truth.bahamut.com.tw/s01/202005/70a2888028734f19618a8e9ad2420e6d.JPG",
"https://cool-style.pixfs.net/cool/2020/05/TPE-1024x576.png",
"https://i.imgur.com/cGeHAqI.jpg",
"https://truth.bahamut.com.tw/s01/202004/19737a23b5a4d8263059230c87084c1a.JPG"
];

$(document).ready(function(){
    $("input").click(function(){
        let numberOfListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("H1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src", pictures[randomChildNumber]);
    });
});
