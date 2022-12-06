import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    const res = http.get('https://group4-static.s3.ap-southeast-1.amazonaws.com/index.html');
    sleep(1);
}
