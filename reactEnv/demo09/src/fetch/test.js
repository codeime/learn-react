import 'whatwg-fetch';
import 'es6-promise';

export function getData() {
    /* 获取字符串 */
    var result = fetch('/api/1', {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });
    result.then(res => {
        return res.text()
    }).then(err => {
        console.log(err);
    });
    /* 获取json */
    var result1 = fetch('/api/2', {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });

    result1.then(res => {
        return res.json();
    }).then(err => {
        console.log(err);

    })
}

export function postData() {
    var result = fetch('/api/post', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json,text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'a=100&b=200'
    })
    result.then(res => {
        return res.json()
    }).then(err => {
        console.log(err);
    })
}