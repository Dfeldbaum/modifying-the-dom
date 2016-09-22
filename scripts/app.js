window.onload = function(event) {
    console.log('fuck ya');

    var checkmark = "(insert checkbox here)";


    // get a list of elements with a tag
    var list = document.getElementsByTagName('li');
    var n  = list.length; // length of our list
    var paragraph = document.getElementById('target-for-text');
    var content = buildParagraph("I love waffles and maple syrup");
    var name = document.getElementById('name');
    // name.innerHTML = "I am the king of all that is awesome";
    var username = prompt('What is your name?');
    name.innerHTML = username;
    paragraph.innerHTML = content;

    // console.log(checkmark);
    // console.log(list);

    console.log(paragraph);
    console.log(content);

    for (var i = 0; i < n; i++) {
        list[i].innerHTML = list[i].innerHTML + checkmark;
    }

    // loop through the ordered list
    // add at the end of the innerHTML of each li
    // add <strong>wish I could has</strong>
    // loop in the reverse order

    for (var i = 0; i > n; i++) {
        list[i].innerHTML = list[i].innerHTML + checkmark;
    }

};

function buildParagraph(content) {
    var openTag = "<em><strong>";
    var closingTag = "</strong></em>";
    return openTag + content + closingTag;




}
