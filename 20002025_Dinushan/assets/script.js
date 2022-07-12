
var links={
    'Instagram':'https://www.instagram.com/',
    'Facebook':'https://www.facebook.com/',
    'Twitter':'https://twitter.com/',
    'LinkedIn':'https://www.linkedin.com/',
}

function redirect(str)
{
    var url=links[str];
    window.location.href=url;
}