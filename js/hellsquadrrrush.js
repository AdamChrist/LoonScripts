const body = JSON.parse($response.body);

if (body.hasOwnProperty('IsPlayableAd')) {
    body.IsPlayableAd = false;
}

$done({body: JSON.stringify(body)});