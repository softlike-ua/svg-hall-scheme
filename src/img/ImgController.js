const Img = require('./Img')

class ImgController {

    async getAll(req, res) {
        return res.send(await Img.find())
    }

    async getOne(req, res) {
        return res.send(await Img.findById(req.params.id));
    }

    async create(req, res) {
        try {
            const {data} = req.body
            await Img.create({...data})
            res.send({ok: 'dd'})
        } catch (e) {
            console.log(e.message)
            return res.status(500).send({'message': e.message})
        }
    }

    async update(req, res) {
        try {
            const {seat, id} = req.body
            console.log(seat, id)
            const img = await Img.findById(id).lean()
            console.log(img.seats)

            if (!img.seats?.length) {
                await Img.updateOne({_id: id}, {seats: [seat]})
                return res.send(await Img.findById(id))
            }


            let nSeats = []
            let exist = false
            for (let item of img.seats) {
                let entry = {...item}
                if (item?.id === seat.id) {
                    exist = true
                    entry = {...seat}
                }
                nSeats.push(entry)
            }

            if (!exist) {
                nSeats.push(seat)
            }
            await Img.updateOne({_id: id}, {seats: [...nSeats]})
            return res.send(await Img.findById(id))
        } catch (e) {
            console.log(e)
            return res.status(500).send({'message': e.message})
        }
    }

    async delete(req, res) {
        try {

        } catch (e) {

        }
    }
}

module.exports = new ImgController()