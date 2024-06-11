// A Users Email
// Daylen F

let gMail = {
    title: 'Gmail',
    mailboxes: [
        'Inbox',
        'Drafts',
        'Spam'
    ],
    emails: [
        {
            status: "draft",
            fname: 'NerdWallet', 
            message: "Way to stay on top of your on-time payments"
        },
        {
            status: "sent",
            fname: 'Amazon', 
            message: 'We found something you might like'
        },
        {
            status: "",
            fname: 'Full Stack 102', 
            message: 'Assignment Graded: Assignment: Checking Store Hours, Full Stack 102'
        },
    ],
    addDraft: function(emails) {
        gMail.emails.push(emails)
    }

}


console.log(gMail.mailboxes);

console.log(gMail.emails);

console.log(gMail.emails[1].message);

gMail.emails[2].status = 'sent';

console.log(gMail.emails[2]);

gMail.emails.push({status: 'draft', fname: 'Daylen', message: 'blank'})

console.log(gMail.emails[3])





