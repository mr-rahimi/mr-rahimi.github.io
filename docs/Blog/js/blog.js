$(document).ready(function () {

    /* ======= Highlight.js Plugin ======= */
    /* Ref: https://highlightjs.org/usage/ */
    $('p code').each(function (i, block) {
        hljs.highlightBlock(block);
    });

});
function daysPassed(dateString) {
    if (!dateString) return 0;

    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
    const today = new Date();
    const modelDate = new Date(dateString);

    // Calculate the difference in milliseconds
    const timeDiff = today.getTime() - modelDate.getTime();

    // Convert the difference to days and round down (whole days passed)
    return Math.floor(Math.abs(timeDiff) / oneDay);
}