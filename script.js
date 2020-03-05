var vector=[];
vector[0]=["\"Life's most persistent and urgent question is, What are you doing for others?\"<br><br>Martin Luther King, Jr."];
vector[1]=["\"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.\" <br><br> Marilyn Monroe"];
vector[2]=["\"Be yourself; everyone else is already taken.\" <br><br> Oscar Wilde"];
vector[3]=["\"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.\"<br><br> Albert Einstein"];
vector[4]=["\"A friend is someone who knows all about you and still loves you.\"<br><br> Elbert Hubbard"];
vector[5]=["\"Always forgive your enemies; nothing annoys them so much.\"<br><br> Oscar Wilde"];
vector[6]=["\"We accept the love we think we deserve.\"<br><br> Stephen Chbosky, The Perks of Being a Wallflower"];
vector[7]=["\"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.\"<br><br> Ralph Waldo Emerson"];
vector[8]=["\"Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.\"<br><br> H. Jackson Brown Jr., P.S. I Love You"];
vector[9]=["\"It is better to be hated for what you are than to be loved for what you are not.\"<br><br> Andre Gide, Autumn Leaves"];
vector[10]=["\"The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.\"<br><br> Jane Austen, Northanger Abbey"];
vector[11]=["\"It does not do to dwell on dreams and forget to live.\"<br><br> J.K. Rowling, Harry Potter and the Sorcerer's Stone"];
vector[12]=["\"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.\"<br><br> Albert Einstein"];
vector[13]=["\"Good friends, good books, and a sleepy conscience: this is the ideal life.\"<br><br> Mark Twain"];
vector[14]=["\"As he read, I fell in love the way you fall asleep: slowly, and then all at once.\"<br><br> John Green, The Fault in Our Stars"];
vector[15]=["\"The fool doth think he is wise, but the wise man knows himself to be a fool.\"<br><br> William Shakespeare, As You Like It"];
vector[16]=["\"We are all in the gutter, but some of us are looking at the stars.\"<br><br> Oscar Wilde, Lady Windermere's Fan"];



document.getElementById("generate").onclick = displayQuote;

var i=0;

function displayQuote() {
    document.getElementById("p1").innerHTML =vector[Math.floor(Math.random() * vector.length)]
}
