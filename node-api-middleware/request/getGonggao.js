/**
 * Create by ronli on 2019/3/12
 */

const axios = require('axios');

async function getGonggao() {
    const baseUrl = 'https://www.ayaron.work/portal/api/services/portal';
    const page = {
        pageNo: 1,
        pageSize: 4
    };
    const getGonggao = {
        method: 'post',
        url: baseUrl + '/publicationannouncement/pageLoad',
        data: {
            page: page,
            publishType: 2,
            status: 1
        }
    }
    const resultGonggao = await axios(getGonggao);

    console.log(2)
    return resultGonggao.data;
}

module.exports = getGonggao;