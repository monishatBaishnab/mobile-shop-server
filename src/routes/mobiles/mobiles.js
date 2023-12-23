const router = require('express').Router();
const Mobile = require('../../models/mobile')
router.get('/mobiles', async (req, res, next) => {
    try {
        const minP = req.query.minP;
        const maxP = req.query.maxP;
        const name = req.query.name;
        const type = req.query.type;
        const memory = req.query.memory;
        const processor = req.query.processor;
        const os = req.query.os;

        const filterObj = {};

        if (minP && maxP && minP != 'null' && maxP != 'null') {
            filterObj.price = { $gte: parseFloat(minP), $lte: parseFloat(maxP) };
        }
        if (name && name != 'null') {
            filterObj.name = name;
        }
        if (type && type != 'null') {
            filterObj.type = type;
        }
        if (memory && memory != 'null') {
            filterObj.memory = memory;
        }
        if (processor && processor != 'null') {
            filterObj.processor = processor;
        }
        if (os && os != 'null') {
            filterObj.os = os;
        }

        const finalResult = await Mobile.find(filterObj);
        res.send(finalResult);
    } catch (error) {
        next(error);
    }
})

router.post('/mobiles', async (req, res, next) => {
    try {
        const mobileData = new Mobile(req.body);
        const result = await mobileData.save();
        res.send(result);
    } catch (error) {
        next(error);
    }
})



module.exports = router;