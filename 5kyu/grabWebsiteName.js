/*Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"*/

/* 
P

R

E: const { assert } = require("chai");

describe("Sample test", () => {
  it("Should pass sample tests", () => {
    assert.equal(domainName("http://google.com"), "google");
    assert.equal(domainName("http://google.co.jp"), "google");
    assert.equal(domainName("www.xakep.ru"), "xakep");
    assert.equal(domainName("https://youtube.com"), "youtube");
  })  
})

P:
*/

function parseDomainName(url){
    return url.replace('http://','').replace('https://','').replace('www.','').split('.')[0]

}

console.log(parseDomainName('http://github.com/carbonfive/raygun'), 'github')
console.log(parseDomainName('http://www.zombie-bits.com'), 'zombie-bites')
console.log(parseDomainName('http://www.cnet.com'), 'cnet')