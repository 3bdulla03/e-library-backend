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

const GetBookStatus = async (req, res) => {
    try {
        const { bookId } = req.params
        const userId =  req.user.id
        
        const readingStatus = await ReadingStatus.findOne ({ userId, bookId })
        
        if (!readingStatus) {
            return res.status(404).send({ msg: "No reading status found for this boook" })
        }
        
        res.send(readingStatus)
        
    } catch (error) {
        console.log(error)
        res.status(500).send({ status: 'Error',msg: ' Failed to get reading status' })
    }
}



module.exports = {
    SetReadingStatus,
    GetBookStatus
}
