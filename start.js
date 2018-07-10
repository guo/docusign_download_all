// 1. login to docusign and go to this page: https://app.docusign.com/documents?label=completed
// 2. copy and paste in chrome's console 
// 3. wait for the code to complete its job. (it may take a while depending on the number of you docs.)
// 4. see your downloaded files in default download folder.


// License: MIT
// Author: @guo


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

PAGE_LOAD_SPEED=2000

async function scrollToEnd() {
    // scroll to bottom
    for (var i=0;i<5;i++) {
        window.scrollTo(0,document.body.scrollHeight);
        await sleep(PAGE_LOAD_SPEED);
    }  
}

async function start() {
    await scrollToEnd();
    // get all documents
    all_links = $('.table_copy-line-1');
    // total number of documents
    n = all_links.length;
    for (var i=0;i<n;i++) {
        console.log(i);
        console.log($('.table_copy-line-1')[i].innerHTML);
        $('.table_copy-line-1')[i].click()
        await sleep(PAGE_LOAD_SPEED*2);

        $('a.btn-primary:contains("Download")')[0].click()
        await sleep(PAGE_LOAD_SPEED*2);
        window.history.back();
        await scrollToEnd();
    }
}

start();
