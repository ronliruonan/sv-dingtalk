/**
 * Create by ronli on 2019/3/12
 */

const axios = require('axios');

async function getFawen() {
    const baseUrl = 'https://www.ayaron.work/portal/api/services/portal';
    const page = {
        pageNo: 1,
        pageSize: 4
    };
    const getFawen = {
        method: 'post',
        url: baseUrl + '/publicationannouncement/pageLoad',
        data: {
            page: page,
            publishType: 3,
            status: 1
        }
    };
    const resultFawen = await axios(getFawen);

    return resultFawen.data;
}

module.exports = getFawen;