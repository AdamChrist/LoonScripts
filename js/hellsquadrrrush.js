const body = JSON.parse($response.body);

if (body.hasOwnProperty('IsPlayableAd')) {
    body.IsPlayableAd = true;
}

$done({body: JSON.stringify(body)});