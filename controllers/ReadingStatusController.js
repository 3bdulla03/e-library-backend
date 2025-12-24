const ReadingStatus = require('../models/readingStatus')

const SetReadingStatus = async (req, res) => {
    try {
        const { bookId, status } = req.body
        const userId = req.user.id  
        
        let readingStatus = await ReadingStatus.findOne({ userId, bookId })
        
        if (readingStatus) {
            readingStatus.status = status
            await readingStatus.save()
            return res.send({ msg: "Reading status updated", data: readingStatus })
        }
        
        readingStatus = await ReadingStatus.create({ userId, bookId, status })
        res.send({ msg: "Reading status created", data: readingStatus })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({ status: 'Error', msg: 'Failed to set reading status' })
    }
}



module.exports = {
    SetReadingStatus
}
