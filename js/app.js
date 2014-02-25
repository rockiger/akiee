(function()
{
    main = function () {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/tomorrow_night_blue");
    editor.getSession().setMode("ace/mode/markdown");
    editor.getSession().setUseWrapMode(true);
    // editor.setupAce(_ace);
    }
    main();
})();