var URL = (function(){

	var o = function(){}
	o.prototype = 
	{
		get: function(string) {
            string = (string)? $('<a>',{href:string})[0] : $('<a>',{href:document.URL})[0]
            
            var u = {
                hash: {},
                hashRaw: string.hash,
                queryRaw: string.search,
                query: {},
                origin: string.origin,
                href: string.href,
                host: string.host,
                port: (string.port)? string.port : 80,
                protocol: string.protocol,
                hostname: string.hostname,
                pathname: string.pathname,
                access_url: string.origin+string.port+string.pathname,
                hashArray: []
            },
            url = (url === undefined) ? document.URL : url,
            isQuery = url.match(/.*?(?=\?)/) == null ? false : true;

	        if (u.queryRaw !== '') {
	            var uQuery = u.queryRaw.match(/\?(.*)/),
	                uQRaw = uQuery[0],
	                uQItem = uQuery[1];
	            $.each(uQItem.split('&'), function(a, b) {
	                var qName = b.match(/.*?(?=:)|.*?(?=\=)/);
	                var qVal = (b.match(/=(.*)/) !== null) ? b.match(/=(.*)/)[1] : undefined;
	                qName = Array.isArray(qName) == true ? qName[0] : qName;
	                u.query[qName] = qVal;
	            })

	        }
	        if (window.location.hash) {
	            var uHash = u.hashRaw.match(/\#(.*)/),
	                uHRaw = uHash[0];

	            u.hashData = uHash[1];
	            $.each(u.hashData.split('&'), function(a, b) {
	                if (b !== '' && b !== undefined && b !== null) {
	                    var hName = (b.match(/.*?(?=:)|.*?(?=\=)/) == null) ? b : b.match(/.*?(?=:)|.*?(?=\=)/);
	                    var hVal = (b.match(/=(.*)/) !== null) ? b.match(/=(.*)/)[1] : undefined;
	                    hName = Array.isArray(hName) == true ? hName[0] : hName;
	                    u.hash[hName] = hVal;
	                    u.hashArray.push(b)
	                }
	            })
	        }

	        return u;
        }
	}

	return new o();

})()