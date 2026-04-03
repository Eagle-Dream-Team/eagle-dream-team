let emails = []
function sendemail(to, text) {
    emails.push(to + ' ' + text)
}

sendemail('test@emails.com', 'Hello')
sendemail('test1@emails.com', 'Hello1')
sendemail('test2@emails.com', 'Hello2')

console.log(emails)

